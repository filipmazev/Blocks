import { NgClass } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, input, output } from '@angular/core';
import { Subject, take } from 'rxjs';
import { GenericModalConfig } from '../../../classes/generic-modal-config';
import { ModalCloseMode } from '../../../types/modal.types';
import * as swipeConst from '../../../constants/generic-modal-swipe.constants';

@Component({
  selector: 'modal-swipeable',
  imports: [
    NgClass
  ],
  templateUrl: './modal-swipeable.html',
  styleUrl: './modal-swipeable.scss',
})
export class ModalSwipeable implements OnInit, OnDestroy {
  readonly footerTemplate = input.required<TemplateRef<any> | null>();
  
  readonly config = input.required<GenericModalConfig<any> | undefined>();
  readonly isOpen = input.required<boolean>();
  readonly isAnimated = input.required<boolean>();
  readonly animationDuration = input.required<number>();

  readonly close = output<ModalCloseMode | undefined>();

  public currentTranslateY: number = 0;
  public isSwipingVerticallyFinished: boolean = false;

  protected isSwipingVertically: boolean = false;

  protected downSwipeLimit: number = 0;
  protected upSwipeLimit: number = 0;

  protected windowInnerHeight: number = window.innerHeight;

  protected isTrackingSwipe: boolean = false;

  private isTouchActive = false;
  private swipeableModalInitiated: boolean = false;
  private globalPointerListenerAdded = false;

  private touchDetectionUnsubscribe$ = new Subject<void>();

  @ViewChild("verticalSwipeTarget", { static: true }) verticalSwipeTarget?: ElementRef;
  @ViewChild("modalContent", { static: true }) modalContent?: ElementRef;

  public ngOnInit(): void {
    this.startVerticalSwipeDetection();
    this.monitorInputType();
  }

  public ngOnDestroy(): void {
    this.stopVerticalSwipeDetection();
  }

  //#region Swipe Methods

  private startVerticalSwipeDetection(): void {
    if (this.isTrackingSwipe) return;

    const hasTouch = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
    if (!hasTouch) return;

    this.initSwipeableModalParams();

    this.touchDetectionUnsubscribe$ = new Subject<void>();
    this.isTrackingSwipe = true;

    const target = this.verticalSwipeTarget?.nativeElement;
    if (!target) return;

    const limit = document.body.offsetHeight / this.downSwipeLimit;

    let startY = 0;
    let currentY = 0;
    let isPointerDown = false;

    const pointerDown = (event: PointerEvent) => {
      isPointerDown = true;
      startY = event.clientY;
      this.isSwipingVertically = true;
    };

    const pointerMove = (event: PointerEvent) => {
      if (!isPointerDown) return;
      currentY = event.clientY - startY;

      event.preventDefault();
      this.currentTranslateY = currentY;
    };

    const pointerUp = (event: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      this.isSwipingVertically = false;

      const deltaY = event.clientY - startY;
      const velocityY = (event.clientY - startY) / (event.timeStamp - (event as any).startTime || 1);

      if (Math.abs(deltaY) > limit || velocityY > swipeConst.GENERIC_MODAL_SWIPE_VELOCITY_THRESHOLD) {
        this.close.emit('cancel');
      } else {
        this.currentTranslateY = 0;
      }
    };

    target.addEventListener('pointerdown', pointerDown);
    target.addEventListener('pointermove', pointerMove);
    target.addEventListener('pointerup', pointerUp);
    target.addEventListener('pointercancel', pointerUp);

    this.touchDetectionUnsubscribe$.pipe(take(1)).subscribe(() => {
      target.removeEventListener('pointerdown', pointerDown);
      target.removeEventListener('pointermove', pointerMove);
      target.removeEventListener('pointerup', pointerUp);
      target.removeEventListener('pointercancel', pointerUp);
    });
  }

  private stopVerticalSwipeDetection(): void {
    if (!this.isTrackingSwipe) return;

    this.isTrackingSwipe = false;

    this.touchDetectionUnsubscribe$.next();
    this.touchDetectionUnsubscribe$.complete();
  }

  private initSwipeableModalParams(): void {
    if (!this.swipeableModalInitiated) {
      this.swipeableModalInitiated = true;

      const config = this.config();
      this.downSwipeLimit = config?.style.mobileConfig?.downSwipeLimit
        ? config.style.mobileConfig.downSwipeLimit > 0
          ? config.style.mobileConfig.downSwipeLimit
          : 1
        : swipeConst.GENERIC_MODAL_DOWN_SWIPE_LIMIT;

      const configValue = this.config();
      this.upSwipeLimit = configValue?.style.mobileConfig?.upSwipeLimit
        ? configValue.style.mobileConfig.upSwipeLimit > 0
          ? configValue.style.mobileConfig.upSwipeLimit
          : swipeConst.GENERIC_MODAL_UP_SWIPE_LIMIT
        : window.innerHeight;
    }
  }

  private monitorInputType(): void {
    if (this.globalPointerListenerAdded) return;
    this.globalPointerListenerAdded = true;

    window.addEventListener('pointerdown', (event: PointerEvent) => {
      const isTouch = event.pointerType === 'touch';

      if (isTouch && !this.isTouchActive) {
        this.isTouchActive = true;
        this.startVerticalSwipeDetection();
      } else if (!isTouch && this.isTouchActive) {
        this.isTouchActive = false;
        this.stopVerticalSwipeDetection();
      }
    });
  }

  //#endregion
}
