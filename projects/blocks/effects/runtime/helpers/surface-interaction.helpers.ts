import { FIELD_SURFACE_SELECTOR, NONINTERACTIVE_SURFACE_SELECTOR } from '@effects/runtime/constants/surface-interaction.constants';

/**
 * Resolves state for a surface, its owning label, or a native control within a projected field.
 *
 * @param element - Surface host checked for disabled, readonly, inert, or noninteractive state.
 */
export function isSurfaceInteractionBlocked(element: HTMLElement): boolean {
  if (element.closest(NONINTERACTIVE_SURFACE_SELECTOR) || element.closest('label')?.control?.matches(NONINTERACTIVE_SURFACE_SELECTOR)) return true;

  const control = element.querySelector('input:not([type="hidden"]), select, textarea');

  return !!control && control.closest('[data-bx-surface]') === element && control.matches(NONINTERACTIVE_SURFACE_SELECTOR);
}

/**
 * Fields illuminate for pointer focus as well as keyboard focus, including projected native controls.
 *
 * @param element - Surface host inspected for editable field semantics.
 */
export function isFieldSurface(element: HTMLElement): boolean {
  if (element.matches(FIELD_SURFACE_SELECTOR)) return true;

  const control = element.querySelector(FIELD_SURFACE_SELECTOR);

  return !!control && control.closest('[data-bx-surface]') === element;
}

/**
 * Only activation keys on action controls should deform a surface; typing in a field never does.
 *
 * @param target - Focused event target whose native activation semantics must be preserved.
 * @param key - KeyboardEvent.key value to classify as an activation key.
 */
export function isSurfaceActivationKey(target: Element, key: string): boolean {
  if (target.closest('input, select, textarea, [contenteditable]:not([contenteditable="false"])')) return false;

  if (key === 'Enter') return !!target.closest('button, bx-button, [bx-button], a[href], summary, [role="button"], [role="menuitem"], [role="tab"]');

  if (key === ' ') {
    if (target.closest('a[href]:not([role="button"])')) return false;

    return !!target.closest('button, bx-button, [bx-button], summary, [role="button"], [role="menuitem"], [role="tab"]');
  }

  return false;
}
