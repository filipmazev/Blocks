import { defineIcon } from '../../helpers/define-icon';

export const lucideBike = defineIcon({
  name: 'bike',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="18.5" cy="17.5" r="3.5" /><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="15" cy="5" r="1" /><path d="M12 17.5V14l-3-3 4-3 2 3h2" />`
} as const);
