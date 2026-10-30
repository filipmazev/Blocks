import {
  DestroyRef,
  Directive,
  ElementRef,
  NgZone,
  HostListener,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { BxOverlayPositionService, inheritOverlayTheme, OverlayOriginTracker, trackOverlayOrigin } from '@filip.mazev/blocks/core';
import { Subscription } from 'rxjs';
import { BX_OVERLAY_CONTEXT } from '../overlay-context.token';
import { MenuCascadeService } from './services/menu-cascade.service';
import { navigateMenuKey } from './helpers/menu-keyboard.helpers';

/** Hover, click, touch and keyboard trigger for nested, opaque bx-menu surfaces. */
@Directive({
  selector: '[bxMenuTrigger]',
  exportAs: 'bxMenuTrigger',
  host: {
    '[attr.aria-haspopup]': 'menuManual() ? null : "menu"',
    '[attr.aria-expanded]': 'menuManual() ? null : isOpen()',
    '[attr.aria-controls]': 'menuManual() ? null : overlayId()'
  }
})
export class MenuTriggerDirective {
  private readonly source = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly overlay = inject(Overlay);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly zone = inject(NgZone);
  private readonly positions = inject(BxOverlayPositionService);
  private readonly cascade = inject(MenuCascadeService);
  private readonly vcr = inject(ViewContainerRef);
  private readonly traps = inject(FocusTrapFactory);
  private readonly opened = signal(false);
  protected readonly overlayId = signal<string | null>(null);
  public readonly isOpen = this.opened.asReadonly();
  public readonly bxMenuTrigger = input.required<TemplateRef<unknown>>();
  /** The enclosing trigger, when this is a submenu. */
  /** Optional positioning origin when a disclosure button belongs to a wider row. Defaults to the trigger element. */
  public readonly menuOrigin = input<HTMLElement | undefined>(undefined);
  public readonly menuParent = input<MenuTriggerDirective | undefined>(undefined);
  /** Physical preferred side; viewport collision handling can flip the menu. Defaults to right. */
  public readonly menuSide = input<'left' | 'right'>('right');
  /** Allows hover opening. Click and keyboard access always remain available. Defaults to true. */
  public readonly menuHover = input(true);
  /** Let the owner call open/close and supply trigger semantics. Defaults to false; automatic event handling and host ARIA are omitted when true. */
  public readonly menuManual = input(false);
  /** Accessible menu name, normally the trigger's resolved label. */
  public readonly menuLabel = input('');
  /** Keep a revealed search path open during pointer movement; Escape still dismisses it. */
  public readonly menuPinned = input(false);
  public readonly menuOpened = output();
  public readonly menuClosed = output();
  private overlayRef?: OverlayRef;
  private trap?: FocusTrap;
  private subscriptions = new Subscription();
  private disconnectTheme?: () => void;
  private hoverTimer?: number;
  private positionTracker?: OverlayOriginTracker;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.close());
    effect(() => {
      const label = this.menuLabel();
      const opened = this.isOpen();
      untracked(() => {
        if (opened)
          this.overlayRef?.overlayElement
            .querySelector('[role="menu"]')
            ?.setAttribute('aria-label', label || this.source.getAttribute('aria-label') || this.source.textContent?.trim() || '');
      });
    });
  }

  @HostListener('click', ['$event'])
  public toggle(event: MouseEvent): void {
    if (this.menuManual()) return;
    event.preventDefault();
    event.stopPropagation();
    if (this.isOpen()) this.close(true);
    else this.open(true);
  }

  public open(focus = false, origin = this.menuOrigin() ?? this.source): void {
    this.cancelClose();
    if (this.isOpen()) {
      if (focus) this.focusFirst();
      return;
    }

    if (!this.source.ownerDocument.defaultView || this.source.matches(':disabled, [aria-disabled="true"]')) return;

    this.cascade.activate(this);
    const overlay = this.overlay.create({
      positionStrategy: this.positions.getSubmenuStrategy(origin, this.menuSide()),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover:
        !!this.overlayContext?.useTopLayer || !!this.source.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]'),
      // The configured edge is physical; content direction is inherited separately from the source.
      direction: 'ltr',
      hasBackdrop: false
    });
    this.overlayRef = overlay;
    this.overlayId.set(overlay.overlayElement.id);
    this.opened.set(true);
    this.disconnectTheme = inheritOverlayTheme(this.source, overlay.overlayElement);
    this.subscriptions = new Subscription();
    const view = overlay.attach(new TemplatePortal(this.bxMenuTrigger(), this.vcr));
    view.detectChanges();
    const menu = overlay.overlayElement.querySelector<HTMLElement>('[role="menu"]');

    if (menu) menu.setAttribute('aria-label', this.menuLabel() || this.source.getAttribute('aria-label') || this.source.textContent?.trim() || '');

    this.trap = this.traps.create(overlay.overlayElement);
    const tracker = this.zone.runOutsideAngular(() =>
      trackOverlayOrigin(overlay, origin, {
        onPosition: () => this.cascade.repositionChildren(this),
        onOriginHidden: () => this.zone.run(() => this.close())
      })
    );
    this.positionTracker = tracker;
    this.subscriptions.add(() => {
      tracker();
      this.positionTracker = undefined;
    });
    if (this.overlayRef !== overlay) return;

    this.subscriptions.add(overlay.keydownEvents().subscribe((event) => this.onMenuKey(event)));
    this.subscriptions.add(
      overlay.outsidePointerEvents().subscribe((event) => {
        if (event.target instanceof Node && !this.cascade.contains(this, event.target)) this.close();
      })
    );
    this.subscriptions.add(overlay.detachments().subscribe(() => this.close()));
    const enter = () => this.cancelClose();
    const leave = () => this.scheduleClose();
    overlay.overlayElement.addEventListener('pointerenter', enter);
    overlay.overlayElement.addEventListener('pointerleave', leave);
    this.subscriptions.add(() => {
      overlay.overlayElement.removeEventListener('pointerenter', enter);
      overlay.overlayElement.removeEventListener('pointerleave', leave);
    });
    overlay.updatePosition();
    if (focus) this.focusFirst();
    this.menuOpened.emit();
  }

  public close(restoreFocus = false): void {
    this.cancelClose();
    if (!this.overlayRef) return;

    this.cascade.closeChildren(this);
    const overlay = this.overlayRef;
    this.overlayRef = undefined;
    if (restoreFocus || overlay.overlayElement.contains(this.source.ownerDocument.activeElement)) this.source.focus({ preventScroll: true });
    this.subscriptions.unsubscribe();
    this.trap?.destroy();
    this.trap = undefined;
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    overlay.dispose();
    this.cascade.remove(this);
    this.overlayId.set(null);
    this.opened.set(false);
    this.menuClosed.emit();
  }

  public reposition(): void {
    this.positionTracker?.reposition();
  }

  public contains(target: Node): boolean {
    return this.source.contains(target) || !!this.overlayRef?.overlayElement.contains(target);
  }

  @HostListener('pointerleave')
  public scheduleClose(): void {
    if (this.menuManual() || this.menuPinned()) return;
    this.cancelClose();
    this.hoverTimer = this.source.ownerDocument.defaultView?.setTimeout(() => {
      const focused = this.source.ownerDocument.activeElement;

      if (!focused || !this.cascade.contains(this, focused)) this.close();
    }, 240);
  }

  @HostListener('pointerenter', ['$event'])
  protected onPointerEnter(event: PointerEvent): void {
    if (!this.menuManual() && this.menuHover() && event.pointerType !== 'touch') this.open();
  }

  @HostListener('keydown', ['$event'])
  protected onKey(event: KeyboardEvent): void {
    if (this.menuManual()) return;
    const forward = this.menuSide() === 'right' ? 'ArrowRight' : 'ArrowLeft';

    if (![forward, 'ArrowDown', 'ArrowUp'].includes(event.key)) return;

    event.preventDefault();
    event.stopPropagation();
    this.open(true);
  }

  //#region Helpers
  private cancelClose(): void {
    this.source.ownerDocument.defaultView?.clearTimeout(this.hoverTimer);
    this.hoverTimer = undefined;
    this.menuParent()?.cancelClose();
  }

  private focusFirst(): void {
    this.overlayRef?.overlayElement.querySelector<HTMLElement>('[role="menuitem"]:not(:disabled):not([aria-disabled="true"])')?.focus();
  }

  private onMenuKey(event: KeyboardEvent): void {
    if (event.defaultPrevented) return;

    const backward = this.menuSide() === 'right' ? 'ArrowLeft' : 'ArrowRight';

    if (event.key === 'Escape' || event.key === backward) {
      event.preventDefault();
      event.stopPropagation();
      this.close(true);
      return;
    }

    const menu = (event.target as HTMLElement)?.closest<HTMLElement>('[role="menu"]');

    if (menu) navigateMenuKey(event, menu);
  }
  //#endregion
}
