import { defineIcon } from '../../helpers/define-icon';

export const lucideStopCircle = defineIcon({
  name: 'stop-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><rect x="9" y="9" width="6" height="6" rx="1" />`
} as const);
