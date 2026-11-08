import type { LucideCategoryId } from '@filip.mazev/blocks/icons';

export interface IIconCatalogPreferences {
  readonly size: number;
  readonly strokeWidth: number;
  readonly categories: readonly LucideCategoryId[];
}
