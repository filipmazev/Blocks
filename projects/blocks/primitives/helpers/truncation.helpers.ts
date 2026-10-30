import { ResolvableText } from '@filip.mazev/blocks/core';

/** Returns content only while clipped and enabled. T preserves the caller's plain string or translation-key contract. */
export function truncatedText<T extends ResolvableText>(text: T | null | undefined, truncated: boolean, enabled = true): T | '' {
  return enabled && truncated ? (text ?? '') : '';
}
