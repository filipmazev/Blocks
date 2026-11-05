/**
 * Describes the point light contract.
 */
export interface IPointLight {
  /** Stable key used to match this contribution across updates. */
  key: string;
  /** Last measured bounds in viewport CSS pixels; omitted until measurement is available. */
  bounds?: DOMRect;
  /** Element from which the light originates. Optional. */
  source?: HTMLElement;
  /** Whether this contribution represents sampled environmental light. Optional. */
  ambient?: boolean;
  /** Spread of the illumination beyond its origin. Optional. */
  spread?: number;
  /** Whether the source element is excluded from its own illumination. Optional. */
  excludeSource?: boolean;
  /** Element to exclude when applying this light. Optional. */
  excludeElement?: HTMLElement;
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Depth coordinate used when projecting a light onto a surface. */
  z: number;
  /** CSS color or supported semantic color token used for this item. */
  color: string;
  /** Multiplier controlling the strength of this light or reflection. */
  intensity: number;
  /** Corner or influence radius in CSS pixels, as used by the owning geometry. */
  radius: number;
}
