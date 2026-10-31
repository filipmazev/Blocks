import { NgTemplateOutlet } from '@angular/common';
import { A11yModule, CdkTrapFocus, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { FormsModule } from '@angular/forms';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  model,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BxA11yService, ScrollLockService, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks/core';
import { Button, SearchInput } from '@filip.mazev/blocks/forms';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { MenuTriggerDirective, MenuCascadeService, navigateMenuKey } from '@filip.mazev/blocks/primitives';
import { INavigationItem } from '../../interfaces/inavigation-item.interface';
import { INavigationTreeGroup } from '../../interfaces/inavigation-tree-group.interface';
import { NAVIGATION_CONFIG } from '../../tokens/navigation-config.token';
import { NavigationService } from '../../services/navigation.service';
import { ISideNavConfig } from './interfaces/iside-nav-config.interface';
import { ISideNavSlotContext } from './interfaces/iside-nav-slot-context.interface';
import { ISideNavItemContext } from './interfaces/iside-nav-item-context.interface';
import { ISideNavLayout } from './interfaces/iside-nav-layout.interface';
import { ISideNavSavedState } from './interfaces/iside-nav-saved-state.interface';
import { NavigationStateService } from '../shared/services/navigation-state.service';
import { NavigationItem } from '../shared/navigation-item/navigation-item';
import { definedNavigationConfig } from '../shared/helpers/navigation-config.helpers';
import { INavigationExpandRequest } from '../shared/interfaces/inavigation-expand-request.interface';
import { NavigationFocusService } from '../shared/services/navigation-focus.service';
import { NavigationLevel } from '../shared/navigation-level/navigation-level';
import { INavigationLevelRequest } from '../shared/interfaces/inavigation-level-request.interface';
import { SIDE_NAV_DEFAULTS } from './constants/side-nav.constants';

@Component({
  selector: 'bx-side-nav',
  exportAs: 'bxSideNav',
  imports: [NgTemplateOutlet, A11yModule, FormsModule, SearchInput, Button, BxSurfaceDirective, Icon, NavigationItem, NavigationLevel, MenuTriggerDirective],
  providers: [NavigationStateService, NavigationFocusService],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-mobile]': 'isMobile()',
    '[class.is-collapsed]': 'isCollapsed()',
    '[class.is-right]': 'resolvedConfig().side === "right"',
    '[class.is-inline]': 'resolvedConfig().position === "inline"',
    '[class.is-animated]': '!reducedMotion()',
    '[class.is-drawer-animated]': 'drawerAnimated() && !reducedMotion()',
    '[style.--bx-side-nav-width]': 'resolvedConfig().width',
    '[style.--bx-side-nav-collapsed-width]': 'resolvedConfig().collapsedWidth'
  }
})
export class SideNav {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dimensions = inject(WindowDimensionsService);
  private readonly navigation = inject(NavigationService);
  private readonly defaults = inject(NAVIGATION_CONFIG, { optional: true });
  private readonly scrollLock = inject(ScrollLockService);
  private readonly cascade = inject(MenuCascadeService);
  private readonly a11y = inject(BxA11yService);
  private readonly injector = inject(Injector);
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly toggleElement = viewChild('mobileToggle', { read: ElementRef<HTMLButtonElement> });
  private readonly submenu = viewChild<MenuTriggerDirective>('submenuTrigger');
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly searchInput = viewChild(SearchInput);
  private readonly focusTrap = viewChild(CdkTrapFocus);
  private readonly availableWidth = signal<number | undefined>(undefined);
  private readonly flyoutOrigin = signal<HTMLElement | undefined>(undefined);
  private readonly saved = signal<ISideNavSavedState>({ sections: {} });
  private readonly loadedKey = signal<string | undefined>(undefined);
  private readonly lockId = uuidv4();
  private readonly presentation = computed(() => `${this.isMobile()}:${this.resolvedConfig().position}:${this.resolvedConfig().side}`);
  protected readonly drawerAnimated = signal(false);
  protected readonly state = inject(NavigationStateService);
  protected readonly id = `bx-side-nav-${this.lockId}`;
  protected readonly headerTemplate = signal<TemplateRef<ISideNavSlotContext> | null>(null);
  protected readonly footerTemplate = signal<TemplateRef<ISideNavSlotContext> | null>(null);
  protected readonly reducedMotion = this.a11y.isReducedMotion;
  protected readonly visibleGroups = this.state.groups;
  protected readonly focusState = inject(NavigationFocusService);
  protected readonly slotContext = computed<ISideNavSlotContext>(() => ({
    $implicit: this.isCollapsed(),
    collapsed: this.isCollapsed(),
    mobile: this.isMobile()
  }));

