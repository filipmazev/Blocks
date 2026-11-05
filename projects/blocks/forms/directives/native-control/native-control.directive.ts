import { Directive, forwardRef } from '@angular/core';

import { BxControlState } from '@forms/classes/bx-control-state';
import { BX_FORM_FIELD_CONTROL } from '@forms/tokens/form-field-control.token';

/** Connects a native input, textarea, or select to the Blocks field frame. */
@Directive({
  selector: 'input[bxInput], textarea[bxInput], select[bxInput]',
  exportAs: 'bxInput',
  providers: [{ provide: BX_FORM_FIELD_CONTROL, useExisting: forwardRef(() => NativeControlDirective) }],
  host: {
    class: 'bx-native-control',
    '[id]': 'controlId()',
    '[disabled]': 'effectiveDisabled()',
    '[attr.readonly]': 'isReadonly() ? "" : null',
    '[attr.aria-readonly]': 'isReadonly()',
    '[required]': 'effectiveRequired()',
    '[attr.placeholder]': 'resolvedPlaceholder()',
    '[attr.name]': 'name() || null',
    '[attr.aria-invalid]': 'showError()',
    '[attr.aria-required]': 'effectiveRequired()',
    '[attr.aria-describedby]': 'describedBy()',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-labelledby]': 'ariaLabelledBy()',
    '(blur)': 'markAsTouched()',
    '(pointerdown)': 'onReadonlyInteraction($event)',
    '(click)': 'onReadonlyInteraction($event)',
    '(keydown)': 'onReadonlyInteraction($event)'
  }
})
export class NativeControlDirective extends BxControlState {
  /**
   * Focus the integrated native control without bypassing its current disabled state.
   *
   * @param options - Browser focus options, including preventScroll when focus should not move the page. Optional.
   */
  public override focus(options?: FocusOptions): void {
    this.nativeElement.focus(options);
  }

  protected onReadonlyInteraction(event: Event): void {
    if (!this.isReadonly() || this.nativeElement.tagName !== 'SELECT' || ('key' in event && event.key === 'Tab')) return;

    event.preventDefault();
  }
}
