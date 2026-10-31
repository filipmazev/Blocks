import { FIELD_SURFACE_SELECTOR, NONINTERACTIVE_SURFACE_SELECTOR } from '../constants/surface-interaction.constants';

/** Resolves state for a surface, its owning label, or a native control within a projected field. */
export function isSurfaceInteractionBlocked(element: HTMLElement): boolean {
  if (element.closest(NONINTERACTIVE_SURFACE_SELECTOR) || element.closest('label')?.control?.matches(NONINTERACTIVE_SURFACE_SELECTOR)) return true;

  const control = element.querySelector('input:not([type="hidden"]), select, textarea');

  return !!control && control.closest('[data-bx-surface]') === element && control.matches(NONINTERACTIVE_SURFACE_SELECTOR);
}

/** Fields illuminate for pointer focus as well as keyboard focus, including projected native controls. */
export function isFieldSurface(element: HTMLElement): boolean {
  if (element.matches(FIELD_SURFACE_SELECTOR)) return true;
  const control = element.querySelector(FIELD_SURFACE_SELECTOR);

  return !!control && control.closest('[data-bx-surface]') === element;
}

/** Only activation keys on action controls should deform a surface; typing in a field never does. */
export function isSurfaceActivationKey(target: Element, key: string): boolean {
  if (target.closest('input, select, textarea, [contenteditable]:not([contenteditable="false"])')) return false;
  if (key === 'Enter') return !!target.closest('button, bx-button, [bx-button], a[href], summary, [role="button"], [role="menuitem"], [role="tab"]');
  if (key === ' ') {
    if (target.closest('a[href]:not([role="button"])')) return false;
    return !!target.closest('button, bx-button, [bx-button], summary, [role="button"], [role="menuitem"], [role="tab"]');
  }

  return false;
}
