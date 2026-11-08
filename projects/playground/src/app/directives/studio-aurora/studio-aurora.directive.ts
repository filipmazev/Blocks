import type { InputSignal } from '@angular/core';

import { afterRenderEffect, DestroyRef, Directive, ElementRef, inject, input, NgZone } from '@angular/core';

import type { IGlassLight, IGlassScene } from '@filip.mazev/blocks/effects/runtime';

import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import { getGlassLightRoot, mountGlassScene, paintMotionStyles, subscribeFrame } from '@filip.mazev/blocks/effects/runtime';

import { STUDIO_AURORA_COLORS } from '@playground/shared/constants/theme-studio-aurora.constants';

@Directive({ selector: '[appStudioAurora]' })
export class StudioAuroraDirective {
  private readonly elementRef = inject<ElementRef<HTMLButtonElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly themingService = inject(ThemingService);

  public readonly active: InputSignal<boolean> = input(false, { alias: 'appStudioAurora' });

  private scene: IGlassScene | undefined;
  private stopFrame: (() => void) | undefined;
  private colors: readonly (readonly number[])[] = [];
  private visible: boolean = true;
  private reduced: boolean = false;
  private forcedColors: boolean = false;
  private highContrast: boolean = false;
  private rotation: number = 0;
  private enabled: boolean = false;
  private glow: number = 0;

  constructor() {
    afterRenderEffect(() => {
      this.themingService.palette();
      this.themingService.activeTheme();
      this.reduced = this.bxA11yService.isReducedMotion();
      this.highContrast = this.themingService.highContrast();
      this.enabled = this.active();

      this.ngZone.runOutsideAngular(() => {
        this.readColors();
        this.sync();
      });
    });

    const source = this.elementRef.nativeElement;
    const view = source.ownerDocument.defaultView;

    if (!view) return;

    const media = view.matchMedia('(forced-colors: active)');
    const preference = (): void => {
      this.forcedColors = media.matches;
      this.sync();
    };

    const visibility = (): void => this.sync();
    const observer = this.ngZone.runOutsideAngular(
      () =>
        new view.IntersectionObserver((entries) => {
          this.visible = entries[0]?.isIntersecting ?? false;
          this.sync();
        })
    );

    this.forcedColors = media.matches;
    this.ngZone.runOutsideAngular(() => {
      observer.observe(source);
      media.addEventListener('change', preference);
      source.ownerDocument.addEventListener('visibilitychange', visibility);
    });
    this.destroyRef.onDestroy(() => {
      this.stopFrame?.();
      this.scene?.destroy();
      observer.disconnect();
      media.removeEventListener('change', preference);
      source.ownerDocument.removeEventListener('visibilitychange', visibility);

      for (const ring of source.querySelectorAll<HTMLElement>('.studio-aurora, .studio-aurora-halo')) {
        ring.style.removeProperty('--studio-aurora-turn');
        ring.style.removeProperty('--studio-aurora-glow');
      }
    });
  }

  //#region Helpers

  private readColors(): void {
    const source = this.elementRef.nativeElement;
    const style = source.ownerDocument.defaultView?.getComputedStyle(source);
    const context = source.ownerDocument.createElement('canvas').getContext('2d', { willReadFrequently: true });

    if (!context || !style) return;

    this.colors = STUDIO_AURORA_COLORS.map((token) => {
      context.clearRect(0, 0, 1, 1);
      context.fillStyle = style.getPropertyValue(token).trim();
      context.fillRect(0, 0, 1, 1);

      return [...context.getImageData(0, 0, 1, 1).data].slice(0, 3);
    });
  }

  private sync(): void {
    this.stopFrame?.();
    this.stopFrame = undefined;

    const source = this.elementRef.nativeElement;
    const rings = [...source.querySelectorAll<HTMLElement>('.studio-aurora, .studio-aurora-halo')];

    if (this.destroyRef.destroyed || !this.visible || source.ownerDocument.hidden || this.forcedColors || this.highContrast || !this.colors.length) {
      this.scene?.destroy();
      this.scene = undefined;
      this.glow = 0;

      for (const ring of rings) paintMotionStyles(ring, { '--studio-aurora-glow': '0' });

      return;
    }

    const origins = [...source.querySelectorAll<HTMLElement>('.studio-light-origin')];
    const target = this.enabled ? 1 : 0;

    if (!rings.length || origins.length !== 4) return;

    if (this.reduced) {
      this.rotation = 0;
      this.glow = target;
    }

    const paint = (): void => {
      for (const ring of rings) {
        paintMotionStyles(ring, { '--studio-aurora-turn': `${this.rotation}turn`, '--studio-aurora-glow': `${this.glow}` });
      }

      if (this.glow === 0) {
        this.scene?.destroy();
        this.scene = undefined;

        return;
      }

      const lights: IGlassLight[] = origins.map((element, index) => ({
        element,
        excludeElement: source,
        color: this.colorAt(
          Math.atan2((index === 0 || index === 3 ? -0.35 : 0.35) * source.clientWidth, (index < 2 ? 0.5 : -0.5) * source.clientHeight) / (2 * Math.PI) -
            this.rotation
        ),
        z: 24,
        radius: 120,
        intensity: 0.28 * this.glow,
        excludeSource: true
      }));

      if (this.scene) this.scene.update({ lights, reuseGeometry: true });
      else this.scene = mountGlassScene(getGlassLightRoot(source), { lights, reuseGeometry: true });
    };

    paint();

    if (this.reduced || (!this.enabled && this.glow === 0)) return;

    let elapsed = 0;

    this.stopFrame = subscribeFrame((delta) => {
      // Approach the new intensity from its current value so rapid preview toggles never restart or flash the light.
      this.glow = target + (this.glow - target) * Math.exp(-delta / (this.enabled ? 0.28 : 0.18));

      if (Math.abs(this.glow - target) < 0.002) this.glow = target;

      this.rotation = (this.rotation + delta / 8) % 1;

      for (const ring of rings) {
        paintMotionStyles(ring, { '--studio-aurora-turn': `${this.rotation}turn`, '--studio-aurora-glow': `${this.glow}` });
      }

      elapsed += delta;

      if (elapsed >= 1 / 20 || this.glow === 0) {
        elapsed = 0;
        paint();
      }

      return this.enabled || this.glow > 0;
    });
  }

  private colorAt(position: number): string {
    const index = (((position % 1) + 1) % 1) * this.colors.length;
    const start = Math.floor(index);
    const amount = index - start;
    const first = this.colors[start];
    const second = this.colors[(start + 1) % this.colors.length];

    return `rgb(${first.map((value, channel) => Math.round(value + (second[channel] - value) * amount)).join(' ')})`;
  }

  //#endregion
}
