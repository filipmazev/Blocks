import type { ILighting } from './ilighting.interface';
import type { ISurfaceHooks } from './isurface-hooks.interface';
/**
 * Describes the entry contract.
 */
export interface IEntry {
  /** Stable identifier used to distinguish this item from its peers. */
  id: number;
  /** DOM element associated with this record. */
  element: HTMLElement;
  /** Callbacks used by the scene to update its owning surface. */
  hooks: ISurfaceHooks;
  /** Whether this item currently participates in rendering or presentation. */
  visible: boolean;
  /** Last measured bounds in viewport CSS pixels; omitted until measurement is available. */
  bounds?: DOMRect;
  /** Most recently applied lighting state, retained for incremental updates. Optional. */
  lastLighting?: ILighting;
  /** Whether this entry is resuming after becoming visible. Optional. */
  resuming?: boolean;
  /** Whether this entry has received its first lighting update. Optional. */
  painted?: boolean;
}
