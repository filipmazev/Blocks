import { defineIcon } from '../../helpers/define-icon';

export const lucideCylinder = defineIcon({
  name: 'cylinder',
  viewBox: '0 0 24 24',
  svgContent: `<ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" />`
} as const);
