import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleAlert = defineIcon({
  name: 'circle-alert',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />`
} as const);
