import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { LoadingSpinner } from '@primitives/components/loading-spinner/loading-spinner';

@Component({
  selector: 'bx-loading-indicator',
  imports: [LoadingSpinner],
  templateUrl: './loading-indicator.html',
  styleUrl: './loading-indicator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'status', 'aria-live': 'polite', 'aria-busy': 'true' }
})
export class LoadingIndicator {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));

  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Defaults to `'Loading'`. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Loading');
  /** Diameter of the loading spinner in CSS pixels. Defaults to `20`. */
  public readonly size: InputSignal<number> = input(20);
}