  /** Stable drawer ID for an application-owned trigger's aria-controls. */
  public readonly panelId = this.id;
  public readonly config = input<ISideNavConfig>({});
  /** Omit to use NavigationService's hierarchical route sections. */
  public readonly groups = input<readonly INavigationTreeGroup[] | undefined>(undefined);
  /** Optional presentation template; routing and menu semantics remain on the component's surrounding control. */
  public readonly itemTemplate = input<TemplateRef<ISideNavItemContext> | undefined>(undefined);
  /** Optional controlled desktop state. Without a binding, persisted state and configuration determine the initial value. */
  public readonly collapsed = input<boolean | undefined>(undefined);
  public readonly collapsedChange = output<boolean>();
  public readonly mobileOpen = model(false);
  public readonly itemSelected = output<INavigationItem>();
  public readonly layoutChange = output<ISideNavLayout>();
  public readonly resolvedConfig = computed(() => ({
    ...SIDE_NAV_DEFAULTS,
    ...definedNavigationConfig(this.defaults?.sideNav),
    ...definedNavigationConfig(this.config())
  }));

  public readonly isMobile = computed(
    () => this.resolvedConfig().mobile ?? this.dimensions.dimensions().width <= this.dimensions.breakpoints[this.resolvedConfig().mobileBreakpoint]
  );

  public readonly isCollapsed = computed(
    () =>
      !this.isMobile() &&
      !this.state.query().trim() &&
      !(this.isInlineSubmenus() && this.state.hasLevel()) &&
      (this.collapsed() ?? this.saved().collapsed ?? this.resolvedConfig().collapsed)
  );

  /** Resolved submenu presentation, independent of the drawer breakpoint and nesting depth. */
  public readonly isInlineSubmenus = computed(() => {
    const config = this.resolvedConfig();

    if (this.isMobile() || config.submenuMode === 'inline') return true;
    if (config.submenuMode === 'flyout') return false;
    const viewport = this.dimensions.dimensions().width;
    const width = config.position === 'inline' ? Math.min(viewport, this.availableWidth() ?? viewport) : viewport;

    return width <= this.dimensions.breakpoints[config.submenuBreakpoint];
  });

  public readonly query = this.state.query.asReadonly();
  public readonly layout = computed<ISideNavLayout>(() => ({
    side: this.resolvedConfig().side,
    offset: this.isMobile() ? '0px' : this.isCollapsed() ? this.resolvedConfig().collapsedWidth : this.resolvedConfig().width,
    collapsed: this.isCollapsed(),
    mobile: this.isMobile(),
    open: !this.isMobile() || this.mobileOpen()
  }));

  private restoreFocus?: HTMLElement;
  private focusReturnOrigin: FocusOrigin = 'program';
  private focusRevision = 0;
  private renderRevision = 0;

