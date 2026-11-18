/** Index configuration for one object-store index, created during the owning store's upgrade. */
export interface IIndexedDbIndex {
  /** Stable index name within its store. */
  readonly name: string;
  /** Key path the index derives from each record. */
  readonly keyPath: string | string[];
  /** Optional IDB index parameters, such as uniqueness. */
  readonly options?: IDBIndexParameters;
}
