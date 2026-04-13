import { defineIcon } from '../../helpers/define-icon';

export const lucideBatteryFull = defineIcon({
  name: 'battery-full',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M10 10v4" /><path d="M14 10v4" /><path d="M22 14v-4" /><path d="M6 10v4" /><rect x="2" y="6" width="16" height="12" rx="2" />`
} as const);
