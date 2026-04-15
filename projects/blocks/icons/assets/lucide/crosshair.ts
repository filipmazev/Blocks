import { defineIcon } from '../../helpers/define-icon';

export const lucideCrosshair = defineIcon({
  name: 'crosshair',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><line x1="22" x2="18" y1="12" y2="12" /><line x1="6" x2="2" y1="12" y2="12" /><line x1="12" x2="12" y1="6" y2="2" /><line x1="12" x2="12" y1="22" y2="18" />`
} as const);
