/** Position and falloff of a source projected onto one receiver. */
export interface ILightProjection {
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Contribution weight used when combining projected illumination. */
  weight: number;
  /** Contribution weight used for edge illumination. */
  edgeWeight: number;
}
