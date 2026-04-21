import { InjectionToken } from "@angular/core";
import { INavigationI18nAdapter } from "../interfaces/inavigation-i18n-adapter.interface";

export const NAVIGATION_I18N = new InjectionToken<INavigationI18nAdapter>('NAVIGATION_I18N');