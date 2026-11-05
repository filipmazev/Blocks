import type { OutputEmitterRef } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingIndicator, LoadingSpinner, Tag, TooltipDirective, TruncateDirective } from '@filip.mazev/blocks/primitives';

import { Button } from '@forms/components/button/button';
import { FormField } from '@forms/components/form-field/form-field';
import { SearchInput } from '@forms/components/search-input/search-input';
import { BxSelectBase } from '@forms/components/select/classes/bx-select-base';
import { IBxSelectOption } from '@forms/components/select/interfaces/ibx-select-option.interface';
import { ISelectionChange } from '@forms/components/select/interfaces/iselection-change.interface';
import { LoadMoreDirective } from '@forms/directives/load-more.directive';

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
  public readonly selectionChange: OutputEmitterRef<ISelectionChange<T | null>> = output<ISelectionChange<T | null>>();

  public clearSelection(): void {
    if (!this.clearSelectedValue(null)) return;

    this.selectionChange.emit({ value: null, source: 'clear' });
  }

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
