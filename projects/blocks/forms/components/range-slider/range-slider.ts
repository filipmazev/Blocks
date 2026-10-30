import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxValueControl } from '../shared/classes/bx-value-control';
import { FormField } from '../form-field/form-field';
import { SliderDirective } from '../../directives/slider.directive';

@Component({
  selector: 'bx-range-slider',
  imports: [FormField, SliderDirective],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeSlider extends BxValueControl<[number, number]> {
  private readonly labelsAdapter = inject(BX_I18N, { optional: true });
  protected readonly start = computed(() => Math.max(this.min(), Math.min(this.max(), this.value()?.[0] ?? this.min())));
  protected readonly end = computed(() => Math.max(this.start(), Math.min(this.max(), this.value()?.[1] ?? this.max())));
  protected readonly startPercent = computed(() => (this.max() > this.min() ? ((this.start() - this.min()) / (this.max() - this.min())) * 100 : 0));
  protected readonly endPercent = computed(() => (this.max() > this.min() ? ((this.end() - this.min()) / (this.max() - this.min())) * 100 : 100));
  protected readonly resolvedStartLabel = computed(() => resolveText(this.startLabel(), this.labelsAdapter));
  protected readonly resolvedEndLabel = computed(() => resolveText(this.endLabel(), this.labelsAdapter));
  protected readonly ticks = computed(() => {
    const span = this.max() - this.min();
    const step = this.step();

    if (!this.showTickMarks() || !Number.isFinite(span) || !Number.isFinite(step) || span <= 0 || step <= 0) return [];

    const intervals = Math.floor(span / step);
    const count = Math.min(1000, intervals);

    // Keep bounded tick rendering on actual step values, including uneven ranges.
    return count > 0 ? Array.from({ length: count + 1 }, (_, index) => ((Math.round((index * intervals) / count) * step) / span) * 100) : [];
  });

  public readonly min = input(0);
  public readonly max = input(100);
  public readonly step = input(1);
  public readonly discrete = input(false);
  public readonly showTickMarks = input(false);
  public readonly displayWith = input<(value: number) => string>(String);
  public readonly startLabel = input<ResolvableText>('Minimum value');
  public readonly endLabel = input<ResolvableText>('Maximum value');

  protected onRangeInput(event: Event, thumb: 'start' | 'end'): void {
    if (this.disabled() || this.isReadonly()) return;

    const input = event.target as HTMLInputElement;
    const value = input.valueAsNumber;
    const next: [number, number] = thumb === 'start' ? [Math.min(this.end(), value), this.end()] : [this.start(), Math.max(this.start(), value)];
    input.value = String(thumb === 'start' ? next[0] : next[1]);
    this.updateValue(next);
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}
