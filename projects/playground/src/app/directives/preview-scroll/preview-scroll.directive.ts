import type { InputSignal } from '@angular/core';

import { afterNextRender, DestroyRef, Directive, effect, ElementRef, inject, input, NgZone } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { paintMotionStyles, subscribeFrame } from '@filip.mazev/blocks/effects/runtime';

/** Shows content passing behind glass without taking over user scrolling. */
@Directive({ selector: '[appPreviewScroll]', exportAs: 'appPreviewScroll' })
export class PreviewScrollDirective {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly bxA11yService = inject(BxA11yService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  /** Repeat the presentation after a quiet interval; false plays the existing one-time hint. */
  public readonly previewScrollRepeat: InputSignal<boolean> = input(false);
  /** Pause decorative scrolling without changing the user's own scroll position. */
  public readonly previewScrollPaused: InputSignal<boolean> = input(false);
  /** Maximum excursion in pixels, limited to the actual scrollable range. Defaults to 280. */
  public readonly previewScrollDistance: InputSignal<number> = input(280);
  /** Optional content to align beneath the cover; overrides the fixed distance when both targets are provided. */
  public readonly previewScrollTarget: InputSignal<HTMLElement | null> = input<HTMLElement | null>(null);
  /** Optional glass element covering the target at the presentation's midpoint. */
  public readonly previewScrollCover: InputSignal<HTMLElement | null> = input<HTMLElement | null>(null);
  /** Time to hold the covered target still, in milliseconds. Defaults to 0. */
  public readonly previewScrollDwell: InputSignal<number> = input(0);

  private view: Window | null = null;
  private observer: IntersectionObserver | undefined;
  private resize: ResizeObserver | undefined;
  private stopFrame: (() => void) | undefined;
  private timer: number | undefined;
  private visible: boolean = false;
  private interrupted: boolean = false;
  private played: boolean = false;
  private elapsed: number = 0;
  private origin: number = 0;
  private distance: number = 0;

  constructor() {
    afterNextRender(() => this.ngZone.runOutsideAngular(() => this.connect()));
    effect(() => {
      this.bxA11yService.isReducedMotion();
      this.previewScrollPaused();
      this.previewScrollRepeat();
      this.ngZone.runOutsideAngular(() => this.sync());
    });
    this.destroyRef.onDestroy(() => {
      this.cancel();
      this.observer?.disconnect();
      this.resize?.disconnect();
    });
  }

  /** Stop the hint permanently after the user takes over the interactive preview. */
  public stop(): void {
    this.interrupted = true;
    this.cancel();
  }

  //#region Helpers

  private connect(): void {
    const document = this.nativeElement.ownerDocument;

    this.view = document.defaultView;

    if (!this.view) return;

    const events = new AbortController();

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.visible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        this.sync();
      },
      { threshold: [0, 0.45] }
    );
    this.observer.observe(this.nativeElement);
    this.resize = new ResizeObserver(() => {
      this.cancel();
      this.sync();
    });
    this.resize.observe(this.nativeElement);
    document.addEventListener('visibilitychange', () => this.sync(), { signal: events.signal });
    this.destroyRef.onDestroy(() => events.abort());
  }

  private sync(): void {
    const active =
      this.view &&
      this.visible &&
      !this.nativeElement.ownerDocument.hidden &&
      !this.interrupted &&
      !this.bxA11yService.isReducedMotion() &&
      !this.previewScrollPaused();

    if (!active) {
      this.cancel();

      return;
    }

    if (this.timer !== undefined || this.stopFrame || (this.played && !this.previewScrollRepeat())) return;

    this.timer = this.view?.setTimeout(
      () => {
        this.timer = undefined;
        this.play();
      },
      this.played ? 6500 : 1200
    );
  }

  private play(): void {
    const element = this.nativeElement;

    if (!this.previewScrollRepeat() && element.scrollTop !== 0) return;

    const target = this.previewScrollTarget();
    const cover = this.previewScrollCover();
    const available = Math.max(0, element.scrollHeight - element.clientHeight);
    const dwell = Math.max(0, this.previewScrollDwell()) / 1000;

    this.origin = element.scrollTop;
    this.distance = Math.min(this.previewScrollDistance(), available - this.origin);
    this.elapsed = 0;

    if (target && cover) {
      const readerBounds = element.getBoundingClientRect();
      const coverBounds = cover.getBoundingClientRect();
      const rtl = this.view?.getComputedStyle(element).direction === 'rtl';
      const start = rtl ? readerBounds.right - coverBounds.right : coverBounds.left - readerBounds.left;

      paintMotionStyles(element, { '--preview-cover-start': `${start}px`, '--preview-cover-width': `${coverBounds.width}px` });

      const targetBounds = target.getBoundingClientRect();
      const destination = this.origin + targetBounds.top - coverBounds.top + (targetBounds.height - coverBounds.height) / 2;

      this.distance = Math.max(0, Math.min(available, destination)) - this.origin;
    }

    if (Math.abs(this.distance) < 0.5 && dwell === 0) return;

    const travel = this.previewScrollRepeat() ? 2.8 : 1.4;
    const duration = travel * 2 + dwell;

    this.stopFrame = subscribeFrame((delta) => {
      this.elapsed += delta;

      const outbound = Math.min(1, this.elapsed / travel);
      const inbound = Math.max(0, Math.min(1, (this.elapsed - travel - dwell) / travel));
      const amount = this.elapsed < travel ? (1 - Math.cos(outbound * Math.PI)) / 2 : this.elapsed < travel + dwell ? 1 : (1 + Math.cos(inbound * Math.PI)) / 2;

      element.scrollTop = this.origin + this.distance * amount;

      if (this.elapsed < duration) return true;

      this.stopFrame = undefined;
      this.played = true;
      this.sync();

      return false;
    });
  }

  private cancel(): void {
    if (this.timer !== undefined) this.view?.clearTimeout(this.timer);

    this.timer = undefined;
    this.stopFrame?.();
    this.stopFrame = undefined;
  }

  //#endregion
}
