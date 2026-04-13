import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelLeftInactive = defineIcon({
  name: 'panel-left-inactive',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 14v1" /><path d="M9 19v2" /><path d="M9 3v2" /><path d="M9 9v1" />`
} as const);
