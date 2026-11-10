import type { InputSignal, ModelSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { A11yModule, CdkTrapFocus, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
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
  linkedSignal,
  model,
  NgZone,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

import type { ISideNavResolvedConfigState } from '@navigation/interfaces/iside-nav-resolved-config-state.interface';
import type { ISideNavVisibleGroupsState } from '@navigation/interfaces/iside-nav-visible-groups-state.interface';

import { BxA11yService, ScrollLockService, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button, SearchInput } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalBackdrop } from '@filip.mazev/blocks/modal';
import { MenuCascadeService, navigateMenuKey } from '@filip.mazev/blocks/primitives';

import { NavigationItem } from '@navigation/components/shared/navigation-item/navigation-item';
import { NavigationLevel } from '@navigation/components/shared/navigation-level/navigation-level';
import { SIDE_NAV_DEFAULTS } from '@navigation/constants/side-nav.constants';
import { definedNavigationConfig } from '@navigation/helpers/navigation-config.helpers';
import { INavigationExpandRequest } from '@navigation/interfaces/inavigation-expand-request.interface';
import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';
import { INavigationLevelRequest } from '@navigation/interfaces/inavigation-level-request.interface';
import { INavigationTreeGroup } from '@navigation/interfaces/inavigation-tree-group.interface';
import { ISideNavConfig } from '@navigation/interfaces/iside-nav-config.interface';
import { ISideNavItemContext } from '@navigation/interfaces/iside-nav-item-context.interface';
import { ISideNavLayout } from '@navigation/interfaces/iside-nav-layout.interface';
import { ISideNavSavedState } from '@navigation/interfaces/iside-nav-saved-state.interface';
import { ISideNavSlotContext } from '@navigation/interfaces/iside-nav-slot-context.interface';
import { NavigationService } from '@navigation/services/navigation.service';
import { NavigationFocusService } from '@navigation/services/navigation-focus.service';
import { NavigationStateService } from '@navigation/services/navigation-state.service';
import { NAVIGATION_CONFIG } from '@navigation/tokens/navigation-config.token';

@Component({
  selector: 'bx-side-nav',
  exportAs: 'bxSideNav',
  imports: [NgTemplateOutlet, A11yModule, FormsModule, SearchInput, Button, BxSurfaceDirective, Icon, NavigationItem, NavigationLevel, ModalBackdrop],
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
    '[class.is-expanding]': 'expanding()',
    '[class.is-drawer-animated]': 'drawerAnimated() && !reducedMotion()',
    '[style.--bx-side-nav-width]': 'resolvedConfig().width',
    '[style.--bx-side-nav-collapsed-width]': 'resolvedConfig().collapsedWidth',
    '[style.--bx-side-nav-scrollbar-gutter.px]': 'scrollbarGutter()'
  }
})
export class SideNav {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly windowDimensionsService = inject(WindowDimensionsService);
  private readonly navigationService = inject(NavigationService);
  private readonly defaults = inject(NAVIGATION_CONFIG, { optional: true });
  private readonly scrollLockService = inject(ScrollLockService);
  private readonly menuCascadeService = inject(MenuCascadeService);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly injector = inject(Injector);
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly ngZone = inject(NgZone);

  protected readonly navigationStateService = inject(NavigationStateService);
  protected readonly navigationFocusService = inject(NavigationFocusService);

  private readonly saved: WritableSignal<ISideNavSavedState> = signal<ISideNavSavedState>({ sections: {} });

  private readonly temporarilyExpanded: WritableSignal<boolean> = linkedSignal(() => {
    this.collapsedPreference();

    return false;
  });

  private readonly loadedKey: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  private readonly lockId: string = uuidv4();

  private readonly presentation: Signal<string> = computed(() => `${this.isMobile()}:${this.resolvedConfig().position}:${this.resolvedConfig().side}`);
  private readonly collapsedPreference: Signal<boolean> = computed(() => this.collapsed() ?? this.saved().collapsed ?? this.resolvedConfig().collapsed);

