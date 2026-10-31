import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { DividerOrientation, DividerStyle } from './types/divider.types';

@Component({
  selector: 'bx-divider',
  template: '@if (resolvedLabel()) { <span class="bx-divider-label">{{ resolvedLabel() }}</span> }',
  styleUrl: './divider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.role]': 'decorative() ? null : "separator"',
    '[attr.aria-hidden]': 'decorative() ? "true" : null',
    '[attr.aria-orientation]': 'decorative() ? null : orientation()',
    '[attr.aria-label]': 'decorative() ? null : resolvedLabel() || null',
    '[class.is-vertical]': 'orientation() === "vertical"',
    '[class.has-label]': '!!resolvedLabel()',
    '[style.--bx-divider-style]': 'lineStyle()'
  }
})
export class Divider {
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly resolvedLabel = computed(() => resolveText(this.label(), this.i18n));
  public readonly orientation = input<DividerOrientation>('horizontal');
  public readonly lineStyle = input<DividerStyle>('solid');
  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly decorative = input(false, { transform: booleanAttribute });
}
