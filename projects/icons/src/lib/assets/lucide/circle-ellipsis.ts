import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleEllipsis = defineIcon({
  name: 'circle-ellipsis',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M17 12h.01" /><path d="M12 12h.01" /><path d="M7 12h.01" />`
} as const);
