import type { InputSignal, InputSignalWithTransform } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, DestroyRef, Directive, effect, ElementRef, inject, input, NgZone, PLATFORM_ID } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { GlassinessMode, GlassQuality, mountSurface, SurfaceOptions } from '@filip.mazev/blocks/effects/runtime';

import { optionalBoolean, optionalNumber } from '@effects/directives/helpers/surface-input.helpers';

/** Adds a decorative material without replacing native controls or their content. */
@Directive({
  selector: '[bxSurface]',
  standalone: true,
  exportAs: 'bxSurface'
})
export class BxSurfaceDirective implements AfterViewInit {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);

  private readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  public readonly bxSurfaceInteractive: InputSignalWithTransform<boolean | undefined, unknown> = input<boolean | undefined, unknown>(undefined, {
    transform: optionalBoolean
  });
  public readonly bxSurfaceTranslucency: InputSignalWithTransform<number | undefined, unknown> = input<number | undefined, unknown>(undefined, {
    transform: optionalNumber
  });
  /** Opt this surface into SVG refraction; omitted surfaces retain the existing material. Global Off and accessibility settings still win. */
  public readonly bxSurfaceGlassiness: InputSignal<GlassinessMode | undefined> = input<GlassinessMode | undefined>();
  public readonly bxSurfaceQuality: InputSignal<GlassQuality | undefined> = input<GlassQuality | undefined>();
  public readonly bxSurfaceEmission: InputSignal<string | undefined> = input<string | undefined>();
  public readonly bxSurfaceFocusEmission: InputSignal<string | undefined> = input<string | undefined>();
  public readonly bxReducedTransparency: InputSignalWithTransform<boolean | undefined, unknown> = input<boolean | undefined, unknown>(undefined, {
    transform: optionalBoolean
  });

  private surface?: ReturnType<typeof mountSurface>;

  constructor() {
    effect(() => {
      const options = this.options();

      this.zone.runOutsideAngular(() => this.surface?.update(options));
    });

    inject(DestroyRef).onDestroy(() => {
      this.surface?.destroy();
      this.surface = undefined;
    });
  }

  public ngAfterViewInit(): void {
    if (this.isBrowser) {
      const options = this.options();

      this.surface = this.zone.runOutsideAngular(() => mountSurface(this.element.nativeElement, options));
    }
  }

  //#region Helpers

  private options(): SurfaceOptions {
    return {
      translucency: this.bxSurfaceTranslucency(),
      glassiness: this.bxSurfaceGlassiness(),
      quality: this.bxSurfaceQuality(),
      interactive: this.bxSurfaceInteractive(),
      reducedMotion: this.a11y.isReducedMotion(),
      reducedTransparency: this.bxReducedTransparency(),
      emission: this.bxSurfaceEmission(),
      focusEmission: this.bxSurfaceFocusEmission()
    };
  }

  //#endregion
}
