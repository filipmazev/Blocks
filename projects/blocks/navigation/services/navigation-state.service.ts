import type { Signal, WritableSignal } from '@angular/core';

import { computed, DestroyRef, inject, Injectable, signal, TemplateRef } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

import { filter, Subject } from 'rxjs';

import type { INavigationSearchResult } from '@navigation/interfaces/inavigation-search-result.interface';
import type { INavigationStateServiceCurrentGroupState } from '@navigation/interfaces/inavigation-state-service-current-group-state.interface';
import type { INavigationStateServiceGroupsState } from '@navigation/interfaces/inavigation-state-service-groups-state.interface';
import type { INavigationStateServiceTextState } from '@navigation/interfaces/inavigation-state-service-text-state.interface';

import { BX_I18N, resolveText, uuidv4 } from '@filip.mazev/blocks/core';

import { NAVIGATION_ACTIVE_OPTIONS, NAVIGATION_CURRENT_OPTIONS, NAVIGATION_VIEW_DEFAULTS } from '@navigation/constants/navigation-view.constants';
import { findNavigationPath, searchNavigation } from '@navigation/helpers/navigation-search.helpers';
import { INavigationExpandRequest } from '@navigation/interfaces/inavigation-expand-request.interface';
import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';
import { INavigationItemContext } from '@navigation/interfaces/inavigation-item-context.interface';
import { INavigationLevelBreadcrumb } from '@navigation/interfaces/inavigation-level-breadcrumb.interface';
import { INavigationTreeGroup } from '@navigation/interfaces/inavigation-tree-group.interface';
import { INavigationViewConfig } from '@navigation/interfaces/inavigation-view-config.interface';
import { NavText } from '@navigation/types/navigation.types';

/** One instance per navigation view; coordinates browsing levels, search, and shared route state. */
@Injectable()
export class NavigationStateService {
  private readonly router = inject(Router);
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly activeRoute: Signal<NavigationEnd | undefined> = toSignal(
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
  );

  /** Stable identifier of the current submenu level for accessible control relationships. */
  public readonly levelId: string = `bx-navigation-level-${uuidv4()}`;

  /** Ordered item IDs describing the currently browsed navigation branch. Initially an empty array. */
  public readonly path: WritableSignal<readonly string[]> = signal<readonly string[]>([]);
  /** Identifier of the navigation section currently being browsed, if any. */
  public readonly section: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  /** Whether the current navigation-level transition moves toward an ancestor. Initially `false`. */
  public readonly backward: WritableSignal<boolean> = signal(false);
  /** Whether nested navigation levels render inside their owner. Side navigation uses true; top navigation sets false for its shared panel. */
  public readonly inlineLevels: WritableSignal<boolean> = signal(true);
  /** Whether the coordinated submenu overlay is currently visible. Initially `false`. */
  public readonly submenuVisible: WritableSignal<boolean> = signal(false);

  /** Emits the target item, origin, and interaction context needed to browse a child level. */
  public readonly expansionRequested: Subject<INavigationExpandRequest> = new Subject<INavigationExpandRequest>();

  /** Current resolved navigation configuration shared by the navigation rows and level view. Initially an empty configuration. */
  public readonly config: WritableSignal<INavigationViewConfig> = signal<INavigationViewConfig>({});
  /** Application-provided navigation tree before display/search state is derived. Initially an empty array. */
  public readonly sourceGroups: WritableSignal<readonly INavigationTreeGroup[]> = signal<readonly INavigationTreeGroup[]>([]);

  /** Current navigation search text. Initially `''`. */
  public readonly query: WritableSignal<string> = signal('');

  /** Optional presentation template for navigation labels; native route and disclosure semantics remain with the owner. */
  public readonly itemTemplate: WritableSignal<TemplateRef<INavigationItemContext> | undefined> = signal<TemplateRef<INavigationItemContext> | undefined>(
    undefined
  );

  /** Emits the navigation item selected through the shared browsing state. */
  public readonly activated: Subject<INavigationItem> = new Subject<INavigationItem>();

