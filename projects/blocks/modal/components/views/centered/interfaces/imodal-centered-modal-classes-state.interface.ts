/** Resolved modalClasses state used by ModalCentered. */
export interface IModalCenteredModalClassesState extends Record<string, boolean> {
  /** Whether the 'centered-modal-content-wrapper' CSS class is applied. */
  'centered-modal-content-wrapper': boolean;
  /** Whether the 'centered-modal-default-style' CSS class is applied. */
  'centered-modal-default-style': boolean;
  /** Whether the 'centered-modal-animate-in' CSS class is applied. */
  'centered-modal-animate-in': boolean;
  /** Whether the 'centered-modal-animate-out' CSS class is applied. */
  'centered-modal-animate-out': boolean;
}
