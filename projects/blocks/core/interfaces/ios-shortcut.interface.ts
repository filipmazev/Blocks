import type { ShortcutKey } from '../types/shortcut.types';

/** Optional platform-specific combinations. Unspecified platforms use the required default. */
export interface IOSShortcut {
  /** Optional macOS combination; also used on iOS when ios is omitted. */
  mac?: ShortcutKey;
  /** Optional Windows combination; falls back to default. */
  windows?: ShortcutKey;
  /** Optional Linux/Unix combination; falls back to default. */
  linux?: ShortcutKey;
  /** Optional iOS/iPadOS hardware-keyboard combination; falls back to mac, then default. */
  ios?: ShortcutKey;
  /** Optional Android hardware-keyboard combination; falls back to default. */
  android?: ShortcutKey;
  /** Required fallback combination, including unknown platforms and server rendering. May use mod for portable Command/Control. */
  default: ShortcutKey;
}
