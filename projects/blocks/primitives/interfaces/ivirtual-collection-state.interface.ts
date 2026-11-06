import type { IVirtualRange } from './ivirtual-range.interface';
import type { IVirtualRow } from './ivirtual-row.interface';

/**
 * Internal rendering snapshot.
 * @typeParam T - Item data.
 */
export interface IVirtualCollectionState<T> {
  /** Contiguous overscan range. */
  range: IVirtualRange;
  /** Mounted rows, including at most one independently focused row. */
  rows: readonly IVirtualRow<T>[];
  /** Trailing placeholder height. */
  bottom: number;
}
