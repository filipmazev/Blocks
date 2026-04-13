import { defineIcon } from '../../helpers/define-icon';

export const lucideBrickWall = defineIcon({
  name: 'brick-wall',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 9v6" /><path d="M16 15v6" /><path d="M16 3v6" /><path d="M3 15h18" /><path d="M3 9h18" /><path d="M8 15v6" /><path d="M8 3v6" />`
} as const);
