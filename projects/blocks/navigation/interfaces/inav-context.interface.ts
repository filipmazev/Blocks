import { ActivatedRouteSnapshot } from '@angular/router';

/**
 * Describes the nav context contract.
 */
export interface INavContext {
  /** Active router snapshot from which navigation context is resolved. Optional. */
  snapshot?: ActivatedRouteSnapshot;
}
