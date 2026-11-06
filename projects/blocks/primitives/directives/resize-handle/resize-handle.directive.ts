import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  model,
  NgZone,
  output,
  signal,
  untracked
} from '@angular/core';

import type { IResizeHandleEvent } from '@primitives/interfaces/iresize-handle-event.interface';
import type { IResizeHandleSession } from '@primitives/interfaces/iresize-handle-session.interface';
import type { ResizeHandleEdge, ResizeHandleSource } from '@primitives/types/resize-handle.types';

import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

/** Pointer-captured and keyboard-accessible size control; the consumer owns presentation and applying the emitted size. */
@Directive({
  selector: '[bxResizeHandle]',
  exportAs: 'bxResizeHandle',
  host: {
    class: 'bx-resize-handle',
    role: 'separator',
    '[attr.tabindex]': 'resizeDisabled() ? -1 : 0',
    '[attr.aria-disabled]': 'resizeDisabled() ? true : null',
    '[attr.aria-label]': 'accessibleLabel()',
    '[attr.aria-controls]': 'resizeControls() ?? resizeTarget()?.id ?? null',
    '[attr.aria-orientation]': 'horizontal() ? "vertical" : "horizontal"',
    '[attr.aria-valuenow]': 'boundedValue()',
    '[attr.aria-valuemin]': 'minSize()',
    '[attr.aria-valuemax]': 'finiteMax()',
    '[attr.data-bx-resize-axis]': 'horizontal() ? "horizontal" : "vertical"',
    '[class.bx-resizing]': 'resizing()',
    '[class.bx-resize-visible]': 'indicatorVisible()',
    '[class.bx-resize-reduced-motion]': 'isReducedMotion()',
    '[style.touch-action]': '"none"',
    '[style.user-select]': '"none"',
    '[style.cursor]': 'resizeDisabled() ? "default" : horizontal() ? "col-resize" : "row-resize"',
    '(keydown)': 'onKeydown($event)',
    '(keyup)': 'onKeyup($event)',
    '(blur)': 'onBlur()'
  }
})
export class ResizeHandleDirective {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly isReducedMotion = inject(BxA11yService).isReducedMotion;

  private readonly active: WritableSignal<boolean> = signal(false);
  private readonly recentActivity: WritableSignal<boolean> = signal(false);

  private readonly referenceSize: WritableSignal<number | null> = signal<number | null>(null);
  private readonly containerSize: WritableSignal<number | null> = signal<number | null>(null);

  private readonly originalSize: Signal<number> = computed(() => {
    const size = this.resizeInitialSize() ?? this.referenceSize() ?? this.resizeValue();

    return Number.isFinite(size) ? Math.max(0, size) : 0;
  });

  protected readonly horizontal: Signal<boolean> = computed(() => this.resizeEdge() === 'left' || this.resizeEdge() === 'right');
  protected readonly accessibleLabel: Signal<string> = computed(() => resolveText(this.resizeLabel(), this.i18n));
  protected readonly boundedValue: Signal<number> = computed(() => this.clamp(this.resizeValue()));
  protected readonly finiteMax: Signal<number | null> = computed(() => (Number.isFinite(this.maxSize()) ? this.maxSize() : null));

  /** Whether a pointer or keyboard resize gesture is active. Useful for suspending owner size transitions. */
  public readonly resizing: Signal<boolean> = this.active.asReadonly();

  /** Whether recent container pointer activity or an active gesture should reveal an owner-styled grip; disabled handles stay hidden. */
  public readonly indicatorVisible: Signal<boolean> = computed(() => !this.resizeDisabled() && (this.recentActivity() || this.active()));
  /** Effective minimum in CSS pixels, including the initial-size floor when shrinking is disabled and the container's maximum constraint. */
  public readonly minSize: Signal<number> = computed(() => {
    const requested = this.resizeMinSize();
    const minimum = requested !== undefined && Number.isFinite(requested) ? Math.max(0, requested) : this.originalSize() * 0.3;

    return Math.min(this.maxSize(), this.resizeDisableShrink() ? Math.max(minimum, this.originalSize()) : minimum);
  });
  /** Effective maximum in CSS pixels; defaults to 50% of the container and never exceeds its available extent. */
  public readonly maxSize: Signal<number> = computed(() => {
    const requested = this.resizeMaxSize();
    const available = this.containerSize() ?? Number.POSITIVE_INFINITY;
    const maximum = requested !== undefined && Number.isFinite(requested) ? Math.max(0, requested) : available * 0.5;

    return Math.min(available, maximum);
  });

