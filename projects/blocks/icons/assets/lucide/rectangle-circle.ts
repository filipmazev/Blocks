import { defineIcon } from '../../helpers/define-icon';

export const lucideRectangleCircle = defineIcon({
  name: 'rectangle-circle',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><circle cx="14" cy="12" r="8" />`
} as const);
