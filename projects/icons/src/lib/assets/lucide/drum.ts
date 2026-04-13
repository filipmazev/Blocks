import { defineIcon } from '../../helpers/define-icon';

export const lucideDrum = defineIcon({
  name: 'drum',
  viewBox: '0 0 24 24',
  svgContent: `<path d="m2 2 8 8" /><path d="m22 2-8 8" /><ellipse cx="12" cy="9" rx="10" ry="5" /><path d="M7 13.4v7.9" /><path d="M12 14v8" /><path d="M17 13.4v7.9" /><path d="M2 9v8a10 5 0 0 0 20 0V9" />`
} as const);
