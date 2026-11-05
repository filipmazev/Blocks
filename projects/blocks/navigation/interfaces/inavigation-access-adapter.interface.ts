import { Data } from '@angular/router';

/**
 * Describes the navigation access adapter contract.
 */
export interface INavigationAccessAdapter {
  /** Returns whether the supplied route data may appear in navigation. */
  canAccessMenu(routeData: Data): boolean;
  /** Returns the navigation base route, or undefined when no base route is configured. */
  resolveBaseRoute(): string | undefined;
}
