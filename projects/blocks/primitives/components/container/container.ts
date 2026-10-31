import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { ContainerSize } from '../shared/types/layout.types';

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
  protected readonly resolvedLabel = computed(() => resolveText(this.ariaLabel(), this.i18n));
  public readonly size = input<ContainerSize>('lg');
  /** Optional semantic landmark. Use main once per page, region for named sections. */
  public readonly landmark = input<'main' | 'region' | 'complementary' | undefined>(undefined);
  public readonly ariaLabel = input<ResolvableText | undefined>(undefined);
}
