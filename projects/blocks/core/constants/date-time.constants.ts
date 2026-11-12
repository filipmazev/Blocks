import type { IDateTimeConfig } from '@core/interfaces/idate-time-config.interface';

/** Canonical ISO date pattern accepted by date-only adapters. */
export const ISO_DATE_PATTERN: RegExp = /^(\d{4,6})-(\d{2})-(\d{2})$/;
/** Canonical ISO time pattern accepted by time-of-day adapters, with optional fractional seconds. */
export const ISO_TIME_PATTERN: RegExp = /^(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/;
/** Millennium instant in Unix milliseconds, used to validate serialized values. */
export const UNIX_EPOCH_ISO: string = '1970-01-01T00:00:00.000Z';
/** Number of milliseconds in one minute. */
export const MS_PER_MINUTE: number = 60_000;
/** Number of milliseconds in one hour. */
export const MS_PER_HOUR: number = 3_600_000;
/** Number of milliseconds in one day. */
export const MS_PER_DAY: number = 86_400_000;
/** Default locale-independent pattern tokens supported by the shared formatter and strict parser. */
export const DATE_PATTERN_TOKENS: readonly string[] = [
  'yyyy',
  'yy',
  'MMMM',
  'MMM',
  'MM',
  'M',
  'dd',
  'd',
  'EEEE',
  'EEE',
  'EEEEE',
  'HH',
  'H',
  'hh',
  'h',
  'mm',
  'm',
  'ss',
  's',
  'SSS',
  'a',
  'ww',
  'w',
  'QQQ',
  'Q'
];
/** Library fallback date-time configuration applied when no application or instance override exists. */
export const DATE_TIME_DEFAULT_CONFIG: IDateTimeConfig = {
  locale: 'en-GB',
  calendar: 'gregory',
  timeZone: 'UTC',
  weekStartsOn: 1,
  minimalDaysInFirstWeek: 4,
  hourCycle: 24,
  dateFormat: 'dd/MM/yyyy',
  monthFormat: 'MMMM yyyy',
  quarterFormat: 'QQQ yyyy',
  yearFormat: 'yyyy',
  timeFormat: 'HH:mm',
  dateTimeFormat: 'dd/MM/yyyy HH:mm',
  rangeSeparator: '–',
  precision: 'minute',
  minuteStep: 1,
  secondStep: 1,
  millisecondStep: 1,
  allowNaturalLanguage: false,
  localTimeDisambiguation: 'compatible',
  showTimeZoneLabel: true
};
/** Time-zone identifiers offered when the runtime cannot enumerate supported zones. */
export const TIME_ZONE_FALLBACKS: readonly string[] = [
  'UTC',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Madrid',
  'Europe/Rome',
  'Europe/Amsterdam',
  'Europe/Warsaw',
  'Europe/Skopje',
  'Europe/Athens',
  'Europe/Istanbul',
  'Europe/Moscow',
  'Africa/Cairo',
  'Africa/Johannesburg',
  'Africa/Lagos',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Sao_Paulo',
  'America/Mexico_City',
  'Asia/Dubai',
  'Asia/Karachi',
  'Asia/Kolkata',
  'Asia/Bangkok',
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Tokyo',
  'Asia/Seoul',
  'Australia/Sydney',
  'Australia/Perth',
  'Pacific/Auckland'
];
/** Calendar systems with adapters registered by default. */
export const SUPPORTED_CALENDAR_IDS: readonly string[] = ['gregory', 'islamic-umalqura', 'islamic-civil', 'persian', 'hebrew', 'buddhist', 'japanese', 'roc'];
/** Ambient display precision names ordered from coarsest to finest. */
export const TIME_PRECISION_ORDER: readonly string[] = ['hour', 'minute', 'second', 'millisecond'];
