import type { InputSignal, InputSignalWithTransform, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { SkeletonShape } from '@primitives/components/skeleton/types/skeleton.types';

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

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));
  protected readonly rows: Signal<number[]> = computed(() =>
    Array.from({ length: this.shape() === 'text' ? Math.max(1, Math.min(100, Math.floor(this.lines()) || 1)) : 1 }, (_, index) => index)
  );

  public readonly shape: InputSignal<SkeletonShape> = input<SkeletonShape>('text');
  public readonly lines: InputSignal<number> = input(1);
  public readonly width: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly height: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly animated: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  public readonly decorative: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Loading content');
}
