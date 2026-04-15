import { defineIcon } from '../../helpers/define-icon';

export const lucideMoveDiagonal = defineIcon({
  name: 'move-diagonal',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M11 19H5v-6" /><path d="M13 5h6v6" /><path d="M19 5 5 19" />`
} as const);
