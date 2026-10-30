import { NgTemplateOutlet } from '@angular/common';
import { A11yModule, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
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
import { Menu, MenuTriggerDirective, MenuCascadeService, navigateMenuKey } from '@filip.mazev/blocks/primitives';
import { INavigationItem } from '../../interfaces/inavigation-item.interface';
import { INavigationTreeGroup } from '../../interfaces/inavigation-tree-group.interface';
import { NAVIGATION_CONFIG } from '../../tokens/navigation-config.token';
import { NavigationService } from '../../services/navigation.service';
import { ISideNavConfig } from './interfaces/iside-nav-config.interface';
import { ISideNavSlotContext } from './interfaces/iside-nav-slot-context.interface';
import { ISideNavItemContext } from './interfaces/iside-nav-item-context.interface';
import { ISideNavLayout } from './interfaces/iside-nav-layout.interface';
import { ISideNavSavedState } from './interfaces/iside-nav-saved-state.interface';
import { SideNavStateService } from './services/side-nav-state.service';
import { SideNavBranch } from './components/side-nav-branch/side-nav-branch';
import { definedSideNavConfig } from './helpers/side-nav-config.helpers';
import { SIDE_NAV_DEFAULTS } from './constants/side-nav.constants';

@Component({
  selector: 'bx-side-nav',
  exportAs: 'bxSideNav',
  imports: [NgTemplateOutlet, A11yModule, FormsModule, SearchInput, Button, BxSurfaceDirective, Icon, SideNavBranch, MenuTriggerDirective, Menu],
  providers: [SideNavStateService],
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
  private readonly saved = signal<ISideNavSavedState>({ sections: {} });
  private readonly loadedKey = signal<string | undefined>(undefined);
  private readonly lockId = uuidv4();
  private readonly presentation = computed(() => `${this.isMobile()}:${this.resolvedConfig().position}:${this.resolvedConfig().side}`);
  protected readonly drawerAnimated = signal(false);
  protected readonly state = inject(SideNavStateService);
  protected readonly id = `bx-side-nav-${this.lockId}`;
  protected readonly headerTemplate = signal<TemplateRef<ISideNavSlotContext> | null>(null);
  protected readonly footerTemplate = signal<TemplateRef<ISideNavSlotContext> | null>(null);
  protected readonly reducedMotion = this.a11y.isReducedMotion;
  protected readonly visibleGroups = computed(() => this.state.searchResult().groups);
  protected readonly slotContext = computed<ISideNavSlotContext>(() => ({
    $implicit: this.isCollapsed(),
    collapsed: this.isCollapsed(),
    mobile: this.isMobile()
  }));

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
    ...definedSideNavConfig(this.defaults?.sideNav),
    ...definedSideNavConfig(this.config())
  }));

  public readonly isMobile = computed(
    () => this.resolvedConfig().mobile ?? this.dimensions.dimensions().width <= this.dimensions.breakpoints[this.resolvedConfig().mobileBreakpoint]
  );

  public readonly isCollapsed = computed(
    () => !this.isMobile() && !this.state.query().trim() && (this.collapsed() ?? this.saved().collapsed ?? this.resolvedConfig().collapsed)
  );

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
    effect(() => {
      this.presentation();

      untracked(() => {
        // Presentation changes establish the closed geometry before an explicit open animates it.
        this.drawerAnimated.set(false);
        this.cascade.closeAll();
        if (this.mobileOpen()) this.close();
      });
    });
    effect(() => this.layoutChange.emit(this.layout()));
    this.state.activated.pipe(takeUntilDestroyed()).subscribe((item) => {
      this.itemSelected.emit(item);
      this.cascade.closeAll();
      if (this.isMobile()) this.close();
    });
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
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
    const next = !(this.collapsed() ?? this.saved().collapsed ?? this.resolvedConfig().collapsed);
    this.saved.update((saved) => ({ ...saved, collapsed: next }));
    this.collapsedChange.emit(next);
  }

  public search(query: string): void {
    this.cascade.closeAll();
    this.state.search(query);
  }

  protected closeFromControl(event: MouseEvent): void {
    this.focusReturnOrigin = event.detail === 0 ? 'keyboard' : 'program';
    this.close();
  }

  protected sectionActive(group: INavigationTreeGroup): boolean {
    return group.items.some((item) => this.state.activeIds().has(item.id));
  }

  protected sectionHighlighted(group: INavigationTreeGroup): boolean {
    return group.items.some((item) => this.state.revealPath().includes(item.id));
  }

  protected sectionCollapsed(group: INavigationTreeGroup): boolean {
    const revealing = this.state.revealPath();

    if (this.query().trim() || group.items.some((item) => revealing.includes(item.id))) return false;
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
