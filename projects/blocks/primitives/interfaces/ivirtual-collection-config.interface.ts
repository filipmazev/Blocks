import type { VirtualCollectionLayout } from '@primitives/types/virtual-collection.types';

/** Rendering and measurement options for a bidirectional virtual collection. */
export interface IVirtualCollectionConfig {
  /** Optional row organization. Defaults to list; grid calculates columns from available width and minColumnWidth. */
  layout?: VirtualCollectionLayout;
  /** Optional height of an unmeasured row, in CSS pixels and excluding the row gap. Defaults to 128; must be positive and finite. */
  estimatedRowHeight?: number;
  /** Optional extra rendered distance above and below the viewport in CSS pixels. Defaults to 800; clamped to zero or greater. */
  overscan?: number;
  /** Optional minimum grid column width as a CSS length or pixel number. Defaults to 7rem; CSS resolves responsive and font-relative values. */
  minColumnWidth?: number | string;
}
