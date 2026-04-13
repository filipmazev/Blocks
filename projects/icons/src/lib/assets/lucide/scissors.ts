import { defineIcon } from '../../helpers/define-icon';

export const lucideScissors = defineIcon({
  name: 'scissors',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" />`
} as const);
