import { Strict } from "@filip.mazev/blocks/core";
import { INavMeta } from "../interfaces/inav-meta.interface";
import { INavigationConfig } from "../interfaces/inavigation-config.interface";
import { NAVIGATION_CONFIG } from "../tokens/navigation-config.token";
import { Route } from "@angular/router";

/**
 * 
 * @param config 
 * This function is a helper to provide the navigation configuration in your Angular application. 
 * It takes an `INavigationConfig` object as an argument and returns an array of providers that can be used in the `providers` array of your Angular module. 
 * By using this function, you can easily set up the navigation configuration for your application without having to manually create the provider object each time.
 */
export function provideNavigation(config: INavigationConfig) {
  return [
    {
      provide: NAVIGATION_CONFIG,
      useValue: config
    }
  ];
};

/**
 * 
 * @param route 
 * @param nav 
 * This function is a helper to attach navigation metadata to Angular routes. It takes an Angular `Route` object and a navigation metadata object of type `Strict<T, INavMeta>`, where `T` 
 * is a generic type that can be used to enforce specific properties on the navigation metadata. 
 * The function returns a new `Route` object with the provided navigation metadata merged into the existing route data under the 'nav' property. 
 * This allows you to easily associate navigation information with your routes, which can then be used by navigation components to generate menus, breadcrumbs, etc.
 */
export function withNav<T>(route: Route, nav: Strict<T, INavMeta>): Route {
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