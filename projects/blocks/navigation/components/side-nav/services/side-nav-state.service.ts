import { computed, DestroyRef, inject, Injectable, signal, TemplateRef } from '@angular/core';
import { BX_I18N, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { filter, Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SIDE_NAV_ACTIVE_OPTIONS, SIDE_NAV_CURRENT_OPTIONS, SIDE_NAV_DEFAULTS } from '../constants/side-nav.constants';
import { INavigationItem } from '../../../interfaces/inavigation-item.interface';
import { INavigationTreeGroup } from '../../../interfaces/inavigation-tree-group.interface';
import { ISideNavConfig } from '../interfaces/iside-nav-config.interface';
import { ISideNavExpandRequest } from '../interfaces/iside-nav-expand-request.interface';
import { ISideNavItemContext } from '../interfaces/iside-nav-item-context.interface';
import { findNavigationPath, searchNavigation } from '../helpers/side-nav-search.helpers';
import { NavText } from '../../../types/navigation.types';

/** One instance per side-nav; coordinates browsing levels, search, and shared route state. */
@Injectable()
export class SideNavStateService {
  private readonly router = inject(Router);
  private readonly activeRoute = toSignal(this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)));
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly searchSelected = signal(false);
  public readonly levelId = `bx-side-nav-level-${uuidv4()}`;
  public readonly path = signal<readonly string[]>([]);
  public readonly section = signal<string | undefined>(undefined);
  public readonly backward = signal(false);
  public readonly inlineLevels = signal(true);
  public readonly submenuVisible = signal(false);
  public readonly expansionRequested = new Subject<ISideNavExpandRequest>();
  public readonly config = signal<ISideNavConfig>({});
  public readonly sourceGroups = signal<readonly INavigationTreeGroup[]>([]);
  public readonly query = signal('');
  public readonly itemTemplate = signal<TemplateRef<ISideNavItemContext> | undefined>(undefined);
  public readonly activated = new Subject<INavigationItem>();
  public readonly groups = computed(() => {
    this.i18n?.version?.();
    const resolveItems = (items: INavigationItem[]): INavigationItem[] =>
      items
        .filter((item) => item.visible && !item.data?.hidden)
        .map((item) => ({
          ...item,
          label: item.data?.label === undefined ? item.label : this.resolveNav(item.data.label),
          data: { ...item.data, keywords: item.data?.keywords?.map((term) => this.resolveNav(term)) },
          children: resolveItems(item.children ?? [])
        }));
    return this.sourceGroups().map((group) => ({ ...group, items: resolveItems(group.items) }));
  });

  /** Select the most specific visible route, rather than every matching URL prefix. */
  public readonly activeItem = computed(() => {
    this.activeRoute();
    return this.findActiveItem(this.groups().flatMap((group) => group.items));
  });

  public readonly activeIds = computed(() => {
    const item = this.activeItem();

    return new Set(item ? findNavigationPath(this.groups(), item.id) : []);
  });

  public readonly searchResult = computed(() => searchNavigation(this.groups(), this.query()));
  public readonly target = computed(() => (this.config().showSearchGuide !== false && !this.searchSelected() ? this.searchResult().target : undefined));
  public readonly currentGroup = computed(() => {
    const root = this.path()[0];

    return this.groups().find((group) => group.id === this.section() || group.items.some((item) => item.id === root));
  });

  public readonly trail = computed(() => {
    const trail: INavigationItem[] = [];
    let items = this.currentGroup()?.items ?? [];

    for (const id of this.path()) {
      const item = items.find((entry) => entry.id === id && !entry.data?.disabled);

      if (!item) break;
      trail.push(item);
      items = item.children ?? [];
    }

    return trail;
  });

  public readonly parent = computed(() => this.trail().at(-1));
  public readonly hasLevel = computed(() => !!this.parent() || !!(this.section() && this.currentGroup()));
  public readonly levelItems = computed(() => this.parent()?.children ?? (this.section() ? this.currentGroup()?.items : []) ?? []);
  public readonly levelKey = computed(() => JSON.stringify([this.section(), this.trail().map((item) => item.id)]));
  public readonly breadcrumb = computed(() =>
    this.parent()
      ? [
          this.currentGroup()?.title,
          ...this.trail()
            .slice(0, -1)
            .map((item) => item.label)
        ]
          .filter(Boolean)
          .join(' › ')
      : ''
  );

  public readonly text = computed(() => {
    this.i18n?.version?.();
    const config = this.config();
    return {
      ariaLabel: resolveText(config.ariaLabel ?? SIDE_NAV_DEFAULTS.ariaLabel, this.i18n),
      searchPlaceholder: resolveText(config.searchPlaceholder ?? SIDE_NAV_DEFAULTS.searchPlaceholder, this.i18n),
      searchLabel: resolveText(config.searchLabel ?? SIDE_NAV_DEFAULTS.searchLabel, this.i18n),
      clearSearchLabel: resolveText(config.clearSearchLabel ?? SIDE_NAV_DEFAULTS.clearSearchLabel, this.i18n),
      emptyText: resolveText(config.emptyText ?? SIDE_NAV_DEFAULTS.emptyText, this.i18n),
      openLabel: resolveText(config.openLabel ?? SIDE_NAV_DEFAULTS.openLabel, this.i18n),
      closeLabel: resolveText(config.closeLabel ?? SIDE_NAV_DEFAULTS.closeLabel, this.i18n),
      collapseLabel: resolveText(config.collapseLabel ?? SIDE_NAV_DEFAULTS.collapseLabel, this.i18n),
      expandLabel: resolveText(config.expandLabel ?? SIDE_NAV_DEFAULTS.expandLabel, this.i18n),
      submenuLabel: resolveText(config.submenuLabel ?? SIDE_NAV_DEFAULTS.submenuLabel, this.i18n),
      backLabel: resolveText(config.backLabel ?? SIDE_NAV_DEFAULTS.backLabel, this.i18n),
      pathLabel: resolveText(config.pathLabel ?? SIDE_NAV_DEFAULTS.pathLabel, this.i18n),
      resultLabel: resolveText(config.resultLabel ?? SIDE_NAV_DEFAULTS.resultLabel, this.i18n)
    };
  });

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.activated.complete();
      this.expansionRequested.complete();
    });
  }

  public isCurrent(item: INavigationItem): boolean {
    this.activeRoute();
    return !item.data?.disabled && this.router.isActive(item.route, SIDE_NAV_CURRENT_OPTIONS);
  }

  public search(query: string): void {
    this.searchSelected.set(false);
    this.query.set(query);
  }

  public enter(item: INavigationItem): void {
    if (item.data?.disabled || !item.children?.length) return;
    this.backward.set(false);
    this.query.set('');
    const path = findNavigationPath(this.groups(), item.id);
    const group = this.groups().find((entry) => entry.items.some((root) => root.id === path[0]));

    if (group?.id !== this.section()) this.section.set(undefined);
    this.path.set(path);
  }

  public enterSection(group: INavigationTreeGroup): void {
    this.backward.set(false);
    this.section.set(group.id);
    this.path.set([]);
  }

  public back(): void {
    this.backward.set(true);
    const path = this.trail().map((item) => item.id);

    if (path.length) this.path.set(path.slice(0, -1));
    else this.section.set(undefined);
  }

  public select(item: INavigationItem): void {
    if (item.data?.disabled) return;
    this.searchSelected.set(true);
    this.activated.next(item);
  }

  //#region Helpers
  private findActiveItem(items: INavigationItem[]): INavigationItem | undefined {
    let selected: INavigationItem | undefined;

    for (const item of items) {
      const child = this.findActiveItem(item.children ?? []);
      const own = !item.data?.disabled && this.router.isActive(item.route, SIDE_NAV_ACTIVE_OPTIONS) ? item : undefined;
      const candidate = child && (!own || this.routeSpecificity(child) >= this.routeSpecificity(own)) ? child : own;

      if (candidate && (!selected || this.routeSpecificity(candidate) > this.routeSpecificity(selected))) selected = candidate;
    }

    return selected;
  }

  private routeSpecificity(item: INavigationItem): number {
    return item.route.split(/[?#]/)[0].length;
  }

  private resolveNav(text: NavText): string {
    return resolveText(typeof text === 'function' ? text({ snapshot: undefined }) : text, this.i18n);
  }
  //#endregion
}
