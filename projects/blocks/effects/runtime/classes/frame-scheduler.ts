import type { IFrameEntry } from '@effects/runtime/interfaces/iframe-entry.interface';
import type { FrameCallback } from '@effects/runtime/types/frame-scheduler.types';

/** Owns one lazy animation clock shared by all effects in this module instance. */
export class FrameScheduler {
  private readonly entries: Set<IFrameEntry> = new Set<IFrameEntry>();
  private readonly onFrame: FrameRequestCallback = (timestamp) => this.tick(timestamp);

  private frame: number | undefined;
  private previousTime: number | undefined;
  private ticking: boolean = false;

  /**
   * Subscribe until the callback returns false or the returned cleanup function is called.
   * @param callback - Frame callback receiving elapsed seconds and the animation timestamp.
   */
  public subscribe(callback: FrameCallback): () => void {
    if (typeof requestAnimationFrame !== 'function') return () => {};

    const entry: IFrameEntry = { callback };

    this.entries.add(entry);

    if (this.frame === undefined && !this.ticking) this.frame = requestAnimationFrame(this.onFrame);

    return () => {
      this.entries.delete(entry);

      if (this.entries.size === 0) {
        if (this.frame !== undefined) cancelAnimationFrame(this.frame);

        this.frame = undefined;
        this.previousTime = undefined;
      }
    };
  }

  //#region Helpers

  private tick(timestamp: number): void {
    this.frame = undefined;
    this.ticking = true;

    const delta = this.previousTime === undefined ? 1 / 60 : Math.min(0.064, Math.max(0, (timestamp - this.previousTime) / 1000));

    this.previousTime = timestamp;

    for (const entry of Array.from(this.entries)) {
      if (!this.entries.has(entry)) continue;

      try {
        if (!entry.callback(delta, timestamp)) this.entries.delete(entry);
      } catch (error) {
        this.entries.delete(entry);
        // Keep unrelated surfaces running; report the failed callback separately.
        queueMicrotask(() => {
          throw error;
        });
      }
    }

    this.ticking = false;

    if (this.entries.size > 0) this.frame = requestAnimationFrame(this.onFrame);
    else this.previousTime = undefined;
  }

  //#endregion
}
