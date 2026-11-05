/**
 * Describes the ambient receiver contract.
 */
export interface IAmbientReceiver {
  /** Stable identifier used to distinguish this item from its peers. */
  id: number;
  /** DOM element associated with this record. */
  element: HTMLElement;
  /** Whether this item currently participates in rendering or presentation. */
  visible: boolean;
  /** Last measured bounds in viewport CSS pixels; omitted until measurement is available. */
  bounds?: DOMRect;
}
