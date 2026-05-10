import { Directive, inject, input, signal, OnInit, isDevMode } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ResolvableText, ValidatorKey } from '../types/core.types';

@Directive()
export abstract class BxBaseControl<T> implements ControlValueAccessor, OnInit {
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly placeholder = input<ResolvableText | undefined>(undefined);
  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  public readonly dataTestId = input<string | undefined>(undefined);
  public readonly ariaLabel = input<string | undefined>(undefined);
  
  public readonly errorMessages = input<Partial<Record<ValidatorKey, ResolvableText>>>({});

  public readonly required = input<boolean>(false);
  public readonly loading = input<boolean>(false);
  public readonly disabled = input<boolean>(false);

  protected readonly internalValue = signal<T | null>(null);
  protected readonly isTouched = signal<boolean>(false);
  protected readonly isDisabled = signal<boolean>(false);

  protected onChange: (value: T | null) => void = () => {};
  protected onTouched: () => void = () => {};

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    this.isDisabled.set(this.disabled());

    if (isDevMode() && this.ngControl?.control?.validator) {
      const hasMessages = Object.keys(this.errorMessages()).length > 0;
      if (!hasMessages) {
        console.error(`[Blocks UI Strict Mode] The form control for this field has validators, but the [errorMessages] input is empty. You must provide error messages for all applied validators.`);
      }
    }
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
    if (this.isDisabled()) return;
    this.internalValue.set(value);
    this.onChange(value);
  }

  protected markAsTouched(): void {
    if (!this.isTouched()) {
      this.isTouched.set(true);
      this.onTouched();
    }
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

      if (typeof errors[firstKey as string] === 'string') {
        return errors[firstKey as string];
      }

      if (isDevMode()) {
        console.error(`[Blocks UI Strict Mode] Validation failed for key '${firstKey}', but no message was provided in [errorMessages].`);
      }
      
      return `[Missing error message: ${firstKey}]`; 
    }
    return undefined;
  }
}