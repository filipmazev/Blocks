import { ApplicationConfig, DOCUMENT, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { ROUTES } from '@playground/app.routes';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideNavigation } from '../../../blocks/navigation/helpers/navigation-functions';
import { ThemingService } from '@filip.mazev/blocks/core';

/* As demo for navigation i18n capabilities, you can use the following function to provide a translation adapter for your translation service. 
Just make sure to replace `TranslationService` with the actual service you are using in your application and adjust the method names accordingly.

import { BX_I18N } from '@core/tokens/bx-i18n.token';

export function provideNavigationI18n() {
  return {
    provide: BX_I18N,
    useFactory: () => {
      const translationService = inject(TranslationService);
      
      const langChange = toSignal(translationService.langCahnges$, {
        initialValue: translationService.getActiveLang()
      });
      
      return {
        translate: (key: string, params?: Record<string, unknown>) => translationService.translate(key, params),
        version: langChange
      };
    }
  };
}
*/

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAppInitializer(() => {
      const document = inject(DOCUMENT);
      let savedPalette: string | null = null;
      try {
        savedPalette = document.defaultView?.localStorage.getItem('theme-palette') ?? null;
      } catch {
        /* The playground default also applies when storage is unavailable. */
      }
      // Read the preference before the shared service initializes its library default.
      const theme = inject(ThemingService);
      if (!theme.palettes.some((palette) => palette.id === savedPalette)) theme.setPalette('orange');
    }),
    provideRouter(ROUTES, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })),
    provideNavigation({
      sections: [{ id: 'base', title: '', order: 1 }]
    }),
    // provideNavigationI18n(),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
        xml: () => import('highlight.js/lib/languages/xml') // for HTML
      }
    })
  ]
};
