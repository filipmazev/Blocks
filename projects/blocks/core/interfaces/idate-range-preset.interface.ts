import type { IDatePresetContext } from '@core/interfaces/idate-preset-context.interface';
import type { IDateRange } from '@core/interfaces/idate-range.interface';
import type { ResolvableText } from '@core/types/core.types';

/**
 * Configurable quick-select range offered by date pickers.
 */
export interface IDateRangePreset {
  /** Stable identifier used for active-preset detection and analytics. */
  readonly id: string;
  /** Visible preset label; translation-key values resolve through BX_I18N. */
  readonly label: ResolvableText;
  /** Optional supporting description shown under the label or as a tooltip. */
  readonly description?: ResolvableText;
  /** Optional Blocks icon name shown before the label. */
  readonly icon?: string;
  /** Optional group label used to separate preset sections. */
  readonly group?: ResolvableText;
  /** Whether the preset is unavailable in the current configuration. Defaults to `false`. */
  readonly disabled?: boolean;
  /** Whether the preset applies immediately or only fills the draft when selected. Defaults to `'immediate'`. */
  readonly apply?: 'immediate' | 'draft';
  /**
   * Resolve the range for the supplied deterministic context.
   *
   * @param context - Clock, locale, calendar and week conventions for this resolution.
   */
  resolve(context: IDatePresetContext): IDateRange | null;
}
