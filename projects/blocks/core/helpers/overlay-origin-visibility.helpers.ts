/** Whether an overlay origin still intersects the viewport and every ancestor that clips its contents. */
export function isOverlayOriginVisible(origin: HTMLElement): boolean {
  const view = origin.ownerDocument.defaultView;
  if (!view || !origin.isConnected) return false;

  const bounds = origin.getBoundingClientRect();
  if (!bounds.width || !bounds.height || bounds.bottom <= 0 || bounds.top >= view.innerHeight || bounds.right <= 0 || bounds.left >= view.innerWidth)
    return false;

  for (let parent = origin.parentElement; parent; parent = parent.parentElement) {
    const style = view.getComputedStyle(parent);
    const clipsX = /auto|scroll|hidden|clip/.test(style.overflowX);
    const clipsY = /auto|scroll|hidden|clip/.test(style.overflowY);
    if (!clipsX && !clipsY) continue;

    const viewport = parent.getBoundingClientRect();
    const top = viewport.top + parent.clientTop;
    const left = viewport.left + parent.clientLeft;
    if (clipsY && (bounds.bottom <= top || bounds.top >= top + parent.clientHeight)) return false;
    if (clipsX && (bounds.right <= left || bounds.left >= left + parent.clientWidth)) return false;
  }
  return true;
}
