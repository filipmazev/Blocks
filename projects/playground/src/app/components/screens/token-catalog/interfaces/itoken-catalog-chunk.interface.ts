import type { ITokenCatalogEntry } from './itoken-catalog-entry.interface';

export interface ITokenCatalogChunk {
  readonly id: string;
  readonly entries: readonly ITokenCatalogEntry[];
}
