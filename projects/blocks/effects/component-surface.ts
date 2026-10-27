import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, DestroyRef, effect, ElementRef, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import { mountSurface, SurfaceOptions } from '@filip.mazev/blocks/effects/runtime';

/** Internal component integration. An explicit bxSurface directive takes precedence. */
export function injectComponentSurface(options: () => SurfaceOptions = () => ({})): void {
  const element = inject<ElementRef<HTMLElement>>(ElementRef);
  const zone = inject(NgZone);
  const a11y = inject(BxA11yService);
  inject(ThemingService);
  let surface: ReturnType<typeof mountSurface> | undefined;
  const browser = isPlatformBrowser(inject(PLATFORM_ID));
  effect(() => {
    const current = { ...options(), reducedMotion: a11y.isReducedMotion() };
    zone.runOutsideAngular(() => surface?.update(current));
  });
  afterNextRender(() => {
    if (browser && !element.nativeElement.hasAttribute('data-bx-surface')) {
      surface = zone.runOutsideAngular(() =>
        mountSurface(element.nativeElement, {
          ...options(),
          reducedMotion: a11y.isReducedMotion()
        })
      );
    }
  });
  inject(DestroyRef).onDestroy(() => surface?.destroy());
}
