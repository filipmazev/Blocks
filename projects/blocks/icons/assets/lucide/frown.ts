import { defineIcon } from '../../helpers/define-icon';

export const lucideFrown = defineIcon({
  name: 'frown',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" />`
} as const);
