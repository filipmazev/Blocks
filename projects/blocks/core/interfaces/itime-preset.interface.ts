import type { ITimePresetContext } from '@core/interfaces/itime-preset-context.interface';
import type { ITimeRange } from '@core/interfaces/itime-range.interface';
import type { ResolvableText } from '@core/types/core.types';
import type { IsoTime } from '@core/types/date-time.types';

/**
 * Configurable quick-select time offered by time pickers.
 */
export interface ITimePreset {
  /** Stable identifier used for active-preset detection. */
  readonly id: string;
  /** Visible preset label; translation-key values resolve through BX_I18N. */
  readonly label: ResolvableText;
  /** Optional supporting description. */
  readonly description?: ResolvableText;
  /** Optional Blocks icon name. */
  readonly icon?: string;
  /** Optional group label used to separate presets. */
  readonly group?: ResolvableText;
  /** Whether the preset is unavailable. Defaults to `false`. */
  readonly disabled?: boolean;
  /**
   * Resolve a single time or a time range for the supplied context.
   *
   * @param context - Clock, locale and time zone for this resolution.
   */
  resolve(context: ITimePresetContext): IsoTime | ITimeRange | null;
}
