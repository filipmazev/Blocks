import { finiteClamp, rememberAttributes, rememberStyles } from './dom';
import type { AppearanceConfiguration, AppearanceConfigurationController } from './types';

export const configurationEvent = 'bx-glass-config-change';
const attributes = ['data-bx-glass-material', 'data-bx-glass-quality', 'data-bx-reduced-motion', 'data-bx-reduced-transparency'];
const properties = ['--bx-glass-blur', '--bx-glass-opacity'];
const configured = new WeakSet<HTMLElement>();

/** Configure one inherited application scope. Use document.documentElement to include overlays. */
export function configureAppearance(root: HTMLElement, initial: AppearanceConfiguration = {}): AppearanceConfigurationController {
  if (configured.has(root)) throw new Error('A glass configuration is already mounted on this root.');
  configured.add(root);
  const restoreAttributes = rememberAttributes(root, attributes);
  const restoreStyles = rememberStyles(root, properties);
  let options = { ...initial };
  let disposed = false;
  const notify = () => {
    const ViewEvent = root.ownerDocument.defaultView?.CustomEvent;
    if (ViewEvent) root.ownerDocument.dispatchEvent(new ViewEvent(configurationEvent, { detail: root }));
  };
  const paint = () => {
    restoreAttributes();
    restoreStyles();
    const values: [string, unknown][] = [
      ['data-bx-glass-material', options.material],
      ['data-bx-glass-quality', options.quality],
      ['data-bx-reduced-motion', options.reducedMotion],
      ['data-bx-reduced-transparency', options.reducedTransparency]
    ];
    for (const [name, value] of values) if (value !== undefined) root.setAttribute(name, String(value));
    if (options.blur !== undefined) root.style.setProperty('--bx-glass-blur', `${finiteClamp(options.blur, 0, 40, 10)}px`);
    if (options.tint !== undefined) root.style.setProperty('--bx-glass-opacity', String(finiteClamp(options.tint, 0, 1, 0.4)));
    notify();
  };
  paint();
  return {
    update(next) {
      if (!disposed) {
        options = { ...options, ...next };
        paint();
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
