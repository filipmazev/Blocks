import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, TemplateRef, WritableSignal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal, untracked, viewChild } from '@angular/core';

import type {
  CalendarNameForm,
  DateAvailabilityResolver,
  DatePickerMode,
  DatePickerValue,
  ICalendarAdapter,
  IDateAvailability,
  IDateAvailabilityRequest,
  IDateFormatContext,
  IDateMetadata,
  IDateModeInfo,
  IDatePreset,
  IDatePresetContext,
  IDateRange,
  IDateTimeConfig,
  IPeriodRange,
  IsoDate
} from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { DateRangeFieldLayout, PickerSurfacePresentation } from '@forms/types/date-picker.types';

import {
  addDays,
  buildSelectionValue,
  BX_CLOCK,
  BX_I18N,
  BxDateTimeConfigService,
  dateModeInfo,
  dateRestriction,
  defaultDateRangePresets,
  enumerateDates,
  formatIsoDate,
  IDateRestrictionConfig,
  isDateRangeValue,
  isPeriodRangeValue,
  parseDateInput,
  parseIsoDate,
  parseNaturalDate,
  periodBounds,
  ResolvableText,
  resolveText,
  validateDateRange,
  valueAnchors,
  valueHighlightRange,
  WindowDimensionsService
} from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import {
  Calendar,
  CalendarViewMode,
  ICalendarDayContext,
  ICalendarVisibleRange,
  ITagConfig,
  LoadingSpinner,
  Tag,
  TooltipDirective,
  TruncateDirective
} from '@filip.mazev/blocks/primitives';

import { BxValueControl } from '@forms/classes/bx-value-control';
import { Button } from '@forms/components/button/button';
import { DatePresetList } from '@forms/components/date-preset-list/date-preset-list';
import { FormField } from '@forms/components/form-field/form-field';
import { PickerSurface } from '@forms/components/picker-surface/picker-surface';
import { DATE_VALIDATION_KINDS, DATE_VALIDATION_MESSAGES } from '@forms/constants/date-validation.constants';
import { mergeDateMetadata } from '@forms/helpers/date-availability.helpers';
import { dateInputBound } from '@forms/helpers/date-input.helpers';
import { visibleTagLimit } from '@forms/helpers/tag-limit.helpers';
import { resolveValidationMessage } from '@forms/helpers/validation.helpers';

/**
 * Single, multiple, range and whole-period date picker.
 *
 * The field, validation, label and hint behavior come from the shared Forms form-field foundation; the selection UI is the Primitive calendar.
 * Single dates and completed ranges commit immediately. Multiple dates commit individually and remain visible as tags.
 */
@Component({
  selector: 'bx-date-picker',
  imports: [BxSurfaceDirective, Button, Calendar, DatePresetList, FormField, Icon, LoadingSpinner, PickerSurface, Tag, TooltipDirective, TruncateDirective],
  templateUrl: './date-picker.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './date-picker.scss'
})
export class DatePicker extends BxValueControl<DatePickerValue> {
  private readonly bxDateTimeConfigService = inject(BxDateTimeConfigService);
  private readonly clock = inject(BX_CLOCK);
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly originElement: WritableSignal<HTMLElement | null> = signal<HTMLElement | null>(null);

  private readonly availabilityState: WritableSignal<IDateAvailability | undefined> = signal<IDateAvailability | undefined>(undefined);

  private readonly lastDraftSignature: WritableSignal<string> = signal<string>('');

  protected readonly fieldFocused: WritableSignal<boolean> = signal(false);
  protected readonly textEdited: WritableSignal<boolean> = signal(false);
  protected readonly isOpen: WritableSignal<boolean> = signal(false);

  protected readonly draftValue: WritableSignal<DatePickerValue> = signal<DatePickerValue>(null);
  protected readonly viewDate: WritableSignal<IsoDate | null> = signal<IsoDate | null>(null);

  protected readonly typedText: WritableSignal<string> = signal('');
  protected readonly typedStart: WritableSignal<string> = signal('');
  protected readonly typedEnd: WritableSignal<string> = signal('');

  protected readonly parseError: WritableSignal<string | null> = signal<string | null>(null);

