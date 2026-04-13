import { defineIcon } from '../../helpers/define-icon';

export const lucideImage = defineIcon({
  name: 'image',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />`
} as const);
