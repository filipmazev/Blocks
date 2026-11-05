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
  private readonly focusElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  protected readonly internalValue: WritableSignal<T | null> = signal<T | null>(null);

  protected readonly isTouched: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly isDisabled: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly keyboardFocused: WritableSignal<boolean> = signal(false);

  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());

  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly placeholder: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly tooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly dataTestId: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly errorMessages: InputSignal<Partial<Record<ValidatorKey, ResolvableText>>> = input<Partial<Record<ValidatorKey, ResolvableText>>>({});
  public readonly required: InputSignal<boolean> = input<boolean>(false);
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly loading: InputSignal<boolean> = input<boolean>(false);
  public readonly disabled: InputSignal<boolean> = input<boolean>(false);

  protected onChange: (value: T | null) => void = () => {};
  protected onTouched: () => void = () => {};

  constructor() {
    afterNextRender(() => {
      this.focusMonitor
        .monitor(this.focusElement, true)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((origin) => this.keyboardFocused.set(origin === 'keyboard'));
      this.destroyRef.onDestroy(() => this.focusMonitor.stopMonitoring(this.focusElement));
    });

    effect(() => {
      this.isDisabled.set(this.disabled() || this.ngControl?.disabled === true);
    });

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    this.isDisabled.set(this.disabled() || this.ngControl?.disabled === true);
  }

  public writeValue(value: T | null): void {
    this.internalValue.set(value);
  }

  public registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

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
