import { ResolvableText } from '@core/types/core.types';

/**
 * Type guard to check if a ResolvableText is an object with a 'key' property, indicating it's a translation key rather than a plain string.
 *
 * @param value - Untrusted text definition to narrow to the shared translation-key contract.
 */
export function isTextWithKey(value: ResolvableText): value is { key: string } {
  return typeof value === 'object' && value !== null && 'key' in value;
}
