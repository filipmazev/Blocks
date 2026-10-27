export type FrameCallback = (deltaSeconds: number, timestamp: number) => boolean;

interface FrameEntry {
  callback: FrameCallback;
}
const entries = new Set<FrameEntry>();
let frame: number | undefined;
let previousTime: number | undefined;
let ticking = false;

function tick(timestamp: number): void {
  frame = undefined;
  ticking = true;
  const delta = previousTime === undefined ? 1 / 60 : Math.min(0.064, Math.max(0, (timestamp - previousTime) / 1000));
  previousTime = timestamp;
  for (const entry of Array.from(entries)) {
    if (!entries.has(entry)) continue;
    try {
      if (!entry.callback(delta, timestamp)) entries.delete(entry);
    } catch (error) {
      entries.delete(entry);
      // Keep unrelated surfaces running; report the failed callback separately.
      queueMicrotask(() => {
        throw error;
      });
    }
  }
  ticking = false;
  if (entries.size > 0) frame = requestAnimationFrame(tick);
  else previousTime = undefined;
}

/** All effects share one lazy clock. Returning false removes the callback. */
export function subscribeFrame(callback: FrameCallback): () => void {
  if (typeof requestAnimationFrame !== 'function') return () => {};
  const entry: FrameEntry = { callback };
  entries.add(entry);
  if (frame === undefined && !ticking) frame = requestAnimationFrame(tick);
  return () => {
    entries.delete(entry);
    if (entries.size === 0) {
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      previousTime = undefined;
    }
  };
}
