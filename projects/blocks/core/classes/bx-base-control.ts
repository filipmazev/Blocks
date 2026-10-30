import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  signal,
  OnInit,
  isDevMode,
  effect,
  computed,
  booleanAttribute
} from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { ResolvableText, ValidatorKey } from '../types/core.types';

@Directive({ host: { '[class.bx-readonly]': 'isReadonly()', '(pointerdown)': 'onControlPointerDown()' } })
export abstract class BxBaseControl<T> implements ControlValueAccessor, OnInit {
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly focusElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  protected readonly internalValue = signal<T | null>(null);
  protected readonly isTouched = signal<boolean>(false);
  protected readonly isDisabled = signal<boolean>(false);
  protected readonly keyboardFocused = signal(false);
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  public readonly label = input<ResolvableText | undefined>(undefined);

  public readonly placeholder = input<ResolvableText | undefined>(undefined);

  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  public readonly dataTestId = input<string | undefined>(undefined);
  public readonly ariaLabel = input<string | undefined>(undefined);

  public readonly errorMessages = input<Partial<Record<ValidatorKey, ResolvableText>>>({});

  public readonly required = input<boolean>(false);
  public readonly readonly = input(false, { transform: booleanAttribute });
  public readonly readOnly = input(false, { transform: booleanAttribute });
  public readonly isReadonly = computed(() => this.readonly() || this.readOnly());
  public readonly loading = input<boolean>(false);
  public readonly disabled = input<boolean>(false);

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
    // Forms may call setDisabledState before ngOnInit. Preserve that state.
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

  //#region Helpers

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
  //#endregion
}
