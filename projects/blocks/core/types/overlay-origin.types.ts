/** Callable tracking teardown with an explicit refresh for coordinated child overlays. */
export type OverlayOriginTracker = (() => void) & {
  /** Re-measure the source and refresh its native anchor offset or fallback position. */
  reposition: () => void;
};
