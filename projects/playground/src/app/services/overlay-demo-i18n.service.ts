import type { WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import type { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import type { DemoLanguage } from '@playground/components/screens/library-components/shared/i18n/types/demo-language.types';

import { DEMO_LANGUAGE_OPTIONS } from '@playground/components/screens/library-components/shared/i18n/constants/demo-language.constants';
import { OVERLAY_DEMO_TRANSLATIONS } from '@playground/shared/constants/overlay-demo-translations.constants';

@Injectable({ providedIn: 'root' })
export class OverlayDemoI18nService implements IBxI18nAdapter {
  public readonly language: WritableSignal<DemoLanguage> = signal('en');

  public readonly version: WritableSignal<number> = signal(0);

  public readonly languages: typeof DEMO_LANGUAGE_OPTIONS = DEMO_LANGUAGE_OPTIONS;

  public translate(key: string): string {
    return OVERLAY_DEMO_TRANSLATIONS[this.language()][key] ?? key;
  }

  public setLanguage(language: DemoLanguage | null): void {
    if (!language || language === this.language()) return;

    this.language.set(language);
    this.version.update((value) => value + 1);
  }
}
