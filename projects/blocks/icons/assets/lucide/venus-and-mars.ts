import { defineIcon } from '../../helpers/define-icon';

export const lucideVenusAndMars = defineIcon({
  name: 'venus-and-mars',
  viewBox: '0 0 24 24',
  svgContent: `<path d="M10 20h4" /><path d="M12 16v6" /><path d="M17 2h4v4" /><path d="m21 2-5.46 5.46" /><circle cx="12" cy="11" r="5" />`
} as const);
