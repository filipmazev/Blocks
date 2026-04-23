import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class BxA11yService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly osPrefersReducedMotion = signal(false);
  private readonly manualOverride = signal<boolean | null>(null);

  public readonly isReducedMotion = computed(() => {
    const manual = this.manualOverride();
    if (manual !== null) return manual;
    return this.osPrefersReducedMotion();
  });

  constructor() {
    this.initMediaMatcher();
    this.syncWithDOM();
  }

  public setReducedMotion(reduce: boolean | null): void {
    this.manualOverride.set(reduce);
  }

  //#region Helpers

  private initMediaMatcher(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.osPrefersReducedMotion.set(mediaQuery.matches);

    mediaQuery.addEventListener('change', (e) => {
      this.osPrefersReducedMotion.set(e.matches);
    });
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