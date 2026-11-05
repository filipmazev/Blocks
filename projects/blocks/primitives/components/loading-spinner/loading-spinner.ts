import type { InputSignal, Signal } from '@angular/core';

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
    '[class.is-reduced-motion]': 'bxA11yService.isReducedMotion()'
  }
})
export class LoadingSpinner {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly bxA11yService = inject(BxA11yService);

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));

  /** Spinner diameter in CSS pixels. Defaults to `20`. */
  public readonly size: InputSignal<number> = input(20);
  /** Whether the visual is decorative and should be hidden from assistive technology. Defaults to `false`. */
  public readonly decorative: InputSignal<boolean> = input(false);
  /** Accessible loading label when the spinner is not decorative; supports shared translation keys. Defaults to `'Loading'`. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Loading');
}