  /** Owner-controlled size in CSS pixels. Defaults to zero; this directive never writes target element styles. */
  public readonly resizeValue: ModelSignal<number> = model(0);

  /** Physical resize edge, default right. Left/right adjust width; top/bottom adjust height. */
  public readonly resizeEdge: InputSignal<ResizeHandleEdge> = input<ResizeHandleEdge>('right');
  /** Optional resized element; its rendered dimension supplies the gesture start, including CSS-sized and viewport-clamped surfaces. */
  public readonly resizeTarget: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Optional containing element for bounds; defaults to the target's parent, then the handle's parent. */
  public readonly resizeContainer: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Optional pointer-activity region for grip visibility; defaults to the bounds container. Useful when a portal layer does not receive adjacent content events. */
  public readonly resizeActivityContainer: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Optional minimum in CSS pixels. Defaults to 30% of the original rendered size; the shrink-prevention floor still takes precedence. */
  public readonly resizeMinSize: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Optional maximum in CSS pixels. Omission uses 50% of the containing width or height. Container clipping takes precedence. */
  public readonly resizeMaxSize: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Optional explicit original size in CSS pixels. Omission captures the rendered size at the first gesture. */
  public readonly resizeInitialSize: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Prevent shrinking below the original size, default true. False enables the configured or 30% minimum. Expanded sizes may return to the original. */
  public readonly resizeDisableShrink: InputSignal<boolean> = input(true);
  /** Whether pointer and keyboard resizing are disabled. Defaults to false; an active gesture is canceled when disabled. */
  public readonly resizeDisabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Accessible separator name, accepting plain text or a translation key. Defaults to Resize. */
  public readonly resizeLabel: InputSignal<ResolvableText> = input<ResolvableText>('Resize');
  /** Optional ID of the controlled surface; omission uses resizeTarget's ID when available. */
  public readonly resizeControls: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Positive keyboard increment in CSS pixels, default 10. Shift multiplies the increment by five. Home/End select the available bounds. */
  public readonly resizeStep: InputSignal<number> = input(10);
  /** Grip inactivity delay in milliseconds, default 2000. Zero/negative keeps it revealed; nonfinite values use the default. Focus visibility is owner-styled. */
  public readonly resizeIdleDelay: InputSignal<number> = input(2000);

  /** Emits the rendered start size and interaction source before any size change. */
  public readonly resizeStart: OutputEmitterRef<IResizeHandleEvent> = output<IResizeHandleEvent>();
  /** Emits the final bounded size, original gesture size, source, and cancellation state. */
  public readonly resizeEnd: OutputEmitterRef<IResizeHandleEvent> = output<IResizeHandleEvent>();

  private mounted: boolean = false;
  private previousEdge: ResizeHandleEdge = 'right';
  private session: IResizeHandleSession | undefined;
  private pointerFrame: number | undefined;
  private pendingPointerValue: number | undefined;
  private disconnectGeometry: (() => void) | undefined;
  private disconnectGesture: (() => void) | undefined;

  constructor() {
    afterNextRender(() => {
      this.mounted = true;
      this.observeGeometry();

      const onPointerDown = (event: PointerEvent) => this.onPointerDown(event);

      this.ngZone.runOutsideAngular(() => this.nativeElement.addEventListener('pointerdown', onPointerDown));
      this.destroyRef.onDestroy(() => this.nativeElement.removeEventListener('pointerdown', onPointerDown));
    });

    effect(() => {
      const edge = this.resizeEdge();
      const disabled = this.resizeDisabled();

      untracked(() => {
        if (disabled || edge !== this.previousEdge) this.finish(true);

        if ((edge === 'left' || edge === 'right') !== (this.previousEdge === 'left' || this.previousEdge === 'right')) this.referenceSize.set(null);

        this.previousEdge = edge;
      });
    });

    afterRenderEffect((onCleanup) => {
      this.resizeTarget();
      this.resizeContainer();
      this.resizeActivityContainer();
      this.resizeEdge();
      this.resizeDisabled();
      this.resizeIdleDelay();

      untracked(() => {
        if (!this.mounted) return;

        const cleanup = this.observeGeometry();

        onCleanup(cleanup);
      });
    });

    this.destroyRef.onDestroy(() => {
      this.finish(true, false);
      this.disconnectGeometry?.();
    });
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.session) {
      event.preventDefault();
      event.stopPropagation();
      this.finish(true);

      return;
    }

    if (this.resizeDisabled() || this.session?.source === 'pointer' || event.altKey || event.ctrlKey || event.metaKey) return;

