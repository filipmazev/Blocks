import { defineIcon } from '../../helpers/define-icon';

export const lucideSquareAsterisk = defineIcon({
  name: 'square-asterisk',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 8v8" /><path d="m8.5 14 7-4" /><path d="m8.5 10 7 4" />`
} as const);
