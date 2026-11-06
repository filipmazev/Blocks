/** Measurement of a content boundary relative to its vertical scroll viewport. */
export interface IScrollBoundary {
  /** Remaining distance in CSS pixels; negative when the content ends above the viewport bottom. */
  distance: number;
  /** Whether the scrollable content exceeds the visible viewport, excluding any supplied footer offset. */
  overflowing: boolean;
  /** Visible viewport height in CSS pixels; zero for a hidden or unmeasurable viewport. */
  viewportHeight: number;
}
