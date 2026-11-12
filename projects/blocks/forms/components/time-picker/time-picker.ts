import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, TemplateRef, WritableSignal } from '@angular/core';

import {
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  NgZone,
  output,
  signal,
  untracked,
  viewChild
} from '@angular/core';

import type {
  HourCycle,
  IDateTimeConfig,
  IParseResult,
  IsoTime,
  ITimeAvailability,
  ITimeAvailabilityRequest,
  ITimeColumnOption,
  ITimeRange,
  ITimeWheelColumns,
  TimePrecision
} from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { ITimePickerOption } from '@forms/interfaces/itime-picker-option.interface';
import type { PickerSurfacePresentation, TimeAvailabilityResolver } from '@forms/types/date-picker.types';
import type { TimeWheelType } from '@forms/types/time-wheel.types';

import {
  buildTimeColumns,
  BX_CLOCK,
  BX_I18N,
  BxA11yService,
  BxDateTimeConfigService,
  dayPeriods,
  formatIsoTime,
  isTimeOnStep,
  parseTimeInput,
  parseTimeParts,
  ResolvableText,
  resolveText,
  serializeTime,
  snapTimeToStep,
  supportedTimeZones,
  TimePickerPresentation,
  timeZoneOption,
  WindowDimensionsService,
  zonedTimeOfInstant
} from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { ISelectionMotion, mountSelectionMotion } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';
import {
  IVirtualCollectionConfig,
  LoadingIndicator,
  LoadingSpinner,
  TooltipDirective,
  VirtualCollection,
  VirtualItemDirective,
  VirtualTrackBy
} from '@filip.mazev/blocks/primitives';

import { BxValueControl } from '@forms/classes/bx-value-control';
import { Button } from '@forms/components/button/button';
import { FormField } from '@forms/components/form-field/form-field';
import { PickerSurface } from '@forms/components/picker-surface/picker-surface';
import { Select } from '@forms/components/select/select';
import { TimeWheel } from '@forms/components/time-wheel/time-wheel';
import { TIME_VALIDATION_MESSAGES } from '@forms/constants/time-validation.constants';
import { formatTimeZoneOffset, padTimeComponent, timePickerIntervalSeconds } from '@forms/helpers/time-picker.helpers';
import { resolveValidationMessage } from '@forms/helpers/validation.helpers';

/**
 * Single-time picker with inertial wheels and a semantic or interval-based option list.
 *
 * The field is a standard Blocks form control; the panel resolves to a popover on larger viewports and the reusable bottom drawer on narrow layouts.
 * Valid time edits commit immediately; invalid drafts are reported by the shared form field.
 */
@Component({
  selector: 'bx-time-picker',
  imports: [
    BxSurfaceDirective,
    Button,
    FormField,
    Icon,
    LoadingIndicator,
    LoadingSpinner,
    PickerSurface,
    Select,
    TimeWheel,
    TooltipDirective,
    VirtualCollection,
    VirtualItemDirective
  ],
  templateUrl: './time-picker.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './time-picker.scss'
})
export class TimePicker extends BxValueControl<IsoTime> {
  private readonly injector = inject(Injector);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly ngZone = inject(NgZone);
  private readonly bxDateTimeConfigService = inject(BxDateTimeConfigService);
  private readonly clock = inject(BX_CLOCK);
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly originElement: WritableSignal<HTMLElement | null> = signal<HTMLElement | null>(null);

  private readonly availabilityState: WritableSignal<ITimeAvailability | undefined> = signal<ITimeAvailability | undefined>(undefined);

  private readonly selectedTimeZone: WritableSignal<string | null> = signal<string | null>(null);

  private readonly usesExternalAvailability: Signal<boolean> = computed(() => this.availability() !== undefined);
  private readonly slotContext: Signal<string> = computed(() => `${this.settings().locale}|${this.settings().timeZone}|${this.settings().precision}`);

  private readonly listViewport: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('listViewport');
  private readonly listCollection: Signal<VirtualCollection<ITimeColumnOption> | undefined> = viewChild<VirtualCollection<ITimeColumnOption>>('collection');

  protected readonly typedText: WritableSignal<string> = signal('');

  protected readonly textEdited: WritableSignal<boolean> = signal(false);

  protected readonly typedError: WritableSignal<IParseResult<IsoTime>['error']> = signal<IParseResult<IsoTime>['error']>(null);

  protected readonly fieldFocused: WritableSignal<boolean> = signal(false);
  protected readonly selectionEdited: WritableSignal<boolean> = signal(false);
  protected readonly isOpen: WritableSignal<boolean> = signal(false);

  protected readonly draftTime: WritableSignal<IsoTime> = signal('09:00');

  protected readonly listFocusValue: WritableSignal<IsoTime | null> = signal<IsoTime | null>(null);

