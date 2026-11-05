import { IReleaseNotes } from '@playground/components/screens/release-notes/interfaces/irelease-notes.interface';

/** Newest first. Keep published entries and their version URLs stable. */
export const RELEASE_NOTES: readonly IReleaseNotes[] = [
  {
    version: '1.5.3-alpha',
    summary: 'Colocated documentation, channel-specific release notes, shared build and publish versioning, and consistent mobile drawer overlays.',
    status: 'draft',
    channel: 'alpha',
    readme: 'documentation/releases/1.5.3-alpha/README.md',
    fromCommit: '6fbc957850d6b4cb9229f47db98e843c01088dd6'
  },
  {
    version: '1.5.2',
    summary:
      'Opt-in glassiness, remembered rendering preferences, selectable cards and stable lighting, with refined disclosure headers and a responsive appearance page.',
    status: 'released',
    channel: 'alpha',
    readme: 'documentation/releases/1.5.2/README.md',
    fromCommit: '521c8221cb065e41c79a86af0aaf94aff04b731b'
  },
  {
    version: '1.5.0',
    summary: 'One Angular library with shared semantic themes, glass effects, forms, navigation, notifications and accessible interactions.',
    status: 'released',
    channel: 'beta',
    readme: 'documentation/releases/1.5.0/README.md',
    fromCommit: 'f9bf13b2bb6914c26d11639076006bd1dcc5a851',
    toCommit: '55b915c819525cfa365d4b59389a765233b2cd35'
  },
  {
    version: '1.4.20',
    summary: 'Responsive side navigation, single-panel submenu browsing, contextual search, and reliable drawer focus and overlay behavior.',
    status: 'released',
    channel: 'latest',
    readme: 'documentation/releases/1.4.20/README.md',
    fromCommit: 'df09eebe3e867a2fbf83462164bb3bb8ace80b5b',
    toCommit: 'b18ac855a86e7ad9fe77d1d4944f069ccde309ba'
  }
];

/** Open the current stable release by default; direct links retain their original channel. */
export const DEFAULT_RELEASE_VERSION: string =
  RELEASE_NOTES.find((release) => release.status === 'released' && (release.channel ?? 'latest') === 'latest')?.version ?? RELEASE_NOTES[0].version;
