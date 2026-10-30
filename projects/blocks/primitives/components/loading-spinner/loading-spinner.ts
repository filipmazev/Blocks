import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-loading-spinner',
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--bx-spinner-size]': 'size() + "px"',
    '[attr.role]': 'decorative() ? null : "status"',
    '[attr.aria-label]': 'decorative() ? null : resolvedLabel()',
    '[attr.aria-hidden]': 'decorative() ? "true" : null',
    '[class.is-reduced-motion]': 'a11y.isReducedMotion()'
  }
})
export class LoadingSpinner {
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly a11y = inject(BxA11yService);
  protected readonly resolvedLabel = computed(() => resolveText(this.label(), this.i18n));

  public readonly size = input(20);
  public readonly decorative = input(false);
  public readonly label = input<ResolvableText>('Loading');
}
