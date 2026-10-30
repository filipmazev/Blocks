import { SelectionChangeSource } from '../types/select.types';

/** Selection changes distinguish user intent from automatic page selection. */
export interface ISelectionChange<T> {
  /** Updated form value. */
  value: T;
  /** Why the selection changed. */
  source: SelectionChangeSource;
}
