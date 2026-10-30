/** Internal persisted desktop and section states. Unknown storage values are validated before use. */
export interface ISideNavSavedState {
  collapsed?: boolean;
  sections: Record<string, boolean>;
}
