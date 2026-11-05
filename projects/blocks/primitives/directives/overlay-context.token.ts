import { InjectionToken } from '@angular/core';

/**
 * Describes the bx overlay context contract.
 */
export interface IBxOverlayContext {
  /** Whether this overlay context uses the browser top layer. Optional. */
  useTopLayer?: boolean;
}

export const BX_OVERLAY_CONTEXT = new InjectionToken<IBxOverlayContext>('BX_OVERLAY_CONTEXT');
