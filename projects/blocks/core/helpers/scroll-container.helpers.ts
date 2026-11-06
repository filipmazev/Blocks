/**
 * Find the nearest vertical scrolling ancestor, falling back to the document scrolling element.
 *
 * @param element - Descendant whose surrounding page or element viewport should be scrolled.
 * @returns The scrollable element, or undefined when no browser viewport is available.
 */
export function findScrollContainer(element: HTMLElement): HTMLElement | undefined {
  const document = element.ownerDocument;
  const win = document.defaultView;

  if (!win) return undefined;

  for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
    if (/(auto|scroll|overlay)/.test(win.getComputedStyle(parent).overflowY)) return parent;
  }

  return document.scrollingElement instanceof HTMLElement ? document.scrollingElement : undefined;
}
