import type { InputSignal, InputSignalWithTransform, Signal, WritableSignal } from '@angular/core';
import type { TransformedValueSignal } from '@angular/forms/signals';

import { CdkAutofill, CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, signal, viewChild } from '@angular/core';
import { transformedValue } from '@angular/forms/signals';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { FormField } from '@forms/components/form-field/form-field';
import { numericConstraint } from '@forms/components/input-field/helpers/numeric-constraint.helpers';
import { BxValueControl } from '@forms/components/shared/classes/bx-value-control';
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

  public readonly type: InputSignal<InputFieldTypes> = input<InputFieldTypes>('text');
  public readonly min: InputSignalWithTransform<number | undefined, string | number | undefined> = input<number | undefined, string | number | undefined>(
    undefined,
    { transform: numericConstraint }
  );
  public readonly max: InputSignalWithTransform<number | undefined, string | number | undefined> = input<number | undefined, string | number | undefined>(
    undefined,
    { transform: numericConstraint }
  );
  public readonly minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  public readonly maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  public readonly pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([]);
  public readonly step: InputSignal<number | 'any'> = input<number | 'any'>(1);
  public readonly autocomplete: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly inputmode: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly spellcheck: InputSignal<boolean> = input(true);
  public readonly multiline: InputSignal<boolean> = input(false);
  public readonly rows: InputSignal<number> = input(3);
  public readonly autosize: InputSignal<boolean> = input(true);
  public readonly minRows: InputSignal<number> = input(2);
  public readonly maxRows: InputSignal<number> = input(8);
  public readonly decreaseLabel: InputSignal<ResolvableText> = input<ResolvableText>('Decrease value');
  public readonly increaseLabel: InputSignal<ResolvableText> = input<ResolvableText>('Increase value');

  private composing: boolean = false;
  private spinTimeout?: ReturnType<typeof setTimeout>;
  private spinInterval?: ReturnType<typeof setInterval>;

  constructor() {
    super();
    inject(DestroyRef).onDestroy(() => this.stopSpin());
  }

  public override reset(): void {
    super.reset();
    this.editingRaw.set(undefined);
    this.badInput.set(false);
    this.stopSpin();
  }

  public startSpin(direction: number, event: Event): void {
    event.preventDefault();

    if (this.disabled() || this.isReadonly()) return;

    this.applyStep(direction);
    this.spinTimeout = setTimeout(() => {
      this.spinInterval = setInterval(() => this.applyStep(direction), 80);
    }, 400);
  }

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
