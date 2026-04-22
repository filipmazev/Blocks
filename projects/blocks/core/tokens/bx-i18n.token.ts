import { InjectionToken } from "@angular/core";
import { IBxI18nAdapter } from "../interfaces/ibx-i18n-adapter.interface";

export const BX_I18N = new InjectionToken<IBxI18nAdapter>('BX_I18N');