import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, DestroyRef, effect, ElementRef, inject, NgZone, PLATFORM_ID } from '@angular/core';

import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import { mountSurface, SurfaceOptions } from '@filip.mazev/blocks/effects/runtime';

/**
 * Internal component integration. An explicit bxSurface directive takes precedence.
 *
 * @param options - Reactive factory returning surface presentation and interaction overrides. Defaults to `() => ({})`.
 * @param enabled - Reactive predicate controlling whether the component owns an active surface controller. Defaults to `() => true`.
 */
export function injectComponentSurface(options: () => SurfaceOptions = () => ({}), enabled: () => boolean = () => true): void {
  const elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  const ngZone = inject(NgZone);
  const bxA11yService = inject(BxA11yService);

  inject(ThemingService);

  let surface: ReturnType<typeof mountSurface> | undefined;
  let rendered = false;

  const browser = isPlatformBrowser(inject(PLATFORM_ID));
  const sync = () => {
    const current = { ...options(), reducedMotion: bxA11yService.isReducedMotion() };
    const active = enabled();

    if (!browser || !rendered) return;

    ngZone.runOutsideAngular(() => {
      if (!active) {
        surface?.destroy();
        surface = undefined;
      } else if (surface) surface.update(current);
      else if (!elementRef.nativeElement.hasAttribute('data-bx-surface')) surface = mountSurface(elementRef.nativeElement, current);
    });
  };

  effect(sync);
  afterNextRender(() => {
    rendered = true;
    sync();
  });
  inject(DestroyRef).onDestroy(() => surface?.destroy());
}
