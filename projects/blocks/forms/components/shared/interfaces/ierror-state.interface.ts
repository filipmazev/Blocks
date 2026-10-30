/** State passed to a custom error-display policy. */
export interface IErrorState {
  /** Whether validation currently fails. */
  invalid: boolean;
  /** Whether interaction with the field has completed. */
  touched: boolean;
  /** Whether the user changed the field. */
  dirty: boolean;
  /** Whether the containing form has been submitted. */
  submitted: boolean;
  /** Whether the field is disabled. */
  disabled: boolean;
  /** Whether asynchronous validation is pending. */
  pending: boolean;
}
