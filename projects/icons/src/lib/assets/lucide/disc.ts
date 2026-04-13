import { defineIcon } from '../../helpers/define-icon';

export const lucideDisc = defineIcon({
  name: 'disc',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="2" />`
} as const);
