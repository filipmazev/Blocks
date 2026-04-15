import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelRightOpen = defineIcon({
  name: 'panel-right-open',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m10 15-3-3 3-3" />`
} as const);
