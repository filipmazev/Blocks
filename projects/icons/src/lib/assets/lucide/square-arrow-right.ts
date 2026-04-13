import { defineIcon } from '../../helpers/define-icon';

export const lucideSquareArrowRight = defineIcon({
  name: 'square-arrow-right',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 12h8" /><path d="m12 16 4-4-4-4" />`
} as const);
