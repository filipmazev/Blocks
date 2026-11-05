import type { InputSignal, ModelSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

import { CheckboxClickAction } from '@forms/components/checkbox/types/checkbox.types';
import { CheckboxIndicator } from '@forms/components/checkbox-indicator/checkbox-indicator';
import { FormField } from '@forms/components/form-field/form-field';
import { BxCheckedControl } from '@forms/components/shared/classes/bx-checked-control';

@Component({
  selector: 'bx-checkbox',
  imports: [FormField, CheckboxIndicator],
  templateUrl: './checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './checkbox.scss'
})
export class Checkbox extends BxCheckedControl {
  public readonly indeterminate: ModelSignal<boolean> = model(false);

  public readonly clickAction: InputSignal<CheckboxClickAction> = input<CheckboxClickAction>('check-indeterminate');
  /** Enables shared hover, focus and checked-state lighting. Defaults to true; disabled and readonly controls remain passive. */
  public readonly emissive: InputSignal<boolean> = input(true);

  protected override onToggle(event: Event): void {
    if (this.clickAction() === 'noop') {
      (event.target as HTMLInputElement).checked = this.displayedChecked();
      (event.target as HTMLInputElement).indeterminate = this.indeterminate();

      return;
    }

    super.onToggle(event);

    if (this.clickAction() === 'check') (event.target as HTMLInputElement).indeterminate = this.indeterminate();

    if (!this.disabled() && !this.isReadonly() && this.clickAction() === 'check-indeterminate') this.indeterminate.set(false);
  }
}
