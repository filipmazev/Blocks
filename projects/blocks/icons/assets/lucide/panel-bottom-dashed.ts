import { defineIcon } from '../../helpers/define-icon';

export const lucidePanelBottomDashed = defineIcon({
  name: 'panel-bottom-dashed',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M14 15h1" /><path d="M19 15h2" /><path d="M3 15h2" /><path d="M9 15h1" />`
} as const);
