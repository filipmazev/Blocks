/** Context passed to a collapsible or accordion item's optional title and trailing templates. */
export interface ICollapsibleTitleContext {
  /** Resolved heading text, updated when the shared translation adapter changes. */
  readonly $implicit: string;
  /** Current expansion state, useful for noninteractive heading indicators. */
  readonly expanded: boolean;
}
