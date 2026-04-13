import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleSlashed = defineIcon({
  name: 'circle-slashed',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M22 2 2 22" />`
} as const);
