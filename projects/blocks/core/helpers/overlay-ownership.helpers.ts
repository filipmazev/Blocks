import { OVERLAY_ORIGINS } from '@core/constants/overlay-ownership.constants';

/**
 * Check DOM containment including popup panes whose theme origin belongs to the owner or one of its nested popups.
 * @param owner - Trigger, menu pane or task boundary that owns the interaction.
 * @param target - Native DOM event or focus target being checked.
 * @returns True for ordinary descendants and registered popup descendants; stale or cyclic ancestry returns false.
 */
export function containsOverlayTarget(owner: HTMLElement, target: Node): boolean {
  const seen = new Set<Node>();

  let node: Node | null = target;

  while (node && !seen.has(node)) {
    if (owner.contains(node)) return true;

    seen.add(node);
    node = (node.nodeType === 1 ? OVERLAY_ORIGINS.get(node as HTMLElement) : undefined) ?? node.parentNode;
  }

  return false;
}

/**
 * Associate a popup or task boundary with its invoking element for nested outside-click and focus containment.
 * The source remains the logical owner even when the surface is rendered elsewhere in the document or browser top layer.
 * @param source - Stable invoking element; keep it connected for the owned surface's lifetime.
 * @param pane - Popup or task boundary whose descendants belong to that source.
 * @returns Cleanup restoring any previous registered origin; call before removing the owned surface.
 */
export function inheritOverlayOwnership(source: HTMLElement, pane: HTMLElement): () => void {
  const previous = OVERLAY_ORIGINS.get(pane);

  OVERLAY_ORIGINS.set(pane, source);

  return () => {
    if (OVERLAY_ORIGINS.get(pane) !== source) return;

    if (previous) OVERLAY_ORIGINS.set(pane, previous);
    else OVERLAY_ORIGINS.delete(pane);
  };
}
