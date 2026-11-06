import type { VirtualItemKey } from '@primitives/types/virtual-collection.types';

/** Internal keyboard-focus identity retained while responsive rows regroup. */
export interface IVirtualFocusAnchor {
  /** Stable item identity. */
  key: VirtualItemKey;
  /** Index of the focused control inside its item's focusable descendants. */
  control: number;
}
