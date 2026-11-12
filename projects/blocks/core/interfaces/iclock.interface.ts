/**
 * Supplies the current instant to every date and time feature.
 *
 * Inject a custom implementation to make Today, Now, relative presets and natural-language parsing deterministic in tests, demos and scheduled jobs.
 */
export interface IClock {
  /**
   * Return the current instant.
   */
  now(): Date;
  /** IANA time-zone identifier the clock prefers for civil interpretation, or undefined to use the configured default. */
  readonly timeZone?: string;
}
