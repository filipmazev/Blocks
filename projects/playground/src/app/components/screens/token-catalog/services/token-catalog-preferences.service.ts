import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID } from '@angular/core';

import { TOKEN_CATALOG_THEME_ONLY_STORAGE_KEY } from '@playground/components/screens/token-catalog/constants/token-catalog.constants';

/** Persists the catalog's inventory mode independently of filters and section expansion. */
@Injectable()
export class TokenCatalogPreferencesService {
  private readonly document = inject(DOCUMENT);

  private readonly browser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  /** Saved inventory mode for this visit; defaults to theme controls when storage is absent or unavailable. */
  public readonly initialThemeOnly: boolean = this.restoreThemeOnly();

  /**
   * Save the selected inventory mode without requiring browser storage to be available.
   * @param enabled - Whether to show only theme controls on the next visit or refresh.
   */
  public saveThemeOnly(enabled: boolean): void {
    if (!this.browser) return;

    try {
      this.document.defaultView?.localStorage.setItem(TOKEN_CATALOG_THEME_ONLY_STORAGE_KEY, String(enabled));
    } catch {
      // Restricted storage must not prevent changing the current catalog mode.
    }
  }

  //#region Helpers

  private restoreThemeOnly(): boolean {
    if (!this.browser) return true;

    try {
      return this.document.defaultView?.localStorage.getItem(TOKEN_CATALOG_THEME_ONLY_STORAGE_KEY) !== 'false';
    } catch {
      return true;
    }
  }

  //#endregion
}
