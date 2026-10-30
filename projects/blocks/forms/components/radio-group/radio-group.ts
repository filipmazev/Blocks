import { ChangeDetectionStrategy, Component, computed, forwardRef } from '@angular/core';
import { FormField } from '../form-field/form-field';
import { BxValueControl } from '../shared/classes/bx-value-control';
import { BX_RADIO_GROUP } from './tokens/radio-group.token';

@Component({
  selector: 'bx-radio-group',
  imports: [FormField],
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BX_RADIO_GROUP, useExisting: forwardRef(() => RadioGroup) }]
})
export class RadioGroup<T> extends BxValueControl<T> {
  public readonly groupName = computed(() => this.name() || this.controlId());

  public override focus(options?: FocusOptions): void {
    const selected = this.hostElement.querySelector<HTMLInputElement>('input:checked:not(:disabled)');

    if (selected) selected.focus(options);
    else super.focus(options);
  }

  public select(value: T): void {
    this.updateValue(value);
  }

  public markTouched(): void {
    this.markAsTouched();
  }
}
