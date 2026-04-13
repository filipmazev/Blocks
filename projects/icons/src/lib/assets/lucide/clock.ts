import { defineIcon } from '../../helpers/define-icon';

export const lucideClock = defineIcon({
  name: 'clock',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />`
} as const);
