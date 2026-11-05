import { GlassLight } from '@filip.mazev/blocks/effects/runtime';

/**
 * Describes the bx glass light contract.
 */
export interface IBxGlassLight {
  /** Applies the supplied configuration to the existing instance without replacing its owning element. */
  update(light: GlassLight): void;
  /** Releases observers, listeners and rendering resources owned by this instance. */
  destroy(): void;
}