  protected readonly settings: Signal<IDateTimeConfig> = computed(() => {
    const requestedCycle = this.hourCycle();

    return this.bxDateTimeConfigService.resolve({
      locale: this.locale(),
      timeZone: this.selectedTimeZone() ?? this.timeZone() ?? undefined,
      hourCycle: requestedCycle === 'auto' ? undefined : requestedCycle,
      precision: this.precision(),
      minuteStep: this.minuteStep(),
      secondStep: this.secondStep(),
      millisecondStep: this.millisecondStep(),
      timeFormat: this.timeFormat(),
      showTimeZoneLabel: this.showTimeZone()
    });
  });
  protected readonly surfacePresentation: Signal<PickerSurfacePresentation> = computed<PickerSurfacePresentation>(() => {
    const requested = this.presentation();

    if (requested !== 'auto') return requested;

    return this.windowDimensionsService.isMobile() ? 'drawer' : 'popover';
  });
  protected readonly isDrawer: Signal<boolean> = computed(() => this.surfacePresentation() === 'drawer');
  protected readonly displayValue: Signal<string> = computed(() => this.formatValue(this.internalValue()));
  protected readonly resolvedTimePlaceholder: Signal<string> = computed(() =>
    resolveText(this.placeholder() ?? this.parseFormats()[0] ?? this.settings().timeFormat, this.i18n)
  );
  protected readonly resolvedOpenPickerLabel: Signal<string> = computed(() => resolveText(this.openPickerLabel(), this.i18n));
  protected readonly resolvedClearTooltip: Signal<string> = computed(() => resolveText(this.clearTooltip() ?? this.clearLabel(), this.i18n));
  protected readonly resolvedClearLabel: Signal<string> = computed(() => resolveText(this.clearLabel(), this.i18n));
  protected readonly resolvedNowLabel: Signal<string> = computed(() => resolveText(this.nowLabel(), this.i18n));
  protected readonly resolvedHourLabel: Signal<string> = computed(() => resolveText(this.hourLabel(), this.i18n));
  protected readonly resolvedMinuteLabel: Signal<string> = computed(() => resolveText(this.minuteLabel(), this.i18n));
  protected readonly resolvedSecondLabel: Signal<string> = computed(() => resolveText(this.secondLabel(), this.i18n));
  protected readonly resolvedMillisecondLabel: Signal<string> = computed(() => resolveText(this.millisecondLabel(), this.i18n));
  protected readonly resolvedPeriodLabel: Signal<string> = computed(() => resolveText(this.periodLabel(), this.i18n));
  protected readonly resolvedTimeZoneLabel: Signal<string> = computed(() => resolveText(this.timeZoneLabel(), this.i18n));
  protected readonly resolvedLoadingLabel: Signal<string> = computed(() => resolveText(this.loadingLabel(), this.i18n));
  protected readonly resolvedRetryLabel: Signal<string> = computed(() => resolveText(this.retryLabel(), this.i18n));
  protected readonly showClear: Signal<boolean> = computed(() => this.clearable() && (!!this.internalValue() || !!this.typedText()) && !this.isReadonly());
  protected readonly isFloating: Signal<boolean> = computed(
    () =>
      this.fieldFocused() || this.keyboardFocused() || this.isOpen() || !!this.typedText() || !!this.displayValue() || this.resolvedFloatLabel() === 'always'
  );
  protected readonly timeZoneOptions: Signal<readonly { value: string; label: string; description: string | undefined }[]> = computed(() =>
    supportedTimeZones().map((id) => ({
      value: id,
      label: this.timeZoneLabelFor(id),
      description:
        timeZoneOption(id, this.settings().locale).offsetMinutes === null ? undefined : String(timeZoneOption(id, this.settings().locale).offsetMinutes)
    }))
  );
  protected readonly availabilityForPanel: Signal<ITimeAvailability | undefined> = computed(
    () => this.availability() ?? (this.resolver() ? this.availabilityState() : undefined)
  );
  protected readonly availabilityLoading: Signal<boolean> = computed(() => this.availabilityForPanel()?.loading === true);
  protected readonly availabilityError: Signal<string> = computed(() => resolveText(this.availabilityForPanel()?.error, this.i18n));
  protected readonly availabilityTimes: Signal<readonly IsoTime[] | null> = computed(() => this.availabilityForPanel()?.times ?? null);
  protected readonly panelFeedback: Signal<boolean> = computed(
    () =>
      this.availabilityLoading() || !!this.availabilityError() || this.availabilityTimes()?.length === 0 || (this.isListMode() && !this.listOptions().length)
  );

  protected readonly listConfig: IVirtualCollectionConfig = { layout: 'list', estimatedRowHeight: 40, overscan: 160 };
  protected readonly listTrackBy: VirtualTrackBy<ITimeColumnOption> = (option) => option.value;