  protected readonly settings: Signal<IDateTimeConfig> = computed(() =>
    this.bxDateTimeConfigService.resolve({
      locale: this.locale(),
      calendar: this.calendarId(),
      timeZone: this.timeZone(),
      weekStartsOn: this.weekStartsOn(),
      minimalDaysInFirstWeek: this.minimalDaysInFirstWeek(),
      dateFormat: this.dateFormat(),
      allowNaturalLanguage: this.allowNaturalLanguage()
    })
  );
  protected readonly adapter: Signal<ICalendarAdapter> = computed(() => this.bxDateTimeConfigService.adapter(this.settings().calendar));
  protected readonly modeInfo: Signal<IDateModeInfo> = computed(() => dateModeInfo(this.mode()));
  protected readonly formatContext: Signal<IDateFormatContext> = computed(() => ({
    locale: this.settings().locale,
    calendar: this.adapter(),
    weekStartsOn: this.settings().weekStartsOn,
    minimalDaysInFirstWeek: this.settings().minimalDaysInFirstWeek
  }));
  protected readonly presetContext: Signal<IDatePresetContext> = computed<IDatePresetContext>(() => ({
    now: this.clock.now(),
    today: this.todayIso(),
    locale: this.settings().locale,
    calendar: this.adapter(),
    timeZone: this.settings().timeZone,
    weekStartsOn: this.settings().weekStartsOn,
    minimalDaysInFirstWeek: this.settings().minimalDaysInFirstWeek
  }));
  protected readonly isDrawer: Signal<boolean> = computed(() => this.surfacePresentation() === 'drawer');
  protected readonly surfacePresentation: Signal<PickerSurfacePresentation> = computed<PickerSurfacePresentation>(() => {
    const requested = this.presentation();

    if (requested !== 'auto') return requested;

    return this.windowDimensionsService.isMobile() ? 'drawer' : 'popover';
  });
  protected readonly displayValue: Signal<string> = computed(() =>
    this.formatValue(this.isOpen() && this.mode() !== 'multiple' ? this.draftValue() : this.internalValue())
  );
  protected readonly displayStart: Signal<string> = computed(() =>
    this.formatEndpoint(this.rangeStart(this.isOpen() ? this.draftValue() : this.internalValue()))
  );
  protected readonly displayEnd: Signal<string> = computed(() => this.formatEndpoint(this.rangeEnd(this.isOpen() ? this.draftValue() : this.internalValue())));
  protected readonly isRangeMode: Signal<boolean> = computed(() => this.modeInfo().selection === 'range');
  protected readonly rangeFieldLayout: Signal<DateRangeFieldLayout> = computed<DateRangeFieldLayout>(() =>
    this.separateFields() && this.isRangeMode() ? 'separate' : 'combined'
  );
  protected readonly effectivePresets: Signal<readonly IDatePreset[]> = computed(() => {
    const source = this.presets() ?? this.defaultPresets();

    return source.map((preset) => ({ ...preset, resolve: (context: IDatePresetContext) => this.normalizePresetValue(preset.resolve(context)) }));
  });
  protected readonly showPresets: Signal<boolean> = computed(() => this.presetsPlacement() !== 'hidden' && this.effectivePresets().length > 0);
  protected readonly presetsHorizontal: Signal<boolean> = computed(() => this.isDrawer());
  protected readonly calendarMonths: Signal<number> = computed(() => {
    const requested = this.months();

    if (requested > 0) return requested;

    return this.isRangeMode() && !this.isDrawer() ? 2 : 1;
  });
  protected readonly availabilityForCalendar: Signal<IDateAvailability | undefined> = computed(
    () => this.availability() ?? (this.resolver() ? this.availabilityState() : undefined)
  );
  protected readonly resolvedDatePlaceholder: Signal<string> = computed(() => resolveText(this.placeholder() ?? this.defaultPlaceholder(), this.i18n));
  protected readonly resolvedInvalidLabel: Signal<string> = computed(() => this.dateValidationMessage(this.parseError() ?? 'endpoint'));
  protected readonly resolvedTriggerText: Signal<string> = computed(() => resolveText(this.placeholder() ?? this.openPickerLabel(), this.i18n));
  protected readonly resolvedOpenPickerLabel: Signal<string> = computed(() => resolveText(this.openPickerLabel(), this.i18n));
  protected readonly resolvedClearLabel: Signal<string> = computed(() => resolveText(this.clearLabel(), this.i18n));
  protected readonly resolvedPresetsLabel: Signal<string> = computed(() => resolveText(this.presetsLabel(), this.i18n));
  protected readonly resolvedStartLabel: Signal<string> = computed(() => resolveText(this.startLabel(), this.i18n));
  protected readonly resolvedEndLabel: Signal<string> = computed(() => resolveText(this.endLabel(), this.i18n));
  protected readonly resolvedMoreDatesLabel: Signal<string> = computed(() => resolveText(this.moreDatesLabel(), this.i18n));
  protected readonly resolvedSelectedDatesLabel: Signal<string> = computed(() => resolveText(this.selectedDatesLabel(), this.i18n));
  protected readonly availableDates: Signal<readonly IDateMetadata[]> = computed(() => this.availabilityForCalendar()?.dates ?? []);
  protected readonly showClear: Signal<boolean> = computed(() => {
    const value = this.internalValue();
    const populated = Array.isArray(value) ? value.length > 0 : !!value;

    return this.clearable() && (populated || this.textEdited()) && !this.isReadonly();
  });
  protected readonly isFloating: Signal<boolean> = computed(
    () =>
      !!this.displayValue() ||
      (this.editable() &&
        this.mode() !== 'multiple' &&
        (this.fieldFocused() || this.isOpen() || !!this.typedText() || !!this.typedStart() || !!this.typedEnd() || this.resolvedFloatLabel() === 'always'))
  );
  protected readonly isLoading: Signal<boolean> = computed(() => this.loading() || this.availabilityForCalendar()?.loading === true);
  protected readonly multipleDates: Signal<readonly IsoDate[]> = computed(() => {
    const value = this.internalValue();

    return Array.isArray(value) ? (value as readonly IsoDate[]) : [];
  });
  protected readonly visibleDates: Signal<readonly IsoDate[]> = computed(() => this.multipleDates().slice(0, this.visibleTagCount()));
  protected readonly overflowDatesLabel: Signal<string> = computed(() => `+${Math.max(0, this.multipleDates().length - this.visibleTagCount())}`);
  protected readonly overflowDatesTooltip: Signal<string> = computed(() =>
    this.multipleDates()
      .slice(this.visibleTagCount())
      .map((date) => this.formatEndpoint(date))
      .join(', ')
  );
  protected readonly resolvedClearTooltip: Signal<string> = computed(() => resolveText(this.clearTooltip() ?? this.clearLabel(), this.i18n));
  protected readonly restrictionConfig: Signal<IDateRestrictionConfig> = computed(() => ({
    min: this.min(),
    max: this.max(),
    disabledDates: this.disabledDates(),
    disabledIntervals: this.disabledIntervals(),
    disabledWeekdays: this.disabledWeekdays(),
    metadata: this.availableDates(),
    isDateDisabled: (date: IsoDate) =>
      !!this.dateFilter()?.(date) ||
      ((!!this.resolver() || !!this.availability()) &&
        (!this.availabilityForCalendar() ||
          !!this.availabilityForCalendar()?.loading ||
          !!this.availabilityForCalendar()?.error ||
          !this.availableDates().some((entry) => entry.date === date)))
  }));
  protected readonly panelClass: Signal<string> = computed(() => `bx-date-panel ${this.isDrawer() ? 'is-drawer' : 'is-popover'}`);
  protected readonly panelWidth: Signal<string> = computed(() => {
    if (this.isDrawer()) return '100%';

    const months = this.calendarMonths();
    const presets = this.showPresets();

    if (months === 1) return presets ? 'min(94vw, 32rem)' : 'min(94vw, 20rem)';

    return presets ? 'min(94vw, 46rem)' : 'min(94vw, 38rem)';
  });
  protected readonly panelOrigin: Signal<HTMLElement | null> = computed(() => this.originElement());

