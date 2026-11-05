import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { ContainerSize } from '@primitives/types/layout.types';

@Component({
  selector: 'bx-container',
  template: '<ng-content />',
  styleUrl: './container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-size]': 'size()',
    '[attr.role]': 'landmark() ?? null',
    '[attr.aria-label]': 'landmark() ? resolvedLabel() || null : null'
  }
})
export class Container {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));

  /** Maximum-width preset for the centered content container. Defaults to `'lg'`. */
  public readonly size: InputSignal<ContainerSize> = input<ContainerSize>('lg');
  /** Optional semantic landmark. Use main once per page, region for named sections. */
  public readonly landmark: InputSignal<'main' | 'region' | 'complementary' | undefined> = input<'main' | 'region' | 'complementary' | undefined>(undefined);
  /** Optional accessible name when visible text does not provide an appropriate control name. Optional; omission leaves the value undefined. */
  public readonly ariaLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
}
