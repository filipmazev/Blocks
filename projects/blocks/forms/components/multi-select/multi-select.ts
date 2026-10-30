import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, untracked, viewChild } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingIndicator, LoadingSpinner, Tag, TooltipDirective, TruncateDirective } from '@filip.mazev/blocks/primitives';
import { FormField } from '../form-field/form-field';
import { SearchInput } from '../search-input/search-input';
import { LoadMoreDirective } from '../../directives/load-more.directive';
import { BxSelectBase } from '../select/classes/bx-select-base';
import { IBxSelectOption } from '../select/interfaces/ibx-select-option.interface';
import { ISelectionChange } from '../select/interfaces/iselection-change.interface';
import { summaryThreshold } from './helpers/summary-threshold.helpers';
import { ISelectAllChange } from './interfaces/iselect-all-change.interface';

@Component({
  selector: 'bx-multi-select',
  imports: [
    BxSurfaceDirective,
    OverlayModule,
    FormField,
    Icon,
    SearchInput,
    LoadMoreDirective,
    NgTemplateOutlet,
    LoadingIndicator,
    LoadingSpinner,
    TooltipDirective,
    TruncateDirective,
    Tag
  ],
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelect<T> extends BxSelectBase<T[], T> {
  private readonly summaryOverflow = viewChild<TruncateDirective>('summaryOverflow');
  private readonly labelsAdapter = inject(BX_I18N, { optional: true });
  protected readonly resolvedSelectAllLabel = computed(() => resolveText(this.selectAllLabel(), this.labelsAdapter));
  protected readonly someSelected = computed(() => this.filteredOptions().some((option) => this.isSelected(option.value)));

  protected readonly usesSummary = computed(() => {
    const count = this.internalValue()?.length ?? 0;

    return (
      (this.selectionDisplay() === 'tags' && this.selectedOptions().length > this.visibleTagCount()) ||
      !!(this.selectAll() && this.allSelectedText()) ||
      count > this.summaryThreshold() ||
      (count >= 2 && (this.summaryOverflow()?.truncated() ?? false))
    );
  });

  protected readonly displayedSelection = computed(() => {
    if (this.selectAll() && this.allSelectedText()) return resolveText(this.allSelectedText(), this.labelsAdapter);
    if (!this.usesSummary()) return this.selectedOptionLabel();

    const count = this.internalValue()?.length ?? 0;

    return resolveText(this.selectedCountText(), this.labelsAdapter, { count }).replaceAll('{count}', String(count));
  });

  protected readonly selectionTooltip = computed(() => {
    if (!this.resolvedTooltipOnTruncate() || this.isOpen()) return '';

    return this.selectionDisplay() === 'tags' || this.usesSummary() ? this.selectedOptionLabel() : this.truncatedSelectionTooltip();
  });

  public readonly allSelectedText = input<ResolvableText | undefined>(undefined);
  public readonly selectedCountText = input<ResolvableText>('{count} selected');
  public readonly summaryThreshold = input(2, { transform: summaryThreshold });
  public readonly showSelectAll = input(true);
  public readonly selectAllLabel = input<ResolvableText>('Select all');
  public readonly selectionScope = input<string | undefined>(undefined);
  public readonly selectAll = model(false);
  public readonly selectionChange = output<ISelectionChange<T[]>>();
  public readonly selectAllIntentChange = output<ISelectAllChange<T>>();

  private scope: string | undefined;

  constructor() {
    super();
    effect(() => {
      const scope = this.selectionScope() ?? this.searchTerm();
      const options = this.filteredOptions();
      const enabled = this.selectAll();
      const values = untracked(this.internalValue) ?? [];

      if (this.scope !== undefined && scope !== this.scope && enabled) {
        this.selectAll.set(false);
        this.emitIntent(false, 'scope-change', scope);
      } else if (enabled && !this.disabled() && !this.isReadonly()) {
        const added = options
          .filter((option) => !option.disabled && !option.groupDisabled && !values.some((value) => this.compareWith()(value, option.value)))
          .map((option) => option.value);

        if (added.length) {
          const next = [...values, ...added];
          this.updateValue(next);
          this.selectionChange.emit({ value: next, source: 'page' });
        }
      }

      this.scope = scope;
    });
  }

  public isSelected(value: T): boolean {
    return (this.internalValue() ?? []).some((item) => this.compareWith()(item, value));
  }

  public toggleSelectAll(): void {
    if (this.disabled() || this.isReadonly()) return;

    const enabled = !this.selectAll();
    const eligible = this.filteredOptions().filter((option) => !option.disabled && !option.groupDisabled);
    const current = this.internalValue() ?? [];
    const values = enabled
      ? [...current, ...eligible.filter((option) => !this.isSelected(option.value)).map((option) => option.value)]
      : current.filter((value) => !eligible.some((option) => this.compareWith()(value, option.value)));
    this.selectAll.set(enabled);
    this.updateValue(values);
    this.selectionChange.emit({ value: values, source: 'select-all' });
    this.emitIntent(enabled, 'toggle');
  }

  public override reset(): void {
    super.reset();

    if (this.selectAll()) {
      this.selectAll.set(false);
      this.emitIntent(false, 'reset');
    }
  }

  protected selectOption(option: IBxSelectOption<T>): void {
    if (option.disabled || option.groupDisabled || this.disabled() || this.isReadonly()) return;

    const wasSelected = this.isSelected(option.value);
    const values = wasSelected
      ? (this.internalValue() ?? []).filter((value) => !this.compareWith()(value, option.value))
      : [...(this.internalValue() ?? []), option.value];
    this.updateValue(values);
    this.selectionChange.emit({ value: values, source: 'user' });

    if (wasSelected && this.selectAll()) {
      this.selectAll.set(false);
      this.emitIntent(false, 'item-deselected');
    }
  }

  //#region Helpers

  private emitIntent(selected: boolean, reason: ISelectAllChange<T>['reason'], scope = this.selectionScope() ?? this.searchTerm()): void {
    this.selectAllIntentChange.emit({ selected, scope, values: this.internalValue() ?? [], reason });
  }

  //#endregion
}
