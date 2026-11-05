import { Color, IBxI18nAdapter, isTextWithKey, ResolvableText, resolveTokenToCssVar } from '@filip.mazev/blocks/core';

/**
 * Resolve plain tab text or a translation key while tracking reactive language changes.
 *
 * @param text - Plain label or shared translation-key definition.
 * @param adapter - Optional translation adapter; missing adapters leave translation keys readable as their key text.
 */
export function resolveTabText(text: ResolvableText, adapter: IBxI18nAdapter | null): string {
  adapter?.version?.();

  return isTextWithKey(text) ? (adapter?.translate(text.key) ?? text.key) : text;
}

/**
 * Resolve a supported tab color to its CSS value, returning null when no override is supplied.
 *
 * @param color - Optional semantic or palette color to resolve.
 */
export function resolveTabColor(color: Color | undefined): string | null {
  return color ? resolveTokenToCssVar(color) : null;
}
