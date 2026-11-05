/** An inexpensive colored reflection proxy for a foreground or background object. */
export interface IGlassReflector {
  /** DOM element associated with this record. */
  element: HTMLElement;
  /** Defaults to the element's computed background color. */
  color?: string;
  /** Multiplier controlling the strength of this light or reflection. Optional. */
  intensity?: number;
  /** Signed depth relative to the glass plane. Defaults to 80. */
  depth?: number;
}
