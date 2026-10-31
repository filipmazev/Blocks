import { Injectable, signal } from '@angular/core';
import { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import { NAVIGATION_DEMO_TRANSLATIONS } from '../constants/navigation-examples.constants';
import { DEMO_LANGUAGE_OPTIONS } from '../../i18n/constants/demo-language.constants';
import { DemoLanguage } from '../../i18n/types/demo-language.types';

@Injectable()
export class NavigationDemoI18nService implements IBxI18nAdapter {
  public readonly languages = DEMO_LANGUAGE_OPTIONS;
  public readonly version = signal(0);
  public readonly language = signal<DemoLanguage>('en');

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
