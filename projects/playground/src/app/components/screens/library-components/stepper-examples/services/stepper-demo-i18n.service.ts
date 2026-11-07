import type { WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import type { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import type { DemoLanguage } from '@playground/components/screens/library-components/shared/i18n/types/demo-language.types';

import { STEPPER_TRANSLATIONS } from '@playground/components/screens/library-components/stepper-examples/constants/stepper-translations.constants';

@Injectable()
export class StepperDemoI18nService implements IBxI18nAdapter {
  public readonly language: WritableSignal<DemoLanguage> = signal<DemoLanguage>('en');

  public readonly version: WritableSignal<number> = signal(0);

  public translate(key: string, params?: Record<string, unknown>): string {
    let text = STEPPER_TRANSLATIONS[this.language()][key] ?? key;

    for (const [name, value] of Object.entries(params ?? {})) text = text.replaceAll(`{${name}}`, String(value));

    return text;
  }

  public setLanguage(language: DemoLanguage | null): void {
    if (!language) return;

    this.language.set(language);
    this.version.update((value) => value + 1);
  }
}
