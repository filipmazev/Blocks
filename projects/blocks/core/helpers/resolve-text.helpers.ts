import { IBxI18nAdapter } from '../interfaces/ibx-i18n-adapter.interface';
import { ResolvableText } from '../types/core.types';
import { isTextWithKey } from './core-functions';

/** Resolves text and tracks the adapter's language signal in the calling computation. */
export function resolveText(text: ResolvableText | undefined, adapter: IBxI18nAdapter | null, params?: Record<string, unknown>): string {
  adapter?.version?.();

  if (text === undefined) return '';

  return isTextWithKey(text) ? (adapter?.translate(text.key, params) ?? text.key) : text;
}
