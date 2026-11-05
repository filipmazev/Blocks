import type { InputSignal, ModelSignal, Signal, WritableSignal } from '@angular/core';

import { computed, Directive, input, model, signal } from '@angular/core';
import { FormCheckboxControl } from '@angular/forms/signals';

import { LabelPosition } from '@forms/types/validation.types';

import { BxControlState } from './bx-control-state';

@Directive()
export abstract class BxCheckedControl extends BxControlState implements FormCheckboxControl {
  private readonly draft: WritableSignal<boolean | undefined> = signal<boolean | undefined>(undefined);

  protected readonly displayedChecked: Signal<boolean> = computed(() => this.draft() ?? this.checked());

  /** Current checked state; consumers may use two-way binding for controlled selection. Defaults to `false`. */
  public readonly checked: ModelSignal<boolean> = model(false);

  /** Position of the label relative to the checkbox or radio control. Defaults to `'after'`. */
  public readonly labelPosition: InputSignal<LabelPosition> = input<LabelPosition>('after');

  /** Clear interaction state and discard any deferred checked-state edit. */
  public override reset(): void {
    super.reset();
    this.draft.set(undefined);
  }

  protected override clearPendingEdit(): void {
    this.draft.set(undefined);
  }

  protected override commitPendingValue(trigger?: 'blur'): void {
    const value = this.draft();

    if (value === undefined || (trigger === 'blur' && this.ngControl?.control?.updateOn === 'submit')) return;

    this.checked.set(value);
    this.draft.set(undefined);
  }

  protected onToggle(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (this.disabled() || this.isReadonly()) {
      target.checked = this.checked();

      return;
    }

    const updateOn = this.ngControl?.control?.updateOn;

    if (updateOn === 'blur' || updateOn === 'submit') this.draft.set(target.checked);
    else this.checked.set(target.checked);
  }

  protected onReadonlyClick(event: Event): void {
    if (this.isReadonly()) event.preventDefault();
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}
