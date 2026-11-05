import type { InputSignal, InputSignalWithTransform, Signal, WritableSignal } from '@angular/core';
import type { TransformedValueSignal } from '@angular/forms/signals';

import { CdkAutofill, CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, signal, viewChild } from '@angular/core';
import { transformedValue } from '@angular/forms/signals';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { BxValueControl } from '@forms/classes/bx-value-control';
import { FormField } from '@forms/components/form-field/form-field';
import { numericConstraint } from '@forms/helpers/numeric-constraint.helpers';
import { InputFieldTypes } from '@forms/types/form.types';

@Component({
  selector: 'bx-input-field',
  imports: [BxSurfaceDirective, FormField, Icon, CdkAutofill, CdkTextareaAutosize, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './input-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './input-field.scss'
})
export class InputField extends BxValueControl<string | number> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly editingRaw: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  private readonly badInput: WritableSignal<boolean> = signal(false);

  private readonly labelText: Signal<TruncateDirective | undefined> = viewChild(TruncateDirective);

  protected readonly labelTruncated: Signal<boolean> = computed(() => this.labelText()?.truncated() ?? false);

  protected readonly isFocused: WritableSignal<boolean> = signal(false);
  protected readonly autofilled: WritableSignal<boolean> = signal(false);

  protected readonly rawValue: TransformedValueSignal<string> = transformedValue(this.value, {
    parse: (raw: string) => {
      if (this.type() !== 'number') return { value: raw };

      const parsed = raw === '' ? null : Number(raw);

      return this.badInput() || (parsed !== null && !Number.isFinite(parsed)) ? { error: { kind: 'parse' } } : { value: parsed };
    },
    format: (value) => value?.toString() ?? ''
  });

  protected readonly displayedValue: Signal<string> = computed(() => this.editingRaw() ?? this.rawValue());
  protected readonly isSpinDownDisabled: Signal<boolean> = computed(
    () => this.disabled() || this.isReadonly() || Number(this.value() ?? 0) <= (this.min() ?? -Infinity)
  );
  protected readonly isSpinUpDisabled: Signal<boolean> = computed(
    () => this.disabled() || this.isReadonly() || Number(this.value() ?? 0) >= (this.max() ?? Infinity)
  );
  protected readonly isFloating: Signal<boolean> = computed(
    () =>
      this.resolvedFloatLabel() === 'always' ||
      this.isFocused() ||
      this.autofilled() ||
      !!this.displayedValue() ||
      this.multiline() ||
      ['date', 'time', 'datetime-local'].includes(this.type())
  );
  protected readonly resolvedDecreaseLabel: Signal<string> = computed(() => resolveText(this.decreaseLabel(), this.i18n));
  protected readonly resolvedIncreaseLabel: Signal<string> = computed(() => resolveText(this.increaseLabel(), this.i18n));

  /** Native input type used by the text field. Defaults to `'text'`. */
  public readonly type: InputSignal<InputFieldTypes> = input<InputFieldTypes>('text');
  /** Minimum permitted numeric or range value. Optional; omission leaves the value undefined. */
  public readonly min: InputSignalWithTransform<number | undefined, string | number | undefined> = input<number | undefined, string | number | undefined>(
    undefined,
    { transform: numericConstraint }
  );
  /** Maximum permitted numeric or range value. Optional; omission leaves the value undefined. */
  public readonly max: InputSignalWithTransform<number | undefined, string | number | undefined> = input<number | undefined, string | number | undefined>(
    undefined,
    { transform: numericConstraint }
  );
  /** Minimum permitted text length for native validation. Optional; omission leaves the value undefined. */
  public readonly minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Maximum permitted text length for native validation. Optional; omission leaves the value undefined. */
  public readonly maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Native validation pattern applied to the input. Defaults to an empty array. */
  public readonly pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([]);
  /** Increment used for numeric adjustments and range selection. Defaults to `1`. */
  public readonly step: InputSignal<number | 'any'> = input<number | 'any'>(1);
  /** Native browser autocomplete hint forwarded to the underlying text input. Optional; omission leaves the value undefined. */
  public readonly autocomplete: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Native virtual-keyboard hint forwarded to the input. Optional; omission leaves the value undefined. */
  public readonly inputmode: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Whether native browser spell checking is enabled. Defaults to `true`. */
  public readonly spellcheck: InputSignal<boolean> = input(true);
  /** Whether the control renders a textarea instead of a single-line input. Defaults to `false`. */
  public readonly multiline: InputSignal<boolean> = input(false);
  /** Initial visible textarea row count. Defaults to `3`. */
  public readonly rows: InputSignal<number> = input(3);
  /** Whether textarea height follows its content within the configured row limits. Defaults to `true`. */
  public readonly autosize: InputSignal<boolean> = input(true);
  /** Minimum visible row count when textarea autosizing is enabled. Defaults to `2`. */
  public readonly minRows: InputSignal<number> = input(2);
  /** Maximum visible row count when textarea autosizing is enabled. Defaults to `8`. */
  public readonly maxRows: InputSignal<number> = input(8);
  /** Accessible name of the numeric decrement action; supports shared translation keys. Defaults to `'Decrease value'`. */
  public readonly decreaseLabel: InputSignal<ResolvableText> = input<ResolvableText>('Decrease value');
  /** Accessible name of the numeric increment action; supports shared translation keys. Defaults to `'Increase value'`. */
  public readonly increaseLabel: InputSignal<ResolvableText> = input<ResolvableText>('Increase value');

  private composing: boolean = false;
  private spinTimeout?: ReturnType<typeof setTimeout>;
  private spinInterval?: ReturnType<typeof setInterval>;

  constructor() {
    super();
    inject(DestroyRef).onDestroy(() => this.stopSpin());
  }

  /** Reset interaction and temporary numeric input state and stop any held spinner action. */
  public override reset(): void {
    super.reset();
    this.editingRaw.set(undefined);
    this.badInput.set(false);
    this.stopSpin();
  }

  /**
   * Apply a numeric step and begin held-button repetition when editing is allowed.
   *
   * @param direction - Step direction: positive increments and negative decrements.
   * @param event - Pointer event used to capture the held spinner action.
   */
  public startSpin(direction: number, event: Event): void {
    event.preventDefault();

    if (this.disabled() || this.isReadonly()) return;

    this.applyStep(direction);
    this.spinTimeout = setTimeout(() => {
      this.spinInterval = setInterval(() => this.applyStep(direction), 80);
    }, 400);
  }

  /** Stop any held numeric-spinner repetition and clear its pending timers. */
  public stopSpin(): void {
    clearTimeout(this.spinTimeout);
    clearInterval(this.spinInterval);
  }

  protected override clearPendingEdit(): void {
    super.clearPendingEdit();
    this.editingRaw.set(undefined);
    this.badInput.set(false);
  }

  protected onInput(event: Event): void {
    if (this.composing || this.disabled() || this.isReadonly()) return;

    const target = event.target as HTMLInputElement;

    this.badInput.set(target.validity.badInput);

    const updateOn = this.ngControl?.control?.updateOn;

    if (updateOn === 'blur' || updateOn === 'submit') this.editingRaw.set(target.value);
    else this.rawValue.set(target.value);
  }

  protected onCompositionStart(): void {
    this.composing = true;
  }

  protected onCompositionEnd(event: Event): void {
    this.composing = false;
    this.onInput(event);
  }

  protected onFocus(): void {
    this.isFocused.set(true);
  }

  protected onBlur(): void {
    this.isFocused.set(false);
    this.stopSpin();
    this.markAsTouched();
  }

  protected override commitPendingValue(trigger?: 'blur'): void {
    const raw = this.editingRaw();

    if (raw === undefined || (trigger === 'blur' && this.ngControl?.control?.updateOn === 'submit')) return;

    this.rawValue.set(raw);
    this.editingRaw.set(undefined);
  }

  //#region Helpers

  private applyStep(direction: number): void {
    const current = Number(this.displayedValue()) || 0;
    const step = this.step() === 'any' ? 1 : Number(this.step());
    const next = Math.min(this.max() ?? Infinity, Math.max(this.min() ?? -Infinity, Number((current + direction * step).toPrecision(12))));

    if (this.disabled() || this.isReadonly()) return;

    this.badInput.set(false);
    this.rawValue.set(String(next));
  }

  //#endregion
}
