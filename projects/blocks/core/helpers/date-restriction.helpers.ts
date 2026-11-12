import type { IDateRestriction } from '@core/interfaces/idate-restriction.interface';
import type { IDateRestrictionConfig } from '@core/interfaces/idate-restriction-config.interface';
import type { IRangeValidation } from '@core/interfaces/irange-validation.interface';
import type { IRangeValidationOptions } from '@core/interfaces/irange-validation-options.interface';
import type { IDateRange, IsoDate } from '@core/types/date-time.types';

import { addDays, differenceInDays, enumerateDates, isDateInRange, orderedRange, weekday } from './civil-date.helpers';

/**
 * Evaluate one canonical date against the configured restrictions.
 *
 * @param date - Canonical date to evaluate.
 * @param config - Restriction configuration.
 */
export function dateRestriction(date: IsoDate, config: IDateRestrictionConfig): IDateRestriction {
  const metadata = config.metadata?.find((entry) => entry.date === date);

  if (config.min && date < config.min) return { disabled: true, reason: 'min', metadata };

  if (config.max && date > config.max) return { disabled: true, reason: 'max', metadata };

  if (config.disabledDates?.includes(date)) return { disabled: true, reason: 'date', metadata };

  if (config.disabledIntervals?.some((interval) => isDateInRange(date, interval))) return { disabled: true, reason: 'interval', metadata };

  if (config.disabledWeekdays?.includes(weekday(date))) return { disabled: true, reason: 'weekday', metadata };

  if (config.isDateDisabled?.(date)) return { disabled: true, reason: 'predicate', metadata };

  if (metadata?.status === 'unavailable') return { disabled: true, reason: 'unavailable', metadata };

  if (metadata?.status === 'unknown' && (config.blockUnknownAvailability ?? true)) return { disabled: true, reason: 'unknown', metadata };

  return { disabled: false, reason: null, metadata };
}

/**
 * Return whether a date is selectable under the configured restrictions.
 *
 * @param date - Canonical date to evaluate.
 * @param config - Restriction configuration.
 */
export function isDateSelectable(date: IsoDate, config: IDateRestrictionConfig): boolean {
  return !dateRestriction(date, config).disabled;
}

/**
 * Find the first restricted date inside an inclusive range.
 *
 * @param range - Range to scan.
 * @param config - Restriction configuration.
 */
export function firstRestrictedDate(range: IDateRange, config: IDateRestrictionConfig): IsoDate | null {
  if (!range.start || !range.end) return null;

  const count = differenceInDays(range.start, range.end);

  for (let index = 0; index <= count; index++) {
    const date = addDays(range.start, index);

    if (!isDateSelectable(date, config)) return date;
  }

  return null;
}

/**
 * Validate a draft range against restrictions, length limits and the configured crossing policy.
 *
 * @param start - Draft start date or null while the range is incomplete.
 * @param end - Draft end date or null while the range is incomplete.
 * @param config - Restriction configuration.
 * @param options - Length, same-day and crossing options. Defaults to a single-day minimum and rejecting crossing.
 */
export function validateDateRange(
  start: IsoDate | null,
  end: IsoDate | null,
  config: IDateRestrictionConfig,
  options: IRangeValidationOptions = {}
): IRangeValidation {
  if (!start || !end) return { valid: false, reason: 'order', range: { start, end } };

  const range = orderedRange(start, end);
  const rangeStart = range.start ?? start;
  const rangeEnd = range.end ?? end;
  const length = differenceInDays(rangeStart, rangeEnd) + 1;
  const crossingPolicy = options.crossingPolicy ?? 'reject';
  const isolatedRange: IDateRange = { start, end };

  if (start !== rangeStart || end !== rangeEnd) {
    return { valid: false, reason: 'order', range: { start: rangeStart, end: rangeEnd } };
  }

  if (!options.allowSameDay && start === end) return { valid: false, reason: 'same-day', range: isolatedRange };

  if (options.minLength !== undefined && length < Math.max(1, options.minLength)) return { valid: false, reason: 'min-length', range: isolatedRange };

  if (options.maxLength !== undefined && options.maxLength !== null && length > Math.max(1, options.maxLength)) {
    return { valid: false, reason: 'max-length', range: isolatedRange };
  }

  const startRestriction = dateRestriction(rangeStart, config);

  if (startRestriction.disabled) return { valid: false, reason: 'endpoint', range: isolatedRange };

  const endRestriction = dateRestriction(rangeEnd, config);

  if (endRestriction.disabled) return { valid: false, reason: 'endpoint', range: isolatedRange };

  const blocked = firstRestrictedDate(range, config);

  if (!blocked) return { valid: true, reason: null, range: isolatedRange };

  if (crossingPolicy === 'allow') return { valid: true, reason: null, range: isolatedRange };

  if (crossingPolicy === 'truncate') {
    const truncated: IDateRange = { start: rangeStart, end: addDays(blocked, -1) };
    const truncatedEnd = truncated.end ?? rangeEnd;
    const truncatedLength = differenceInDays(rangeStart, truncatedEnd) + 1;

    if (truncatedLength >= Math.max(1, options.minLength ?? 1) && rangeStart <= truncatedEnd) {
      return { valid: true, reason: null, range: { start: rangeStart, end: truncatedEnd } };
    }
  }

  return { valid: false, reason: 'crossing', range: isolatedRange };
}

/**
 * Truncate an inclusive range so it ends immediately before the first restricted date.
 *
 * @param range - Range to truncate.
 * @param config - Restriction configuration.
 */
export function truncateRange(range: IDateRange, config: IDateRestrictionConfig): IDateRange {
  if (!range.start || !range.end) return range;

  const blocked = firstRestrictedDate(range, config);

  return blocked ? { start: range.start, end: addDays(blocked, -1) } : range;
}

/**
 * Return the canonical dates covered by an inclusive range.
 *
 * @param range - Range to enumerate.
 */
export function rangeDates(range: IDateRange): readonly IsoDate[] {
  return range.start && range.end ? enumerateDates(range.start, range.end) : [];
}

/**
 * Return whether adding a date to a multiple selection would exceed its limit.
 *
 * @param selection - Current selected dates.
 * @param date - Candidate date to add or toggle.
 * @param limit - Maximum number of selected dates, or null when unbounded.
 */
export function exceedsMultipleLimit(selection: readonly IsoDate[], date: IsoDate, limit: number | null): boolean {
  if (limit === null) return false;

  return !selection.includes(date) && selection.length >= limit;
}

/**
 * Return a sorted, deduplicated multiple selection.
 *
 * @param selection - Selected dates to normalize.
 */
export function normalizeMultipleSelection(selection: readonly IsoDate[]): readonly IsoDate[] {
  return [...new Set(selection)].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}
