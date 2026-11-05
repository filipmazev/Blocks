import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';
import { afterNextRender, booleanAttribute, computed, DestroyRef, Directive, ElementRef, inject, input, OnInit, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroupDirective, FormResetEvent, NgControl, NgForm, Validators } from '@angular/forms';
import { DisabledReason, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

import type { ValidationMessage } from '@forms/components/shared/types/validation.types';

import { BX_I18N, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';

import { resolveValidationMessage } from '@forms/components/shared/helpers/validation.helpers';
import { IFormFieldControl } from '@forms/components/shared/interfaces/iform-field-control.interface';
import { FormSettingsService } from '@forms/components/shared/services/form-settings.service';
import {
  ErrorDisplayMode,
  ErrorDisplayPolicy,
  FloatLabel,
  FormFieldAppearance,
  SubscriptSizing,
  ValidationMessages
} from '@forms/components/shared/types/validation.types';

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
  private readonly parentGroup = inject(FormGroupDirective, { optional: true, skipSelf: true });
  private readonly parentTemplate = inject(NgForm, { optional: true, skipSelf: true });
  private readonly destroyRef = inject(DestroyRef);
  private readonly focusMonitor = inject(FocusMonitor);

  protected readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

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

  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());
  public readonly controlId: Signal<string> = computed(() => this.id() ?? this.generatedId);
  public readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.textAdapter));
  public readonly resolvedPlaceholder: Signal<string> = computed(() => resolveText(this.placeholder(), this.textAdapter));
  public readonly resolvedAppearance: Signal<FormFieldAppearance> = computed(() => this.appearance() ?? this.defaults.settings().appearance);
  public readonly resolvedFloatLabel: Signal<FloatLabel> = computed(() => this.floatLabel() ?? this.defaults.settings().floatLabel);
  public readonly resolvedHideRequiredMarker: Signal<boolean> = computed(() => this.hideRequiredMarker() ?? this.defaults.settings().hideRequiredMarker);
  public readonly resolvedSubscriptSizing: Signal<SubscriptSizing> = computed(() => this.subscriptSizing() ?? this.defaults.settings().subscriptSizing);
  public readonly resolvedTooltipOnTruncate: Signal<boolean> = computed(() => this.tooltipOnTruncate() ?? this.defaults.settings().tooltipOnTruncate ?? true);
  public readonly describedBy: Signal<string> = computed(() =>
    [...new Set([this.ariaDescribedBy(), `${this.controlId()}-description`, ...this.extraDescriptions()].filter(Boolean))].join(' ')
  );
  public readonly effectiveDisabled: Signal<boolean> = computed(() => {
    this.controlVersion();

    return this.disabled() || this.ngControl?.disabled === true;
  });
  public readonly effectiveRequired: Signal<boolean> = computed(() => {
    this.controlVersion();

    const control = this.ngControl?.control;

    return this.required() || !!control?.hasValidator?.(Validators.required) || !!control?.hasValidator?.(Validators.requiredTrue);
  });
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
    const policy = this.errorPolicy() ?? this.defaults.settings().errorPolicy;

    if (state.disabled || !state.invalid) return false;

    if (typeof policy === 'function') return policy(state);

    return policy === 'always' || state.submitted || (policy === 'dirty' ? state.dirty : policy === 'touched' ? state.touched : false);
  });
  public readonly errorTexts: Signal<readonly string[]> = computed<readonly string[]>(() => {
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

  public readonly fieldControl: IFormFieldControl;

  public readonly id: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly placeholder: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly tooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly hint: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly hintEnd: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly error: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly ariaLabelledBy: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly ariaDescribedBy: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly dataTestId: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly name: InputSignal<string> = input<string>('');
  public readonly errors: InputSignal<readonly ValidationError.WithOptionalFieldTree[]> = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  public readonly invalid: InputSignal<boolean> = input(false);
  public readonly pending: InputSignal<boolean> = input(false);
  public readonly touched: InputSignal<boolean> = input(false);
  public readonly dirty: InputSignal<boolean> = input(false);
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly hidden: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly required: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly loading: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly disabledReasons: InputSignal<readonly WithOptionalFieldTree<DisabledReason>[]> = input<readonly WithOptionalFieldTree<DisabledReason>[]>([]);
  public readonly submitted: InputSignal<boolean> = input(false);
  public readonly errorMessages: InputSignal<Readonly<Record<string, ValidationMessage | undefined>>> = input<ValidationMessages>({});
  public readonly errorPriority: InputSignal<readonly string[]> = input<readonly string[]>([]);
  public readonly errorPolicy: InputSignal<ErrorDisplayPolicy | undefined> = input<ErrorDisplayPolicy | undefined>(undefined);
  public readonly errorMode: InputSignal<ErrorDisplayMode | undefined> = input<ErrorDisplayMode | undefined>(undefined);
  public readonly appearance: InputSignal<FormFieldAppearance | undefined> = input<FormFieldAppearance | undefined>(undefined);
  public readonly floatLabel: InputSignal<FloatLabel | undefined> = input<FloatLabel | undefined>(undefined);
  public readonly hideRequiredMarker: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);
  public readonly subscriptSizing: InputSignal<SubscriptSizing | undefined> = input<SubscriptSizing | undefined>(undefined);
  /** Override automatic truncation tooltips while retaining ellipsis and measurement. Application default is true. */
  public readonly tooltipOnTruncate: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

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
