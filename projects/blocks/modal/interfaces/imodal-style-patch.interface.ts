/** Presentation updates that preserve the mounted modal layout and its content. */
export interface IModalStylePatch {
  /** Show the built-in close action when dismissal is allowed. */
  showCloseButton?: boolean;
  /** Replace wrapper classes; null clears them. */
  wrapperClasses?: string | null;
  /** Replace inline wrapper styles; null clears them. */
  wrapperStyles?: string | null;
}