  private readonly toggleElement: Signal<ElementRef<HTMLElement> | undefined> = viewChild('mobileToggle', { read: ElementRef<HTMLButtonElement> });
  private readonly panelElement: Signal<ElementRef<HTMLElement> | undefined> = viewChild('panel', { read: ElementRef<HTMLElement> });
  private readonly headerContent: Signal<ElementRef<HTMLElement> | undefined> = viewChild('headerContent', { read: ElementRef<HTMLElement> });
  private readonly footerContent: Signal<ElementRef<HTMLElement> | undefined> = viewChild('footerContent', { read: ElementRef<HTMLElement> });
  private readonly searchInput: Signal<SearchInput | undefined> = viewChild(SearchInput);
  private readonly rootScroll: Signal<ElementRef<HTMLElement> | undefined> = viewChild('rootScroll', { read: ElementRef<HTMLElement> });
  private readonly navigationLevel: Signal<NavigationLevel | undefined> = viewChild(NavigationLevel);
  private readonly focusTrap: Signal<CdkTrapFocus | undefined> = viewChild(CdkTrapFocus);

  protected readonly drawerAnimated: WritableSignal<boolean> = signal(false);
  protected readonly expanding: WritableSignal<boolean> = signal(false);

  protected readonly scrollbarGutter: WritableSignal<number> = signal(0);

  protected readonly id: string = `bx-side-nav-${this.lockId}`;

  protected readonly headerTemplate: WritableSignal<TemplateRef<ISideNavSlotContext> | null> = signal<TemplateRef<ISideNavSlotContext> | null>(null);
  protected readonly footerTemplate: WritableSignal<TemplateRef<ISideNavSlotContext> | null> = signal<TemplateRef<ISideNavSlotContext> | null>(null);

  protected readonly reducedMotion: Signal<boolean> = this.bxA11yService.isReducedMotion;
  protected readonly visibleGroups: Signal<ISideNavVisibleGroupsState[]> = this.navigationStateService.groups;

  protected readonly slotContext: Signal<ISideNavSlotContext> = computed<ISideNavSlotContext>(() => ({
    $implicit: this.isCollapsed(),
    collapsed: this.isCollapsed(),
    mobile: this.isMobile()
  }));

  /** Stable drawer ID for an application-owned trigger's aria-controls. */
  public readonly panelId: string = this.id;

  /** Effective navigation settings after merging instance values, application defaults, and library defaults. */
  public readonly resolvedConfig: Signal<ISideNavResolvedConfigState> = computed(() => ({
    ...SIDE_NAV_DEFAULTS,
    ...definedNavigationConfig(this.defaults?.sideNav),
    ...definedNavigationConfig(this.config()),
    breadcrumbConfig: {
      ...definedNavigationConfig(this.defaults?.sideNav?.breadcrumbConfig),
      ...definedNavigationConfig(this.config().breadcrumbConfig)
    }
  }));
  /** Whether configuration or the shared mobile breakpoint selects drawer presentation. */
  public readonly isMobile: Signal<boolean> = computed(
    () =>
      this.resolvedConfig().mobile ??
      this.windowDimensionsService.dimensions().width <= this.windowDimensionsService.breakpoints[this.resolvedConfig().mobileBreakpoint]
  );
  /** Whether desktop navigation uses the collapsed rail; mobile and active inline/search presentation can expand it temporarily. */
  public readonly isCollapsed: Signal<boolean> = computed(
    () =>
      !this.isMobile() &&
      !this.navigationStateService.query().trim() &&
      !(this.navigationStateService.hasLevel() && this.temporarilyExpanded()) &&
      this.collapsedPreference()
  );

  /** Current navigation search text. */
  public readonly query: Signal<string> = this.navigationStateService.query.asReadonly();

  /** Resolved side-navigation layout for reserving desktop space and observing mobile open state. */
  public readonly layout: Signal<ISideNavLayout> = computed<ISideNavLayout>(() => ({
    side: this.resolvedConfig().side,
    offset: this.isMobile() ? '0px' : this.isCollapsed() ? this.resolvedConfig().collapsedWidth : this.resolvedConfig().width,
    collapsed: this.isCollapsed(),
    mobile: this.isMobile(),
    open: !this.isMobile() || this.mobileOpen()
  }));

