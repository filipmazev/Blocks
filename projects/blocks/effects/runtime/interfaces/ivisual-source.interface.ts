/**
 * Describes the visual source contract.
 */
export interface IVisualSource {
  /** DOM element associated with this record. */
  element: Element;
  /** CSS color or supported semantic color token used for this item. */
  color: string;
}
