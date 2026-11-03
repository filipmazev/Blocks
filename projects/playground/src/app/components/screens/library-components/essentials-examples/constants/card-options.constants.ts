import type { Color } from '@filip.mazev/blocks/core';
import type { IBxSelectOption } from '@filip.mazev/blocks/forms';

/** Semantic tokens demonstrate that card selection follows the active palette. */
export const CARD_HIGHLIGHT_OPTIONS: readonly IBxSelectOption<Color>[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Accent', value: 'accent' },
  { label: 'Success', value: 'text-success' },
  { label: 'Info', value: 'text-info' }
];
