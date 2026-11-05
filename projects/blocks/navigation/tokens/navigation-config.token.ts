import { InjectionToken } from '@angular/core';

import { INavigationConfig } from '@navigation/interfaces/inavigation-config.interface';

export const NAVIGATION_CONFIG = new InjectionToken<INavigationConfig>('NAVIGATION_CONFIG');
