import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, NgZone, PLATFORM_ID, signal } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { BREAKPOINTS } from '@core/constants/window-dimension.constants';
import { IWindowDimensions } from '@core/interfaces/iwindow-dimensions.interface';

@Injectable({
  providedIn: 'root'
})
export class WindowDimensionsService {
  public readonly ngZone = inject(NgZone);
  public readonly platformId = inject(PLATFORM_ID);

  public readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  public readonly _dimensions: WritableSignal<IWindowDimensions> = signal<IWindowDimensions>(this.getCurrentDimensions());

  public readonly dimensions: Signal<IWindowDimensions> = this._dimensions.asReadonly();

  public readonly isMobile: Signal<boolean> = computed(() => this.dimensions().width < BREAKPOINTS.md);
  public readonly isTablet: Signal<boolean> = computed(() => this.dimensions().width >= BREAKPOINTS.md && this.dimensions().width < BREAKPOINTS.lg);
  public readonly isDesktop: Signal<boolean> = computed(() => this.dimensions().width >= BREAKPOINTS.lg);

  public readonly breakpoints: typeof BREAKPOINTS = BREAKPOINTS;

  constructor() {
    this.initResizeListener();
  }

  //#region Helpers

  private getCurrentDimensions(): IWindowDimensions {
    if (!this.isBrowser) {
      return { width: 0, height: 0 };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private initResizeListener(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(
          debounceTime(150),
          map(() => this.getCurrentDimensions()),
          distinctUntilChanged((prev, curr) => prev.width === curr.width && prev.height === curr.height)
        )
        .subscribe((dims) => {
          this.ngZone.run(() => {
            this._dimensions.set(dims);
          });
        });
    });
  }

  //#endregion
}
