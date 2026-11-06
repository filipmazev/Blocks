/** Contiguous visible/overscan range; an independently pinned focused row may also remain mounted. */
export interface IVirtualRange {
  /** Inclusive item index of the sliding render window. */
  start: number;
  /** Exclusive item index of the sliding render window. */
  end: number;
  /** Responsive grid column count; one for lists. */
  columns: number;
}
