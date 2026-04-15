import { defineIcon } from '../../helpers/define-icon';

export const lucideSquarePlus = defineIcon({
  name: 'square-plus',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 12h8" /><path d="M12 8v8" />`
} as const);
