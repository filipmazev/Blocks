/** Internal retained visual value; only the current and most recent outgoing layer are rendered.
 * @typeParam T - Value supplied to the projected visual template.
 */
export interface IVisualTransitionLayer<T> {
  /** Stable identity that preserves an interrupted layer's spring. */
  id: number;
  /** Value to render, including while this layer fades out. */
  value: T;
  /** Whether this layer should animate its initial appearance. */
  enter: boolean;
}