  /** Instance side-navigation overrides; explicit values take precedence over application and library defaults. */
  public readonly config: InputSignal<ISideNavConfig> = input<ISideNavConfig>({});
  /** Omit to use NavigationService's hierarchical route sections. */
  public readonly groups: InputSignal<readonly INavigationTreeGroup[] | undefined> = input<readonly INavigationTreeGroup[] | undefined>(undefined);
  /** Optional presentation template; routing and menu semantics remain on the component's surrounding control. */
  public readonly itemTemplate: InputSignal<TemplateRef<ISideNavItemContext> | undefined> = input<TemplateRef<ISideNavItemContext> | undefined>(undefined);
  /** Optional controlled desktop state. Without a binding, persisted state and configuration determine the initial value. */
  public readonly collapsed: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

  /** Whether the mobile navigation drawer is open; supports controlled two-way state. Defaults to `false`. */
  public readonly mobileOpen: ModelSignal<boolean> = model(false);

  /** Emits the requested new desktop collapsed state. */
  public readonly collapsedChange: OutputEmitterRef<boolean> = output<boolean>();
  /** Emits the navigation item activated by the user. */
  public readonly itemSelected: OutputEmitterRef<INavigationItem> = output<INavigationItem>();
  /** Emits the resolved side, reserved width, mobile mode, and open state for application layout coordination. */
  public readonly layoutChange: OutputEmitterRef<ISideNavLayout> = output<ISideNavLayout>();

  private restoreFocus?: HTMLElement;
  private focusReturnOrigin: FocusOrigin = 'program';
  private focusRevision: number = 0;
  private renderRevision: number = 0;

  constructor() {
    afterRenderEffect((onCleanup) => {
      const element = this.rootScroll()?.nativeElement ?? this.navigationLevel()?.scrollElement()?.nativeElement;

      if (element) onCleanup(this.observeScrollbar(element));
    });
    afterRenderEffect((onCleanup) => {
      this.slotContext();

      const header = this.headerContent()?.nativeElement;
      const footer = this.footerContent()?.nativeElement;

      if (header?.parentElement) onCleanup(this.observeSlotAlignment(header, header.parentElement));

      if (footer) onCleanup(this.observeSlotAlignment(footer, footer));
    });

    let previouslyCollapsed: boolean | undefined;
    let previousPresentation: string | undefined;

    effect(() => {
      this.navigationStateService.config.set(this.resolvedConfig());
      this.navigationStateService.sourceGroups.set(this.groups() ?? this.navigationService.menuTreeGroups());
      this.navigationStateService.itemTemplate.set(this.itemTemplate());
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
    effect((onCleanup) => {
      const collapsed = this.isCollapsed();
      const mobile = this.isMobile();
      const reducedMotion = this.reducedMotion();
      const presentation = this.presentation();
      const expanding = previouslyCollapsed === true && previousPresentation === presentation && !collapsed && !mobile && !reducedMotion;
      const view = this.document.defaultView;

      previouslyCollapsed = collapsed;
      previousPresentation = presentation;
      this.expanding.set(expanding && !!view);

      if (!expanding || !view) return;

      let timeoutId: number | undefined;

      const render = afterNextRender(
        () => {
          const delay = this.resolveExpansionDelay();

          if (delay === 0) {
            this.expanding.set(false);

            return;
          }

          timeoutId = view.setTimeout(() => {
            if (!this.destroyRef.destroyed) this.expanding.set(false);
          }, delay);
        },
        { injector: this.injector }
      );

      onCleanup(() => {
        render.destroy();

        if (timeoutId !== undefined) view.clearTimeout(timeoutId);
      });
    });
    effect((onCleanup) => {
      if (!this.isMobile() || !this.mobileOpen() || this.resolvedConfig().position === 'inline') return;

      untracked(() => this.scrollLockService.disableScroll(this.lockId, { handleTouchInput: false }));
      onCleanup(() => this.scrollLockService.enableScroll(this.lockId));
    });
    effect((onCleanup) => {
      const panel = this.panelElement()?.nativeElement;
      const view = this.document.defaultView;

      if (!panel || !view || !this.isMobile() || !this.mobileOpen() || this.resolvedConfig().position === 'inline') return;

      const top = panel.style.top;
      const height = panel.style.height;

      this.ngZone.runOutsideAngular(() => {
        const update = () => {
          panel.style.top = '0px';
          panel.style.height = `${view.innerHeight}px`;
        };

        update();
        view.addEventListener('resize', update);
        view.addEventListener('pageshow', update);
        onCleanup(() => {
          view.removeEventListener('resize', update);
          view.removeEventListener('pageshow', update);
          panel.style.top = top;
          panel.style.height = height;
        });
      });
    });
    effect((onCleanup) => {
      if (!this.isMobile() || !this.mobileOpen()) return;

      const capture = afterNextRender(
        () => {
          if (this.destroyRef.destroyed || !this.isMobile() || !this.mobileOpen()) return;

          if (!this.query().trim() && this.navigationStateService.hasLevel()) {
            this.navigationFocusService.restore(true, false, true);

            return;
          }

          if (this.navigationStateService.revealItemId()) this.navigationFocusService.restore(true, false, false);

          this.focusTrap()?.focusTrap.focusInitialElement({ preventScroll: true });
        },
        { injector: this.injector }
      );

      onCleanup(() => capture.destroy());
    });
    effect(() => {
      this.presentation();

      untracked(() => {
        this.drawerAnimated.set(false);
        this.menuCascadeService.closeAll();

        if (this.mobileOpen()) this.close();
      });
    });

    effect(() => this.layoutChange.emit(this.layout()));

    this.navigationStateService.expansionRequested.pipe(takeUntilDestroyed()).subscribe((request) => this.openChildren(request));
    this.navigationStateService.activated.pipe(takeUntilDestroyed()).subscribe((item) => {
      ++this.renderRevision;

      if (this.isCollapsed()) {
        this.navigationStateService.path.set([]);
        this.navigationStateService.section.set(undefined);
        this.temporarilyExpanded.set(false);
      }

      this.itemSelected.emit(item);
      this.menuCascadeService.closeAll();

      if (this.isMobile()) this.close();
    });

    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        ++this.renderRevision;
        this.menuCascadeService.closeAll();

        if (this.mobileOpen()) this.close();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.scrollLockService.enableScroll(this.lockId);
    });
  }

