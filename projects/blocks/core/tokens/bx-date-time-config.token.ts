import { InjectionToken } from '@angular/core';

import type { DateTimeConfigInput } from '@core/interfaces/idate-time-config.interface';

/** Application-provided initial date-time defaults merged before instance overrides. */
export const BX_DATE_TIME_CONFIG = new InjectionToken<DateTimeConfigInput>('BX_DATE_TIME_CONFIG', {
  providedIn: 'root',
  factory: () => ({})
});