  protected readonly panelTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('panelTemplate');

  /** Selection mode rendered by the picker. Defaults to `'single'`. */
  public readonly mode: InputSignal<DatePickerMode> = input<DatePickerMode>('single');
  /** Icon on the field's picker action. Defaults to 'calendar'; accepts any Blocks icon name. */
  public readonly pickerIcon: InputSignal<IconName> = input<IconName>('calendar');
  /** Accessible name of the picker action; accepts translation keys. Defaults to 'Choose date'. */
  public readonly openPickerLabel: InputSignal<ResolvableText> = input<ResolvableText>('Choose date');
  /** Initial visible date for a new panel; omission anchors to the current selection or today. */
  public readonly startAt: InputSignal<IsoDate | null> = input<IsoDate | null>(null);
  /** Optional initial calendar view; omission follows the selection mode. */
  public readonly startView: InputSignal<CalendarViewMode | undefined> = input<CalendarViewMode | undefined>(undefined);
  /** Optional ordered strict parsing patterns. Omission uses the mode's display format and canonical ISO. */
  public readonly parseFormats: InputSignal<readonly string[]> = input<readonly string[]>([]);
  /** Optional per-instance locale; omission uses shared date-time defaults. Optional. */
  public readonly locale: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional per-instance calendar identifier; omission uses shared defaults. Optional. */
  public readonly calendarId: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional per-instance IANA time zone used to resolve today. Optional. */
  public readonly timeZone: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional zero-based first day of the week. Optional. */
  public readonly weekStartsOn: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Optional minimum days in the first week of a year. Optional. */
  public readonly minimalDaysInFirstWeek: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Optional display and input pattern; omission uses shared defaults. Optional. */
  public readonly dateFormat: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Whether typed input may resolve natural-language expressions. Defaults to `false`. */
  public readonly allowNaturalLanguage: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether the field accepts typed dates in addition to the panel. Defaults to `true`. */
  public readonly editable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Overlay presentation; `'auto'` uses the bottom drawer below the mobile breakpoint and a popover otherwise. Defaults to `'auto'`. */
  public readonly presentation: InputSignal<'auto' | PickerSurfacePresentation> = input<'auto' | PickerSurfacePresentation>('auto');
  /** Localized weekday heading length. Defaults to narrow initials; full names remain accessible. */
  public readonly weekdayNameFormat: InputSignal<CalendarNameForm> = input<CalendarNameForm>('narrow');
  /** Localized calendar month heading and cell length. Defaults to short abbreviations. */
  public readonly monthNameFormat: InputSignal<CalendarNameForm> = input<CalendarNameForm>('short');
  /** Number of contiguous months rendered in the panel; `0` chooses two for desktop range modes and one otherwise. Defaults to `0`. */
  public readonly months: InputSignalWithTransform<number, unknown> = input(0, { transform: (value: unknown) => Math.trunc(Number(value)) || 0 });
  /** Whether range modes display coordinated start and end fields. Defaults to `false`. */
  public readonly separateFields: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /**
   * Compatibility input for the branch draft API; selection mode now determines commit timing.
   * @deprecated All valid selections commit immediately; ranges commit when complete.
   */
  public readonly commitPolicy: InputSignal<'auto' | 'immediate' | 'apply'> = input<'auto' | 'immediate' | 'apply'>('auto');
  /** Whether single dates and completed ranges close the panel. Defaults to true; multiple dates stay open for continued selection. */
  public readonly closeOnSelect: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether a clear action is available. Defaults to `true`. */
  public readonly clearable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Optional quick selections for every mode. Omission uses relative date/range defaults; an empty array hides the list. Range presets remain compatible. */
  public readonly presets: InputSignal<readonly IDatePreset[] | undefined> = input<readonly IDatePreset[] | undefined>(undefined);
  /** Placement of the preset sidebar in the panel. Defaults to `'start'`. */
  public readonly presetsPlacement: InputSignal<'start' | 'end' | 'hidden'> = input<'start' | 'end' | 'hidden'>('start');
  /** Optional earliest selectable ISO date; composite Signal Forms constraints use their earliest date or range start. Null/undefined leaves it open. */
  public readonly min: InputSignalWithTransform<IsoDate | null | undefined, DatePickerValue | undefined> = input<
    IsoDate | null | undefined,
    DatePickerValue | undefined
  >(undefined, { transform: (value) => dateInputBound(value, 'min') });
  /** Optional latest selectable ISO date; composite Signal Forms constraints use their latest date or range end. Null/undefined leaves it open. */
  public readonly max: InputSignalWithTransform<IsoDate | null | undefined, DatePickerValue | undefined> = input<
    IsoDate | null | undefined,
    DatePickerValue | undefined
  >(undefined, { transform: (value) => dateInputBound(value, 'max') });
  /** Individual dates that cannot be selected. Defaults to an empty array. */
  public readonly disabledDates: InputSignal<readonly IsoDate[]> = input<readonly IsoDate[]>([]);
  /** Inclusive intervals that cannot be selected. Defaults to an empty array. */
  public readonly disabledIntervals: InputSignal<readonly IDateRange[]> = input<readonly IDateRange[]>([]);
  /** Zero-based weekdays that cannot be selected. Defaults to an empty array. */
  public readonly disabledWeekdays: InputSignal<readonly number[]> = input<readonly number[]>([]);
  /** Application predicate returning true when a date cannot be selected. Optional. */
  public readonly dateFilter: InputSignal<((date: IsoDate) => boolean) | undefined> = input<((date: IsoDate) => boolean) | undefined>(undefined);
  /** Policy applied when a range would include a restricted date. Defaults to `'reject'`. */
  public readonly crossingPolicy: InputSignal<'reject' | 'allow' | 'truncate'> = input<'reject' | 'allow' | 'truncate'>('reject');
  /** Minimum inclusive day count accepted for a range. Defaults to `1`. */
  public readonly minRangeLength: InputSignal<number> = input(1);
  /** Maximum inclusive day count accepted for a range; null leaves it unbounded. Defaults to `null`. */
  public readonly maxRangeLength: InputSignal<number | null> = input<number | null>(null);
  /** Whether a range may start and end on the same day. Defaults to `true`. */
  public readonly allowSameDay: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Maximum number of selected dates in multiple mode; null leaves it unbounded. Defaults to `null`. */
  public readonly selectionLimit: InputSignal<number | null> = input<number | null>(null);
  /** Consumer-managed availability state for the visible range. Optional. */
  public readonly availability: InputSignal<IDateAvailability | undefined> = input<IDateAvailability | undefined>(undefined);
  /** Optional Promise-based availability resolver managed by Blocks request orchestration. Optional. */
  public readonly resolver: InputSignal<DateAvailabilityResolver | undefined> = input<DateAvailabilityResolver | undefined>(undefined);
  /** Visible text while availability loads; translation keys resolve through BX_I18N. Optional. */
  public readonly loadingLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Visible retry action label; translation keys resolve through BX_I18N. Defaults to `'Retry request'`. */
  public readonly retryLabel: InputSignal<ResolvableText> = input<ResolvableText>('Retry request');
  /** Visible message used when a resolver request fails; translation keys resolve through BX_I18N. Defaults to `'Dates could not be loaded.'`. */
  public readonly loadErrorMessage: InputSignal<ResolvableText> = input<ResolvableText>('Dates could not be loaded.');
  /** Optional blanket validation-message override; omission uses contextual shared errorMessages with formatted boundaries. */
  public readonly invalidSelectionLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /**
   * Compatibility label retained from the branch draft API; no Apply action is rendered.
   * @deprecated All valid selections commit immediately.
   */
  public readonly applyLabel: InputSignal<ResolvableText> = input<ResolvableText>('Apply');
  /**
   * Compatibility label retained from the branch draft API; no Cancel action is rendered.
   * @deprecated Use Escape or outside dismissal to close the panel.
   */
  public readonly cancelLabel: InputSignal<ResolvableText> = input<ResolvableText>('Cancel');
  /** Visible label of the clear action; translation keys resolve through BX_I18N. Defaults to `'Clear selection'`. */
  public readonly clearLabel: InputSignal<ResolvableText> = input<ResolvableText>('Clear selection');
  /** Optional translated Today shortcut. Omission or empty text hides the action and its space. */
  public readonly todayLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Accessible name of preset navigation; no visible heading is rendered. Accepts translation keys and defaults to 'Quick select'. */
  public readonly presetsLabel: InputSignal<ResolvableText> = input<ResolvableText>('Quick select');
  /** Whether today's date receives a visual marker and aria-current state. Defaults to true; independent of the Today shortcut. */
  public readonly showToday: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the footer of the calendar renders the Today shortcut. Defaults to `true`. */
  public readonly showTodayButton: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Accessible name of the range start field; translation keys resolve through BX_I18N. Defaults to `'Start date'`. */
  public readonly startLabel: InputSignal<ResolvableText> = input<ResolvableText>('Start date');
  /** Accessible name of the range end field; translation keys resolve through BX_I18N. Defaults to `'End date'`. */
  public readonly endLabel: InputSignal<ResolvableText> = input<ResolvableText>('End date');
  /** Text appended to multiple-date summaries; translation keys resolve through BX_I18N. Defaults to `'more'`. */
  public readonly moreDatesLabel: InputSignal<ResolvableText> = input<ResolvableText>('more');
  /** Accessible group label for selected multiple dates; translation keys resolve through BX_I18N. Defaults to `'Selected dates'`. */
  public readonly selectedDatesLabel: InputSignal<ResolvableText> = input<ResolvableText>('Selected dates');
  /** Optional translated clear tooltip; omission uses clearLabel and empty text suppresses it. */
  public readonly clearTooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Maximum named tags before a +N summary; defaults to one, matching multiselect. */
  public readonly visibleTagCount: InputSignalWithTransform<number, number | string> = input(1, { transform: visibleTagLimit });
  /** Optional selected-tag appearance, using the shared Tag contract. Defaults to an empty configuration. */
  public readonly tagConfig: InputSignal<ITagConfig> = input<ITagConfig>({});
  /** Optional +N tag appearance. Defaults to an empty configuration. */
  public readonly overflowTagConfig: InputSignal<ITagConfig> = input<ITagConfig>({});
  /** Optional day-cell template forwarded to the calendar. Optional. */
  public readonly dayTemplate: InputSignal<TemplateRef<ICalendarDayContext> | undefined> = input<TemplateRef<ICalendarDayContext> | undefined>(undefined);

