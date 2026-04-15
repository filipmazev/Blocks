import { defineIcon } from '../../helpers/define-icon';

export const lucidePowerCircle = defineIcon({
  name: 'power-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M12 7v4" /><path d="M7.998 9.003a5 5 0 1 0 8-.005" />`
} as const);
