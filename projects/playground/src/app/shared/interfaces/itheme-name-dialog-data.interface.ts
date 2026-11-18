/** Initialization data for the reusable theme naming dialog. */
export interface IThemeNameDialogData {
  /** Accessible name and purpose for the dialog, e.g. Save theme or Rename theme. */
  readonly title: string;
  /** Prefilled name, such as the current name when renaming. */
  readonly name: string;
  /** Descriptive guidance shown above the field. */
  readonly hint: string;
  /** Label for the primary confirm action, e.g. Save or Rename. */
  readonly confirmLabel: string;
  /** Existing saved-theme names that conflict with the proposed name, compared case-insensitively. */
  readonly takenNames: readonly string[];
}
