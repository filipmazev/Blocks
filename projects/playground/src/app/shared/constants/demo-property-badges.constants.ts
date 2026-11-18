import type { ITagConfig } from '@filip.mazev/blocks/primitives';
import type { IDemoProperty } from '@playground/interfaces/idemo-property.interface';

export const DEMO_PROPERTY_BADGES: Readonly<Record<NonNullable<IDemoProperty['category']>, ITagConfig>> = {
  Accessibility: { color: 'info', leadingIcon: 'accessibility', size: 'small', iconSize: '12', variant: 'tonal' },
  'Projected content': { color: 'success', leadingIcon: 'layers', size: 'small', iconSize: '12', variant: 'tonal' },
  'DOM target': { color: 'warn', leadingIcon: 'scan', size: 'small', iconSize: '12', variant: 'tonal' },
  Template: { color: 'accent', leadingIcon: 'code-xml', size: 'small', iconSize: '12', variant: 'tonal' },
  Configuration: { color: 'neutral', leadingIcon: 'settings-2', size: 'small', iconSize: '12', variant: 'tonal' }
};
