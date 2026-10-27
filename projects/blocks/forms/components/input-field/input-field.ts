import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Component, computed, DestroyRef, inject, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { FormField } from '../form-field/form-field';
import { InputFieldTypes } from '../../types/form.types';
import { Icon } from '@filip.mazev/blocks/icons';

@Component({
  selector: 'bx-input-field',
  standalone: true,
  imports: [BxSurfaceDirective, CommonModule, FormField, Icon],
  templateUrl: './input-field.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './input-field.scss'
})
export class InputField extends BxBaseControl<string | number | null> {
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly inputId = computed(() => `bx-input-${uuidv4()}`);
  protected readonly isFocused = signal<boolean>(false);
  protected readonly isSpinDownDisabled = computed(() => {
    const min = this.min();
    return this.isDisabled() || (min !== undefined && (Number(this.internalValue()) || 0) <= min);
  });

  protected readonly isSpinUpDisabled = computed(() => {
    const max = this.max();
    return this.isDisabled() || (max !== undefined && (Number(this.internalValue()) || 0) >= max);
  });

  protected readonly isFloating = computed(() => {
    const val = this.internalValue();
    const hasValue = val !== null && val !== undefined && val !== '';
    const isDateType = ['date', 'time', 'datetime-local'].includes(this.type());

    return this.isFocused() || hasValue || isDateType;
  });

  protected readonly resolvedPlaceholder = computed(() => {
    this.i18n?.version?.();
    const p = this.placeholder();
    if (!p) return '';
    return isTextWithKey(p) ? (this.i18n?.translate(p.key) ?? p.key) : p;
  });

  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();
    const l = this.label();
    if (!l) return '';
    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });

  public readonly type = input<InputFieldTypes>('text');
  public readonly min = input<number | undefined>(undefined);
  public readonly max = input<number | undefined>(undefined);
  public readonly step = input<number>(1);
  private spinTimeout?: ReturnType<typeof setTimeout>;
  private spinInterval?: ReturnType<typeof setInterval>;

  constructor() {
    super();
    inject(DestroyRef).onDestroy(() => this.stopSpin());
  }

  public startSpin(direction: number, event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    if (this.isDisabled()) return;

    this.applyStep(direction);

    this.spinTimeout = setTimeout(() => {
      this.spinInterval = setInterval(() => {
        this.applyStep(direction);
      }, 50);
    }, 400);
  }

  public stopSpin(): void {
    clearTimeout(this.spinTimeout);
    clearInterval(this.spinInterval);
  }

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    const value = this.type() === 'number' ? (target.value === '' ? null : Number(target.value)) : target.value;

    this.updateValue(value);
  }

  protected onFocus(): void {
    this.isFocused.set(true);
  }

  protected onBlur(): void {
    this.isFocused.set(false);
    this.markAsTouched();
  }

  private applyStep(direction: number): void {
    const current = Number(this.internalValue()) || 0;
    let next = current + direction * this.step();
    const min = this.min();
    const max = this.max();

    if (min !== undefined && next < min) next = min;
    if (max !== undefined && next > max) next = max;

    this.updateValue(next);
    this.markAsTouched();
  }
}
