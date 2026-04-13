import { defineIcon } from '../../helpers/define-icon';

export const lucideSquareArrowUp = defineIcon({
  name: 'square-arrow-up',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" />`
} as const);