    const horizontal = this.horizontal();
    const backward = horizontal ? 'ArrowLeft' : 'ArrowUp';
    const forward = horizontal ? 'ArrowRight' : 'ArrowDown';

    if (![backward, forward, 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    event.stopPropagation();

    if (!this.session) {
      const initial = this.begin('keyboard');

      this.commit(initial);
    }

    const requestedStep = this.resizeStep();
    const step = (Number.isFinite(requestedStep) && requestedStep > 0 ? requestedStep : 10) * (event.shiftKey ? 5 : 1);
    const direction = this.resizeEdge() === 'left' || this.resizeEdge() === 'top' ? -1 : 1;

    if (event.key === 'Home') this.commit(this.minSize());
    else if (event.key === 'End') {
      if (Number.isFinite(this.maxSize())) this.commit(this.maxSize());
    } else this.commit(this.resizeValue() + (event.key === forward ? step : -step) * direction);
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (this.session?.source === 'keyboard' && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) this.finish(false);
  }

  protected onBlur(): void {
    if (this.session?.source === 'keyboard') this.finish(false);
  }

  //#region Helpers

  private observeGeometry(): () => void {
    this.disconnectGeometry?.();

    const container = this.resizeContainer() ?? this.resizeTarget()?.parentElement ?? this.nativeElement.parentElement;
    const win = this.nativeElement.ownerDocument.defaultView;

    if (!container || !win) {
      this.containerSize.set(null);

      return () => {};
    }

    const measure = () => {
      const size = this.horizontal() ? container.clientWidth : container.clientHeight;

      if (size !== this.containerSize()) this.ngZone.run(() => this.containerSize.set(size));
    };

    return this.ngZone.runOutsideAngular(() => {
      const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);
      const cleanupActivity = this.observeActivity(this.resizeActivityContainer() ?? container, win);

      if (resize) resize.observe(container);
      else win.addEventListener('resize', measure);

      measure();

      const cleanup = () => {
        resize?.disconnect();
        cleanupActivity();

        if (!resize) win.removeEventListener('resize', measure);
      };

      this.disconnectGeometry = cleanup;

      return cleanup;
    });
  }

  private observeActivity(container: HTMLElement, win: Window): () => void {
    if (this.resizeDisabled()) return () => {};

    const requested = this.resizeIdleDelay();
    const delay = Number.isFinite(requested) ? Math.max(0, requested) : 2000;

    let timer: number | undefined;

    const reveal = () => {
      if (!this.recentActivity()) this.ngZone.run(() => this.recentActivity.set(true));

      win.clearTimeout(timer);

      if (delay > 0) {
        timer = win.setTimeout(() => {
          timer = undefined;

          if (!this.destroyRef.destroyed) this.ngZone.run(() => this.recentActivity.set(false));
        }, delay);
      }
    };

    if (delay > 0) {
      container.addEventListener('pointermove', reveal, { passive: true });
      container.addEventListener('pointerdown', reveal, { passive: true });
    }

    reveal();

    return () => {
      win.clearTimeout(timer);
      container.removeEventListener('pointermove', reveal);
      container.removeEventListener('pointerdown', reveal);

      if (!this.destroyRef.destroyed) this.ngZone.run(() => this.recentActivity.set(false));
    };
  }

  private begin(source: ResizeHandleSource, pointer?: PointerEvent): number {
    const rect = this.resizeTarget()?.getBoundingClientRect();
    const initialValue = rect ? (this.horizontal() ? rect.width : rect.height) : this.resizeValue();
    const style = this.nativeElement.ownerDocument.documentElement.style;

    if (this.referenceSize() === null) this.referenceSize.set(Math.max(0, Number.isFinite(initialValue) ? initialValue : 0));

    const initial = this.clamp(initialValue);

    this.session = {
      source,
      initialValue: initial,
      position: pointer ? (this.horizontal() ? pointer.clientX : pointer.clientY) : 0,
      pointerId: pointer?.pointerId,
      userSelect: style.getPropertyValue('user-select'),
      userSelectPriority: style.getPropertyPriority('user-select'),
      cursor: style.getPropertyValue('cursor'),
      cursorPriority: style.getPropertyPriority('cursor')
    };

    this.ngZone.run(() => {
      this.active.set(true);
      this.resizeStart.emit({ value: initial, initialValue: initial, source, canceled: false });
    });

    if (source === 'pointer') {
      style.setProperty('user-select', 'none', 'important');
      style.setProperty('cursor', this.horizontal() ? 'col-resize' : 'row-resize', 'important');
    }

    return initial;
  }

