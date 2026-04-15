import { defineIcon } from '../../helpers/define-icon';

export const lucideSquareMenu = defineIcon({
  name: 'square-menu',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" />`
} as const);
