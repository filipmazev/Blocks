import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleSlash = defineIcon({
  name: 'circle-slash',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><line x1="9" x2="15" y1="15" y2="9" />`
} as const);
