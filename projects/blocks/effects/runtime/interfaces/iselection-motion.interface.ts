import type { ISelectionMotionOptions } from './iselection-motion-options.interface';

/** Owns a noninteractive lit selection surface without changing the list's application selection or focus. */
export interface ISelectionMotion {
  /**
   * Update live motion preferences and remeasure the current row.
   * @param options - Partial preferences; omitted values retain their current settings.
   */
  update(options: ISelectionMotionOptions): void;
  /** Remove the decorative surface, listeners, observers and active spring. Safe to call repeatedly. */
  destroy(): void;
}
