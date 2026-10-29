import { finiteClamp, rememberAttributes, rememberStyles } from './dom';
import type { AppearanceConfiguration, AppearanceConfigurationController } from './types';

export const configurationEvent = 'bx-glass-config-change';
const attributes = ['data-bx-glass-quality', 'data-bx-reduced-motion', 'data-bx-reduced-transparency'];
const properties = ['--bx-glassiness'];
const configured = new WeakSet<HTMLElement>();

/** Configure one inherited application scope. Use document.documentElement to include overlays. */
export function configureAppearance(root: HTMLElement, initial: AppearanceConfiguration = {}): AppearanceConfigurationController {
  if (configured.has(root)) throw new Error('A glass configuration is already mounted on this root.');
  configured.add(root);
  const restoreAttributes = rememberAttributes(root, attributes);
  const originalAttributes = new Map(attributes.map((name) => [name, root.getAttribute(name)]));
  const restoreStyles = rememberStyles(root, properties);
  let options = { ...initial };
  let disposed = false;
  const notify = () => {
    const viewEvent = root.ownerDocument.defaultView?.CustomEvent;
    if (viewEvent) root.ownerDocument.dispatchEvent(new viewEvent(configurationEvent, { detail: root }));
  };
  const paint = (sync = true) => {
    const values: [string, unknown][] = [
      ['data-bx-glass-quality', options.quality],
      ['data-bx-reduced-motion', options.reducedMotion],
      ['data-bx-reduced-transparency', options.reducedTransparency]
    ];
    for (const [name, value] of values) {
      const next = value === undefined ? (originalAttributes.get(name) ?? null) : String(value);
      if (root.getAttribute(name) === next) continue;
      if (next === null) root.removeAttribute(name);
      else root.setAttribute(name, next);
    }
    if (options.glassiness !== undefined) {
      const next = String(finiteClamp(options.glassiness, 0, 1, 0.5));
      if (root.style.getPropertyValue('--bx-glassiness') !== next) root.style.setProperty('--bx-glassiness', next);
    } else restoreStyles();
    // Tint and blur inherit directly in CSS. Only renderer/accessibility changes
    // need to synchronously revisit every mounted surface.
    if (sync) notify();
  };
  paint();
  return {
    update(next) {
      if (!disposed) {
        const previous = options;
        options = { ...options, ...next };
        paint(
          previous.quality !== options.quality ||
            previous.reducedMotion !== options.reducedMotion ||
            previous.reducedTransparency !== options.reducedTransparency
        );
      }
    },
    destroy() {
      if (disposed) return;
      disposed = true;
      restoreAttributes();
      restoreStyles();
      configured.delete(root);
      notify();
    }
  };
}

export function inheritedAttribute(element: HTMLElement, name: string): string | null {
  let current: HTMLElement | null = element;
  while (current) {
    const value = current.getAttribute(name);
    if (value !== null) return value;
    current = current.parentElement;
  }
  return null;
}
