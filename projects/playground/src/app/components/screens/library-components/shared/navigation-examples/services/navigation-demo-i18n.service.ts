import type { WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import type { BxSelectOption } from '@forms/types/select-option.types';

import { IBxI18nAdapter } from '@filip.mazev/blocks/core';

import { DEMO_LANGUAGE_OPTIONS } from '@playground/components/screens/library-components/shared/i18n/constants/demo-language.constants';
import { DemoLanguage } from '@playground/components/screens/library-components/shared/i18n/types/demo-language.types';
import { NAVIGATION_DEMO_TRANSLATIONS } from '@playground/components/screens/library-components/shared/navigation-examples/constants/navigation-examples.constants';

@Injectable()
export class NavigationDemoI18nService implements IBxI18nAdapter {
  public readonly languages: readonly BxSelectOption<DemoLanguage>[] = DEMO_LANGUAGE_OPTIONS;

  public readonly version: WritableSignal<number> = signal(0);

  public readonly language: WritableSignal<DemoLanguage> = signal<DemoLanguage>('en');

  public translate(key: string): string {
    this.version();

    return NAVIGATION_DEMO_TRANSLATIONS[this.language()]?.[key] ?? key;
  }

  public setLanguage(language: DemoLanguage | null): void {
    if (language === null || language === this.language()) return;

    this.language.set(language);
    this.version.update((version) => version + 1);
  }
}
