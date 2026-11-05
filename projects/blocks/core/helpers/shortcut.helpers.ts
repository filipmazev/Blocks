import type { IOSShortcut } from '@core/interfaces/ios-shortcut.interface';

import { SHORTCUT_KEY_ALIASES } from '@core/constants/shortcut.constants';

/**
 * Narrow a value to the OS-specific shortcut contract by checking for an object with a default mapping.
 *
 * @param value - Untrusted shortcut definition to inspect.
 */
export function isOSShortcut(value: unknown): value is IOSShortcut {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && 'default' in value;
}

/**
 * Normalize known aliases while preserving custom presentation tokens.
 *
 * @param key - Shortcut token or modifier alias to normalize.
 * @param apple - Whether the primary modifier should resolve to Meta instead of Control.
 */
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
