/**
 * Describes the reflection contract.
 */
export interface IReflection {
  /** Element from which the light originates. */
  source: HTMLElement;
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Depth of the reflection used to calculate its projection and attenuation. */
  depth: number;
  /** CSS color or supported semantic color token used for this item. */
  color: string;
  /** Multiplier controlling the strength of this light or reflection. */
  intensity: number;
  /** Corner or influence radius in CSS pixels, as used by the owning geometry. */
  radius: number;
}
