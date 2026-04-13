import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelLeftOpen = defineIcon({
  name: 'panel-left-open',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="m14 9 3 3-3 3" />`
} as const);
