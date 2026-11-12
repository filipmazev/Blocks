/** Cached localized AM/PM labels keyed by locale. */
export const DAY_PERIOD_CACHE: Map<string, readonly [string, string]> = new Map<string, readonly [string, string]>();
/** Cached Intl formatters keyed by time zone. */
export const TIME_ZONE_FORMATTER_CACHE: Map<string, Intl.DateTimeFormat> = new Map<string, Intl.DateTimeFormat>();
