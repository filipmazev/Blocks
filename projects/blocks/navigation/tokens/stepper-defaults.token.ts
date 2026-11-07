import { InjectionToken } from '@angular/core';

import type { IStepperConfig } from '@navigation/interfaces/istepper-config.interface';

/** Optional shared translated Stepper text defaults; instance labels take precedence. */
export const BX_STEPPER_DEFAULTS: InjectionToken<IStepperConfig> = new InjectionToken<IStepperConfig>('BX_STEPPER_DEFAULTS');
