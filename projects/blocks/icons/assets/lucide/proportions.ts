import { defineIcon } from '../../helpers/define-icon';

export const lucideProportions = defineIcon({
  name: 'proportions',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="20" height="16" x="2" y="4" rx="2" /><path d="M12 9v11" /><path d="M2 9h13a2 2 0 0 1 2 2v9" />`
} as const);
