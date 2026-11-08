import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  OnDestroy,
  output,
  signal,
  TemplateRef,
  viewChild
} from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { createSpringMotion, GestureVelocity, ISpringMotion, MOTION_PRESETS, projectMotion } from '@filip.mazev/blocks/effects/runtime';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalBanner } from '@modal/components/shared/ui/banner/modal-banner';
import { ModalCloseMode } from '@modal/types/modal.types';

import * as bottomSheetConst from '@modal/constants/modal-bottom-sheet.constants';

@Component({
  selector: 'bx-modal-bottom-sheet',
  imports: [BxSurfaceDirective, NgClass, NgTemplateOutlet, ModalBanner],
  templateUrl: './modal-bottom-sheet.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal-bottom-sheet.scss'
})
export class ModalBottomSheet<D = unknown, R = unknown> implements OnDestroy {
  protected readonly hasInteracted: WritableSignal<boolean> = signal(false);
  protected readonly isSwipingVertically: WritableSignal<boolean> = signal(false);

  protected readonly modalTransform: Signal<string> = computed(() => {
    if (this.isSwipingVerticallyFinished()) {
      return 'translateY(100%)';
    }

    const calculatedY = Math.max(0, this.currentTranslateY());

    return `translateY(${calculatedY}px)`;
  });

  protected readonly verticalSwipeTarget: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef>('verticalSwipeTarget');
  protected readonly elementRef: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef>('elementRef');

  /** Current vertical swipe displacement in CSS pixels, used to render the overlay transform. Initially `0`. */
  public readonly currentTranslateY: WritableSignal<number> = signal(0);

  /** Whether the bottom-sheet dismissal swipe has completed and should render its exit position. Initially `false`. */
  public readonly isSwipingVerticallyFinished: WritableSignal<boolean> = signal(false);

  /** Modal DOM identifier supplied by the lifecycle host; null leaves the identifier unset. Required input. */
  public readonly id: InputSignal<string | null> = input.required<string | null>();
  /** Custom modal header template registered with the lifecycle host; null uses the configured banner. Required input. */
  public readonly headerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  /** Custom modal footer template registered with the lifecycle host; null omits custom footer content. Required input. */
  public readonly footerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  /** Resolved modal configuration supplied by the modal lifecycle host. Required input. */
  public readonly config: InputSignal<ModalConfig<D, R> | undefined> = input.required<ModalConfig<D, R> | undefined>();
  /** Current open state of the overlay. Required input. */
  public readonly isOpen: InputSignal<boolean> = input.required<boolean>();
  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. Required input. */
  public readonly isAnimated: InputSignal<boolean> = input.required<boolean>();
  /** Whether the modal renders its configured heading and close-action banner. Required input. */
  public readonly hasBanner: InputSignal<boolean> = input.required<boolean>();
  /** Duration of overlay entrance and exit motion in milliseconds. Required input. */
  public readonly animationDuration: InputSignal<number> = input.required<number>();

  /** Emits a requested modal close mode; the lifecycle host performs guarded dismissal. */
  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();

  private cleanupListeners: (() => void) | null = null;
  private cancelSwipe: (() => void) | undefined;
  private returnMotion: ISpringMotion | undefined;
  private suppressClick: boolean = false;

  constructor() {
    afterNextRender(() => this.startVerticalSwipeDetection());
    effect(() => {
      if (this.config()?.disableClose || !this.isOpen() || this.isSwipingVerticallyFinished()) this.cancelSwipe?.();

      if (!this.isAnimated()) this.returnMotion?.retarget([0], true);
    });
  }

  /** Remove swipe listeners and stop pending return motion when the view is destroyed. */
  public ngOnDestroy(): void {
    this.cleanupListeners?.();
    this.returnMotion?.destroy();
  }

  protected onDismissClick(event: MouseEvent): void {
    if (this.suppressClick && event.detail > 0) {
      this.suppressClick = false;
      event.preventDefault();

      return;
    }

    if (!this.config()?.disableClose) this.close.emit('cancel');
  }

  //#region Helpers

