/** Position and falloff of a source projected onto one receiver. */
export interface ILightProjection {
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Horizontal coordinate of the closest receiving edge in viewport CSS pixels. */
  edgeX: number;
  /** Vertical coordinate of the closest receiving edge in viewport CSS pixels. */
  edgeY: number;
  /** Contribution weight used when combining projected illumination. */
  weight: number;
  /** Contribution weight used for edge illumination. */
  edgeWeight: number;
  /** Horizontal position inside the receiving surface as a `0–100` percentage, in its own rotated space. Optional. */
  localX?: number;
  /** Vertical position inside the receiving surface as a `0–100` percentage, in its own rotated space. Optional. */
  localY?: number;
}
