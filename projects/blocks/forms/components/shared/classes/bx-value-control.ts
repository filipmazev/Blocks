import { computed, Directive, model, signal } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { BxControlState } from './bx-control-state';
import { IPendingValue } from '../interfaces/ipending-value.interface';

@Directive()
export abstract class BxValueControl<T> extends BxControlState implements FormValueControl<T | null> {
  private readonly edit = signal<IPendingValue<T> | undefined>(undefined);
  protected readonly internalValue = computed(() => {
    const edit = this.edit();
    return edit ? edit.value : this.value();
  });

  public readonly value = model<T | null>(null);

  public override reset(): void {
    super.reset();
    this.edit.set(undefined);
  }

  protected override clearPendingEdit(): void {
    this.edit.set(undefined);
  }

  protected updateValue(value: T | null): void {
    if (this.disabled() || this.isReadonly()) return;

    const updateOn = this.ngControl?.control?.updateOn;

    if (updateOn === 'blur' || updateOn === 'submit') this.edit.set({ value });
    else this.value.set(value);
  }

  protected override commitPendingValue(trigger?: 'blur'): void {
    const pending = this.edit();

    if (!pending || (trigger === 'blur' && this.ngControl?.control?.updateOn === 'submit')) return;

    this.value.set(pending.value);
    this.edit.set(undefined);
  }
}
