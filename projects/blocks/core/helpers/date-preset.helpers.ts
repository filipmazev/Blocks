import type { IDatePresetContext, IDateRangePreset, ITimePreset, ITimePresetContext } from '@core/interfaces/idate-preset.interface';
import type { IDateRange, IsoDate, IsoTime, ITimeRange } from '@core/types/date-time.types';

import {
  addDays,
  addMonths,
  addYears,
  endOfMonth,
  endOfQuarter,
  endOfWeek,
  endOfYear,
  periodBounds,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear
} from './civil-date.helpers';

/**
 * Create a date range preset from a resolver with fully typed metadata.
 *
 * @param id - Stable preset identifier.
 * @param label - Visible label; translation keys resolve through BX_I18N.
 * @param resolve - Resolver receiving the deterministic preset context.
 * @param options - Optional icon, description, group, disabled state and apply behavior.
 */
export function dateRangePreset(
  id: string,
  label: string,
  resolve: (context: IDatePresetContext) => IDateRange | null,
  options: Omit<IDateRangePreset, 'id' | 'label' | 'resolve'> = {}
): IDateRangePreset {
  return { ...options, id, label, resolve };
}

/**
 * Create the built-in quick-select presets covering relative periods, rolling windows and calendar-to-date ranges.
 *
 * Rolling inclusive-day presets end today. `Last 12/24 Months` start on the first day of the month N-1 months back, while `Last 2 complete calendar years`
 * covers two finished years and is intentionally a different range.
 */
export function defaultDateRangePresets(): readonly IDateRangePreset[] {
  return [
    dateRangePreset('today', 'Today', (context) => ({ start: context.today, end: context.today }), { group: 'Day', icon: 'calendar-check' }),
    dateRangePreset('yesterday', 'Yesterday', (context) => ({ start: addDays(context.today, -1), end: addDays(context.today, -1) }), {
      group: 'Day',
      icon: 'calendar-minus'
    }),
    dateRangePreset('this-week', 'This week', (context) => periodBounds(context.today, 'week', context.weekStartsOn), { group: 'Week', icon: 'calendar-days' }),
    dateRangePreset(
      'last-week',
      'Last week',
      (context) => {
        const start = addDays(startOfWeek(context.today, context.weekStartsOn), -7);

        return { start, end: addDays(start, 6) };
      },
      { group: 'Week', icon: 'calendar-arrow-left' }
    ),
    dateRangePreset('this-month', 'This month', (context) => ({ start: startOfMonth(context.today), end: endOfMonth(context.today) }), {
      group: 'Month',
      icon: 'calendar'
    }),
    dateRangePreset(
      'last-month',
      'Last month',
      (context) => {
        const start = startOfMonth(addMonths(context.today, -1));

        return { start, end: endOfMonth(start) };
      },
      { group: 'Month', icon: 'calendar-arrow-left' }
    ),
    dateRangePreset('this-quarter', 'This quarter', (context) => ({ start: startOfQuarter(context.today), end: endOfQuarter(context.today) }), {
      group: 'Quarter',
      icon: 'calendar-fold'
    }),
    dateRangePreset(
      'last-quarter',
      'Last quarter',
      (context) => {
        const start = startOfQuarter(addMonths(startOfQuarter(context.today), -3));

        return { start, end: endOfQuarter(start) };
      },
      { group: 'Quarter', icon: 'calendar-arrow-left' }
    ),
    dateRangePreset('this-year', 'This year', (context) => ({ start: startOfYear(context.today), end: endOfYear(context.today) }), {
      group: 'Year',
      icon: 'calendar-range'
    }),
    dateRangePreset(
      'last-year',
      'Last year',
      (context) => {
        const start = startOfYear(addYears(context.today, -1));

        return { start, end: endOfYear(start) };
      },
      { group: 'Year', icon: 'calendar-arrow-left' }
    ),
    dateRangePreset('last-7-days', 'Last 7 days', (context) => ({ start: addDays(context.today, -6), end: context.today }), {
      group: 'Rolling',
      icon: 'calendar-sync'
    }),
    dateRangePreset('last-30-days', 'Last 30 days', (context) => ({ start: addDays(context.today, -29), end: context.today }), {
      group: 'Rolling',
      icon: 'calendar-sync'
    }),
    dateRangePreset('last-90-days', 'Last 90 days', (context) => ({ start: addDays(context.today, -89), end: context.today }), {
      group: 'Rolling',
      icon: 'calendar-sync'
    }),
    dateRangePreset('last-12-months', 'Last 12 months', (context) => ({ start: startOfMonth(addMonths(context.today, -11)), end: context.today }), {
      group: 'Rolling',
      icon: 'calendar-clock'
    }),
    dateRangePreset('last-24-months', 'Last 24 months', (context) => ({ start: startOfMonth(addMonths(context.today, -23)), end: context.today }), {
      group: 'Rolling',
      icon: 'calendar-clock'
    }),
    dateRangePreset(
      'last-2-complete-years',
      'Last 2 complete calendar years',
      (context) => ({ start: `${Number(context.today.slice(0, 4)) - 2}-01-01`, end: `${Number(context.today.slice(0, 4)) - 1}-12-31` }),
      { group: 'Rolling', icon: 'calendar-range' }
    ),
    dateRangePreset('month-to-date', 'Month to date', (context) => ({ start: startOfMonth(context.today), end: context.today }), {
      group: 'To date',
      icon: 'calendar-arrow-down'
    }),
    dateRangePreset('quarter-to-date', 'Quarter to date', (context) => ({ start: startOfQuarter(context.today), end: context.today }), {
      group: 'To date',
      icon: 'calendar-arrow-down'
    }),
    dateRangePreset('year-to-date', 'Year to date', (context) => ({ start: startOfYear(context.today), end: context.today }), {
      group: 'To date',
      icon: 'calendar-arrow-down'
    }),
    dateRangePreset('custom-range', 'Custom range', () => null, { group: 'Custom', icon: 'calendar-cog', apply: 'draft' })
  ];
}

