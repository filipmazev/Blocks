import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { BxValueControl } from '@forms/classes/bx-value-control';
import { FormField } from '@forms/components/form-field/form-field';
import { SliderDirective } from '@forms/directives/slider/slider.directive';

@Component({
  selector: 'bx-range-slider',
  imports: [FormField, SliderDirective],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeSlider extends BxValueControl<[number, number]> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly start: Signal<number> = computed(() => Math.max(this.min(), Math.min(this.max(), this.value()?.[0] ?? this.min())));
  protected readonly end: Signal<number> = computed(() => Math.max(this.start(), Math.min(this.max(), this.value()?.[1] ?? this.max())));
  protected readonly startPercent: Signal<number> = computed(() =>
    this.max() > this.min() ? ((this.start() - this.min()) / (this.max() - this.min())) * 100 : 0
  );
  protected readonly endPercent: Signal<number> = computed(() =>
    this.max() > this.min() ? ((this.end() - this.min()) / (this.max() - this.min())) * 100 : 100
  );
  protected readonly resolvedStartLabel: Signal<string> = computed(() => resolveText(this.startLabel(), this.i18n));
  protected readonly resolvedEndLabel: Signal<string> = computed(() => resolveText(this.endLabel(), this.i18n));
  protected readonly ticks: Signal<number[]> = computed(() => {
    const span = this.max() - this.min();
    const step = this.step();

    if (!this.showTickMarks() || !Number.isFinite(span) || !Number.isFinite(step) || span <= 0 || step <= 0) return [];

    const intervals = Math.floor(span / step);
    const count = Math.min(1000, intervals);

    // Keep bounded tick rendering on actual step values, including uneven ranges.
    return count > 0 ? Array.from({ length: count + 1 }, (_, index) => ((Math.round((index * intervals) / count) * step) / span) * 100) : [];
  });

  /** Minimum permitted numeric or range value. Defaults to `0`. */
  public readonly min: InputSignal<number> = input(0);
  /** Maximum permitted numeric or range value. Defaults to `100`. */
  public readonly max: InputSignal<number> = input(100);
  /** Increment used for numeric adjustments and range selection. Defaults to `1`. */
  public readonly step: InputSignal<number> = input(1);
  /** Whether the slider snaps to its configured step values. Defaults to `false`. */
  public readonly discrete: InputSignal<boolean> = input(false);
  /** Whether discrete slider tick marks are rendered. Defaults to `false`. */
  public readonly showTickMarks: InputSignal<boolean> = input(false);
  /** Formatter for the user-visible slider value; omission uses the default numeric presentation. */
  public readonly displayWith: InputSignal<(value: number) => string> = input<(value: number) => string>(String);
  /** Accessible label of the lower-value range thumb. Defaults to `'Minimum value'`. */
  public readonly startLabel: InputSignal<ResolvableText> = input<ResolvableText>('Minimum value');
  /** Accessible label of the upper-value range thumb. Defaults to `'Maximum value'`. */
  public readonly endLabel: InputSignal<ResolvableText> = input<ResolvableText>('Maximum value');

  protected onRangeInput(event: Event, thumb: 'start' | 'end'): void {
    const input = event.target as HTMLInputElement;

    if (this.effectiveDisabled() || this.isReadonly()) {
      input.value = String(thumb === 'start' ? this.start() : this.end());

      return;
    }

    const value = input.valueAsNumber;
    const next: [number, number] = thumb === 'start' ? [Math.min(this.end(), value), this.end()] : [this.start(), Math.max(this.start(), value)];

    input.value = String(thumb === 'start' ? next[0] : next[1]);
    this.updateValue(next);
  }

  protected onReadonlyPointerDown(event: PointerEvent): void {
    if (!this.isReadonly()) return;

    event.preventDefault();
    (event.target as HTMLInputElement).focus({ preventScroll: true });
  }

  protected onReadonlyKeyDown(event: KeyboardEvent): void {
    if (this.isReadonly() && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key))
      event.preventDefault();
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}
