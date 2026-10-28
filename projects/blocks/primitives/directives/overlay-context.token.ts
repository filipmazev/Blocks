import { InjectionToken } from '@angular/core';

export interface IBxOverlayContext {
  useTopLayer?: boolean;
}

export const BX_OVERLAY_CONTEXT = new InjectionToken<IBxOverlayContext>('BX_OVERLAY_CONTEXT');
