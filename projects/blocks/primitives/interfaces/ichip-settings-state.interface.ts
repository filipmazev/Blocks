import type { IconName } from '@filip.mazev/blocks/icons';
import type { TagColor, TagSize, TagVariant } from '@primitives/types/tag.types';

import { ResolvableText } from '@filip.mazev/blocks/core';

/** Resolved settings state used by Chip. */
export interface IChipSettingsState {
  /** Resolved color value. */
  color: TagColor;
  /** Resolved variant value. */
  variant: TagVariant;
  /** Resolved size value. */
  size: TagSize;
  /** Resolved icon value. */
  icon: IconName | undefined;
  /** Resolved remove Label value. */
  removeLabel: ResolvableText;
}
