import { defineIcon } from '../../helpers/define-icon';

export const lucideCirclePlus = defineIcon({
  name: 'circle-plus',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />`
} as const);
