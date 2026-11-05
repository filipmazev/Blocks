/**
 * Only the properties owned by a controller are restored, leaving application changes intact.
 *
 * @param element - Element whose controller-owned inline styles should be snapshotted.
 * @param properties - CSS property names whose original values and priorities should be restored.
 */
export function rememberStyles(element: HTMLElement, properties: readonly string[]): () => void {
  const values = properties.map((property) => ({
    property,
    value: element.style.getPropertyValue(property),
    priority: element.style.getPropertyPriority(property)
  }));

  return () => {
    for (const item of values) {
      if (item.value) element.style.setProperty(item.property, item.value, item.priority);
      else element.style.removeProperty(item.property);
    }
  };
}

/**
 * Snapshot selected attributes and return a callback that restores their previous values or absence.
 *
 * @param element - Element whose attributes will be temporarily owned by a controller.
 * @param attributes - Attribute names to snapshot and restore.
 */
export function rememberAttributes(element: HTMLElement, attributes: readonly string[]): () => void {
  const values = attributes.map((attribute) => [attribute, element.getAttribute(attribute)] as const);

  return () => {
    for (const [attribute, value] of values) {
      if (value === null) element.removeAttribute(attribute);
      else element.setAttribute(attribute, value);
    }
  };
}

/**
 * Clamp a finite number to the supplied interval, using a fallback for absent or non-finite values.
 *
 * @param value - Numeric candidate to normalize.
 * @param low - Inclusive minimum permitted value.
 * @param high - Inclusive maximum permitted value.
 * @param fallback - Value returned when the candidate is absent or not finite.
 */
export function finiteClamp(value: number | undefined, low: number, high: number, fallback: number): number {
  return value === undefined || !Number.isFinite(value) ? fallback : Math.min(high, Math.max(low, value));
}

/**
 * Map a value between two bounds to a clamped cubic 0–1 interpolation.
 *
 * @param low - Lower input bound corresponding to zero interpolation.
 * @param high - Upper input bound corresponding to full interpolation.
 * @param value - Input coordinate to normalize between the bounds.
 */
export function smoothstep(low: number, high: number, value: number): number {
  const t = Math.min(1, Math.max(0, (value - low) / (high - low)));

  return t * t * (3 - 2 * t);
}
