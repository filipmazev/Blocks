import type { ISurfaceOptions } from './isurface-options.interface';
/**
 * Describes the glass surface contract.
 */
export interface IGlassSurface {
  /** Applies the supplied configuration to the existing instance without replacing its owning element. */
  update(options: ISurfaceOptions): void;
  /** Releases observers, listeners and rendering resources owned by this instance. */
  destroy(): void;
}
