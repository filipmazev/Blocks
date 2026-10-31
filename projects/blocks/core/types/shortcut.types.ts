import type { IOSShortcut } from '../interfaces/ios-shortcut.interface';

/** One displayed key or an ordered combination, for example ['mod', 'shift', 'k']. Arrays are not sequences. */
export type ShortcutKey = string | readonly string[];

/** Backwards-compatible name for the operating-system shortcut contract. */
export type OSShortcut = IOSShortcut;

/** A shared combination or platform overrides with a required fallback. */
export type ResolvableShortcut = ShortcutKey | IOSShortcut;

/** Presentation/matching platform. Unknown platforms and server rendering use default (Control). */
export type ShortcutPlatform = 'mac' | 'windows' | 'linux' | 'ios' | 'android' | 'default';
