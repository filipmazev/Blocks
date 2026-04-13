import { defineIcon } from '../../helpers/define-icon';

export const lucideSeparatorHorizontal = defineIcon({
  name: 'separator-horizontal',
  viewBox: '0 0 24 24',
  svgContent: `<path d="m16 16-4 4-4-4" /><path d="M3 12h18" /><path d="m8 8 4-4 4 4" />`
} as const);
