/** Retargetable visual presence that leaves layout and accessibility ownership with the caller. */
export interface IVisualPresence {
  /**
   * Fade and gently scale toward the requested visibility without restarting current motion.
   * @param visible - Whether the visual should be fully present.
   * @param immediate - Snap and stop pending frames; defaults to false. Use for live reduced motion.
   */
  update(visible: boolean, immediate?: boolean): void;
  /** Cancel pending frames and restore the inline styles owned by this controller. */
  destroy(): void;
}
