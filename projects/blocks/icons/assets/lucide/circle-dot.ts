import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleDot = defineIcon({
  name: 'circle-dot',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="1" />`
} as const);
