import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  signal,
  TemplateRef,
  viewChild
} from '@angular/core';

import type {
  CalendarNameForm,
  ICalendarAdapter,
  IDateAvailability,
  IDateAvailabilityRequest,
  IDateFormatContext,
  IDateMetadata,
  IDateModeInfo,
  IDateRestrictionConfig,
  IDateTimeConfig,
  PeriodKind
} from '@filip.mazev/blocks/core';
import type { ICalendarRetryContext } from '@primitives/interfaces/icalendar-retry-context.interface';
import type {
  CalendarViewMode,
  ICalendarDayCell,
  ICalendarDayContext,
  ICalendarMonthGrid,
  ICalendarPeriodCell,
  ICalendarPeriodContext,
  ICalendarVisibleRange,
  ICalendarWeekNumberContext
} from '@primitives/types/calendar.types';

import {
  addDays,
  BX_CLOCK,
  BX_I18N,
  BxDateTimeConfigService,
  dateModeInfo,
  DatePickerMode,
  DatePickerValue,
  dateRestriction,
  DateRestrictionReason,
  formatIsoDate,
  IDateRange,
  IPeriodRange,
  isDateInRange,
  isDateRangeValue,
  IsoDate,
  isPeriodRangeValue,
  ResolvableText,
  resolveText
} from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';

import { LoadingIndicator } from '@primitives/components/loading-indicator/loading-indicator';
import {
  buildMonthGrid,
  buildPeriodGrid,
  findYearStart,
  periodAnchor,
  periodAnchorEnd,
  selectionPeriodBounds,
  stepView
} from '@primitives/helpers/calendar-grid.helpers';

/**
 * Inline, reusable Blocks calendar.
 *
 * The calendar owns selection state, navigation, restrictions, keyboard focus and range preview; it is independent of Forms so applications can embed it
 * on its own. The Forms date picker composes this view inside its field and overlays.
 */
@Component({
  selector: 'bx-calendar',
  imports: [Icon, LoadingIndicator, NgTemplateOutlet],
  templateUrl: './calendar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calendar.scss'
})
export class Calendar {
  private readonly bxDateTimeConfigService = inject(BxDateTimeConfigService);
  private readonly clock = inject(BX_CLOCK);
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly focusDateState: WritableSignal<IsoDate | null> = signal<IsoDate | null>(null);
  private readonly draftStart: WritableSignal<IsoDate | null> = signal<IsoDate | null>(null);
  private readonly previewFocusDate: WritableSignal<IsoDate | null> = signal<IsoDate | null>(null);
  private readonly hoverDate: WritableSignal<IsoDate | null> = signal<IsoDate | null>(null);
  private readonly viewModeState: WritableSignal<CalendarViewMode | null> = signal<CalendarViewMode | null>(null);

  private readonly retryRevision: WritableSignal<number> = signal(0);

  private readonly gridElement: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('grid');

