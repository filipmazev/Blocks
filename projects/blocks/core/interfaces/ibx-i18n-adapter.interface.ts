import { Signal } from "@angular/core";

export interface IBxI18nAdapter {
  translate(key: string, params?: Record<string, unknown>): string;
  version?: Signal<number>;
}