  protected readonly listOptions: Signal<readonly ITimeColumnOption[]> = computed(() => {
    const custom = this.options();

    if (custom)
      return custom.map((option) => ({
        value: option.value,
        label: resolveText(option.label, this.i18n) || formatIsoTime(option.value, this.settings().timeFormat, this.settings().locale),
        disabled: !!option.disabled || !this.isTimeAllowed(option.value)
      }));

    const quantum = this.settings().precision === 'hour' ? 3600 : this.settings().precision === 'minute' ? 60 : 1;
    const interval = Math.max(quantum, Math.ceil(timePickerIntervalSeconds(this.interval(), this.settings().minuteStep) / quantum) * quantum);
    const min = this.min();
    const max = this.max();
    const start = min ? Math.ceil(this.timeNumber(min) / 1000 / quantum) * quantum : 0;
    const end = max ? this.timeNumber(max) / 1000 : 86400 - quantum;
    const options: ITimeColumnOption[] = [];

    let alignedStart = start;

    while (alignedStart <= end) {
      const milliseconds = Math.round(alignedStart * 1000);
      const candidate = serializeTime(
        {
          hour: Math.floor(milliseconds / 3600000),
          minute: Math.floor(milliseconds / 60000) % 60,
          second: Math.floor(milliseconds / 1000) % 60,
          millisecond: milliseconds % 1000
        },
        this.settings().precision
      );

      if (isTimeOnStep(candidate, this.settings().minuteStep, this.settings().secondStep, this.settings().millisecondStep)) break;

      alignedStart += quantum;
    }

    for (let seconds = alignedStart; seconds <= end; seconds += interval) {
      const milliseconds = Math.round(seconds * 1000);
      const time = serializeTime(
        {
          hour: Math.floor(milliseconds / 3600000),
          minute: Math.floor(milliseconds / 60000) % 60,
          second: Math.floor(milliseconds / 1000) % 60,
          millisecond: milliseconds % 1000
        },
        this.settings().precision
      );

      if (this.isTimeAllowed(time))
        options.push({ value: time, label: formatIsoTime(time, this.settings().timeFormat, this.settings().locale), disabled: false });
    }

    return options;
  });
  protected readonly canSelectNow: Signal<boolean> = computed(() =>
    this.isTimeAllowed(this.normalizeTime(zonedTimeOfInstant(this.clock.now(), this.settings().timeZone, this.settings().precision)))
  );
  protected readonly canApply: Signal<boolean> = computed(() => this.isDraftValid() && !this.availabilityLoading() && !this.availabilityError());
  protected readonly wheelColumns: Signal<ITimeWheelColumns> = computed<ITimeWheelColumns>(() => this.buildColumnsFor(this.draftTime()));
  protected readonly errorText: Signal<string> = computed(() => {
    const parseError = this.typedError();

    if (parseError) return this.validationMessage(parseError === 'range' ? 'timeRange' : 'timeFormat');

    return this.selectionEdited() ? this.validationError() : '';
  });
  protected readonly panelOrigin: Signal<HTMLElement | null> = computed(() => this.originElement());

  protected readonly panelTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('panelTemplate');

