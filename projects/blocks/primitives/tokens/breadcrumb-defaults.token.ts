import { InjectionToken } from '@angular/core';

import type { IBreadcrumbTrailConfig } from '@primitives/interfaces/ibreadcrumb-trail-config.interface';

/** Optional shared breadcrumb overflow defaults. Instance configuration wins; omitted settings use library defaults. */
export const BX_BREADCRUMB_DEFAULTS: InjectionToken<IBreadcrumbTrailConfig> = new InjectionToken<IBreadcrumbTrailConfig>('BX_BREADCRUMB_DEFAULTS');
