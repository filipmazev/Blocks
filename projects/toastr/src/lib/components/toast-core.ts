import { Component, ViewChild, ViewContainerRef, ComponentRef, ElementRef, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { IToastConfig } from '../interfaces/itoast-config.interface';
import { ToastRef } from '../classes/toast-ref';
import { IToast } from '../interfaces/itoast.interface';

@Component({
  selector: 'app-toast-core',
  imports: [NgClass],
  templateUrl: './toast-core.html',
  styleUrl: './toast-core.scss'
})
export class ToastCore<D, R, C extends IToast<D, R> = IToast<D, R>> implements OnInit, OnDestroy {
  public componentRef!: ComponentRef<C>;
  public config?: IToastConfig<D>;
  public toastRef!: ToastRef<R>;

  public isVisible = signal(false);
  public currentTranslateY = signal(0);
  public isSwipingFinished = signal(false);

  protected isAnimated = computed(() => this.config?.animate !== false);

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) protected dynamicContainer!: ViewContainerRef;
  @ViewChild('toastSwipeTarget', { static: true }) protected toastSwipeTarget!: ElementRef;

  protected wrapperClasses = computed(() => {
    const isTop = (this.config?.position ?? 'top-right').includes('top');
    const animClass = isTop ? 'anim-dir-top' : 'anim-dir-bottom';
    const wrapperClass = this.config?.wrapperClass ?? 'default-wrapper';
    return `${animClass} ${wrapperClass}`;
  });

  protected modalTransform = computed(() => {
    if (!this.isAnimated()) return null;

    const isTop = (this.config?.position ?? 'top-right').includes('top');

    if (this.isSwipingFinished()) {
      return isTop ? 'translateY(-120%)' : 'translateY(120%)';
    }

    if (this.currentTranslateY() !== 0) {
      return `translateY(${this.currentTranslateY()}px)`;
    }

    return null;
  });

  private isTrackingSwipe = false;
  private autoCloseTimeout?: ReturnType<typeof setTimeout>;
  private hasEmittedClose = false;
  private cleanupListeners: Array<() => void> = [];

  public ngOnInit(): void {
    this.dynamicContainer.insert(this.componentRef.hostView);

    setTimeout(() => this.isVisible.set(true), 10);

    if (this.config?.swipeToDismiss !== false) {
      this.startVerticalSwipeDetection();
    }

    if (this.config?.durationInMs) {
      this.autoCloseTimeout = setTimeout(() => this.closeToast(), this.config.durationInMs);
    }

    const target = this.toastSwipeTarget.nativeElement;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') return;
      if (!this.isVisible() && !this.hasEmittedClose) {
        this.hasEmittedClose = true;
        this.toastRef.close();
      }
    };

    target.addEventListener('transitionend', onTransitionEnd);
    this.cleanupListeners.push(() => target.removeEventListener('transitionend', onTransitionEnd));
  }

  public ngOnDestroy(): void {
    clearTimeout(this.autoCloseTimeout);
    this.isTrackingSwipe = false;
    this.cleanupListeners.forEach((fn) => fn());
    this.cleanupListeners = [];
  }

  public closeToast(): void {
    this.isVisible.set(false);
    this.isSwipingFinished.set(true);
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

      clearTimeout(this.autoCloseTimeout);
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
        this.closeToast();
      } else {
        this.currentTranslateY.set(0);
        if (this.config?.durationInMs) {
          this.autoCloseTimeout = setTimeout(() => this.closeToast(), this.config.durationInMs);
        }
      }
    };

    target.addEventListener('pointerdown', pointerDown, { passive: false });
    target.addEventListener('pointermove', pointerMove, { passive: false });
    target.addEventListener('pointerup', pointerUp);
    target.addEventListener('pointercancel', pointerUp);

    this.cleanupListeners.push(() => {
      target.removeEventListener('pointerdown', pointerDown);
      target.removeEventListener('pointermove', pointerMove);
      target.removeEventListener('pointerup', pointerUp);
      target.removeEventListener('pointercancel', pointerUp);
    });
  }

  //#endregion
}
