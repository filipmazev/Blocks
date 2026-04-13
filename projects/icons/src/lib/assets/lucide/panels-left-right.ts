import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelsLeftRight = defineIcon({
  name: 'panels-left-right',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" />`
} as const);
