import { Signal } from '@angular/core';

/**
 * Describes the bx i18n adapter contract.
 */
export interface IBxI18nAdapter {
  /** Resolves a translation key with optional interpolation parameters; returns the text for the active language. */
  translate(key: string, params?: Record<string, unknown>): string;
  /** Reactive language revision; changing it invalidates text already rendered by Blocks. Optional. */
  version?: Signal<number>;
}
