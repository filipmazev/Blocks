import { Injectable } from '@angular/core';

import type { IIconCatalogPreferences } from '@playground/components/screens/icon-catalog/interfaces/iicon-catalog-preferences.interface';

import { ICON_CATALOG_DEFAULTS } from '@playground/components/screens/icon-catalog/constants/icon-catalog.constants';

/** Supplies fresh catalog defaults for each visit without restoring or saving browser storage. */
@Injectable()
export class IconCatalogPreferencesService {
  public readonly initial: IIconCatalogPreferences = ICON_CATALOG_DEFAULTS;
}
