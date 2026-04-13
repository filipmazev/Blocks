import { ThemedColor } from '@filip.mazev/blocks-core';
import { IconName, IconSize, IconStrokeWidth } from '../types/icon.types';

export interface Icon {
  name: IconName;
  size: IconSize;
  strokeWidth?: IconStrokeWidth;

  color?: ThemedColor;
  bgColor?: ThemedColor | 'auto';
}
