import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelsTopLeft = defineIcon({
  name: 'panels-top-left',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />`
} as const);
