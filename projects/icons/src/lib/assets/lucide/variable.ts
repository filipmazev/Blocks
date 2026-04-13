import { defineIcon } from '../../helpers/define-icon';

export const lucideVariable = defineIcon({
  name: 'variable',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M8 21s-4-3-4-9 4-9 4-9" /><path d="M16 3s4 3 4 9-4 9-4 9" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" />`
} as const);
