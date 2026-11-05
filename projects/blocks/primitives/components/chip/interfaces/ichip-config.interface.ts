import { ResolvableText } from '@filip.mazev/blocks/core';
import { IconName } from '@filip.mazev/blocks/icons';

import { TagColor, TagSize, TagVariant } from '@primitives/components/tag/types/tag.types';

/** Optional chip appearance. Instance configuration overrides BX_CHIP_DEFAULTS. */
export interface IChipConfig {
  /** Semantic palette. Defaults to primary. */
  color?: TagColor;
  /** Surface variant. Defaults to tonal. */
  variant?: TagVariant;
  /** Density. Defaults to medium. */
  size?: TagSize;
  /** Optional decorative leading icon. Hidden by the check mark when selected. */
  icon?: IconName;
  /** Accessible remove-action text; supports translation keys and {label}. Defaults to Remove {label}. */
  removeLabel?: ResolvableText;
}
