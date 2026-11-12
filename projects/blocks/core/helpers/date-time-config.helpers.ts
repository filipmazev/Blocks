import type { DateTimeConfigInput, IDateTimeConfig } from '@core/interfaces/idate-time-config.interface';
import type { IWeekInfoSource } from '@core/interfaces/iweek-info-source.interface';

import { DATE_TIME_DEFAULT_CONFIG } from '@core/constants/date-time.constants';

/**
 * Merge application or instance overrides over resolved date-time defaults.
 *
 * Undefined overrides never discard related configuration; `false`, `0` and empty strings remain meaningful values.
 *
 * @param defaults - Resolved application defaults.
 * @param overrides - Partial instance configuration applied last.
 */
export function resolveDateTimeConfig(defaults: IDateTimeConfig, overrides: DateTimeConfigInput | undefined): IDateTimeConfig {
  if (!overrides) return defaults;

  const defined = Object.fromEntries(Object.entries(overrides).filter(([, value]) => value !== undefined));

  return { ...defaults, ...defined };
}

/**
 * Resolve runtime locale conventions used when an application supplies no date-time configuration.
 *
 * @param locale - BCP 47 locale to inspect.
 * @param timeZone - Runtime time zone, or undefined when it cannot be detected.
 */
export function runtimeDateTimeDefaults(locale: string, timeZone: string | undefined): IDateTimeConfig {
  const resolvedLocale = locale || DATE_TIME_DEFAULT_CONFIG.locale;

  try {
    const weekInfo = new Intl.Locale(resolvedLocale) as unknown as IWeekInfoSource;
    const info = weekInfo.getWeekInfo?.() ?? weekInfo.weekInfo;
    const hour24 = !new Intl.DateTimeFormat(resolvedLocale, { hour: 'numeric' })
      .formatToParts(new Date(2026, 0, 1, 15))
      .some((part) => part.type === 'dayPeriod');
    const dateFormat = localeDatePattern(resolvedLocale);

    return {
      ...DATE_TIME_DEFAULT_CONFIG,
      locale: resolvedLocale,
      timeZone: timeZone ?? 'UTC',
      weekStartsOn: info?.firstDay === 7 ? 0 : (info?.firstDay ?? 1),
      minimalDaysInFirstWeek: info?.minimalDays ?? 4,
      hourCycle: hour24 ? 24 : 12,
      timeFormat: hour24 ? 'HH:mm' : 'hh:mm a',
      dateTimeFormat: hour24 ? `${dateFormat} HH:mm` : `${dateFormat} hh:mm a`,
      dateFormat
    };
  } catch {
    return { ...DATE_TIME_DEFAULT_CONFIG, locale: resolvedLocale, timeZone: timeZone ?? 'UTC' };
  }
}

/**
 * Derive the locale's numeric date pattern from `Intl` part ordering.
 *
 * @param locale - BCP 47 locale to inspect.
 */
export function localeDatePattern(locale: string): string {
  const parts = new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(2026, 10, 23));
  const tokens = parts
    .map((part) => {
      if (part.type === 'year') return 'yyyy';

      if (part.type === 'month') return 'MM';

      if (part.type === 'day') return 'dd';

      return part.type === 'literal' ? part.value.trim() : '';
    })
    .filter(Boolean);

  return tokens.join('') || 'dd/MM/yyyy';
}
