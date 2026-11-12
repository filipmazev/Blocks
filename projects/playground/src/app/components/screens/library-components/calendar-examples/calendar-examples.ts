import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal, TemplateRef, viewChild } from '@angular/core';

import type { DatePickerMode, DatePickerValue, IDateAvailability, IDateAvailabilityRequest, IDateMetadata, IsoDate } from '@filip.mazev/blocks/core';

import { Button, SlideToggle } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Calendar, ICalendarDayContext, ICalendarVisibleRange } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-calendar-examples',
  imports: [Button, Calendar, Icon, SlideToggle],
  templateUrl: './calendar-examples.html',
  styleUrl: './calendar-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarExamples {
  protected readonly mode: WritableSignal<DatePickerMode> = signal<DatePickerMode>('range');

  protected readonly months: WritableSignal<number> = signal(2);

  protected readonly locale: WritableSignal<string> = signal('en-GB');
  protected readonly calendarId: WritableSignal<string> = signal('gregory');

  protected readonly longNames: WritableSignal<boolean> = signal(false);
  protected readonly highlightToday: WritableSignal<boolean> = signal(true);
  protected readonly showToday: WritableSignal<boolean> = signal(false);
  protected readonly showWeekNumbers: WritableSignal<boolean> = signal(true);
  protected readonly restrict: WritableSignal<boolean> = signal(true);
  protected readonly customCells: WritableSignal<boolean> = signal(false);
  protected readonly asyncMode: WritableSignal<boolean> = signal(false);
  protected readonly failNext: WritableSignal<boolean> = signal(false);

  protected readonly value: WritableSignal<DatePickerValue> = signal<DatePickerValue>(null);

  protected readonly availability: WritableSignal<IDateAvailability | undefined> = signal(undefined);

  protected readonly visible: WritableSignal<string> = signal('Navigate to request availability.');
  protected readonly outcome: WritableSignal<string> = signal('No selection yet.');

  protected readonly modes: readonly { value: DatePickerMode; label: string }[] = [
    { value: 'single', label: 'Single' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'range', label: 'Range' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'year', label: 'Year' }
  ];
  protected readonly locales: readonly { value: string; label: string }[] = [
    { value: 'en-GB', label: 'English' },
    { value: 'es-ES', label: 'Español' },
    { value: 'fr-FR', label: 'Français' },
    { value: 'de-DE', label: 'Deutsch' }
  ];
  protected readonly calendars: readonly { value: string; label: string }[] = [
    { value: 'gregory', label: 'Gregorian' },
    { value: 'islamic-umalqura', label: 'Umm al-Qura' },
    { value: 'hebrew', label: 'Hebrew' },
    { value: 'persian', label: 'Persian' }
  ];
  protected readonly monthCounts: readonly number[] = [1, 2, 3];
  protected readonly disabledIntervals: readonly { start: IsoDate; end: IsoDate }[] = [
    { start: '2026-11-23', end: '2026-12-03' },
    { start: '2026-12-07', end: '2026-12-15' }
  ];

  protected readonly metadata: Signal<readonly IDateMetadata[]> = computed(() => {
    if (!this.customCells()) return [];

    return Array.from({ length: 21 }, (_, index) => {
      const day = String(index + 2).padStart(2, '0');

      return {
        date: `2026-11-${day}`,
        tone: index % 4 === 0 ? 'success' : index % 3 === 0 ? 'warn' : 'neutral',
        badge: index % 3 === 0 ? '3 left' : undefined,
        price: 120 + index * 15,
        description: index % 2 === 0 ? 'Late checkout available' : 'Standard rate'
      } satisfies IDateMetadata;
    });
  });

  protected readonly dayTemplate: Signal<TemplateRef<ICalendarDayContext> | undefined> = viewChild<TemplateRef<ICalendarDayContext>>('dayCell');

  private revision: number = 0;

  protected onVisible(range: ICalendarVisibleRange): void {
    this.visible.set(`Visible ${range.start} – ${range.end} (${range.monthKeys.length} month(s)).`);

    if (this.asyncMode()) this.load(range.start, range.end, ++this.revision);
  }

  protected onRetry(request: IDateAvailabilityRequest): void {
    this.load(request.start, request.end, ++this.revision);
  }

  protected toggleAsync(): void {
    const enabled = !this.asyncMode();

    this.asyncMode.set(enabled);
    this.availability.set(enabled ? { loading: true } : undefined);
  }

  protected setMode(mode: DatePickerMode): void {
    this.mode.set(mode);
    this.value.set(null);
    this.outcome.set(`Mode set to ${mode}.`);
  }

  protected describeValue(): string {
    const value = this.value();

    if (value === null) return 'empty';

    if (typeof value === 'string') return `single date ${value}`;

    if (Array.isArray(value)) return `${value.length} dates`;

    if ('start' in value) return `${'kind' in value ? value.kind + ' period' : 'range'} ${value.start} – ${value.end}`;

    return 'unknown value';
  }

  //#region Helpers

  private load(start: IsoDate, end: IsoDate, revision: number): void {
    this.availability.set({ loading: true, revision });

    const shouldFail = this.failNext();

    this.failNext.set(false);

    setTimeout(() => {
      if (shouldFail) {
        this.availability.set({ loading: false, revision, error: 'Availability could not be loaded. Retry keeps the same range.' });

        return;
      }

      this.availability.set({ loading: false, revision, dates: this.mockMetadata(start, end) });
    }, 650);
  }

  private mockMetadata(start: IsoDate, end: IsoDate): readonly IDateMetadata[] {
    const dates: IDateMetadata[] = [];
    const cursor = new Date(`${start}T00:00:00Z`);
    const last = new Date(`${end}T00:00:00Z`);

    let index = 0;

    while (cursor <= last) {
      const iso = cursor.toISOString().slice(0, 10) as IsoDate;
      const available = index % 5 !== 0;

      dates.push({
        date: iso,
        status: available ? (index % 4 === 0 ? 'limited' : 'available') : 'unavailable',
        tone: available ? (index % 4 === 0 ? 'warn' : 'success') : 'danger',
        badge: available ? `${(index % 4) + 1} slots` : 'Full',
        description: available ? 'Availability loaded from the demo API.' : 'No remaining capacity.'
      });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
      index += 1;
    }

    return dates;
  }

  //#endregion
}
