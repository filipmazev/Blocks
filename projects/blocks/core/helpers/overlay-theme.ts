export function inheritOverlayTheme(source: HTMLElement, pane: HTMLElement): () => void {
  const win = source.ownerDocument.defaultView;

  if (!win) return () => {};
  const copied = new Set<string>();
  const refresh = () => {
    const styles = win.getComputedStyle(source);
    const inherited = win.getComputedStyle(pane.parentElement ?? pane);
    const current = new Set<string>();
    for (let index = 0; index < styles.length; index++) {
      const property = styles.item(index);
      if (property.startsWith('--')) {
        const value = styles.getPropertyValue(property);
        if (value !== inherited.getPropertyValue(property)) {
          pane.style.setProperty(property, value);
          current.add(property);
        }
      }
    }

    for (const property of copied) if (!current.has(property)) pane.style.removeProperty(property);

    copied.clear();
    current.forEach((property) => copied.add(property));
    pane.classList.toggle('bx-high-contrast-scope', !!source.closest('.high-contrast, .bx-high-contrast-scope'));
    pane.style.fontFamily = styles.fontFamily;
    pane.style.direction = styles.direction;
    pane.style.colorScheme = styles.colorScheme;

    if (pane.dir !== styles.direction) pane.dir = styles.direction;
  };
  refresh();
  const observer = new MutationObserver(refresh);
  observer.observe(source, { attributes: true, attributeFilter: ['class', 'dir', 'data-theme'] });
  for (let scope = source.parentElement; scope; scope = scope.parentElement) {
    observer.observe(scope, { attributes: true, attributeFilter: ['class', 'style', 'dir', 'data-theme'] });
  }
  return () => observer.disconnect();
}
