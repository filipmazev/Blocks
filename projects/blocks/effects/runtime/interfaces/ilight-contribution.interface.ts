/**
 * Describes the light contribution contract.
 */
export interface ILightContribution {
  /** Stable key used to match this contribution across updates. */
  key: string;
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** CSS color or supported semantic color token used for this item. */
  color: string;
  /** Strength of the light contribution. */
  strength: number;
  /** Strength of the light contribution along the surface edge. */
  edgeStrength: number;
  /** Whether this contribution represents sampled environmental light. Optional. */
  ambient?: boolean;
  /** Spread of the illumination beyond its origin. Optional. */
  spread?: number;
  /** Falloff radius of the source in CSS pixels, used to size the soft body glow. Optional. */
  radius?: number;
}
