import { defineIcon } from '../../helpers/define-icon';

export const lucideInspectionPanel = defineIcon({
  name: 'inspection-panel',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="M17 7h.01" /><path d="M7 17h.01" /><path d="M17 17h.01" />`
} as const);
