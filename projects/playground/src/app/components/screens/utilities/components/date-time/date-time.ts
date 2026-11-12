import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import type { CalendarNameForm, IParseResult, IsoDate, IsoTime, TimePrecision } from '@filip.mazev/blocks/core';

import {
  BxDateTimeConfigService,
  dateTimeFromInstant,
  dateTimeToInstant,
  elapsedMinutes,
  formatIsoTime,
  fromUnixSeconds,
  parseDotNetDateValue,
  parseIsoDateTime,
  parseNaturalDateTime,
  toDotNetOffsetIso,
  toDotNetUtcIso,
  toMicrosoftJsonDate,
  toUnixMilliseconds,
  toUnixSeconds,
  toUtcIso,
  valueHighlightRange,
  wallClockMinutes
} from '@filip.mazev/blocks/core';
import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Stack } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-date-time-utility',
  imports: [Button, InputField, Stack],
  templateUrl: './date-time.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTimeUtility {
  private readonly bxDateTimeConfigService = inject(BxDateTimeConfigService);

  protected readonly nameForm: WritableSignal<CalendarNameForm> = signal<CalendarNameForm>('short');

  protected readonly displayCycle: WritableSignal<12 | 24> = signal<12 | 24>(24);

  protected readonly displayPrecision: WritableSignal<TimePrecision> = signal<TimePrecision>('second');
  protected readonly date: WritableSignal<string> = signal('2026-11-23');
  protected readonly time: WritableSignal<string> = signal('14:30');
  protected readonly zone: WritableSignal<string> = signal('Europe/Berlin');
  protected readonly natural: WritableSignal<string> = signal('next friday at 3 pm');
  protected readonly dotNetInput: WritableSignal<string> = signal('2026-11-23T14:30:00+01:00');
  protected readonly unixInput: WritableSignal<string> = signal('1763904600');

  protected readonly displayConvention: Signal<string> = computed(() => {
    const config = this.bxDateTimeConfigService.resolve({ hourCycle: this.displayCycle(), precision: this.displayPrecision() });
    const sample = formatIsoTime('14:30:45.123', config.timeFormat, config.locale);

    return `${config.timeFormat} → ${sample}`;
  });
  protected readonly calendarNames: Signal<string> = computed(() => {
    const adapter = this.bxDateTimeConfigService.adapter();
    const locale = this.bxDateTimeConfigService.resolve({}).locale;
    const month = adapter.getMonthLabel(this.date(), locale, this.nameForm());
    const weekdays = adapter.getWeekdayNames(locale, this.nameForm()).join(' ');

    return `${month} · ${weekdays}`;
  });
  protected readonly conversions: Signal<readonly string[]> = computed(() => {
    const instant = dateTimeToInstant(this.date() as IsoDate, this.time() as IsoTime, this.zone());

    if (!instant) return ['The local date and time do not form a valid instant in this zone.'];

    const roundTrip = dateTimeFromInstant(instant, this.zone());
    const week = valueHighlightRange('week', this.date(), 1);
    const offsetIso = toDotNetOffsetIso(instant, this.zone()) ?? 'invalid';
    const parsedOffset = parseDotNetDateValue(offsetIso);
    const parsedIso = parseIsoDateTime(offsetIso);

    return [
      `Week selection (Monday start): ${week?.start} – ${week?.end}.`,
      `Date-only value: ${this.date()} (never shifted to UTC midnight).`,
      `Offset ISO: ${offsetIso}`,
      `UTC ISO: ${toUtcIso(instant)}`,
      `.NET UTC round-trip: ${toDotNetUtcIso(instant)}`,
      `.NET parsed kind: ${parsedOffset?.kind ?? parsedIso?.kind ?? 'unknown'}; offset ${parsedOffset?.offsetMinutes ?? 'n/a'} minutes.`,
      `Microsoft JSON: ${toMicrosoftJsonDate(instant)}`,
      `Unix seconds: ${toUnixSeconds(instant)}; milliseconds: ${toUnixMilliseconds(instant)}.`,
      `Zoned round-trip: ${roundTrip.date} ${roundTrip.time} (${roundTrip.timeZone}).`
    ];
  });
  protected readonly dotNetResult: Signal<string> = computed(() => {
    const parsed = parseDotNetDateValue(this.dotNetInput());

    if (!parsed) return 'Not a valid ISO/.NET date-time value.';

    return `${parsed.kind ?? 'unspecified'} · ${parsed.date} ${parsed.time}${parsed.offsetMinutes === null ? '' : ` (${parsed.offsetMinutes} min)`}`;
  });
  protected readonly unixResult: Signal<string> = computed(() => {
    try {
      return fromUnixSeconds(Number(this.unixInput()))?.toISOString() ?? 'Invalid Unix seconds.';
    } catch {
      return 'Invalid Unix seconds.';
    }
  });
  protected readonly naturalResult: Signal<string> = computed(() => {
    const result: IParseResult<{ date: IsoDate; time: IsoTime | null }> = parseNaturalDateTime(this.natural(), {
      now: this.bxDateTimeConfigService.now(),
      timeZone: this.zone(),
      locale: 'en-GB',
      calendar: this.bxDateTimeConfigService.adapter(),
      weekStartsOn: 1,
      precision: 'minute'
    });

    if (!result.value) return `${result.error}: ${result.message ?? 'No match.'}`;

    return `${result.value.date}${result.value.time ? ` at ${result.value.time}` : ''}`;
  });
  protected readonly duration: Signal<string> = computed(() => {
    const start = { date: '2026-03-29' as IsoDate, time: '01:30' as IsoTime, timeZone: 'Europe/Berlin' };
    const end = { date: '2026-03-29' as IsoDate, time: '03:30' as IsoTime, timeZone: 'Europe/Berlin' };

    return `Wall clock ${wallClockMinutes(start, end)} min · elapsed ${elapsedMinutes(start, end, 'Europe/Berlin')} min.`;
  });
}
