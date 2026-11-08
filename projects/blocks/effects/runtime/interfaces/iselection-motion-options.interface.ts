/** Configuration for one decorative selection surface within an existing menu or option list. */
export interface ISelectionMotionOptions {
  /** Eligible descendant selector. Defaults to native menu items and options; disabled rows are always excluded. */
  selector?: string;
  /** Whether to snap geometry and remove stretch; omission follows live inherited/system preferences. Owners may update an explicit application override. */
  reducedMotion?: boolean;
}
