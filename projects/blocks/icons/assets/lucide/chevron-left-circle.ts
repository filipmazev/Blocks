import { defineIcon } from '../../helpers/define-icon';

export const lucideChevronLeftCircle = defineIcon({
  name: 'chevron-left-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" />`
} as const);
