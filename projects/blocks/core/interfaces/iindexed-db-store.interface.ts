import type { IIndexedDbIndex } from './iindexed-db-index.interface';

/** Object-store schema requested when a database is opened or upgraded. */
export interface IIndexedDbStore {
  /** Stable store name within the database. */
  readonly name: string;
  /** Record key path, or null/omitted for out-of-line keys. */
  readonly keyPath?: string | string[] | null;
  /** Whether missing keys are generated automatically. Defaults to false. */
  readonly autoIncrement?: boolean;
  /** Indexes to create with the store during upgrade. Defaults to none. */
  readonly indexes?: readonly IIndexedDbIndex[];
}
