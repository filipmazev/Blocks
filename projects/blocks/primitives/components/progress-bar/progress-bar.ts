import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { ProgressBarMode } from '@primitives/types/progress-bar.types';

@Component({
  selector: 'bx-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'progressbar',
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    '[attr.aria-valuenow]': 'indeterminate() ? null : progress()',
    '[attr.aria-label]': 'resolvedLabel()',
    '[class.is-indeterminate]': 'indeterminate()',
    '[class.is-reduced-motion]': 'bxA11yService.isReducedMotion()',
    '[class.is-query]': 'mode() === "query"'
  }
})
export class ProgressBar {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly bxA11yService = inject(BxA11yService);

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));
  protected readonly progress: Signal<number> = computed(() => (Number.isFinite(this.value()) ? Math.min(100, Math.max(0, this.value())) : 0));
  protected readonly buffer: Signal<number> = computed(() =>
    Math.max(this.progress(), Number.isFinite(this.bufferValue()) ? Math.min(100, Math.max(0, this.bufferValue())) : 0)
  );
  protected readonly indeterminate: Signal<boolean> = computed(() => this.mode() === 'indeterminate' || this.mode() === 'query');

  /** Progress presentation: determinate, buffer, indeterminate, or query. Defaults to `'determinate'`. */
  public readonly mode: InputSignal<ProgressBarMode> = input<ProgressBarMode>('determinate');
  /** Completed determinate progress as a percentage on the 0–100 scale. Defaults to `0`. */
  public readonly value: InputSignal<number> = input(0);
  /** Buffered progress percentage shown behind the completed determinate progress. Defaults to `100`. */
  public readonly bufferValue: InputSignal<number> = input(100);
  /** Accessible name of the progress bar; supports shared translation keys. Defaults to `'Progress'`. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Progress');
}
