import { defineIcon } from '../../helpers/define-icon';

export const lucideBanknote = defineIcon({
  name: 'banknote',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" />`
} as const);
