import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, ElementRef, inject, NgZone, signal } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { Card } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-theme-material-preview',
  imports: [Card, BxSurfaceDirective, Icon],
  host: { 'aria-hidden': 'true', '[attr.data-floating]': 'floating()', '[attr.data-reduced-motion]': 'isReducedMotion()' },
  templateUrl: './theme-material-preview.html',
  styleUrl: './theme-material-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeMaterialPreview {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  protected readonly isReducedMotion = inject(BxA11yService).isReducedMotion;

  private readonly visible: WritableSignal<boolean> = signal(false);
  private readonly documentVisible: WritableSignal<boolean> = signal(false);

  protected readonly floating: Signal<boolean> = computed(() => this.visible() && this.documentVisible() && !this.isReducedMotion());

  constructor() {
    afterNextRender(() => this.ngZone.runOutsideAngular(() => this.observeVisibility()));
  }

  //#region Helpers

  private observeVisibility(): void {
    const document = this.nativeElement.ownerDocument;
    const updateVisibility = () => this.documentVisible.set(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => this.visible.set(entry.isIntersecting));

    updateVisibility();
    observer.observe(this.nativeElement);
    document.addEventListener('visibilitychange', updateVisibility);
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
    });
  }

  //#endregion
}
