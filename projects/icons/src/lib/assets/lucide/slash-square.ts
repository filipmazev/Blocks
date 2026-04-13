import { defineIcon } from '../../helpers/define-icon';

export const lucideSlashSquare = defineIcon({
  name: 'slash-square',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><line x1="9" x2="15" y1="15" y2="9" />`
} as const);
