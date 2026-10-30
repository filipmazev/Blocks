import { FlexibleConnectedPositionStrategy, OverlayRef } from '@angular/cdk/overlay';
import { OverlayOriginTracker } from '../types/overlay-origin.types';
import { IOverlayOriginOptions } from '../interfaces/ioverlay-origin-options.interface';
import { isOverlayOriginVisible } from './overlay-origin-visibility.helpers';

let nextAnchor = 0;

export function trackOverlayOrigin(overlay: OverlayRef, origin: HTMLElement, options: IOverlayOriginOptions = {}): OverlayOriginTracker {
  const view = origin.ownerDocument.defaultView;
  const strategy = overlay.getConfig().positionStrategy;
  if (!view || !(strategy instanceof FlexibleConnectedPositionStrategy)) return Object.assign(() => {}, { reposition: () => {} });

  const host = overlay.hostElement;
  host.classList.add('bx-overlay-tracked');
  const native =
    options.nativeAnchoring !== false &&
    view.CSS?.supports('position-anchor', '--bx-origin') &&
    !!(origin.compareDocumentPosition(host) & Node.DOCUMENT_POSITION_FOLLOWING);
  const anchor = native ? `--bx-overlay-origin-${++nextAnchor}` : null;
  const originalAnchor = origin.style.getPropertyValue('anchor-name');
  const originalPriority = origin.style.getPropertyPriority('anchor-name');
  const parent = host.parentElement;
  let documentLayer: HTMLElement | undefined;
  if (anchor && !overlay.getConfig().usePopover && !overlay.getConfig().hasBackdrop && parent?.classList.contains('cdk-overlay-container')) {
    let documentOrigin = true;
    for (let element: HTMLElement | null = origin; element; element = element.parentElement) {
      const style = view.getComputedStyle(element);
      const nestedScroller = element !== origin && element !== origin.ownerDocument.body && /auto|scroll|hidden/.test(`${style.overflowX} ${style.overflowY}`);
      if (style.position === 'fixed' || style.position === 'sticky' || nestedScroller) {
        documentOrigin = false;
        break;
      }
    }
    if (documentOrigin) {
      // Keep page menus in the document's scrolling layer. A fixed ancestor
      // requires WebKit to counter-scroll the menu during iOS toolbar changes
      // and rubber-banding, which can lag behind the trigger's scroll layer.
      documentLayer = origin.ownerDocument.createElement('div');
      documentLayer.className = parent.className;
      documentLayer.classList.add('bx-overlay-document-layer');
      documentLayer.style.setProperty('--bx-overlay-layer-z-index', view.getComputedStyle(parent).zIndex);
      parent.after(documentLayer);
      documentLayer.append(host);
    }
  }
  if (anchor && !documentLayer) {
    const names = view.getComputedStyle(origin).getPropertyValue('anchor-name').trim();
    origin.style.setProperty('anchor-name', names && names !== 'none' ? `${names}, ${anchor}` : anchor);
    host.style.setProperty('position-anchor', anchor);
  }

  const reposition = () => {
    if (!overlay.hasAttached()) return;

    if (options.onOriginHidden && !isOverlayOriginVisible(origin)) {
      options.onOriginHidden();
      return;
    }

    if (!anchor) {
      strategy.reapplyLastPosition();
      options.onPosition?.();
      return;
    }
    host.classList.remove('bx-overlay-anchored');
    // CDK measures in viewport coordinates. Temporarily use its fixed containing
    // block without reparenting the pane (which would blur a focused search).
    documentLayer?.classList.remove('bx-overlay-document-layer');
    const display = parent?.style.getPropertyValue('display');
    const displayPriority = parent?.style.getPropertyPriority('display');
    // CDK still measures its original container, which may now match :empty.
    // Keep that viewport measurement valid, including iOS fixed-layer offsets.
    if (documentLayer) parent?.style.setProperty('display', 'block');
    overlay.updatePosition();
    if (documentLayer && parent) {
      if (display) parent.style.setProperty('display', display, displayPriority);
      else parent.style.removeProperty('display');
    }
    if (documentLayer) {
      const target = overlay.overlayElement.getBoundingClientRect();
      documentLayer.classList.add('bx-overlay-document-layer');
      host.style.setProperty('--bx-overlay-anchor-top', '0px');
      host.style.setProperty('--bx-overlay-anchor-left', '0px');
      host.classList.add('bx-overlay-anchored');
      // Measure the absolute containing block, including positioned bodies and
      // document scroll. No anchor counter-scroll or scroll-time writes are
      // needed when the trigger and menu already share the root scroller.
      const zero = host.getBoundingClientRect();
      host.style.setProperty('--bx-overlay-anchor-top', `${target.top - zero.top}px`);
      host.style.setProperty('--bx-overlay-anchor-left', `${target.left - zero.left}px`);
      options.onPosition?.();
      return;
    }
    const source = origin.getBoundingClientRect();
    const target = host.getBoundingClientRect();
    host.style.setProperty('--bx-overlay-anchor-top', `calc(anchor(top) + ${target.top - source.top}px)`);
    host.style.setProperty('--bx-overlay-anchor-left', `calc(anchor(left) + ${target.left - source.left}px)`);
    host.classList.add('bx-overlay-anchored');
    options.onPosition?.();
  };
  const onScroll = (event: Event) => {
    const target = event.target;
    if (target !== view && !(target instanceof Node && target.contains(origin))) return;

    if (!anchor) reposition();
    else if (options.onOriginHidden && !isOverlayOriginVisible(origin)) options.onOriginHidden();
  };
  const observeScroll = !anchor || !!options.onOriginHidden;
  if (observeScroll) view.addEventListener('scroll', onScroll, { capture: true, passive: true });
  view.addEventListener('resize', reposition, { passive: true });
  const resize = new view.ResizeObserver(reposition);
  resize.observe(origin);
  resize.observe(overlay.overlayElement);
  reposition();

  const disconnect = () => {
    resize.disconnect();
    view.removeEventListener('resize', reposition);
    if (observeScroll) view.removeEventListener('scroll', onScroll, true);
    if (anchor) {
      host.classList.remove('bx-overlay-anchored');
      host.style.removeProperty('position-anchor');
      host.style.removeProperty('--bx-overlay-anchor-top');
      host.style.removeProperty('--bx-overlay-anchor-left');
      if (originalAnchor) origin.style.setProperty('anchor-name', originalAnchor, originalPriority);
      else origin.style.removeProperty('anchor-name');
    }
    if (documentLayer) {
      // Restore CDK's parent before detach so its cached host can reopen.
      if (host.parentElement === documentLayer) parent?.append(host);
      documentLayer.remove();
    }
    host.classList.remove('bx-overlay-tracked');
  };
  return Object.assign(disconnect, { reposition });
}
