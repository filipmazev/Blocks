import type { VirtualItemKey } from '@primitives/types/virtual-collection.types';

/** Internal scroll anchor retained while measurements or column counts change. */
export interface IVirtualScrollAnchor {
  /** Stable first-item key of the anchored row. */
  key: VirtualItemKey;
  /** Pixel displacement into that row. */
  offset: number;
  /** Previous prefix height of the row. */
  top: number;
}
