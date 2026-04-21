import { INavMeta } from "@navigation/interfaces/inav-meta.interface";
import { INavigationConfig } from "../interfaces/inavigation-config.interface";
import { NAVIGATION_CONFIG } from "../tokens/navigation-config.token";
import { Route } from "@angular/router";

export function provideNavigation(config: INavigationConfig) {
  return [
    {
      provide: NAVIGATION_CONFIG,
      useValue: config
    }
  ];
};

export function withNav(route: Route, nav: INavMeta): Route {
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