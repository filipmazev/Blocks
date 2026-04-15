import { defineIcon } from '../../helpers/define-icon';

export const lucideChevronDownCircle = defineIcon({
  name: 'chevron-down-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m16 10-4 4-4-4" />`
} as const);
