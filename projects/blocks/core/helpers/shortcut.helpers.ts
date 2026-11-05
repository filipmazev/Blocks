import type { IOSShortcut } from '@core/interfaces/ios-shortcut.interface';

import { SHORTCUT_KEY_ALIASES } from '@core/constants/shortcut.constants';

export function isOSShortcut(value: unknown): value is IOSShortcut {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && 'default' in value;
}

/** Normalize known aliases while preserving custom presentation tokens. */
export function normalizeShortcutKey(key: string, apple: boolean): string {
  if (key === ' ') return key;

  const trimmed = key.trim();
  const named = /^(?:Home|End|PageUp|PageDown|Insert|F(?:[1-9]|1[0-9]|2[0-4]))$/i.exec(trimmed);

  if (named) {
    const names = ['Home', 'End', 'PageUp', 'PageDown', 'Insert'];

    return names.find((name) => name.toLowerCase() === trimmed.toLowerCase()) ?? trimmed.toUpperCase();
  }

  const alias = Object.hasOwn(SHORTCUT_KEY_ALIASES, trimmed.toLowerCase()) ? SHORTCUT_KEY_ALIASES[trimmed.toLowerCase()] : trimmed;

  return alias === 'mod' ? (apple ? 'Meta' : 'Control') : alias;
}
