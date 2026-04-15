import { defineIcon } from '../../helpers/define-icon';

export const lucideParkingCircle = defineIcon({
  name: 'parking-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" />`
} as const);
