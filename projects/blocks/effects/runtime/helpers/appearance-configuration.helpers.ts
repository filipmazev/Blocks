import type { IAppearanceConfiguration, IAppearanceConfigurationController } from '@effects/runtime/types/runtime.types';

import { attributes, configurationEvent, configured, properties } from '@effects/runtime/constants/appearance-configuration.constants';

import { finiteClamp, rememberAttributes, rememberStyles } from './dom.helpers';
import { rememberRenderedSurfaceStyles } from './surface-style.helpers';

/**
 * Configure one inherited application scope. Use document.documentElement to include overlays.
 *
 * @param root - Root element whose subtree inherits the configured appearance.
 * @param initial - Initial partial appearance preferences; omitted settings use the runtime defaults.
 */
export function configureAppearance(root: HTMLElement, initial: IAppearanceConfiguration = {}): IAppearanceConfigurationController {
  if (configured.has(root)) throw new Error('A glass configuration is already mounted on this root.');

  configured.add(root);

  const restoreAttributes = rememberAttributes(root, attributes);
  const originalAttributes = new Map(attributes.map((name) => [name, root.getAttribute(name)]));
  const restoreStyles = rememberStyles(root, properties);

  let preferredGlassiness = initial.glassiness;
  let options = { ...initial };

  if (options.quality === 'baseline') options.glassiness = 'off';

  if (options.glassiness === 'off' && options.quality !== 'baseline') options.quality = 'auto';

  let disposed = false;

  const notify = () => {
    const viewEvent = root.ownerDocument.defaultView?.CustomEvent;

    if (viewEvent) root.ownerDocument.dispatchEvent(new viewEvent(configurationEvent, { detail: root }));
  };

  const paint = (sync = true) => {
    const values: [string, unknown][] = [
      ['data-bx-glass-quality', options.quality],
      ['data-bx-glassiness-mode', options.glassiness],
      ['data-bx-reduced-motion', options.reducedMotion],
      ['data-bx-reduced-transparency', options.reducedTransparency]
    ];

    for (const [name, value] of values) {
      const next = value === undefined ? (originalAttributes.get(name) ?? null) : String(value);

      if (root.getAttribute(name) === next) continue;

      if (next === null) root.removeAttribute(name);
      else root.setAttribute(name, next);
    }

    if (options.translucency !== undefined) {
      const next = String(finiteClamp(options.translucency, 0, 1, 0.5));

      if (root.style.getPropertyValue('--bx-translucency') !== next) root.style.setProperty('--bx-translucency', next);
    } else restoreStyles();

    rememberRenderedSurfaceStyles(root);

    // Tint and blur inherit directly in CSS. Only renderer/accessibility changes
    // need to synchronously revisit every mounted surface.
    if (sync) notify();
  };

  paint();

  return {
    update(next) {
      if (!disposed) {
        const previous = options;

        if ('glassiness' in next) preferredGlassiness = next.glassiness;

        options = { ...options, ...next, glassiness: preferredGlassiness };

        if (options.quality === 'baseline') options.glassiness = 'off';

        if (options.glassiness === 'off' && options.quality !== 'baseline') options.quality = 'auto';

        paint(
          previous.quality !== options.quality ||
            previous.glassiness !== options.glassiness ||
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

/**
 * Read an attribute from the closest matching element in the ancestor chain.
 *
 * @param element - Element from which inherited-attribute lookup starts.
 * @param name - Attribute name to resolve from this element or its ancestors.
 */
export function inheritedAttribute(element: HTMLElement, name: string): string | null {
  let current: HTMLElement | null = element;

  while (current) {
    const value = current.getAttribute(name);

    if (value !== null) return value;

    current = current.parentElement;
  }

  return null;
}