  /**
   * Register the template used by the component's custom header slot.
   *
   * @param template - Header template to render; null clears an optional registered template.
   */
  public setHeaderTemplate(template: TemplateRef<ISideNavSlotContext> | null): void {
    this.headerTemplate.set(template);
  }

  /**
   * Register the template used by the component's custom footer slot.
   *
   * @param template - Footer template to render; null clears an optional registered template.
   */
  public setFooterTemplate(template: TemplateRef<ISideNavSlotContext> | null): void {
    this.footerTemplate.set(template);
  }

  /**
   * Toggle the component's open state through the same guards used by open() and close().
   *
   * @param origin - Opening element or interaction event used for focus restoration. Optional.
   */
  public toggle(origin?: HTMLElement | Event): void {
    if (this.mobileOpen()) this.close();
    else this.open(origin);
  }

  /**
   * Open the component's overlay using its current configuration and shared positioning/focus mechanisms.
   *
   * @param origin - Opening element or interaction event used for positioning or focus restoration. Optional.
   */
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

  /** Close the component's overlay and apply its configured focus-restoration behavior. */
  public close(): void {
    if (!this.mobileOpen()) return;

    this.menuCascadeService.closeAll();

    const target = this.restoreFocus?.isConnected ? this.restoreFocus : this.toggleElement()?.nativeElement;
    const origin = this.focusReturnOrigin;
    const revision = ++this.focusRevision;

    this.restoreFocus = undefined;
    this.mobileOpen.set(false);
    this.scrollLockService.enableScroll(this.lockId);

    afterNextRender(
      () => {
        if (!this.destroyRef.destroyed && revision === this.focusRevision && !this.mobileOpen() && target?.isConnected) {
          this.focusMonitor.focusVia(target, origin, { preventScroll: true });
        }
      },
      { injector: this.injector }
    );
  }

