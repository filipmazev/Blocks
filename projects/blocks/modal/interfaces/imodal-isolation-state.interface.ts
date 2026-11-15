/** Original accessibility state restored when a modal no longer isolates an element. @internal */
export interface IModalIsolationState {
  /** Original inert property, including application-owned inertness. */
  inert: boolean;
  /** Original aria-hidden value, or null when absent. */
  ariaHidden: string | null;
}
