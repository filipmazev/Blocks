import type { IGlassSceneOptions } from './iglass-scene-options.interface';
/**
 * Describes the glass scene contract.
 */
export interface IGlassScene {
  /** Applies the supplied configuration to the existing instance without replacing its owning element. */
  update(options: IGlassSceneOptions): void;
  /** Call after moving a registered light/reflector without scrolling or resizing. */
  refresh(): void;
  /** Releases observers, listeners and rendering resources owned by this instance. */
  destroy(): void;
}
