import type { ICalendarDayCell } from '@primitives/interfaces/icalendar-day-cell.interface';
import type { ICalendarDayContext } from '@primitives/interfaces/icalendar-day-context.interface';
import type { ICalendarDayGridCell } from '@primitives/interfaces/icalendar-day-grid-cell.interface';
import type { ICalendarMonthGrid } from '@primitives/interfaces/icalendar-month-grid.interface';
import type { ICalendarPeriodCell } from '@primitives/interfaces/icalendar-period-cell.interface';
import type { ICalendarPeriodContext } from '@primitives/interfaces/icalendar-period-context.interface';
import type { ICalendarPeriodGrid } from '@primitives/interfaces/icalendar-period-grid.interface';
import type { ICalendarVisibleRange } from '@primitives/interfaces/icalendar-visible-range.interface';
import type { ICalendarWeekNumberContext } from '@primitives/interfaces/icalendar-week-number-context.interface';

/** Calendar presentation currently rendered by the inline calendar. */
export type CalendarViewMode = 'days' | 'months' | 'quarters' | 'years' | 'decades';

export type {
  ICalendarDayCell,
  ICalendarDayContext,
  ICalendarDayGridCell,
  ICalendarMonthGrid,
  ICalendarPeriodCell,
  ICalendarPeriodContext,
  ICalendarPeriodGrid,
  ICalendarVisibleRange,
  ICalendarWeekNumberContext
};