  private startVerticalSwipeDetection(): void {
    const target = this.verticalSwipeTarget()?.nativeElement;
    const doc = target?.ownerDocument;

    if (!target || !doc) return;

    let pointerId: number | undefined;
    let startY = 0;
    let offset = 0;
    let moved = false;
    let velocity: GestureVelocity | undefined;

    const finish = (cancelled: boolean, timestamp: number): void => {
      if (pointerId === undefined) return;

      const captured = pointerId;
      const displacement = Math.max(0, this.currentTranslateY());
      const speed = cancelled ? 0 : (velocity?.velocity(timestamp) ?? 0);
      const height = this.elementRef()?.nativeElement.offsetHeight ?? 0;
      const divisor = this.config()?.style?.mobileConfig?.downSwipeLimit;
      const limit = height / (divisor && Number.isFinite(divisor) && divisor > 0 ? divisor : bottomSheetConst.MODAL_DOWN_SWIPE_LIMIT);
      const dismiss = moved && !cancelled && !this.config()?.disableClose && projectMotion(displacement, speed, height / 2) > limit;

      pointerId = undefined;
      this.isSwipingVertically.set(false);
      this.suppressClick = moved;

      if (target.hasPointerCapture(captured)) target.releasePointerCapture(captured);

      this.returnMotion?.destroy();
      this.returnMotion = createSpringMotion([displacement], ([position]) => this.currentTranslateY.set(Math.max(0, position)), MOTION_PRESETS.snappy);
      this.returnMotion.track([displacement], [speed]);
      this.returnMotion.retarget([0], !this.isAnimated());

      // The lifecycle host owns guards and the exit. Preview never dismisses an unconfirmed sheet.
      if (dismiss) this.close.emit('cancel');
    };

    const cancel = (): void => finish(true, 0);
    const pointerDown = (event: PointerEvent): void => {
      if (!event.isPrimary || event.button !== 0 || pointerId !== undefined || this.config()?.disableClose || !this.isOpen()) return;

      this.returnMotion?.destroy();
      this.returnMotion = undefined;
      pointerId = event.pointerId;
      startY = event.clientY;
      offset = this.currentTranslateY();
      moved = false;
      velocity = new GestureVelocity(event.clientY, event.timeStamp);
      this.suppressClick = false;
      this.hasInteracted.set(true);
      this.isSwipingVertically.set(true);
      target.setPointerCapture(event.pointerId);
    };

    const pointerMove = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId) return;

      if (this.config()?.disableClose) {
        cancel();

        return;
      }

      const distance = event.clientY - startY;

      moved ||= Math.abs(distance) > 6;
      velocity?.update(event.clientY, event.timeStamp);

      if (event.cancelable) event.preventDefault();

      this.currentTranslateY.set(Math.max(0, offset + distance));
    };

    const pointerUp = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId) return;

      pointerMove(event);
      finish(false, event.timeStamp);
    };

    const pointerCancel = (event: PointerEvent): void => {
      if (event.pointerId === pointerId) cancel();
    };

    const visibility = (): void => {
      if (doc.hidden) cancel();
    };

    const keydown = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape' || pointerId === undefined) return;

      event.preventDefault();
      event.stopPropagation();
      cancel();
    };

    this.cancelSwipe = cancel;
    target.addEventListener('pointerdown', pointerDown);
    target.addEventListener('pointermove', pointerMove, { passive: false });
    target.addEventListener('pointerup', pointerUp);
    target.addEventListener('pointercancel', pointerCancel);
    target.addEventListener('lostpointercapture', pointerCancel);
    doc.addEventListener('keydown', keydown, true);
    doc.addEventListener('visibilitychange', visibility);
    doc.defaultView?.addEventListener('blur', cancel);
    doc.defaultView?.addEventListener('resize', cancel);
    this.cleanupListeners = () => {
      cancel();
      this.cancelSwipe = undefined;
      target.removeEventListener('pointerdown', pointerDown);
      target.removeEventListener('pointermove', pointerMove);
      target.removeEventListener('pointerup', pointerUp);
      target.removeEventListener('pointercancel', pointerCancel);
      target.removeEventListener('lostpointercapture', pointerCancel);
      doc.removeEventListener('keydown', keydown, true);
      doc.removeEventListener('visibilitychange', visibility);
      doc.defaultView?.removeEventListener('blur', cancel);
      doc.defaultView?.removeEventListener('resize', cancel);
    };
  }

  //#endregion
}
