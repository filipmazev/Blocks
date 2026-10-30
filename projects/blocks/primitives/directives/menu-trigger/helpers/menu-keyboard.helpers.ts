/** Move focus among visible, enabled items in one menu, including wrapped item components. */
export function navigateMenuKey(event: KeyboardEvent, menu: HTMLElement): boolean {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return false;

  const items = Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(
    (item) => item.closest('[role="menu"]') === menu && !item.matches(':disabled, [aria-disabled="true"]') && item.getClientRects().length > 0
  );
  if (!items.length) return false;

  const current = items.indexOf(menu.ownerDocument.activeElement as HTMLElement);
  const index =
    event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? items.length - 1
        : event.key === 'ArrowDown'
          ? (current + 1) % items.length
          : (current - 1 + items.length) % items.length;
  event.preventDefault();
  event.stopPropagation();
  items[index].focus();
  return true;
}
