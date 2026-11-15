import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, ElementRef, inject, input, signal } from '@angular/core';

/** Fits a real component composition into its card while preserving a useful internal viewport. */
@Component({
  selector: 'app-preview-frame',
  templateUrl: './preview-frame.html',
  styleUrl: './preview-frame.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewFrame {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  private readonly availableWidth: WritableSignal<number> = signal(0);
  private readonly availableHeight: WritableSignal<number> = signal(0);

  protected readonly scale: Signal<number> = computed(() => Math.min(1, this.availableWidth() / this.width(), this.availableHeight() / this.height()));
  protected readonly viewportWidth: Signal<number> = computed(() => (this.fill() && this.scale() > 0 ? this.availableWidth() / this.scale() : this.width()));
  protected readonly viewportHeight: Signal<number> = computed(() => (this.fill() && this.scale() > 0 ? this.availableHeight() / this.scale() : this.height()));

  /** Expand the internal viewport to every edge of the card while preserving uniform component scale. Defaults to false. */
  public readonly fill: InputSignal<boolean> = input(false);
  /** Internal composition width in CSS pixels before fitting; defaults to 480. */
  public readonly width: InputSignal<number> = input(480);
  /** Internal composition height in CSS pixels before fitting; defaults to 320. */
  public readonly height: InputSignal<number> = input(320);

  constructor() {
    afterNextRender(() => {
      const measure = (): void => {
        this.availableWidth.set(this.nativeElement.clientWidth);
        this.availableHeight.set(this.nativeElement.clientHeight);
      };

      const observer = new ResizeObserver(measure);

      observer.observe(this.nativeElement);
      measure();
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
