import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, booleanAttribute, DestroyRef, Directive, effect, ElementRef, inject, input, NgZone, numberAttribute, PLATFORM_ID } from '@angular/core';
import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import { GlassMaterial, mountSurface, SurfaceOptions } from '@filip.mazev/blocks/effects/runtime';

/** Adds a decorative material without replacing native controls or their content. */
@Directive({
  selector: '[bxSurface]',
  standalone: true,
  exportAs: 'bxSurface'
})
export class BxSurfaceDirective implements AfterViewInit {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly theme = inject(ThemingService);
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  public readonly bxSurface = input<GlassMaterial | undefined, GlassMaterial | '' | undefined>(undefined, { transform: (value) => value || undefined });
  public readonly bxSurfaceInteractive = input<boolean | undefined, unknown>(undefined, { transform: optionalBoolean });
  public readonly bxSurfaceBlur = input<number | undefined, unknown>(undefined, { transform: optionalNumber });
  public readonly bxSurfaceTint = input<number | undefined, unknown>(undefined, { transform: optionalNumber });
  public readonly bxSurfaceEmission = input<string | undefined>();
  public readonly bxSurfaceFocusEmission = input<string | undefined>();
  public readonly bxReducedTransparency = input<boolean | undefined, unknown>(undefined, {
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

  private options(): SurfaceOptions {
    return {
      material: this.bxSurface(),
      interactive: this.bxSurfaceInteractive(),
      reducedMotion: this.a11y.isReducedMotion(),
      reducedTransparency: this.bxReducedTransparency(),
      blur: this.bxSurfaceBlur(),
      tint: this.bxSurfaceTint(),
      emission: this.bxSurfaceEmission(),
      focusEmission: this.bxSurfaceFocusEmission()
    };
  }
}

function optionalNumber(value: unknown): number | undefined {
  return value === undefined || value === null ? undefined : numberAttribute(value);
}

function optionalBoolean(value: unknown): boolean | undefined {
  return value === undefined || value === null ? undefined : booleanAttribute(value);
}
