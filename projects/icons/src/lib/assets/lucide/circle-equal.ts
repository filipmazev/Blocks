import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleEqual = defineIcon({
  name: 'circle-equal',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M7 10h10" /><path d="M7 14h10" />`
} as const);
