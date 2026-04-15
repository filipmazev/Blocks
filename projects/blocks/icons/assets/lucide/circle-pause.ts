import { defineIcon } from '../../helpers/define-icon';

export const lucideCirclePause = defineIcon({
  name: 'circle-pause',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><line x1="10" x2="10" y1="15" y2="9" /><line x1="14" x2="14" y1="15" y2="9" />`
} as const);
