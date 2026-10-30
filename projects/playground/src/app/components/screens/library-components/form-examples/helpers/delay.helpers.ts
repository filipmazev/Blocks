/** Abortable latency used by mock requests without requiring a backend. */
export function delay(milliseconds: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const cancel = () => {
      clearTimeout(timer);
      reject(new DOMException('Request cancelled', 'AbortError'));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', cancel);
      resolve();
    }, milliseconds);

    if (signal?.aborted) cancel();
    else signal?.addEventListener('abort', cancel, { once: true });
  });
}