  private onPointerDown(event: PointerEvent): void {
    if (this.resizeDisabled() || this.session || !event.isPrimary || event.button !== 0) return;

    event.preventDefault();
    this.nativeElement.focus({ preventScroll: true });
    this.begin('pointer', event);

    const document = this.nativeElement.ownerDocument;
    const onMove = (next: PointerEvent) => {
      const session = this.session;

      if (!session || next.pointerId !== session.pointerId) return;

      next.preventDefault();

      const position = this.horizontal() ? next.clientX : next.clientY;
      const direction = this.resizeEdge() === 'left' || this.resizeEdge() === 'top' ? -1 : 1;

      this.pendingPointerValue = session.initialValue + (position - session.position) * direction;

      if (this.pointerFrame === undefined) this.pointerFrame = document.defaultView?.requestAnimationFrame(() => this.flushPointer());
    };

    const onUp = (next: PointerEvent) => {
      if (next.pointerId === this.session?.pointerId) {
        onMove(next);
        this.flushPointer();
        this.finish(false);
      }
    };

    const onCancel = (next: PointerEvent) => {
      if (next.pointerId === this.session?.pointerId) this.finish(true);
    };

    const onEscape = (next: KeyboardEvent) => {
      if (next.key !== 'Escape') return;

      next.preventDefault();
      next.stopPropagation();
      this.finish(true);
    };

    const onSelect = (next: Event) => next.preventDefault();
    const onLostCapture = () => {
      if (this.session?.source === 'pointer') this.finish(true);
    };

    const onWindowBlur = () => this.finish(true);

    document.defaultView?.addEventListener('blur', onWindowBlur);
    document.addEventListener('pointermove', onMove, { capture: true, passive: false });
    document.addEventListener('pointerup', onUp, true);
    document.addEventListener('pointercancel', onCancel, true);
    document.addEventListener('keydown', onEscape, true);
    document.addEventListener('selectstart', onSelect, true);
    this.nativeElement.addEventListener('lostpointercapture', onLostCapture);
    this.disconnectGesture = () => {
      document.defaultView?.removeEventListener('blur', onWindowBlur);
      document.removeEventListener('pointermove', onMove, true);
      document.removeEventListener('pointerup', onUp, true);
      document.removeEventListener('pointercancel', onCancel, true);
      document.removeEventListener('keydown', onEscape, true);
      document.removeEventListener('selectstart', onSelect, true);
      this.nativeElement.removeEventListener('lostpointercapture', onLostCapture);
    };

    try {
      this.nativeElement.setPointerCapture(event.pointerId);
    } catch {
      // Document listeners still complete the gesture when capture is unavailable.
    }
  }

  private clamp(value: number): number {
    const requested = Number.isFinite(value) ? value : this.minSize();

    return Math.max(this.minSize(), Math.min(this.maxSize(), requested));
  }

  private commit(value: number): void {
    const next = this.clamp(Math.round(this.clamp(value) * 100) / 100);

    if (next !== this.resizeValue()) this.ngZone.run(() => this.resizeValue.set(next));
  }

  private flushPointer(): void {
    this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.pointerFrame ?? 0);
    this.pointerFrame = undefined;

    const value = this.pendingPointerValue;

    this.pendingPointerValue = undefined;

    if (value !== undefined && this.session) this.commit(value);
  }

  private event(canceled: boolean): IResizeHandleEvent {
    return {
      value: this.clamp(this.resizeValue()),
      initialValue: this.session?.initialValue ?? this.resizeValue(),
      source: this.session?.source ?? 'pointer',
      canceled
    };
  }

  private finish(canceled: boolean, emit: boolean = true): void {
    const session = this.session;

    if (!session) return;

    this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.pointerFrame ?? 0);
    this.pointerFrame = undefined;
    this.pendingPointerValue = undefined;

    if (canceled && emit) this.commit(session.initialValue);

    const result = this.event(canceled);

    this.session = undefined;
    this.disconnectGesture?.();
    this.disconnectGesture = undefined;

    const style = this.nativeElement.ownerDocument.documentElement.style;

    if (session.source === 'pointer') {
      if (session.userSelect) style.setProperty('user-select', session.userSelect, session.userSelectPriority);
      else style.removeProperty('user-select');

      if (session.cursor) style.setProperty('cursor', session.cursor, session.cursorPriority);
      else style.removeProperty('cursor');

      if (session.pointerId !== undefined && this.nativeElement.hasPointerCapture?.(session.pointerId))
        this.nativeElement.releasePointerCapture(session.pointerId);
    }

    this.ngZone.run(() => {
      this.active.set(false);

      if (emit) this.resizeEnd.emit(result);
    });
  }

  //#endregion
}
