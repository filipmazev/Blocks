import { Injectable, signal } from '@angular/core';
import { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import { DEMO_TRANSLATIONS } from '../constants/demo-translations.constants';
import { DEMO_LANGUAGE_OPTIONS } from '../../shared/i18n/constants/demo-language.constants';
import { DemoLanguage } from '../../shared/i18n/types/demo-language.types';

@Injectable()
export class DemoI18nService implements IBxI18nAdapter {
  public readonly language = signal<DemoLanguage>('en');
  public readonly languages = DEMO_LANGUAGE_OPTIONS;
  public readonly version = signal(0);

  public translate(key: string, params?: Record<string, unknown>): string {
    let text = DEMO_TRANSLATIONS[this.language()]?.[key] ?? key;

    for (const [name, value] of Object.entries(params ?? {})) text = text.replaceAll(`{${name}}`, String(value));

    return text;
  }

  public setLanguage(language: DemoLanguage | null): void {
    if (language === null || language === this.language()) return;

    this.language.set(language);
    this.version.update((version) => version + 1);
  }
}
