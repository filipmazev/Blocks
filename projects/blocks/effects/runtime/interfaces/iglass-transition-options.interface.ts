/**
 * Describes the glass transition options contract.
 */
export interface IGlassTransitionOptions {
  /** Whether motion should be reduced; omission follows the owning accessibility policy. Optional. */
  reducedMotion?: boolean;
  /** Called on each fade frame; avoid synchronous layout writes here. */
  onUpdate?: () => void;
}
