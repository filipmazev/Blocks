import { SURFACE_RENDERED_STYLES } from '../constants/surface-style.constants';

/** Controller-only style writes do not change scene geometry or sampled surrounding content. */
export function rememberRenderedSurfaceStyles(element: HTMLElement): void {
  SURFACE_RENDERED_STYLES.set(element, element.getAttribute('style'));
}
