import type { VirtualItemKey } from '@primitives/types/virtual-collection.types';

import type { IVirtualItemContext } from './ivirtual-item-context.interface';

/**
 * Internal mounted item with a stable identity and reusable typed template context.
 * @typeParam T - Consumer-owned item data.
 */
export interface IVirtualRenderedItem<T> {
  /** Stable item identity, independent of its current row or local index. */
  key: VirtualItemKey;
  /** Context supplied to the projected template while the item is mounted. */
  context: IVirtualItemContext<T>;
}
