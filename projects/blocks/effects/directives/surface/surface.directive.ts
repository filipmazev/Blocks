import type { InputSignal, InputSignalWithTransform } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, DestroyRef, Directive, effect, ElementRef, inject, input, NgZone, PLATFORM_ID } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { GlassinessMode, GlassQuality, mountSurface, SurfaceOptions } from '@filip.mazev/blocks/effects/runtime';

import { optionalBoolean, optionalNumber } from '@effects/helpers/surface-input.helpers';

/** Adds a decorative material without replacing native controls or their content. */
@Directive({
  selector: '[bxSurface]',
  standalone: true,
  exportAs: 'bxSurface'
})
export class BxSurfaceDirective implements AfterViewInit {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly ngZone = inject(NgZone);

  private readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * Enable decorative pointer and keyboard pressure feedback for this surface; omission inherits runtime policy. Optional; omission leaves the value
   * undefined.
   */
  public readonly bxSurfaceInteractive: InputSignalWithTransform<boolean | undefined, unknown> = input<boolean | undefined, unknown>(undefined, {
    transform: optionalBoolean
  });
  /** Override surface translucency on the shared 0–1 scale; omission inherits application appearance. Optional; omission leaves the value undefined. */
  public readonly bxSurfaceTranslucency: InputSignalWithTransform<number | undefined, unknown> = input<number | undefined, unknown>(undefined, {
    transform: optionalNumber
  });
  /** Opt this surface into SVG refraction; omitted surfaces retain the existing material. Global Off and accessibility settings still win. */
  public readonly bxSurfaceGlassiness: InputSignal<GlassinessMode | undefined> = input<GlassinessMode | undefined>();
  /**
   * Override material detail for this surface; omission inherits application quality and accessibility limits. Optional; omission leaves the value
   * undefined.
   */
  public readonly bxSurfaceQuality: InputSignal<GlassQuality | undefined> = input<GlassQuality | undefined>();
  /** CSS color emitted toward nearby surfaces while this surface is active; omission uses runtime defaults. */
  public readonly bxSurfaceEmission: InputSignal<string | undefined> = input<string | undefined>();
  /** CSS color emitted while a contained control has focus; omission uses normal focus-emission policy. Optional; omission leaves the value undefined. */
  public readonly bxSurfaceFocusEmission: InputSignal<string | undefined> = input<string | undefined>();
  /**
   * Request opaque material for this surface; omission inherits application and system transparency preferences. Optional; omission leaves the value
   * undefined.
   */
  public readonly bxReducedTransparency: InputSignalWithTransform<boolean | undefined, unknown> = input<boolean | undefined, unknown>(undefined, {
    transform: optionalBoolean
  });

  private surface?: ReturnType<typeof mountSurface>;

  constructor() {
    effect(() => {
      const options = this.options();

      this.ngZone.runOutsideAngular(() => this.surface?.update(options));
    });

    inject(DestroyRef).onDestroy(() => {
      this.surface?.destroy();
      this.surface = undefined;
    });
  }

  /** Mount the decorative surface controller after its native host has rendered. */
  public ngAfterViewInit(): void {
    if (this.isBrowser) {
      const options = this.options();

      this.surface = this.ngZone.runOutsideAngular(() => mountSurface(this.elementRef.nativeElement, options));
    }
  }

  //#region Helpers

  private options(): SurfaceOptions {
    return {
      translucency: this.bxSurfaceTranslucency(),
      glassiness: this.bxSurfaceGlassiness(),
      quality: this.bxSurfaceQuality(),
      interactive: this.bxSurfaceInteractive(),
      reducedMotion: this.bxA11yService.isReducedMotion(),
      reducedTransparency: this.bxReducedTransparency(),
      emission: this.bxSurfaceEmission(),
      focusEmission: this.bxSurfaceFocusEmission()
    };
  }

  //#endregion
}
