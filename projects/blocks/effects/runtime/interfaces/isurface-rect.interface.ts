/**
 * Describes the surface rect contract.
 */
export interface ISurfaceRect {
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Measured width in CSS pixels. */
  width: number;
  /** Measured height in CSS pixels. */
  height: number;
  /** Corner or influence radius in CSS pixels, as used by the owning geometry. */
  radius: number;
}