  protected readonly settings: Signal<IDateTimeConfig> = computed(() =>
    this.bxDateTimeConfigService.resolve({
      locale: this.locale(),
      calendar: this.calendarId(),
      timeZone: this.timeZone(),
      weekStartsOn: this.weekStartsOn(),
      minimalDaysInFirstWeek: this.minimalDaysInFirstWeek()
    })
  );
  protected readonly adapter: Signal<ICalendarAdapter> = computed(() => this.bxDateTimeConfigService.adapter(this.settings().calendar));
  protected readonly modeInfo: Signal<IDateModeInfo> = computed(() => dateModeInfo(this.mode()));
  protected readonly today: Signal<IsoDate> = computed(() => {
    const instant = this.clock.now();
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: this.settings().timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(
      instant
    );
    const read = (type: string): string => parts.find((part) => part.type === type)?.value ?? '';

    return `${read('year')}-${read('month')}-${read('day')}`;
  });
  protected readonly effectiveViewDate: Signal<IsoDate> = computed(() => this.viewDate() ?? this.valueAnchor() ?? this.today());
  protected readonly viewMode: Signal<CalendarViewMode> = computed<CalendarViewMode>(() => {
    const explicit = this.viewModeState();

    if (explicit) return explicit;

    const configured = this.startView();

    if (configured) return configured;

    const period = this.modeInfo().period;

    if (period === 'month') return 'months';

    if (period === 'quarter') return 'quarters';

    if (period === 'year') return 'years';

    return 'days';
  });
  protected readonly adapterContext: Signal<IDateFormatContext> = computed(() => ({
    locale: this.settings().locale,
    calendar: this.adapter(),
    weekStartsOn: this.settings().weekStartsOn,
    minimalDaysInFirstWeek: this.settings().minimalDaysInFirstWeek
  }));
  protected readonly previousDisabled: Signal<boolean> = computed(() => !this.canNavigate(-1));
  protected readonly nextDisabled: Signal<boolean> = computed(() => !this.canNavigate(1));
  protected readonly weekdayNames: Signal<readonly string[]> = computed(() => {
    const names = this.adapter().getWeekdayNames(this.settings().locale, this.weekdayNameFormat());

    return Array.from({ length: 7 }, (_, index) => names[(this.settings().weekStartsOn + index) % 7]);
  });
  protected readonly weekdayFullNames: Signal<readonly string[]> = computed(() => {
    const names = this.adapter().getWeekdayNames(this.settings().locale, 'long');

    return Array.from({ length: 7 }, (_, index) => names[(this.settings().weekStartsOn + index) % 7]);
  });
  protected readonly monthGrids: Signal<readonly ICalendarMonthGrid[]> = computed(() => {
    const anchor = this.effectiveViewDate();
    const months = Math.max(1, Math.min(4, this.months()));

    return Array.from({ length: months }, (_, index) =>
      buildMonthGrid(
        this.adapter().addMonths(anchor, index, this.settings().locale),
        this.adapter(),
        this.settings().locale,
        this.settings().weekStartsOn,
        this.settings().minimalDaysInFirstWeek,
        this.fixedWeeks(),
        this.monthNameFormat()
      )
    );
  });
  protected readonly visibleRange: Signal<ICalendarVisibleRange> = computed<ICalendarVisibleRange>(() => {
    const grids = this.monthGrids();
    const first = grids[0]?.cells[0]?.date ?? this.today();
    const last = grids[grids.length - 1]?.cells.at(-1)?.date ?? this.today();

    return { start: first, end: last, monthKeys: grids.map((grid) => grid.key) };
  });
  protected readonly metadataMap: Signal<ReadonlyMap<IsoDate, IDateMetadata>> = computed<ReadonlyMap<IsoDate, IDateMetadata>>(() => {
    const map = new Map<IsoDate, IDateMetadata>();

    for (const entry of this.availability()?.dates ?? []) map.set(entry.date, entry);

    for (const entry of this.metadata()) if (!map.has(entry.date)) map.set(entry.date, entry);

    return map;
  });
  protected readonly availabilityActive: Signal<boolean> = computed(() => this.availability() !== undefined);
  protected readonly availabilityLoading: Signal<boolean> = computed(() => this.availability()?.loading === true);
  protected readonly availabilityError: Signal<string> = computed(() => resolveText(this.availability()?.error, this.i18n));
  protected readonly availabilityEmpty: Signal<boolean> = computed(() => {
    const availability = this.availability();

    return !!availability && !availability.loading && !availability.error && (availability.dates?.length ?? 0) === 0 && (availability.revision ?? 0) > 0;
  });
  protected readonly resolvedLoadingLabel: Signal<string> = computed(() => resolveText(this.loadingLabel(), this.i18n));
  protected readonly resolvedRetryLabel: Signal<string> = computed(() => resolveText(this.retryLabel(), this.i18n));
  protected readonly retryContext: Signal<ICalendarRetryContext> = computed(() => ({ label: this.resolvedRetryLabel(), retry: () => this.retry() }));
  protected readonly resolvedEmptyLabel: Signal<string> = computed(() => resolveText(this.emptyLabel(), this.i18n));
  protected readonly resolvedAriaLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly resolvedPreviousLabel: Signal<string> = computed(() => resolveText(this.previousLabel(), this.i18n));
  protected readonly resolvedNextLabel: Signal<string> = computed(() => resolveText(this.nextLabel(), this.i18n));
  protected readonly todayDisabled: Signal<boolean> = computed(() => this.readOnly() || this.evaluateRestriction(this.today()).disabled);
  protected readonly resolvedTodayLabel: Signal<string> = computed(() => resolveText(this.todayLabel(), this.i18n));
  protected readonly restrictionConfig: Signal<IDateRestrictionConfig> = computed(() => ({
    min: this.min(),
    max: this.max(),
    disabledDates: this.disabledDates(),
    disabledIntervals: this.disabledIntervals(),
    disabledWeekdays: this.disabledWeekdays(),
    isDateDisabled: this.dateFilter(),
    metadata: [...this.metadataMap().values()],
    blockUnknownAvailability: this.blockUnverifiedAvailability()
  }));
  protected readonly dayCellGroups: Signal<readonly (readonly ICalendarDayCell[])[]> = computed<readonly (readonly ICalendarDayCell[])[]>(() => {
    const committed = this.draftStart() ? null : this.committedRange();
    const preview = this.draftPreview();
    const selectedDates = this.draftStart() ? new Set<IsoDate>() : this.selectedSet();
    const focus = this.focusCellDate();
    const today = this.today();

    return this.monthGrids().map((grid) =>
      grid.cells.map((cell) => {
        const restriction = this.evaluateRestriction(cell.date);
        const metadata = this.metadataMap().get(cell.date);
        const committedDay = !!committed && isDateInRange(cell.date, committed);
        const previewDay = !!preview && isDateInRange(cell.date, preview);
        const isPreview = previewDay && !committedDay;
        const range = isPreview ? preview : committed;
        const inRange = committedDay || previewDay;

        return {
          date: cell.date,
          day: cell.day,
          inMonth: cell.inMonth,
          inRange,
          isRangeStart: !!range?.start && cell.date === range.start,
          isRangeEnd: !!range?.end && cell.date === range.end,
          isPreview,
          isSelected: selectedDates.has(cell.date) || committedDay,
          isToday: cell.date === today,
          isWeekend: cell.weekday === 0 || cell.weekday === 6,
          disabled: restriction.disabled || this.readOnly(),
          restriction: restriction.reason,
          metadata,
          weekNumber: cell.weekNumber,
          tabIndex: cell.date === focus ? 0 : -1,
          label: this.dayLabel(cell.date, metadata)
        };
      })
    );
  });
  protected readonly dayCells: Signal<readonly ICalendarDayCell[]> = computed<readonly ICalendarDayCell[]>(() => this.dayCellGroups().flat());
  protected readonly weekRows: Signal<readonly (readonly (readonly ICalendarDayCell[])[])[]> = computed(() =>
    this.dayCellGroups().map((cells) => {
      const rows: ICalendarDayCell[][] = [];

      for (let index = 0; index < cells.length; index += 7) rows.push(cells.slice(index, index + 7));

      return rows;
    })
  );
  protected readonly periodGrid: Signal<{ label: string; cells: readonly ICalendarPeriodCell[] }> = computed(() => {
    const view = this.viewMode();

    if (view === 'days') return { label: '', cells: [] as readonly ICalendarPeriodCell[] };

    const grid = buildPeriodGrid(view, this.effectiveViewDate(), this.adapter(), this.settings().locale, this.settings().weekStartsOn, this.monthNameFormat());
    const kind = view === 'months' ? 'month' : view === 'quarters' ? 'quarter' : view === 'years' ? 'year' : 'decade';
    const committed = this.draftStart() ? null : this.committedRange();
    const preview = this.draftPreview();
    const selectionView = kind === this.modeInfo().period;
    const focus = this.focusCellDate();

    return {
      label: grid.label,
      cells: grid.cells.map<ICalendarPeriodCell>((cell) => {
        const restriction = this.evaluateRestriction(cell.date);
        const periodKind = kind === 'decade' ? 'year' : kind;
        const bounds = this.previewPeriodBounds(cell.date, periodKind);
        const committedPeriod = selectionView && !!committed?.start && !!committed.end && cell.date <= committed.end && bounds.end >= committed.start;
        const previewPeriod = selectionView && !!preview?.start && !!preview.end && cell.date <= preview.end && bounds.end >= preview.start;
        const isPreview = previewPeriod && !committedPeriod;
        const range = isPreview ? preview : committed;
        const selected = selectionView ? committedPeriod : this.sameView(cell.date, this.effectiveViewDate());
        const inRange = selectionView && this.modeInfo().isRange && (committedPeriod || previewPeriod);

        return {
          date: cell.date,
          label: cell.label,
          kind,
          index: cell.index,
          inPeriod: cell.inPeriod,
          inRange,
          isPreview,
          isRangeStart: inRange && !!range?.start && cell.date <= range.start && bounds.end >= range.start,
          isRangeEnd: inRange && !!range?.end && cell.date <= range.end && bounds.end >= range.end,
          isSelected: selected,
          isToday: kind !== 'decade' && cell.date <= this.today() && bounds.end >= this.today(),
          disabled: (restriction.disabled && !this.periodContainsSelectable(cell.date, periodKind, bounds.end)) || this.readOnly(),
          tabIndex: cell.date === focus ? 0 : -1
        };
      })
    };
  });
  protected readonly headerLabel: Signal<string> = computed(() => {
    const view = this.viewMode();

    if (view === 'days') {
      const grids = this.monthGrids();

      return grids.length > 1 ? `${grids[0]?.label ?? ''} – ${grids[grids.length - 1]?.label ?? ''}` : (grids[0]?.label ?? '');
    }

    return this.periodGrid().label;
  });
  protected readonly headerStepLabel: Signal<string> = computed(() => (this.viewMode() === 'days' ? 'month' : this.viewMode()));
  protected readonly hasMultipleMonths: Signal<boolean> = computed(() => this.months() > 1);

