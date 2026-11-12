import type { IsoTime, ResolvableText } from '@filip.mazev/blocks/core';

/** Application-owned time choice shared by the time list and wheel availability guards. */
export interface ITimePickerOption {
  /** Canonical time-of-day value; no date or time zone is implied. */
  readonly value: IsoTime;
  /** Optional translated label; omission uses the picker's localized time format. */
  readonly label?: ResolvableText;
  /** Whether this choice is unavailable. Defaults to false; normal bounds and availability restrictions also apply. */
  readonly disabled?: boolean;
}
