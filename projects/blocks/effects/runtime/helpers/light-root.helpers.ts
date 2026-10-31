import { lightBoundarySelector } from '../visibility';

/** Keep passive emitters in the same overlay or explicitly scoped scene as nearby controls. */
export function getGlassLightRoot(element: HTMLElement): HTMLElement {
  return element.closest<HTMLElement>(lightBoundarySelector) ?? element.ownerDocument.documentElement;
}
