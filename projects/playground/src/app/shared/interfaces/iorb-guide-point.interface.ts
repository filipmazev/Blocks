/** A measured stop in Home's alternating section tour, in orb-plane pixels. */
export interface IOrbGuidePoint {
  /** Stable section identifier, retained across scrolling and resizing. */
  readonly id: string;
  /** Horizontal center of the orb at this stop, in pixels. */
  readonly x: number;
  /** Vertical center of the orb at this stop, in pixels. */
  readonly y: number;
}
