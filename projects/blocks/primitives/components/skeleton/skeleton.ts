import type { InputSignal, InputSignalWithTransform, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, BxA11yService, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { SkeletonShape } from '@primitives/types/skeleton.types';

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
    '[class.is-static]': '!animated() || bxA11yService.isReducedMotion()',
    '[class.is-circle]': 'shape() === "circle"',
    '[class.is-text]': 'shape() === "text"',
    '[style.inline-size]': 'width()',
    '[style.--bx-skeleton-height]': 'height()'
  }
})
export class Skeleton {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly bxA11yService = inject(BxA11yService);

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));
  protected readonly rows: Signal<number[]> = computed(() =>
    Array.from({ length: this.shape() === 'text' ? Math.max(1, Math.min(100, Math.floor(this.lines()) || 1)) : 1 }, (_, index) => index)
  );

  /** Skeleton placeholder shape used while content is loading. Defaults to `'text'`. */
  public readonly shape: InputSignal<SkeletonShape> = input<SkeletonShape>('text');
  /** Number of skeleton text lines to render. Defaults to `1`. */
  public readonly lines: InputSignal<number> = input(1);
  /** CSS width of the skeleton placeholder. Optional; omission leaves the value undefined. */
  public readonly width: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** CSS height of the skeleton placeholder. Optional; omission leaves the value undefined. */
  public readonly height: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Whether the skeleton uses decorative loading motion; reduced-motion preferences take precedence. Defaults to `true`. */
  public readonly animated: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the visual is decorative and should be hidden from assistive technology. Defaults to `true`. */
  public readonly decorative: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Defaults to `'Loading content'`. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Loading content');
}
