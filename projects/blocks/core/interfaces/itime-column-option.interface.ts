/**
 * One selectable option in a time wheel column.
 */
export interface ITimeColumnOption {
  /** Serialized column value used to compose the time, such as `'14'`, `'05'` or `'PM'`. */
  readonly value: string;
  /** Visible label. */
  readonly label: string;
  /** Whether the option cannot be selected. */
  readonly disabled: boolean;
}
