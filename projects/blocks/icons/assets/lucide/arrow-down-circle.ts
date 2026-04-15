import { defineIcon } from '../../helpers/define-icon';

export const lucideArrowDownCircle = defineIcon({
  name: 'arrow-down-circle',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="m8 12 4 4 4-4" />`
} as const);
