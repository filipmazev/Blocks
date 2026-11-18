import type { TemplateRef } from '@angular/core';

import { ThemedColor } from '@filip.mazev/blocks/core';

import { IconName, IconSize } from '@icons/types/icon.types';

/**
 * Describes the icon data contract.
 */
export interface IIconData {
  /** Name identifying this icon; optional when template supplies the visual. */
  name?: IconName;
  /** Custom noninteractive visual rendered in the icon frame; takes precedence over name. */
  template?: TemplateRef<unknown>;
  /** Rendered icon dimensions using the supported icon size contract. Optional. */
  size?: IconSize;
  /** Width of icon strokes using the supported icon stroke contract. Optional. */
  strokeWidth?: number;

  /** CSS color or supported semantic color token used for this item. Optional. */
  color?: ThemedColor;
  /** Optional background color; auto lets the owning component choose its backing. */
  bgColor?: ThemedColor | 'auto';
}
