import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, forwardRef } from '@angular/core';

import { BxValueControl } from '@forms/classes/bx-value-control';
import { FormField } from '@forms/components/form-field/form-field';
import { BX_RADIO_GROUP } from '@forms/tokens/radio-group.token';

@Component({
  selector: 'bx-radio-group',
  imports: [FormField],
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BX_RADIO_GROUP, useExisting: forwardRef(() => RadioGroup) }]
})
export class RadioGroup<T> extends BxValueControl<T> {
  /** Resolved native radio-group name, generated when no explicit control name is supplied. */
  public readonly groupName: Signal<string> = computed(() => this.name() || this.controlId());

  /**
   * Move focus to the component's native control using the supplied browser focus options.
   *
   * @param options - Browser focus options, including preventScroll when focus should not move the page. Optional.
   */
  public override focus(options?: FocusOptions): void {
    const selected = this.nativeElement.querySelector<HTMLInputElement>('input:checked:not(:disabled)');

    if (selected) selected.focus(options);
    else super.focus(options);
  }

  /**
   * Request a new group value through the form control's normal edit guards.
   *
   * @param value - Application value represented by the radio to select.
   */
  public select(value: T): void {
    this.updateValue(value);
  }

  /** Mark the group as touched and notify its Angular form binding. */
  public markTouched(): void {
    this.markAsTouched();
  }
}
