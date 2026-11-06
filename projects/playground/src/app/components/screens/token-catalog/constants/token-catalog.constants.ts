import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { TokenCatalogCategory, TokenCopyFormat } from '@playground/components/screens/token-catalog/types/token-catalog.types';

export const TOKEN_CATALOG_CATEGORIES: readonly IBxSelectOption<TokenCatalogCategory>[] = [
  { value: 'colors', label: 'Colors' },
  { value: 'pairs', label: 'Color pairs' },
  { value: 'spacing', label: 'Spacing' },
  { value: 'radii', label: 'Corner radii' },
  { value: 'shadows', label: 'Shadows' },
  { value: 'layers', label: 'Stacking layers' },
  { value: 'effects', label: 'Glass and effects' },
  { value: 'components', label: 'Component variables' },
  { value: 'other', label: 'Accessibility and other variables' },
  { value: 'breakpoints', label: 'Sass breakpoints' },
  { value: 'utilities', label: 'Utility classes' }
];

export const TOKEN_CATALOG_GROUP_ORDER: readonly string[] = [
  'Backgrounds and surfaces',
  'Primary and brand',
  'Accent',
  'Text',
  'Borders',
  'Danger',
  'Warning',
  'Information',
  'Success',
  'Scrollbars'
];

export const TOKEN_COPY_FORMATS: readonly TokenCopyFormat[] = ['variable', 'name', 'hex', 'rgb', 'rgba'];

export const TOKEN_COPY_LABELS: Readonly<Record<TokenCopyFormat, string>> = {
  variable: 'Copy CSS variable',
  name: 'Copy token name',
  hex: 'Copy HEX code',
  rgb: 'Copy RGB',
  rgba: 'Copy RGBA'
};
