import { ThemedColor } from '@filip.mazev/blocks/core';

import { IconName, IconSize, IconStrokeWidth } from '@icons/types/icon.types';

/**
 * Describes the icon data contract.
 */
export interface IIconData {
  /** Name identifying this icon. */
  name: IconName;
  /** Rendered icon dimensions using the supported icon size contract. Optional. */
  size?: IconSize;
  /** Width of icon strokes using the supported icon stroke contract. Optional. */
  strokeWidth?: IconStrokeWidth;

  /** CSS color or supported semantic color token used for this item. Optional. */
  color?: ThemedColor;
  /** Optional background color; auto lets the owning component choose its backing. */
  bgColor?: ThemedColor | 'auto';
}
