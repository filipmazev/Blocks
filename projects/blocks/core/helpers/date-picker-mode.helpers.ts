import type { IDateModeInfo } from '@core/interfaces/idate-mode-info.interface';
import type { DatePickerMode, DatePickerValue, IDateRange, IPeriodRange, IsoDate, PeriodKind } from '@core/types/date-time.types';

import { compareIsoDates, periodBounds } from './civil-date.helpers';

/**
 * Resolve the normalized interaction semantics of a date selection mode.
 *
 * @param mode - Selection mode configured on the calendar or date picker.
 */
export function dateModeInfo(mode: DatePickerMode): IDateModeInfo {
  if (mode === 'multiple') return { selection: 'multiple', period: null, isRange: false, isPeriod: false };

  if (mode === 'range') return { selection: 'range', period: null, isRange: true, isPeriod: false };

  const period: PeriodKind | null = mode.startsWith('week')
    ? 'week'
    : mode.startsWith('month')
      ? 'month'
      : mode.startsWith('quarter')
        ? 'quarter'
        : mode.startsWith('year')
          ? 'year'
          : null;
  const isRange = mode.endsWith('-range');

  return { selection: isRange ? 'range' : 'single', period, isRange, isPeriod: period !== null };
}

/**
 * Return whether a value is a period selection.
 *
 * @param value - Candidate date picker value.
 */
export function isPeriodRangeValue(value: DatePickerValue): value is IPeriodRange {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && 'kind' in value;
}

/**
 * Return whether a value is a date range.
 *
 * @param value - Candidate date picker value.
 */
export function isDateRangeValue(value: DatePickerValue): value is IDateRange {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && 'start' in value && 'end' in value;
}

/**
 * Return the canonical period anchors represented by a value.
 *
 * @param _mode - Selection mode reserved for value-shape symmetry.
 * @param value - Current picker value.
 */
export function valueAnchors(_mode: DatePickerMode, value: DatePickerValue): { start: IsoDate | null; end: IsoDate | null } {
  if (!value) return { start: null, end: null };

  if (typeof value === 'string') return { start: value, end: value };

  if (Array.isArray(value)) {
    const dates = value.filter(Boolean);

    if (!dates.length) return { start: null, end: null };

    return { start: dates[0], end: dates[dates.length - 1] };
  }

  if (isPeriodRangeValue(value)) return { start: value.start, end: value.end };

  if (isDateRangeValue(value)) return { start: value.start, end: value.end };

  return { start: null, end: null };
}

/**
 * Return the inclusive day range represented by a value for range highlighting.
 *
 * Single-day values highlight one day; range values expose their endpoints; whole-period values expand to the full selected periods.
 *
 * @param mode - Selection mode determining whether a stored date expands to a whole period.
 * @param value - Current picker value.
 * @param weekStartsOn - Zero-based first day of the week used by week modes.
 */
export function valueHighlightRange(mode: DatePickerMode, value: DatePickerValue, weekStartsOn: number): IDateRange | null {
  if (!value) return null;

  if (typeof value === 'string') {
    const period = dateModeInfo(mode).period;

    return period ? periodBounds(value, period, weekStartsOn) : { start: value, end: value };
  }

  if (Array.isArray(value)) return value.length ? { start: value[0], end: value[value.length - 1] } : null;

  if (isPeriodRangeValue(value)) {
    return { start: periodBounds(value.start, value.kind, weekStartsOn).start, end: periodBounds(value.end, value.kind, weekStartsOn).end };
  }

  if (isDateRangeValue(value)) {
    const period = dateModeInfo(mode).period;

    return period && value.start && value.end
      ? { start: periodBounds(value.start, period, weekStartsOn).start, end: periodBounds(value.end, period, weekStartsOn).end }
      : { start: value.start, end: value.end };
  }

  return null;
}

/**
 * Return the exact selected dates of a value, excluding filled range days.
 *
 * @param value - Current picker value.
 */
export function selectedDates(value: DatePickerValue): readonly IsoDate[] {
  if (!value) return [];

  if (typeof value === 'string') return [value];

  if (Array.isArray(value)) return value;

  return [];
}

/**
 * Build the canonical value emitted for a completed selection.
 *
 * @param mode - Selection mode being edited.
 * @param start - First selected date or period anchor.
 * @param end - Second selected date or period anchor; null keeps a single selection.
 * @param _weekStartsOn - Zero-based first day of the week; reserved for period value-shape symmetry.
 */
export function buildSelectionValue(mode: DatePickerMode, start: IsoDate, end: IsoDate | null, _weekStartsOn: number): DatePickerValue {
  const info = dateModeInfo(mode);
  const ordered = !end || compareIsoDates(start, end) <= 0;

  if (info.period) {
    const kind = info.period;
    const first = start;
    const last = end ?? start;

    if (!info.isRange && !end) {
      return first;
    }

    return ordered ? { start: first, end: last, kind } : { start: last, end: first, kind };
  }

  if (info.selection === 'range') {
    return end ? (ordered ? { start, end } : { start: end, end: start }) : { start, end: null };
  }

  return start;
}

/**
 * Return a comparable signature for a picker value, used to suppress duplicate commits.
 *
 * @param value - Value to serialize.
 */
export function valueSignature(value: DatePickerValue): string {
  return JSON.stringify(value ?? null);
}

/**
 * Return whether a date is selected exactly by a value.
 *
 * @param date - Canonical date to test.
 * @param mode - Selection mode the value belongs to.
 * @param value - Current picker value.
 * @param weekStartsOn - Zero-based first day of the week used by week modes.
 */
export function isDateSelected(date: IsoDate, mode: DatePickerMode, value: DatePickerValue, weekStartsOn: number): boolean {
  const info = dateModeInfo(mode);

  if (!value) return false;

  if (info.selection === 'multiple') return Array.isArray(value) && value.includes(date);

  const bounds = valueHighlightRange(mode, value, weekStartsOn);

  if (!bounds || !bounds.start || !bounds.end) return false;

  return date >= bounds.start && date <= bounds.end;
}
