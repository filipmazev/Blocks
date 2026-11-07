import type { Signal, WritableSignal } from '@angular/core';

import { computed, signal } from '@angular/core';

import type { Observable } from 'rxjs';

import { Subject } from 'rxjs';

import type { IToastConfig } from '@toastr/interfaces/itoast-config.interface';
import type { IToastPatch } from '@toastr/interfaces/itoast-patch.interface';
import type { ToastDataPatch, ToastState } from '@toastr/types/toast-patch.types';

/** Reactive configuration and lifecycle for one queued or mounted notification.
 * @typeParam D - Application-owned data consumed through data().
 * @typeParam R - Optional result emitted when dismissal finishes.
 */
export class ToastRef<D = undefined, R = unknown> {
  private readonly configuration: WritableSignal<IToastConfig<D>>;

  private readonly lifecycle: WritableSignal<ToastState> = signal('queued');

  private readonly isPaused: WritableSignal<boolean> = signal(false);

  private readonly afterClosedSubject: Subject<R | undefined> = new Subject<R | undefined>();
  private readonly pauseSubject: Subject<void> = new Subject<void>();
  private readonly resumeSubject: Subject<void> = new Subject<void>();
  private readonly durationSubject: Subject<number> = new Subject<number>();

  /** Current resolved configuration. Read with config(); update through patch(). */
  public readonly config: Signal<IToastConfig<D>>;

  /** Reactive content payload; undefined when no initial data was supplied. Plain-object patches merge one level. */
  public readonly data: Signal<D | undefined> = computed(() => this.config().data);

  /** Lifecycle state; queued toasts have no running timer. */
  public readonly state: Signal<ToastState> = this.lifecycle.asReadonly();
  /** Whether pause() is currently in effect; duration patches preserve this state. */
  public readonly paused: Signal<boolean> = this.isPaused.asReadonly();
  /** Emits the optional application result once after dismissal, then completes. */
  public readonly afterClosed$: Observable<R | undefined> = this.afterClosedSubject.asObservable();
  /** Emits when the reference changes from running to paused. */
  public readonly onPause$: Observable<void> = this.pauseSubject.asObservable();
  /** Emits when the reference changes from paused to running. */
  public readonly onResume$: Observable<void> = this.resumeSubject.asObservable();
  /** Explicit lifetime resets, including repeated equal durations. The presentation host owns the actual timer. @internal */
  public readonly durationChanges$: Observable<number> = this.durationSubject.asObservable();

  private closeHandler?: (result?: R) => void;

  constructor(config: IToastConfig<D> = {}) {
    this.configuration = signal({ ...config });
    this.config = this.configuration.asReadonly();
  }

  /**
   * Merge supported runtime settings without mounting queued content or restarting unrelated timers.
   * @param patch - Typed partial updates. Undefined means no change; supported null values clear optional presentation.
   */
  public patch(patch: IToastPatch<D>): void {
    if (this.state() === 'closing' || this.state() === 'closed') return;

    this.configuration.update((current) => ({
      ...current,
      data: patch.data === undefined ? current.data : this.patchData(current.data, patch.data),
      durationInMs: patch.durationInMs === undefined ? current.durationInMs : Math.max(0, Number.isFinite(patch.durationInMs) ? patch.durationInMs : 0),
      showCloseButton: patch.showCloseButton ?? current.showCloseButton,
      closeButtonColor: patch.closeButtonColor === undefined ? current.closeButtonColor : (patch.closeButtonColor ?? undefined),
      showProgressBar: patch.showProgressBar ?? current.showProgressBar,
      progressBarColor: patch.progressBarColor === undefined ? current.progressBarColor : (patch.progressBarColor ?? undefined),
      wrapperClass: patch.wrapperClass === undefined ? current.wrapperClass : (patch.wrapperClass ?? undefined),
      hasDefaultBackground: patch.hasDefaultBackground ?? current.hasDefaultBackground,
      glassiness: patch.glassiness ?? current.glassiness,
      glassQuality: patch.glassQuality ?? current.glassQuality
    }));

    if (patch.durationInMs !== undefined) this.durationSubject.next(this.config().durationInMs ?? 0);
  }

  /**
   * Begin dismissal; a queued toast is removed without being displayed. Repeated calls are ignored.
   * @param result - Optional application result delivered once dismissal finishes.
   */
  public close(result?: R): void {
    if (this.state() === 'closing' || this.state() === 'closed') return;

    this.beginClose();

    if (this.closeHandler) this.closeHandler(result);
    else this.completeClose(result);
  }

  /** Pause automatic dismissal and progress. Idempotent; queued notifications retain this preference until display. */
  public pause(): void {
    if (this.paused() || this.state() === 'closing' || this.state() === 'closed') return;

    this.isPaused.set(true);
    this.pauseSubject.next();
  }

  /** Resume a paused lifetime. Does not reset the remaining time or revive dismissed notifications. */
  public resume(): void {
    if (!this.paused() || this.state() === 'closing' || this.state() === 'closed') return;

    this.isPaused.set(false);
    this.resumeSubject.next();
  }

  /**
   * Connect the mounted wrapper's dismissal lifecycle before initializing application content.
   * @internal
   * @param closeHandler - Wrapper callback responsible for animated dismissal and eventual completeClose().
   */
  public attach(closeHandler: (result?: R) => void): void {
    if (this.state() !== 'queued') return;

    this.closeHandler = closeHandler;
    this.lifecycle.set('open');
  }

  /** Prevent late patches as soon as wrapper-initiated dismissal begins. @internal */
  public beginClose(): void {
    if (this.state() !== 'closed') this.lifecycle.set('closing');
  }

  /**
   * Release the wrapper callback and complete all reference event streams after dismissal.
   * @internal
   * @param result - Optional final application result.
   */
  public completeClose(result?: R): void {
    if (this.state() === 'closed') return;

    this.lifecycle.set('closed');
    this.closeHandler = undefined;
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
    this.pauseSubject.complete();
    this.resumeSubject.complete();
    this.durationSubject.complete();
  }

  //#region Helpers

  private patchData(current: D | undefined, patch: ToastDataPatch<D>): D {
    if (!this.isPlainObject(patch)) return patch as D;

    const defined = Object.fromEntries(Object.entries(patch).filter(([, value]) => value !== undefined));

    // The generic partial contract preserves required members from the initial plain-object payload.
    return { ...(this.isPlainObject(current) ? current : {}), ...defined } as D;
  }

  private isPlainObject(value: unknown): value is Record<string, unknown> {
    if (value === null || typeof value !== 'object') return false;

    const prototype: unknown = Object.getPrototypeOf(value);

    return prototype === Object.prototype || prototype === null;
  }

  //#endregion
}
