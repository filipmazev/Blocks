import { Injectable, signal } from '@angular/core';
import { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import { DEMO_TRANSLATIONS } from '../constants/demo-translations.constants';

@Injectable()
export class DemoI18nService implements IBxI18nAdapter {
  public readonly language = signal('en');
  public readonly version = signal(0);

  public translate(key: string, params?: Record<string, unknown>): string {
    let text = DEMO_TRANSLATIONS[this.language()]?.[key] ?? key;

    for (const [name, value] of Object.entries(params ?? {})) text = text.replaceAll(`{${name}}`, String(value));

    return text;
  }

  public toggle(): void {
    this.language.update((language) => (language === 'en' ? 'mk' : 'en'));
    this.version.update((version) => version + 1);
  }
}
