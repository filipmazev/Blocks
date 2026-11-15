import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  afterRenderEffect,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  computed,
  effect,
  ElementRef,
  HostListener,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import type { ThemedColor } from '@filip.mazev/blocks/core';

import {
  BX_I18N,
  BxA11yService,
  Color,
  getComplementaryToken,
  isThemedColor,
  resolveText,
  resolveTokenToCssVar,
  ThemingService
} from '@filip.mazev/blocks/core';
import { BxGlassLightingService, BxSurfaceDirective, IBxGlassLight } from '@filip.mazev/blocks/effects';
import { createSpringMotion, GestureVelocity, projectMotion } from '@filip.mazev/blocks/effects/runtime';
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
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './toast-core.scss'
})
export class ToastCore<D, R, C extends IToast<D, R> = IToast<D, R>> implements OnInit, AfterViewInit, OnDestroy {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly themingService = inject(ThemingService);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly bxGlassLightingService = inject(BxGlassLightingService);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);

  /** Injected reference shared by the queue, caller, and mounted content. */
  public readonly toastRef: ToastRef<D, R> = inject<ToastRef<D, R>>(ToastRef);

  private readonly swipeMotion: ReturnType<typeof createSpringMotion> = createSpringMotion([0], ([position]) => this.currentTranslateY.set(position));

  protected readonly gestureActive: WritableSignal<boolean> = signal(false);

  protected readonly resolvedCloseLabel: Signal<string> = computed(() => resolveText(this.config().closeLabel ?? 'Close toast', this.i18n));
  protected readonly showCloseButton: Signal<boolean> = computed(() => this.config().showCloseButton ?? this.toastrGlobalSettingsService.showCloseButton());
  protected readonly closeButtonColor: Signal<ThemedColor | undefined> = computed(
    () => this.config().closeButtonColor ?? this.toastrGlobalSettingsService.closeButtonColor()
  );
  protected readonly showProgressBar: Signal<boolean> = computed(() => {
    if (this.config().showProgressBar === false) return false;

    return this.config().showProgressBar === true || this.config().progressBarColor !== undefined;
  });
  protected readonly progressBarColor: Signal<Color | undefined> = computed(() => {
    if (!this.showProgressBar()) return undefined;

    const color = this.config().progressBarColor ?? this.toastrGlobalSettingsService.progressBarColor();

    return isThemedColor(color) ? (this.themingService.activeTheme() === 'dark' ? (color.dark ?? color.light) : color.light) : color;
  });
  protected readonly progressBarCssVar: Signal<string | undefined> = computed(() => {
    const progressBarColor = this.progressBarColor();

    return progressBarColor ? resolveTokenToCssVar(progressBarColor) : undefined;
  });
  protected readonly progressBarBgCssVar: Signal<string | undefined> = computed(() => {
    const progressBarColor = this.progressBarColor();

    return progressBarColor ? resolveTokenToCssVar(getComplementaryToken(progressBarColor)) : undefined;
  });
  protected readonly isAnimated: Signal<boolean> = computed(() => !this.bxA11yService.isReducedMotion() && this.config().animate !== false);
  protected readonly isBottom: Signal<boolean> = computed(() => (this.config().position ?? this.toastrGlobalSettingsService.position()).includes('bottom'));
  protected readonly simpleToastSurface: Signal<string | null> = computed(() => {
    const instance: unknown = this.componentRef?.instance;

    return instance instanceof SimpleToast ? `color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${instance.data()?.type ?? 'info'}))` : null;
  });
  protected readonly emissionColor: Signal<string | undefined> = computed(() => {
    const instance: unknown = this.componentRef?.instance;

    return instance instanceof SimpleToast ? `var(--bx-text-${instance.data()?.type ?? 'info'})` : this.progressBarCssVar();
  });
  protected readonly wrapperClasses: Signal<string> = computed(() => {
    const isTop = (this.config().position ?? 'top-right').includes('top');
    const animClass = isTop ? 'anim-dir-top' : 'anim-dir-bottom';
    const wrapperClass = this.config().wrapperClass ?? 'default-wrapper';
    const backgroundClass = this.config().hasDefaultBackground === false ? ' no-bg' : '';

    return `${animClass} ${wrapperClass}${backgroundClass}`;
  });
  protected readonly toastrTransform: Signal<string | null> = computed(() => {
    const isTop = (this.config().position ?? 'top-right').includes('top');

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

  /** Authoritative resolved configuration shared with the active ToastRef. */
  public readonly config: Signal<IToastConfig<D>> = this.toastRef.config;

  /** Whether the toast is in its visible entrance/display state. Initially `false`. */
  public readonly isVisible: WritableSignal<boolean> = signal(false);

  /** Current vertical swipe displacement in CSS pixels, used to render the overlay transform. Initially `0`. */
  public readonly currentTranslateY: WritableSignal<number> = signal(0);

  /** Whether a toast dismissal swipe has completed. Initially `false`. */
  public readonly isSwipingFinished: WritableSignal<boolean> = signal(false);
  /** Whether the toast is collapsing its occupied stack space after dismissal. Initially `false`. */
  public readonly isCollapsing: WritableSignal<boolean> = signal(false);

  /** Dynamically created content component reference assigned by the owning overlay service. */
  public componentRef!: ComponentRef<C>;

  private originElement?: HTMLElement;
  private cancelSwipe?: () => void;
  private light?: IBxGlassLight;
  private lightFrame?: number;
  private lastLightProgress: number = -1;
  private lastLightColor?: string;
  private destroyed: boolean = false;
  private progressAnimation?: Animation;
  private subs: Subscription = new Subscription();
  private remainingMs: number = 0;
  private timerStartTime: number = 0;
  private lifetimeMs: number = 0;
  private viewReady: boolean = false;
  private closing: boolean = false;
  private progressElement?: HTMLElement;
  private entranceTimeout?: ReturnType<typeof setTimeout>;
  private collapseTimeout?: ReturnType<typeof setTimeout>;
  private closeResult?: R;
  private isTrackingSwipe: boolean = false;
  private isTouchActive: boolean = false;
  private autoCloseTimeout?: ReturnType<typeof setTimeout>;
  private hasEmittedClose: boolean = false;
  private cleanupListeners: Array<() => void> = [];
  private swipeCleanupListeners: (() => void) | null = null;
  private globalResizeCleanup: (() => void) | null = null;

  constructor() {
    effect(() => {
      if (!this.isAnimated()) this.swipeMotion.retarget([this.currentTranslateY()], true);
    });

    afterRenderEffect(() => {
      const progressElement = this.progressBar()?.nativeElement;
      const animated = this.isAnimated();
      const state = this.toastRef.state();

      this.config();
      this.emissionColor();

      untracked(() => {
        if (this.destroyed || !this.viewReady) return;

        if (state === 'closing') {
          if (!animated) this.finishClose();

          return;
        }

        this.syncProgressAnimation(progressElement);
        this.lastLightProgress = -1;

        if (animated && !this.toastRef.paused()) this.startLightFrame();
        else {
          this.stopLightFrame();
          this.paintLight();
        }
      });
    });
  }

  /** Subscribe once to explicit lifetime resets and pause/resume changes. */
  public ngOnInit(): void {
    this.subs.add(
      this.toastRef.durationChanges$.subscribe(() => {
        if (this.viewReady && !this.closing) this.resetLifetime();
      })
    );
    this.subs.add(
      this.toastRef.onPause$.subscribe(() => {
        this.pauseTimer();
        this.progressAnimation?.pause();
        this.paintLight();
        this.stopLightFrame();
      })
    );
    this.subs.add(
      this.toastRef.onResume$.subscribe(() => {
        this.startTimer();
        this.progressAnimation?.play();
        this.startLightFrame();
      })
    );
  }

  /** Attach toast content and initialize dismissal, progress, lifetime, and interaction tracking after rendering. */
  public ngAfterViewInit(): void {
    this.dynamicContainer().insert(this.componentRef.hostView);

    this.viewReady = true;
    this.originElement = this.elementRef.nativeElement.ownerDocument.activeElement as HTMLElement | undefined;

    if (!isPlatformBrowser(this.platformId)) return;

    this.entranceTimeout = setTimeout(() => {
      if (!this.destroyed && !this.closing) this.isVisible.set(true);
    }, 10);

    if (this.config().swipeToDismiss !== false) {
      this.startVerticalSwipeDetection();
      this.monitorInputType();
    }

    const animatorTarget = this.animatorWrapper().nativeElement;

    const onAnimatorTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== animatorTarget || event.propertyName !== 'grid-template-rows') return;

      if (this.isCollapsing() && !this.hasEmittedClose) {
        this.hasEmittedClose = true;
        this.toastRef.completeClose(this.closeResult);
      }
    };

    animatorTarget.addEventListener('transitionend', onAnimatorTransitionEnd);
    this.cleanupListeners.push(() => animatorTarget.removeEventListener('transitionend', onAnimatorTransitionEnd));

    this.resetLifetime();
  }

  /** Cancel toast timers, animation/light controllers, subscriptions, and owned input listeners. */
  public ngOnDestroy(): void {
    this.destroyed = true;
    this.stopLightFrame();
    this.light?.destroy();
    clearTimeout(this.autoCloseTimeout);
    clearTimeout(this.entranceTimeout);
    clearTimeout(this.collapseTimeout);

    this.stopVerticalSwipeDetection();
    this.swipeMotion.destroy();
    this.globalResizeCleanup?.();

    this.cleanupListeners.forEach((fn) => fn());
    this.cleanupListeners = [];

    this.progressAnimation?.cancel();
    this.subs.unsubscribe();

    if (this.componentRef && !this.componentRef.hostView.destroyed) this.componentRef.destroy();

    this.toastRef.completeClose(this.closeResult);
  }

  /**
   * Dismiss the toast with an optional result and collapse its occupied stack space.
   *
   * @param result - Optional typed result emitted by the toast reference after dismissal.
   * @param fromSwipe - Whether dismissal originated from a completed swipe rather than a normal close action. Defaults to `false`.
   */
  public closeToast(result?: R, fromSwipe = false): void {
    if (this.destroyed || this.closing) return;

    this.restoreFocus();
    this.cancelSwipe?.();
    this.closing = true;
    this.toastRef.beginClose();
    this.closeResult = result;
    clearTimeout(this.autoCloseTimeout);
    clearTimeout(this.entranceTimeout);
    this.autoCloseTimeout = undefined;
    this.progressAnimation?.pause();
    this.stopLightFrame();
    this.light?.destroy();
    this.light = undefined;

    if (!this.viewReady || !this.isVisible() || !this.isAnimated()) {
      this.finishClose();

      return;
    }

    this.isVisible.set(false);
    this.isCollapsing.set(true);

    if (fromSwipe) this.isSwipingFinished.set(true);

    // Finish even when a transition is cancelled or an ancestor is hidden.
    this.collapseTimeout = setTimeout(() => this.finishClose(), 450);
  }

  @HostListener('mouseenter')
  protected onMouseEnter(): void {
    if (!this.isTouchActive && !this.closing) this.toastRef.setPauseReason('hover', true);
  }

  @HostListener('mouseleave')
  protected onMouseLeave(): void {
    if (!this.closing) this.toastRef.setPauseReason('hover', false);
  }

  @HostListener('focusin')
  protected onFocusIn(): void {
    this.toastRef.setPauseReason('focus', true);
  }

  @HostListener('focusout', ['$event'])
  protected onFocusOut(event: FocusEvent): void {
    if (!(event.relatedTarget instanceof Node) || !this.elementRef.nativeElement.contains(event.relatedTarget)) this.toastRef.setPauseReason('focus', false);
  }

  //#region Helpers

  private restoreFocus(): void {
    const host = this.elementRef.nativeElement;

    if (!host.contains(host.ownerDocument.activeElement)) return;

    if (this.originElement?.isConnected && !this.originElement.closest('[inert], :disabled, [aria-disabled="true"]')) this.originElement.focus();
    else host.ownerDocument.querySelector<HTMLElement>('bx-toast-core:not(:focus-within) button:not(:disabled)')?.focus();
  }

  private paintLight(): void {
    if (!this.viewReady || this.destroyed || this.closing) return;

    const surface = this.toastSwipeTarget().nativeElement as HTMLElement;
    const color = this.emissionColor();
    const root = surface.closest<HTMLElement>('.toast-container');

    if (!color || !root || this.destroyed) return;

    const bounds = surface.getBoundingClientRect();
    const bar = this.progressBar()?.nativeElement as HTMLElement | undefined;
    const edge = bar?.getBoundingClientRect();
    const progress = edge && bounds.width ? (edge.right - bounds.left) / bounds.width : 0.5;

    if (Math.abs(progress - this.lastLightProgress) < 0.0001 && color === this.lastLightColor) return;

    this.lastLightProgress = progress;
    this.lastLightColor = color;
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
    else this.light = this.bxGlassLightingService.register(root, light);
  }

  private startLightFrame(): void {
    if (!this.viewReady || this.destroyed || this.closing) return;

    this.paintLight();

    if (this.lightFrame !== undefined || !this.progressAnimation || this.destroyed || !this.isAnimated()) return;

    this.ngZone.runOutsideAngular(() => {
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
    const doc = target.ownerDocument;

    let startY = 0;
    let pointerId: number | undefined;
    let velocity: GestureVelocity | undefined;
    let limit = 0;

    const release = () => {
      const ownedPointer = pointerId;

      pointerId = undefined;
      this.gestureActive.set(false);

      if (ownedPointer !== undefined && target.hasPointerCapture(ownedPointer)) target.releasePointerCapture(ownedPointer);

      this.toastRef.setPauseReason('gesture', false);
    };

    const cancel = () => {
      if (pointerId === undefined) return;

      release();
      this.swipeMotion.retarget([0], !this.isAnimated());
    };

    const pointerDown = (event: PointerEvent) => {
      if (this.closing || pointerId !== undefined || !event.isPrimary || event.button !== 0 || event.pointerType !== 'touch') return;

      const origin = event.target;

      if (origin instanceof Element && origin.closest('button, a, input, select, textarea, [role="button"], [contenteditable="true"]')) return;

      limit = target.offsetHeight / 3;
      pointerId = event.pointerId;
      startY = event.clientY - this.currentTranslateY();
      this.gestureActive.set(true);
      velocity = new GestureVelocity(startY, event.timeStamp);
      this.swipeMotion.track([this.currentTranslateY()]);
      this.toastRef.setPauseReason('gesture', true);
      target.setPointerCapture(pointerId);
    };

    const pointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;

      velocity?.update(event.clientY, event.timeStamp);

      const delta = event.clientY - startY;
      const direction = this.isBottom() ? 1 : -1;
      const displacement = Math.max(0, delta * direction) * direction;

      if (displacement && event.cancelable) event.preventDefault();

      this.swipeMotion.track([displacement], [velocity?.velocity(event.timeStamp) ?? 0]);
    };

    const pointerUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;

      velocity?.update(event.clientY, event.timeStamp);

      const delta = event.clientY - startY;
      const speed = velocity?.velocity(event.timeStamp) ?? 0;
      const direction = this.isBottom() ? 1 : -1;
      const projected = projectMotion(delta, speed, limit);
      const dismiss = delta * direction > 0 && speed * direction >= 0 && projected * direction > limit;

      release();

      if (dismiss) this.closeToast(undefined, true);
      else this.swipeMotion.retarget([0], !this.isAnimated());
    };

    const pointerCancel = (event: PointerEvent) => {
      if (event.pointerId === pointerId) cancel();
    };

    const keyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && pointerId !== undefined) {
        event.preventDefault();
        cancel();
      }
    };

    const visibility = () => {
      if (doc.hidden) cancel();
    };

    this.cancelSwipe = cancel;
    target.addEventListener('pointerdown', pointerDown, { passive: false });
    target.addEventListener('pointermove', pointerMove, { passive: false });
    target.addEventListener('pointerup', pointerUp);
    target.addEventListener('pointercancel', pointerCancel);
    target.addEventListener('lostpointercapture', pointerCancel);
    doc.addEventListener('keydown', keyDown);
    doc.addEventListener('visibilitychange', visibility);
    doc.defaultView?.addEventListener('blur', cancel);

    this.swipeCleanupListeners = () => {
      cancel();
      this.cancelSwipe = undefined;
      target.removeEventListener('pointerdown', pointerDown);
      target.removeEventListener('pointermove', pointerMove);
      target.removeEventListener('pointerup', pointerUp);
      target.removeEventListener('pointercancel', pointerCancel);
      target.removeEventListener('lostpointercapture', pointerCancel);
      doc.removeEventListener('keydown', keyDown);
      doc.removeEventListener('visibilitychange', visibility);
      doc.defaultView?.removeEventListener('blur', cancel);
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
        this.toastRef.setPauseReason('hover', false);
        this.startVerticalSwipeDetection();
      } else if (!isTouch && this.isTouchActive) {
        this.isTouchActive = false;
        this.stopVerticalSwipeDetection();
      }
    };

    window.addEventListener('pointerdown', handler);
    this.globalResizeCleanup = () => window.removeEventListener('pointerdown', handler);
  }

  private resetLifetime(): void {
    clearTimeout(this.autoCloseTimeout);
    this.autoCloseTimeout = undefined;
    this.progressAnimation?.cancel();
    this.progressAnimation = undefined;
    this.progressElement = undefined;
    this.stopLightFrame();

    const duration = this.config().durationInMs ?? 0;

    this.lifetimeMs = Number.isFinite(duration) ? Math.max(0, duration) : 0;
    this.remainingMs = this.lifetimeMs;
    this.startTimer();
  }

  private startTimer(): void {
    if (!this.viewReady || this.destroyed || this.closing || this.toastRef.paused() || this.lifetimeMs <= 0 || this.autoCloseTimeout !== undefined) return;

    if (this.remainingMs <= 0) {
      this.closeToast();

      return;
    }

    this.timerStartTime = Date.now();
    this.autoCloseTimeout = setTimeout(() => {
      this.autoCloseTimeout = undefined;
      this.remainingMs = 0;
      this.closeToast();
    }, this.remainingMs);
  }

  private pauseTimer(): void {
    if (this.autoCloseTimeout === undefined) return;

    clearTimeout(this.autoCloseTimeout);
    this.autoCloseTimeout = undefined;
    this.remainingMs = Math.max(0, this.remainingMs - (Date.now() - this.timerStartTime));
  }

  private syncProgressAnimation(element: HTMLElement | undefined): void {
    if (element === this.progressElement && this.progressAnimation) return;

    this.progressAnimation?.cancel();
    this.progressAnimation = undefined;
    this.progressElement = element;

    if (!element || this.lifetimeMs <= 0) return;

    const remaining = Math.max(0, this.remainingMs - (this.autoCloseTimeout === undefined ? 0 : Date.now() - this.timerStartTime));
    const width = `${(remaining / this.lifetimeMs) * 100}%`;

    element.style.width = width;

    if (typeof element.animate !== 'function' || remaining <= 0) return;

    this.progressAnimation = element.animate([{ width }, { width: '0%' }], { duration: remaining, fill: 'forwards' });

    if (this.toastRef.paused()) this.progressAnimation.pause();
  }

  private finishClose(): void {
    if (this.hasEmittedClose) return;

    this.hasEmittedClose = true;
    clearTimeout(this.collapseTimeout);
    this.toastRef.completeClose(this.closeResult);
  }

  //#endregion
}
