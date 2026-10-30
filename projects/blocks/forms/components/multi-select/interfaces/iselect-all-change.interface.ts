import { SelectAllChangeReason } from '../types/multi-select.types';

/** Describes select-all intent independently from the finite loaded selection. */
export interface ISelectAllChange<T> {
  /** Whether future eligible pages in this scope should be automatically selected. */
  selected: boolean;
  /** Search/filter scope to which this intent applies. */
  scope: string;
  /** Loaded selected values; does not claim to enumerate the remote result set. */
  values: readonly T[];
  /** User toggle, individual deselection, scope change, or programmatic reset. */
  reason: SelectAllChangeReason;
}