  /** Emits calendar view changes without committing a date. */
  public readonly viewChange: OutputEmitterRef<CalendarViewMode> = output<CalendarViewMode>();
  /** Emits the selected month anchor independently from the final date. */
  public readonly monthSelected: OutputEmitterRef<IsoDate> = output<IsoDate>();
  /** Emits the selected year anchor independently from the final date. */
  public readonly yearSelected: OutputEmitterRef<IsoDate> = output<IsoDate>();
  /** Emits the committed value after Apply or an immediate selection. */
  public readonly valueCommit: OutputEmitterRef<DatePickerValue> = output<DatePickerValue>();
  /** Emits each in-progress draft value while the panel is open. */
  public readonly draftChange: OutputEmitterRef<DatePickerValue> = output<DatePickerValue>();
  /** Emits the panel open state. */
  public readonly openChange: OutputEmitterRef<boolean> = output<boolean>();
  /** Emits the rendered calendar range for application-managed availability. */
  public readonly visibleRangeChange: OutputEmitterRef<ICalendarVisibleRange> = output<ICalendarVisibleRange>();
  /** Emits availability requests for application-managed loading. */
  public readonly request: OutputEmitterRef<IDateAvailabilityRequest> = output<IDateAvailabilityRequest>();
  /** Emits when the user retries a failed availability request. */
  public readonly retry: OutputEmitterRef<IDateAvailabilityRequest> = output<IDateAvailabilityRequest>();
  /** Emits when typed input cannot be parsed. */
  public readonly parseFailed: OutputEmitterRef<string> = output<string>();

