import { ResolvableText } from '@filip.mazev/blocks/core';
import { IconName, IconSize } from '@filip.mazev/blocks/icons';
import { TagColor, TagSize, TagVariant } from '../types/tag.types';

/** Reusable tag appearance; direct component inputs override these optional values. */
export interface ITagConfig {
  /** Semantic color role. Defaults to accent. */
  color?: TagColor;
  /** Filled, tonal, or outlined treatment. Defaults to tonal. */
  variant?: TagVariant;
  /** Compact or standard sizing. Defaults to medium. */
  size?: TagSize;
  /** Decorative icon before the text. */
  leadingIcon?: IconName;
  /** Decorative icon after the text. */
  trailingIcon?: IconName;
  /** Size of the icons. Defaults to 16. */
  iconSize?: IconSize;
  /** Optional leading count; strings allow prefixes such as +. Null hides the count. */
  leadingNumber?: number | string | null;
  /** Optional trailing count. Null hides the count. */
  trailingNumber?: number | string | null;
  /** Optional explicit translatable description. Otherwise the full label appears only when clipped. An empty string suppresses the automatic tooltip. */
  tooltip?: ResolvableText;
  /** Whether clipped labels automatically supply their full text as a tooltip. Defaults to true; explicit tooltip text is independent. */
  tooltipOnTruncate?: boolean;
}
