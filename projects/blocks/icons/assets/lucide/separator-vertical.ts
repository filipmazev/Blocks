import { defineIcon } from '../../helpers/define-icon';

export const lucideSeparatorVertical = defineIcon({
  name: 'separator-vertical',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M12 3v18" /><path d="m16 16 4-4-4-4" /><path d="m8 8-4 4 4 4" />`
} as const);
