import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  NgZone,
  output,
  signal,
  TemplateRef,
  untracked,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import { BxOverlayPositionService, BxPlacement, inheritOverlayTheme, OverlayOriginTracker, trackOverlayOrigin } from '@filip.mazev/blocks/core';

import { navigateMenuKey } from '@primitives/helpers/menu-keyboard.helpers';
import { MenuCascadeService } from '@primitives/services/menu-cascade.service';
import { BX_OVERLAY_CONTEXT } from '@primitives/tokens/overlay-context.token';

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
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly overlay = inject(Overlay);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly ngZone = inject(NgZone);
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly menuCascadeService = inject(MenuCascadeService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly focusTrapFactory = inject(FocusTrapFactory);

  private readonly opened: WritableSignal<boolean> = signal(false);

  protected readonly overlayId: WritableSignal<string | null> = signal<string | null>(null);

  /** Current open state of the overlay. */
  public readonly isOpen: Signal<boolean> = this.opened.asReadonly();

  /** Template rendered inside the shared menu overlay. Required input. */
  public readonly bxMenuTrigger: InputSignal<TemplateRef<unknown>> = input.required<TemplateRef<unknown>>();
  /** The enclosing trigger, when this is a submenu. */
  /** Optional positioning origin when a disclosure button belongs to a wider row. Defaults to the trigger element. */
  public readonly menuOrigin: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Optional parent trigger coordinating a nested menu path. Optional; omission leaves the value undefined. */
  public readonly menuParent: InputSignal<MenuTriggerDirective | undefined> = input<MenuTriggerDirective | undefined>(undefined);
  /** Physical preferred side; viewport collision handling can flip the menu. Defaults to right. */
  public readonly menuSide: InputSignal<'left' | 'right'> = input<'left' | 'right'>('right');
  /** Optional dropdown placement. Omit to retain side-aligned submenu positioning; top navigation uses bottom. */
  public readonly menuPlacement: InputSignal<BxPlacement | undefined> = input<BxPlacement | undefined>(undefined);
  /** Allows hover opening. Click and keyboard access always remain available. Defaults to true. */
  public readonly menuHover: InputSignal<boolean> = input(true);
  /** Let the owner call open/close and supply trigger semantics. Defaults to false; automatic event handling and host ARIA are omitted when true. */
  public readonly menuManual: InputSignal<boolean> = input(false);
  /** Accessible menu name, normally the trigger's resolved label. */
  public readonly menuLabel: InputSignal<string> = input('');
  /** Keep a revealed search path open during pointer movement; Escape still dismisses it. */
  public readonly menuPinned: InputSignal<boolean> = input(false);

  /** Emits after the menu overlay has opened. */
  public readonly menuOpened: OutputEmitterRef<void> = output();
  /** Emitted before DOM detachment so owners can retain scroll/focus context. The overlay is already marked as closing. */
  public readonly menuClosing: OutputEmitterRef<void> = output();
  /** Emits after the menu overlay has closed. */
  public readonly menuClosed: OutputEmitterRef<void> = output();

  private overlayRef?: OverlayRef;
  private trap?: FocusTrap;
  private subscriptions: Subscription = new Subscription();
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
            ?.setAttribute('aria-label', label || this.nativeElement.getAttribute('aria-label') || this.nativeElement.textContent?.trim() || '');
      });
    });
  }

  /**
   * Toggle the menu in response to a trigger activation.
   *
   * @param event - Pointer event providing the activation origin and keyboard-generated click detail.
   */
  @HostListener('click', ['$event'])
  public toggle(event: MouseEvent): void {
    if (this.menuManual()) return;

    event.preventDefault();
    event.stopPropagation();

    if (this.isOpen()) this.close(true);
    else this.open(true);
  }

  /**
   * Open the coordinated menu overlay using the requested focus and anchor overrides.
   *
   * @param focus - Whether to focus the first enabled menu item after opening. Defaults to `false`.
   * @param origin - Optional anchor for this opening; omission uses menuOrigin or the native trigger host. Defaults to `this.menuOrigin() ??
   * this.nativeElement`.
   */
  public open(focus = false, origin = this.menuOrigin() ?? this.nativeElement): void {
    this.cancelClose();

    if (this.isOpen()) {
      if (focus) this.focusFirst();

      return;
    }

    if (!this.nativeElement.ownerDocument.defaultView || this.nativeElement.matches(':disabled, [aria-disabled="true"]')) return;

    this.menuCascadeService.activate(this);

    const placement = this.menuPlacement();
    const overlay = this.overlay.create({
      positionStrategy: placement
        ? this.bxOverlayPositionService.getElementStrategy(origin, placement, 4).withFlexibleDimensions(false)
        : this.bxOverlayPositionService.getSubmenuStrategy(origin, this.menuSide()),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover:
        !!this.overlayContext?.useTopLayer || !!this.nativeElement.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]'),
      // The configured edge is physical; content direction is inherited separately from the source.
      direction: 'ltr',
      hasBackdrop: false
    });

    this.overlayRef = overlay;
    this.overlayId.set(overlay.overlayElement.id);
    this.opened.set(true);
    this.disconnectTheme = inheritOverlayTheme(this.nativeElement, overlay.overlayElement);
    this.subscriptions = new Subscription();

    const view = overlay.attach(new TemplatePortal(this.bxMenuTrigger(), this.viewContainerRef));

    view.detectChanges();

    const menu = overlay.overlayElement.querySelector<HTMLElement>('[role="menu"]');

    if (menu)
      menu.setAttribute('aria-label', this.menuLabel() || this.nativeElement.getAttribute('aria-label') || this.nativeElement.textContent?.trim() || '');

    this.trap = this.focusTrapFactory.create(overlay.overlayElement);

    const tracker = this.ngZone.runOutsideAngular(() =>
      trackOverlayOrigin(overlay, origin, {
        onPosition: () => this.menuCascadeService.repositionChildren(this),
        onOriginHidden: () => this.ngZone.run(() => this.close())
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
        if (event.target instanceof Node && !this.menuCascadeService.contains(this, event.target)) this.close();
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

  /**
   * Close this menu branch and release its owned overlay resources.
   *
   * @param restoreFocus - Whether to return focus to the trigger after closing. Defaults to `false`.
   */
  public close(restoreFocus = false): void {
    this.cancelClose();

    if (!this.overlayRef) return;

    this.menuCascadeService.closeChildren(this);

    const overlay = this.overlayRef;

    this.overlayRef = undefined;
    this.menuClosing.emit();

    if (restoreFocus || overlay.overlayElement.contains(this.nativeElement.ownerDocument.activeElement)) this.nativeElement.focus({ preventScroll: true });

    this.subscriptions.unsubscribe();
    this.trap?.destroy();
    this.trap = undefined;
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    overlay.dispose();
    this.menuCascadeService.remove(this);
    this.overlayId.set(null);
    this.opened.set(false);
    this.menuClosed.emit();
  }

  /** Refresh the menu's shared anchor tracking and dependent child positions. */
  public reposition(): void {
    this.positionTracker?.reposition();
  }

  /**
   * Return whether a node belongs to the native trigger or its currently attached menu overlay.
   *
   * @param target - DOM node to check against the trigger and attached overlay.
   */
  public contains(target: Node): boolean {
    return this.nativeElement.contains(target) || !!this.overlayRef?.overlayElement.contains(target);
  }

  /** Schedule hover dismissal while retaining focused or pinned menu branches. */
  @HostListener('pointerleave')
  public scheduleClose(): void {
    if (this.menuManual() || this.menuPinned()) return;

    this.cancelClose();
    this.hoverTimer = this.nativeElement.ownerDocument.defaultView?.setTimeout(() => {
      const focused = this.nativeElement.ownerDocument.activeElement;

      if (!focused || !this.menuCascadeService.contains(this, focused)) this.close();
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
    this.nativeElement.ownerDocument.defaultView?.clearTimeout(this.hoverTimer);
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
