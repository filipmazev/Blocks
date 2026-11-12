import { InjectionToken } from '@angular/core';

import type { IClock } from '@core/interfaces/iclock.interface';

import { SystemClock } from '@core/classes/system-clock';

/** Injection token supplying the deterministic clock used by Today, Now, presets and natural-language parsing. */
export const BX_CLOCK = new InjectionToken<IClock>('BX_CLOCK', {
  providedIn: 'root',
  factory: () => new SystemClock()
});
