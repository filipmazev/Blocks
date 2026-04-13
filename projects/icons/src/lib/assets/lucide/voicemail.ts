import { defineIcon } from '../../helpers/define-icon';

export const lucideVoicemail = defineIcon({
  name: 'voicemail',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" /><line x1="6" x2="18" y1="16" y2="16" />`
} as const);