/**
 * Create the built-in time presets used by time pickers.
 */
export function defaultTimePresets(): readonly ITimePreset[] {
  return [
    timePreset('now', 'Now', (context) => context.nowTime, { icon: 'clock' }),
    timePreset('morning', 'Morning', () => ({ start: '09:00', end: '12:00' }), { icon: 'sunrise' }),
    timePreset('afternoon', 'Afternoon', () => ({ start: '13:00', end: '17:00' }), { icon: 'sun' }),
    timePreset('business-hours', 'Business hours', () => ({ start: '09:00', end: '17:00' }), { icon: 'briefcase' }),
    timePreset('evening', 'Evening', () => ({ start: '18:00', end: '21:00' }), { icon: 'moon' }),
    timePreset('start-of-day', 'Start of day', () => '00:00', { icon: 'sunrise' }),
    timePreset('end-of-day', 'End of day', () => '23:59', { icon: 'moon' })
  ];
}

/**
 * Create a time preset from a resolver with fully typed metadata.
 *
 * @param id - Stable preset identifier.
 * @param label - Visible label; translation keys resolve through BX_I18N.
 * @param resolve - Resolver receiving the deterministic preset context.
 * @param options - Optional icon, description, group and disabled state.
 */
export function timePreset(
  id: string,
  label: string,
  resolve: (context: ITimePresetContext) => IsoTime | ITimeRange | null,
  options: Omit<ITimePreset, 'id' | 'label' | 'resolve'> = {}
): ITimePreset {
  return { ...options, id, label, resolve };
}

/**
 * Return whether a resolved preset range equals the current selection.
 *
 * @param resolved - Range resolved by a preset, or null for preset entries that never match.
 * @param current - Current selected range or null.
 */
