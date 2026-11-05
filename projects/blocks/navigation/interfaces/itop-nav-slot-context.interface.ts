/** Context supplied to top navigation brand and action templates. */
export interface ITopNavSlotContext {
  /** Whether the compact navigation trigger replaces the primary horizontal links. */
  $implicit: boolean;
  /** Named equivalent of $implicit. */
  compact: boolean;
  /** Whether the shared navigation panel is open. */
  open: boolean;
}
