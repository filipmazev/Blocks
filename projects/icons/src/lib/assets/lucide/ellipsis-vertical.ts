import { defineIcon } from '../../helpers/define-icon';

export const lucideEllipsisVertical = defineIcon({
  name: 'ellipsis-vertical',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />`
} as const);
