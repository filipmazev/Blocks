/** Optional coordination for overlays whose origins can move inside other overlays or clipped scrollers. */
export interface IOverlayOriginOptions {
  /** Allow native CSS anchor tracking. Defaults to true; coordinated cascades use measured positioning. */
  nativeAnchoring?: boolean;
  /** Optional callback after the overlay is positioned. Use it to update dependent child overlays in order. */
  onPosition?: () => void;
  /** Optional callback when the origin leaves the viewport or a clipping ancestor. Defaults to leaving visibility to the owner. */
  onOriginHidden?: () => void;
}
