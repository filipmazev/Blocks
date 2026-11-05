/** Internal persisted desktop and section states. Unknown storage values are validated before use. */
export interface ISideNavSavedState {
  /** Whether the side navigation rail is collapsed. Optional. */
  collapsed?: boolean;
  /** Expansion state keyed by section ID. */
  sections: Record<string, boolean>;
}
