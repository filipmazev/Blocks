import type { Signal } from '@angular/core';

import { InjectionToken } from '@angular/core';

import { IPageNavigation } from '@primitives/interfaces/ipage-navigation.interface';

/** Optional reactive page metadata adapter, installed automatically by provideNavigation(). */
export const BX_PAGE_NAVIGATION = new InjectionToken<Signal<IPageNavigation>>('BX_PAGE_NAVIGATION');
