import type { IGlassLight } from './iglass-light.interface';
import type { IGlassReflector } from './iglass-reflector.interface';
/**
 * Describes the glass scene options contract.
 */
export interface IGlassSceneOptions {
  /** Reuse receiver measurements for frequent light-only updates. refresh() still invalidates them. */
  reuseGeometry?: boolean;
  /** All sources are candidates; each receiver evaluates its four strongest visible lights after exclusions and distance falloff. */
  lights?: readonly IGlassLight[];
  /** At most four reflectors are evaluated per scene. */
  reflectors?: readonly IGlassReflector[];
}
