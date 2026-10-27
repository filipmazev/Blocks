export interface SurfaceRect {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
}

export function roundedRectPath(rect: SurfaceRect): string {
  const { x, y, width: w, height: h } = rect;
  const r = Math.max(0, Math.min(rect.radius, w / 2, h / 2));
  return `M${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h - r}Q${x + w},${y + h} ${x + w - r},${y + h}H${x + r}Q${x},${y + h} ${x},${y + h - r}V${y + r}Q${x},${y} ${x + r},${y}Z`;
}

export function interpolateRect(a: SurfaceRect, b: SurfaceRect, amount: number): SurfaceRect {
  const t = Math.min(1.06, Math.max(0, amount));
  const travel = t > 1 ? t : 1 - Math.pow(1 - t, 3);
  const growth = t * t;
  const width = Math.max(1, a.width + (b.width - a.width) * growth);
  const height = Math.max(1, a.height + (b.height - a.height) * growth);
  const centerX = a.x + a.width / 2 + (b.x + b.width / 2 - a.x - a.width / 2) * travel;
  const centerY = a.y + a.height / 2 + (b.y + b.height / 2 - a.y - a.height / 2) * travel;
  return { x: centerX - width / 2, y: centerY - height / 2, width, height, radius: a.radius + (b.radius - a.radius) * t };
}

/** Two cubic side curves form a thinning neck between rounded surfaces. */
export function bridgePath(a: SurfaceRect, b: SurfaceRect, strength: number): string {
  if (strength <= 0.001) return '';
  const ax = a.x + a.width / 2,
    ay = a.y + a.height / 2;
  const bx = b.x + b.width / 2,
    by = b.y + b.height / 2;
  const dx = bx - ax,
    dy = by - ay;
  const horizontal = Math.abs(dx) > Math.abs(dy);
  const sign = Math.sign(horizontal ? dx : dy) || 1;
  const from = horizontal ? ax + (sign * a.width) / 2 : ay + (sign * a.height) / 2;
  const to = horizontal ? bx - (sign * b.width) / 2 : by - (sign * b.height) / 2;
  // The connector is useful after the two surface edges separate.
  if ((to - from) * sign < 1) return '';
  const startCross = horizontal ? ay : ax;
  const endCross = horizontal ? by : bx;
  const startWidth = Math.min(horizontal ? a.height : a.width, 70) * 0.3 * strength;
  const endWidth = Math.min(horizontal ? b.height : b.width, 110) * 0.24 * strength;
  const mid = from + (to - from) * 0.5;
  const point = (main: number, cross: number) => (horizontal ? `${main},${cross}` : `${cross},${main}`);
  return `M${point(from, startCross - startWidth)}C${point(mid, startCross - startWidth)} ${point(mid, endCross - endWidth)} ${point(to, endCross - endWidth)}L${point(to, endCross + endWidth)}C${point(mid, endCross + endWidth)} ${point(mid, startCross + startWidth)} ${point(from, startCross + startWidth)}Z`;
}
