/** Internal vector magnifier driven by the stepper's existing selection spring. */
export interface IStepperMagnifier {
  /** Original list supplying live icon and connector geometry. */
  readonly source: HTMLElement;
  /** Persistent optical selection surface containing the magnified rendering. */
  readonly lens: HTMLElement;
  /** Refresh vector content and cached layout after source, theme or size changes. */
  refresh(): void;
  /**
   * Paint the current selection geometry without measuring layout.
   * @param x - Lens left edge in track coordinates, in CSS pixels.
   * @param y - Lens top edge in track coordinates, in CSS pixels.
   * @param width - Lens width before spring deformation, in CSS pixels.
   * @param height - Lens height before spring deformation, in CSS pixels.
   * @param scaleX - Current horizontal spring deformation.
   * @param scaleY - Current vertical spring deformation.
   */
  update(x: number, y: number, width: number, height: number, scaleX: number, scaleY: number): void;
  /** Remove decorative vectors, owned source IDs, listeners and source masking. */
  destroy(): void;
}
