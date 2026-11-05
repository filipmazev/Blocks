import { lightBoundarySelector } from '@effects/runtime/constants/lighting-visibility.constants';

/**
 * Keep passive emitters in the same overlay or explicitly scoped scene as nearby controls.
 *
 * @param element - Surface or light-source element whose nearest shared lighting root should be resolved.
 */
export function getGlassLightRoot(element: HTMLElement): HTMLElement {
  return element.closest<HTMLElement>(lightBoundarySelector) ?? element.ownerDocument.documentElement;
}
