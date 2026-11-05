import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';
import { afterNextRender, booleanAttribute, computed, DestroyRef, Directive, ElementRef, inject, input, OnInit, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroupDirective, FormResetEvent, NgControl, NgForm, Validators } from '@angular/forms';
import { DisabledReason, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

import type { ValidationMessage } from '@forms/types/validation.types';

import { BX_I18N, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';

import { resolveValidationMessage } from '@forms/helpers/validation.helpers';
import { IFormFieldControl } from '@forms/interfaces/iform-field-control.interface';
import { FormSettingsService } from '@forms/services/form-settings.service';
import { ErrorDisplayMode, ErrorDisplayPolicy, FloatLabel, FormFieldAppearance, SubscriptSizing, ValidationMessages } from '@forms/types/validation.types';

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
  private readonly formSettingsService = inject(FormSettingsService);
  private readonly formGroupDirective = inject(FormGroupDirective, { optional: true, skipSelf: true });
  private readonly ngForm = inject(NgForm, { optional: true, skipSelf: true });
  private readonly focusMonitor = inject(FocusMonitor);

  protected readonly destroyRef = inject(DestroyRef);
  protected readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** Optional Angular form directive attached to the host; null when the control is outside Angular forms. */
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  private readonly generatedId: string = `bx-field-${uuidv4()}`;

  private readonly submittedByParent: WritableSignal<boolean> = signal(false);

  private readonly extraDescriptions: WritableSignal<readonly string[]> = signal<readonly string[]>([]);

  private readonly localTouched: WritableSignal<boolean> = signal(false);

  private readonly controlVersion: WritableSignal<number> = signal(0);

  private readonly currentErrors: Signal<readonly ValidationError.WithOptionalFieldTree[]> = computed<readonly ValidationError.WithOptionalFieldTree[]>(() => {
    this.controlVersion();

    if (this.errors().length) return this.errors();

    const errors = this.ngControl?.errors;

    return errors ? Object.entries(errors).map(([kind, context]) => ({ kind, context })) : [];
  });

  protected readonly keyboardFocused: WritableSignal<boolean> = signal(false);

  /** Whether edits are blocked while preserving focus and enabled presentation; combines readonly and readOnly inputs. */
  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());
  /** Stable resolved control identifier, using the supplied ID or a generated fallback. */
  public readonly controlId: Signal<string> = computed(() => this.id() ?? this.generatedId);
  /** Display label after resolving plain text or a translation key through the current adapter. */
  public readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.textAdapter));
  /** Placeholder after resolving plain text or a translation key. */
  public readonly resolvedPlaceholder: Signal<string> = computed(() => resolveText(this.placeholder(), this.textAdapter));
  /** Effective form-field appearance after instance and shared settings are merged. */
  public readonly resolvedAppearance: Signal<FormFieldAppearance> = computed(() => this.appearance() ?? this.formSettingsService.settings().appearance);
  /** Effective floating-label policy after instance and shared settings are merged. */
  public readonly resolvedFloatLabel: Signal<FloatLabel> = computed(() => this.floatLabel() ?? this.formSettingsService.settings().floatLabel);
  /** Whether the required marker is hidden after resolving instance and shared settings. */
  public readonly resolvedHideRequiredMarker: Signal<boolean> = computed(
    () => this.hideRequiredMarker() ?? this.formSettingsService.settings().hideRequiredMarker
  );
  /** Resolved hint/error spacing policy after instance and shared form settings are combined. */
  public readonly resolvedSubscriptSizing: Signal<SubscriptSizing> = computed(
    () => this.subscriptSizing() ?? this.formSettingsService.settings().subscriptSizing
  );
  /** Whether clipped text may expose the shared tooltip after instance and shared settings are resolved. */
  public readonly resolvedTooltipOnTruncate: Signal<boolean> = computed(
    () => this.tooltipOnTruncate() ?? this.formSettingsService.settings().tooltipOnTruncate ?? true
  );
  /** Combined accessible description IDs for hints, errors, and consumer-supplied descriptions. */
  public readonly describedBy: Signal<string> = computed(() =>
    [...new Set([this.ariaDescribedBy(), `${this.controlId()}-description`, ...this.extraDescriptions()].filter(Boolean))].join(' ')
  );
  /** Disabled state resolved from the control inputs and its Angular form binding. */
  public readonly effectiveDisabled: Signal<boolean> = computed(() => {
    this.controlVersion();

    return this.disabled() || this.ngControl?.disabled === true;
  });
  /** Required state resolved from explicit configuration and form validation. */
  public readonly effectiveRequired: Signal<boolean> = computed(() => {
    this.controlVersion();

    const control = this.ngControl?.control;

    return this.required() || !!control?.hasValidator?.(Validators.required) || !!control?.hasValidator?.(Validators.requiredTrue);
  });
  /** Whether validation feedback is visible under the configured error-display policy. */
  public readonly showError: Signal<boolean> = computed(() => {
    this.controlVersion();

    const state = {
      invalid: this.invalid() || this.currentErrors().length > 0 || !!this.error(),
      touched: this.ngControl?.touched ?? (this.touched() || this.localTouched()),
      dirty: this.ngControl?.dirty ?? this.dirty(),
      submitted: this.submitted() || this.submittedByParent(),
      disabled: this.effectiveDisabled(),
      pending: this.pending()
    };
    const policy = this.errorPolicy() ?? this.formSettingsService.settings().errorPolicy;

    if (state.disabled || !state.invalid) return false;

    if (typeof policy === 'function') return policy(state);

    return policy === 'always' || state.submitted || (policy === 'dirty' ? state.dirty : policy === 'touched' ? state.touched : false);
  });
  /** Visible validation messages after overrides, priority, policy, and translations are resolved. */
  public readonly errorTexts: Signal<readonly string[]> = computed<readonly string[]>(() => {
    if (!this.showError()) return [];

    if (this.error()) return [resolveText(this.error(), this.textAdapter)];

    const priority = this.errorPriority();
    const errors = [...this.currentErrors()].sort((a, b) => {
      const aIndex = priority.indexOf(a.kind);
      const bIndex = priority.indexOf(b.kind);

      return (aIndex < 0 ? priority.length : aIndex) - (bIndex < 0 ? priority.length : bIndex);
    });
    const chosen = (this.errorMode() ?? this.formSettingsService.settings().errorMode) === 'all' ? errors : errors.slice(0, 1);

    return chosen.map((error) => resolveValidationMessage(error, this.errorMessages(), this.formSettingsService.settings().errorMessages, this.textAdapter));
  });

  /** Current signal-forms field state, when a signal-forms binding is attached. */
  public readonly fieldControl: IFormFieldControl;

  /**
   * Optional stable identifier for the control or overlay; omitted control IDs are generated by the owning component. Optional; omission leaves the
   * value undefined.
   */
  public readonly id: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Optional; omission leaves the value undefined. */
  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /**
   * Placeholder text shown while the control has no value; translation-key values resolve through BX_I18N. Optional; omission leaves the value
   * undefined.
   */
  public readonly placeholder: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /**
   * Optional tooltip text for additional context; plain strings and shared translation keys are supported. Optional; omission leaves the value
   * undefined.
   */
  public readonly tooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Supporting text below the control on the leading side; supports shared translation keys. Optional; omission leaves the value undefined. */
  public readonly hint: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Supporting text below the control on the trailing side; supports shared translation keys. Optional; omission leaves the value undefined. */
  public readonly hintEnd: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Explicit validation or request-error text; supports shared translation keys. Optional; omission leaves the value undefined. */
  public readonly error: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional accessible name when visible text does not provide an appropriate control name. Optional; omission leaves the value undefined. */
  public readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional IDs of elements that provide the control's accessible name. Optional; omission leaves the value undefined. */
  public readonly ariaLabelledBy: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional IDs of additional descriptions associated with the control. Optional; omission leaves the value undefined. */
  public readonly ariaDescribedBy: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional application-owned test identifier rendered on the control. Optional; omission leaves the value undefined. */
  public readonly dataTestId: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional native control name used by the browser and Angular form binding. Defaults to `''`. */
  public readonly name: InputSignal<string> = input<string>('');
  /** Validation errors supplied by the owning form or component. Defaults to an empty array. */
  public readonly errors: InputSignal<readonly ValidationError.WithOptionalFieldTree[]> = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  /** Whether the bound form reports the current value as invalid. Defaults to `false`. */
  public readonly invalid: InputSignal<boolean> = input(false);
  /** Whether asynchronous form validation is pending. Defaults to `false`. */
  public readonly pending: InputSignal<boolean> = input(false);
  /** Whether the control has been visited or blurred according to its form binding. Defaults to `false`. */
  public readonly touched: InputSignal<boolean> = input(false);
  /** Whether the value has been changed through user interaction. Defaults to `false`. */
  public readonly dirty: InputSignal<boolean> = input(false);
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Angular forms readonly state; prevents edits without disabling or removing keyboard focus. Defaults to `false`. */
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Consumer-facing alias for readonly; either input makes the control read-only. Defaults to `false`. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether the control is hidden and excluded from visible layout. Defaults to `false`. */
  public readonly hidden: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether the control is required; native/form validation and the required indicator use this state. Defaults to `false`. */
  public readonly required: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether asynchronous work is in progress; the owning control renders its appropriate busy feedback. Defaults to `false`. */
  public readonly loading: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Reasons supplied by signal forms explaining why editing is disabled. Defaults to an empty array. */
  public readonly disabledReasons: InputSignal<readonly WithOptionalFieldTree<DisabledReason>[]> = input<readonly WithOptionalFieldTree<DisabledReason>[]>([]);
  /** Whether the owning form has been submitted. Defaults to `false`. */
  public readonly submitted: InputSignal<boolean> = input(false);
  /** Application overrides for validation-message text, resolved through the shared translation adapter. Defaults to an empty configuration. */
  public readonly errorMessages: InputSignal<Readonly<Record<string, ValidationMessage | undefined>>> = input<ValidationMessages>({});
  /** Ordered validation keys controlling which error messages are shown first. Defaults to an empty array. */
  public readonly errorPriority: InputSignal<readonly string[]> = input<readonly string[]>([]);
  /** Policy determining when validation errors become visible. Optional; omission leaves the value undefined. */
  public readonly errorPolicy: InputSignal<ErrorDisplayPolicy | undefined> = input<ErrorDisplayPolicy | undefined>(undefined);
  /** Whether to present one validation error or all eligible messages. Optional; omission leaves the value undefined. */
  public readonly errorMode: InputSignal<ErrorDisplayMode | undefined> = input<ErrorDisplayMode | undefined>(undefined);
  /** Instance form-field appearance; omission inherits shared form defaults. */
  public readonly appearance: InputSignal<FormFieldAppearance | undefined> = input<FormFieldAppearance | undefined>(undefined);
  /** Floating-label behavior; omission uses shared form defaults. */
  public readonly floatLabel: InputSignal<FloatLabel | undefined> = input<FloatLabel | undefined>(undefined);
  /** Whether the visible required marker is hidden; does not change required validation. Optional; omission leaves the value undefined. */
  public readonly hideRequiredMarker: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);
  /** Space reserved for hints and validation feedback; omission uses shared form defaults. */
  public readonly subscriptSizing: InputSignal<SubscriptSizing | undefined> = input<SubscriptSizing | undefined>(undefined);
  /** Override automatic truncation tooltips while retaining ellipsis and measurement. Application default is true. */
  public readonly tooltipOnTruncate: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

  /** Emits when user interaction marks the control touched. */
  public readonly touch: OutputEmitterRef<void> = output();

  constructor() {
    this.fieldControl = {
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

    afterNextRender(() => {
      this.focusMonitor
        .monitor(this.nativeElement, true)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((origin) => this.keyboardFocused.set(origin === 'keyboard'));
      this.destroyRef.onDestroy(() => this.focusMonitor.stopMonitoring(this.nativeElement));

      const form = this.nativeElement.closest('form');
      const commit = () => {
        this.submittedByParent.set(true);
        this.commitPendingValue();
      };

      form?.addEventListener('submit', commit, { capture: true });
      this.destroyRef.onDestroy(() => form?.removeEventListener('submit', commit, { capture: true }));
    });

    const parent = this.formGroupDirective ?? this.ngForm;

    parent?.ngSubmit.pipe(takeUntilDestroyed(inject(DestroyRef))).subscribe(() => {
      this.submittedByParent.set(true);
      this.commitPendingValue();
    });
  }

  /** Observe form validation/value changes and parent resets until the control is destroyed. */
  public ngOnInit(): void {
    this.ngControl?.control?.events?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.controlVersion.update((version) => version + 1);
    });
    this.ngControl?.control?.valueChanges?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.clearPendingEdit());

    const parent = this.formGroupDirective ?? this.ngForm;

    parent?.form.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof FormResetEvent) this.reset();
    });
  }

  /**
   * Move focus to the component's native control using the supplied browser focus options.
   *
   * @param options - Browser focus options, including preventScroll when focus should not move the page. Optional.
   */
  public focus(options?: FocusOptions): void {
    this.nativeElement
      .querySelector<HTMLElement>('input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)')
      ?.focus(options);
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
