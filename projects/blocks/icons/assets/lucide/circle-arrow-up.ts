import { defineIcon } from '../../helpers/define-icon';

export const lucideCircleArrowUp = defineIcon({
  name: 'circle-arrow-up',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" />`
} as const);
