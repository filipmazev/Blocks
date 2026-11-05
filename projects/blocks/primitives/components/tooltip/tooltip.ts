import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, BxA11yService, isTextWithKey, ResolvableText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

@Component({
  selector: 'bx-tooltip',
  imports: [BxSurfaceDirective],
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tooltip.scss'
})
export class Tooltip {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);

  protected readonly resolvedText: Signal<string | undefined> = computed(() => {
    this.i18n?.version?.();

    const textData = this.text();

    if (!textData) return undefined;

    if (isTextWithKey(textData)) {
      return this.i18n?.translate(textData.key) ?? textData.key;
    }

    return textData;
  });

  public readonly isAnimated: Signal<boolean> = computed(() => !this.a11y.isReducedMotion());

  public readonly text: InputSignal<ResolvableText> = input.required<ResolvableText>();
}
