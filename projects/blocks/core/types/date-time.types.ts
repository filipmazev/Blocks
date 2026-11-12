import type { IDateRange } from '@core/interfaces/idate-range.interface';
import type { IPeriodRange } from '@core/interfaces/iperiod-range.interface';

/**
 * Canonical Gregorian calendar date in ISO 8601 extended format (`YYYY-MM-DD`).
 *
 * Date-only values are civil dates: they identify a calendar day without a time of day or time zone and must never be converted to UTC midnight.
 */
export type IsoDate = string;

/**
 * Canonical time of day in ISO 8601 format (`HH:mm`, `HH:mm:ss` or `HH:mm:ss.SSS`).
 *
 * Time-only values carry no date or time-zone information; they describe a wall-clock time in the owning field's context.
 */
export type IsoTime = string;

/** Calendar-system identifier accepted by `Intl.DateTimeFormat`, such as `'gregory'`, `'islamic-umalqura'`, `'persian'` or `'hebrew'`. */
export type CalendarSystemId = string;

/** Date selection behavior supported by the shared date picker and inline calendar. */
export type DatePickerMode =
  'single' | 'multiple' | 'range' | 'week' | 'week-range' | 'month' | 'month-range' | 'quarter' | 'quarter-range' | 'year' | 'year-range';

/** Calendar period granularity selectable on its own, used for period identifiers and range presets. */
export type PeriodKind = 'week' | 'month' | 'quarter' | 'year';

/** Clock presentation used by the time picker and standalone formatting helpers. */
export type HourCycle = 12 | 24;

/** Smallest time unit the time picker can edit and serialize. */
export type TimePrecision = 'hour' | 'minute' | 'second' | 'millisecond';

/** Presentation used by the time picker overlay content. */
export type TimePickerPresentation = 'wheel' | 'list';

/** Presentation used by pickers and inline calendar fields across viewport sizes. */
export type DatePickerPresentation = 'auto' | 'inline' | 'popover' | 'drawer';

/** Commit strategy applied when a picker value changes. */
export type DatePickerCommitPolicy = 'immediate' | 'apply';

/** Policy applied when a timezone change would reinterpret an existing wall-clock time. */
export type TimeZoneChangePolicy = 'preserve-instant' | 'preserve-wall-clock';

/** Resolution applied to a local time that does not exist or occurs twice in a time zone. */
export type LocalTimeDisambiguation = 'compatible' | 'earlier' | 'later' | 'reject';

/** Range-crossing policy for ranges that would include a disabled date. */
export type RangeCrossingPolicy = 'reject' | 'allow' | 'truncate';

/** Selection policy applied when a range or multiple selection exceeds its configured limits. */
export type SelectionOverflowPolicy = 'reject' | 'replace' | 'truncate';

/** Visual tone exposed to day-cell metadata and semantic calendars. */
export type CalendarTone = 'neutral' | 'accent' | 'info' | 'success' | 'warn' | 'danger';

/** Availability state of one date supplied by an application or remote resolver. */
export type DateAvailabilityStatus = 'available' | 'unavailable' | 'limited' | 'unknown';

/** Presentation of the date picker's quick-select preset list. */
export type DatePresetPlacement = 'start' | 'end' | 'hidden';

/** Behavior applied when an active preset is chosen. */
export type DatePresetApplyBehavior = 'immediate' | 'draft';

/** Value emitted by the date picker across every supported selection mode. */
export type DatePickerValue = IsoDate | readonly IsoDate[] | IDateRange | IPeriodRange | null;

/** Value emitted by the single-time picker. */
export type TimePickerValue = IsoTime | null;

export type { IDateMetadata } from '@core/interfaces/idate-metadata.interface';
export type { IDateRange } from '@core/interfaces/idate-range.interface';
export type { IDateTimeRange } from '@core/interfaces/idate-time-range.interface';
export type { IDateTimeValue } from '@core/interfaces/idate-time-value.interface';
export type { IParseResult } from '@core/interfaces/iparse-result.interface';
export type { IPeriodRange } from '@core/interfaces/iperiod-range.interface';
export type { ITimeRange } from '@core/interfaces/itime-range.interface';
export type { ITimeZoneOffset } from '@core/interfaces/itime-zone-offset.interface';
export type { ITimeZoneOption } from '@core/interfaces/itime-zone-option.interface';
export type { IZonedTimeResolution } from '@core/interfaces/izoned-time-resolution.interface';
