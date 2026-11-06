import type { Color } from '@filip.mazev/blocks/core';
import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IChipConfig } from '@filip.mazev/blocks/primitives';
import type { IIconCatalogPreferences } from '@playground/components/screens/icon-catalog/interfaces/iicon-catalog-preferences.interface';

export const ICON_CATALOG_DEFAULTS: IIconCatalogPreferences = { version: 1, size: 24, strokeWidth: 1.5, categories: [] };
export const ICON_CATALOG_STORAGE_KEY = 'blocks.icon-catalog.v1';
export const ICON_CATALOG_CATEGORY_CHIP: IChipConfig = { color: 'neutral', variant: 'tonal' };
export const ICON_CATALOG_SELECTED_CATEGORY_CHIP: IChipConfig = { color: 'accent', variant: 'filled' };
export const ICON_CATALOG_COLORS: readonly IBxSelectOption<Color>[] = [
  { label: 'Accent', value: 'accent' },
  { label: 'Primary', value: 'primary' },
  { label: 'Text', value: 'text-primary' },
  { label: 'Secondary text', value: 'text-secondary' },
  { label: 'Success', value: 'text-success' },
  { label: 'Information', value: 'text-info' },
  { label: 'Warning', value: 'text-warn' },
  { label: 'Danger', value: 'text-danger' }
];
