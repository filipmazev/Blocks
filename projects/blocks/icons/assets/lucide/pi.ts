import { defineIcon } from '../../helpers/define-icon';

export const lucidePi = defineIcon({
  name: 'pi',
  viewBox: '0 0 24 24',
  svgContent: `<line x1="9" x2="9" y1="4" y2="20" /><path d="M4 7c0-1.7 1.3-3 3-3h13" /><path d="M18 20c-1.7 0-3-1.3-3-3V4" />`
} as const);