  /** Localized weekday heading length. Defaults to narrow initials; full weekday names remain available to assistive technology. */
  public readonly weekdayNameFormat: InputSignal<CalendarNameForm> = input<CalendarNameForm>('narrow');
  /** Localized month heading and month-cell length. Defaults to short abbreviations. */
  public readonly monthNameFormat: InputSignal<CalendarNameForm> = input<CalendarNameForm>('short');
  /** Selection mode rendered by the calendar. Defaults to `'single'`. */
  public readonly mode: InputSignal<DatePickerMode> = input<DatePickerMode>('single');

  /** Current canonical selection; two-way bound. Supports date, multiple-date, range and period values by mode. Defaults to `null`. */
  public readonly value: ModelSignal<DatePickerValue> = model<DatePickerValue>(null);
  /** Visible month anchor; two-way bound and updated by navigation and keyboard movement. Optional; omission follows the selection. */
  public readonly viewDate: ModelSignal<IsoDate | null> = model<IsoDate | null>(null);

  /** Optional initial view; omission follows the selection mode. Header and keyboard navigation can subsequently change it. */
  public readonly startView: InputSignal<CalendarViewMode | undefined> = input<CalendarViewMode | undefined>(undefined);
  /** Optional per-instance locale; omission uses shared date-time defaults. Optional. */
  public readonly locale: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional per-instance calendar identifier; omission uses shared date-time defaults. Optional. */
  public readonly calendarId: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional per-instance IANA time zone used to resolve today; omission uses shared defaults. Optional. */
  public readonly timeZone: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional zero-based first day of the week; omission uses shared locale defaults. Optional. */
  public readonly weekStartsOn: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Optional minimum days in the first week of a year; omission uses shared locale defaults. Optional. */
  public readonly minimalDaysInFirstWeek: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Number of contiguous months rendered side by side, clamped from 1 to 4. Defaults to `1`. */
  public readonly months: InputSignalWithTransform<number, unknown> = input(1, { transform: numberAttribute });
  /** Whether the day grid always renders six complete weeks for stable panel height. Defaults to `true`. */
  public readonly fixedWeeks: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether localized week numbers render in a leading column. Defaults to `false`. */
  public readonly showWeekNumbers: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether adjacent-month days are rendered and selectable. Defaults to `true`. */
  public readonly showAdjacentDays: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the current day receives today styling. Defaults to `true`. */
  public readonly showToday: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the footer renders the Today shortcut. Defaults to `true`. */
  public readonly showTodayButton: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Earliest selectable date; null leaves the lower bound open. Optional. */
  public readonly min: InputSignal<IsoDate | null | undefined> = input<IsoDate | null | undefined>(undefined);
  /** Latest selectable date; null leaves the upper bound open. Optional. */
  public readonly max: InputSignal<IsoDate | null | undefined> = input<IsoDate | null | undefined>(undefined);
  /** Individual dates that cannot be selected. Defaults to an empty array. */
  public readonly disabledDates: InputSignal<readonly IsoDate[]> = input<readonly IsoDate[]>([]);
  /** Inclusive intervals that cannot be selected. Defaults to an empty array. */
  public readonly disabledIntervals: InputSignal<readonly IDateRange[]> = input<readonly IDateRange[]>([]);
  /** Zero-based weekdays that cannot be selected. Defaults to an empty array. */
  public readonly disabledWeekdays: InputSignal<readonly number[]> = input<readonly number[]>([]);
  /** Application predicate returning true when a date cannot be selected. Optional. */
  public readonly dateFilter: InputSignal<((date: IsoDate) => boolean) | undefined> = input<((date: IsoDate) => boolean) | undefined>(undefined);
  /** Static availability or presentation metadata for dates. Defaults to an empty array. */
  public readonly metadata: InputSignal<readonly IDateMetadata[]> = input<readonly IDateMetadata[]>([]);
  /** Consumer-managed asynchronous availability state for the visible range. Optional. */
  public readonly availability: InputSignal<IDateAvailability | undefined> = input<IDateAvailability | undefined>(undefined);
  /** Whether dates without loaded availability metadata are treated as unknown and cannot be selected. Defaults to `true`. */
  public readonly blockUnverifiedAvailability: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
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
  /** Whether selection is blocked while navigation stays available. Defaults to `false`. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Accessible name of the calendar grid; translation keys resolve through BX_I18N. Defaults to `'Calendar'`. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>('Calendar');
  /** Visible busy text while availability loads; translation keys resolve through BX_I18N. Optional. */
  public readonly loadingLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional availability-retry template. Receives the resolved label and guarded retry callback; omission uses the primitive text-action fallback. */
  public readonly retryTemplate: InputSignal<TemplateRef<ICalendarRetryContext> | undefined> = input<TemplateRef<ICalendarRetryContext> | undefined>(undefined);
  /** Visible retry action label; translation keys resolve through BX_I18N. Defaults to `'Retry'`. */
  public readonly retryLabel: InputSignal<ResolvableText> = input<ResolvableText>('Retry');
  /** Visible message when a request succeeds with no availability; translation keys resolve through BX_I18N. Defaults to `'No dates available.'`. */
  public readonly emptyLabel: InputSignal<ResolvableText> = input<ResolvableText>('No dates available.');
  /** Accessible name of the previous-period action; translation keys resolve through BX_I18N. Defaults to `'Previous period'`. */
  public readonly previousLabel: InputSignal<ResolvableText> = input<ResolvableText>('Previous period');
  /** Accessible name of the next-period action; translation keys resolve through BX_I18N. Defaults to `'Next period'`. */
  public readonly nextLabel: InputSignal<ResolvableText> = input<ResolvableText>('Next period');
  /** Optional translated Today shortcut. Omission or empty text hides the action and its space. */
  public readonly todayLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional custom day-cell template; the host grid keeps selection, keyboard and ARIA behavior. Optional. */
  public readonly dayTemplate: InputSignal<TemplateRef<ICalendarDayContext> | undefined> = input<TemplateRef<ICalendarDayContext> | undefined>(undefined);
  /** Optional custom period-cell template for month, quarter, year and decade cells. Optional. */
  public readonly periodTemplate: InputSignal<TemplateRef<ICalendarPeriodContext> | undefined> = input<TemplateRef<ICalendarPeriodContext> | undefined>(
    undefined
  );
  /** Optional custom week-number template. Optional. */
  public readonly weekNumberTemplate: InputSignal<TemplateRef<ICalendarWeekNumberContext> | undefined> = input<
    TemplateRef<ICalendarWeekNumberContext> | undefined
  >(undefined);

