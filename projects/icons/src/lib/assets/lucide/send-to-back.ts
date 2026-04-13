import { defineIcon } from '../../helpers/define-icon';

export const lucideSendToBack = defineIcon({
  name: 'send-to-back',
  viewBox: '0 0 24 24',
  svgContent: `<rect x="14" y="14" width="8" height="8" rx="2" /><rect x="2" y="2" width="8" height="8" rx="2" /><path d="M7 14v1a2 2 0 0 0 2 2h1" /><path d="M14 7h1a2 2 0 0 1 2 2v1" />`
} as const);
