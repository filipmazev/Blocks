import { IMenuKeyboardOptions } from '../interfaces/imenu-keyboard-options.interface';

/** Move focus among visible, enabled items in one menu, including wrapped item components. */
export function navigateMenuKey(event: KeyboardEvent, menu: HTMLElement, options: IMenuKeyboardOptions = {}): boolean {
  const horizontal = options.orientation === 'horizontal';
  const forward = horizontal ? (options.rtl ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown';
  const backward = horizontal ? (options.rtl ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp';

  if (![forward, backward, 'Home', 'End'].includes(event.key)) return false;

  const items = Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(
    (item) => item.closest('[role="menu"], [role="menubar"]') === menu && !item.matches(':disabled, [aria-disabled="true"]') && item.getClientRects().length > 0
  );
  if (!items.length) return false;

  const current = items.indexOf(menu.ownerDocument.activeElement as HTMLElement);
  const index =
    event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? items.length - 1
        : event.key === forward
          ? current < 0
            ? 0
            : (current + 1) % items.length
          : current < 0
            ? items.length - 1
            : (current - 1 + items.length) % items.length;
  event.preventDefault();
  event.stopPropagation();
  if (options.roving ?? horizontal) items.forEach((item, itemIndex) => (item.tabIndex = itemIndex === index ? 0 : -1));

  items[index].focus();
  return true;
}
