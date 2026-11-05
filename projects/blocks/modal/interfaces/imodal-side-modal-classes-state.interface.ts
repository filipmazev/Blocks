/** Resolved modalClasses state used by ModalSide. */
export interface IModalSideModalClassesState extends Record<string, boolean> {
  /** Whether the 'side-modal-content-wrapper' CSS class is applied. */
  'side-modal-content-wrapper': boolean;
  /** Whether the 'side-modal-default-style' CSS class is applied. */
  'side-modal-default-style': boolean;
  /** Whether the 'with-footer' CSS class is applied. */
  'with-footer': boolean;
  /** Whether the left CSS class is applied. */
  left: boolean;
  /** Whether the right CSS class is applied. */
  right: boolean;
  /** Whether the 'side-modal-animate-in' CSS class is applied. */
  'side-modal-animate-in': boolean;
  /** Whether the 'side-modal-animate-out' CSS class is applied. */
  'side-modal-animate-out': boolean;
}
