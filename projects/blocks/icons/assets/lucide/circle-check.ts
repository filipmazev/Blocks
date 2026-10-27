import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleCheck = defineIcon({
  name: 'circle-check',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m16 9-5.5 5.5L8 12" />`
} as const);
