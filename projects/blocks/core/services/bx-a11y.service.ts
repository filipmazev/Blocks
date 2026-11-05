import type { Signal, WritableSignal } from '@angular/core';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, DestroyRef, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BxA11yService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly osPrefersReducedMotion: WritableSignal<boolean> = signal(false);

  private readonly manualOverride: WritableSignal<boolean | null> = signal<boolean | null>(null);

  /** Effective reduced-motion preference, combining the manual override with live operating-system changes. */
  public readonly isReducedMotion: Signal<boolean> = computed(() => {
    const manual = this.manualOverride();

    if (manual !== null) return manual;

    return this.osPrefersReducedMotion();
  });

  constructor() {
    this.initMediaMatcher();
    this.syncWithDOM();
  }

  /**
   * Override decorative motion preferences, or restore live operating-system preference tracking.
   *
   * @param reduce - True requests reduced motion, false permits normal motion, and null clears the manual override.
   */
  public setReducedMotion(reduce: boolean | null): void {
    this.manualOverride.set(reduce);
  }

  //#region Helpers

  private initMediaMatcher(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    this.osPrefersReducedMotion.set(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => this.osPrefersReducedMotion.set(e.matches);

    mediaQuery.addEventListener('change', listener);
    inject(DestroyRef).onDestroy(() => mediaQuery.removeEventListener('change', listener));
  }

  private syncWithDOM(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    effect(() => {
      const isReduced = this.isReducedMotion();
      const root = this.document.documentElement;

      if (isReduced) {
        root.classList.add('bx-reduce-motion-forced');
        root.style.setProperty('--bx-reduced-motion', '1');
      } else {
        root.classList.remove('bx-reduce-motion-forced');
        root.style.setProperty('--bx-reduced-motion', '0');
      }
    });
  }

  //#endregion
}