  /** Optional custom canonical time choices; omission generates list choices from interval/minuteStep. Also guards typed and wheel values. */
  public readonly options: InputSignal<readonly ITimePickerOption[] | undefined> = input<readonly ITimePickerOption[] | undefined>(undefined);
  /** Optional list interval in minutes or a duration string such as '30m' or '1.5 hours'. Omission uses minuteStep; precision limits finer intervals. */
  public readonly interval: InputSignal<number | string | undefined> = input<number | string | undefined>(undefined);
  /** Optional ordered strict input patterns; omission uses the display timeFormat. Explicit patterns are tried in order without locale guessing. */
  public readonly parseFormats: InputSignal<readonly string[]> = input<readonly string[]>([]);
  /** Icon used to open the panel. Defaults to 'clock'. */
  public readonly pickerIcon: InputSignal<IconName> = input<IconName>('clock');
  /** Translated accessible name of the opening action. Defaults to 'Choose time'. */
  public readonly openPickerLabel: InputSignal<ResolvableText> = input<ResolvableText>('Choose time');
  /** Panel presentation mode. Defaults to `'wheel'`. */
  public readonly timePresentation: InputSignal<TimePickerPresentation> = input<TimePickerPresentation>('wheel');
  /** Overlay presentation; `'auto'` uses the bottom drawer on narrow viewports and a popover otherwise. Defaults to `'auto'`. */
  public readonly presentation: InputSignal<'auto' | PickerSurfacePresentation> = input<'auto' | PickerSurfacePresentation>('auto');
  /** Optional per-instance locale. Optional. */
  public readonly locale: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional per-instance IANA time zone. Optional. */
  public readonly timeZone: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Clock cycle; `'auto'` follows shared locale defaults. Defaults to `'auto'`. */
  public readonly hourCycle: InputSignal<HourCycle | 'auto'> = input<HourCycle | 'auto'>('auto');
  /** Smallest editable and serialized time unit. Defaults to `'minute'`. */
  public readonly precision: InputSignal<TimePrecision> = input<TimePrecision>('minute');
  /** Minute increment offered by wheels, lists and typed validation. Defaults to `1`. */
  public readonly minuteStep: InputSignal<number> = input(1);
  /** Second increment. Defaults to `1`. */
  public readonly secondStep: InputSignal<number> = input(1);
  /** Millisecond increment. Defaults to `1`. */
  public readonly millisecondStep: InputSignal<number> = input(1);
  /** Optional display pattern for times. Optional. */
  public readonly timeFormat: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Whether wheel columns loop past their ends. Defaults to `true`. */
  public readonly loopColumns: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Earliest selectable time. Optional. */
  public readonly min: InputSignal<IsoTime | null | undefined> = input<IsoTime | null | undefined>(undefined);
  /** Latest selectable time. Optional. */
  public readonly max: InputSignal<IsoTime | null | undefined> = input<IsoTime | null | undefined>(undefined);
  /** Exact times that cannot be selected. Defaults to an empty array. */
  public readonly disabledTimes: InputSignal<readonly IsoTime[]> = input<readonly IsoTime[]>([]);
  /** Inclusive time intervals that cannot be selected. Defaults to an empty array. */
  public readonly disabledIntervals: InputSignal<readonly ITimeRange[]> = input<readonly ITimeRange[]>([]);
  /** Application predicate returning true when a time cannot be selected. Optional. */
  public readonly timeFilter: InputSignal<((time: IsoTime) => boolean) | undefined> = input<((time: IsoTime) => boolean) | undefined>(undefined);
  /**
   * Compatibility input for the branch draft API; valid time edits commit immediately.
   * @deprecated Commit timing no longer depends on this input.
   */
  public readonly commitPolicy: InputSignal<'auto' | 'immediate' | 'apply'> = input<'auto' | 'immediate' | 'apply'>('auto');
  /** Optional close policy; omission closes list selections and keeps wheels open for continued editing. */
  public readonly closeOnSelect: InputSignalWithTransform<boolean | undefined, unknown> = input<boolean | undefined, unknown>(undefined, {
    transform: (value) => (value == null ? undefined : booleanAttribute(value))
  });
  /** Whether a clear action is available. Defaults to `true`. */
  public readonly clearable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the timezone selector is rendered. Defaults to `false`. */
  public readonly showTimeZone: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether the selected time zone label appears in the closed field. Defaults to `true`. */
  public readonly showTimeZoneLabel: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Consumer-managed slot availability. Optional. */
  public readonly availability: InputSignal<ITimeAvailability | undefined> = input<ITimeAvailability | undefined>(undefined);
  /** Optional Promise-based slot availability resolver. Optional. */
  public readonly resolver: InputSignal<TimeAvailabilityResolver | undefined> = input<TimeAvailabilityResolver | undefined>(undefined);
  /** Visible busy text while slots load; translation keys resolve through BX_I18N. Optional. */
  public readonly loadingLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Visible retry action label. Defaults to `'Retry request'`. */
  public readonly retryLabel: InputSignal<ResolvableText> = input<ResolvableText>('Retry request');
  /**
   * Compatibility label retained for templates using the branch draft API; no Apply action is rendered.
   * @deprecated Valid edits commit immediately.
   */
  public readonly applyLabel: InputSignal<ResolvableText> = input<ResolvableText>('Apply');
  /**
   * Compatibility label retained for templates using the branch draft API; no Cancel action is rendered.
   * @deprecated Use Escape or outside dismissal to close the panel.
   */
  public readonly cancelLabel: InputSignal<ResolvableText> = input<ResolvableText>('Cancel');
  /** Visible clear label. Defaults to `'Clear selection'`. */
  public readonly clearLabel: InputSignal<ResolvableText> = input<ResolvableText>('Clear selection');
  /** Optional translated Now shortcut. Omission or empty text hides the action and its space. */
  public readonly nowLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional translated clear tooltip; omission uses clearLabel and empty text suppresses it. */
  public readonly clearTooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Accessible hour column label. Defaults to `'Hour'`. */
  public readonly hourLabel: InputSignal<ResolvableText> = input<ResolvableText>('Hour');
  /** Accessible minute column label. Defaults to `'Minute'`. */
  public readonly minuteLabel: InputSignal<ResolvableText> = input<ResolvableText>('Minute');
  /** Accessible second column label. Defaults to `'Second'`. */
  public readonly secondLabel: InputSignal<ResolvableText> = input<ResolvableText>('Second');
  /** Accessible millisecond column label. Defaults to `'Millisecond'`. */
  public readonly millisecondLabel: InputSignal<ResolvableText> = input<ResolvableText>('Millisecond');
  /** Accessible day-period column label. Defaults to `'AM or PM'`. */
  public readonly periodLabel: InputSignal<ResolvableText> = input<ResolvableText>('AM or PM');
  /** Visible timezone field label. Defaults to `'Time zone'`. */
  public readonly timeZoneLabel: InputSignal<ResolvableText> = input<ResolvableText>('Time zone');
  /** Translated request-failure message used by the optional resolver. Defaults to 'Times could not be loaded.'. */
  public readonly loadErrorMessage: InputSignal<ResolvableText> = input<ResolvableText>('Times could not be loaded.');
  /** Optional blanket validation message; omission uses contextual shared errorMessages for parsing, bounds, availability and steps. */
  public readonly invalidSelectionLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Visible message when no time slots are available; translation keys resolve through BX_I18N. Defaults to `'No times available.'`. */
  public readonly emptyLabel: InputSignal<ResolvableText> = input<ResolvableText>('No times available.');
  /**
   * Compatibility input retained from the branch draft API; validation messages now wrap beneath the form field.
   * @deprecated The panel no longer renders a validation footer.
   */
  public readonly errorWrap: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /** Emits the canonical time after a valid selection, or null after clearing. */
  public readonly valueCommit: OutputEmitterRef<IsoTime | null> = output<IsoTime | null>();
  /** Emits the panel open state. */
  public readonly openChange: OutputEmitterRef<boolean> = output<boolean>();
  /** Emits the selected IANA time zone when it changes. */
  public readonly timeZoneChange: OutputEmitterRef<string> = output<string>();
  /** Emits time-slot availability requests for consumer-managed loading. */
  public readonly slotRequest: OutputEmitterRef<ITimeAvailabilityRequest> = output<ITimeAvailabilityRequest>();
  /** Emits retry requests for consumer-managed slot loading. */
  public readonly slotRetry: OutputEmitterRef<ITimeAvailabilityRequest> = output<ITimeAvailabilityRequest>();