  private resolverContext: string = '';
  private resolverToken: number = 0;
  private lastRequest: IDateAvailabilityRequest | undefined;

  constructor() {
    super();

    effect(() => {
      if (this.effectiveDisabled() || this.isReadonly()) this.close();
    });

    effect(() => {
      const draft = this.draftValue();
      const signature = JSON.stringify(draft ?? null);

      if (signature === this.lastDraftSignature()) return;

      this.lastDraftSignature.set(signature);
      untracked(() => this.draftChange.emit(draft));
    });

    effect(() => {
      this.resolver();
      this.availability();
      untracked(() => {
        ++this.resolverToken;
        this.availabilityState.set(undefined);
        this.resolverContext = '';

        const request = this.lastRequest;

        if (this.isOpen() && request) void this.runResolver({ ...request, revision: request.revision + 1 });
      });
    });

    effect(() => {
      const value = this.internalValue();

      if (this.fieldFocused() || this.isOpen() || this.textEdited()) return;

      this.typedText.set(this.formatValue(value));
      this.typedStart.set(this.displayStart());
      this.typedEnd.set(this.displayEnd());
    });

    this.destroyRef.onDestroy(() => ++this.resolverToken);
  }

  /** Clear pending text and validation feedback and close the panel during a form reset; the owning form retains control of the value. */
  public override reset(): void {
    const wasOpen = this.isOpen();

    this.isOpen.set(false);
    super.reset();
    this.clearPendingEdit();
    this.fieldFocused.set(false);
    this.draftValue.set(this.internalValue());
    this.typedText.set(this.formatValue(this.internalValue()));
    this.typedStart.set(this.displayStart());
    this.typedEnd.set(this.displayEnd());

    if (wasOpen) this.openChange.emit(false);
  }

  /** Open the selection panel with a draft copied from the committed value. */
  public open(): void {
    if (this.isOpen() || this.effectiveDisabled() || this.isReadonly()) return;

    this.draftValue.set(this.internalValue());
    this.viewDate.set(this.startAt());

    const origin = this.originElement();

    this.originElement.set(
      origin?.isConnected && this.nativeElement.contains(origin) ? origin : this.nativeElement.querySelector<HTMLElement>('.bx-date-trigger')
    );
    this.isOpen.set(true);
    this.openChange.emit(true);
  }

  /** Close the selection panel without committing draft changes. */
  public close(): void {
    if (!this.isOpen()) return;

    this.isOpen.set(false);
    this.markAsTouched();

    this.openChange.emit(false);
  }

  /** Commit the draft value when it is complete and valid. */
  public apply(): void {
    const draft = this.draftValue();

    if (this.effectiveDisabled() || this.isReadonly()) return;

    if (draft !== null && !Array.isArray(draft) && !this.isDraftComplete(draft)) return;

    if (!this.commitDraft(draft)) return;

    this.close();
  }

