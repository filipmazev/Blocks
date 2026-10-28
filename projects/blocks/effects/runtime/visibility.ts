/** Structural overlay boundaries are independent of numeric z-index values in nested contexts. */
export const lightBoundarySelector =
  '[data-bx-light-scope], dialog, [role="dialog"], [role="alertdialog"], [popover], .cdk-overlay-pane, .toast-container, bx-modal';

/** A short-lived snapshot: caches style reads within a lighting batch, never tracks pointer motion. */
export function lightingVisibility(doc: Document, view: Window) {
  const styles = new Map<Element, CSSStyleDeclaration>();
  const boundaries = new Map<HTMLElement, HTMLElement>();
  const layers = new Map<HTMLElement, HTMLElement>();
  const ambientBoundaries = new Map<Element, HTMLElement>();
  const hitStacks = new Map<string, Element[]>();
  const style = (element: Element) => {
    let value = styles.get(element);
    if (!value) {
      value = view.getComputedStyle(element);
      styles.set(element, value);
    }
    return value;
  };
  const elementsAt = (x: number, y: number): Element[] => {
    const key = `${Math.round(x)},${Math.round(y)}`;
    const cached = hitStacks.get(key);
    if (cached) return cached;
    const elements = [...doc.elementsFromPoint(x, y)];
    for (let index = 0; index < elements.length; index++) {
      const root = elements[index].shadowRoot;
      if (!root) continue;
      const shadowElements = root.elementsFromPoint(x, y);
      if (!shadowElements.length) continue;
      elements.splice(index, 0, ...shadowElements);
      index += shadowElements.length;
    }
    hitStacks.set(key, elements);
    return elements;
  };
  const ambientBoundary = (element: Element): HTMLElement => {
    const cached = ambientBoundaries.get(element);
    if (cached) return cached;
    let current: Element | null = element;
    const visited: Element[] = [];
    while (current) {
      visited.push(current);
      const boundary = ambientBoundaries.get(current) ?? current.closest<HTMLElement>(lightBoundarySelector);
      if (boundary) {
        for (const ancestor of visited) ambientBoundaries.set(ancestor, boundary);
        return boundary;
      }
      const root = current.getRootNode() as ShadowRoot;
      current = current.parentElement ?? root.host ?? null;
    }
    for (const ancestor of visited) ambientBoundaries.set(ancestor, doc.documentElement);
    return doc.documentElement;
  };
  const boundary = (element: HTMLElement): HTMLElement => {
    const cached = boundaries.get(element);
    if (cached) return cached;
    const css = style(element);
    const result =
      element.matches(lightBoundarySelector) || css.position === 'fixed' || css.position === 'sticky'
        ? element
        : element.parentElement
          ? boundary(element.parentElement)
          : element;
    boundaries.set(element, result);
    return result;
  };
  const layer = (element: HTMLElement): HTMLElement => {
    const cached = layers.get(element);
    if (cached) return cached;
    const css = style(element);
    const positionedLayer = css.position !== 'static' && css.zIndex !== 'auto';
    const result =
      element.matches(lightBoundarySelector) || css.position === 'fixed' || css.position === 'sticky' || positionedLayer
        ? element
        : element.parentElement
          ? layer(element.parentElement)
          : element;
    layers.set(element, result);
    return result;
  };
  const exposed = (element: HTMLElement, x: number, y: number, bounds: DOMRect): boolean => {
    if (!element.isConnected || bounds.width <= 0 || bounds.height <= 0) return false;
    // Stay inside rounded corners: their bounding-box corners are not painted pixels.
    const css = style(element);
    const radius = Math.min(
      bounds.width / 2,
      bounds.height / 2,
      Math.max(
        ...[css.borderTopLeftRadius, css.borderTopRightRadius, css.borderBottomLeftRadius, css.borderBottomRightRadius].map((value) => parseFloat(value) || 0)
      )
    );
    const inset = Math.min(bounds.width / 2, bounds.height / 2, 1 + radius * (1 - Math.SQRT1_2));
    const px = Math.max(bounds.left + inset, Math.min(x, bounds.right - inset));
    const py = Math.max(bounds.top + inset, Math.min(y, bounds.bottom - inset));
    if (px < 0 || py < 0 || px >= view.innerWidth || py >= view.innerHeight) return false;
    const hit = doc.elementFromPoint(px, py);
    return !!hit && (hit === element || element.contains(hit));
  };
  return { boundary, layer, exposed, style, elementsAt, ambientBoundary };
}
