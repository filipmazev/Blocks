import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, DestroyRef, effect, ElementRef, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import { mountSurface, SurfaceOptions } from '@filip.mazev/blocks/effects/runtime';

/** Internal component integration. An explicit bxSurface directive takes precedence. */
export function injectComponentSurface(options: () => SurfaceOptions = () => ({}), enabled: () => boolean = () => true): void {
  const element = inject<ElementRef<HTMLElement>>(ElementRef);
  const zone = inject(NgZone);
  const a11y = inject(BxA11yService);
  inject(ThemingService);
  let surface: ReturnType<typeof mountSurface> | undefined;
  let rendered = false;
  const browser = isPlatformBrowser(inject(PLATFORM_ID));
  const sync = () => {
    const current = { ...options(), reducedMotion: a11y.isReducedMotion() };
    const active = enabled();

    if (!browser || !rendered) return;

    zone.runOutsideAngular(() => {
      if (!active) {
        surface?.destroy();
        surface = undefined;
      } else if (surface) surface.update(current);
      else if (!element.nativeElement.hasAttribute('data-bx-surface')) surface = mountSurface(element.nativeElement, current);
    });
  };
  effect(sync);
  afterNextRender(() => {
    rendered = true;
    sync();
  });
  inject(DestroyRef).onDestroy(() => surface?.destroy());
}