  /** Discard draft changes and close the panel. */
  public cancel(): void {
    this.draftValue.set(this.internalValue());

    if (!this.parseError()) {
      this.textEdited.set(false);
      this.typedText.set(this.formatValue(this.internalValue()));
      this.typedStart.set(this.formatEndpoint(this.rangeStart(this.internalValue())));
      this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.internalValue())));
    }

    this.close();
  }

  /** Clear the committed value and close the panel. */
  public clear(): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    this.draftValue.set(null);
    this.clearPendingEdit();
    this.parseError.set(null);
    this.updateValue(null);
    this.valueCommit.emit(null);
    this.close();
    this.focus({ preventScroll: true });
  }

  /** Move the calendar to the current date without changing the selection. */
  public goToToday(): void {
    this.viewDate.set(this.todayIso());
  }

  /** Open the calendar if necessary and reload availability for its current visible range. Ignores loading, disabled and readonly controls. */
  public reloadAvailability(): void {
    if (this.effectiveDisabled() || this.isReadonly() || this.availabilityForCalendar()?.loading) return;

    if (!this.isOpen()) this.open();
    else if (this.lastRequest) this.onAvailabilityRequest({ ...this.lastRequest, revision: this.lastRequest.revision + 1, source: 'initial' });
  }

  /** Retry the last availability request with the same context. */
  public retryAvailability(): void {
    if (!this.lastRequest) return;

    const request: IDateAvailabilityRequest = { ...this.lastRequest, revision: this.lastRequest.revision + 1, source: 'retry' };

    this.retry.emit(request);
    void this.runResolver(request);
  }

  protected override clearPendingEdit(): void {
    super.clearPendingEdit();
    this.typedText.set('');
    this.typedStart.set('');
    this.typedEnd.set('');
    this.textEdited.set(false);
    this.parseError.set(null);
  }

  protected onFieldFocus(): void {
    this.fieldFocused.set(true);
  }

  protected onFieldBlur(event: FocusEvent): void {
    if (event.relatedTarget instanceof Node && this.nativeElement.contains(event.relatedTarget)) return;

    this.fieldFocused.set(false);
    this.markAsTouched();
  }

  protected onEscape(event: Event): void {
    if (!this.isOpen()) return;

    event.preventDefault();
    this.cancel();
  }

  protected onTriggerClick(event: Event): void {
    if (this.isReadonly()) return;

    const target = event.currentTarget;

    if (target instanceof HTMLElement) this.originElement.set(target.closest<HTMLElement>('.bx-date-field') ?? target);

    if (this.isOpen()) this.close();
    else this.open();
  }

  protected onCalendarRangeStart(date: IsoDate): void {
    this.draftValue.set({ start: date, end: null });
    this.typedStart.set(this.formatEndpoint(date));
    this.typedEnd.set('');
    this.parseError.set(null);
  }

  protected onCalendarValueChange(value: DatePickerValue): void {
    this.draftValue.set(value);
    this.textEdited.set(false);
    this.parseError.set(null);

    if (this.editable()) {
      this.typedText.set(this.formatValue(value));

      if (isDateRangeValue(value)) {
        this.typedStart.set(this.formatEndpoint(value.start));
        this.typedEnd.set(this.formatEndpoint(value.end));
      }
    }

    this.maybeImmediateCommit(value);
  }

  protected onPeriodPresetSelect(preset: IDatePreset): void {
    const resolved = this.safeResolvePreset(preset);

    if (!resolved) return;

    this.draftValue.set(resolved);

    if (this.editable()) this.typedText.set(this.formatValue(resolved));

    this.onCalendarValueChange(resolved);
  }

  protected onTypedInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.textEdited.set(true);
    this.typedText.set(target.value);
    this.parseError.set(null);
  }

  protected onTypedBlur(): void {
    this.commitTypedValue();
    this.markAsTouched();
  }

  protected onTypedKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.commitTypedValue();
    } else if (event.key === 'ArrowDown' && !this.isOpen()) {
      event.preventDefault();
      this.open();
    }
  }

  protected onRangeStartInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.textEdited.set(true);
    this.typedStart.set(target.value);
    this.parseError.set(null);
  }

  protected onRangeEndInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.textEdited.set(true);
    this.typedEnd.set(target.value);
    this.parseError.set(null);
  }

  protected onRangeStartBlur(): void {
    this.commitRangeEndpoint('start');
    this.markAsTouched();
  }

  protected onRangeEndBlur(): void {
    this.commitRangeEndpoint('end');
    this.markAsTouched();
  }

  protected onRangeKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.commitRangeEndpoint('start');
      this.commitRangeEndpoint('end');
    } else if (event.key === 'ArrowDown' && !this.isOpen()) {
      event.preventDefault();
      this.open();
    }
  }

  protected formatChipLabel(date: IsoDate): string {
    return this.formatEndpoint(date);
  }

  protected onSelectionRejected(reason: 'crossing' | 'min-length' | 'max-length' | 'limit' | 'endpoint'): void {
    this.parseError.set(reason);
  }

  protected onVisibleRange(range: ICalendarVisibleRange): void {
    this.visibleRangeChange.emit(range);
  }

  protected onAvailabilityRequest(request: IDateAvailabilityRequest): void {
    this.lastRequest = request;

    if (request.source === 'retry') this.retry.emit(request);
    else this.request.emit(request);

    void this.runResolver(request);
  }

  //#region Helpers

  private todayIso(): IsoDate {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: this.settings().timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(
      this.clock.now()
    );
    const read = (type: string): string => parts.find((part) => part.type === type)?.value ?? '';

    return `${read('year')}-${read('month')}-${read('day')}`;
  }

  private defaultPlaceholder(): string {
    return this.parseFormats()[0] ?? this.patternForMode(this.modeInfo().period);
  }

  private formatValue(value: DatePickerValue | null): string {
    if (!value) return '';

    if (typeof value === 'string') return this.formatEndpoint(value);

    if (Array.isArray(value)) {
      if (!value.length) return '';

      const first = this.formatEndpoint(value[0]);
      const extra = value.length - 1;

      return extra > 0 ? `${first} +${extra} ${this.resolvedMoreDatesLabel()}` : first;
    }

    if (isPeriodRangeValue(value)) {
      const start = this.formatEndpoint(value.start);
      const end = this.formatEndpoint(value.end);

      return value.start === value.end ? start : `${start} ${this.settings().rangeSeparator} ${end}`;
    }

    if (isDateRangeValue(value)) {
      const start = value.start ? this.formatEndpoint(value.start) : '';
      const end = value.end ? this.formatEndpoint(value.end) : '';

      if (start && end) return `${start} ${this.settings().rangeSeparator} ${end}`;

      return start || end;
    }

    return '';
  }

  private formatEndpoint(date: IsoDate | null): string {
    if (!date) return '';

    const info = this.modeInfo();
    const pattern = this.patternForMode(info.period);

    if (info.period === 'week') {
      const range = valueHighlightRange(this.mode(), date, this.settings().weekStartsOn);

      return range?.start && range.end
        ? `${formatIsoDate(range.start, 'dd MMM', this.formatContext())} ${this.settings().rangeSeparator} ${formatIsoDate(range.end, 'dd MMM yyyy', this.formatContext())}`
        : formatIsoDate(date, pattern, this.formatContext());
    }

    return formatIsoDate(date, pattern, this.formatContext());
  }

  private patternForMode(period: 'week' | 'month' | 'quarter' | 'year' | null): string {
    if (period === 'month') return this.settings().monthFormat;

    if (period === 'quarter') return this.settings().quarterFormat;

    if (period === 'year') return this.settings().yearFormat;

    return this.settings().dateFormat;
  }

  private rangeOf(value: DatePickerValue | null): IDateRange | null {
    return valueHighlightRange(this.mode(), value, this.settings().weekStartsOn);
  }

  private rangeStart(value: DatePickerValue | null): IsoDate | null {
    return this.rangeOf(value)?.start ?? null;
  }

  private rangeEnd(value: DatePickerValue | null): IsoDate | null {
    return this.rangeOf(value)?.end ?? null;
  }

  private isDraftComplete(value: DatePickerValue): boolean {
    if (!value) return false;

    if (typeof value === 'string') return true;

    if (Array.isArray(value)) return true;

    if (isPeriodRangeValue(value)) return !!value.start && !!value.end;

    if (isDateRangeValue(value)) return !!value.start && !!value.end;

    return false;
  }

  private maybeImmediateCommit(value: DatePickerValue): void {
    if (!this.isDraftComplete(value)) return;

    if (!this.commitDraft(value)) return;

    if (this.mode() !== 'multiple' && this.closeOnSelect()) this.close();
  }

  private commitDraft(value: DatePickerValue): boolean {
    if (this.effectiveDisabled() || this.isReadonly()) return false;

    const validation = this.validateDraft(value);

    if (!validation.valid) {
      this.parseError.set(validation.message);
      this.parseFailed.emit(this.dateValidationMessage(validation.message));

      return false;
    }

    const next = validation.value ?? value;

    this.parseError.set(null);
    this.textEdited.set(false);
    this.draftValue.set(next);

    if (this.editable()) {
      this.typedText.set(this.formatValue(next));
      this.typedStart.set(this.formatEndpoint(this.rangeStart(next)));
      this.typedEnd.set(this.formatEndpoint(this.rangeEnd(next)));
    }

    if (JSON.stringify(next) !== JSON.stringify(this.internalValue())) {
      this.updateValue(next);
      this.valueCommit.emit(next);
    }

    return true;
  }

  private validateDraft(value: DatePickerValue): { valid: boolean; message: string; value?: DatePickerValue } {
    if (value === null || (Array.isArray(value) && value.length === 0)) return { valid: true, message: '' };

    if (!this.isDraftComplete(value)) return { valid: false, message: 'incomplete' };

    const week = typeof value === 'string' && this.modeInfo().period === 'week' ? periodBounds(value, 'week', this.settings().weekStartsOn) : null;
    const dates = week ? enumerateDates(week.start, week.end) : typeof value === 'string' ? [value] : Array.isArray(value) ? value : [];
    const limit = this.selectionLimit();

    for (const date of dates) {
      if (!parseIsoDate(date)) return { valid: false, message: 'parse' };

      const restriction = dateRestriction(date, this.restrictionConfig());

      if (restriction.disabled) return { valid: false, message: restriction.reason ?? 'endpoint' };
    }

    if (Array.isArray(value) && limit !== null && value.length > limit) return { valid: false, message: 'limit' };

    if (isDateRangeValue(value) && value.start && value.end) {
      if (value.start > value.end) return { valid: false, message: 'order' };

      const end = this.modeInfo().period === 'week' ? periodBounds(value.end, 'week', this.settings().weekStartsOn).end : value.end;
      const result = validateDateRange(value.start, end, this.restrictionConfig(), {
        crossingPolicy: this.crossingPolicy(),
        minLength: this.minRangeLength(),
        maxLength: this.maxRangeLength(),
        allowSameDay: this.allowSameDay()
      });

      if (!result.valid) {
        const endpoint = dateRestriction(value.start, this.restrictionConfig()).reason ?? dateRestriction(end, this.restrictionConfig()).reason;

        return { valid: false, message: result.reason === 'endpoint' ? (endpoint ?? 'endpoint') : (result.reason ?? 'endpoint') };
      }

      if (this.modeInfo().period === 'week' && result.range.end !== end) return { valid: false, message: 'crossing' };

      return { valid: true, message: '', value: isPeriodRangeValue(value) ? value : { ...value, start: result.range.start, end: result.range.end } };
    }

    return { valid: true, message: '' };
  }

  private dateValidationMessage(reason: string): string {
    const override = this.invalidSelectionLabel();

    if (override !== undefined) return resolveText(override, this.i18n);

    const draft = this.draftValue();
    const start = isDateRangeValue(draft) ? draft.start : null;
    const context = {
      format: this.defaultPlaceholder(),
      min: this.min(),
      max: this.max(),
      start,
      minFormatted: this.formatEndpoint(this.min() ?? null),
      maxFormatted: this.formatEndpoint(this.max() ?? null),
      startFormatted: this.formatEndpoint(start),
      minLength: this.minRangeLength(),
      maxLength: this.maxRangeLength(),
      limit: this.selectionLimit()
    };

    const validation = { kind: DATE_VALIDATION_KINDS[reason] ?? 'dateDisabled', context };

    return resolveValidationMessage(
      validation,
      this.errorMessages(),
      { ...DATE_VALIDATION_MESSAGES, ...this.formSettingsService.settings().errorMessages },
      this.i18n
    );
  }

  private defaultPresets(): readonly IDatePreset[] {
    const info = this.modeInfo();
    const period = info.period;

    if (info.isRange) return defaultDateRangePresets();

    return [-1, 0, 1].map((delta) => ({
      id: `relative-${delta}`,
      label: period ? `${delta < 0 ? 'Previous' : delta > 0 ? 'Next' : 'This'} ${period}` : delta < 0 ? 'Yesterday' : delta > 0 ? 'Tomorrow' : 'Today',
      resolve: (context: IDatePresetContext) =>
        period === 'year'
          ? context.calendar.addYears(context.today, delta, context.locale)
          : period === 'month' || period === 'quarter'
            ? context.calendar.addMonths(context.today, delta * (period === 'quarter' ? 3 : 1), context.locale)
            : addDays(context.today, delta * (period === 'week' ? 7 : 1))
    }));
  }

  private normalizePresetValue(value: DatePickerValue): DatePickerValue {
    if (!value) return null;

    const info = this.modeInfo();
    const anchors = valueAnchors(this.mode(), value);
    const start = anchors.start;
    const end = anchors.end ?? start;

    if (!start || !end) return null;

    if (info.selection === 'multiple') return Array.isArray(value) ? value : enumerateDates(start, end);

    const anchor = (date: IsoDate): IsoDate => (info.period ? periodBounds(date, info.period, this.settings().weekStartsOn).start : date);

    if (!info.isRange) return anchor(end);

    return buildSelectionValue(this.mode(), anchor(start), anchor(end), this.settings().weekStartsOn);
  }

  private safeResolvePreset(preset: IDatePreset): DatePickerValue {
    try {
      return this.normalizePresetValue(preset.resolve(this.presetContext()));
    } catch {
      return null;
    }
  }

  private commitTypedValue(): void {
    if (!this.editable() || !this.textEdited() || this.effectiveDisabled() || this.isReadonly()) return;

    const text = this.typedText().trim();

    if (!text) {
      this.commitDraft(null);

      return;
    }

    const parsed = this.parseTypedText(text);

    if (!parsed) {
      this.parseError.set('parse');
      this.parseFailed.emit(text);

      return;
    }

    this.draftValue.set(parsed);
    this.commitDraft(parsed);
  }

  private commitRangeEndpoint(endpoint: 'start' | 'end'): void {
    if (!this.textEdited()) return;

    if (!this.editable() || this.effectiveDisabled() || this.isReadonly()) return;

    const startText = this.typedStart().trim();
    const endText = this.typedEnd().trim();

    if (!startText && !endText) {
      this.commitDraft(null);

      return;
    }

    const start = startText ? this.parseSingleDate(startText) : null;
    const end = endText ? this.parseSingleDate(endText) : null;

    if ((startText && !start) || (endText && !end)) {
      this.parseError.set('parse');
      this.parseFailed.emit(endpoint === 'start' ? startText : endText);

      return;
    }

    const period = this.modeInfo().period;
    const next: IDateRange | IPeriodRange = period && start && end ? { start, end, kind: period } : { start, end };

    this.draftValue.set(next);

    if (start && end && this.commitDraft(next)) {
      this.typedStart.set(this.formatEndpoint(this.rangeStart(this.draftValue())));
      this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.draftValue())));
    } else if (!start || !end) {
      this.parseError.set('incomplete');
    }
  }

  private parseTypedText(text: string): DatePickerValue | null {
    const mode = this.mode();
    const separator = this.settings().rangeSeparator;
    const modeInfo = this.modeInfo();

    if (modeInfo.selection === 'range') {
      const parts = text.split(separator).map((part) => part.trim());

      if (parts.length < 2) return null;

      const start = this.parseSingleDate(parts[0]);
      const end = this.parseSingleDate(parts[1]);

      if (!start || !end) return null;

      return mode === 'range' ? { start, end } : { start, end, kind: modeInfo.period ?? 'month' };
    }

    if (mode === 'multiple') {
      const dates = text.split(',').map((part) => this.parseSingleDate(part.trim()));

      return dates.length && dates.every((date): date is IsoDate => date !== null) ? [...new Set(dates)].sort() : null;
    }

    return this.parseSingleDate(text);
  }

  private parseSingleDate(text: string): IsoDate | null {
    if (this.allowNaturalLanguage()) {
      const natural = parseNaturalDate(text, {
        now: this.clock.now(),
        timeZone: this.settings().timeZone,
        locale: this.settings().locale,
        calendar: this.adapter(),
        weekStartsOn: this.settings().weekStartsOn
      });

      if (natural.value) return this.modeInfo().period === 'week' ? periodBounds(natural.value, 'week', this.settings().weekStartsOn).start : natural.value;
    }

    const parseContext = { locale: this.settings().locale, calendar: this.adapter() };

    if (this.modeInfo().period === 'week') {
      const parts = text.split(this.settings().rangeSeparator);
      const endpoint = parts.length === 2 ? parseDateInput(parts[1].trim(), 'dd MMM yyyy', parseContext).value : null;
      const anchor = endpoint ? periodBounds(endpoint, 'week', this.settings().weekStartsOn).start : null;

      if (anchor && this.formatEndpoint(anchor) === text.trim()) return anchor;
    }

    const patterns = this.parseFormats().length
      ? this.parseFormats()
      : this.modeInfo().period
        ? [this.patternForMode(this.modeInfo().period), this.settings().dateFormat]
        : [this.settings().dateFormat, 'yyyy-MM-dd'];

    for (const pattern of patterns) {
      const parsed = parseDateInput(text, pattern, parseContext);

      if (parsed.value) return this.modeInfo().period === 'week' ? periodBounds(parsed.value, 'week', this.settings().weekStartsOn).start : parsed.value;
    }

    return null;
  }

  private async runResolver(request: IDateAvailabilityRequest): Promise<void> {
    const resolver = this.resolver();

    if (!resolver || this.availability()) return;

    const token = ++this.resolverToken;
    const context = `${request.calendar}|${request.locale}|${request.timeZone}`;

    if (context !== this.resolverContext) this.availabilityState.set(undefined);

    this.resolverContext = context;
    this.availabilityState.set({ dates: this.availabilityState()?.dates ?? [], loading: true, revision: request.revision });

    try {
      const result = await resolver(request);

      if (token !== this.resolverToken) return;

      this.availabilityState.set({
        dates: mergeDateMetadata(this.availabilityState()?.dates, result?.dates ?? [], request),
        loading: false,
        revision: request.revision,
        retryable: true
      });
    } catch {
      if (token !== this.resolverToken) return;

      this.availabilityState.set({
        dates: this.availabilityState()?.dates ?? [],
        loading: false,
        error: this.loadErrorMessage(),
        retryable: true,
        revision: request.revision
      });
    }
  }

  //#endregion
}
