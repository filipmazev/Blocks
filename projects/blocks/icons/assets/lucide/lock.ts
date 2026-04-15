import { defineIcon } from '../../helpers/define-icon';

export const lucideLock = defineIcon({
  name: 'lock',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />`
} as const);
