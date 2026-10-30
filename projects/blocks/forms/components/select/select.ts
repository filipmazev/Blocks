import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingIndicator, LoadingSpinner, Tag, TooltipDirective, TruncateDirective } from '@filip.mazev/blocks/primitives';
import { Button } from '../button/button';
import { FormField } from '../form-field/form-field';
import { SearchInput } from '../search-input/search-input';
import { LoadMoreDirective } from '../../directives/load-more.directive';
import { BxSelectBase } from './classes/bx-select-base';
import { IBxSelectOption } from './interfaces/ibx-select-option.interface';
import { ISelectionChange } from './interfaces/iselection-change.interface';

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
  public readonly selectionChange = output<ISelectionChange<T | null>>();

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
