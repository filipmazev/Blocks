import { IReleaseNotes } from '../interfaces/irelease-notes.interface';

/** Newest first. Keep published entries and their version URLs stable. */
export const RELEASE_NOTES: readonly IReleaseNotes[] = [
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
  }
];
