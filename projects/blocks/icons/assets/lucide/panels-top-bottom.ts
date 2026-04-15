import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelsTopBottom = defineIcon({
  name: 'panels-top-bottom',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M21 9H3" /><path d="M21 15H3" />`
} as const);
