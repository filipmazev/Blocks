import type { Signal, WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import { DEFAULT_FORM_FIELD_OPTIONS } from '@forms/components/shared/constants/validation.constants';
import { IFormFieldDefaults } from '@forms/components/shared/interfaces/iform-field-defaults.interface';

@Injectable({ providedIn: 'root' })
export class FormSettingsService {
  private readonly state: WritableSignal<IFormFieldDefaults> = signal<IFormFieldDefaults>({ ...DEFAULT_FORM_FIELD_OPTIONS });

  public readonly settings: Signal<IFormFieldDefaults> = this.state.asReadonly();

  /** Updates only supplied defaults. Message overrides merge with existing messages. */
  public update(options: Partial<IFormFieldDefaults>): void {
    this.state.update((current) => ({ ...current, ...options, errorMessages: { ...current.errorMessages, ...options.errorMessages } }));
  }
}
