import type { BxPlacement, Color } from '@filip.mazev/blocks/core';
import type { IBxSelectOption } from '@filip.mazev/blocks/forms';

export const UTILITY_PLACEMENTS: IBxSelectOption<BxPlacement>[] = [
  { label: 'Bottom', value: 'bottom' },
  { label: 'Top', value: 'top' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' }
];

export const UTILITY_COLOR_TOKENS: IBxSelectOption<Color>[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Accent', value: 'accent' },
  { label: 'Surface', value: 'bg-surface' },
  { label: 'Primary text', value: 'text-primary' },
  { label: 'Orange 500', value: 'orange-500' },
  { label: 'Blue 100', value: 'blue-100' }
];
