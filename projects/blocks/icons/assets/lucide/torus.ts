import { defineIcon } from '../../helpers/define-icon';

export const lucideTorus = defineIcon({
  name: 'torus',
  viewBox: '0 0 24 24',
  svgContent: `<ellipse cx="12" cy="11" rx="3" ry="2" /><ellipse cx="12" cy="12.5" rx="10" ry="8.5" />`
} as const);
