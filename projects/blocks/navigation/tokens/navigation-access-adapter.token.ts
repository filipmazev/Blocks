import { InjectionToken } from "@angular/core";
import { INavigationAccessAdapter } from "../interfaces/inavigation-access-adapter.interface";

export const NAVIGATION_ACCESS_ADAPTER = new InjectionToken<INavigationAccessAdapter>('NAVIGATION_ACCESS_ADAPTER');