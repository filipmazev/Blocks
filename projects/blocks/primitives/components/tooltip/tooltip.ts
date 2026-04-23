import { Component, computed, inject, input } from '@angular/core';
import { BX_I18N, BxA11yService, isTextWithKey, ResolvableText } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-tooltip',
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss'
})
export class Tooltip {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);

  public readonly isAnimated = computed(() => !this.a11y.isReducedMotion());
  public readonly text = input.required<ResolvableText>();

  protected readonly resolvedText = computed(() => {
    this.i18n?.version?.(); 
    
    const textData = this.text();
    if (!textData) return undefined;
    
    if (isTextWithKey(textData)) {
      return this.i18n?.translate(textData.key) ?? textData.key;
    }
    
    return textData;
  });
}