  /** Emits the currently displayed day, month, quarter, year or decade view, including the initial view. */
  public readonly viewChange: OutputEmitterRef<CalendarViewMode> = output<CalendarViewMode>();
  /** Emits a normalized month anchor when a month is chosen, before final day selection. */
  public readonly monthSelected: OutputEmitterRef<IsoDate> = output<IsoDate>();
  /** Emits a normalized year anchor when a year is chosen, before final month/day selection. */
  public readonly yearSelected: OutputEmitterRef<IsoDate> = output<IsoDate>();
  /** Emits after a date or period is committed by pointer or keyboard interaction. */
  public readonly dateSelect: OutputEmitterRef<IsoDate> = output<IsoDate>();
  /** Emits the first date or period anchor of an incomplete range, without committing the calendar value. */
  public readonly rangeStart: OutputEmitterRef<IsoDate> = output<IsoDate>();
  /** Emits when a range selection fails validation, with the machine-readable reason. */
  public readonly selectionRejected: OutputEmitterRef<'crossing' | 'min-length' | 'max-length' | 'limit' | 'endpoint'> = output<
    'crossing' | 'min-length' | 'max-length' | 'limit' | 'endpoint'
  >();
  /** Emits whenever the rendered range changes, before the availability request event. */
  public readonly visibleRangeChange: OutputEmitterRef<ICalendarVisibleRange> = output<ICalendarVisibleRange>();
  /** Emits a typed availability request for the rendered range. */
  public readonly requestAvailability: OutputEmitterRef<IDateAvailabilityRequest> = output<IDateAvailabilityRequest>();
  /** Emits when the user asks to retry a failed availability request. */
  public readonly retryAvailability: OutputEmitterRef<IDateAvailabilityRequest> = output<IDateAvailabilityRequest>();

  private lastRequestSignature: string = '';

  constructor() {
    effect(() => this.viewChange.emit(this.viewMode()));
    effect(() => {
      const value = this.value();
      const info = this.modeInfo();

      this.draftStart.set(info.selection === 'range' && isDateRangeValue(value) && !value.end ? value.start : null);
      this.hoverDate.set(null);
    });

    effect(() => {
      const range = this.visibleRange();
      const settings = this.settings();
      const revision = this.retryRevision();
      const signature = `${settings.calendar}|${settings.locale}|${settings.timeZone}|${range.start}|${range.end}|${revision}`;

      if (signature === this.lastRequestSignature) return;

      const previous = this.lastRequestSignature.split('|');
      const previousTimeZone = previous[2];
      const source: IDateAvailabilityRequest['source'] = !this.lastRequestSignature
        ? 'initial'
        : revision > 0 && signature.endsWith(`|${revision}`) && previous.length === 6 && previous[5] === String(revision - 1)
          ? 'retry'
          : previousTimeZone !== settings.timeZone
            ? 'timezone'
            : 'navigate';

      this.lastRequestSignature = signature;
      this.visibleRangeChange.emit(range);
      this.requestAvailability.emit({
        start: range.start,
        end: range.end,
        monthKeys: range.monthKeys,
        calendar: settings.calendar,
        locale: settings.locale,
        timeZone: settings.timeZone,
        revision,
        source
      });
    });
  }

