import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';

import type { LucideCategoryId } from '@filip.mazev/blocks/icons';
import type { IIconCatalogPreferences } from '@playground/components/screens/icon-catalog/interfaces/iicon-catalog-preferences.interface';

import { LUCIDE_CATEGORIES } from '@filip.mazev/blocks/icons';

import { ICON_CATALOG_DEFAULTS, ICON_CATALOG_STORAGE_KEY } from '@playground/components/screens/icon-catalog/constants/icon-catalog.constants';

@Injectable()
export class IconCatalogPreferencesService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private readonly browser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  public readonly initial: IIconCatalogPreferences = this.restore();

  private timer: number | undefined;
  private pending: IIconCatalogPreferences | undefined;

  constructor() {
    const onPageHide = () => this.flush();

    if (this.browser) this.document.defaultView?.addEventListener('pagehide', onPageHide);

    this.destroyRef.onDestroy(() => {
      this.document.defaultView?.clearTimeout(this.timer);
      this.flush();
      this.document.defaultView?.removeEventListener('pagehide', onPageHide);
    });
  }

  public save(preferences: IIconCatalogPreferences): void {
    if (!this.browser) return;

    this.pending = preferences;
    this.document.defaultView?.clearTimeout(this.timer);
    this.timer = this.document.defaultView?.setTimeout(() => this.flush(), 200);
  }

  public flush(): void {
    if (!this.pending || !this.browser) return;

    try {
      this.document.defaultView?.localStorage.setItem(ICON_CATALOG_STORAGE_KEY, JSON.stringify(this.pending));
    } catch {
      // Storage can be unavailable in private or embedded browser contexts.
    }

    this.pending = undefined;
  }

  //#region Helpers

  private restore(): IIconCatalogPreferences {
    if (!this.browser) return ICON_CATALOG_DEFAULTS;

    try {
      const value: unknown = JSON.parse(this.document.defaultView?.localStorage.getItem(ICON_CATALOG_STORAGE_KEY) ?? 'null');

      if (!value || typeof value !== 'object' || !('version' in value) || value.version !== 1) return ICON_CATALOG_DEFAULTS;

      const size =
        'size' in value && typeof value.size === 'number' && Number.isInteger(value.size) && value.size >= 16 && value.size <= 64
          ? value.size
          : ICON_CATALOG_DEFAULTS.size;
      const strokeWidth =
        'strokeWidth' in value &&
        typeof value.strokeWidth === 'number' &&
        Number.isFinite(value.strokeWidth) &&
        value.strokeWidth >= 0.5 &&
        value.strokeWidth <= 3
          ? value.strokeWidth
          : ICON_CATALOG_DEFAULTS.strokeWidth;
      const storedCategories: unknown[] = 'categories' in value && Array.isArray(value.categories) ? value.categories : [];
      const categories: LucideCategoryId[] = LUCIDE_CATEGORIES.filter((category) => storedCategories.includes(category.id))
        .slice(0, 1)
        .map((category) => category.id);

      return { version: 1, size, strokeWidth, categories };
    } catch {
      return ICON_CATALOG_DEFAULTS;
    }
  }

  //#endregion
}
