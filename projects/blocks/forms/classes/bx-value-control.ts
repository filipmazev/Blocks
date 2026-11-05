import type { ModelSignal, Signal, WritableSignal } from '@angular/core';

import { computed, Directive, model, signal } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

import { IPendingValue } from '@forms/interfaces/ipending-value.interface';

import { BxControlState } from './bx-control-state';

@Directive()
export abstract class BxValueControl<T> extends BxControlState implements FormValueControl<T | null> {
  private readonly edit: WritableSignal<IPendingValue<T> | undefined> = signal<IPendingValue<T> | undefined>(undefined);

  protected readonly internalValue: Signal<T | null> = computed(() => {
    const edit = this.edit();

    return edit ? edit.value : this.value();
  });

  /** Current form-control value; supports signal-forms two-way binding and starts as null. Defaults to `null`. */
  public readonly value: ModelSignal<T | null> = model<T | null>(null);

  /** Clear interaction state and discard any deferred value edit; the parent form retains ownership of the model value. */
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
