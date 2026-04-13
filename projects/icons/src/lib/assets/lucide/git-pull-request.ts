import { defineIcon } from '../../helpers/define-icon';

export const lucideGitPullRequest = defineIcon({
  name: 'git-pull-request',
  viewBox: '0 0 24 24',
  svgContent: `<circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" x2="6" y1="9" y2="21" />`
} as const);
