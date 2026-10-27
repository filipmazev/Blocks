/** Only the properties owned by a controller are restored, leaving application changes intact. */
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

export function rememberAttributes(element: HTMLElement, attributes: readonly string[]): () => void {
  const values = attributes.map((attribute) => [attribute, element.getAttribute(attribute)] as const);
  return () => {
    for (const [attribute, value] of values) {
      if (value === null) element.removeAttribute(attribute);
      else element.setAttribute(attribute, value);
    }
  };
}

export function finiteClamp(value: number | undefined, low: number, high: number, fallback: number): number {
  return value === undefined || !Number.isFinite(value) ? fallback : Math.min(high, Math.max(low, value));
}

export function smoothstep(low: number, high: number, value: number): number {
  const t = Math.min(1, Math.max(0, (value - low) / (high - low)));
  return t * t * (3 - 2 * t);
}
