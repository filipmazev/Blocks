import { defineIcon } from '../../helpers/define-icon';

export const lucideBatteryLow = defineIcon({
  name: 'battery-low',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M22 14v-4" /><path d="M6 14v-4" /><rect x="2" y="6" width="16" height="12" rx="2" />`
} as const);
