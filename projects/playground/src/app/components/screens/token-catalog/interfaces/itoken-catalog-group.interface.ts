import type { ITokenCatalogChunk } from './itoken-catalog-chunk.interface';
import type { ITokenCatalogEntry } from './itoken-catalog-entry.interface';

export interface ITokenCatalogGroup {
  readonly id: string;
  readonly label: string;
  readonly total: number;
  readonly entries: readonly ITokenCatalogEntry[];
  readonly chunks: readonly ITokenCatalogChunk[];
}
