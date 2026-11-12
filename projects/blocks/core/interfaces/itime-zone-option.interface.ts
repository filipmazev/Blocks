/** Value emitted by the timezone combobox, combining an IANA identifier with a localized label. */
export interface ITimeZoneOption {
  /** IANA time-zone identifier, such as `'Europe/Paris'`. */
  readonly id: string;
  /** Human-readable zone label resolved for the active locale. */
  readonly label: string;
  /** Current UTC offset in minutes for presentation, or null when it cannot be resolved. */
  readonly offsetMinutes: number | null;
}
