import { InjectionToken } from '@angular/core';

import type { IBxOverlayContext } from '@primitives/interfaces/ibx-overlay-context.interface';

export const BX_OVERLAY_CONTEXT = new InjectionToken<IBxOverlayContext>('BX_OVERLAY_CONTEXT');
