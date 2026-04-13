import { defineIcon } from '../../helpers/define-icon';

export const lucideMars = defineIcon({
  name: 'mars',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M16 3h5v5" /><path d="m21 3-6.75 6.75" /><circle cx="10" cy="14" r="6" />`
} as const);
