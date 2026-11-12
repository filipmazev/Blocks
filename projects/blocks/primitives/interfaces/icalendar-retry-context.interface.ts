/** Context supplied to a custom calendar availability-retry template. */
export interface ICalendarRetryContext {
  /** Resolved, translated retry label from the calendar configuration. */
  readonly label: string;
  /** Request the current visible range again; preserves calendar geometry and current selection. */
  readonly retry: () => void;
}