  private listSelectionMotion: ISelectionMotion | undefined;
  private resolverToken: number = 0;
  private lastSlotContext: string = '';
  private requestRevision: number = 0;

  constructor() {
    super();

    effect(() => {
      if (this.effectiveDisabled() || this.isReadonly()) this.close();
    });

    effect(() => {
      const value = this.internalValue();
      const display = this.formatValue(value);

      if (!this.textEdited()) this.typedText.set(display);
    });

    effect(() => {
      const value = this.internalValue();

      if (value) this.draftTime.set(this.normalizeTime(value));
    });

    effect(() => {
      this.resolver();
      this.usesExternalAvailability();

      const context = this.slotContext();

      untracked(() => {
        const previous = this.lastSlotContext;

        this.lastSlotContext = context;
        ++this.resolverToken;
        this.availabilityState.set(undefined);

        if (this.isOpen()) this.emitSlotRequest(previous && previous.split('|')[1] !== context.split('|')[1] ? 'timezone' : 'initial');
      });
    });

    effect(() => {
      const collection = this.listCollection();
      const options = this.listOptions();
      const open = this.isOpen();

      if (collection && open && options.length)
        untracked(() => {
          const current = this.internalValue() ?? this.draftTime();
          const first =
            options.find((option) => !option.disabled && this.timeNumber(option.value) >= this.timeNumber(current)) ??
            options.find((option) => !option.disabled);

          this.listFocusValue.set(first?.value ?? null);

          if (first) collection.scrollToItem(first.value);
        });
    });

    effect((onCleanup) => {
      const viewport = this.listViewport()?.nativeElement;

      if (!viewport || !this.isOpen()) return;

      const motion = untracked(() =>
        this.ngZone.runOutsideAngular(() => mountSelectionMotion(viewport, { reducedMotion: this.bxA11yService.isReducedMotion() }))
      );

      this.listSelectionMotion = motion;
      onCleanup(() => {
        motion.destroy();

        if (this.listSelectionMotion === motion) this.listSelectionMotion = undefined;
      });
    });
    effect(() => {
      const reducedMotion = this.bxA11yService.isReducedMotion();

      this.listSelectionMotion?.update({ reducedMotion });
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

    if (wasOpen) this.openChange.emit(false);
  }

  /** Open the panel with a draft copied from the committed value. */
  public open(): void {
    if (this.isOpen() || this.effectiveDisabled() || this.isReadonly()) return;

    const value = (this.textEdited() ? this.parseTypedTime(this.typedText()).value : null) ?? this.internalValue();

    this.draftTime.set(this.normalizeTime(value ?? zonedTimeOfInstant(this.clock.now(), this.settings().timeZone, this.settings().precision)));
    this.alignEmptyDraft();
    this.selectedTimeZone.set(this.timeZone() ?? this.settings().timeZone);

    if (!this.textEdited() && !this.typedError()) this.selectionEdited.set(false);

    this.originElement.set(this.nativeElement.querySelector<HTMLElement>('.bx-time-field'));

    if (!this.textEdited()) this.typedText.set(this.formatValue(this.internalValue()));

    this.isOpen.set(true);
    this.openChange.emit(true);
    this.emitSlotRequest('initial');

    if (!this.isDrawer()) this.focus({ preventScroll: true });
  }

  /** Close the panel without committing draft changes. */
  public close(): void {
    if (!this.isOpen()) return;

    this.isOpen.set(false);
    this.markAsTouched();
    this.openChange.emit(false);
  }

  /** Commit the draft when it is valid. */
  public apply(): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    if (!this.canApply()) return;

    const value = this.composedValue();

    this.updateValue(value);
    this.valueCommit.emit(value);
    this.close();
  }

  /** Discard draft changes and close the panel. */
  public cancel(): void {
    const value = this.internalValue();

    if (value) this.draftTime.set(value);

    this.close();
  }

  /** Clear the committed value. */
  public clear(): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    this.selectionEdited.set(false);
    this.textEdited.set(false);
    this.typedError.set(null);
    this.typedText.set('');
    this.updateValue(null);
    this.valueCommit.emit(null);
    this.close();
    this.focus({ preventScroll: true });
  }

  /** Set the draft to the current local time in the selected zone. */
  public selectNow(): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    const now = this.normalizeTime(zonedTimeOfInstant(this.clock.now(), this.settings().timeZone, this.settings().precision));

    this.draftTime.set(now);

