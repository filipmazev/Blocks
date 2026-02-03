import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, input, output, signal, computed } from '@angular/core';
import { ModalConfig } from '../../../classes/modal-config';
import { ModalCloseMode } from '../../../types/modal.types';
import * as bottomSheetConst from '../../../constants/modal-bottom-sheet.constants';

@Component({
  selector: 'modal-bottom-sheet',
  imports: [
    NgClass,
    NgTemplateOutlet
  ],
  templateUrl: './modal-bottom-sheet.html',
  styleUrl: './modal-bottom-sheet.scss',
})
export class ModalBottomSheet implements OnInit, OnDestroy {
  readonly id = input.required<string | null>();
  readonly headerTemplate = input.required<TemplateRef<any> | null>();
  readonly footerTemplate = input.required<TemplateRef<any> | null>();
  readonly config = input.required<ModalConfig | undefined>();
  readonly isOpen = input.required<boolean>();
  readonly isAnimated = input.required<boolean>();
  readonly animationDuration = input.required<number>();

  readonly close = output<ModalCloseMode | undefined>();

  public currentTranslateY = signal(0);
  public isSwipingVerticallyFinished = signal(false);
  protected isSwipingVertically = signal(false);

  protected modalTransform = computed(() => {
    if (this.isSwipingVerticallyFinished()) {
      return 'translateY(100%)';
    }

    const calculatedY = Math.max(0, this.currentTranslateY());

    return `translateY(${calculatedY}px)`;
  });

  protected downSwipeLimit: number = 0;
  protected isTrackingSwipe: boolean = false;

  private isTouchActive = false;
  private bottomSheetInitiated: boolean = false;

  private cleanupListeners: (() => void) | null = null;
  private globalResizeCleanup: (() => void) | null = null;

  @ViewChild("verticalSwipeTarget", { static: true }) verticalSwipeTarget?: ElementRef;

  public ngOnInit(): void {
    this.startVerticalSwipeDetection();
    this.monitorInputType();
  }

  public ngOnDestroy(): void {
    this.stopVerticalSwipeDetection();
    this.globalResizeCleanup?.();
  }

  //#region Swipe Methods

  private startVerticalSwipeDetection(): void {
    if (this.isTrackingSwipe) return;

    const hasTouch = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0);
    if (!hasTouch) return;

    this.initBottomSheetModalParams();
    this.isTrackingSwipe = true;

    const target = this.verticalSwipeTarget?.nativeElement;
    if (!target) return;

    const limit = window.innerHeight / this.downSwipeLimit;

    let startY = 0;
    let startTime = 0;
    let isPointerDown = false;

    const pointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;

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

    this.downSwipeLimit = style?.downSwipeLimit && style.downSwipeLimit > 0
      ? style.downSwipeLimit
      : bottomSheetConst.MODAL_DOWN_SWIPE_LIMIT;
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