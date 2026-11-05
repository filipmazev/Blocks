import type { Signal, WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import { DEFAULT_FORM_FIELD_OPTIONS } from '@forms/constants/validation.constants';
import { IFormFieldDefaults } from '@forms/interfaces/iform-field-defaults.interface';

@Injectable({ providedIn: 'root' })
export class FormSettingsService {
  private readonly state: WritableSignal<IFormFieldDefaults> = signal<IFormFieldDefaults>({ ...DEFAULT_FORM_FIELD_OPTIONS });

  /** Current shared form-control defaults; update(partial) merges changes without discarding unrelated settings. */
  public readonly settings: Signal<IFormFieldDefaults> = this.state.asReadonly();

  /**
   * Updates only supplied defaults. Message overrides merge with existing messages.
   *
   * @param options - Partial application form defaults to merge; omitted settings remain unchanged.
   */
  public update(options: Partial<IFormFieldDefaults>): void {
    this.state.update((current) => ({ ...current, ...options, errorMessages: { ...current.errorMessages, ...options.errorMessages } }));
  }
}
