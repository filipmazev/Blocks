import { computed, Directive, input, model, signal } from '@angular/core';
import { FormCheckboxControl } from '@angular/forms/signals';
import { BxControlState } from './bx-control-state';
import { LabelPosition } from '../types/validation.types';

@Directive()
export abstract class BxCheckedControl extends BxControlState implements FormCheckboxControl {
  private readonly draft = signal<boolean | undefined>(undefined);
  protected readonly displayedChecked = computed(() => this.draft() ?? this.checked());

  public readonly checked = model(false);
  public readonly labelPosition = input<LabelPosition>('after');

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
