/**
 * Hosting policy inherited by overlays inside the nearest bxOverlayContext provider.
 */
export interface IBxOverlayContext {
  /** Optional browser top-layer preference; omission preserves each consuming overlay's default hosting policy. */
  useTopLayer?: boolean;
}
