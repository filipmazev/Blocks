import { defineIcon } from '../../helpers/define-icon';

export const lucideRectangleEllipsis = defineIcon({
  name: 'rectangle-ellipsis',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="20" height="12" x="2" y="6" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />`
} as const);
