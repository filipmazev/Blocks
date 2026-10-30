import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { ProgressBarMode } from './types/progress-bar.types';

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
    '[class.is-reduced-motion]': 'a11y.isReducedMotion()',
    '[class.is-query]': 'mode() === "query"'
  }
})
export class ProgressBar {
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly a11y = inject(BxA11yService);
  protected readonly resolvedLabel = computed(() => resolveText(this.label(), this.i18n));
  protected readonly progress = computed(() => (Number.isFinite(this.value()) ? Math.min(100, Math.max(0, this.value())) : 0));
  protected readonly buffer = computed(() =>
    Math.max(this.progress(), Number.isFinite(this.bufferValue()) ? Math.min(100, Math.max(0, this.bufferValue())) : 0)
  );

  protected readonly indeterminate = computed(() => this.mode() === 'indeterminate' || this.mode() === 'query');

  public readonly mode = input<ProgressBarMode>('determinate');
  public readonly value = input(0);
  public readonly bufferValue = input(100);
  public readonly label = input<ResolvableText>('Progress');
}
