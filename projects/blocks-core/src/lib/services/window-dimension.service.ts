import { Injectable, inject, NgZone, PLATFORM_ID, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BREAKPOINTS } from '../constants/window-dimension-constants';
import { WindowDimensions } from '../interfaces/window-dimensions.interface';

@Injectable({
  providedIn: 'root',
})
export class WindowDimensionsService {
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _dimensions = signal<WindowDimensions>(this.getCurrentDimensions());

  public readonly dimensions = this._dimensions.asReadonly();

  public readonly isMobile = computed(() => this.dimensions().width < BREAKPOINTS.md);
  public readonly isTablet = computed(() => this.dimensions().width >= BREAKPOINTS.md && this.dimensions().width < BREAKPOINTS.lg);
  public readonly isDesktop = computed(() => this.dimensions().width >= BREAKPOINTS.lg);

  public readonly breakpoints = BREAKPOINTS;

  constructor() {
    this.initResizeListener();
  }

  private getCurrentDimensions(): WindowDimensions {
    if (!this.isBrowser) {
      return { width: 0, height: 0 };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  private initResizeListener(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(
          debounceTime(150),
          map(() => this.getCurrentDimensions()),
          distinctUntilChanged((prev, curr) => 
            prev.width === curr.width && prev.height === curr.height
          )
        )
        .subscribe((dims) => {
          this.ngZone.run(() => {
            this._dimensions.set(dims);
          });
        });
    });
  }
}