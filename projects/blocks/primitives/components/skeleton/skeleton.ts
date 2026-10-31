import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { SkeletonShape } from './types/skeleton.types';

@Component({
  selector: 'bx-skeleton',
  template: '@for (line of rows(); track line) { <span class="bx-skeleton-line"></span> }',
  styleUrl: './skeleton.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-hidden]': 'decorative() ? "true" : null',
    '[attr.role]': 'decorative() ? null : "status"',
    '[attr.aria-label]': 'decorative() ? null : resolvedLabel()',
    '[attr.aria-busy]': 'decorative() ? null : "true"',
    '[class.is-static]': '!animated() || a11y.isReducedMotion()',
    '[class.is-circle]': 'shape() === "circle"',
    '[class.is-text]': 'shape() === "text"',
    '[style.inline-size]': 'width()',
    '[style.--bx-skeleton-height]': 'height()'
  }
})
export class Skeleton {
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly a11y = inject(BxA11yService);
  protected readonly resolvedLabel = computed(() => resolveText(this.label(), this.i18n));
  protected readonly rows = computed(() =>
    Array.from({ length: this.shape() === 'text' ? Math.max(1, Math.min(100, Math.floor(this.lines()) || 1)) : 1 }, (_, index) => index)
  );

  public readonly shape = input<SkeletonShape>('text');
  public readonly lines = input(1);
  public readonly width = input<string | undefined>(undefined);
  public readonly height = input<string | undefined>(undefined);
  public readonly animated = input(true, { transform: booleanAttribute });
  public readonly decorative = input(true, { transform: booleanAttribute });
  public readonly label = input<ResolvableText>('Loading content');
}
