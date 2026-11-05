import { IBxI18nAdapter } from '@core/interfaces/ibx-i18n-adapter.interface';
import { ResolvableText } from '@core/types/core.types';

import { isTextWithKey } from './core-functions.helpers';

/**
 * Resolves text and tracks the adapter's language signal in the calling computation.
 *
 * @param text - Optional plain text or translation-key definition; absence resolves to an empty string.
 * @param adapter - Optional translation adapter; absent adapters fall back to the translation key.
 * @param params - Optional interpolation parameters forwarded to the translation adapter.
 */
export function resolveText(text: ResolvableText | undefined, adapter: IBxI18nAdapter | null, params?: Record<string, unknown>): string {
  adapter?.version?.();

  if (text === undefined) return '';

  return isTextWithKey(text) ? (adapter?.translate(text.key, params) ?? text.key) : text;
}
