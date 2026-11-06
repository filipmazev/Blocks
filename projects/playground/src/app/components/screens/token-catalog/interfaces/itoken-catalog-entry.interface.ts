import type { TokenCatalogCategory, TokenCatalogKind } from '@playground/components/screens/token-catalog/types/token-catalog.types';

export interface ITokenCatalogEntry {
  readonly id: string;
  readonly name: string;
  readonly reference: string;
  readonly category: TokenCatalogCategory;
  readonly group: string;
  readonly kind: TokenCatalogKind;
  readonly scope: string;
  readonly defaults: readonly string[];
  readonly companion: string;
  readonly companionReference: string;
  readonly search: string;
}