export function isPresetActive(resolved: IDateRange | null, current: IDateRange | null): boolean {
  return !!resolved && !!current && resolved.start === current.start && resolved.end === current.end;
}

/**
 * Return the inclusive number of calendar days covered by a range.
 *
 * @param range - Range to measure.
 */
export function rangeDayCount(range: IDateRange): number {
  if (!range.start || !range.end) return 0;

  return Math.abs(differenceInCalendarDays(range.start, range.end)) + 1;
}

/**
 * Shift a range back by its own inclusive length, producing the preceding equivalent period.
 *
 * @param range - Range to shift.
 */
export function previousEquivalentRange(range: IDateRange): IDateRange | null {
  if (!range.start || !range.end) return null;

  const length = rangeDayCount(range);
  const end = addDays(range.start, -1);

  return { start: addDays(end, -(length - 1)), end };
}

/**
 * Return the calendar period immediately preceding the period that contains the range start.
 *
 * @param range - Range whose preceding calendar period should be resolved.
 * @param kind - Period granularity.
 * @param weekStartsOn - Zero-based first day of the week.
 */
export function previousCalendarPeriod(range: IDateRange, kind: 'week' | 'month' | 'quarter' | 'year', weekStartsOn: number): IDateRange | null {
  if (!range.start) return null;

  const current = periodBounds(range.start, kind, weekStartsOn);
  const previousAnchor = addDays(current.start, -1);

  return periodBounds(previousAnchor, kind, weekStartsOn);
}

/**
 * Return the equivalent range one year earlier, clamping leap-day endpoints into common years.
 *
 * @param range - Range to shift.
 */
export function previousYearRange(range: IDateRange): IDateRange | null {
  if (!range.start || !range.end) return null;

  return { start: addYears(range.start, -1), end: addYears(range.end, -1) };
}

/**
 * Return the number of whole days between two canonical dates.
 *
 * @param from - First canonical date.
 * @param to - Second canonical date.
 */
export function differenceInCalendarDays(from: IsoDate, to: IsoDate): number {
  return Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000);
}

/**
 * Clamp a time range into a single day, preserving overnight ordering when requested.
 *
 * @param range - Time range to validate.
 * @param allowOvernight - Whether an end earlier than the start is accepted as an overnight range. Defaults to `false`.
 */
export function isTimeRangeOrdered(range: ITimeRange, allowOvernight: boolean = false): boolean {
  const start = range.start;
  const end = range.end;

  if (start === end) return true;

  return allowOvernight ? true : start < end;
}

/**
 * Return a normalized overnight-aware duration in minutes for a time range.
 *
 * @param range - Time range to measure.
 */
export function timeRangeMinutes(range: ITimeRange): number {
  const toMinutes = (time: IsoTime): number => {
    const [hours, minutes] = time.split(':').map(Number);

    return (hours ?? 0) * 60 + (minutes ?? 0);
  };

  const difference = toMinutes(range.end) - toMinutes(range.start);

  return difference >= 0 ? difference : difference + 24 * 60;
}

/**
 * Return a safe fallback time range used by pickers when only one endpoint is chosen.
 *
 * @param start - Selected start time.
 * @param fallbackEnd - End time used when the start is the only endpoint. Defaults to `'17:00'`.
 */
export function completeTimeRange(start: IsoTime, fallbackEnd: IsoTime = '17:00'): ITimeRange {
  return { start, end: start <= fallbackEnd ? fallbackEnd : start };
}

/**
 * Return the canonical week range for a week selection.
 *
 * @param isoDate - Date inside the week.
 * @param weekStartsOn - Zero-based first day of the week.
 */
export function weekRange(isoDate: IsoDate, weekStartsOn: number): IDateRange {
  return { start: startOfWeek(isoDate, weekStartsOn), end: endOfWeek(isoDate, weekStartsOn) };
}