  /** Move the calendar view to the current date without changing the selection. */
  public goToToday(): void {
    this.viewDate.set(this.today());
    this.viewModeState.set(this.modeInfo().period ? null : 'days');
    this.focusDateState.set(this.today());
  }

  /** Select today's date or period using the current mode and restrictions, then navigate to it. */
  public selectToday(): void {
    const today = this.today();

    if (this.readOnly() || this.evaluateRestriction(today).disabled) return;

    this.goToToday();

    if (this.mode() === 'multiple' && Array.isArray(this.value()) && (this.value() as readonly IsoDate[]).includes(today)) return;

    this.selectDate(today, true);
  }

  /** Retry the current visible-range availability request with the same context and a new revision. */
  public retry(): void {
    if (this.availabilityLoading() || this.availability()?.retryable === false) return;

    this.retryRevision.update((revision) => revision + 1);
  }

  /**
   * Move keyboard focus to a canonical date, updating the view when it falls outside the rendered range.
   *
   * @param date - Canonical date that should receive focus.
   */
  public focusDate(date: IsoDate): void {
    this.focusDateState.set(date);
    this.viewDate.set(date);
    this.focusRenderedCell(date);
  }

  protected dayContext(cell: ICalendarDayCell): ICalendarDayContext {
    return {
      $implicit: cell,
      selected: cell.isSelected,
      inRange: cell.inRange,
      endpoint: cell.isRangeStart || cell.isRangeEnd,
      today: cell.isToday,
      disabled: cell.disabled,
      metadata: cell.metadata
    };
  }

  protected periodContext(cell: ICalendarPeriodCell): ICalendarPeriodContext {
    return { $implicit: cell, selected: cell.isSelected, inRange: cell.inRange, endpoint: cell.isRangeStart || cell.isRangeEnd, disabled: cell.disabled };
  }

  protected weekContext(row: readonly ICalendarDayCell[]): ICalendarWeekNumberContext {
    return { $implicit: row[0]?.weekNumber ?? '', weekStart: row[0]?.date ?? this.today() };
  }

  protected onDayFocus(cell: ICalendarDayCell): void {
    this.focusDateState.set(cell.date);
    this.previewFocusDate.set(cell.disabled ? null : cell.date);
  }

  protected onPeriodFocus(cell: ICalendarPeriodCell): void {
    this.focusDateState.set(cell.date);
    this.previewFocusDate.set(cell.disabled ? null : cell.date);
  }

  protected onPeriodHover(cell: ICalendarPeriodCell): void {
    if (cell.disabled || this.readOnly()) return;

    this.hoverDate.set(cell.date);
  }

  protected onGridBlur(event: FocusEvent): void {
    const target = event.relatedTarget;

    if (target instanceof HTMLElement && this.gridElement()?.nativeElement.contains(target) && target.hasAttribute('data-focus-date')) return;

    this.previewFocusDate.set(null);
  }

  protected onDayClick(cell: ICalendarDayCell, event: MouseEvent): void {
    if (cell.disabled || this.readOnly()) return;

    event.preventDefault();
    this.focusDateState.set(cell.date);
    this.selectDate(cell.date, cell.inMonth);
  }

  protected onDayHover(cell: ICalendarDayCell): void {
    if (cell.disabled || this.readOnly() || (!this.draftStart() && this.modeInfo().period !== 'week')) return;

    this.hoverDate.set(cell.date);
  }

  protected onGridLeave(): void {
    this.hoverDate.set(null);
  }

  protected onPeriodClick(cell: ICalendarPeriodCell, event: MouseEvent): void {
    if (cell.disabled || this.readOnly()) return;

    event.preventDefault();
    this.focusDateState.set(cell.date);

    const view = this.viewMode();
    const period = this.modeInfo().period;

    if (view === 'months') this.monthSelected.emit(cell.date);
    else if (view === 'years') this.yearSelected.emit(cell.date);

    if (view === 'months' && period === 'month') {
      this.selectPeriod(cell.date);

      return;
    }

    if (view === 'quarters' && period === 'quarter') {
      this.selectPeriod(cell.date);

      return;
    }

    if (view === 'years') {
      if (period === 'year') {
        this.selectPeriod(cell.date);
      } else {
        this.viewDate.set(cell.date);
        this.viewModeState.set(period === 'quarter' ? 'quarters' : period === 'month' ? 'months' : 'months');
      }

      return;
    }

    if (view === 'decades') {
      this.viewDate.set(cell.date);
      this.viewModeState.set('years');

      return;
    }

    this.viewDate.set(cell.date);
    this.viewModeState.set('days');
  }

  protected onHeaderClick(): void {
    this.hoverDate.set(null);
    this.previewFocusDate.set(null);

    const view = this.viewMode();

    if (view === 'days') this.viewModeState.set(this.modeInfo().period === 'quarter' ? 'quarters' : 'months');
    else if (view === 'months' || view === 'quarters') this.viewModeState.set('years');
    else if (view === 'years') this.viewModeState.set('decades');
  }

  protected onHeaderKey(event: KeyboardEvent): void {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    this.onHeaderClick();
  }

  protected onPrevious(): void {
    this.hoverDate.set(null);
    this.previewFocusDate.set(null);

    if (this.previousDisabled()) return;

    this.viewDate.set(stepView(this.effectiveViewDate(), this.viewMode(), -1, this.adapter(), this.settings().locale));
  }

