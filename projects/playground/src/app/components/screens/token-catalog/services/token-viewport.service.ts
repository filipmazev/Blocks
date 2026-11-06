import { DestroyRef, inject, Injectable } from '@angular/core';

import type { ITokenViewportObserver } from '@playground/components/screens/token-catalog/interfaces/itoken-viewport-observer.interface';

@Injectable()
export class TokenViewportService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly targets: Map<HTMLElement, ITokenViewportObserver> = new Map();

  private intersectionObserver: IntersectionObserver | undefined;
  private resizeObserver: ResizeObserver | undefined;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.intersectionObserver?.disconnect();
      this.resizeObserver?.disconnect();
      this.targets.clear();
    });
  }

  public observe(element: HTMLElement, callbacks: ITokenViewportObserver): () => void {
    this.targets.set(element, callbacks);

    if (typeof IntersectionObserver === 'undefined' || typeof ResizeObserver === 'undefined') {
      callbacks.intersect(true);

      return () => this.targets.delete(element);
    }

    this.intersectionObserver ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) this.targets.get(entry.target as HTMLElement)?.intersect(entry.isIntersecting);
      },
      { rootMargin: '600px 0px' }
    );
    this.resizeObserver ??= new ResizeObserver((entries) => {
      for (const entry of entries) this.targets.get(entry.target as HTMLElement)?.resize(entry.contentRect.width, entry.contentRect.height);
    });
    this.intersectionObserver.observe(element);
    this.resizeObserver.observe(element);

    return () => {
      this.intersectionObserver?.unobserve(element);
      this.resizeObserver?.unobserve(element);
      this.targets.delete(element);
    };
  }
}
