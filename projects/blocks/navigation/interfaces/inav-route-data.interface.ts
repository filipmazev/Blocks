import { INavMeta } from './inav-meta.interface';

/**
 * Describes the nav route data contract.
 */
export interface INavRouteData {
  /** Navigation metadata attached to the route. Optional. */
  nav?: INavMeta;
}
