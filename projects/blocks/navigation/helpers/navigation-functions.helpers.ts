import { inject } from '@angular/core';
import { Route } from '@angular/router';

import { Strict } from '@filip.mazev/blocks/core';
import { BX_PAGE_NAVIGATION } from '@filip.mazev/blocks/primitives';

import { INavMeta } from '@navigation/interfaces/inav-meta.interface';
import { INavigationConfig } from '@navigation/interfaces/inavigation-config.interface';
import { INavigationSectionConfig } from '@navigation/interfaces/inavigation-section-config.interface';
import { NavigationService } from '@navigation/services/navigation.service';
import { NAVIGATION_CONFIG } from '@navigation/tokens/navigation-config.token';

/**
 * Declares UI sections and binds route metadata to their literal IDs.
 *
 * @param config - Application section definitions and shared view defaults; literal section IDs constrain returned route metadata.
 * @typeParam TSections - Readonly section definitions whose literal IDs constrain navigation metadata.
 */
export function defineNavigation<const TSections extends readonly INavigationSectionConfig[]>(
  config: Omit<INavigationConfig, 'sections'> & { sections: TSections }
) {
  return {
    config,
    withInAppNavigation<T extends INavMeta<TSections[number]['id']>>(route: Route, nav: Strict<T, INavMeta<TSections[number]['id']>>): Route {
      return withInAppNavigation(route, nav);
    }
  };
}

/**
 * Create Angular providers for shared navigation configuration and automatic page layout metadata.
 *
 * @param config - Application section ordering and navigation-view defaults to provide.
 */
export function provideNavigation(config: INavigationConfig) {
  return [
    {
      provide: NAVIGATION_CONFIG,
      useValue: config
    },
    {
      provide: BX_PAGE_NAVIGATION,
      useFactory: () => inject(NavigationService).page
    }
  ];
}

/**
 * Return a route with navigation UI metadata merged into its existing data.nav contract.
 *
 * @param route - Angular route whose existing configuration and data should be preserved.
 * @param nav - Navigation metadata to merge, including labels, section, menu participation, and access policy.
 * @typeParam T - Navigation metadata type checked against the supported route metadata contract.
 */
export function withInAppNavigation<T extends INavMeta>(route: Route, nav: Strict<T, INavMeta>): Route {
  const existingNav = (route.data?.['nav'] as INavMeta | undefined) ?? {};

  return {
    ...route,
    data: {
      ...(route.data ?? {}),
      nav: {
        ...existingNav,
        ...nav
      }
    }
  };
}
