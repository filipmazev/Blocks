import { IBxSelectOption } from '@filip.mazev/blocks/forms';
import { TagColor, TagVariant } from '@filip.mazev/blocks/primitives';

export const TAG_COLOR_OPTIONS: readonly IBxSelectOption<TagColor>[] = [
  { label: 'Accent', value: 'accent' },
  { label: 'Primary', value: 'primary' },
  { label: 'Success', value: 'success' },
  { label: 'Danger', value: 'danger' },
  { label: 'Info', value: 'info' },
  { label: 'Warning', value: 'warn' },
  { label: 'Neutral', value: 'neutral' }
];
export const TAG_VARIANT_OPTIONS: readonly IBxSelectOption<TagVariant>[] = [
  { label: 'Tonal', value: 'tonal' },
  { label: 'Filled', value: 'filled' },
  { label: 'Outlined', value: 'outlined' }
];
