import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT, isPlatformBrowser, NgClass, NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  model,
  output,
  PLATFORM_ID,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';

import { BX_I18N, BxA11yService, inheritOverlayTheme, ResolvableText, resolveText, ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { createSpringMotion, GestureVelocity, inheritGlassLighting, ISpringMotion, MOTION_PRESETS } from '@filip.mazev/blocks/effects/runtime';
import { Icon, IconName } from '@filip.mazev/blocks/icons';

import { LoadingSpinner } from '@primitives/components/loading-spinner/loading-spinner';
import {
  BOTTOM_DRAWER_DISMISS_DISTANCE,
  BOTTOM_DRAWER_DISMISS_VELOCITY,
  BOTTOM_DRAWER_TRANSITION_DURATION
} from '@primitives/constants/bottom-drawer.constants';
import { BottomDrawerCloseReason, BottomDrawerSize } from '@primitives/types/bottom-drawer.types';

/**
 * Reusable Blocks bottom drawer with an optional modal backdrop, focus trap, scroll lock, swipe dismissal and spring settling.
 *
 * The drawer renders into a CDK overlay when used standalone. Set `embedded` when an owning overlay, such as the Modal bottom-sheet presentation,
 * already provides the backdrop, focus trap, scroll lock and Escape handling; the drawer then renders its surface in place without competing for those
 * responsibilities.
 */
@Component({
  selector: 'bx-bottom-drawer',
  imports: [BxSurfaceDirective, CdkTrapFocus, Icon, LoadingSpinner, NgClass, NgTemplateOutlet],
  templateUrl: './bottom-drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './bottom-drawer.scss'
})
export class BottomDrawer {
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly bxA11yService = inject(BxA11yService);
  private readonly scrollLockService = inject(ScrollLockService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private readonly browser: boolean = isPlatformBrowser(this.platformId);

  private readonly isDragging: WritableSignal<boolean> = signal(false);
  private readonly isEntering: WritableSignal<boolean> = signal(false);
  private readonly isClosing: WritableSignal<boolean> = signal(false);

  private readonly lockId: string = `bx-drawer-${uuidv4()}`;

  private readonly surfaceTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('surfaceTemplate');
  private readonly handleZone: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('handleZone');
  private readonly surface: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('surface');

  protected readonly titleId: string = `bx-drawer-title-${uuidv4()}`;

  protected readonly resolvedTitle: Signal<string> = computed(() => resolveText(this.title(), this.i18n));
  protected readonly resolvedSubtitle: Signal<string> = computed(() => resolveText(this.subtitle(), this.i18n));
  protected readonly resolvedAriaLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly resolvedCloseLabel: Signal<string> = computed(() => resolveText(this.closeLabel(), this.i18n));
  protected readonly isDismissible: Signal<boolean> = computed(() => this.dismissible() && !this.busy() && !this.disabled());
  protected readonly showHeader: Signal<boolean> = computed(
    () => this.headerVisible() ?? !!(this.title() || this.subtitle() || this.icon() || this.showCloseButton() || this.busy())
  );
  protected readonly surfaceOffset: Signal<string> = computed(() =>
    this.isEntering() || this.isClosing() || !this.open() ? '100%' : `${Math.max(0, this.offset())}px`
  );

  /** Whether the drawer is open; supports two-way binding through `[(open)]`. Defaults to `false`. */
  public readonly open: ModelSignal<boolean> = model<boolean>(false);
  /** Current downward drag displacement in CSS pixels; supports two-way binding for hosts that coordinate dismissal motion. Defaults to `0`. */
  public readonly offset: ModelSignal<number> = model<number>(0);

  /** Duration of entrance, exit and spring-settling transitions in milliseconds. Defaults to the reusable drawer transition length. */
  public readonly animationDuration: InputSignal<number> = input(BOTTOM_DRAWER_TRANSITION_DURATION);
  /** Whether the drawer provides its own overlay, backdrop, focus trap, scroll lock and Escape handling. Defaults to `true`. */
  public readonly modal: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the drawer renders its surface in the owner's DOM instead of creating an overlay. Defaults to `false`. */
  public readonly embedded: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether user-initiated dismissal is allowed. Defaults to `true`. */
  public readonly dismissible: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether a successful close request closes the drawer automatically. Set false when the owner controls `open` and performs its own guarded close. Defaults to `true`. */
  public readonly autoClose: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether clicking the backdrop requests dismissal. Defaults to `true`. */
  public readonly closeOnBackdrop: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether a backdrop is rendered behind a modal drawer. Defaults to `true`. */
  public readonly showBackdrop: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the drag handle is rendered. Defaults to `true`. */
  public readonly showHandle: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether dragging the handle downwards can dismiss the drawer. Defaults to `true`. */
  public readonly swipeToDismiss: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the close action is rendered in the header. Defaults to `true`. */
  public readonly showCloseButton: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the footer stays visible while the body scrolls. Defaults to `true`. */
  public readonly stickyFooter: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether focus moves into the drawer when it opens in modal mode. Defaults to `true`. */
  public readonly autoFocus: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether asynchronous work is in progress; shows a busy indicator, marks the drawer busy and blocks dismissal. Defaults to `false`. */
  public readonly busy: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether drawer interactions are disabled while content remains readable. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Maximum height preset controlling the drawer's available viewport portion. Defaults to `'auto'`. */
  public readonly size: InputSignal<BottomDrawerSize> = input<BottomDrawerSize>('auto');
  /** CSS maximum height applied to the surface, including safe viewport units. Defaults to `'92dvh'`. */
  public readonly maxHeight: InputSignal<string> = input('92dvh');
  /** Optional heading rendered in the drawer header; translation keys resolve through BX_I18N. Optional. */
  public readonly title: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional supporting text rendered below the heading; translation keys resolve through BX_I18N. Optional. */
  public readonly subtitle: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional Blocks icon rendered before the heading. Optional. */
  public readonly icon: InputSignal<IconName | undefined> = input<IconName | undefined>(undefined);
  /** Accessible name of the drawer when no visible heading names it; translation keys resolve through BX_I18N. Optional. */
  public readonly ariaLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Accessible name of the close action and drag handle; translation keys resolve through BX_I18N. Defaults to `'Close'`. */
  public readonly closeLabel: InputSignal<ResolvableText> = input<ResolvableText>('Close');
  /** Whether the header row is rendered; omission derives visibility from the configured heading, close action and busy state. Optional. */
  public readonly headerVisible: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);
  /** Optional application CSS class applied to the drawer surface. Defaults to `''`. */
  public readonly panelClass: InputSignal<string> = input('');
  /** Optional inline styles applied to the drawer surface. Defaults to `''`. */
  public readonly panelStyle: InputSignal<string> = input('');
  /** Optional DOM identifier applied to the drawer surface. Defaults to `''`. */
  public readonly surfaceId: InputSignal<string> = input('');
  /** Optional asynchronous guard consulted before a dismissal; returning false keeps the drawer open. Optional. */
  public readonly closeGuard: InputSignal<(() => boolean | Promise<boolean>) | undefined> = input<(() => boolean | Promise<boolean>) | undefined>(undefined);

  /** Emits the requested close reason before the close guard runs. */
  public readonly closeRequest: OutputEmitterRef<BottomDrawerCloseReason> = output<BottomDrawerCloseReason>();
  /** Emits after the drawer has closed successfully. */
  public readonly closed: OutputEmitterRef<BottomDrawerCloseReason> = output<BottomDrawerCloseReason>();
  /** Emits when a close guard or dismissal policy rejected a close request. */
  public readonly closeCancelled: OutputEmitterRef<BottomDrawerCloseReason> = output<BottomDrawerCloseReason>();

  private cleanupDrag: (() => void) | undefined;
  private disconnectTheme: (() => void) | undefined;
  private disconnectLighting: (() => void) | undefined;
  private overlayRef: OverlayRef | undefined;
  private originElement: HTMLElement | undefined;
  private returnMotion: ISpringMotion | undefined;
  private detachTimeout: ReturnType<typeof setTimeout> | undefined;
  private guardRevision: number = 0;
  private suppressClick: boolean = false;

  constructor() {
    effect(() => {
      const open = this.open();
      const embedded = this.embedded();
      const modal = this.modal();

      if (!this.browser || embedded) return;

      if (open) this.attach(modal);
      else this.detach();
    });

    effect(() => {
      if (!this.browser || !this.embedded()) return;

      if (!this.open()) {
        this.isEntering.set(false);

        return;
      }

      this.isEntering.set(true);
      this.document.defaultView?.requestAnimationFrame(() => {
        if (!this.open()) return;

        this.isEntering.set(false);
        this.startDragDetection();
      });
    });

    this.destroyRef.onDestroy(() => {
      this.guardRevision += 1;
      this.cleanup();
      this.scrollLockService.enableScroll(this.lockId);
    });
  }

  /** Open the drawer through the same state used by two-way binding. */
  public show(): void {
    this.open.set(true);
  }

  /**
   * Request programmatic dismissal using the shared guard and busy-state policy.
   *
   * @param reason - Close reason reported to consumers. Defaults to `'programmatic'`.
   */
  public close(reason: BottomDrawerCloseReason = 'programmatic'): void {
    this.requestClose(reason);
  }

  //#region Helpers

  protected onHandleClick(): void {
    if (this.suppressClick) {
      this.suppressClick = false;

      return;
    }

    if (this.isDismissible()) this.requestClose('close-button');
  }

  protected onCloseClick(): void {
    if (this.isDismissible()) this.requestClose('close-button');
  }

  protected sizeClass(): string {
    return `is-size-${this.size()}`;
  }

  private requestClose(reason: BottomDrawerCloseReason): void {
    if (!this.open() || this.isClosing()) return;

    this.closeRequest.emit(reason);

    if (reason !== 'programmatic' && !this.isDismissible()) {
      this.closeCancelled.emit(reason);

      return;
    }

    if (this.busy()) {
      this.closeCancelled.emit(reason);

      return;
    }

    if (!this.autoClose()) return;

    const guard = this.closeGuard();
    const revision = ++this.guardRevision;

    if (!guard) {
      this.commitClose(reason);

      return;
    }

    Promise.resolve(guard())
      .then((allowed) => {
        if (revision !== this.guardRevision) return;

        if (allowed) this.commitClose(reason);
        else this.closeCancelled.emit(reason);
      })
      .catch(() => {
        if (revision === this.guardRevision) this.closeCancelled.emit(reason);
      });
  }

  private commitClose(reason: BottomDrawerCloseReason): void {
    this.isClosing.set(true);
    this.open.set(false);
    this.closed.emit(reason);
  }

  private attach(modal: boolean): void {
    clearTimeout(this.detachTimeout);
    this.detachTimeout = undefined;

    if (this.overlayRef) {
      this.isClosing.set(false);
      this.isEntering.set(false);

      return;
    }

    const template = this.surfaceTemplate();

    if (!template) return;

    this.originElement = this.document.activeElement instanceof HTMLElement ? this.document.activeElement : undefined;
    this.isEntering.set(true);

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().bottom('0').centerHorizontally(),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      hasBackdrop: modal && this.showBackdrop(),
      backdropClass: 'bx-drawer-backdrop',
      panelClass: 'bx-drawer-overlay-pane'
    });

    this.overlayRef = overlayRef;

    const pane = overlayRef.overlayElement;

    pane.setAttribute('role', 'presentation');
    this.disconnectTheme = inheritOverlayTheme(this.originElement ?? this.viewContainerRef.element.nativeElement, pane);

    if (this.originElement) this.disconnectLighting = inheritGlassLighting(pane, this.originElement);

    overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));
    overlayRef.updatePosition();

    if (modal) {
      this.scrollLockService.disableScroll(this.lockId, { animationDuration: 0, handleTouchInput: true, mobileOnlyTouchPrevention: true });
    }

    if (modal) {
      overlayRef.keydownEvents().subscribe((event) => {
        if (event.key !== 'Escape' || event.defaultPrevented) return;

        event.preventDefault();
        event.stopPropagation();
        this.requestClose('escape');
      });
    }

    overlayRef.backdropClick().subscribe(() => {
      if (this.closeOnBackdrop()) this.requestClose('backdrop');
    });

    this.document.defaultView?.requestAnimationFrame(() => {
      this.isEntering.set(false);
      this.startDragDetection();
      this.focusInitial();
    });
  }

  private detach(): void {
    const overlayRef = this.overlayRef;

    if (!overlayRef) return;

    this.cleanupDrag?.();
    this.cleanupDrag = undefined;
    this.isClosing.set(true);

    const finish = (): void => {
      clearTimeout(this.detachTimeout);
      this.detachTimeout = undefined;
      this.disconnectTheme?.();
      this.disconnectTheme = undefined;
      this.disconnectLighting?.();
      this.disconnectLighting = undefined;
      overlayRef.dispose();
      this.overlayRef = undefined;
      this.offset.set(0);
      this.isClosing.set(false);
      this.scrollLockService.enableScroll(this.lockId);
      this.restoreFocus();
    };

    if (this.bxA11yService.isReducedMotion()) {
      finish();

      return;
    }

    this.detachTimeout = setTimeout(finish, Math.max(0, this.animationDuration()));
  }

  private focusInitial(): void {
    if (!this.modal() || !this.autoFocus() || this.embedded()) return;

    const surface = this.surface()?.nativeElement;

    if (!surface) return;

    const first = surface.querySelector<HTMLElement>(
      'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
    );

    (first ?? surface).focus({ preventScroll: true });
  }

  private restoreFocus(): void {
    const origin = this.originElement;

    this.originElement = undefined;

    if (origin && origin.isConnected) origin.focus({ preventScroll: true });
  }

  private startDragDetection(): void {
    if (!this.browser || this.cleanupDrag) return;

    const zone = this.handleZone()?.nativeElement;
    const doc = zone?.ownerDocument;

    if (!zone || !doc) return;

    const host = this.surface()?.nativeElement ?? zone;

    let pointerId: number | undefined;
    let startY = 0;
    let offset = 0;
    let moved = false;
    let velocity: GestureVelocity | undefined;

    const finish = (cancelled: boolean, timestamp: number): void => {
      if (pointerId === undefined) return;

      const captured = pointerId;

      pointerId = undefined;
      this.isDragging.set(false);

      if (zone.hasPointerCapture(captured)) zone.releasePointerCapture(captured);

      const displacement = Math.max(0, this.offset());
      const speed = cancelled ? 0 : (velocity?.velocity(timestamp) ?? 0);
      const limit = Math.max(BOTTOM_DRAWER_DISMISS_DISTANCE, Math.min(host.offsetHeight, this.ownerWindow()?.innerHeight ?? 800) * 0.22);
      const dismiss = moved && !cancelled && this.swipeToDismiss() && this.isDismissible() && (displacement > limit || speed > BOTTOM_DRAWER_DISMISS_VELOCITY);

      this.suppressClick = moved;

      if (dismiss) {
        this.requestClose('swipe');

        return;
      }

      this.returnMotion?.destroy();
      this.returnMotion = createSpringMotion([displacement], ([position]) => this.offset.set(Math.max(0, position)), MOTION_PRESETS.snappy);
      this.returnMotion.track([displacement], [speed]);
      this.returnMotion.retarget([0], !this.isAnimated());
    };

    const cancel = (): void => finish(true, 0);
    const pointerDown = (event: PointerEvent): void => {
      if (!event.isPrimary || event.button !== 0 || pointerId !== undefined || !this.open() || this.isEntering() || !this.isDismissible()) return;

      this.returnMotion?.destroy();
      this.returnMotion = undefined;
      pointerId = event.pointerId;
      startY = event.clientY;
      offset = this.offset();
      moved = false;
      velocity = new GestureVelocity(event.clientY, event.timeStamp);
      zone.setPointerCapture(event.pointerId);
      this.isDragging.set(true);
    };

    const pointerMove = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId) return;

      const distance = event.clientY - startY;

      moved ||= Math.abs(distance) > 4;
      velocity?.update(event.clientY, event.timeStamp);

      if (event.cancelable) event.preventDefault();

      this.offset.set(Math.max(0, offset + distance));
    };

    const pointerUp = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId) return;

      pointerMove(event);
      finish(false, event.timeStamp);
    };

    const pointerCancel = (event: PointerEvent): void => {
      if (event.pointerId === pointerId) cancel();
    };

    const keydown = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape' || pointerId === undefined) return;

      event.preventDefault();
      event.stopPropagation();
      cancel();
    };

    const visibility = (): void => {
      if (doc.hidden) cancel();
    };

    zone.addEventListener('pointerdown', pointerDown);
    zone.addEventListener('pointermove', pointerMove, { passive: false });
    zone.addEventListener('pointerup', pointerUp);
    zone.addEventListener('pointercancel', pointerCancel);
    zone.addEventListener('lostpointercapture', pointerCancel);
    doc.addEventListener('keydown', keydown, true);
    doc.addEventListener('visibilitychange', visibility);
    doc.defaultView?.addEventListener('blur', cancel);
    doc.defaultView?.addEventListener('resize', cancel);

    this.cleanupDrag = () => {
      cancel();
      zone.removeEventListener('pointerdown', pointerDown);
      zone.removeEventListener('pointermove', pointerMove);
      zone.removeEventListener('pointerup', pointerUp);
      zone.removeEventListener('pointercancel', pointerCancel);
      zone.removeEventListener('lostpointercapture', pointerCancel);
      doc.removeEventListener('keydown', keydown, true);
      doc.removeEventListener('visibilitychange', visibility);
      doc.defaultView?.removeEventListener('blur', cancel);
      doc.defaultView?.removeEventListener('resize', cancel);
    };
  }

  private isAnimated(): boolean {
    return !this.bxA11yService.isReducedMotion();
  }

  private ownerWindow(): Window | undefined {
    return this.surface()?.nativeElement.ownerDocument.defaultView ?? undefined;
  }

  private cleanup(): void {
    clearTimeout(this.detachTimeout);
    this.cleanupDrag?.();
    this.cleanupDrag = undefined;
    this.returnMotion?.destroy();
    this.returnMotion = undefined;
    this.disconnectTheme?.();
    this.disconnectLighting?.();
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }

  //#endregion
}
