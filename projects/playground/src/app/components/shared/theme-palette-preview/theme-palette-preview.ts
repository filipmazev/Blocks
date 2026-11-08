import type { Signal, WritableSignal } from '@angular/core';

import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  NgZone,
  signal,
  untracked,
  viewChild,
  viewChildren
} from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { MOTION_PRESETS, paintMotionStyles, Spring, subscribeFrame } from '@filip.mazev/blocks/effects/runtime';
import { Card } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-theme-palette-preview',
  imports: [Card, BxSurfaceDirective],
  host: { 'aria-hidden': 'true' },
  templateUrl: './theme-palette-preview.html',
  styleUrl: './theme-palette-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePalettePreview {
  private readonly bxA11yService = inject(BxA11yService);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  private readonly aperture: Spring = new Spring(0, MOTION_PRESETS.soft);

  private readonly mounted: WritableSignal<boolean> = signal(false);
  private readonly visible: WritableSignal<boolean> = signal(false);
  private readonly documentVisible: WritableSignal<boolean> = signal(false);

  private readonly ring: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('ring');

  private readonly panelElements: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<unknown, ElementRef<HTMLElement>>('surfacePanel', {
    read: ElementRef
  });

  protected readonly panels: readonly number[] = [0, 1, 2, 3, 4, 5];

  private elapsed: number = 0;
  private stopFrame: (() => void) | undefined;
  private finePointer: MediaQueryList | undefined;

  constructor() {
    afterNextRender(() => this.ngZone.runOutsideAngular(() => this.connect()));
    effect(() => {
      const reduced = this.bxA11yService.isReducedMotion();
      const mounted = this.mounted();
      const active = mounted && this.visible() && this.documentVisible() && !reduced;

      untracked(() => this.ngZone.runOutsideAngular(() => this.syncMotion(active, mounted && reduced)));
    });
    this.destroyRef.onDestroy(() => this.stopFrame?.());
  }

  protected setHovered(event: PointerEvent, hovered: boolean): void {
    if (event.pointerType === 'touch' || !this.finePointer?.matches || this.bxA11yService.isReducedMotion() || !this.stopFrame) return;

    this.aperture.target = hovered ? 1 : 0;
  }

  //#region Helpers

  private connect(): void {
    const document = this.nativeElement.ownerDocument;
    const updateVisibility = () => this.documentVisible.set(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => this.visible.set(entry.isIntersecting));

    this.finePointer = document.defaultView?.matchMedia('(hover: hover) and (pointer: fine)');
    updateVisibility();
    observer.observe(this.nativeElement);
    document.addEventListener('visibilitychange', updateVisibility);
    this.mounted.set(true);
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
    });
  }

  private syncMotion(active: boolean, reset: boolean): void {
    if (!active) {
      this.stopFrame?.();
      this.stopFrame = undefined;
      this.aperture.snap(0);

      if (reset) {
        this.elapsed = 0;
        this.paint(false);
      }

      return;
    }

    if (this.stopFrame) return;

    this.stopFrame = subscribeFrame((delta) => {
      this.elapsed += delta;
      this.aperture.step(delta);
      this.paint(true);

      return true;
    });
  }

  private paint(moving: boolean): void {
    const ring = this.ring()?.nativeElement;

    if (!ring) return;

    const closure = Math.max(0, Math.min(1, this.aperture.value));
    const turn = moving ? (this.elapsed * 2) % 360 : 0;

    paintMotionStyles(ring, { transform: `rotate(${turn.toFixed(3)}deg)` });
    this.panelElements().forEach(({ nativeElement }, index) => {
      const phase = (this.elapsed * Math.PI * 2) / (9 + index * 0.8) + (index * Math.PI) / 3;
      const bob = moving ? Math.sin(phase) : 0;
      const drift = moving ? Math.cos(phase) * 0.3 : 0;
      const inward = closure * 9 + bob * 0.65;
      const angle = -14 + closure * 4 + bob * 0.25;

      paintMotionStyles(nativeElement, { transform: `translate(${drift.toFixed(3)}%, ${inward.toFixed(3)}%) rotate(${angle.toFixed(3)}deg)` }, true);
    });
  }

  //#endregion
}
