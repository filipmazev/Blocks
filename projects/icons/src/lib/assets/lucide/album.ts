import { defineIcon } from '../../helpers/define-icon';

export const lucideAlbum = defineIcon({
  name: 'album',
  viewBox: '0 0 24 24',
  svgContent: `<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><polyline points="11 3 11 11 14 8 17 11 17 3" />`
} as const);
