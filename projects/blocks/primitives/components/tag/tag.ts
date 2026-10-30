import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input, viewChild } from '@angular/core';
import { BX_I18N, BxPlacement, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { Icon, IconName, IconSize } from '@filip.mazev/blocks/icons';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { TruncateDirective } from '../../directives/truncate.directive';
import { truncatedText } from '../../helpers/truncation.helpers';
import { ITagConfig } from './interfaces/itag-config.interface';
import { TagColor, TagSize, TagVariant } from './types/tag.types';
import { TAG_PALETTES } from './constants/tag.constants';
import { formatTagNumber } from './helpers/tag-number.helpers';

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
  private readonly textOverflow = viewChild(TruncateDirective);
  protected readonly resolvedText = computed(() => resolveText(this.text(), this.i18n));
  protected readonly resolvedTooltip = computed(() => {
    const tooltip = this.tooltip() ?? this.config().tooltip;

    return tooltip !== undefined
      ? resolveText(tooltip, this.i18n)
      : truncatedText(this.resolvedText(), this.textOverflow()?.truncated() ?? false, this.tooltipOnTruncate() ?? this.config().tooltipOnTruncate ?? true);
  });

  protected readonly resolvedAriaLabel = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly resolvedVariant = computed(() => this.variant() ?? this.config().variant ?? 'tonal');
  protected readonly resolvedSize = computed(() => this.size() ?? this.config().size ?? 'medium');
  protected readonly resolvedLeadingIcon = computed(() => this.leadingIcon() ?? this.config().leadingIcon);
  protected readonly resolvedTrailingIcon = computed(() => this.trailingIcon() ?? this.config().trailingIcon);
  protected readonly resolvedIconSize = computed(() => this.iconSize() ?? this.config().iconSize ?? '16');
  protected readonly resolvedLeadingNumber = computed(() => {
    this.i18n?.version?.();

    return formatTagNumber(this.leadingNumber() === undefined ? this.config().leadingNumber : this.leadingNumber(), this.locale());
  });

  protected readonly resolvedTrailingNumber = computed(() => {
    this.i18n?.version?.();

    return formatTagNumber(this.trailingNumber() === undefined ? this.config().trailingNumber : this.trailingNumber(), this.locale());
  });

  protected readonly palette = computed(() => TAG_PALETTES[this.color() ?? this.config().color ?? 'accent']);
  protected readonly isNumberOnly = computed(
    () =>
      !this.resolvedText() && !this.resolvedLeadingIcon() && !this.resolvedTrailingIcon() && !!this.resolvedLeadingNumber() !== !!this.resolvedTrailingNumber()
  );

  public readonly text = input<ResolvableText | undefined>(undefined);
  public readonly config = input<ITagConfig>({});
  public readonly color = input<TagColor | undefined>(undefined);
  public readonly variant = input<TagVariant | undefined>(undefined);
  public readonly size = input<TagSize | undefined>(undefined);
  public readonly disabled = input(false, { transform: booleanAttribute });
  public readonly leadingIcon = input<IconName | undefined>(undefined);
  public readonly trailingIcon = input<IconName | undefined>(undefined);
  public readonly iconSize = input<IconSize | undefined>(undefined);
  public readonly leadingNumber = input<number | string | null | undefined>(undefined);
  public readonly trailingNumber = input<number | string | null | undefined>(undefined);
  public readonly locale = input<string | undefined>(undefined);
  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  /** Disable automatic clipped-label tooltips without disabling ellipsis or an explicit tooltip. Defaults to the config value, then true. */
  public readonly tooltipOnTruncate = input<boolean | undefined>(undefined);
  public readonly tooltipPlacement = input<BxPlacement>('top');
  public readonly ariaLabel = input<ResolvableText | undefined>(undefined);
  public readonly focusable = input(true);
}
