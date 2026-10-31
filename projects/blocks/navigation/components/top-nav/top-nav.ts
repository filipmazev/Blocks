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
  model,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FocusMonitor } from '@angular/cdk/a11y';
import { WindowDimensionsService } from '@filip.mazev/blocks/core';
import { Button, SearchInput } from '@filip.mazev/blocks/forms';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { BxOverlayContextDirective, MenuTriggerDirective, navigateMenuKey, TooltipDirective } from '@filip.mazev/blocks/primitives';
import { NavigationService } from '../../services/navigation.service';
import { NAVIGATION_CONFIG } from '../../tokens/navigation-config.token';
import { INavigationItem } from '../../interfaces/inavigation-item.interface';
import { INavigationTreeGroup } from '../../interfaces/inavigation-tree-group.interface';
import { NavigationStateService } from '../shared/services/navigation-state.service';
import { NavigationFocusService } from '../shared/services/navigation-focus.service';
import { NavigationItem } from '../shared/navigation-item/navigation-item';
import { NavigationLevel } from '../shared/navigation-level/navigation-level';
import { INavigationLevelRequest } from '../shared/interfaces/inavigation-level-request.interface';
import { INavigationItemContext } from '../shared/interfaces/inavigation-item-context.interface';
import { INavigationExpandRequest } from '../shared/interfaces/inavigation-expand-request.interface';
import { definedNavigationConfig } from '../shared/helpers/navigation-config.helpers';
import { ITopNavConfig } from './interfaces/itop-nav-config.interface';
import { ITopNavSlotContext } from './interfaces/itop-nav-slot-context.interface';
import { TOP_NAV_DEFAULTS } from './constants/top-nav.constants';

@Component({
  selector: 'bx-top-nav',
  exportAs: 'bxTopNav',
  imports: [
    NgTemplateOutlet,
    FormsModule,
    Button,
    SearchInput,
    BxSurfaceDirective,
    Icon,
    BxOverlayContextDirective,
    MenuTriggerDirective,
    TooltipDirective,
    NavigationItem,
    NavigationLevel
  ],
  providers: [NavigationStateService, NavigationFocusService],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-sticky]': 'resolvedConfig().position === "sticky"',
    '[style.--bx-top-nav-top]': 'resolvedConfig().top',
    '[style.--bx-top-nav-panel-width]': 'resolvedConfig().panelWidth',
    '[style.--bx-top-nav-panel-max-height]': 'resolvedConfig().panelMaxHeight'
  }
})
export class TopNav {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly dimensions = inject(WindowDimensionsService);
  private readonly navigation = inject(NavigationService);
  private readonly router = inject(Router);
  private readonly defaults = inject(NAVIGATION_CONFIG, { optional: true });
  private readonly monitor = inject(FocusMonitor);
  private readonly bar = viewChild<HTMLElement, ElementRef<HTMLElement>>('bar', { read: ElementRef });
  private readonly primary = viewChild<HTMLElement, ElementRef<HTMLElement>>('primary', { read: ElementRef });
  private readonly space = viewChild<HTMLElement, ElementRef<HTMLElement>>('space', { read: ElementRef });
  private readonly menuButton = viewChild<HTMLButtonElement, ElementRef<HTMLButtonElement>>('menuButton', { read: ElementRef });
  private readonly trigger = viewChild<MenuTriggerDirective>('panelTrigger');
  private readonly measuredWidth = signal<number | undefined>(undefined);
  private readonly overflowing = signal(false);
  private readonly rtl = signal(false);
  private readonly viewportHeight = computed(() => this.dimensions.dimensions().height);
  protected readonly availablePanelHeight = signal('calc(100dvh - 1rem)');
  protected readonly state = inject(NavigationStateService);
  protected readonly focusState = inject(NavigationFocusService);
  protected readonly brandTemplate = signal<TemplateRef<ITopNavSlotContext> | null>(null);
  protected readonly actionsTemplate = signal<TemplateRef<ITopNavSlotContext> | null>(null);
  protected readonly rootItems = computed(() => this.state.groups().flatMap((group) => group.items));
  protected readonly slotContext = computed<ITopNavSlotContext>(() => ({ $implicit: this.isCompact(), compact: this.isCompact(), open: this.opened() }));
  public readonly config = input<ITopNavConfig>({});
  /** Omit to share NavigationService's hierarchical route sections with side navigation and breadcrumbs. */
  public readonly groups = input<readonly INavigationTreeGroup[] | undefined>(undefined);
  /** Presentation inside the managed link/button; interaction and parent paths remain owned by navigation. */
  public readonly itemTemplate = input<TemplateRef<INavigationItemContext> | undefined>(undefined);
  /** Controlled or internally managed panel state. Never persisted. */
  public readonly opened = model(false);
  public readonly itemSelected = output<INavigationItem>();
  public readonly panelId = `bx-top-nav-panel-${this.state.levelId}`;
  public readonly query = this.state.query.asReadonly();
  public readonly resolvedConfig = computed(() => ({
    ...TOP_NAV_DEFAULTS,
    ...definedNavigationConfig(this.defaults?.topNav),
    ...definedNavigationConfig(this.config())
  }));

