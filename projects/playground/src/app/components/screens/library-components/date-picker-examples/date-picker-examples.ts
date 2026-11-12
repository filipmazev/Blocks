import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';

import type {
  DateAvailabilityResolver,
  DatePickerMode,
  DatePickerValue,
  IDateMetadata,
  IDatePreset,
  IDatePresetContext,
  IsoDate
} from '@filip.mazev/blocks/core';
import type { ValidationMessages } from '@filip.mazev/blocks/forms';
import type { CalendarViewMode } from '@filip.mazev/blocks/primitives';
import type { IDatePickerDemoLabels } from '@playground/interfaces/idate-picker-demo-labels.interface';

import { addDays, dateModeInfo } from '@filip.mazev/blocks/core';
import { Button, DatePicker, InputField, SlideToggle } from '@filip.mazev/blocks/forms';

@Component({
  selector: 'app-date-picker-examples',
  imports: [Button, DatePicker, InputField, SlideToggle],
  templateUrl: './date-picker-examples.html',
  styleUrl: './date-picker-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerExamples {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly mode: WritableSignal<DatePickerMode> = signal<DatePickerMode>('single');
  protected readonly locale: WritableSignal<string> = signal('en-GB');

  protected readonly value: WritableSignal<DatePickerValue> = signal<DatePickerValue>(null);

  protected readonly readonlyState: WritableSignal<boolean> = signal(false);
  protected readonly disabledState: WritableSignal<boolean> = signal(false);
  protected readonly separateFields: WritableSignal<boolean> = signal(false);
  protected readonly dropdownIcon: WritableSignal<boolean> = signal(false);
  protected readonly longPresets: WritableSignal<boolean> = signal(false);
  protected readonly editable: WritableSignal<boolean> = signal(true);
  protected readonly naturalLanguage: WritableSignal<boolean> = signal(true);
  protected readonly disableLongPresets: WritableSignal<boolean> = signal(false);
  protected readonly highlightToday: WritableSignal<boolean> = signal(true);
  protected readonly disableSundays: WritableSignal<boolean> = signal(false);
  protected readonly showToday: WritableSignal<boolean> = signal(false);
  protected readonly showPresets: WritableSignal<boolean> = signal(false);

  protected readonly initialView: WritableSignal<CalendarViewMode | undefined> = signal<CalendarViewMode | undefined>(undefined);

  protected readonly viewResult: WritableSignal<string> = signal('Default calendar view.');

  protected readonly months: WritableSignal<number> = signal(1);

  protected readonly minDate: WritableSignal<DatePickerValue> = signal<DatePickerValue>(null);
  protected readonly maxDate: WritableSignal<DatePickerValue> = signal<DatePickerValue>(null);

  protected readonly visibleTags: WritableSignal<number> = signal(2);
  protected readonly selectionLimit: WritableSignal<number | null> = signal<number | null>(12);
  protected readonly minLength: WritableSignal<number> = signal(1);

  protected readonly asyncEnabled: WritableSignal<boolean> = signal(false);
  protected readonly availabilityLoading: WritableSignal<boolean> = signal(false);
  protected readonly failNext: WritableSignal<boolean> = signal(false);

  protected readonly committed: WritableSignal<string> = signal('Nothing committed yet.');
  protected readonly parseError: WritableSignal<string> = signal('');

  protected readonly labels: Signal<IDatePickerDemoLabels> = computed(() => {
    const dictionaries: Record<string, IDatePickerDemoLabels> = {
      'en-GB': {
        field: 'Enter date range',
        placeholder: 'Enter a date',
        apply: 'Apply',
        presets: 'Quick select',
        hint: "Try 'next friday', 'in 3 days', or a strict dd/MM/yyyy value.",
        start: 'Start date',
        end: 'End date',
        today: 'Select today',
        invalid: 'Enter a valid selection. The start date must not follow the end date.',
        clear: 'Clear selection',
        selected: 'Selected dates',
        seven: 'Last 7 days',
        thirty: 'Last 30 days',
        month: 'This month',
        ten: 'Next 10 days',
        rolling: 'Rolling',
        calendar: 'Calendar',
        custom: 'Custom'
      },
      'es-ES': {
        field: 'Introduce un intervalo de fechas',
        placeholder: 'Introduce una fecha',
        apply: 'Aplicar',
        presets: 'Selección rápida',
        hint: "Prueba 'próximo viernes', 'en 3 días' o una fecha estricta dd/MM/yyyy.",
        start: 'Fecha inicial',
        end: 'Fecha final',
        today: 'Seleccionar hoy',
        invalid: 'Introduce una selección válida. La fecha inicial no puede ser posterior a la final.',
        clear: 'Borrar selección',
        selected: 'Fechas seleccionadas',
        seven: 'Últimos 7 días',
        thirty: 'Últimos 30 días',
        month: 'Este mes',
        ten: 'Próximos 10 días',
        rolling: 'Relativo',
        calendar: 'Calendario',
        custom: 'Personalizado'
      },
      'fr-FR': {
        field: 'Saisir une plage de dates',
        placeholder: 'Saisir une date',
        apply: 'Appliquer',
        presets: 'Sélection rapide',
        hint: "Essayez 'vendredi prochain', 'dans 3 jours' ou une date stricte dd/MM/yyyy.",
        start: 'Date de début',
        end: 'Date de fin',
        today: 'Aujourd’hui',
        invalid: 'Saisissez une sélection valide. La date de début ne peut pas suivre la date de fin.',
        clear: 'Effacer la sélection',
        selected: 'Dates sélectionnées',
        seven: '7 derniers jours',
        thirty: '30 derniers jours',
        month: 'Ce mois-ci',
        ten: '10 prochains jours',
        rolling: 'Relatif',
        calendar: 'Calendrier',
        custom: 'Personnalisé'
      },
      'de-DE': {
        field: 'Datumsbereich eingeben',
        placeholder: 'Datum eingeben',
        apply: 'Anwenden',
        presets: 'Schnellauswahl',
        hint: "Versuchen Sie 'nächsten Freitag', 'in 3 Tagen' oder ein Datum im strikten Format dd/MM/yyyy.",
        start: 'Startdatum',
        end: 'Enddatum',
        today: 'Heute auswählen',
        invalid: 'Geben Sie eine gültige Auswahl ein. Das Startdatum darf nicht nach dem Enddatum liegen.',
        clear: 'Auswahl löschen',
        selected: 'Ausgewählte Daten',
        seven: 'Letzte 7 Tage',
        thirty: 'Letzte 30 Tage',
        month: 'Dieser Monat',
        ten: 'Nächste 10 Tage',
        rolling: 'Relativ',
        calendar: 'Kalender',
        custom: 'Benutzerdefiniert'
      }
    };

    return dictionaries[this.locale()] ?? dictionaries['en-GB'];
  });
  protected readonly validationMessages: Signal<ValidationMessages> = computed(() => {
    const messages: Record<string, ValidationMessages> = {
      'en-GB': {
        dateParse: ({ params }) => `Enter a date in the ${params['format']} format.`,
        dateMin: ({ params }) => `The date cannot be before ${params['minFormatted']}.`,
        dateMax: ({ params }) => `The date cannot be after ${params['maxFormatted']}.`,
        dateOrder: ({ params }) => `The end date cannot be before the start date (${params['startFormatted']}).`
      },
      'es-ES': {
        dateParse: ({ params }) => `Introduce una fecha con el formato ${params['format']}.`,
        dateMin: ({ params }) => `La fecha no puede ser anterior al ${params['minFormatted']}.`,
        dateMax: ({ params }) => `La fecha no puede ser posterior al ${params['maxFormatted']}.`,
        dateOrder: ({ params }) => `La fecha final no puede ser anterior a la inicial (${params['startFormatted']}).`
      },
      'fr-FR': {
        dateParse: ({ params }) => `Saisissez une date au format ${params['format']}.`,
        dateMin: ({ params }) => `La date ne peut pas précéder le ${params['minFormatted']}.`,
        dateMax: ({ params }) => `La date ne peut pas suivre le ${params['maxFormatted']}.`,
        dateOrder: ({ params }) => `La date de fin ne peut pas précéder la date de début (${params['startFormatted']}).`
      },
      'de-DE': {
        dateParse: ({ params }) => `Geben Sie ein Datum im Format ${params['format']} ein.`,
        dateMin: ({ params }) => `Das Datum darf nicht vor dem ${params['minFormatted']} liegen.`,
        dateMax: ({ params }) => `Das Datum darf nicht nach dem ${params['maxFormatted']} liegen.`,
        dateOrder: ({ params }) => `Das Enddatum darf nicht vor dem Startdatum (${params['startFormatted']}) liegen.`
      }
    };

    return messages[this.locale()] ?? messages['en-GB'];
  });

  protected readonly locales: readonly { value: string; label: string }[] = [
    { value: 'en-GB', label: 'English' },
    { value: 'es-ES', label: 'Español' },
    { value: 'fr-FR', label: 'Français' },
    { value: 'de-DE', label: 'Deutsch' }
  ];
  protected readonly modes: readonly { value: DatePickerMode; label: string }[] = [
    { value: 'single', label: 'Single' },
    { value: 'range', label: 'Range' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'month', label: 'Month and year' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'year', label: 'Year only' },
    { value: 'week', label: 'Week' },
    { value: 'week-range', label: 'Week range' },
    { value: 'month-range', label: 'Month range' },
    { value: 'quarter-range', label: 'Quarter range' },
    { value: 'year-range', label: 'Year range' }
  ];

  protected readonly presets: Signal<readonly IDatePreset[]> = computed(() => {
    const info = dateModeInfo(this.mode());
    const unit = info.period ?? 'day';
    const relative = new Intl.RelativeTimeFormat(this.locale(), { numeric: 'auto' });
    const shift = (context: IDatePresetContext, delta: number): IsoDate =>
      unit === 'year'
        ? context.calendar.addYears(context.today, delta, context.locale)
        : unit === 'month' || unit === 'quarter'
          ? context.calendar.addMonths(context.today, delta * (unit === 'quarter' ? 3 : 1), context.locale)
          : addDays(context.today, delta * (unit === 'week' ? 7 : 1));
    const primary: readonly IDatePreset[] = info.isRange
      ? this.builtInPresets()
      : [0, -1, 1].map((delta) => ({
          id: `relative-${delta}`,
          label: relative.format(delta, unit),
          resolve: (context: IDatePresetContext) => shift(context, delta)
        }));
    const long: readonly IDatePreset[] = this.longPresets()
      ? Array.from({ length: 16 }, (_, index) => ({
          id: `previous-period-${index + 2}`,
          label: relative.format(-(index + 2), unit),
          group: this.labels().rolling,
          disabled: this.disableLongPresets() && index % 3 === 2,
          resolve: (context: IDatePresetContext) => {
            const start = shift(context, -(index + 2));

            return info.isRange ? { start, end: unit === 'day' ? start : shift(context, -(index + 1)) } : start;
          }
        }))
      : [];

    return [...primary, ...long];
  });

  protected readonly resolver: DateAvailabilityResolver = async (request) => {
    const fail = this.failNext();
    const revision = ++this.requestRevision;

    this.failNext.set(false);
    this.availabilityLoading.set(true);
    await new Promise((resolve) => setTimeout(resolve, 550));

    if (this.destroyRef.destroyed) return { dates: [] };

    if (revision === this.requestRevision) this.availabilityLoading.set(false);

    if (fail) throw new Error('The mock request failed. Retry to load these dates.');

    return { dates: this.mockMetadata(request.start, request.end) };
  };

  private requestRevision: number = 0;

  protected failRequest(picker: DatePicker): void {
    this.failNext.set(true);
    picker.reloadAvailability();
  }

  protected setVisibleTags(value: string | number | null): void {
    this.visibleTags.set(Math.max(1, Number(value) || 1));
  }

  protected setSelectionLimit(value: string | number | null): void {
    this.selectionLimit.set(value === null || value === '' ? null : Math.max(1, Number(value) || 1));
  }

  protected onCommit(value: DatePickerValue): void {
    this.committed.set(this.describe(value));
  }

  protected onParseFailed(message: string): void {
    this.parseError.set(message);
  }

  //#region Helpers

  private describe(value: DatePickerValue): string {
    if (value === null) return 'Cleared.';

    if (typeof value === 'string') return `Committed single date ${value}.`;

    if (Array.isArray(value)) return `Committed ${value.length} dates: ${value.join(', ')}.`;

    if ('start' in value) return `Committed ${'kind' in value ? value.kind + ' ' : ''}range ${value.start} – ${value.end}.`;

    return 'Committed value.';
  }

  private mockMetadata(start: IsoDate, end: IsoDate): readonly IDateMetadata[] {
    const dates: IDateMetadata[] = [];
    const cursor = new Date(`${start}T00:00:00Z`);
    const last = new Date(`${end}T00:00:00Z`);

    let index = 0;

    while (cursor <= last) {
      const iso = cursor.toISOString().slice(0, 10) as IsoDate;
      const available = index % 4 !== 0;

      dates.push({
        date: iso,
        status: available ? 'available' : 'unavailable',
        badge: available ? `${(index % 3) + 1} left` : 'Full',
        tone: available ? 'success' : 'danger'
      });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
      index += 1;
    }

    return dates;
  }

  private builtInPresets(): readonly IDatePreset[] {
    return [
      {
        id: 'last-seven-days',
        label: this.labels().seven,
        group: this.labels().rolling,
        resolve: (context: IDatePresetContext) => ({ start: addDays(context.today, -6), end: context.today })
      },
      {
        id: 'last-thirty-days',
        label: this.labels().thirty,
        group: this.labels().rolling,
        resolve: (context: IDatePresetContext) => ({ start: addDays(context.today, -29), end: context.today })
      },
      {
        id: 'this-month',
        label: this.labels().month,
        group: this.labels().calendar,
        resolve: (context: IDatePresetContext) => {
          const [year, month] = context.today.split('-').map(Number);

          return { start: `${year}-${String(month).padStart(2, '0')}-01` as IsoDate, end: context.today };
        }
      }
    ];
  }

  //#endregion
}
