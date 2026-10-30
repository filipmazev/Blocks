import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, signal, viewChild } from '@angular/core';
import { CdkAutofill, CdkTextareaAutosize } from '@angular/cdk/text-field';
import { transformedValue } from '@angular/forms/signals';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { FormField } from '../form-field/form-field';
import { BxValueControl } from '../shared/classes/bx-value-control';
import { InputFieldTypes } from '../../types/form.types';
import { numericConstraint } from './helpers/numeric-constraint.helpers';
import { Icon } from '@filip.mazev/blocks/icons';
import { TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'bx-input-field',
  imports: [BxSurfaceDirective, FormField, Icon, CdkAutofill, CdkTextareaAutosize, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './input-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './input-field.scss'
})
export class InputField extends BxValueControl<string | number> {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly editingRaw = signal<string | undefined>(undefined);
  private readonly badInput = signal(false);
  private readonly labelText = viewChild(TruncateDirective);
  protected readonly labelTruncated = computed(() => this.labelText()?.truncated() ?? false);
  protected readonly isFocused = signal(false);
  protected readonly autofilled = signal(false);
  protected readonly rawValue = transformedValue(this.value, {
    parse: (raw: string) => {
      if (this.type() !== 'number') return { value: raw };

      const parsed = raw === '' ? null : Number(raw);

      return this.badInput() || (parsed !== null && !Number.isFinite(parsed)) ? { error: { kind: 'parse' } } : { value: parsed };
    },
    format: (value) => value?.toString() ?? ''
  });

  protected readonly displayedValue = computed(() => this.editingRaw() ?? this.rawValue());
  protected readonly isSpinDownDisabled = computed(() => this.disabled() || this.isReadonly() || Number(this.value() ?? 0) <= (this.min() ?? -Infinity));
  protected readonly isSpinUpDisabled = computed(() => this.disabled() || this.isReadonly() || Number(this.value() ?? 0) >= (this.max() ?? Infinity));
  protected readonly isFloating = computed(
    () =>
      this.resolvedFloatLabel() === 'always' ||
      this.isFocused() ||
      this.autofilled() ||
      !!this.displayedValue() ||
      this.multiline() ||
      ['date', 'time', 'datetime-local'].includes(this.type())
  );

  protected readonly resolvedDecreaseLabel = computed(() => resolveText(this.decreaseLabel(), this.i18n));
  protected readonly resolvedIncreaseLabel = computed(() => resolveText(this.increaseLabel(), this.i18n));

  public readonly type = input<InputFieldTypes>('text');
  public readonly min = input<number | undefined, string | number | undefined>(undefined, { transform: numericConstraint });
  public readonly max = input<number | undefined, string | number | undefined>(undefined, { transform: numericConstraint });
  public readonly minLength = input<number | undefined>(undefined);
  public readonly maxLength = input<number | undefined>(undefined);
  public readonly pattern = input<readonly RegExp[]>([]);
  public readonly step = input<number | 'any'>(1);
  public readonly autocomplete = input<string | undefined>(undefined);
  public readonly inputmode = input<string | undefined>(undefined);
  public readonly spellcheck = input(true);
  public readonly multiline = input(false);
  public readonly rows = input(3);
  public readonly autosize = input(true);
  public readonly minRows = input(2);
  public readonly maxRows = input(8);
  public readonly decreaseLabel = input<ResolvableText>('Decrease value');
  public readonly increaseLabel = input<ResolvableText>('Increase value');

  private composing = false;
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
