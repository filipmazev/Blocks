import { defineIcon } from '../../helpers/define-icon';

export const lucideWebcam = defineIcon({
  name: 'webcam',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="12" cy="10" r="8" /><circle cx="12" cy="10" r="3" /><path d="M7 22h10" /><path d="M12 22v-4" />`
} as const);
