import { defineIcon } from '../../helpers/define-icon';

export const lucideSmile = defineIcon({
  name: 'smile',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" />`
} as const);