    this.maybeCommitImmediately();
  }

  /** Open the picker if necessary and reload slots using the current resolver or consumer-managed request event. */
  public reloadSlots(): void {
    if (this.effectiveDisabled() || this.isReadonly() || this.availabilityLoading()) return;

    if (this.isOpen()) this.emitSlotRequest('initial');
    else this.open();
  }

  /** Retry the last failed slot request. */
  public retrySlots(): void {
    this.emitSlotRequest('retry');
  }

  protected override clearPendingEdit(): void {
    super.clearPendingEdit();
    this.textEdited.set(false);
    this.typedError.set(null);
    this.selectionEdited.set(false);
    this.typedText.set(this.formatValue(this.internalValue()));
  }

  protected onFieldFocus(): void {
    this.fieldFocused.set(true);
  }

  protected onFieldBlur(event: FocusEvent): void {
    if (event.relatedTarget instanceof Node && this.nativeElement.contains(event.relatedTarget)) return;

    this.fieldFocused.set(false);
    this.markAsTouched();
  }

  protected onTypedInput(event: Event): void {
    this.onTypedValue((event.target as HTMLInputElement).value);
  }

  protected onTypedValue(value: string | number | null): void {
    this.typedText.set(value === null ? '' : String(value));
    this.textEdited.set(true);
    this.typedError.set(null);

    const parsed = this.parseTypedTime(this.typedText()).value;

    if (parsed) this.draftTime.set(parsed);
  }

  protected onTypedBlur(event?: FocusEvent): void {
    const withinPanel = event?.relatedTarget instanceof HTMLElement && !!event.relatedTarget.closest('.bx-time-panel-content');

    if (this.textEdited()) this.commitTypedTime(!withinPanel);

    this.markAsTouched();
  }

  protected onTypedKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.commitTypedTime();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();

      if (!this.isOpen()) this.onTriggerClick(event);

      afterNextRender(
        () => {
          if (!this.isOpen()) return;

          const panel = this.nativeElement.ownerDocument.getElementById(this.controlId() + '-panel');

          const option =
            this.isListMode() && this.listFocusValue() ? this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${this.listFocusValue()}`) : null;

          (option ?? panel?.querySelector<HTMLElement>('[role="listbox"], .bx-time-feedback button'))?.focus({ preventScroll: true });
        },
        { injector: this.injector }
      );
    } else if (event.key === 'Escape' && this.isOpen()) {
      event.preventDefault();
      this.cancel();
    }
  }

  protected onEditableClick(event: Event): void {
    if (!this.isOpen()) this.onTriggerClick(event);
  }

  protected onTriggerClick(_event: Event): void {
    if (this.isReadonly()) return;

    if (this.isOpen()) this.close();
    else this.open();
  }

  protected onWheelChange(part: 'hour' | 'minute' | 'second' | 'millisecond' | 'period', value: string | null): void {
    if (!value) return;

    const current = this.draftTime();
    const candidate = this.wheelCandidate(current, part, value);

    if (candidate) this.setTime(candidate);
  }

  protected onListKeydown(event: KeyboardEvent, collection: VirtualCollection<ITimeColumnOption>): void {
    const options = this.listOptions().filter((option) => !option.disabled);
    const current = options.findIndex((option) => option.value === (this.listFocusValue() ?? this.draftTime()));

    if (!options.length) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onListSelect(options[Math.max(0, current)].value);

      return;
    }

    const direction = event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : Math.max(0, Math.min(options.length - 1, current + direction));

    if (!direction && event.key !== 'Home' && event.key !== 'End') return;

    event.preventDefault();
    (event.currentTarget as HTMLElement).focus();
    this.listFocusValue.set(options[index].value);
    collection.scrollToItem(options[index].value);
    afterNextRender(
      () => {
        if (!this.isOpen()) return;

        const option = this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${options[index].value}`);

        if (option && this.listViewport()?.nativeElement.contains(option)) option.focus({ preventScroll: true });
      },
      { injector: this.injector }
    );
  }

  protected onListSelect(time: IsoTime): void {
    if (!this.isTimeAllowed(time)) return;

    this.listFocusValue.set(time);
    this.setTime(time);
  }

  protected onTimeZoneSelect(zone: string | null): void {
    if (!zone) return;

    this.selectedTimeZone.set(zone);
    this.timeZoneChange.emit(zone);
  }

  protected showSeconds(): boolean {
    return this.settings().precision === 'second' || this.settings().precision === 'millisecond';
  }

  protected showMilliseconds(): boolean {
    return this.settings().precision === 'millisecond';
  }

  protected showPeriod(): boolean {
    return this.settings().hourCycle === 12;
  }

  protected resolvedEmptyLabel(): string {
    return resolveText(this.emptyLabel(), this.i18n);
  }

  protected wheelValue(part: 'hour' | 'minute' | 'second' | 'millisecond' | 'period'): string {
    const segments = parseTimeParts(this.draftTime()) ?? { hour: 0, minute: 0, second: 0, millisecond: 0 };

    if (part === 'hour') return String(this.settings().hourCycle === 12 ? (segments.hour % 12 === 0 ? 12 : segments.hour % 12) : segments.hour);

    if (part === 'minute') return padTimeComponent(segments.minute);

    if (part === 'second') return padTimeComponent(segments.second);

    if (part === 'millisecond') return String(segments.millisecond).padStart(3, '0');

    return dayPeriods(this.settings().locale)[segments.hour >= 12 ? 1 : 0] ?? '';
  }

  protected isListMode(): boolean {
    return this.timePresentation() === 'list';
  }

  protected listActiveId(): string | null {
    const value = this.listFocusValue() ?? this.draftTime();

    return this.listOptions().some((option) => option.value === value) ? `${this.controlId()}-${value}` : null;
  }

  protected timeZoneLabelFor(zone: string): string {
    const option = timeZoneOption(zone, this.settings().locale);

    return option.offsetMinutes === null ? zone : `${zone} · ${formatTimeZoneOffset(option.offsetMinutes)}`;
  }

  //#region Helpers

  private parseTypedTime(text: string): IParseResult<IsoTime> {
    const semantic = this.options()?.find(
      (option) => resolveText(option.label, this.i18n).toLocaleLowerCase(this.settings().locale) === text.trim().toLocaleLowerCase(this.settings().locale)
    );

    if (semantic) return { value: semantic.value, error: null, message: null };

    const formats = this.parseFormats().length ? this.parseFormats() : [this.settings().timeFormat];

    let failure: IParseResult<IsoTime> = { value: null, error: 'format', message: null };

    for (const format of formats) {
      const result = parseTimeInput(text.trim(), format, this.settings().locale, this.settings().precision);

      if (result.value) return result;

      if (result.error === 'range' || failure.error !== 'range') failure = result;
    }

    return failure;
  }

  private commitTypedTime(closeOnInvalid: boolean = true): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    if (!this.typedText().trim()) {
      this.clear();

      return;
    }

    const result = this.parseTypedTime(this.typedText());
    const value = result.value;

    if (!value) {
      this.typedError.set(result.error);

      if (closeOnInvalid) this.close();

      return;
    }

    this.draftTime.set(value);

    this.maybeCommitImmediately();

    if (closeOnInvalid && !this.canApply()) this.close();
  }

  private normalizeTime(time: IsoTime): IsoTime {
    return snapTimeToStep(time, this.settings().precision, this.settings().minuteStep, this.settings().secondStep, this.settings().millisecondStep);
  }

  private formatValue(value: IsoTime | null): string {
    if (!value) return '';

    const option = this.options()?.find((entry) => this.timeNumber(entry.value) === this.timeNumber(value));
    const time = resolveText(option?.label, this.i18n) || formatIsoTime(value, this.settings().timeFormat, this.settings().locale);
    const zone = this.showTimeZone() && this.showTimeZoneLabel() ? ` · ${this.selectedTimeZone() ?? this.settings().timeZone}` : '';

    return `${time}${zone}`;
  }

  private buildColumnsFor(time: IsoTime): ITimeWheelColumns {
    const columns = buildTimeColumns(
      time,
      this.settings().precision,
      this.settings().hourCycle,
      this.settings().locale,
      this.settings().minuteStep,
      this.settings().secondStep,
      this.settings().millisecondStep
    );
    const map = (part: TimeWheelType, options: ITimeWheelColumns['hours']): ITimeWheelColumns['hours'] =>
      options.map((option) => ({ ...option, disabled: !this.wheelCandidate(time, part, option.value) }));

    return {
      hours: map('hour', columns.hours),
      minutes: map('minute', columns.minutes),
      seconds: map('second', columns.seconds),
      milliseconds: map('millisecond', columns.milliseconds),
      periods: map('period', columns.periods)
    };
  }

  private wheelCandidate(current: IsoTime, part: TimeWheelType, value: string): IsoTime | null {
    const parts = parseTimeParts(current);

    if (!parts) return null;

    const hour =
      part === 'hour'
        ? this.settings().hourCycle === 12
          ? (Number(value) % 12) + (parts.hour >= 12 ? 12 : 0)
          : Number(value)
        : part === 'period'
          ? (parts.hour % 12) + Math.max(0, dayPeriods(this.settings().locale).indexOf(value)) * 12
          : parts.hour;
    const target = {
      ...parts,
      hour,
      minute: part === 'minute' ? Number(value) : parts.minute,
      second: part === 'second' ? Number(value) : parts.second,
      millisecond: part === 'millisecond' ? Number(value) : parts.millisecond
    };
    const exact = serializeTime(target, this.settings().precision);

    if (this.isTimeAllowed(exact)) return exact;

    const available =
      this.availabilityTimes() ??
      this.options()
        ?.filter((option) => !option.disabled)
        .map((option) => option.value);

    if (available) {
      const candidates = available.filter((candidate) => {
        const option = parseTimeParts(candidate);

        if (!option || !this.isTimeAllowed(candidate)) return false;

        if (part === 'period') return option.hour >= 12 === target.hour >= 12;

        if (option.hour !== target.hour) return false;

        if (part === 'hour') return true;

        if (option.minute !== target.minute) return false;

        return part === 'minute' || (option.second === target.second && (part === 'second' || option.millisecond === target.millisecond));
      });

      return (
        candidates.sort(
          (left, right) => Math.abs(this.timeNumber(left) - this.timeNumber(exact)) - Math.abs(this.timeNumber(right) - this.timeNumber(exact))
        )[0] ?? null
      );
    }

    if (part !== 'hour' && part !== 'period') return null;

    const hours = part === 'hour' ? [hour] : Array.from({ length: 12 }, (_, index) => index + (hour >= 12 ? 12 : 0));
    const minutes = Array.from(
      { length: Math.ceil(60 / Math.max(1, this.settings().minuteStep)) },
      (_, index) => index * Math.max(1, this.settings().minuteStep)
    );

    hours.sort((left, right) => Math.abs(left - hour) - Math.abs(right - hour));
    minutes.sort((left, right) => Math.abs(left - target.minute) - Math.abs(right - target.minute));

    for (const candidateHour of hours) {
      for (const minute of minutes) {
        const candidate = serializeTime({ ...target, hour: candidateHour, minute }, this.settings().precision);

        if (this.isTimeAllowed(candidate)) return candidate;
      }
    }

    return null;
  }

  private setTime(time: IsoTime): void {
    this.draftTime.set(time);
    this.maybeCommitImmediately();
  }

  private maybeCommitImmediately(): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    this.selectionEdited.set(true);
    this.textEdited.set(!this.canApply());
    this.typedError.set(null);
    this.typedText.set(this.formatValue(this.draftTime()));

    if (!this.canApply()) return;

    const value = this.composedValue();

    if (JSON.stringify(value) !== JSON.stringify(this.internalValue())) {
      this.updateValue(value);
      this.valueCommit.emit(value);
    }

    if (this.closeOnSelect() ?? this.isListMode()) this.close();
  }

  private isDraftValid(): boolean {
    return this.isTimeAllowed(this.draftTime());
  }

  private validationError(): string {
    const reason = this.timeRestrictionReason(this.draftTime());

    return reason ? this.validationMessage(reason) : '';
  }

  private validationMessage(kind: string): string {
    const override = this.invalidSelectionLabel();

    if (override !== undefined) return resolveText(override, this.i18n);

    const context = {
      format: this.parseFormats().length ? this.parseFormats().join(' or ') : this.settings().timeFormat,
      hourCycle: this.settings().hourCycle,
      minFormatted: this.min() ? formatIsoTime(this.min() ?? '00:00', this.settings().timeFormat, this.settings().locale) : '',
      maxFormatted: this.max() ? formatIsoTime(this.max() ?? '23:59', this.settings().timeFormat, this.settings().locale) : '',
      minuteStep: this.settings().minuteStep,
      secondStep: this.settings().secondStep,
      millisecondStep: this.settings().millisecondStep
    };
    const validation = { kind, context };

    return resolveValidationMessage(
      validation,
      this.errorMessages(),
      { ...TIME_VALIDATION_MESSAGES, ...this.formSettingsService.settings().errorMessages },
      this.i18n
    );
  }

  private composedValue(): IsoTime | null {
    if (!this.isDraftValid()) return null;

    return this.draftTime();
  }

  private isTimeAllowed(time: IsoTime): boolean {
    return this.timeRestrictionReason(time) === null;
  }

  private timeNumber(time: IsoTime): number {
    const parts = parseTimeParts(time);

    return parts ? ((parts.hour * 60 + parts.minute) * 60 + parts.second) * 1000 + parts.millisecond : NaN;
  }

  private timeRestrictionReason(time: IsoTime): string | null {
    if (!parseTimeParts(time)) return 'timeRange';

    if (this.availabilityLoading()) return 'timeLoading';

    if (this.availabilityError() || ((this.resolver() || this.availability()) && !this.availabilityTimes())) return 'timeAvailability';

    const candidate = this.timeNumber(time);
    const available = this.availabilityTimes();
    const custom = this.options();
    const min = this.min();
    const max = this.max();

    if (min && candidate < this.timeNumber(min)) return 'timeMin';

    if (max && candidate > this.timeNumber(max)) return 'timeMax';

    if (available && !available.some((entry) => this.timeNumber(entry) === candidate)) return 'timeDisabled';

    if (custom && !custom.some((entry) => !entry.disabled && this.timeNumber(entry.value) === candidate)) return 'timeDisabled';

    if (this.disabledTimes().some((entry) => this.timeNumber(entry) === candidate)) return 'timeDisabled';

    if (
      this.disabledIntervals().some((range) => {
        const start = this.timeNumber(range.start);
        const end = this.timeNumber(range.end);

        return start > end ? candidate >= start || candidate <= end : candidate >= start && candidate <= end;
      }) ||
      this.timeFilter()?.(time)
    )
      return 'timeDisabled';

    if (!isTimeOnStep(time, this.settings().minuteStep, this.settings().secondStep, this.settings().millisecondStep)) return 'timeStep';

    return null;
  }

  private alignEmptyDraft(): void {
    if (this.internalValue() || this.textEdited() || this.selectionEdited() || this.isTimeAllowed(this.draftTime())) return;

    const candidates = (
      this.availabilityTimes() ??
      this.listOptions()
        .filter((option) => !option.disabled)
        .map((option) => option.value)
    ).filter((time) => this.isTimeAllowed(time));
    const current = this.timeNumber(this.draftTime());
    const closest = [...candidates].sort((left, right) => Math.abs(this.timeNumber(left) - current) - Math.abs(this.timeNumber(right) - current))[0];

    if (closest) this.draftTime.set(closest);
  }

  private emitSlotRequest(source: ITimeAvailabilityRequest['source']): void {
    if (!this.isOpen() || this.availabilityLoading()) return;

    const request: ITimeAvailabilityRequest = {
      date: null,
      timeZone: this.settings().timeZone,
      locale: this.settings().locale,
      revision: ++this.requestRevision,
      source
    };

    if (source === 'retry') this.slotRetry.emit(request);
    else this.slotRequest.emit(request);

    void this.runResolver(request);
  }

  private async runResolver(request: ITimeAvailabilityRequest): Promise<void> {
    const resolver = this.resolver();

    if (!resolver || this.availability()) return;

    const token = ++this.resolverToken;

    this.availabilityState.set({ times: this.availabilityState()?.times, loading: true });

    try {
      const result = await resolver(request);

      if (token !== this.resolverToken) return;

      this.availabilityState.set({ times: result?.times ?? [], loading: false, retryable: true });
      this.alignEmptyDraft();
    } catch {
      if (token !== this.resolverToken) return;

      this.availabilityState.set({ times: this.availabilityState()?.times, loading: false, error: this.loadErrorMessage(), retryable: true });
    }
  }

  //#endregion
}
