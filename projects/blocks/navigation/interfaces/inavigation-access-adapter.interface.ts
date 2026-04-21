import { Data } from "@angular/router";

export interface INavigationAccessAdapter {
  canAccessMenu(routeData: Data): boolean;
  resolveBaseRoute(): string | undefined;
}