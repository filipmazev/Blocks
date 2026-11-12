import type { CalendarNameForm } from '@core/types/calendar.types';

/**
 * Build localized long or short Gregorian month names ordered by month index.
 *
 * @param locale - BCP 47 locale used for month names.
 * @param form - Requested name length.
 */
export function buildGregorianMonthNames(locale: string, form: CalendarNameForm): readonly string[] {
  return Array.from({ length: 12 }, (_, monthIndex) =>
    new Intl.DateTimeFormat(locale, { calendar: 'gregory', month: form, timeZone: 'UTC' }).format(new Date(Date.UTC(2024, monthIndex, 15, 12)))
  );
}

/**
 * Build localized Gregorian weekday names ordered from Sunday through Saturday.
 *
 * @param locale - BCP 47 locale used for weekday names.
 * @param form - Requested name length.
 */
export function buildGregorianWeekdayNames(locale: string, form: CalendarNameForm): readonly string[] {
  return Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(locale, { calendar: 'gregory', weekday: form, timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, 7 + index, 12)))
  );
}