  /** Item to reveal after rendering, including search selections and entries used to open child levels. Initially undefined. */
  public readonly revealItemId: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  /** Navigation sections after translating presentation and resolving the current source tree. */
  public readonly groups: Signal<INavigationStateServiceGroupsState[]> = computed(() => {
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
  public readonly activeItem: Signal<INavigationItem | undefined> = computed(() => {
    this.activeRoute();

    return this.findActiveItem(this.groups().flatMap((group) => group.items));
  });
  /** IDs of the most-specific active route and the active context required by the navigation view. */
  public readonly activeIds: Signal<Set<string>> = computed(() => {
    const item = this.activeItem();

    return new Set(item ? findNavigationPath(this.groups(), item.id) : []);
  });
  /** Ranked direct search matches with the contextual paths needed for presentation. */
  public readonly searchResult: Signal<INavigationSearchResult> = computed(() => searchNavigation(this.groups(), this.query()));
  /** Section currently associated with the active browsing level, when present. */
  public readonly currentGroup: Signal<INavigationStateServiceCurrentGroupState | undefined> = computed(() => {
    const root = this.path()[0];

    return this.groups().find((group) => group.id === this.section() || group.items.some((item) => item.id === root));
  });
  /** Ordered parent items along the currently browsed path. */
  public readonly trail: Signal<INavigationItem[]> = computed(() => {
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
  /** Parent item of the currently browsed navigation level, when present. */
  public readonly parent: Signal<INavigationItem | undefined> = computed(() => this.trail().at(-1));
  /** Whether the current browsing state contains a nested level. */
  public readonly hasLevel: Signal<boolean> = computed(() => !!this.parent() || !!(this.section() && this.currentGroup()));
  /** Items displayed in the current browsing level. */
  public readonly levelItems: Signal<INavigationItem[]> = computed(() => this.parent()?.children ?? (this.section() ? this.currentGroup()?.items : []) ?? []);
  /** Stable key for the displayed navigation level, used when preserving focus and scroll position. */
  public readonly levelKey: Signal<string> = computed(() => JSON.stringify([this.section(), this.trail().map((item) => item.id)]));
  /** Browsing ancestors; the first section-labelled action returns to the full root unless that section's own list was explicitly entered. */
  public readonly breadcrumbs: Signal<readonly INavigationLevelBreadcrumb[]> = computed<readonly INavigationLevelBreadcrumb[]>(() => {
    if (!this.parent()) return [];

    const group = this.currentGroup();
    const trail = this.trail();
    const section = this.section();
    const ancestors = trail.slice(0, -1).map((item, index) => ({
      label: item.label,
      path: trail.slice(0, index + 1).map((ancestor) => ancestor.id),
      section
    }));

    return group?.title ? [{ label: group.title, path: [], section }, ...ancestors] : ancestors;
  });
  /** Resolved navigation action names and status text, updated when configuration or the translation version changes. */
  public readonly text: Signal<INavigationStateServiceTextState> = computed(() => {
    this.i18n?.version?.();

    const config = this.config();

    return {
      ariaLabel: resolveText(config.ariaLabel ?? NAVIGATION_VIEW_DEFAULTS.ariaLabel, this.i18n),
      searchPlaceholder: resolveText(config.searchPlaceholder ?? NAVIGATION_VIEW_DEFAULTS.searchPlaceholder, this.i18n),
      searchLabel: resolveText(config.searchLabel ?? NAVIGATION_VIEW_DEFAULTS.searchLabel, this.i18n),
      clearSearchLabel: resolveText(config.clearSearchLabel ?? NAVIGATION_VIEW_DEFAULTS.clearSearchLabel, this.i18n),
      emptyText: resolveText(config.emptyText ?? NAVIGATION_VIEW_DEFAULTS.emptyText, this.i18n),
      openLabel: resolveText(config.openLabel ?? NAVIGATION_VIEW_DEFAULTS.openLabel, this.i18n),
      closeLabel: resolveText(config.closeLabel ?? NAVIGATION_VIEW_DEFAULTS.closeLabel, this.i18n),
      collapseLabel: resolveText(config.collapseLabel ?? NAVIGATION_VIEW_DEFAULTS.collapseLabel, this.i18n),
      expandLabel: resolveText(config.expandLabel ?? NAVIGATION_VIEW_DEFAULTS.expandLabel, this.i18n),
      submenuLabel: resolveText(config.submenuLabel ?? NAVIGATION_VIEW_DEFAULTS.submenuLabel, this.i18n),
      backLabel: resolveText(config.backLabel ?? NAVIGATION_VIEW_DEFAULTS.backLabel, this.i18n),
      pathLabel: resolveText(config.pathLabel ?? NAVIGATION_VIEW_DEFAULTS.pathLabel, this.i18n),
      resultLabel: resolveText(config.resultLabel ?? NAVIGATION_VIEW_DEFAULTS.resultLabel, this.i18n)
    };
  });

  private searchSelectionId?: string;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.activated.complete();
      this.expansionRequested.complete();
    });
  }

  /**
   * Return whether an item is the most-specific active navigation route.
   *
   * @param item - Navigation item whose route identity should be compared with the active item.
   */
  public isCurrent(item: INavigationItem): boolean {
    this.activeRoute();

    return !item.data?.disabled && this.router.isActive(item.route, NAVIGATION_CURRENT_OPTIONS);
  }

  /**
   * Update the navigation query and preserve the browsing context needed when search is cleared.
   *
   * @param query - Search text to apply to the currently supplied navigation tree.
   */
  public search(query: string): void {
    const wasSearching = !!this.query().trim();
    const searching = !!query.trim();

    if (wasSearching && !searching) this.revealSearchSelection();

    if (!wasSearching || !searching) this.searchSelectionId = undefined;

    if (searching) this.revealItemId.set(undefined);

    this.query.set(query);
  }

  /**
   * Enter the child level of a navigation item and preserve the branch context.
   *
   * @param item - Parent navigation item whose children should be browsed.
   */
  public enter(item: INavigationItem): void {
    if (item.data?.disabled || !item.children?.length) return;

    this.backward.set(false);
    this.revealItemId.set(undefined);
    this.searchSelectionId = undefined;
    this.query.set('');

    const path = findNavigationPath(this.groups(), item.id);
    const group = this.groups().find((entry) => entry.items.some((root) => root.id === path[0]));

    if (group?.id !== this.section()) this.section.set(undefined);

    this.path.set(path);
  }

  /**
   * Enter a section's root browsing level.
   *
   * @param group - Navigation section to browse.
   */
  public enterSection(group: INavigationTreeGroup): void {
    this.backward.set(false);
    this.revealItemId.set(undefined);
    this.section.set(group.id);
    this.path.set([]);
  }

  /** Return one browsing level toward the section root while retaining restoration context. */
  public back(): void {
    this.backward.set(true);
    this.revealItemId.set(undefined);

    const path = this.trail().map((item) => item.id);

    if (path.length) this.path.set(path.slice(0, -1));
    else this.section.set(undefined);
  }

  /**
   * Browse an ancestor level and reveal the item used to enter its child branch.
   *
   * @param breadcrumb - Ancestor breadcrumb identifying the target browsing path.
   */
  public navigateLevel(breadcrumb: INavigationLevelBreadcrumb): void {
    const revealItemId = this.trail()[breadcrumb.path.length]?.id;

    this.backward.set(true);
    this.revealItemId.set(revealItemId);
    this.section.set(breadcrumb.section);
    this.path.set(breadcrumb.path);
  }

  /**
   * Publish activation of an enabled item and remember successful selection during search.
   *
   * @param item - Navigation item requested by the user; disabled items are ignored.
   */
  public select(item: INavigationItem): void {
    if (item.data?.disabled) return;

    if (this.query().trim()) this.searchSelectionId = item.id;

    this.activated.next(item);
  }

  //#region Helpers

  private revealSearchSelection(): void {
    const id = this.searchSelectionId;

    // A cancelled navigation or a link opened in another tab must not change the browsing scope.
    if (!id || !this.activeIds().has(id)) return;

    const path = findNavigationPath(this.groups(), id);

    if (!path.length) return;

    this.backward.set(false);
    this.section.set(undefined);
    this.path.set(path.slice(0, -1));
    this.revealItemId.set(id);
  }

  private findActiveItem(items: INavigationItem[]): INavigationItem | undefined {
    let selected: INavigationItem | undefined;

    for (const item of items) {
      const child = this.findActiveItem(item.children ?? []);
      const own = !item.data?.disabled && this.router.isActive(item.route, NAVIGATION_ACTIVE_OPTIONS) ? item : undefined;
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
