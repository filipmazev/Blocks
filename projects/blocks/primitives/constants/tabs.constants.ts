import { Color } from '@filip.mazev/blocks/core';
import { TabColor, TabsVariant } from '../types/tabs.types';

export const DEFAULT_TABS_VARIANT: TabsVariant = 'segmented';
export const DEFAULT_TABS_LABEL = 'Tabs';
export const TAB_NAVIGATION_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'Home', 'End']);
export const DEFAULT_TAB_COLOR: TabColor = 'primary';
export const TAB_EMISSION_OPACITY = 0.15;
export const TAB_COLOR_TOKENS: Readonly<Record<TabColor, Color>> = {
  primary: 'primary',
  accent: 'accent',
  success: 'text-success',
  danger: 'text-danger',
  info: 'text-info',
  warn: 'text-warn',
  grayscale: 'text-primary'
};
