import { defineIcon } from '../../helpers/define-icon';

export const lucideEclipse = defineIcon({
  name: 'eclipse',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 1 0 10 10" />`
} as const);
