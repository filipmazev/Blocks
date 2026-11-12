import type { IDatePresetContext } from '@core/interfaces/idate-preset-context.interface';
import type { ResolvableText } from '@core/types/core.types';
import type { DatePickerValue } from '@core/types/date-time.types';

/** Configurable quick selection for single dates, multiple dates, ranges or calendar periods. */
export interface IDatePreset {
  /** Stable preset identifier used for tracking and active-state detection. */
  readonly id: string;
  /** Visible label; plain strings and BX_I18N translation keys are supported. */
  readonly label: ResolvableText;
  /** Optional supporting description exposed in the accessible name. */
  readonly description?: ResolvableText;
  /** Optional Blocks icon name. */
  readonly icon?: string;
  /** Optional translated grouping label. */
  readonly group?: ResolvableText;
  /** Optional disabled state; defaults to false. Disabled items cannot be selected. */
  readonly disabled?: boolean;
  /** Compatibility metadata; date picker selections commit immediately once complete. */
  readonly apply?: 'immediate' | 'draft';
  /**
   * Resolve a canonical selection for the supplied clock/calendar context. Null leaves selection unchanged.
   * @param context - Deterministic current date, locale, calendar, time zone and week conventions.
   */
  resolve(context: IDatePresetContext): DatePickerValue;
}

export type { IDatePresetContext } from '@core/interfaces/idate-preset-context.interface';
export type { IDateRangePreset } from '@core/interfaces/idate-range-preset.interface';
export type { ITimePresetContext } from '@core/interfaces/itime-preset-context.interface';
export type { ITimePreset } from '@core/interfaces/itime-preset.interface';