  /** Toggle the desktop rail, preserving the current browsing level and scroll position, and emit the requested collapsed preference. */
  public toggleCollapsed(): void {
    const next = !this.isCollapsed();

    this.navigationFocusService.remember();
    this.navigationStateService.search('');
    this.temporarilyExpanded.set(false);

    if (next) this.navigationStateService.revealItemId.set(this.navigationStateService.trail()[0]?.id);

    this.saved.update((saved) => ({ ...saved, collapsed: next }));
    this.collapsedChange.emit(next);
    this.renderLevel(true, false, false);
  }

  /**
   * Update the navigation query and preserve the browsing context needed when search is cleared.
   *
   * @param query - Search text to apply to the currently supplied navigation tree.
   */
  public search(query: string): void {
    const wasSearching = !!this.query().trim();

    if (!wasSearching) this.navigationFocusService.remember();

    this.navigationStateService.search(query);

    if (wasSearching && !query.trim() && this.navigationStateService.hasLevel()) this.temporarilyExpanded.set(true);

    this.expandRequestedItemSection();
    this.renderLevel(wasSearching && !query.trim(), false, false);
  }

  protected finishExpansion(event: TransitionEvent): void {
    if (event.target === event.currentTarget && event.propertyName === 'width') this.expanding.set(false);
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
    this.navigationFocusService.remember();
    this.navigationStateService.back();

    if (!this.navigationStateService.hasLevel()) this.temporarilyExpanded.set(false);

    this.renderLevel(true, event instanceof KeyboardEvent || event.detail === 0, true);
  }

  protected navigateLevel(request: INavigationLevelRequest): void {
    this.navigationFocusService.remember();
    this.navigationStateService.navigateLevel(request.breadcrumb);

    if (!this.navigationStateService.hasLevel()) {
      this.temporarilyExpanded.set(false);
      this.expandRequestedItemSection();
    }

    this.renderLevel(true, request.keyboard, true);
  }

  protected openSection(group: INavigationTreeGroup, event: MouseEvent): void {
    const origin = event.currentTarget as HTMLElement;

    this.navigationFocusService.remember(origin);

    if (this.isCollapsed()) this.temporarilyExpanded.set(true);

    this.navigationStateService.enterSection(group);
    this.renderLevel(false, event.detail === 0, true);
  }

  protected closeFromControl(event: MouseEvent): void {
    this.focusReturnOrigin = event.detail === 0 ? 'keyboard' : 'program';
    this.close();
  }

  protected sectionActive(group: INavigationTreeGroup): boolean {
    if (this.isCollapsed() && this.navigationStateService.hasLevel()) return this.navigationStateService.currentGroup()?.id === group.id;

    return group.items.some((item) => this.navigationStateService.activeIds().has(item.id));
  }

  protected sectionCollapsed(group: INavigationTreeGroup): boolean {
    return !!group.collapsible && (this.saved().sections[group.id] ?? group.collapsed ?? false);
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
    if (event.defaultPrevented || event.key !== 'Escape' || this.menuCascadeService.hasOpenMenus()) return;

    if (!this.isCollapsed() && !this.query().trim() && this.navigationStateService.hasLevel()) {
      this.back(event);

      return;
    }

    if (!this.mobileOpen()) return;

    event.preventDefault();
    event.stopPropagation();
    this.focusReturnOrigin = 'keyboard';
    this.close();
  }

  //#region Helpers

