import { defineIcon } from '../../helpers/define-icon';

export const lucideChevronRightCircle = defineIcon({
  name: 'chevron-right-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" />`
} as const);
