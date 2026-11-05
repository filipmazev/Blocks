import type { Signal, WritableSignal } from '@angular/core';

import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  computed,
  ElementRef,
  HostListener,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import type { ThemedColor } from '@filip.mazev/blocks/core';

import { BxA11yService, Color, getComplementaryToken, resolveTokenToCssVar } from '@filip.mazev/blocks/core';
import { BxGlassLightingService, BxSurfaceDirective, IBxGlassLight } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { ToastRef } from '@toastr/classes/toast-ref';
import { SimpleToast } from '@toastr/components/views/simple-toast/simple-toast';
import { IToast } from '@toastr/interfaces/itoast.interface';
import { IToastConfig } from '@toastr/interfaces/itoast-config.interface';
import { ToastrGlobalSettingsService } from '@toastr/services/toastr-global-settings.service';

@Component({
  selector: 'bx-toast-core',
  imports: [BxSurfaceDirective, NgClass, Icon],
  templateUrl: './toast-core.html',
  // The service assigns configuration, content and ToastRef through the existing imperative API.
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './toast-core.scss'
})
export class ToastCore<D, R, C extends IToast<D, R> = IToast<D, R>> implements OnInit, AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly lighting = inject(BxGlassLightingService);
  private readonly a11y = inject(BxA11yService);
  private readonly toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);

  protected readonly showCloseButton: Signal<boolean> = computed(() => this.config?.showCloseButton ?? this.toastrGlobalSettingsService.showCloseButton());
  protected readonly closeButtonColor: Signal<ThemedColor | undefined> = computed(
    () => this.config?.closeButtonColor ?? this.toastrGlobalSettingsService.closeButtonColor()
  );
  protected readonly showProgressBar: Signal<boolean> = computed(() => {
    if (this.config?.showProgressBar === false) return false;

    return this.config?.showProgressBar === true || this.config?.progressBarColor !== undefined;
  });
  protected readonly progressBarColor: Signal<Color | undefined> = computed(() => {
    return this.showProgressBar() ? ((this.config?.progressBarColor ?? this.toastrGlobalSettingsService.progressBarColor()) as Color) : undefined;
  });
  protected readonly progressBarCssVar: Signal<string | undefined> = computed(() => {
    const progressBarColor = this.progressBarColor();

    return progressBarColor ? resolveTokenToCssVar(progressBarColor) : undefined;
  });
  protected readonly progressBarBgCssVar: Signal<string | undefined> = computed(() => {
    const progressBarColor = this.progressBarColor();

    return progressBarColor ? resolveTokenToCssVar(getComplementaryToken(progressBarColor)) : undefined;
  });
  protected readonly isAnimated: Signal<boolean> = computed(() => !this.a11y.isReducedMotion() && this.config?.animate !== false);
  protected readonly isBottom: Signal<boolean> = computed(() => (this.config?.position ?? this.toastrGlobalSettingsService.position()).includes('bottom'));
  protected readonly simpleToastSurface: Signal<string | null> = computed(() => {
    const instance = this.componentRef?.instance;

    return instance instanceof SimpleToast ? `color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${instance.data.type}))` : null;
  });
  protected readonly emissionColor: Signal<string | undefined> = computed(() => {
    const instance = this.componentRef?.instance;

    return instance instanceof SimpleToast ? `var(--bx-text-${instance.data.type})` : this.progressBarCssVar();
  });
  protected readonly wrapperClasses: Signal<string> = computed(() => {
    const isTop = (this.config?.position ?? 'top-right').includes('top');
    const animClass = isTop ? 'anim-dir-top' : 'anim-dir-bottom';
    const wrapperClass = this.config?.wrapperClass ?? 'default-wrapper' + (this.config?.hasDefaultBackground === false ? ' no-bg' : '');

    return `${animClass} ${wrapperClass}`;
  });
  protected readonly toastrTransform: Signal<string | null> = computed(() => {
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

  protected readonly dynamicContainer: Signal<ViewContainerRef> = viewChild.required('dynamicContainer', {
    read: ViewContainerRef
  });
  protected readonly toastSwipeTarget: Signal<ElementRef<HTMLElement>> = viewChild.required<ElementRef<HTMLElement>>('toastSwipeTarget');
  protected readonly animatorWrapper: Signal<ElementRef<HTMLElement>> = viewChild.required<ElementRef<HTMLElement>>('animatorWrapper');
  protected readonly progressBar: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('progressBar');

  public readonly isVisible: WritableSignal<boolean> = signal(false);

  public readonly currentTranslateY: WritableSignal<number> = signal(0);

  public readonly isSwipingFinished: WritableSignal<boolean> = signal(false);
  public readonly isCollapsing: WritableSignal<boolean> = signal(false);

  public componentRef!: ComponentRef<C>;
  public config?: IToastConfig<D>;
  public toastRef!: ToastRef<D, R>;

  private light?: IBxGlassLight;
  private lightFrame?: number;
  private lastLightProgress: number = -1;
  private destroyed: boolean = false;
  private progressAnimation?: Animation;
  private subs: Subscription = new Subscription();
  private remainingMs: number = 0;
  private timerStartTime: number = 0;
  private originalCloseFn!: (result?: R) => void;
  private closeResult?: R;
  private isTrackingSwipe: boolean = false;
  private isTouchActive: boolean = false;
  private autoCloseTimeout?: ReturnType<typeof setTimeout>;
  private hasEmittedClose: boolean = false;
  private cleanupListeners: Array<() => void> = [];
  private swipeCleanupListeners: (() => void) | null = null;
  private globalResizeCleanup: (() => void) | null = null;

  public ngOnInit(): void {
    this.originalCloseFn = this.toastRef.close.bind(this.toastRef);
    this.toastRef.close = (result?: R) => {
      this.closeToast(result);
    };
  }

  public ngAfterViewInit(): void {
    this.dynamicContainer().insert(this.componentRef.hostView);

    setTimeout(() => this.isVisible.set(true), 10);

    if (this.config?.swipeToDismiss !== false) {
      this.startVerticalSwipeDetection();
      this.monitorInputType();
    }

    const animatorTarget = this.animatorWrapper().nativeElement;

    const onAnimatorTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== animatorTarget || event.propertyName !== 'grid-template-rows') return;

      if (this.isCollapsing() && !this.hasEmittedClose) {
        this.hasEmittedClose = true;
        this.originalCloseFn(this.closeResult);
      }
    };

    animatorTarget.addEventListener('transitionend', onAnimatorTransitionEnd);
    this.cleanupListeners.push(() => animatorTarget.removeEventListener('transitionend', onAnimatorTransitionEnd));

    const duration = this.config?.durationInMs;

    if (duration) {
      this.remainingMs = duration;
      this.startTimer();
    }

    const progressBar = this.progressBar()?.nativeElement;

    if (duration && progressBar) {
      this.progressAnimation = progressBar.animate([{ width: '100%' }, { width: '0%' }], { duration, fill: 'forwards' });

      this.subs.add(
        this.toastRef.onPause$.subscribe(() => {
          this.progressAnimation?.pause();
          this.paintLight();
          this.stopLightFrame();
        })
      );

      this.subs.add(
        this.toastRef.onResume$.subscribe(() => {
          this.progressAnimation?.play();
          this.startLightFrame();
        })
      );
    }

    this.startLightFrame();
  }

  public ngOnDestroy(): void {
    this.destroyed = true;
    this.stopLightFrame();
    this.light?.destroy();
    clearTimeout(this.autoCloseTimeout);

    this.stopVerticalSwipeDetection();
    this.globalResizeCleanup?.();

    this.cleanupListeners.forEach((fn) => fn());
    this.cleanupListeners = [];

    this.progressAnimation?.cancel();
    this.subs.unsubscribe();
  }

  public closeToast(result?: R, fromSwipe = false): void {
    this.closeResult = result !== undefined ? result : this.closeResult;
    this.stopLightFrame();
    this.light?.destroy();
    this.light = undefined;

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

  //#region Helpers

  private paintLight(): void {
    const surface = this.toastSwipeTarget().nativeElement as HTMLElement;
    const color = this.emissionColor();
    const root = surface.closest<HTMLElement>('.toast-container');

    if (!color || !root || this.destroyed) return;

    const bounds = surface.getBoundingClientRect();
    const bar = this.progressBar()?.nativeElement as HTMLElement | undefined;
    const edge = bar?.getBoundingClientRect();
    const progress = edge && bounds.width ? (edge.right - bounds.left) / bounds.width : 0.5;

    if (Math.abs(progress - this.lastLightProgress) < 0.0001) return;

    this.lastLightProgress = progress;
    surface.style.setProperty('--bx-toast-light-x', `${progress * 100}%`);

    const light = {
      element: bar ?? surface,
      offsetX: bar ? 1 : 0.5,
      offsetY: 1,
      excludeElement: surface,
      color,
      z: 48,
      intensity: 1.1,
      radius: 360
    };

    if (this.light) this.light.update(light);
    else this.light = this.lighting.register(root, light);
  }

  private startLightFrame(): void {
    this.paintLight();

    if (this.lightFrame !== undefined || !this.progressAnimation || this.destroyed || !this.isAnimated()) return;

    this.zone.runOutsideAngular(() => {
      const frame = () => {
        this.lightFrame = undefined;

        if (this.destroyed || this.isCollapsing() || !this.isAnimated()) return;

        this.paintLight();

        if (this.progressAnimation?.playState === 'running') this.lightFrame = requestAnimationFrame(frame);
      };

      this.lightFrame = requestAnimationFrame(frame);
    });
  }

  private stopLightFrame(): void {
    if (this.lightFrame !== undefined) cancelAnimationFrame(this.lightFrame);

    this.lightFrame = undefined;
  }

  private startVerticalSwipeDetection(): void {
    if (this.isTrackingSwipe) return;

    const hasTouch = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0);

    if (!hasTouch) return;

    this.isTrackingSwipe = true;

    const target = this.toastSwipeTarget().nativeElement;
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
