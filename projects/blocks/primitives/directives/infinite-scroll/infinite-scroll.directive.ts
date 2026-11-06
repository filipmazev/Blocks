import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { afterNextRender, afterRenderEffect, DestroyRef, Directive, ElementRef, inject, input, NgZone, output, signal, untracked } from '@angular/core';

import { measureScrollBoundary, observeScrollBoundary } from '@filip.mazev/blocks/core';

/** Detects proximity to a scroll boundary without owning requests, actions, or data. */
@Directive({ selector: '[bxInfiniteScroll]', exportAs: 'bxInfiniteScroll' })
export class InfiniteScrollDirective {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly overflow: WritableSignal<boolean> = signal(false);

  /** Whether the observed content exceeds the scroll viewport. Read-only; independent of loading and disabled state. */
  public readonly overflowing: Signal<boolean> = this.overflow.asReadonly();

  /** Optional external scroll viewport. Undefined observes the host; a document scrolling element observes document scroll events. */
  public readonly infiniteScrollContainer: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Proximity to the bottom boundary in CSS pixels. Defaults to 128; negative and nonfinite values become zero. */
  public readonly infiniteScrollThreshold: InputSignal<number> = input(128);
  /** Suppresses boundary events without changing measurements. Defaults to false; the owner can disable when its data is exhausted. */
  public readonly infiniteScrollDisabled: InputSignal<boolean> = input(false);
  /** Suppresses boundary events while an owner-controlled operation is pending. Defaults to false. */
  public readonly infiniteScrollLoading: InputSignal<boolean> = input(false);
  /** Items reference or revision acknowledging the last event. Optional; use complete() when neither revision nor loading changes. */
  public readonly infiniteScrollRevision: InputSignal<unknown> = input<unknown>(undefined);
  /** Check after rendering, content changes, and resizing as well as scrolling. Defaults to false; useful for bounded local progressive rendering. */
  public readonly infiniteScrollCheckOnRender: InputSignal<boolean> = input(false);
  /** Height excluded from the host's scroll extent in CSS pixels, such as a separately owned footer. Defaults to zero. */
  public readonly infiniteScrollEndOffset: InputSignal<number> = input(0);

  /** Emits once on approaching the boundary, until completion or leaving the boundary rearms detection. No fetching or exhaustion semantics. */
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  public readonly scrollEnd: OutputEmitterRef<void> = output<void>();

  private connectedContainer: HTMLElement | undefined;
  private pendingCheck: boolean = false;
  private mounted: boolean = false;
  private requested: boolean = false;
  private previousRevision: unknown;
  private wasLoading: boolean = false;
  private frame: number | undefined;
  private disconnect: (() => void) | undefined;

  constructor() {
    afterNextRender(() => {
      this.mounted = true;
      this.connect();
    });

    afterRenderEffect(() => {
      const container = this.infiniteScrollContainer();
      const loading = this.infiniteScrollLoading();
      const revision = this.infiniteScrollRevision();

      this.infiniteScrollDisabled();
      this.infiniteScrollThreshold();
      this.infiniteScrollEndOffset();
      this.infiniteScrollCheckOnRender();

      untracked(() => {
        if (revision !== this.previousRevision || (this.wasLoading && !loading)) this.requested = false;

        this.previousRevision = revision;
        this.wasLoading = loading;

        if (!this.mounted) return;

        if (container !== this.connectedContainer) this.connect();

        this.schedule(this.infiniteScrollCheckOnRender());
      });
    });

    this.destroyRef.onDestroy(() => {
      this.disconnect?.();
      this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.frame ?? 0);
    });
  }

  /** Acknowledge an event when no revision or observable loading cycle changes. Does not trigger another event by itself. */
  public complete(): void {
    this.requested = false;
  }

  //#region Helpers

  private connect(): void {
    this.disconnect?.();
    this.requested = false;
    this.pendingCheck = false;
    this.connectedContainer = this.infiniteScrollContainer();

    const container = this.connectedContainer ?? this.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      this.disconnect = observeScrollBoundary(
        this.nativeElement,
        container,
        () => this.schedule(true),
        () => this.schedule(this.infiniteScrollCheckOnRender())
      );
    });
  }

  private schedule(emit: boolean): void {
    this.pendingCheck ||= emit;

    if (this.frame !== undefined || this.destroyRef.destroyed) return;

    this.ngZone.runOutsideAngular(() => {
      this.frame = this.nativeElement.ownerDocument.defaultView?.requestAnimationFrame(() => {
        this.frame = undefined;

        const check = this.pendingCheck;

        this.pendingCheck = false;
        this.measure(check);
      });
    });
  }

  private measure(emit: boolean): void {
    const container = this.connectedContainer ?? this.nativeElement;
    const { distance, overflowing, viewportHeight } = measureScrollBoundary(this.nativeElement, container, this.infiniteScrollEndOffset());
    const threshold = this.infiniteScrollThreshold();
    const near = distance <= (Number.isFinite(threshold) ? Math.max(0, threshold) : 0);

    if (overflowing !== this.overflow()) this.ngZone.run(() => this.overflow.set(overflowing));

    if (!near) this.requested = false;

    if (!emit || !near || this.requested || viewportHeight <= 0 || !this.nativeElement.getClientRects().length) return;

    if (container !== this.nativeElement) {
      const top = container === container.ownerDocument.scrollingElement ? 0 : container.getBoundingClientRect().top;

      if (this.nativeElement.getBoundingClientRect().bottom < top - Math.max(0, Number.isFinite(threshold) ? threshold : 0)) return;
    }

    if (this.infiniteScrollDisabled() || this.infiniteScrollLoading()) return;

    this.requested = true;
    this.ngZone.run(() => this.scrollEnd.emit());
  }

  //#endregion
}
