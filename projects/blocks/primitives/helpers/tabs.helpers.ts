import { Color, IBxI18nAdapter, isTextWithKey, ResolvableText, resolveTokenToCssVar } from '@filip.mazev/blocks/core';

export function resolveTabText(text: ResolvableText, adapter: IBxI18nAdapter | null): string {
  adapter?.version?.();
  return isTextWithKey(text) ? (adapter?.translate(text.key) ?? text.key) : text;
}

export function resolveTabColor(color: Color | undefined): string | null {
  return color ? resolveTokenToCssVar(color) : null;
}
