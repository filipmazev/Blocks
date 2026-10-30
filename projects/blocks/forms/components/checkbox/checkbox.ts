import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';
import { BxCheckedControl } from '../shared/classes/bx-checked-control';
import { CheckboxClickAction } from './types/checkbox.types';

@Component({
  selector: 'bx-checkbox',
  imports: [BxSurfaceDirective, FormField, Icon],
  templateUrl: './checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './checkbox.scss'
})
export class Checkbox extends BxCheckedControl {
  public readonly indeterminate = model(false);
  public readonly clickAction = input<CheckboxClickAction>('check-indeterminate');

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
