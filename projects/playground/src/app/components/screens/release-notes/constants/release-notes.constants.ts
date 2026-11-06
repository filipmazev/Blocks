import { IReleaseNotes } from '@playground/components/screens/release-notes/interfaces/irelease-notes.interface';

/** Newest first. Keep published entries and their version URLs stable. */
export const RELEASE_NOTES: readonly IReleaseNotes[] = [
  {
    version: '1.5.4-alpha',
    summary: 'Smoother side-navigation expansion, coordinated label and disclosure fades, accessible motion handling, and compact submenu tooltips.',
    status: 'draft',
    channel: 'alpha',
    readme: 'documentation/releases/1.5.4-alpha/README.md',
    fromCommit: '7d3586b0535a2403607b0dc87f2d0fc4f244f95c'
  },
  {
    version: '1.5.3-alpha',
    summary: 'Colocated documentation, channel-specific release notes, shared build and publish versioning, and consistent mobile drawer overlays.',
    status: 'released',
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
    summary:
      'Top navigation, editable autocomplete, layout and feedback primitives, interactive popovers, platform-aware shortcuts and refined press feedback.',
    status: 'released',
    channel: 'beta',
    readme: 'documentation/releases/1.5.0/README.md',
    fromCommit: 'b18ac855a86e7ad9fe77d1d4944f069ccde309ba',
    toCommit: '55b915c819525cfa365d4b59389a765233b2cd35'
  },
  {
    version: '1.4.20',
    summary:
      'Cumulative changes through 1.4.20: unified Angular package, semantic themes, glass effects, forms, notifications, icons and responsive side navigation.',
    status: 'released',
    channel: 'latest',
    readme: 'documentation/releases/1.4.20/README.md',
    fromCommit: 'f9bf13b2bb6914c26d11639076006bd1dcc5a851',
    toCommit: 'b18ac855a86e7ad9fe77d1d4944f069ccde309ba'
  }
];

/** Open the current stable release by default; direct links retain their original channel. */
export const DEFAULT_RELEASE_VERSION: string =
  RELEASE_NOTES.find((release) => release.status === 'released' && (release.channel ?? 'latest') === 'latest')?.version ?? RELEASE_NOTES[0].version;