  private observeSlotAlignment(content: HTMLElement, container: HTMLElement): () => void {
    const view = this.document.defaultView;

    if (!view) return () => {};

    return this.ngZone.runOutsideAngular(() => {
      let leading: Element | undefined;

      const measure = (): void => {
        if (this.destroyRef.destroyed || !content.isConnected) return;

        const target = this.resolveSlotLeadingElement(content);

        if (target !== leading) {
          if (leading) resize?.unobserve(leading);

          leading = target;

          if (leading) resize?.observe(leading);
        }

        if (!leading) {
          container.style.removeProperty('--bx-side-nav-slot-padding-inline-start');

          return;
        }

        const bounds = leading.getBoundingClientRect();

        if (bounds.width === 0 || bounds.height === 0) return;

        const style = view.getComputedStyle(container);
        const containerBounds = container.getBoundingClientRect();
        const center = (bounds.left + bounds.right) / 2;
        const inset = style.direction === 'rtl' ? containerBounds.right - center : center - containerBounds.left;
        const leadingInset = inset - (parseFloat(style.paddingInlineStart) || 0) - (parseFloat(style.borderInlineStartWidth) || 0);
        const padding = `max(0px, calc(var(--bx-side-nav-icon-center) - ${Math.round(leadingInset * 100) / 100}px))`;

        if (container.style.getPropertyValue('--bx-side-nav-slot-padding-inline-start') !== padding) {
          container.style.setProperty('--bx-side-nav-slot-padding-inline-start', padding);
        }
      };

      const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);
      const mutations = typeof MutationObserver === 'undefined' ? undefined : new MutationObserver(measure);

      resize?.observe(container);
      mutations?.observe(content, { childList: true, characterData: true, subtree: true });
      view.addEventListener('resize', measure);
      measure();

      return () => {
        resize?.disconnect();
        mutations?.disconnect();
        view.removeEventListener('resize', measure);
        container.style.removeProperty('--bx-side-nav-slot-padding-inline-start');
      };
    });
  }

  private resolveSlotLeadingElement(content: Element): Element | undefined {
    let leading = content;

    while (!leading.matches('bx-icon, img, picture, svg, canvas, [role="img"], [data-bx-side-nav-leading]')) {
      const child = Array.from(leading.childNodes).find((node) => node.nodeType === 1 || (node.nodeType === 3 && !!node.textContent?.trim()));

      if (!child || child.nodeType !== 1) return undefined;

      leading = child as Element;
    }

    return leading;
  }

  private observeScrollbar(element: HTMLElement): () => void {
    const view = this.document.defaultView;

    if (!view) return () => {};

    return this.ngZone.runOutsideAngular(() => {
      const measure = () => {
        if (this.destroyRef.destroyed || !element.isConnected) return;

        const style = view.getComputedStyle(element);
        const borders = (parseFloat(style.borderLeftWidth) || 0) + (parseFloat(style.borderRightWidth) || 0);
        const gutter = Math.max(0, element.offsetWidth - element.clientWidth - borders);

        if (gutter !== untracked(this.scrollbarGutter)) this.ngZone.run(() => this.scrollbarGutter.set(gutter));
      };

      const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);

      observer?.observe(element);
      view.addEventListener('resize', measure);
      measure();

      return () => {
        observer?.disconnect();
        view.removeEventListener('resize', measure);
      };
    });
  }

  private resolveExpansionDelay(): number {
    const panel = this.panelElement()?.nativeElement;
    const view = this.document.defaultView;

    if (!panel || !view) return 0;

    const transition = panel.getAnimations().find((animation) => 'transitionProperty' in animation && animation.transitionProperty === 'width');
    const endTime = transition?.effect?.getComputedTiming().endTime;
    const currentTime = transition?.currentTime;

    return typeof endTime === 'number' && typeof currentTime === 'number' ? Math.max(0, endTime - currentTime - 60) : 0;
  }

  private openChildren(request: INavigationExpandRequest): void {
    this.navigationFocusService.remember(request.origin);

    if (this.isCollapsed()) this.temporarilyExpanded.set(true);

    this.navigationStateService.enter(request.item);
    this.renderLevel(false, request.keyboard, true);
  }

  private expandRequestedItemSection(): void {
    const revealId = this.navigationStateService.revealItemId();

    if (!revealId) return;

    const group = this.navigationStateService.currentGroup() ?? this.visibleGroups().find((entry) => entry.items.some((item) => item.id === revealId));

    if (group && this.sectionCollapsed(group)) this.saved.update((saved) => ({ ...saved, sections: { ...saved.sections, [group.id]: false } }));
  }

  private renderLevel(restore: boolean, keyboard: boolean, focus: boolean): void {
    const revision = ++this.renderRevision;

    afterNextRender(
      () => {
        if (this.destroyRef.destroyed || revision !== this.renderRevision) return;

        this.navigationFocusService.restore(restore, keyboard, focus);
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
