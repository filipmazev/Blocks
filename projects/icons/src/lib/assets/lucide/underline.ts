import { defineIcon } from '../../helpers/define-icon';

export const lucideUnderline = defineIcon({
  name: 'underline',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" />`
} as const);
