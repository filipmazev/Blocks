import type { Signal } from '@angular/core';

import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';

import type { ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';
import type { DateTimeConfigInput, IDateTimeConfig } from '@core/interfaces/idate-time-config.interface';

import { GregorianCalendarAdapter } from '@core/classes/gregorian-calendar-adapter';
import { IntlCalendarAdapter } from '@core/classes/intl-calendar-adapter';
import { resolveDateTimeConfig, runtimeDateTimeDefaults } from '@core/helpers/date-time-config.helpers';
import { isoDateInTimeZone } from '@core/helpers/timezone.helpers';
import { BX_CLOCK } from '@core/tokens/bx-clock.token';
import { BX_DATE_TIME_CONFIG } from '@core/tokens/bx-date-time-config.token';

/**
 * Central date-time configuration and calendar-adapter registry.
 *
 * Defaults resolve in a predictable order: instance overrides, application defaults configured here or through `BX_DATE_TIME_CONFIG`, then runtime-aware
 * library defaults. All values are exposed as signals so mounted controls update when the application changes locale, calendar, time zone or formats.
 */
@Injectable({
  providedIn: 'root'
})
export class BxDateTimeConfigService {
  private readonly initialConfig = inject(BX_DATE_TIME_CONFIG, { optional: true });
  private readonly clock = inject(BX_CLOCK);

  private readonly runtimeDefaults: IDateTimeConfig = this.createRuntimeDefaults();

  private readonly overrides: WritableSignal<DateTimeConfigInput> = signal<DateTimeConfigInput>(this.initialConfig ?? {});

  private readonly adapters: Map<string, ICalendarAdapter> = new Map<string, ICalendarAdapter>();
  private readonly gregorianAdapter: GregorianCalendarAdapter = new GregorianCalendarAdapter();

  /** Effective application-wide date-time configuration after merging runtime, library and application defaults. */
  public readonly defaults: Signal<IDateTimeConfig> = computed<IDateTimeConfig>(() => resolveDateTimeConfig(this.runtimeDefaults, this.overrides()));

  /**
   * Merge partial application defaults into the effective configuration.
   *
   * @param overrides - Partial configuration; undefined members keep their current values.
   */
  public configure(overrides: DateTimeConfigInput): void {
    this.overrides.update((current) => ({ ...current, ...Object.fromEntries(Object.entries(overrides).filter(([, value]) => value !== undefined)) }));
  }

  /** Restore runtime-aware library defaults and discard application overrides. */
  public reset(): void {
    this.overrides.set(this.initialConfig ?? {});
  }

  /**
   * Resolve the effective configuration for one component instance.
   *
   * @param overrides - Partial instance configuration applied over application defaults.
   */
  public resolve(overrides?: DateTimeConfigInput): IDateTimeConfig {
    const base = this.defaults();
    const merged = resolveDateTimeConfig(base, overrides);

    const localeDefaults = runtimeDateTimeDefaults(merged.locale, merged.timeZone);
    const application = this.overrides();
    const formatConfigured = application.dateFormat !== undefined || overrides?.dateFormat !== undefined;
    const monthFormatConfigured = application.monthFormat !== undefined || overrides?.monthFormat !== undefined;
    const hourCycleConfigured = application.hourCycle !== undefined || overrides?.hourCycle !== undefined;
    const timeFormatConfigured = application.timeFormat !== undefined || overrides?.timeFormat !== undefined;
    const dateTimeFormatConfigured = application.dateTimeFormat !== undefined || overrides?.dateTimeFormat !== undefined;
    const weekConfigured = application.weekStartsOn !== undefined || overrides?.weekStartsOn !== undefined;
    const hourCycle = hourCycleConfigured ? merged.hourCycle : localeDefaults.hourCycle;
    const dateFormat = formatConfigured ? merged.dateFormat : localeDefaults.dateFormat;
    const seconds = merged.precision === 'second' || merged.precision === 'millisecond' ? ':ss' : '';
    const milliseconds = merged.precision === 'millisecond' ? '.SSS' : '';
    const minutes = merged.precision === 'hour' ? '' : ':mm';
    const timeFormat = timeFormatConfigured
      ? merged.timeFormat
      : `${hourCycle === 12 ? 'hh' : 'HH'}${minutes}${seconds}${milliseconds}${hourCycle === 12 ? ' a' : ''}`;

    return {
      ...merged,
      dateFormat,
      dateTimeFormat: dateTimeFormatConfigured ? merged.dateTimeFormat : `${dateFormat} ${timeFormat}`,
      monthFormat: monthFormatConfigured ? merged.monthFormat : localeDefaults.monthFormat,
      timeFormat,
      hourCycle,
      weekStartsOn: weekConfigured ? merged.weekStartsOn : localeDefaults.weekStartsOn,
      minimalDaysInFirstWeek:
        application.minimalDaysInFirstWeek !== undefined || overrides?.minimalDaysInFirstWeek !== undefined
          ? merged.minimalDaysInFirstWeek
          : localeDefaults.minimalDaysInFirstWeek
    };
  }

  /**
   * Return the calendar adapter for an identifier, creating and caching it on first use.
   *
   * @param id - `Intl` calendar identifier; omitted uses the effective default calendar.
   */
  public adapter(id?: string): ICalendarAdapter {
    const calendarId = id ?? this.defaults().calendar;

    if (calendarId === 'gregory') return this.gregorianAdapter;

    const cached = this.adapters.get(calendarId);

    if (cached) return cached;

    const adapter = new IntlCalendarAdapter(calendarId);

    this.adapters.set(calendarId, adapter);

    return adapter;
  }

  /**
   * Register a custom calendar adapter, replacing any adapter with the same identifier.
   *
   * @param adapter - Adapter implementation to register.
   */
  public registerAdapter(adapter: ICalendarAdapter): void {
    this.adapters.set(adapter.id, adapter);
  }

  /**
   * Return the current instant from the injected deterministic clock.
   */
  public now(): Date {
    return this.clock.now();
  }

  /**
   * Return today's canonical local date in the effective time zone.
   */
  public today(): string {
    return isoDateInTimeZone(this.clock.now(), this.defaults().timeZone);
  }

  //#region Helpers

  private createRuntimeDefaults(): IDateTimeConfig {
    const resolved = Intl.DateTimeFormat().resolvedOptions();
    const timeZone = this.clock.timeZone ?? resolved.timeZone ?? 'UTC';

    return runtimeDateTimeDefaults(resolved.locale ?? 'en-GB', timeZone);
  }

  //#endregion
}
