import type { InputSignal, InputSignalWithTransform, Signal, WritableSignal } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';
import {
  afterNextRender,
  booleanAttribute,
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  isDevMode,
  OnInit,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

import { ResolvableText, ValidatorKey } from '@core/types/core.types';

@Directive({ host: { '[class.bx-readonly]': 'isReadonly()', '(pointerdown)': 'onControlPointerDown()' } })
export abstract class BxBaseControl<T> implements ControlValueAccessor, OnInit {
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** Optional Angular form directive attached to the host; null when the control is outside Angular forms. */
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  protected readonly internalValue: WritableSignal<T | null> = signal<T | null>(null);

  protected readonly isTouched: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly isDisabled: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly keyboardFocused: WritableSignal<boolean> = signal(false);

  /** Whether edits are blocked while preserving focus and enabled presentation; combines readonly and readOnly inputs. */
  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());

  /** Optional control label, supporting plain strings and shared translation keys. Optional; omission leaves the value undefined. */
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
  /** Optional application-owned test identifier rendered on the control. Optional; omission leaves the value undefined. */
  public readonly dataTestId: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Optional accessible name when visible text does not provide an appropriate control name. Optional; omission leaves the value undefined. */
  public readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Application overrides for validation-message text, resolved through the shared translation adapter. Defaults to an empty configuration. */
  public readonly errorMessages: InputSignal<Partial<Record<ValidatorKey, ResolvableText>>> = input<Partial<Record<ValidatorKey, ResolvableText>>>({});
  /** Whether the control is required; native/form validation and the required indicator use this state. Defaults to `false`. */
  public readonly required: InputSignal<boolean> = input<boolean>(false);
  /** Angular forms readonly state; prevents edits without disabling or removing keyboard focus. Defaults to `false`. */
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Consumer-facing alias for readonly; either input makes the control read-only. Defaults to `false`. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether asynchronous work is in progress; the owning control renders its appropriate busy feedback. Defaults to `false`. */
  public readonly loading: InputSignal<boolean> = input<boolean>(false);
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignal<boolean> = input<boolean>(false);

  protected onChange: (value: T | null) => void = () => {};
  protected onTouched: () => void = () => {};

  constructor() {
    afterNextRender(() => {
      this.focusMonitor
        .monitor(this.nativeElement, true)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((origin) => this.keyboardFocused.set(origin === 'keyboard'));
      this.destroyRef.onDestroy(() => this.focusMonitor.stopMonitoring(this.nativeElement));
    });

    effect(() => {
      this.isDisabled.set(this.disabled() || this.ngControl?.disabled === true);
    });

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /** Synchronize the initial disabled state with explicit input and Angular form state. */
  public ngOnInit(): void {
    this.isDisabled.set(this.disabled() || this.ngControl?.disabled === true);
  }

  /**
   * Accept an Angular forms model value without emitting a user-originated change.
   *
   * @param value - Model value supplied by the form, including null when empty.
   */
  public writeValue(value: T | null): void {
    this.internalValue.set(value);
  }

  /**
   * Register the callback used to report user-originated value changes to Angular forms.
   *
   * @param fn - Angular forms callback receiving the new value when the user edits this control.
   */
  public registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  /**
   * Register the callback used to notify Angular forms that the control was touched.
   *
   * @param fn - Angular forms callback invoked when the control is touched or blurred.
   */
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Apply disabled state supplied by Angular forms.
   *
   * @param isDisabled - Whether Angular forms currently disables the control.
   */
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  protected updateValue(value: T | null): void {
    if (this.isDisabled() || this.isReadonly()) return;

    this.internalValue.set(value);
    this.onChange(value);
  }

  protected markAsTouched(): void {
    this.isTouched.set(true);
    this.onTouched();
  }

  protected onControlPointerDown(): void {
    if (this.isReadonly()) this.keyboardFocused.set(false);
  }

  protected isFieldRequired(): boolean {
    const control = this.ngControl?.control;

    return this.required() || !!control?.hasValidator?.(Validators.required) || !!control?.hasValidator?.(Validators.requiredTrue);
  }

  protected get errorMessage(): ResolvableText | undefined {
    if (this.ngControl?.invalid && (this.ngControl.touched || this.ngControl.dirty)) {
      const errors = this.ngControl.errors;

      if (!errors) return undefined;

      const firstKey = Object.keys(errors)[0] as ValidatorKey;
      const customErrorMap = this.errorMessages();

      if (customErrorMap && customErrorMap[firstKey]) {
        return customErrorMap[firstKey];
      }

      const error: unknown = errors[firstKey as string];

      if (typeof error === 'string') return error;

      if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') return error.message;

      if (isDevMode()) {
        console.error(`[Blocks UI Strict Mode] Validation failed for key '${firstKey}', but no message was provided in [errorMessages].`);
      }

      return `[Missing error message: ${firstKey}]`;
    }

    return undefined;
  }
}
