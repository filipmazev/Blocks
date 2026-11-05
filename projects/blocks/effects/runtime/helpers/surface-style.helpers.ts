import { SURFACE_RENDERED_STYLES } from '@effects/runtime/constants/surface-style.constants';

/**
 * Controller-only style writes do not change scene geometry or sampled surrounding content.
 *
 * @param element - Surface whose current inline style is recorded so renderer-only writes can be ignored by scene invalidation.
 */
export function rememberRenderedSurfaceStyles(element: HTMLElement): void {
  SURFACE_RENDERED_STYLES.set(element, element.getAttribute('style'));
}
