import { NONINTERACTIVE_SURFACE_SELECTOR } from '../constants/surface-interaction.constants';

/** Resolves state for a surface, its owning label, or a native control within a projected field. */
export function isSurfaceInteractionBlocked(element: HTMLElement): boolean {
  if (element.closest(NONINTERACTIVE_SURFACE_SELECTOR) || element.closest('label')?.control?.matches(NONINTERACTIVE_SURFACE_SELECTOR)) return true;

  const control = element.querySelector('input:not([type="hidden"]), select, textarea');

  return !!control && control.closest('[data-bx-surface]') === element && control.matches(NONINTERACTIVE_SURFACE_SELECTOR);
}
