import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, input, OnDestroy, OnInit, output, signal, TemplateRef, viewChild } from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

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
export class ModalBottomSheet<D = unknown, R = unknown> implements OnInit, OnDestroy {
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

  public readonly currentTranslateY: WritableSignal<number> = signal(0);

  public readonly isSwipingVerticallyFinished: WritableSignal<boolean> = signal(false);

  public readonly id: InputSignal<string | null> = input.required<string | null>();
  public readonly headerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  public readonly footerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  public readonly config: InputSignal<ModalConfig<D, R> | undefined> = input.required<ModalConfig<D, R> | undefined>();
  public readonly isOpen: InputSignal<boolean> = input.required<boolean>();
  public readonly isAnimated: InputSignal<boolean> = input.required<boolean>();
  public readonly hasBanner: InputSignal<boolean> = input.required<boolean>();
  public readonly animationDuration: InputSignal<number> = input.required<number>();

  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();

  protected downSwipeLimit: number = 0;
  protected isTrackingSwipe: boolean = false;

  private isTouchActive: boolean = false;
  private bottomSheetInitiated: boolean = false;
  private cleanupListeners: (() => void) | null = null;
  private globalResizeCleanup: (() => void) | null = null;

  public ngOnInit(): void {
    this.startVerticalSwipeDetection();
    this.monitorInputType();
  }

  public ngOnDestroy(): void {
    this.stopVerticalSwipeDetection();
    this.globalResizeCleanup?.();
  }

  protected onDismissClick(event: MouseEvent): void {
    if (!this.isTrackingSwipe || event.detail === 0) this.close.emit('cancel');
  }

  //#region Helpers

  private startVerticalSwipeDetection(): void {
    if (this.isTrackingSwipe) return;

    const hasTouch = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0);

    if (!hasTouch) return;

    this.initBottomSheetModalParams();
    this.isTrackingSwipe = true;

    const target = this.verticalSwipeTarget()?.nativeElement;

    if (!target) return;

    let limit = 0;

    let startY = 0;
    let startTime = 0;
    let isPointerDown = false;

    const pointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;

      const modalHeight = this.elementRef()?.nativeElement.offsetHeight || 0;

      limit = modalHeight / this.downSwipeLimit;

      isPointerDown = true;
      startY = event.clientY;
      startTime = event.timeStamp;

      this.isSwipingVertically.set(true);

      target.setPointerCapture(event.pointerId);
    };

    const pointerMove = (event: PointerEvent) => {
      if (!isPointerDown) return;

      const currentY = event.clientY - startY;

      if (event.cancelable) event.preventDefault();

      this.currentTranslateY.set(currentY);
    };

    const pointerUp = (event: PointerEvent) => {
      if (!isPointerDown) return;

      isPointerDown = false;
      this.isSwipingVertically.set(false);
      target.releasePointerCapture(event.pointerId);

      const deltaY = event.clientY - startY;
      const duration = event.timeStamp - startTime || 1;
      const velocityY = deltaY / duration;

      if (deltaY > limit || (velocityY > bottomSheetConst.MODAL_SWIPE_VELOCITY_THRESHOLD && deltaY > 0)) {
        this.close.emit('cancel');
      } else {
        this.currentTranslateY.set(0);
      }
    };

    target.addEventListener('pointerdown', pointerDown, { passive: false });
    target.addEventListener('pointermove', pointerMove, { passive: false });
    target.addEventListener('pointerup', pointerUp);
    target.addEventListener('pointercancel', pointerUp);

    this.cleanupListeners = () => {
      target.removeEventListener('pointerdown', pointerDown);
      target.removeEventListener('pointermove', pointerMove);
      target.removeEventListener('pointerup', pointerUp);
      target.removeEventListener('pointercancel', pointerUp);
    };
  }

  private stopVerticalSwipeDetection(): void {
    if (!this.isTrackingSwipe) return;

    this.isTrackingSwipe = false;

    if (this.cleanupListeners) {
      this.cleanupListeners();
      this.cleanupListeners = null;
    }
  }

  private initBottomSheetModalParams(): void {
    if (this.bottomSheetInitiated) return;

    this.bottomSheetInitiated = true;

    const config = this.config();
    const style = config?.style?.mobileConfig;

    this.downSwipeLimit = style?.downSwipeLimit && style.downSwipeLimit > 0 ? style.downSwipeLimit : bottomSheetConst.MODAL_DOWN_SWIPE_LIMIT;
  }

  private monitorInputType(): void {
    if (this.globalResizeCleanup) return;

    const handler = (event: PointerEvent) => {
      const isTouch = event.pointerType === 'touch';

      if (isTouch && !this.isTouchActive) {
        this.isTouchActive = true;
        this.startVerticalSwipeDetection();
      } else if (!isTouch && this.isTouchActive) {
        this.isTouchActive = false;
        this.stopVerticalSwipeDetection();
      }
    };

    window.addEventListener('pointerdown', handler);
    this.globalResizeCleanup = () => window.removeEventListener('pointerdown', handler);
  }

  //#endregion
}
