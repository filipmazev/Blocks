/** Configuration for a layout-preserving visual fade using the shared snappy spring. */
export interface IVisualPresenceOptions {
  /** Initial visible state; defaults to true. Initialization never animates by itself. */
  initiallyVisible?: boolean;
  /** Scale at zero opacity, between 0 and 1; defaults to 0.9. Use 1 for text to avoid scaling labels. */
  hiddenScale?: number;
  /** Optional callback when a hidden destination settles, including an immediate reduced-motion update. */
  onHidden?: () => void;
}
