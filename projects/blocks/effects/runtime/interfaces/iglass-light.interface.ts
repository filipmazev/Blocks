/** A light in viewport CSS pixels. An element supplies its live center when present. */
export interface IGlassLight {
  /** DOM element associated with this record. Optional. */
  element?: HTMLElement;
  /** Emit from the element's lower border instead of a single point. */
  edge?: 'bottom';
  /** Source position within the element, from 0 to 1. Defaults to its center. */
  offsetX?: number;
  /** Vertical offset from the source element, in CSS pixels. Optional. */
  offsetY?: number;
  /** Illuminate neighboring surfaces; the emitter can render its own light separately. */
  excludeSource?: boolean;
  /** Exclude a containing surface when the light is anchored to one of its children. */
  excludeElement?: HTMLElement;
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. Optional. */
  x?: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. Optional. */
  y?: number;
  /** Height above the glass plane in CSS pixels. Defaults to 180. */
  z?: number;
  /** CSS color or supported semantic color token used for this item. Optional. */
  color?: string;
  /** Multiplier controlling the strength of this light or reflection. Optional. */
  intensity?: number;
  /** Falloff radius in CSS pixels. Defaults to 640. */
  radius?: number;
}
