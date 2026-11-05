/** Context for customizing the select's displayed value. */
export interface ISelectTriggerContext<T> {
  /** Current form value. */
  $implicit: T | null;
  /** Resolved labels of the loaded selected options. */
  labels: readonly string[];
}
