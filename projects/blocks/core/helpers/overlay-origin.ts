import { FlexibleConnectedPositionStrategy, OverlayRef } from '@angular/cdk/overlay';

let nextAnchor = 0;

export function trackOverlayOrigin(overlay: OverlayRef, origin: HTMLElement): () => void {
  const view = origin.ownerDocument.defaultView;
  const strategy = overlay.getConfig().positionStrategy;
  if (!view || !(strategy instanceof FlexibleConnectedPositionStrategy)) return () => {};

  const host = overlay.hostElement;
  const native = view.CSS?.supports('position-anchor', '--bx-origin') && !!(origin.compareDocumentPosition(host) & Node.DOCUMENT_POSITION_FOLLOWING);
  const anchor = native ? `--bx-overlay-origin-${++nextAnchor}` : null;
  const originalAnchor = origin.style.getPropertyValue('anchor-name');
  const originalPriority = origin.style.getPropertyPriority('anchor-name');
  if (anchor) {
    const names = view.getComputedStyle(origin).getPropertyValue('anchor-name').trim();
    origin.style.setProperty('anchor-name', names && names !== 'none' ? `${names}, ${anchor}` : anchor);
    host.style.setProperty('position-anchor', anchor);
  }

  const reposition = () => {
    if (!overlay.hasAttached()) return;
    if (!anchor) {
      strategy.reapplyLastPosition();
      return;
    }
    host.classList.remove('bx-overlay-anchored');
    overlay.updatePosition();
    const source = origin.getBoundingClientRect();
    const target = host.getBoundingClientRect();
    host.style.setProperty('--bx-overlay-anchor-top', `calc(anchor(top) + ${target.top - source.top}px)`);
    host.style.setProperty('--bx-overlay-anchor-left', `calc(anchor(left) + ${target.left - source.left}px)`);
    host.classList.add('bx-overlay-anchored');
  };
  const onScroll = (event: Event) => {
    const target = event.target;
    if (target === view || (target instanceof Node && target.contains(origin))) reposition();
  };
  if (!anchor) view.addEventListener('scroll', onScroll, { capture: true, passive: true });
  view.addEventListener('resize', reposition, { passive: true });
  const resize = new view.ResizeObserver(reposition);
  resize.observe(origin);
  resize.observe(overlay.overlayElement);
  reposition();

  return () => {
    resize.disconnect();
    view.removeEventListener('resize', reposition);
    if (!anchor) view.removeEventListener('scroll', onScroll, true);
    else {
      host.classList.remove('bx-overlay-anchored');
      host.style.removeProperty('position-anchor');
      host.style.removeProperty('--bx-overlay-anchor-top');
      host.style.removeProperty('--bx-overlay-anchor-left');
      if (originalAnchor) origin.style.setProperty('anchor-name', originalAnchor, originalPriority);
      else origin.style.removeProperty('anchor-name');
    }
  };
}