  protected onNext(): void {
    this.hoverDate.set(null);
    this.previewFocusDate.set(null);

    if (this.nextDisabled()) return;

    this.viewDate.set(stepView(this.effectiveViewDate(), this.viewMode(), 1, this.adapter(), this.settings().locale));
  }

  protected onGridKeydown(event: KeyboardEvent): void {
    if (
      event.defaultPrevented ||
      event.ctrlKey ||
      event.metaKey ||
      (event.altKey && event.key !== 'PageUp' && event.key !== 'PageDown') ||
      (event.target instanceof HTMLElement && event.target.closest('.bx-calendar-header, .bx-calendar-footer'))
    )
      return;

    const dates = this.focusableDates();

    if (!dates.length) return;

    const current = this.focusCellDate();
    const index = Math.max(0, dates.indexOf(current ?? dates[0]));
    const columns = this.viewMode() === 'days' ? 7 : this.viewMode() === 'months' ? 3 : 4;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.viewMode() === 'days') {
        const cell = this.dayCells().find((candidate) => candidate.date === dates[index]);

        if (cell) this.onDayClick(cell, new MouseEvent('click'));
      } else {
        const cell = this.periodGrid().cells[index];

        if (cell) this.onPeriodClick(cell, new MouseEvent('click'));
      }

