import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import type { DatePickerValue, IDatePreset, IDatePresetContext, IDateRange } from '@filip.mazev/blocks/core';

import { BX_I18N, isDateRangeValue, isPeriodRangeValue, ResolvableText, resolveText, valueSignature } from '@filip.mazev/blocks/core';
import { Icon, IconName } from '@filip.mazev/blocks/icons';

/**
 * Accessible quick-select list of date, range, multiple-date and period presets.
 *
 * Rendering groups presets by their configured group label, exposes active state from the current selection, and supports compact horizontal chips for
 * narrow layouts without hiding any preset behind hover.
 */
@Component({
  selector: 'bx-date-preset-list',
  imports: [Icon],
  templateUrl: './date-preset-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './date-preset-list.scss'
})
export class DatePresetList {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly groups: Signal<
    readonly {
      label: string;
      items: readonly { preset: IDatePreset; label: string; description: string; icon: string | undefined; active: boolean; disabled: boolean }[];
    }[]
  > = computed(() => {
    const context = this.context();
    const active = this.activeValue() ?? this.activeRange();
    const groups = new Map<
      string,
      { label: string; items: { preset: IDatePreset; label: string; description: string; icon: string | undefined; active: boolean; disabled: boolean }[] }
    >();

    for (const preset of this.presets()) {
      const label = resolveText(preset.label, this.i18n);
      const group = resolveText(preset.group, this.i18n);
      const resolved = this.resolvePreset(preset, context);
      const item = {
        preset,
        label,
        description: resolveText(preset.description, this.i18n),
        icon: preset.icon,
        active: resolved !== null && this.sameSelection(resolved, active),
        disabled: preset.disabled === true
      };

      if (!groups.has(group)) groups.set(group, { label: group, items: [] });

      groups.get(group)?.items.push(item);
    }

    return [...groups.values()];
  });
  protected readonly resolvedAriaLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));

  /** Presets rendered by the list. Required input. */
  public readonly presets: InputSignal<readonly IDatePreset[]> = input.required<readonly IDatePreset[]>();
  /** Deterministic context used to resolve each preset and detect the active range. Required input. */
  public readonly context: InputSignal<IDatePresetContext> = input.required<IDatePresetContext>();
  /** Current canonical selection used for active-preset detection across every mode. Defaults to null. */
  public readonly activeValue: InputSignal<DatePickerValue> = input<DatePickerValue>(null);
  /** Committed range used for active-preset detection. Defaults to `null`. */
  public readonly activeRange: InputSignal<IDateRange | null> = input<IDateRange | null>(null);
  /** Whether presets render as a horizontal chip row for narrow layouts. Defaults to `false`. */
  public readonly horizontal: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Accessible name of the preset navigation; translation keys resolve through BX_I18N. Defaults to `'Quick select'`. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>('Quick select');

  /** Emits the preset chosen by the user. */
  public readonly presetSelect: OutputEmitterRef<IDatePreset> = output<IDatePreset>();

  protected iconName(icon: string): IconName {
    return icon as IconName;
  }

  protected onSelect(preset: IDatePreset, disabled: boolean): void {
    if (disabled) return;

    this.presetSelect.emit(preset);
  }

  //#region Helpers

  private sameSelection(resolved: DatePickerValue, current: DatePickerValue): boolean {
    if (Array.isArray(resolved) && Array.isArray(current)) return valueSignature([...resolved].sort()) === valueSignature([...current].sort());

    if (isDateRangeValue(resolved) && isDateRangeValue(current)) {
      return (
        resolved.start === current.start &&
        resolved.end === current.end &&
        (!isPeriodRangeValue(resolved) || (isPeriodRangeValue(current) && resolved.kind === current.kind))
      );
    }

    return valueSignature(resolved) === valueSignature(current);
  }

  private resolvePreset(preset: IDatePreset, context: IDatePresetContext): DatePickerValue {
    try {
      return preset.resolve(context);
    } catch {
      return null;
    }
  }

  //#endregion
}
