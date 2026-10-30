import { afterNextRender, booleanAttribute, computed, DestroyRef, Directive, ElementRef, inject, input, OnInit, output, signal } from '@angular/core';
import { FormGroupDirective, FormResetEvent, NgControl, NgForm, Validators } from '@angular/forms';
import { DisabledReason, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BX_I18N, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { FormSettingsService } from '../services/form-settings.service';
import { resolveValidationMessage } from '../helpers/validation.helpers';
import { ErrorDisplayMode, ErrorDisplayPolicy, FloatLabel, FormFieldAppearance, SubscriptSizing, ValidationMessages } from '../types/validation.types';
import { IFormFieldControl } from '../interfaces/iform-field-control.interface';

@Directive({
  host: {
    '[hidden]': 'hidden()',
    '[style.display]': 'hidden() ? "none" : null',
    '[class.bx-readonly]': 'isReadonly()',
    '[class.is-keyboard-focused]': 'keyboardFocused()',
    '(pointerdown)': 'onControlPointerDown()'
  }
})
export abstract class BxControlState implements IFormFieldControl, OnInit {
  private readonly textAdapter = inject(BX_I18N, { optional: true });
  private readonly defaults = inject(FormSettingsService);
  private readonly generatedId = `bx-field-${uuidv4()}`;
  private readonly parentGroup = inject(FormGroupDirective, { optional: true, skipSelf: true });
  private readonly parentTemplate = inject(NgForm, { optional: true, skipSelf: true });
  private readonly submittedByParent = signal(false);
  private readonly extraDescriptions = signal<readonly string[]>([]);
  private readonly localTouched = signal(false);
  private readonly controlVersion = signal(0);
  private readonly destroyRef = inject(DestroyRef);
  private readonly focusMonitor = inject(FocusMonitor);
  protected readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly keyboardFocused = signal(false);
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  public readonly id = input<string | undefined>(undefined);
  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly placeholder = input<ResolvableText | undefined>(undefined);
  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  public readonly hint = input<ResolvableText | undefined>(undefined);
  public readonly hintEnd = input<ResolvableText | undefined>(undefined);
  public readonly error = input<ResolvableText | undefined>(undefined);
  public readonly ariaLabel = input<string | undefined>(undefined);
  public readonly ariaLabelledBy = input<string | undefined>(undefined);
  public readonly ariaDescribedBy = input<string | undefined>(undefined);
  public readonly dataTestId = input<string | undefined>(undefined);
  public readonly name = input<string>('');
  public readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  public readonly invalid = input(false);
  public readonly pending = input(false);
  public readonly touched = input(false);
  public readonly dirty = input(false);
  public readonly disabled = input(false, { transform: booleanAttribute });
  public readonly readonly = input(false, { transform: booleanAttribute });
  public readonly readOnly = input(false, { transform: booleanAttribute });
  public readonly isReadonly = computed(() => this.readonly() || this.readOnly());
  public readonly hidden = input(false, { transform: booleanAttribute });
  public readonly required = input(false, { transform: booleanAttribute });
  public readonly loading = input(false, { transform: booleanAttribute });
  public readonly disabledReasons = input<readonly WithOptionalFieldTree<DisabledReason>[]>([]);
  public readonly submitted = input(false);
  public readonly errorMessages = input<ValidationMessages>({});
  public readonly errorPriority = input<readonly string[]>([]);
  public readonly errorPolicy = input<ErrorDisplayPolicy | undefined>(undefined);
  public readonly errorMode = input<ErrorDisplayMode | undefined>(undefined);
  public readonly appearance = input<FormFieldAppearance | undefined>(undefined);
  public readonly floatLabel = input<FloatLabel | undefined>(undefined);
  public readonly hideRequiredMarker = input<boolean | undefined>(undefined);
  public readonly subscriptSizing = input<SubscriptSizing | undefined>(undefined);
  /** Override automatic truncation tooltips while retaining ellipsis and measurement. Application default is true. */
  public readonly tooltipOnTruncate = input<boolean | undefined>(undefined);
  public readonly touch = output();

  public readonly controlId = computed(() => this.id() ?? this.generatedId);
  public readonly resolvedLabel = computed(() => resolveText(this.label(), this.textAdapter));
  public readonly resolvedPlaceholder = computed(() => resolveText(this.placeholder(), this.textAdapter));
  public readonly resolvedAppearance = computed(() => this.appearance() ?? this.defaults.settings().appearance);
  public readonly resolvedFloatLabel = computed(() => this.floatLabel() ?? this.defaults.settings().floatLabel);
  public readonly resolvedHideRequiredMarker = computed(() => this.hideRequiredMarker() ?? this.defaults.settings().hideRequiredMarker);
  public readonly resolvedSubscriptSizing = computed(() => this.subscriptSizing() ?? this.defaults.settings().subscriptSizing);
  public readonly resolvedTooltipOnTruncate = computed(() => this.tooltipOnTruncate() ?? this.defaults.settings().tooltipOnTruncate ?? true);
  public readonly describedBy = computed(() =>
    [...new Set([this.ariaDescribedBy(), `${this.controlId()}-description`, ...this.extraDescriptions()].filter(Boolean))].join(' ')
  );

  public readonly effectiveDisabled = computed(() => {
    this.controlVersion();

    return this.disabled() || this.ngControl?.disabled === true;
  });

  public readonly effectiveRequired = computed(() => {
    this.controlVersion();
    const control = this.ngControl?.control;

    return this.required() || !!control?.hasValidator?.(Validators.required) || !!control?.hasValidator?.(Validators.requiredTrue);
  });

  private readonly currentErrors = computed<readonly ValidationError.WithOptionalFieldTree[]>(() => {
    this.controlVersion();

    if (this.errors().length) return this.errors();

    const errors = this.ngControl?.errors;

    return errors ? Object.entries(errors).map(([kind, context]) => ({ kind, context })) : [];
  });

  public readonly showError = computed(() => {
    this.controlVersion();
    const state = {
      invalid: this.invalid() || this.currentErrors().length > 0 || !!this.error(),
      touched: this.ngControl?.touched ?? (this.touched() || this.localTouched()),
      dirty: this.ngControl?.dirty ?? this.dirty(),
      submitted: this.submitted() || this.submittedByParent(),
      disabled: this.effectiveDisabled(),
      pending: this.pending()
    };
    const policy = this.errorPolicy() ?? this.defaults.settings().errorPolicy;

    if (state.disabled || !state.invalid) return false;
    if (typeof policy === 'function') return policy(state);

    return policy === 'always' || state.submitted || (policy === 'dirty' ? state.dirty : policy === 'touched' ? state.touched : false);
  });

  public readonly errorTexts = computed<readonly string[]>(() => {
    if (!this.showError()) return [];
    if (this.error()) return [resolveText(this.error(), this.textAdapter)];

    const priority = this.errorPriority();
    const errors = [...this.currentErrors()].sort((a, b) => {
      const aIndex = priority.indexOf(a.kind);
      const bIndex = priority.indexOf(b.kind);

      return (aIndex < 0 ? priority.length : aIndex) - (bIndex < 0 ? priority.length : bIndex);
    });
    const chosen = (this.errorMode() ?? this.defaults.settings().errorMode) === 'all' ? errors : errors.slice(0, 1);

    return chosen.map((error) => resolveValidationMessage(error, this.errorMessages(), this.defaults.settings().errorMessages, this.textAdapter));
  });

  public readonly fieldControl: IFormFieldControl = {
    controlId: this.controlId,
    label: this.label,
    showError: this.showError,
    errorTexts: this.errorTexts,
    required: this.effectiveRequired,
    disabled: this.effectiveDisabled,
    pending: this.pending,
    focus: (options) => this.focus(options),
    setDescribedByIds: (ids) => {
      if (this.extraDescriptions().join(' ') !== ids.join(' ')) this.extraDescriptions.set(ids);
    }
  };

  constructor() {
    afterNextRender(() => {
      this.focusMonitor
        .monitor(this.hostElement, true)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((origin) => this.keyboardFocused.set(origin === 'keyboard'));
      this.destroyRef.onDestroy(() => this.focusMonitor.stopMonitoring(this.hostElement));
      const form = this.hostElement.closest('form');
      const commit = () => {
        this.submittedByParent.set(true);
        this.commitPendingValue();
      };
      form?.addEventListener('submit', commit, { capture: true });
      this.destroyRef.onDestroy(() => form?.removeEventListener('submit', commit, { capture: true }));
    });
    const parent = this.parentGroup ?? this.parentTemplate;
    parent?.ngSubmit.pipe(takeUntilDestroyed(inject(DestroyRef))).subscribe(() => {
      this.submittedByParent.set(true);
      this.commitPendingValue();
    });
  }

  public ngOnInit(): void {
    this.ngControl?.control?.events?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.controlVersion.update((version) => version + 1);
    });
    this.ngControl?.control?.valueChanges?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.clearPendingEdit());
    const parent = this.parentGroup ?? this.parentTemplate;
    parent?.form.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof FormResetEvent) this.reset();
    });
  }

  public focus(options?: FocusOptions): void {
    this.hostElement.querySelector<HTMLElement>('input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)')?.focus(options);
  }

  /** Clears component interaction state; the owning form remains responsible for resetting its value. */
  public reset(): void {
    this.localTouched.set(false);
    this.submittedByParent.set(false);
  }

  protected markAsTouched(): void {
    this.localTouched.set(true);
    this.commitPendingValue('blur');
    this.touch.emit();
  }

  protected onControlPointerDown(): void {
    if (this.isReadonly()) this.keyboardFocused.set(false);
  }

  protected commitPendingValue(_trigger?: 'blur'): void {}

  protected clearPendingEdit(): void {}
}
