import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  NgZone,
  PLATFORM_ID,
  signal,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import type { DropdownState, DropdownTransition } from '@primitives/types/dropdown.types';

import {
  BxA11yService,
  BxOverlayPositionService,
  BxPlacement,
  inheritOverlayTheme,
  ScrollLockService,
  trackOverlayOrigin,
  uuidv4
} from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';

import { BX_OVERLAY_CONTEXT } from '@primitives/tokens/overlay-context.token';

@Directive({
  selector: '[bxDropdown]',
  exportAs: 'bxDropdown',
  standalone: true,
  host: {
    '[attr.aria-expanded]': 'isOpen()',
    '[attr.aria-haspopup]': '"menu"',
    '[attr.aria-controls]': 'overlayId()'
  }
})
export class DropdownDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly scrollLockService = inject(ScrollLockService);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly ngZone = inject(NgZone);
  private readonly viewContainerRef = inject(ViewContainerRef);

  private readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly scrollLockId: string = uuidv4();

  private readonly _isOpen: WritableSignal<boolean> = signal(false);

  private readonly _state: WritableSignal<DropdownState> = signal<DropdownState>('closed');

  protected readonly overlayId: WritableSignal<string | null> = signal<string | null>(null);

  /** Current open state of the overlay. */
  public readonly isOpen: Signal<boolean> = this._isOpen.asReadonly();
  /** Current shared transition state of the dropdown overlay. */
  public readonly state: Signal<DropdownState> = this._state.asReadonly();

  /** Template rendered inside the dropdown overlay. Required input. */
  public readonly bxDropdown: InputSignal<TemplateRef<unknown>> = input.required<TemplateRef<unknown>>();
  /** Preferred overlay side; the shared positioner applies viewport-aware fallback placement. Defaults to `'bottom'`. */
  public readonly placement: InputSignal<BxPlacement> = input<BxPlacement>('bottom');
  /** Shared dropdown transition preset; reduced motion takes precedence. Defaults to `'fade'`. */
  public readonly bxTransition: InputSignal<DropdownTransition> = input<DropdownTransition>('fade');

  private overlayRef: OverlayRef | null = null;
  private transition: ReturnType<typeof createGlassTransition> | null = null;
  private subscriptions: Subscription = new Subscription();
  private revision: number = 0;
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      ++this.revision;
      this.dispose();
    });

    effect(() => {
      if (this.bxA11yService.isReducedMotion() && this.transition) {
        ++this.revision;
        this.transition.destroy();
        this.transition = null;

        if (this.isOpen()) this._state.set('open');
        else this.dispose();
      }
    });
  }

  /**
   * Toggle the component's open state through the same guards used by open() and close().
   *
   * @param event - Pointer or keyboard activation that requested the toggle. Optional.
   */
  @HostListener('click', ['$event'])
  public toggle(event?: MouseEvent): void {
    if (this.isDisabled()) return;

    event?.stopPropagation();

    if (this.isOpen()) this.close();
    else this.open();
  }

  /**
   * Apply the dropdown trigger's keyboard-opening behavior and consume handled activation keys.
   *
   * @param event - Keyboard event from the native dropdown trigger.
   */
  @HostListener('keydown', ['$event'])
  public onTriggerKeydown(event: KeyboardEvent): void {
    if (this.bxTransition() === 'none' || this.isDisabled() || this.isEditing(event.target)) return;

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;

    event.preventDefault();
    event.stopPropagation();
    this.open();

    const items = this.menuItems();
    const item = event.key === 'ArrowUp' ? items[items.length - 1] : items[0];

    item?.focus({ preventScroll: true });
  }

  /** Open the component's overlay using its current configuration and shared positioning/focus mechanisms. */
  public open(): void {
    if (!this.isBrowser || this.isOpen() || this.isDisabled()) return;

    const revision = ++this.revision;

    this._isOpen.set(true);
    this._state.set('opening');

    if (!this.overlayRef) this.attachOverlay();

    const overlay = this.overlayRef;

    if (!overlay) return;

    overlay.overlayElement.inert = false;
    overlay.overlayElement.style.removeProperty('pointer-events');

    if (this.bxTransition() !== 'none' && !this.bxA11yService.isReducedMotion()) {
      const transition = (this.transition ??= this.ngZone.runOutsideAngular(() =>
        createGlassTransition(this.elementRef.nativeElement, overlay.overlayElement)
      ));

      void this.ngZone
        .runOutsideAngular(() => transition.enter())
        .then(() => {
          if (revision === this.revision && this.isOpen()) this.ngZone.run(() => this._state.set('open'));
        })
        .catch(() => {
          if (revision === this.revision && this.isOpen()) {
            this.transition?.destroy();
            this.transition = null;
            this._state.set('open');
          }
        });
    } else {
      this._state.set('open');
    }
  }

  /**
   * Close the component's overlay and apply its configured focus-restoration behavior.
   *
   * @param restoreFocus - Whether focus should return to the opening control after closing. Defaults to `false`.
   */
  public close(restoreFocus = false): void {
    if (!this.overlayRef || !this.isOpen()) return;

    const revision = ++this.revision;
    const overlay = this.overlayRef;

    this._isOpen.set(false);
    this._state.set('closing');
    this.scrollLockService.enableScroll(this.scrollLockId);

    const source = this.elementRef.nativeElement;

    if (restoreFocus || overlay.overlayElement.contains(source.ownerDocument.activeElement)) {
      source.focus({ preventScroll: true });
    }

    overlay.overlayElement.inert = true;
    overlay.overlayElement.style.pointerEvents = 'none';

    const transition = this.transition;

    if (transition && !this.bxA11yService.isReducedMotion()) {
      void this.ngZone
        .runOutsideAngular(() => transition.exit())
        .then(() => {
          if (revision === this.revision && !this.isOpen()) this.ngZone.run(() => this.dispose());
        })
        .catch(() => {
          if (revision === this.revision && !this.isOpen()) this.dispose();
        });
    } else {
      this.dispose();
    }
  }

  /**
   * Dismiss an open dropdown when a document pointer event occurs outside its trigger and panel.
   *
   * @param event - Document pointer event whose target is checked against the dropdown.
   */
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.overlayRef?.hasAttached() || !this.isOpen()) return;

    const target = event.target as Node | null;

    if (!target || this.elementRef.nativeElement.contains(target)) return;

    const inside = this.overlayRef.overlayElement.contains(target);

    // Preserve existing menu item click-to-close behavior; embedded inputs can stay open.
    if (!inside || this.bxTransition() === 'none' || (target instanceof Element && target.closest('button, a, [role="menuitem"]'))) {
      this.close();
    }
  }

  //#region Helpers

  private attachOverlay(): void {
    const positionStrategy = this.bxOverlayPositionService.getElementStrategy(this.elementRef.nativeElement, this.placement(), 4);
    const overlay = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover:
        !!this.overlayContext?.useTopLayer ||
        !!this.elementRef.nativeElement.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]'),
      // A fading surface keeps its trigger reachable while it opens/closes.
      hasBackdrop: this.bxTransition() === 'none',
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });

    this.overlayRef = overlay;
    this.scrollLockService.disableScroll(this.scrollLockId, { handleTouchInput: true });
    this.overlayId.set(overlay.overlayElement.id || null);
    this.disconnectTheme = this.ngZone.runOutsideAngular(() => inheritOverlayTheme(this.elementRef.nativeElement, overlay.overlayElement));
    this.disconnectLighting = inheritGlassLighting(overlay.overlayElement, this.elementRef.nativeElement);
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.ngZone.runOutsideAngular(() => trackOverlayOrigin(overlay, this.elementRef.nativeElement)));
    this.subscriptions.add(overlay.backdropClick().subscribe(() => this.close()));
    this.subscriptions.add(
      overlay.outsidePointerEvents().subscribe((event) => {
        if (!this.elementRef.nativeElement.contains(event.target as Node)) this.close();
      })
    );
    this.subscriptions.add(
      overlay.keydownEvents().subscribe((event) => {
        if (event.key === 'Escape' && this.isOpen()) {
          event.preventDefault();
          event.stopPropagation();
          this.close(true);
        } else if (!event.defaultPrevented && this.bxTransition() !== 'none' && this.isOpen()) {
          this.navigateMenu(event);
        }
      })
    );
    this.subscriptions.add(
      positionStrategy.positionChanges.subscribe(() => {
        this.ngZone.runOutsideAngular(() => this.transition?.refresh());
      })
    );

    const view = overlay.attach(new TemplatePortal(this.bxDropdown(), this.viewContainerRef));

    view.detectChanges();
    overlay.updatePosition();
  }

  private isDisabled(): boolean {
    const element = this.elementRef.nativeElement;

    return element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
  }

  private menuItems(): HTMLElement[] {
    const pane = this.overlayRef?.overlayElement;

    if (!pane) return [];

    return Array.from(pane.querySelectorAll<HTMLElement>('button, a[href], [role="menuitem"]')).filter((item) => {
      if (item.matches(':disabled, [disabled], [aria-disabled="true"]') || item.closest('[aria-disabled="true"]')) return false;

      if (item.closest('[hidden], [inert], [aria-hidden="true"]')) return false;

      if (item.tabIndex < 0 && !item.hasAttribute('tabindex')) return false;

      const style = item.ownerDocument.defaultView?.getComputedStyle(item);

      return !!style && style.display !== 'none' && style.visibility !== 'hidden' && item.getClientRects().length > 0;
    });
  }

  private navigateMenu(event: KeyboardEvent): void {
    if (this.isEditing(event.target) || !(event.target instanceof Node) || !this.overlayRef?.overlayElement.contains(event.target)) return;

    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

    const items = this.menuItems();

    if (!items.length) return;

    const current = items.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement as HTMLElement);

    let index: number;

    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = items.length - 1;
    else if (event.key === 'ArrowDown') index = current < 0 ? 0 : (current + 1) % items.length;
    else index = current < 0 ? items.length - 1 : (current - 1 + items.length) % items.length;

    event.preventDefault();
    event.stopPropagation();
    items[index].focus({ preventScroll: true });
  }

  private isEditing(target: EventTarget | null): boolean {
    return target instanceof Element && !!target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]');
  }

  private dispose(): void {
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.transition?.destroy();
    this.transition = null;
    this.subscriptions.unsubscribe();
    this.overlayRef?.dispose();
    this.overlayRef = null;
    this.scrollLockService.enableScroll(this.scrollLockId);
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
    this.overlayId.set(null);
    this._isOpen.set(false);
    this._state.set('closed');
  }

  //#endregion
}
