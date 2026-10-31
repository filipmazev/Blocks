import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { injectComponentSurface } from '@filip.mazev/blocks/effects';
import { CardVariant } from './types/card.types';

@Component({
  selector: 'bx-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[attr.data-variant]': 'variant()' }
})
export class Card {
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly resolvedTitle = computed(() => resolveText(this.title(), this.i18n));
  protected readonly resolvedSubtitle = computed(() => resolveText(this.subtitle(), this.i18n));
  protected readonly level = computed(() => (Number.isFinite(this.headingLevel()) ? Math.max(1, Math.min(6, Math.floor(this.headingLevel()))) : 3));
  public readonly title = input<ResolvableText | undefined>(undefined);
  public readonly subtitle = input<ResolvableText | undefined>(undefined);
  public readonly headingLevel = input(3);
  public readonly variant = input<CardVariant>('outlined');
  /** Optional opaque presentation. Absent follows the global appearance. */
  public readonly opaque = input<boolean | undefined>(undefined);

  constructor() {
    injectComponentSurface(() => ({ interactive: false, reducedTransparency: this.opaque() }));
  }
}
