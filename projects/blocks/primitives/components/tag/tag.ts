import type { InputSignal, InputSignalWithTransform, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input, viewChild } from '@angular/core';

import type { ITagPalette } from '@primitives/interfaces/itag-palette.interface';

import { BX_I18N, BxPlacement, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon, IconName, IconSize } from '@filip.mazev/blocks/icons';

import { TAG_PALETTES } from '@primitives/constants/tag.constants';
import { TooltipDirective } from '@primitives/directives/tooltip/tooltip.directive';
import { TruncateDirective } from '@primitives/directives/truncate/truncate.directive';
import { formatTagNumber } from '@primitives/helpers/tag-number.helpers';
import { truncatedText } from '@primitives/helpers/truncation.helpers';
import { ITagConfig } from '@primitives/interfaces/itag-config.interface';
import { TagColor, TagSize, TagVariant } from '@primitives/types/tag.types';

@Component({
  selector: 'bx-tag',
  imports: [Icon, TooltipDirective, TruncateDirective, BxSurfaceDirective],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--bx-tag-role-text]': 'palette().text',
    '[style.--bx-tag-role-fill]': 'palette().fill',
    '[style.--bx-tag-role-on-fill]': 'palette().onFill',
    '[style.--bx-tag-role-tonal]': 'palette().tonal',
    '[style.--bx-tag-role-border]': 'palette().border'
  }
})
export class Tag {
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly textOverflow: Signal<TruncateDirective | undefined> = viewChild(TruncateDirective);

  protected readonly resolvedText: Signal<string> = computed(() => resolveText(this.text(), this.i18n));
  protected readonly resolvedTooltip: Signal<string> = computed(() => {
    const tooltip = this.tooltip() ?? this.config().tooltip;

    return tooltip !== undefined
      ? resolveText(tooltip, this.i18n)
      : truncatedText(this.resolvedText(), this.textOverflow()?.truncated() ?? false, this.tooltipOnTruncate() ?? this.config().tooltipOnTruncate ?? true);
  });
  protected readonly resolvedAriaLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly resolvedVariant: Signal<TagVariant> = computed(() => this.variant() ?? this.config().variant ?? 'tonal');
  protected readonly resolvedSize: Signal<TagSize> = computed(() => this.size() ?? this.config().size ?? 'medium');
  protected readonly resolvedLeadingIcon: Signal<IconName | undefined> = computed(() => this.leadingIcon() ?? this.config().leadingIcon);
  protected readonly resolvedTrailingIcon: Signal<IconName | undefined> = computed(() => this.trailingIcon() ?? this.config().trailingIcon);
  protected readonly resolvedIconSize: Signal<IconSize> = computed(() => this.iconSize() ?? this.config().iconSize ?? '16');
  protected readonly resolvedLeadingNumber: Signal<string> = computed(() => {
    this.i18n?.version?.();

    return formatTagNumber(this.leadingNumber() === undefined ? this.config().leadingNumber : this.leadingNumber(), this.locale());
  });
  protected readonly resolvedTrailingNumber: Signal<string> = computed(() => {
    this.i18n?.version?.();

    return formatTagNumber(this.trailingNumber() === undefined ? this.config().trailingNumber : this.trailingNumber(), this.locale());
  });
  protected readonly palette: Signal<ITagPalette> = computed(() => TAG_PALETTES[this.color() ?? this.config().color ?? 'accent']);
  protected readonly isNumberOnly: Signal<boolean> = computed(
    () =>
      !this.resolvedText() && !this.resolvedLeadingIcon() && !this.resolvedTrailingIcon() && !!this.resolvedLeadingNumber() !== !!this.resolvedTrailingNumber()
  );

  /** Optional opaque surface; true removes translucency and blur. False or absent follows application appearance. */
  public readonly opaque: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);
  /** Text content displayed by the component. Optional; omission leaves the value undefined. */
  public readonly text: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Tag presentation overrides merged with explicit inputs and shared tag defaults. */
  public readonly config: InputSignal<ITagConfig> = input<ITagConfig>({});
  /** Semantic color role applied to the component presentation. Optional; omission leaves the value undefined. */
  public readonly color: InputSignal<TagColor | undefined> = input<TagColor | undefined>(undefined);
  /** Visual presentation variant using the shared Blocks theme and component styles. Optional; omission leaves the value undefined. */
  public readonly variant: InputSignal<TagVariant | undefined> = input<TagVariant | undefined>(undefined);
  /** Supported tag size preset controlling typography and spacing. Optional; omission leaves the value undefined. */
  public readonly size: InputSignal<TagSize | undefined> = input<TagSize | undefined>(undefined);
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Optional icon displayed before the tag text. Optional; omission leaves the value undefined. */
  public readonly leadingIcon: InputSignal<IconName | undefined> = input<IconName | undefined>(undefined);
  /** Optional icon displayed after the tag text. Optional; omission leaves the value undefined. */
  public readonly trailingIcon: InputSignal<IconName | undefined> = input<IconName | undefined>(undefined);
  /** Size of the tag icons in CSS pixels. Optional; omission leaves the value undefined. */
  public readonly iconSize: InputSignal<IconSize | undefined> = input<IconSize | undefined>(undefined);
  /** Optional numeric content displayed before the tag text. Optional; omission leaves the value undefined. */
  public readonly leadingNumber: InputSignal<string | number | null | undefined> = input<number | string | null | undefined>(undefined);
  /** Optional numeric content displayed after the tag text. Optional; omission leaves the value undefined. */
  public readonly trailingNumber: InputSignal<string | number | null | undefined> = input<number | string | null | undefined>(undefined);
  /** Locale used to format numeric tag content; omission uses the runtime locale. Optional; omission leaves the value undefined. */
  public readonly locale: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /**
   * Optional tooltip text for additional context; plain strings and shared translation keys are supported. Optional; omission leaves the value
   * undefined.
   */
  public readonly tooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Disable automatic clipped-label tooltips without disabling ellipsis or an explicit tooltip. Defaults to the config value, then true. */
  public readonly tooltipOnTruncate: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);
  /** Preferred side for the tooltip; shared overlay positioning provides viewport-aware fallback. Defaults to `'top'`. */
  public readonly tooltipPlacement: InputSignal<BxPlacement> = input<BxPlacement>('top');
  /** Optional accessible name when visible text does not provide an appropriate control name. Optional; omission leaves the value undefined. */
  public readonly ariaLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Whether the tag receives a keyboard tab stop for accessible tooltip access. Defaults to `true`. */
  public readonly focusable: InputSignal<boolean> = input(true);
}
