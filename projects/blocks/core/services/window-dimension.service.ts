import { isPlatformBrowser } from '@angular/common';
import { computed, DestroyRef, inject, Injectable, PLATFORM_ID, Signal, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { animationFrameScheduler, fromEvent } from 'rxjs';
import { auditTime, distinctUntilChanged, map } from 'rxjs/operators';

import { BREAKPOINTS } from '@core/constants/window-dimension.constants';
import { IWindowDimensions } from '@core/interfaces/iwindow-dimensions.interface';
import { BreakpointKey, BreakpointValue } from '@core/types/core.types';

@Injectable({
  providedIn: 'root'
})
export class WindowDimensionsService {
  private readonly destroyRef = inject(DestroyRef);

  public readonly platformId = inject(PLATFORM_ID);

  private readonly _dimensions: WritableSignal<IWindowDimensions> = signal<IWindowDimensions>(this.getCurrentDimensions());

  private readonly _currentBreakpoint: Signal<BreakpointKey | undefined> = computed(() => {
    if (!this.isBrowser) return undefined;

    const width = this._width();

    const sortedEntries = (Object.entries(BREAKPOINTS) as [BreakpointKey, number][]).sort((a, b) => b[1] - a[1]);

    return sortedEntries.find(([, minWidth]) => width >= minWidth)?.[0] ?? 'xs';
  });
  private readonly _width: Signal<number> = computed(() => this.dimensions().width);

  public readonly dimensions: Signal<IWindowDimensions> = this._dimensions.asReadonly();

  public readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  public readonly isXsMobile: Signal<boolean> = this.below('sm');
  public readonly isSmMobile: Signal<boolean> = this.between('sm', 'md');
  public readonly isMobile: Signal<boolean> = this.below('md');
  public readonly isTablet: Signal<boolean> = this.between('md', 'lg');
  public readonly isSmallLaptop: Signal<boolean> = this.between('lg', 'xl');
  public readonly isDesktop: Signal<boolean> = this.between('xl', '2xl');
  public readonly isLargeDesktop: Signal<boolean> = this.between('2xl', '3xl');
  public readonly isUltraWide: Signal<boolean> = this.atLeast('3xl');
  public readonly isTabletAndBelow: Signal<boolean> = this.below('lg');
  public readonly isSmallLaptopAndBelow: Signal<boolean> = this.below('xl');
  public readonly isDesktopAndBelow: Signal<boolean> = this.below('2xl');
  public readonly isLargeDesktopAndBelow: Signal<boolean> = this.below('3xl');
  public readonly breakpoints: typeof BREAKPOINTS = BREAKPOINTS;
  public readonly currentBreakpoint: Signal<BreakpointKey | undefined> = this._currentBreakpoint;

  public readonly currentBreakpointValue: Signal<BreakpointValue | undefined> = computed(() => {
    const breakpoint = this.currentBreakpoint();

    return breakpoint === undefined ? undefined : BREAKPOINTS[breakpoint];
  });

  constructor() {
    this.initResizeListener();
  }

  public isAtLeast(breakpoint: BreakpointKey): boolean {
    return this._width() >= BREAKPOINTS[breakpoint];
  }

  public isBelow(breakpoint: BreakpointKey): boolean {
    return this._width() < BREAKPOINTS[breakpoint];
  }

  public isBetween(min: BreakpointKey, max: BreakpointKey): boolean {
    const width: number = this._width();

    return width >= BREAKPOINTS[min] && width < BREAKPOINTS[max];
  }

  /**
   * Resolves a responsive value based on the current viewport width.
   * Selects the value associated with the highest matching breakpoint,
   * falling back to the provided default when no breakpoint matches or during SSR.
   *
   * @param values - A map of breakpoint keys to their corresponding values.
   * @param fallback - The default value used when no breakpoint matches or during SSR.
   * @returns The resolved value for the current viewport width.
   *
   * @example
   * resolveResponsiveValue({ xs: 10, md: 30, '2xl': 100 }, 100);
   */
  public resolveResponsiveValue<T>(values: Partial<Record<BreakpointKey, T>>, fallback: T): T {
    if (!this.isBrowser) return fallback;

    const width: number = this._width();

    const matchingBreakpoints: BreakpointKey[] = (Object.keys(values) as BreakpointKey[])
      .filter((key) => width >= BREAKPOINTS[key])
      .sort((a, b) => BREAKPOINTS[b] - BREAKPOINTS[a]);

    const breakpoint: BreakpointKey | undefined = matchingBreakpoints[0];

    return breakpoint !== undefined ? (values[breakpoint] ?? fallback) : fallback;
  }

  //#region Helpers

  private getCurrentDimensions(): IWindowDimensions {
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private initResizeListener(): void {
    if (!this.isBrowser) return;

    fromEvent(window, 'resize')
      .pipe(
        auditTime(0, animationFrameScheduler),
        map(() => this.getCurrentDimensions()),
        distinctUntilChanged((prev, curr) => prev.width === curr.width && prev.height === curr.height),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((dims) => this._dimensions.set(dims));
  }

  private between(min: BreakpointKey, max: BreakpointKey): Signal<boolean> {
    return computed(() => this.isBetween(min, max));
  }

  private below(max: BreakpointKey): Signal<boolean> {
    return computed(() => this.isBelow(max));
  }

  private atLeast(min: BreakpointKey): Signal<boolean> {
    return computed(() => this.isAtLeast(min));
  }

  //#endregion
}
