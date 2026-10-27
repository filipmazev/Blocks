/** Keep a portalled surface in its source theme without freezing global appearance settings. */
export function inheritOverlayTheme(source: HTMLElement, pane: HTMLElement): () => void {
  const win = source.ownerDocument.defaultView;
  if (!win) return () => {};
  const copied = new Set<string>();
  const refresh = () => {
    const styles = win.getComputedStyle(source);
    const current = new Set<string>();
    for (let index = 0; index < styles.length; index++) {
      const property = styles.item(index);
      // Material settings remain inherited from the application root and update immediately.
      if (property.startsWith('--bx-') && !property.startsWith('--bx-glass-')) {
        pane.style.setProperty(property, styles.getPropertyValue(property));
        current.add(property);
      }
    }
    for (const property of copied) if (!current.has(property)) pane.style.removeProperty(property);
    copied.clear();
    current.forEach((property) => copied.add(property));
    pane.style.setProperty('--bx-glass-surface', 'var(--bx-bg-surface)');
    pane.style.setProperty('--bx-glass-text', 'var(--bx-text-primary)');
    pane.style.setProperty('--bx-glass-edge', 'var(--bx-border-subtle)');
    pane.style.setProperty('--bx-glass-accent', 'var(--bx-primary)');
    pane.classList.toggle('bx-high-contrast-scope', !!source.closest('.high-contrast, .bx-high-contrast-scope'));
    pane.style.color = 'var(--bx-text-primary)';
    pane.style.fontFamily = styles.fontFamily;
    pane.style.colorScheme = styles.colorScheme;
  };
  refresh();
  const observer = new MutationObserver(refresh);
  observer.observe(source, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  // Ignore the source's animated light styles; enclosing theme scopes carry material configuration.
  for (let scope = source.parentElement; scope; scope = scope.parentElement) {
    observer.observe(scope, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] });
  }
  return () => observer.disconnect();
}