      return;
    }

    const view = this.viewMode();
    const locale = this.settings().locale;
    const adapter = this.adapter();
    const base = current ?? dates[0];
    const direction =
      event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : event.key === 'ArrowDown' ? columns : event.key === 'ArrowUp' ? -columns : 0;
    const page = event.key === 'PageDown' ? 1 : event.key === 'PageUp' ? -1 : 0;

    let target: IsoDate | undefined;

    if (view === 'days') {
      if (direction) {
        const grid = this.gridElement()?.nativeElement;
        const rtl = grid?.ownerDocument.defaultView?.getComputedStyle(grid).direction === 'rtl';
        const delta = (event.key === 'ArrowLeft' || event.key === 'ArrowRight') && rtl ? -direction : direction;

        target = addDays(base, delta);
      } else if (page) target = event.altKey ? adapter.addYears(base, page, locale) : adapter.addMonths(base, page, locale);
      else if (event.key === 'Home' || event.key === 'End') {
        const month = buildMonthGrid(base, adapter, locale, this.settings().weekStartsOn, this.settings().minimalDaysInFirstWeek, true).cells.filter(
          (cell) => cell.inMonth
        );

        target = event.key === 'Home' ? month[0]?.date : month.at(-1)?.date;
      }
    } else {
      if (direction)
        target =
          view === 'months'
            ? adapter.addMonths(base, direction, locale)
            : view === 'quarters'
              ? adapter.addMonths(base, direction * 3, locale)
              : adapter.addYears(base, direction * (view === 'decades' ? 10 : 1), locale);
      else if (page) target = stepView(base, view, page, adapter, locale);
      else if (event.key === 'Home') target = dates[0];
      else if (event.key === 'End') target = dates.at(-1);
    }

    if (!target) return;

    event.preventDefault();

    const min = this.min();
    const max = this.max();

    if (min && target < min) target = min;

    if (max && target > max) target = max;

    if (view !== 'days') {
      const requested = target;

      target =
        buildPeriodGrid(view, requested, adapter, locale, this.settings().weekStartsOn).cells.find((cell) => this.sameView(cell.date, requested))?.date ??
        requested;
    }

    this.focusDateState.set(target);

    if (view !== 'days' || !this.monthGrids().some((grid) => grid.cells.some((cell) => cell.inMonth && cell.date === target))) this.viewDate.set(target);

    this.focusRenderedCell(target);
  }

  //#region Helpers

  private valueAnchor(): IsoDate | null {
    const value = this.value();

    if (!value) return null;

    if (typeof value === 'string') return value;

    if (Array.isArray(value)) return value[0] ?? null;

    if (isPeriodRangeValue(value)) return value.start;

    if (isDateRangeValue(value)) return value.start;

    return null;
  }

  private valueAnchors(): { start: IsoDate | null; end: IsoDate | null } {
    const value = this.value();

    if (!value) return { start: null, end: null };

    if (typeof value === 'string') return { start: value, end: value };

    if (Array.isArray(value)) return { start: value[0] ?? null, end: value.at(-1) ?? null };

    if (isPeriodRangeValue(value)) return { start: value.start, end: value.end };

    if (isDateRangeValue(value)) return { start: value.start, end: value.end };

    return { start: null, end: null };
  }

  private committedRange(): IDateRange | null {
    const info = this.modeInfo();
    const anchors = this.valueAnchors();

    if (info.selection === 'multiple' || (!info.isRange && !info.period) || !anchors.start || !anchors.end) return null;

    if (info.period) return { start: this.previewPeriodBounds(anchors.start, info.period).start, end: this.previewPeriodBounds(anchors.end, info.period).end };

    return { start: anchors.start, end: anchors.end };
  }

  private draftPreview(): IDateRange | null {
    if (this.readOnly()) return null;

    const info = this.modeInfo();
    const start = this.draftStart();
    const end = this.hoverDate() ?? this.previewFocusDate() ?? start;
    const view = this.viewMode();
    const selectionView = info.period === 'week' ? view === 'days' : view === `${info.period}s`;

    if (!end || info.selection === 'multiple' || (info.period && !selectionView)) return null;

    if (info.period && (info.isRange || info.period === 'week')) {
      const first = this.previewPeriodBounds(start ?? end, info.period);
      const last = this.previewPeriodBounds(end, info.period);

      return { start: first.start < last.start ? first.start : last.start, end: first.end > last.end ? first.end : last.end };
    }

    if (!start) return null;

    return start <= end ? { start, end } : { start: end, end: start };
  }

  private previewPeriodBounds(date: IsoDate, kind: PeriodKind): { start: IsoDate; end: IsoDate } {
    if (kind === 'week') return selectionPeriodBounds(date, kind, this.settings().weekStartsOn);

    const adapter = this.adapter();
    const locale = this.settings().locale;
    const parts = adapter.getDateParts(date, locale);
    const yearStart = findYearStart(date, parts.year, adapter, locale);
    const quarter = Math.min(3, Math.floor(parts.monthIndex / 3));
    const start = kind === 'month' ? adapter.getMonthStart(date, locale) : kind === 'quarter' ? adapter.addMonths(yearStart, quarter * 3, locale) : yearStart;
    const next =
      kind === 'year' || (kind === 'quarter' && quarter === 3)
        ? adapter.addYears(yearStart, 1, locale)
        : adapter.addMonths(start, kind === 'quarter' ? 3 : 1, locale);

    return { start, end: addDays(next, -1) };
  }

  private selectedSet(): ReadonlySet<IsoDate> {
    const value = this.value();

    if (!value) return new Set<IsoDate>();

    if (typeof value === 'string') return new Set([value]);

    if (Array.isArray(value)) return new Set(value);

    if ('kind' in value) return new Set<IsoDate>();

    return new Set<IsoDate>();
  }

  private focusCellDate(): IsoDate | null {
    const focus = this.focusDateState();

    if (focus) return focus;

    if (this.viewMode() === 'days') return this.monthGrids()[0]?.cells.find((cell) => cell.inMonth)?.date ?? null;

    return this.effectiveViewDate();
  }

  private focusableDates(): readonly IsoDate[] {
    return this.viewMode() === 'days' ? this.dayCells().map((cell) => cell.date) : this.periodGrid().cells.map((cell) => cell.date);
  }

  private focusRenderedCell(date: IsoDate): void {
    setTimeout(() => this.gridElement()?.nativeElement.querySelector<HTMLElement>(`[data-focus-date="${date}"]`)?.focus({ preventScroll: true }));
  }

  private selectDate(date: IsoDate, inMonth: boolean): void {
    const info = this.modeInfo();

    if (!inMonth && info.selection !== 'multiple') this.viewDate.set(date);

    if (info.period) {
      this.selectPeriod(periodAnchor(date, info.period, this.settings().weekStartsOn));

      return;
    }

    if (info.selection === 'multiple') {
      this.toggleMultiple(date);

      return;
    }

    if (info.selection === 'single') {
      this.commit(date);

      return;
    }

    const start = this.draftStart();

    if (!start) {
      this.draftStart.set(date);
      this.hoverDate.set(date);
      this.rangeStart.emit(date);

      return;
    }

    this.completeRange(start, date);
  }

  private selectPeriod(anchor: IsoDate): void {
    const info = this.modeInfo();

    if (!info.period) return;

    if (!info.isRange) {
      this.commit(anchor);

      return;
    }

    const start = this.draftStart();

    if (!start) {
      this.draftStart.set(anchor);
      this.hoverDate.set(anchor);
      this.rangeStart.emit(anchor);

      return;
    }

    const first = info.period === 'week' && anchor < start ? anchor : start;
    const last = info.period === 'week' && start > anchor ? start : anchor;
    const end = periodAnchorEnd(last, info.period, this.settings().weekStartsOn);
    const startEnd = periodAnchorEnd(start, info.period, this.settings().weekStartsOn);
    const validation = this.validateRange(first, end, info.period === 'week' ? end : startEnd);

    if (!validation.valid) {
      this.selectionRejected.emit(validation.reason);

      return;
    }

    if (info.period === 'week' && validation.range.end !== end) {
      this.selectionRejected.emit('crossing');

      return;
    }

    const ordered: IPeriodRange = start <= anchor ? { start, end: anchor, kind: info.period } : { start: anchor, end: start, kind: info.period };

    this.draftStart.set(null);
    this.hoverDate.set(null);
    this.commit(ordered);
  }

  private completeRange(start: IsoDate, end: IsoDate): void {
    const validation = this.validateRange(start, end, end);

    if (!validation.valid) {
      this.selectionRejected.emit(validation.reason);

      return;
    }

    const ordered: IDateRange = start <= end ? { start, end } : { start: end, end: start };
    const range = validation.range.start && validation.range.end ? validation.range : ordered;

    this.draftStart.set(null);
    this.hoverDate.set(null);
    this.commit({ start: range.start, end: range.end });
  }

  private validateRange(
    start: IsoDate,
    end: IsoDate,
    endUsedForLength: IsoDate
  ): { valid: boolean; reason: 'crossing' | 'min-length' | 'max-length' | 'endpoint'; range: IDateRange } {
    const config = this.restrictionConfig();
    const ordered: IDateRange = start <= end ? { start, end } : { start: end, end: start };
    const rangeStart = ordered.start ?? start;
    const rangeEnd = ordered.end ?? end;
    const length = Math.abs(this.dayDifference(rangeStart, endUsedForLength)) + 1;

    if (config.min && (rangeStart < config.min || rangeEnd < config.min)) return { valid: false, reason: 'endpoint', range: ordered };

    if (config.max && (rangeStart > config.max || rangeEnd > config.max)) return { valid: false, reason: 'endpoint', range: ordered };

    if (!this.allowSameDay() && start === end) return { valid: false, reason: 'min-length', range: ordered };

    if (length < Math.max(1, this.minRangeLength())) return { valid: false, reason: 'min-length', range: ordered };

    if (this.maxRangeLength() !== null && length > Math.max(1, this.maxRangeLength() ?? 1)) return { valid: false, reason: 'max-length', range: ordered };

    if (this.evaluateRestriction(rangeStart).disabled || this.evaluateRestriction(rangeEnd).disabled)
      return { valid: false, reason: 'endpoint', range: ordered };

    const blocked = this.firstBlockedDate(ordered);

    if (!blocked) return { valid: true, reason: 'crossing', range: ordered };

    if (this.crossingPolicy() === 'allow') return { valid: true, reason: 'crossing', range: ordered };

    if (this.crossingPolicy() === 'truncate') {
      const truncated = { start: ordered.start, end: this.addDays(blocked, -1) };

      if (
        truncated.start &&
        truncated.end &&
        truncated.start <= truncated.end &&
        this.dayDifference(truncated.start, truncated.end) + 1 >= Math.max(1, this.minRangeLength())
      ) {
        return { valid: true, reason: 'crossing', range: truncated };
      }
    }

    return { valid: false, reason: 'crossing', range: ordered };
  }

  private toggleMultiple(date: IsoDate): void {
    const current = Array.isArray(this.value()) ? [...(this.value() as readonly IsoDate[])] : [];
    const existing = current.indexOf(date);
    const limit = this.selectionLimit();

    if (existing >= 0) {
      current.splice(existing, 1);
    } else {
      if (limit !== null && current.length >= limit) {
        this.selectionRejected.emit('limit');

        return;
      }

      current.push(date);
    }

    this.commit([...current].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));
  }

  private commit(value: DatePickerValue): void {
    this.value.set(value);

    const anchor = this.valueAnchor();

    if (anchor) this.dateSelect.emit(anchor);
  }

  private evaluateRestriction(date: IsoDate): { disabled: boolean; reason: DateRestrictionReason | null } {
    if (this.modeInfo().period === 'week') {
      const start = selectionPeriodBounds(date, 'week', this.settings().weekStartsOn).start;

      for (let offset = 0; offset < 7; offset++) {
        const restriction = this.evaluateDayRestriction(addDays(start, offset));

        if (restriction.disabled) return restriction;
      }
    }

    return this.evaluateDayRestriction(date);
  }

  private evaluateDayRestriction(date: IsoDate): { disabled: boolean; reason: DateRestrictionReason | null } {
    const restriction = dateRestriction(date, this.restrictionConfig());
    const availability = this.availability();

    if (!availability) return restriction;

    const metadata = this.metadataMap().get(date);

    if (!metadata) {
      return this.blockUnverifiedAvailability() ? { disabled: true, reason: 'unknown' } : restriction;
    }

    return restriction;
  }

  private periodContainsSelectable(anchor: IsoDate, kind: 'week' | 'month' | 'quarter' | 'year', end: IsoDate): boolean {
    const start = selectionPeriodBounds(anchor, kind, this.settings().weekStartsOn).start;
    const min = this.min();
    const max = this.max();

    if (min && end < min) return false;

    if (max && start > max) return false;

    return true;
  }

  private sameView(anchor: IsoDate, view: IsoDate): boolean {
    const mode = this.viewMode();
    const left = this.adapter().getDateParts(anchor, this.settings().locale);
    const right = this.adapter().getDateParts(view, this.settings().locale);

    if (mode === 'months') return left.year === right.year && left.monthIndex === right.monthIndex;

    if (mode === 'quarters') return left.year === right.year && Math.floor(left.monthIndex / 3) === Math.floor(right.monthIndex / 3);

    if (mode === 'years') return left.year === right.year;

    return Math.floor(left.year / 10) === Math.floor(right.year / 10);
  }

  private canNavigate(direction: number): boolean {
    const adapter = this.adapter();
    const locale = this.settings().locale;
    const view = this.viewMode();
    const target = stepView(this.effectiveViewDate(), view, direction, adapter, locale);
    const min = this.min();
    const max = this.max();

    let start: IsoDate;
    let end: IsoDate;

    if (view === 'days') {
      const first = buildMonthGrid(target, adapter, locale, this.settings().weekStartsOn, this.settings().minimalDaysInFirstWeek, true);
      const last = buildMonthGrid(
        adapter.addMonths(target, Math.max(1, Math.min(4, this.months())) - 1, locale),
        adapter,
        locale,
        this.settings().weekStartsOn,
        this.settings().minimalDaysInFirstWeek,
        true
      );

      start = first.monthStart;
      end = last.cells.filter((cell) => cell.inMonth).at(-1)?.date ?? start;
    } else {
      const cells = buildPeriodGrid(view, target, adapter, locale, this.settings().weekStartsOn).cells.filter((cell) => cell.inPeriod);

      start = cells[0]?.date ?? target;
      end = cells.at(-1)?.date ?? start;
      end =
        view === 'months'
          ? addDays(adapter.addMonths(end, 1, locale), -1)
          : view === 'quarters'
            ? addDays(adapter.addMonths(end, 3, locale), -1)
            : addDays(adapter.addYears(end, view === 'decades' ? 10 : 1, locale), -1);
    }

    return (!min || end >= min) && (!max || start <= max);
  }

  private dayLabel(date: IsoDate, metadata: IDateMetadata | undefined): string {
    const base = formatIsoDate(date, 'EEEE d MMMM yyyy', this.adapterContext());
    const description = resolveText(metadata?.description, this.i18n);

    return description ? `${base}. ${description}` : base;
  }

  private firstBlockedDate(range: IDateRange): IsoDate | null {
    if (!range.start || !range.end) return null;

    let cursor = range.start;
    let guard = 0;

    while (cursor <= range.end && guard < 3700) {
      if (this.evaluateRestriction(cursor).disabled) return cursor;

      cursor = this.addDays(cursor, 1);
      guard += 1;
    }

    return null;
  }

  private dayDifference(from: IsoDate, to: IsoDate): number {
    return Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000);
  }

  private addDays(date: IsoDate, days: number): IsoDate {
    const timestamp = Date.parse(`${date}T00:00:00Z`) + days * 86_400_000;

    return new Date(timestamp).toISOString().slice(0, 10);
  }

  //#endregion
}
