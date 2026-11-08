/**
 * Describes the glass transition options contract.
 */
export interface IGlassTransitionOptions {
  /** Whether motion should be reduced; omission follows the owning accessibility policy. Optional. */
  reducedMotion?: boolean;
  /** Closed material scale, clamped to 0.9–1. Defaults to 0.985; 1 requests opacity-only motion. */
  scale?: number;
  /** Called on each motion paint; avoid synchronous layout writes here. */
  onUpdate?: () => void;
}
