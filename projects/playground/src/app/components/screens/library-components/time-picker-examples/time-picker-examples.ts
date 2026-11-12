import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

import type { HourCycle, IsoTime, TimePickerPresentation, TimePrecision } from '@filip.mazev/blocks/core';

import { Button, ITimePickerOption, SlideToggle, TimeAvailabilityResolver, TimePicker } from '@filip.mazev/blocks/forms';

@Component({
  selector: 'app-time-picker-examples',
  imports: [Button, SlideToggle, TimePicker],
  templateUrl: './time-picker-examples.html',
  styleUrl: './time-picker-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimePickerExamples {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly presentation: WritableSignal<TimePickerPresentation> = signal<TimePickerPresentation>('wheel');

  protected readonly hourCycle: WritableSignal<HourCycle | 'auto'> = signal<HourCycle | 'auto'>(12);

  protected readonly precision: WritableSignal<TimePrecision> = signal<TimePrecision>('minute');

  protected readonly minuteStep: WritableSignal<number> = signal(5);

  protected readonly customChoices: WritableSignal<boolean> = signal(false);
  protected readonly dropdownIcon: WritableSignal<boolean> = signal(false);

  protected readonly interval: WritableSignal<number | string | undefined> = signal<number | string | undefined>(undefined);

  protected readonly timeOptions: readonly ITimePickerOption[] = [
    { value: '09:00', label: 'Morning' },
    { value: '14:00', label: 'Afternoon' },
    { value: '12:30', label: 'Lunch (unavailable)', disabled: true },
    { value: '18:00', label: 'Evening' }
  ];

  protected readonly loop: WritableSignal<boolean> = signal(true);
  protected readonly businessHours: WritableSignal<boolean> = signal(false);
  protected readonly blockLunch: WritableSignal<boolean> = signal(true);
  protected readonly showTimeZone: WritableSignal<boolean> = signal(false);
  protected readonly showNow: WritableSignal<boolean> = signal(false);
  protected readonly asyncEnabled: WritableSignal<boolean> = signal(false);
  protected readonly availabilityLoading: WritableSignal<boolean> = signal(false);
  protected readonly failNext: WritableSignal<boolean> = signal(false);

  protected readonly value: WritableSignal<IsoTime | null> = signal<IsoTime | null>(null);

  protected readonly committed: WritableSignal<string> = signal('Nothing committed yet.');

  protected readonly presentations: readonly { value: TimePickerPresentation; label: string }[] = [
    { value: 'wheel', label: 'Wheel' },
    { value: 'list', label: 'List' }
  ];
  protected readonly precisions: readonly { value: TimePrecision; label: string }[] = [
    { value: 'minute', label: 'Minutes' },
    { value: 'second', label: 'Seconds' },
    { value: 'millisecond', label: 'Milliseconds' }
  ];
  protected readonly steps: readonly number[] = [1, 5, 15, 30];
  protected readonly disabledIntervals: readonly { start: IsoTime; end: IsoTime }[] = [{ start: '12:00', end: '13:00' }];
  protected readonly resolver: TimeAvailabilityResolver = async () => {
    const fail = this.failNext();
    const revision = ++this.requestRevision;

    this.failNext.set(false);
    this.availabilityLoading.set(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (this.destroyRef.destroyed) return { times: [] };

    if (revision === this.requestRevision) this.availabilityLoading.set(false);

    if (fail) throw new Error('The mock request failed. Retry to load these times.');

    const times: IsoTime[] = [];

    for (let minutes = 9 * 60; minutes <= 17 * 60; minutes += 30) {
      times.push(`${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}` as IsoTime);
    }

    return { times };
  };

  private requestRevision: number = 0;

  protected onCommit(value: IsoTime | null): void {
    this.committed.set(value === null ? 'Cleared.' : `Committed ${value}.`);
  }

  protected setSemanticChoices(enabled: boolean): void {
    this.customChoices.set(enabled);
    this.value.set(null);

    if (enabled) this.presentation.set('list');
  }

  protected failRequest(picker: TimePicker): void {
    this.failNext.set(true);
    picker.reloadSlots();
  }
}
