import type { IGlassSceneOptions } from '@effects/runtime/types/runtime.types';

/**
 * Describes the scene entry contract.
 */
export interface ISceneEntry {
  /** Stable identifier used to distinguish this item from its peers. */
  id: number;
  /** Root element establishing the coordinate and observation boundary of this scene. */
  root: HTMLElement;
  /** Current scene configuration used when resolving its emitters and reflectors. */
  options: IGlassSceneOptions;
}
