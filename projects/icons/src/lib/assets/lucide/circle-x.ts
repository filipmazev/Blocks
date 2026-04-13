import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleX = defineIcon({
  name: 'circle-x',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" />`
} as const);
