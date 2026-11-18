/** Initialization data for the reusable theme confirmation dialog. */
export interface IThemeConfirmDialogData {
  /** Explanatory message describing the consequence of the confirmation. */
  readonly message: string;
  /** Label for the primary confirm action, e.g. Delete or Discard. */
  readonly confirmLabel: string;
  /** Whether the confirm action uses the semantic danger presentation. Defaults to false. */
  readonly danger?: boolean;
}
