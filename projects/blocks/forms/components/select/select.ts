import type { OutputEmitterRef } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingIndicator, LoadingSpinner, Tag, TooltipDirective, TruncateDirective } from '@filip.mazev/blocks/primitives';

import { BxSelectBase } from '@forms/classes/bx-select-base';
import { Button } from '@forms/components/button/button';
import { FormField } from '@forms/components/form-field/form-field';
import { SearchInput } from '@forms/components/search-input/search-input';
import { LoadMoreDirective } from '@forms/directives/load-more/load-more.directive';
import { IBxSelectOption } from '@forms/interfaces/ibx-select-option.interface';
import { ISelectionChange } from '@forms/interfaces/iselection-change.interface';

@Component({
  selector: 'bx-select',
  imports: [
    BxSurfaceDirective,
    OverlayModule,
    FormField,
    Button,
    Icon,
    SearchInput,
    LoadMoreDirective,
    NgTemplateOutlet,
    LoadingIndicator,
    LoadingSpinner,
    Tag,
    TooltipDirective,
    TruncateDirective
  ],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Select<T> extends BxSelectBase<T, T> {
  /** Emits the updated selected value and the reason for the selection change. */
  public readonly selectionChange: OutputEmitterRef<ISelectionChange<T | null>> = output<ISelectionChange<T | null>>();

  /** Clear the current selection when editing is allowed and emit the corresponding clear-selection event. */
  public clearSelection(): void {
    if (!this.clearSelectedValue(null)) return;

    this.selectionChange.emit({ value: null, source: 'clear' });
  }

  /**
   * Return whether the supplied value is part of the control's current selection.
   *
   * @param value - Option value to compare with the current selection using the configured equality policy.
   */
  public isSelected(value: T): boolean {
    const selected = this.internalValue();

    return selected !== null && this.compareWith()(selected, value);
  }

  protected selectOption(option: IBxSelectOption<T>): void {
    if (option.disabled || option.groupDisabled || this.disabled() || this.isReadonly()) return;

    this.updateValue(option.value);
    this.selectionChange.emit({ value: option.value, source: 'user' });
    this.close();
  }
}
