/** Resolved overlay presentation used by picker surfaces. */
export type PickerSurfacePresentation = 'popover' | 'drawer' | 'inline';

/** Field layout used by range date pickers. */
export type DateRangeFieldLayout = 'combined' | 'separate';

/** Commit behavior of the time picker preset list. */
export type TimePresetBehavior = 'immediate' | 'draft';

import type { ITimeAvailability, ITimeAvailabilityRequest } from '@filip.mazev/blocks/core';

/** Promise-based time-slot availability resolver managed by Blocks request orchestration. */
export type TimeAvailabilityResolver = (request: ITimeAvailabilityRequest) => Promise<ITimeAvailability | null>;
