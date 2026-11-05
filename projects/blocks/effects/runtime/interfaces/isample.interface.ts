import type { IPointLight } from '@effects/runtime/scene';

/**
 * Describes the sample contract.
 */
export interface ISample {
  /** Last measured bounds in viewport CSS pixels; omitted until measurement is available. */
  bounds?: DOMRect;
  /** Point lights collected from the sampled visual sources. */
  lights: IPointLight[];
  /** Media elements whose pixel content contributed to this environmental sample. */
  media: Set<Element>;
  /** Measured source bounds cached for the current sampling pass. */
  rects: Map<Element, DOMRect>;
}
