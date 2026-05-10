import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';
import { InputFieldTypes } from '../../types/form.types';

@Component({
  selector: 'bx-input-field',
  standalone: true,
  imports: [CommonModule, FormField, Icon],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss'
})
export class InputField extends BxBaseControl<any> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly inputId = computed(() => `bx-input-${uuidv4()}`);

  public readonly type = input<InputFieldTypes>('text');
  
  public readonly min = input<number | undefined>(undefined);
  public readonly max = input<number | undefined>(undefined);
  public readonly step = input<number>(1);

  private spinTimeout?: ReturnType<typeof setTimeout>;
  private spinInterval?: ReturnType<typeof setInterval>;

  protected readonly resolvedPlaceholder = computed(() => {
    this.i18n?.version?.();
    const p = this.placeholder();
    if (!p) return '';
    return isTextWithKey(p) ? (this.i18n?.translate(p.key) ?? p.key) : p;
  });

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    
    const value = this.type() === 'number' 
      ? (target.value === '' ? null : Number(target.value)) 
      : target.value;
      
    this.updateValue(value);
  }

  protected onBlur(): void {
    this.markAsTouched();
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

  private applyStep(direction: number): void {
    const current = Number(this.internalValue()) || 0;
    let next = current + (direction * this.step());

    if (this.min() !== undefined && next < this.min()!) next = this.min()!;
    if (this.max() !== undefined && next > this.max()!) next = this.max()!;

    this.updateValue(next);
    this.markAsTouched();
  }
}