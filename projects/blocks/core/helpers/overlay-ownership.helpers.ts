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