  constructor() {
    effect(() => {
      this.state.config.set(this.resolvedConfig());
      this.state.sourceGroups.set(this.groups() ?? this.navigation.menuTreeGroups());
      this.state.itemTemplate.set(this.itemTemplate());
    });
    effect(() => {
      const key = this.resolvedConfig().persistenceKey;
      untracked(() => {
        this.saved.set(this.readSavedState(key));
        this.loadedKey.set(key);
      });
    });
    effect(() => {
      const key = this.resolvedConfig().persistenceKey;
      const loaded = this.loadedKey();
      const saved = this.saved();
      const collapsed = this.collapsed() ?? saved.collapsed ?? this.resolvedConfig().collapsed;

      if (!key || loaded !== key || !this.document.defaultView) return;
      try {
        this.document.defaultView.localStorage.setItem(key, JSON.stringify({ collapsed, sections: saved.sections }));
      } catch {
        /* Storage may be unavailable. */
      }
    });
    effect(() => {
      const open = this.isMobile() && this.mobileOpen() && this.resolvedConfig().position !== 'inline';

      if (open) this.scrollLock.disableScroll(this.lockId, { handleTouchInput: false });
      else this.scrollLock.enableScroll(this.lockId);
    });
    effect((onCleanup) => {
      if (!this.isMobile() || !this.mobileOpen()) return;
      const capture = afterNextRender(
        () => {
          if (this.destroyRef.destroyed || !this.isMobile() || !this.mobileOpen()) return;
          if (this.state.revealItemId()) this.focusState.restore(true, false, false);
          // CDK's automatic capture scrolls clipped ancestors to an off-screen right drawer during its slide.
          this.focusTrap()?.focusTrap.focusInitialElement({ preventScroll: true });
        },
        { injector: this.injector }
      );
      onCleanup(() => capture.destroy());
    });
    effect(() => {
      this.presentation();

      untracked(() => {
        // Presentation changes establish the closed geometry before an explicit open animates it.
        this.drawerAnimated.set(false);
        this.cascade.closeAll();
        if (this.mobileOpen()) this.close();
      });
    });
    effect(() => {
      const inline = this.isInlineSubmenus();

      untracked(() => {
        const focused = this.dimensions.isBrowser ? this.document.activeElement : null;
        const focus = !!focused?.closest('.bx-nav-level');
        this.focusState.remember();
        this.state.inlineLevels.set(inline);
        this.submenu()?.close();
        if (this.state.hasLevel()) this.renderLevel(true, false, focus);
      });
    });
    effect(() => {
      const hasLevel = this.state.hasLevel();

      if (!hasLevel) untracked(() => this.submenu()?.close());
    });
    effect(() => this.layoutChange.emit(this.layout()));
    this.state.expansionRequested.pipe(takeUntilDestroyed()).subscribe((request) => this.openChildren(request));
    afterNextRender(() => {
      const view = this.document.defaultView;
      const parent = this.host.parentElement;

      if (!view?.ResizeObserver || !parent) return;
      this.availableWidth.set(parent.getBoundingClientRect().width);
      const observer = new view.ResizeObserver(([entry]) => this.availableWidth.set(entry.contentRect.width));
      observer.observe(parent);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
    this.state.activated.pipe(takeUntilDestroyed()).subscribe((item) => {
      ++this.renderRevision;
      this.itemSelected.emit(item);
      this.cascade.closeAll();
      if (this.isMobile()) this.close();
    });
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        ++this.renderRevision;
        this.cascade.closeAll();
        if (this.mobileOpen()) this.close();
      }
    });
    this.destroyRef.onDestroy(() => {
      this.scrollLock.enableScroll(this.lockId);
    });
  }

  public setHeaderTemplate(template: TemplateRef<ISideNavSlotContext> | null): void {
    this.headerTemplate.set(template);
  }

  public setFooterTemplate(template: TemplateRef<ISideNavSlotContext> | null): void {
    this.footerTemplate.set(template);
  }

  public toggle(origin?: HTMLElement | Event): void {
    if (this.mobileOpen()) this.close();
    else this.open(origin);
  }

  public open(origin?: HTMLElement | Event): void {
    const view = this.document.defaultView;

    if (!view || !this.isMobile() || this.mobileOpen()) return;

    const target = origin && 'currentTarget' in origin ? origin.currentTarget : origin;
    const opener = target instanceof view.HTMLElement ? target : undefined;
    const active = this.document.activeElement;
    const previous = active && active !== this.document.body && active !== this.document.documentElement ? (active as HTMLElement) : undefined;
    this.restoreFocus = opener ?? previous ?? this.toggleElement()?.nativeElement;
    this.focusReturnOrigin = this.restoreFocus?.matches(':focus-visible') ? 'keyboard' : 'program';
    ++this.focusRevision;

    // Establish a consistent capture target even when pointer activation does not focus native buttons.
    if (this.restoreFocus) this.focusMonitor.focusVia(this.restoreFocus, this.focusReturnOrigin, { preventScroll: true });

    this.drawerAnimated.set(true);
    this.mobileOpen.set(true);
  }

  public close(): void {
    if (!this.mobileOpen()) return;
    this.cascade.closeAll();
    const target = this.restoreFocus?.isConnected ? this.restoreFocus : this.toggleElement()?.nativeElement;
    const origin = this.focusReturnOrigin;
    const revision = ++this.focusRevision;
    this.restoreFocus = undefined;
    this.mobileOpen.set(false);

    afterNextRender(
      () => {
        if (!this.destroyRef.destroyed && revision === this.focusRevision && !this.mobileOpen() && target?.isConnected) {
          this.focusMonitor.focusVia(target, origin, { preventScroll: true });
        }
      },
      { injector: this.injector }
    );
  }

  public toggleCollapsed(): void {
    const next = !this.isCollapsed();

    if (next) {
      ++this.renderRevision;
      this.submenu()?.close();
      this.state.search('');
      this.state.path.set([]);
      this.state.section.set(undefined);
    }

    this.saved.update((saved) => ({ ...saved, collapsed: next }));
    this.collapsedChange.emit(next);
  }

  public search(query: string): void {
    const wasSearching = !!this.query().trim();

    if (!wasSearching) this.focusState.remember();
    this.submenu()?.close();
    this.state.search(query);
    const revealId = this.state.revealItemId();

    if (revealId) {
      this.flyoutOrigin.set(undefined);
      const group = this.state.currentGroup() ?? this.visibleGroups().find((entry) => entry.items.some((item) => item.id === revealId));

      if (group && this.sectionCollapsed(group)) this.saved.update((saved) => ({ ...saved, sections: { ...saved.sections, [group.id]: false } }));
    }

    this.renderLevel(wasSearching && !query.trim(), false, false);
  }

  protected expandSearch(): void {
    this.toggleCollapsed();
    afterNextRender(
      () => {
        if (this.destroyRef.destroyed || this.isCollapsed() || !this.resolvedConfig().searchable) return;
        this.searchInput()?.focus({ preventScroll: true });
      },
      { injector: this.injector }
    );
  }

  protected back(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.focusState.remember();
    this.state.back();
    this.renderLevel(true, event instanceof KeyboardEvent || event.detail === 0, true);
  }

  protected navigateLevel(request: INavigationLevelRequest): void {
    this.focusState.remember();
    this.state.navigateLevel(request.breadcrumb);
    this.renderLevel(true, request.keyboard, true);
  }

  protected openSection(group: INavigationTreeGroup, event: MouseEvent): void {
    const origin = event.currentTarget as HTMLElement;

    if (this.submenu()?.isOpen() && this.state.section() === group.id) {
      this.submenu()?.close();
      this.focusMonitor.focusVia(origin, event.detail === 0 ? 'keyboard' : 'program', { preventScroll: true });
      return;
    }

    this.focusState.remember(origin);
    this.submenu()?.close();
    this.flyoutOrigin.set(origin);
    this.state.enterSection(group);
    this.renderLevel(false, event.detail === 0, true);
  }

  protected closeFromControl(event: MouseEvent): void {
    this.focusReturnOrigin = event.detail === 0 ? 'keyboard' : 'program';
    this.close();
  }

  protected sectionActive(group: INavigationTreeGroup): boolean {
    return group.items.some((item) => this.state.activeIds().has(item.id));
  }

  protected sectionCollapsed(group: INavigationTreeGroup): boolean {
    return !this.isCollapsed() && !!group.collapsible && (this.saved().sections[group.id] ?? group.collapsed ?? false);
  }

  protected toggleSection(group: INavigationTreeGroup): void {
    if (!group.collapsible) return;
    const collapsed = !this.sectionCollapsed(group);
    this.saved.update((saved) => ({ ...saved, sections: { ...saved.sections, [group.id]: collapsed } }));
  }

  protected menuKey(event: KeyboardEvent): void {
    const menu = (event.target as HTMLElement)?.closest<HTMLElement>('[role="menu"]');

    if (menu) navigateMenuKey(event, menu);
  }

  protected panelKey(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.key !== 'Escape' || !this.mobileOpen() || this.cascade.hasOpenMenus()) return;
    event.preventDefault();
    event.stopPropagation();
    this.focusReturnOrigin = 'keyboard';
    this.close();
  }

  //#region Helpers
  private openChildren(request: INavigationExpandRequest): void {
    if (!request.inLevel && !this.query().trim() && this.submenu()?.isOpen() && this.state.path()[0] === request.item.id) {
      this.submenu()?.close();
      this.focusMonitor.focusVia(request.origin, request.keyboard ? 'keyboard' : 'program', { preventScroll: true });
      return;
    }

    this.focusState.remember(request.origin);

    if (!request.inLevel) {
      this.submenu()?.close();
      this.flyoutOrigin.set(request.origin.closest<HTMLElement>('.bx-nav-row') ?? request.origin);
    }

    this.state.enter(request.item);
    this.renderLevel(false, request.keyboard, true);
  }

  private renderLevel(restore: boolean, keyboard: boolean, focus: boolean): void {
    const revision = ++this.renderRevision;

    afterNextRender(
      () => {
        if (this.destroyRef.destroyed || revision !== this.renderRevision) return;
        const trigger = this.submenu();

        if (!this.query().trim() && this.state.hasLevel() && !this.isInlineSubmenus()) {
          const panel = this.panel()?.nativeElement;
          const root = Array.from(panel?.querySelectorAll<HTMLElement>('[data-nav-id]') ?? []).find(
            (row) => row.getAttribute('data-nav-id') === this.state.path()[0]
          );
          const origin = this.flyoutOrigin()?.isConnected ? this.flyoutOrigin() : (root ?? panel);
          trigger?.open(false, origin);
        } else trigger?.close();

        this.focusState.restore(restore, keyboard, focus);

        trigger?.reposition();
      },
      { injector: this.injector }
    );
  }

  private readSavedState(key: string | undefined): ISideNavSavedState {
    if (!key || !this.document.defaultView) return { sections: {} };
    try {
      const value: unknown = JSON.parse(this.document.defaultView.localStorage.getItem(key) ?? 'null');

      if (!value || typeof value !== 'object') return { sections: {} };
      const collapsed = 'collapsed' in value && typeof value.collapsed === 'boolean' ? value.collapsed : undefined;
      const raw = 'sections' in value && value.sections && typeof value.sections === 'object' ? value.sections : {};
      const sections = Object.fromEntries(Object.entries(raw).filter((entry): entry is [string, boolean] => typeof entry[1] === 'boolean'));
      return { collapsed, sections };
    } catch {
      return { sections: {} };
    }
  }
  //#endregion
}
