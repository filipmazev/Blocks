import { defineIcon } from '../../helpers/define-icon';

export const lucideParkingSquare = defineIcon({
  name: 'parking-square',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" />`
} as const);
