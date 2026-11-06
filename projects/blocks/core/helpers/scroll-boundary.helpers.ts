import type { IScrollBoundary } from '@core/interfaces/iscroll-boundary.interface';

/**
 * Measure a content boundary in an arbitrary element or document scroll viewport.
 *
 * @param content - Content wrapper, which can itself be the scroll viewport.
 * @param container - Actual scrolling element; defaults to the content wrapper.
 * @param endOffset - Pixels excluded from the content's end, such as an orchestration-owned footer. Defaults to zero.
 * @returns Distance, overflow, and visible height without changing scroll position.
 */
export function measureScrollBoundary(content: HTMLElement, container: HTMLElement = content, endOffset: number = 0): IScrollBoundary {
  const documentScroll = container === container.ownerDocument.scrollingElement;
  const viewportHeight = documentScroll ? (container.ownerDocument.defaultView?.innerHeight ?? container.clientHeight) : container.clientHeight;
  const external = content !== container;
  const viewportBottom = documentScroll ? viewportHeight : container.getBoundingClientRect().top + container.clientTop + viewportHeight;
  const offset = Number.isFinite(endOffset) ? Math.max(0, endOffset) : 0;
  const contentHeight = content.scrollHeight - offset;

  return {
    distance: external ? content.getBoundingClientRect().bottom - viewportBottom - offset : contentHeight - container.scrollTop - viewportHeight,
    overflowing: external ? container.scrollHeight > viewportHeight + 1 : contentHeight > viewportHeight + 1,
    viewportHeight
  };
}

/**
 * Observe scroll and geometry changes using passive events and disposable browser observers. Call outside Angular when appropriate.
 *
 * @param content - Content whose children and dimensions can change.
 * @param container - Actual scroll viewport, including the document scrolling element.
 * @param onScroll - Called for scroll events; the caller owns frame coalescing and request guards.
 * @param onResize - Called initially and on content, container, or viewport geometry changes.
 * @returns Cleanup that releases all listeners and observers. Server documents receive a no-op cleanup.
 */
export function observeScrollBoundary(content: HTMLElement, container: HTMLElement, onScroll: () => void, onResize: () => void): () => void {
  const document = container.ownerDocument;
  const win = document.defaultView;

  if (!win) return () => {};

  const target = container === document.scrollingElement ? document : container;
  const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(onResize);
  const observed = new Set<Element>();
  const observeChildren = () => {
    const current = new Set<Element>([container, content, ...Array.from(content.children)]);

    for (const element of observed) {
      if (!current.has(element)) {
        resize?.unobserve(element);
        observed.delete(element);
      }
    }

    for (const element of current) {
      if (!observed.has(element)) {
        resize?.observe(element);
        observed.add(element);
      }
    }

    onResize();
  };

  const mutation = typeof MutationObserver === 'undefined' ? undefined : new MutationObserver(observeChildren);

  observeChildren();
  mutation?.observe(content, { childList: true, subtree: true, characterData: true });
  target.addEventListener('scroll', onScroll, { passive: true });
  win.addEventListener('resize', onResize);
  win.visualViewport?.addEventListener('resize', onResize);

  return () => {
    resize?.disconnect();
    mutation?.disconnect();
    target.removeEventListener('scroll', onScroll);
    win.removeEventListener('resize', onResize);
    win.visualViewport?.removeEventListener('resize', onResize);
  };
}