  public readonly isCompact = computed(() => {
    const config = this.resolvedConfig();
    const viewport = this.dimensions.dimensions().width;
    const width = Math.min(viewport, this.measuredWidth() ?? viewport);

    return this.overflowing() || (config.compact ?? width <= this.dimensions.breakpoints[config.compactBreakpoint]);
  });

  private returnOrigin?: HTMLElement;
  private keyboardOrigin = false;
  private focusSearchNext = false;
  private restoreNext = true;
  private relocating = false;
  private renderRevision = 0;
  private expandedChrome = 0;
  private compactAdjustment = 0;
  private previousCompactLayout = false;

  constructor() {
    effect(() => {
      this.state.config.set({ ...this.resolvedConfig(), side: this.rtl() ? 'right' : 'left' });
      this.state.sourceGroups.set(this.groups() ?? this.navigation.menuTreeGroups());
      this.state.itemTemplate.set(this.itemTemplate());
      this.state.inlineLevels.set(false);
    });
    effect(() => {
      const open = this.opened();

      untracked(() => {
        if (open) this.renderPanel(this.restoreNext, this.keyboardOrigin, true);
        else {
          ++this.renderRevision;
          this.trigger()?.close();
        }
      });
    });
    effect(() => {
      const compact = this.isCompact();

      untracked(() => {
        if (!this.opened()) return;
        this.focusSearchNext = this.document.getElementById(this.panelId)?.querySelector('input') === this.document.activeElement;
        this.focusState.remember();
        this.relocate();
        this.returnOrigin = compact && this.rootItems().length ? this.menuButton()?.nativeElement : this.bar()?.nativeElement;
        this.renderPanel(true, false, true);
      });
    });
    effect(() => {
      this.viewportHeight();

      untracked(() => {
        if (!this.opened()) return;
        this.focusState.remember();
        this.renderPanel(true, false, false);
      });
    });
    effect(() => {
      const searchable = this.resolvedConfig().searchable;

      if (!searchable)
        untracked(() => {
          this.focusSearchNext = false;
          this.state.search('');
          if (this.opened()) this.renderPanel(true, false, true);
        });
    });
    afterRenderEffect(() => {
      this.rootItems();
      this.state.activeItem();
      this.isCompact();
      untracked(() => this.syncTabStops());
    });
    afterNextRender(() => this.observeLayout());
    this.state.expansionRequested.pipe(takeUntilDestroyed()).subscribe((request) => this.openChildren(request));
    this.state.activated.pipe(takeUntilDestroyed()).subscribe((item) => {
      this.itemSelected.emit(item);
      this.close(false);
    });
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) this.close(false);
    });
  }

  public setBrandTemplate(template: TemplateRef<ITopNavSlotContext> | null): void {
    this.brandTemplate.set(template);
  }

  public setActionsTemplate(template: TemplateRef<ITopNavSlotContext> | null): void {
    this.actionsTemplate.set(template);
  }

  /** Open the shared panel. Pass the originating click event or element for reliable positioning and focus return. */
  public open(origin?: HTMLElement | Event, focusSearch = false): void {
    this.show(this.resolveOrigin(origin), focusSearch, true, this.isKeyboard(origin));
  }

  public close(restoreFocus = true): void {
    ++this.renderRevision;
    this.opened.set(false);
    this.trigger()?.close();
    if (restoreFocus) this.restoreOrigin();
  }

  public toggle(origin?: HTMLElement | Event): void {
    if (this.opened()) this.close();
    else this.open(origin);
  }

  /** Clearing search reveals a successfully selected result, or restores the previous browsing path and scroll position. */
  public search(query: string): void {
    const wasSearching = !!this.query().trim();

    if (!wasSearching) this.focusState.remember();
    this.state.search(query);
    this.focusSearchNext = true;
    this.restoreNext = wasSearching && !query.trim();
    if (this.opened()) this.renderPanel(this.restoreNext, false, false);
    else this.open(undefined, true);
  }

  protected back(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.focusState.remember();
    this.state.back();
    this.focusSearchNext = false;
    this.renderPanel(true, event instanceof KeyboardEvent || event.detail === 0, true);
  }

  protected navigateLevel(request: INavigationLevelRequest): void {
    this.focusState.remember();
    this.state.navigateLevel(request.breadcrumb);
    this.focusSearchNext = false;
    this.renderPanel(true, request.keyboard, true);
  }

  protected panelOpened(): void {
    this.state.submenuVisible.set(true);
  }

  protected panelClosed(): void {
    this.state.submenuVisible.set(false);
    if (this.relocating) return;
    ++this.renderRevision;
    this.opened.set(false);
    if (this.document.activeElement === this.bar()?.nativeElement) this.restoreOrigin();
  }

  protected closeFromControl(event: MouseEvent): void {
    this.keyboardOrigin = event.detail === 0;
    this.close();
  }

  protected panelKey(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.key !== 'Escape') return;
    event.preventDefault();
    event.stopPropagation();
    this.keyboardOrigin = true;
    this.close();
  }

  protected menuKey(event: KeyboardEvent): void {
    const menu = (event.target as HTMLElement)?.closest<HTMLElement>('[role="menu"]');

    if (menu) navigateMenuKey(event, menu);
  }

  protected rootKey(event: KeyboardEvent): void {
    const menu = this.primary()?.nativeElement;
    const rtl = this.document.defaultView?.getComputedStyle(this.host).direction === 'rtl';

    if (menu) navigateMenuKey(event, menu, { orientation: 'horizontal', rtl });
  }

  protected rootFocus(event: FocusEvent): void {
    const menu = this.primary()?.nativeElement;
    const target = event.target as HTMLElement;

    if (!menu || !target.matches('[role="menuitem"]')) return;
    for (const item of Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]'))) item.tabIndex = item === target ? 0 : -1;
  }

  protected sectionActive(group: INavigationTreeGroup): boolean {
    return group.items.some((item) => this.state.activeIds().has(item.id));
  }

  //#region Helpers
  private openChildren(request: INavigationExpandRequest): void {
    if (!request.inLevel && !this.query().trim() && this.opened() && this.state.path()[0] === request.item.id) {
      this.keyboardOrigin = request.keyboard;
      this.close();
      return;
    }

    this.focusState.remember(request.origin);
    const origin = request.inLevel ? this.returnOrigin : request.origin;
    this.state.enter(request.item);
    this.show(origin, false, false, request.keyboard);
  }

  private show(origin: HTMLElement | undefined, search: boolean, restore: boolean, keyboard: boolean): void {
    if (!this.dimensions.isBrowser) return;

    if (origin && origin !== this.returnOrigin && this.trigger()?.isOpen()) this.relocate();

    this.returnOrigin = origin ?? this.returnOrigin ?? this.menuButton()?.nativeElement ?? this.bar()?.nativeElement;
    this.keyboardOrigin = keyboard;
    this.focusSearchNext = search && this.resolvedConfig().searchable;
    this.restoreNext = restore;

    if (this.opened()) this.renderPanel(restore, keyboard, true);
    else this.opened.set(true);
  }

  private relocate(): void {
    this.relocating = true;
    this.trigger()?.close();
    this.relocating = false;
  }

  private renderPanel(restore: boolean, keyboard: boolean, focus: boolean): void {
    const revision = ++this.renderRevision;

    afterNextRender(
      () => {
        if (this.destroyRef.destroyed || revision !== this.renderRevision || !this.opened()) return;
        const fallback = this.isCompact() && this.rootItems().length ? this.menuButton()?.nativeElement : this.bar()?.nativeElement;
        const visibleOrigin =
          this.returnOrigin?.isConnected &&
          this.returnOrigin.getClientRects().length &&
          this.document.defaultView?.getComputedStyle(this.returnOrigin).visibility !== 'hidden';
        const origin = visibleOrigin ? this.returnOrigin : fallback;

        if (origin) {
          const bounds = origin.getBoundingClientRect();
          const viewport = this.document.defaultView?.innerHeight ?? this.viewportHeight();
          this.availablePanelHeight.set(`${Math.max(120, bounds.top - 8, viewport - bounds.bottom - 8)}px`);
        }

        this.trigger()?.open(false, origin);
        this.focusState.restore(restore, keyboard, focus && !this.focusSearchNext);

        if (focus && this.focusSearchNext) {
          const search = this.document.getElementById(this.panelId)?.querySelector<HTMLInputElement>('input');

          if (search) this.monitor.focusVia(search, keyboard ? 'keyboard' : 'program', { preventScroll: true });
        }

        this.trigger()?.reposition();
      },
      { injector: this.injector }
    );
  }

  private restoreOrigin(): void {
    const fallback = this.isCompact() && this.rootItems().length ? this.menuButton()?.nativeElement : this.bar()?.nativeElement;
    const visible =
      this.returnOrigin?.isConnected &&
      this.returnOrigin.getClientRects().length &&
      this.document.defaultView?.getComputedStyle(this.returnOrigin).visibility !== 'hidden';
    const target = visible ? this.returnOrigin : fallback;

    if (target) this.monitor.focusVia(target, this.keyboardOrigin ? 'keyboard' : 'program', { preventScroll: true });
  }

  private resolveOrigin(origin: HTMLElement | Event | undefined): HTMLElement | undefined {
    const target = origin && 'currentTarget' in origin ? origin.currentTarget : origin;
    const view = this.document.defaultView;

    return view && target instanceof view.HTMLElement
      ? target
      : this.isCompact() && this.rootItems().length
        ? this.menuButton()?.nativeElement
        : this.bar()?.nativeElement;
  }

  private isKeyboard(origin: HTMLElement | Event | undefined): boolean {
    return !!origin && ('detail' in origin ? origin.detail === 0 : 'matches' in origin && origin.matches(':focus-visible'));
  }

  private syncTabStops(): void {
    const primary = this.primary()?.nativeElement;

    if (!primary) return;
    const items = Array.from(primary.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter((item) => !item.matches(':disabled, [aria-disabled="true"]'));
    const focused = items.find((item) => item === this.document.activeElement);
    const preferred = focused ?? items.find((item) => item.getAttribute('aria-current') === 'page') ?? items[0];

    for (const item of items) item.tabIndex = !this.isCompact() && item === preferred ? 0 : -1;
  }

  private observeLayout(): void {
    const view = this.document.defaultView;
    const bar = this.bar()?.nativeElement;
    const primary = this.primary()?.nativeElement;
    const space = this.space()?.nativeElement;

    if (!view?.ResizeObserver || !bar || !primary || !space) return;
    const measure = () => {
      const width = bar.getBoundingClientRect().width;
      const chrome = width - space.clientWidth;
      const compactLayout = primary.classList.contains('is-hidden');

      // A compact brand/action slot may shrink. Retain that difference so it cannot create a fit/collapse loop.
      if (compactLayout && !this.previousCompactLayout) this.compactAdjustment = Math.max(0, this.expandedChrome - chrome);
      if (!compactLayout) this.expandedChrome = chrome;
      this.previousCompactLayout = compactLayout;
      this.measuredWidth.set(width);
      this.overflowing.set(primary.scrollWidth + chrome + (compactLayout ? this.compactAdjustment : 0) > width + 1);
      this.rtl.set(view.getComputedStyle(this.host).direction === 'rtl');
    };
    const resize = new view.ResizeObserver(measure);
    resize.observe(bar);
    resize.observe(primary);
    resize.observe(space);
    const direction = new view.MutationObserver(measure);

    for (let element: HTMLElement | null = this.host; element; element = element.parentElement)
      direction.observe(element, { attributes: true, attributeFilter: ['dir'] });

    measure();
    this.destroyRef.onDestroy(() => {
      resize.disconnect();
      direction.disconnect();
    });
  }
  //#endregion
}
