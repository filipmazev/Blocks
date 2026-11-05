import type { InputSignal, InputSignalWithTransform, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { DividerOrientation, DividerStyle } from '@primitives/types/divider.types';

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

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));

  /** Direction of the divider line. Defaults to `'horizontal'`. */
  public readonly orientation: InputSignal<DividerOrientation> = input<DividerOrientation>('horizontal');
  /** Divider stroke presentation using the supported line styles. Defaults to `'solid'`. */
  public readonly lineStyle: InputSignal<DividerStyle> = input<DividerStyle>('solid');
  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Optional; omission leaves the value undefined. */
  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Whether the visual is decorative and should be hidden from assistive technology. Defaults to `false`. */
  public readonly decorative: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
}
