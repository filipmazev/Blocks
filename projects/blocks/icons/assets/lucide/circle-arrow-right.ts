import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleArrowRight = defineIcon({
  name: 'circle-arrow-right',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m12 16 4-4-4-4" /><path d="M8 12h8" />`
} as const);
