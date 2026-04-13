import { defineIcon } from '../../helpers/define-icon';

export const lucideMoveVertical = defineIcon({
  name: 'move-vertical',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M12 2v20" /><path d="m8 18 4 4 4-4" /><path d="m8 6 4-4 4 4" />`
} as const);
