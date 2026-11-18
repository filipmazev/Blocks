/** One record owned by the IndexedDB utility example. */
export interface IIndexedDbDemoRecord {
  /** Stable storage key. */
  readonly id: string;
  /** Human-readable example label. */
  readonly label: string;
  /** Creation time in milliseconds since the Unix epoch. */
  readonly createdAt: number;
}
