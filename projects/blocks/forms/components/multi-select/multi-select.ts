import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, untracked, viewChild } from '@angular/core';

import type { IResolvedSelectOption } from '@forms/components/select/interfaces/iresolved-select-option.interface';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingIndicator, LoadingSpinner, Tag, TooltipDirective, TruncateDirective } from '@filip.mazev/blocks/primitives';

import { Button } from '@forms/components/button/button';
import { CheckboxIndicator } from '@forms/components/checkbox-indicator/checkbox-indicator';
import { FormField } from '@forms/components/form-field/form-field';
import { summaryThreshold } from '@forms/components/multi-select/helpers/summary-threshold.helpers';
import { ISelectAllChange } from '@forms/components/multi-select/interfaces/iselect-all-change.interface';
import { SearchInput } from '@forms/components/search-input/search-input';
import { BxSelectBase } from '@forms/components/select/classes/bx-select-base';
import { IBxSelectOption } from '@forms/components/select/interfaces/ibx-select-option.interface';
import { ISelectionChange } from '@forms/components/select/interfaces/iselection-change.interface';
import { LoadMoreDirective } from '@forms/directives/load-more.directive';

@Component({
  selector: 'bx-multi-select',
  imports: [
    BxSurfaceDirective,
    OverlayModule,
    FormField,
    Button,
    CheckboxIndicator,
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
  private readonly labelsAdapter = inject(BX_I18N, { optional: true });

  private readonly summaryOverflow: Signal<TruncateDirective | undefined> = viewChild<TruncateDirective>('summaryOverflow');

  protected override readonly hasSelection: Signal<boolean> = computed(() => !!this.internalValue()?.length || this.selectAll());
  protected readonly resolvedSelectAllLabel: Signal<string> = computed(() => resolveText(this.selectAllLabel(), this.labelsAdapter));
  protected readonly selectableOptions: Signal<IResolvedSelectOption<T>[]> = computed(() =>
    this.filteredOptions().filter((option) => !option.disabled && !option.groupDisabled)
  );
  protected readonly allLoadedSelected: Signal<boolean> = computed(() => {
    const options = this.selectableOptions();

    return options.length > 0 && options.every((option) => this.isSelected(option.value));
  });
  protected readonly selectAllChecked: Signal<boolean> = computed(() => this.selectAll() || this.allLoadedSelected());
  protected readonly someSelected: Signal<boolean> = computed(() => this.selectableOptions().some((option) => this.isSelected(option.value)));
  protected readonly usesSummary: Signal<boolean> = computed(() => {
    const count = this.internalValue()?.length ?? 0;

    return (
      (this.selectionDisplay() === 'tags' && this.selectedOptions().length > this.visibleTagCount()) ||
      !!(this.selectAll() && this.allSelectedText()) ||
      count > this.summaryThreshold() ||
      (count >= 2 && (this.summaryOverflow()?.truncated() ?? false))
    );
  });
  protected readonly displayedSelection: Signal<string> = computed(() => {
    if (this.selectAll() && this.allSelectedText()) return resolveText(this.allSelectedText(), this.labelsAdapter);

    if (!this.usesSummary()) return this.selectedOptionLabel();

    const count = this.internalValue()?.length ?? 0;

    return resolveText(this.selectedCountText(), this.labelsAdapter, { count }).replaceAll('{count}', String(count));
  });
  protected readonly resolvedAllSelectedTooltip: Signal<string> = computed(() => {
    const text = this.allSelectedTooltip();

    if (text === false) return '';

    if (text === undefined) return this.resolvedTooltipOnTruncate() ? this.selectedOptionLabel() : '';

    return resolveText(text, this.labelsAdapter);
  });
  protected readonly selectionTooltip: Signal<string> = computed(() => {
    if (this.isOpen()) return '';

    if (this.selectAll()) return this.resolvedAllSelectedTooltip();

    if (!this.resolvedTooltipOnTruncate()) return '';

    return this.selectionDisplay() === 'tags' || this.usesSummary() ? this.selectedOptionLabel() : this.truncatedSelectionTooltip();
  });

  /** Select-all intent tooltip: undefined preserves loaded-label feedback; false or empty text disables it. Accepts translation keys. */
  public readonly allSelectedTooltip: InputSignal<false | ResolvableText | undefined> = input<ResolvableText | false | undefined>(undefined);
  public readonly allSelectedText: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly selectedCountText: InputSignal<ResolvableText> = input<ResolvableText>('{count} selected');
  public readonly summaryThreshold: InputSignalWithTransform<number, string | number> = input(2, { transform: summaryThreshold });
  public readonly showSelectAll: InputSignal<boolean> = input(true);
  public readonly selectAllLabel: InputSignal<ResolvableText> = input<ResolvableText>('Select all');
  public readonly selectionScope: InputSignal<string | undefined> = input<string | undefined>(undefined);

  public readonly selectAll: ModelSignal<boolean> = model(false);

  public readonly selectionChange: OutputEmitterRef<ISelectionChange<T[]>> = output<ISelectionChange<T[]>>();
  public readonly selectAllIntentChange: OutputEmitterRef<ISelectAllChange<T>> = output<ISelectAllChange<T>>();

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

  public clearSelection(): void {
    if (this.disabled() || this.isReadonly()) return;

    const hadIntent = this.selectAll();

    this.selectAll.set(false);
    this.clearSelectedValue([]);
    this.selectionChange.emit({ value: [], source: 'clear' });

    if (hadIntent) this.emitIntent(false, 'clear');
  }

  public isSelected(value: T): boolean {
    return (this.internalValue() ?? []).some((item) => this.compareWith()(item, value));
  }

  public toggleSelectAll(): void {
    if (this.disabled() || this.isReadonly()) return;

    const enabled = !this.selectAllChecked();
    const eligible = this.selectableOptions();
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
