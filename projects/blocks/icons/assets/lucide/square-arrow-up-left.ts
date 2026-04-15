import { defineIcon } from '../../helpers/define-icon';

export const lucideSquareArrowUpLeft = defineIcon({
  name: 'square-arrow-up-left',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 16V8h8" /><path d="M16 16 8 8" />`
} as const);
