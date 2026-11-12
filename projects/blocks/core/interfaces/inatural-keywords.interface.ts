/**
 * Localized keyword groups used by natural-language date parsing.
 */
export interface INaturalKeywords {
  /** Words meaning today. */
  readonly today: readonly string[];
  /** Words meaning tomorrow. */
  readonly tomorrow: readonly string[];
  /** Words meaning yesterday. */
  readonly yesterday: readonly string[];
  /** Words meaning next. */
  readonly next: readonly string[];
  /** Words meaning last or previous. */
  readonly last: readonly string[];
  /** Phrases meaning this week. */
  readonly thisWeek: readonly string[];
  /** Phrases meaning next week. */
  readonly nextWeek: readonly string[];
  /** Phrases meaning last week. */
  readonly lastWeek: readonly string[];
  /** Phrases meaning next month. */
  readonly nextMonth: readonly string[];
  /** Phrases meaning last month. */
  readonly lastMonth: readonly string[];
  /** Phrases meaning next year. */
  readonly nextYear: readonly string[];
  /** Phrases meaning last year. */
  readonly lastYear: readonly string[];
  /** Unit words for days. */
  readonly inDays: readonly string[];
  /** Unit words for weeks. */
  readonly inWeeks: readonly string[];
  /** Unit words for months. */
  readonly inMonths: readonly string[];
  /** Unit words for years. */
  readonly inYears: readonly string[];
  /** Words introducing a time, such as at. */
  readonly at: readonly string[];
}
