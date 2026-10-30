import { Injectable, signal } from '@angular/core';
import { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import { SIDE_NAV_DEMO_TRANSLATIONS } from '../constants/side-nav-examples.constants';

@Injectable()
export class SideNavDemoI18nService implements IBxI18nAdapter {
  public readonly version = signal(0);
  public readonly language = signal('en');

  public translate(key: string): string {
    this.version();
    return SIDE_NAV_DEMO_TRANSLATIONS[this.language()]?.[key] ?? key;
  }

  public toggle(): void {
    this.language.update((language) => (language === 'en' ? 'mk' : 'en'));
    this.version.update((version) => version + 1);
  }
}
