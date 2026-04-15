import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ElementRef,
  OnInit,
  OnDestroy,
  signal,
  computed,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { NgClass } from '@angular/common';
import { IToastConfig } from '../interfaces/itoast-config.interface';
import { ToastRef } from '../classes/toast-ref';
import { IToast } from '../interfaces/itoast.interface';

@Component({
  selector: 'bx-toast-core',
  imports: [NgClass],
  templateUrl: './toast-core.html',
  styleUrl: './toast-core.scss'
})
export class ToastCore<D, R, C extends IToast<D, R> = IToast<D, R>> implements OnInit, AfterViewInit, OnDestroy {
  public componentRef!: ComponentRef<C>;
  public config?: IToastConfig<D>;
  public toastRef!: ToastRef<D, R>;

  public isVisible = signal(false);
  public currentTranslateY = signal(0);
  public isSwipingFinished = signal(false);

  public isCollapsing = signal(false);

  protected isAnimated = computed(() => this.config?.animate !== false);
  protected isBottom = computed(() => (this.config?.position ?? 'top-right').includes('bottom'));

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) protected dynamicContainer!: ViewContainerRef;
  @ViewChild('toastSwipeTarget', { static: true }) protected toastSwipeTarget!: ElementRef;
  @ViewChild('animatorWrapper', { static: true }) protected animatorWrapper!: ElementRef;
  
  protected wrapperClasses = computed(() => {
    const isTop = (this.config?.position ?? 'top-right').includes('top');
    const animClass = isTop ? 'anim-dir-top' : 'anim-dir-bottom';
    const wrapperClass = this.config?.wrapperClass ?? 'default-wrapper' + (this.config?.hasDefaultBackground === false ? ' no-bg' : '');
    return `${animClass} ${wrapperClass}`;
  });

  protected toastrTransform = computed(() => {
    if (!this.isAnimated()) return null;

    const isTop = (this.config?.position ?? 'top-right').includes('top');

    if (this.isSwipingFinished()) {
      return isTop ? 'translateY(-150px)' : 'translateY(150px)';
    }

    if (this.currentTranslateY() !== 0) {
      return `translateY(${this.currentTranslateY()}px)`;
    }

    return null;
  });

  private progressAnimation?: Animation;

  private remainingMs = 0;

  private timerStartTime = 0;

  private originalCloseFn!: (result?: R) => void;
  private closeResult?: R;

  private isTrackingSwipe = false;
  private isTouchActive = false;
  private autoCloseTimeout?: ReturnType<typeof setTimeout>;
  private hasEmittedClose = false;

  private cleanupListeners: Array<() => void> = [];
  private swipeCleanupListeners: (() => void) | null = null;
  private globalResizeCleanup: (() => void) | null = null;

  public ngOnInit(): void {
    this.dynamicContainer.insert(this.componentRef.hostView);

    this.originalCloseFn = this.toastRef.close.bind(this.toastRef);
    this.toastRef.close = (result?: R) => {
      this.closeToast(result);
    };

    setTimeout(() => this.isVisible.set(true), 10);

    if (this.config?.swipeToDismiss !== false) {
      this.startVerticalSwipeDetection();
      this.monitorInputType();
    }

    const animatorTarget = this.animatorWrapper.nativeElement;

    const onAnimatorTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== animatorTarget || event.propertyName !== 'grid-template-rows') return;
      if (this.isCollapsing() && !this.hasEmittedClose) {
        this.hasEmittedClose = true;
        this.originalCloseFn(this.closeResult);
      }
    };

    animatorTarget.addEventListener('transitionend', onAnimatorTransitionEnd);
    this.cleanupListeners.push(() => animatorTarget.removeEventListener('transitionend', onAnimatorTransitionEnd));
  }

  public ngAfterViewInit(): void {
    if (this.config?.durationInMs) {
      this.remainingMs = this.config.durationInMs;
      this.startTimer();
    }
  }

  public ngOnDestroy(): void {
    clearTimeout(this.autoCloseTimeout);

    this.stopVerticalSwipeDetection();
    this.globalResizeCleanup?.();

    this.cleanupListeners.forEach((fn) => fn());
    this.cleanupListeners = [];

    this.progressAnimation?.cancel();
  }

  public closeToast(result?: R, fromSwipe = false): void {
    this.closeResult = result !== undefined ? result : this.closeResult;

    if (!this.isAnimated()) {
      if (!this.hasEmittedClose) {
        this.hasEmittedClose = true;
        this.originalCloseFn(this.closeResult);
      }
      return;
    }

    this.isVisible.set(false);
    this.isCollapsing.set(true);

    if (fromSwipe) {
      this.isSwipingFinished.set(true);
    }
  }

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    if (!this.isTouchActive && this.config?.durationInMs && !this.isCollapsing()) {
      this.pauseTimer();
    }
  }

  @HostListener('mouseleave')
  protected onMouseLeave(): void {
    if (!this.isTouchActive && this.config?.durationInMs && !this.isCollapsing()) {
      this.startTimer();
      this.toastRef.resume();
    }
  }
  //#region Swipe Logic

  private startVerticalSwipeDetection(): void {
    if (this.isTrackingSwipe) return;

    const hasTouch = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0);
    if (!hasTouch) return;

    this.isTrackingSwipe = true;
    const target = this.toastSwipeTarget.nativeElement;
    const isTop = (this.config?.position ?? 'top-right').includes('top');

    let startY = 0;
    let startTime = 0;
    let isPointerDown = false;
    let limit = 0;

    const pointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;

      const toastHeight = target.offsetHeight || 0;
      limit = toastHeight / 3;

      isPointerDown = true;
      startY = event.clientY;
      startTime = event.timeStamp;

      this.pauseTimer();
      target.setPointerCapture(event.pointerId);
    };

    const pointerMove = (event: PointerEvent) => {
      if (!isPointerDown) return;
      const currentY = event.clientY - startY;

      if ((isTop && currentY < 0) || (!isTop && currentY > 0)) {
        if (event.cancelable) event.preventDefault();
        this.currentTranslateY.set(currentY);
      }
    };

    const pointerUp = (event: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      target.releasePointerCapture(event.pointerId);

      const deltaY = event.clientY - startY;
      const duration = event.timeStamp - startTime || 1;
      const velocityY = Math.abs(deltaY / duration);

      const crossedLimit = isTop ? deltaY < -limit : deltaY > limit;

      if (crossedLimit || velocityY > 0.3) {
        this.closeToast(undefined, true);
      } else {
        this.currentTranslateY.set(0);
        this.startTimer();
        this.toastRef.resume();
      }
    };

    target.addEventListener('pointerdown', pointerDown, { passive: false });
    target.addEventListener('pointermove', pointerMove, { passive: false });
    target.addEventListener('pointerup', pointerUp);
    target.addEventListener('pointercancel', pointerUp);

    this.swipeCleanupListeners = () => {
      target.removeEventListener('pointerdown', pointerDown);
      target.removeEventListener('pointermove', pointerMove);
      target.removeEventListener('pointerup', pointerUp);
      target.removeEventListener('pointercancel', pointerUp);
    };
  }

  private stopVerticalSwipeDetection(): void {
    if (!this.isTrackingSwipe) return;

    this.isTrackingSwipe = false;

    if (this.swipeCleanupListeners) {
      this.swipeCleanupListeners();
      this.swipeCleanupListeners = null;
    }
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

  //#region Timer Logic

  private startTimer(): void {
    if (this.remainingMs <= 0) return;

    this.timerStartTime = Date.now();
    this.autoCloseTimeout = setTimeout(() => this.closeToast(), this.remainingMs);
  }

  private pauseTimer(): void {
    if (!this.autoCloseTimeout) return;

    clearTimeout(this.autoCloseTimeout);
    this.autoCloseTimeout = undefined;

    const elapsed = Date.now() - this.timerStartTime;
    this.remainingMs -= elapsed;

    this.toastRef.pause();
  }

  //#endregion
}
