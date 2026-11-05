/**
 * Format numeric counts without changing consumer-supplied prefixes or abbreviations.
 *
 * @param value - Numeric tag value to format.
 * @param locale - Optional Intl number-format locale; omission uses the runtime locale.
 */
export function formatTagNumber(value: number | string | null | undefined, locale?: string): string {
  if (value === undefined || value === null) return '';

  if (typeof value === 'string') return value;

  if (!Number.isFinite(value)) return '';

  try {
    return new Intl.NumberFormat(locale).format(value);
  } catch {
    return String(value);
  }
}
