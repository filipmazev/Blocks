import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';

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
  protected readonly resolvedLabel = computed(() => resolveText(this.label(), this.i18n));

  public readonly label = input<ResolvableText>('Loading');
  public readonly size = input(20);
}
