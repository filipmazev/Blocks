import type { VirtualItemKey } from '@primitives/types/virtual-collection.types';

import type { IVirtualRenderedItem } from './ivirtual-rendered-item.interface';

/**
 * Internal row shared by rendering and measurement.
 * @typeParam T - Item data.
 */
export interface IVirtualRow<T> {
  /** Stable identity of the row's first item. */
  key: VirtualItemKey;
  /** Zero-based row number. */
  index: number;
  /** Index of the first item. */
  startIndex: number;
  /** Mounted item keys and typed template contexts assigned to the row. */
  items: readonly IVirtualRenderedItem<T>[];
  /** Spacer before this mounted row, in CSS pixels. */
  before: number;
}
