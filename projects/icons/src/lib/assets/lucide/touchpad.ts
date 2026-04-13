import { defineIcon } from '../../helpers/define-icon';

export const lucideTouchpad = defineIcon({
  name: 'touchpad',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="20" height="16" x="2" y="4" rx="2" /><path d="M2 14h20" /><path d="M12 20v-6" />`
} as const);
