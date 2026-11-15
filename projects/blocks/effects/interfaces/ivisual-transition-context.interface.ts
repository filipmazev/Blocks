/** Context passed to a visual transition's projected template.
 * @typeParam T - The current or outgoing visual value.
 */
export interface IVisualTransitionContext<T> {
  /** Visual value available through `let-value` in the template. */
  $implicit: T;
}
