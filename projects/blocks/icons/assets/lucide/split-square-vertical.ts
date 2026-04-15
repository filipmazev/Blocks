import { defineIcon } from '../../helpers/define-icon';

export const lucideSplitSquareVertical = defineIcon({
  name: 'split-square-vertical',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" /><path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" /><line x1="4" x2="20" y1="12" y2="12" />`
} as const);
