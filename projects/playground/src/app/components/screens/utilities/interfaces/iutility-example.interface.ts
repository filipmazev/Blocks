import type { Route } from '@angular/router';

import type { IconName } from '@filip.mazev/blocks/icons';

/** A utility's navigation, interactive example, and colocated guide. */
export interface IUtilityExample {
  /** URL segment and demo folder below utilities. */
  id: string;
  /** Human-readable navigation and page title. */
  title: string;
  /** Summary shown on the overview and example page. */
  description: string;
  /** Public API names introduced by the example. */
  symbol: string;
  /** Icon accompanying the overview card. */
  icon: IconName;
  /** Repository path to the authoritative README. */
  readme: string;
  /** Lazy loader for the isolated interactive example. */
  loadComponent: NonNullable<Route['loadComponent']>;
}
