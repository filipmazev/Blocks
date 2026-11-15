import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, effect, ElementRef, inject, NgZone } from '@angular/core';

import type { ISpringMotion } from '@filip.mazev/blocks/effects/runtime';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { createSpringMotion, MOTION_PRESETS } from '@filip.mazev/blocks/effects/runtime';

/** Renders the supplied vector cover with interruptible motion on its decorative panels. */
@Component({
  selector: 'app-figma-library-preview',
  templateUrl: './figma-library-preview.svg',
  styleUrl: './figma-library-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' }
})
export class FigmaLibraryPreview {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly bxA11yService = inject(BxA11yService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  private readonly poses: Animation[] = [];

  private motion: ISpringMotion | undefined;
  private hovered: boolean = false;
  private focused: boolean = false;
  private visible: boolean = false;

  constructor() {
    afterNextRender(() => this.ngZone.runOutsideAngular(() => this.connect()));
    effect(() => {
      this.bxA11yService.isReducedMotion();
      this.ngZone.runOutsideAngular(() => this.sync());
    });
    this.destroyRef.onDestroy(() => {
      this.motion?.destroy();
      this.poses.forEach((pose) => pose.cancel());
    });
  }

  //#region Helpers

  private connect(): void {
    const document = this.nativeElement.ownerDocument;
    const link = this.nativeElement.closest('a') ?? this.nativeElement;
    const ring = this.nativeElement.querySelector<SVGGElement>('.cover-panel-ring');

    if (!ring) return;

    const events = new AbortController();
    const elements = [ring, ...ring.querySelectorAll<SVGGElement>('.cover-panel')];

    elements.forEach((element) => {
      const pose = element.animate([{ transform: 'none' }], { duration: 1, fill: 'both' });

      pose.pause();
      pose.currentTime = 0;
      this.poses.push(pose);
    });
    this.motion = createSpringMotion(
      [0],
      ([amount]) => {
        this.poses.forEach((pose, index) => {
          const transform = index === 0 ? `rotate(${amount * 18}deg) scale(${1 - amount * 0.12})` : `rotate(${-amount * 8}deg) scale(${1 - amount * 0.05})`;

          (pose.effect as KeyframeEffect).setKeyframes([{ transform }, { transform }]);
        });
      },
      MOTION_PRESETS.soft
    );
    link.addEventListener(
      'pointerenter',
      (event) => {
        if ((event as PointerEvent).pointerType === 'touch') return;

        this.hovered = true;
        this.sync();
      },
      { signal: events.signal }
    );
    link.addEventListener(
      'pointerleave',
      () => {
        this.hovered = false;
        this.sync();
      },
      { signal: events.signal }
    );
    link.addEventListener(
      'focus',
      () => {
        this.focused = true;
        this.sync();
      },
      { signal: events.signal }
    );
    link.addEventListener(
      'blur',
      () => {
        this.focused = false;
        this.sync();
      },
      { signal: events.signal }
    );
    document.addEventListener('visibilitychange', () => this.sync(), { signal: events.signal });

    const observer = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.sync();
    });

    observer.observe(this.nativeElement);
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      events.abort();
    });
  }

  private sync(): void {
    const reduced = this.bxA11yService.isReducedMotion();
    const hidden = !this.visible || this.nativeElement.ownerDocument.hidden;

    this.motion?.retarget([!reduced && !hidden && (this.hovered || this.focused) ? 1 : 0], reduced || hidden);
  }

  //#endregion
}
