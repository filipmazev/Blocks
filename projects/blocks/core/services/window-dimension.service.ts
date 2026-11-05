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

  /** Angular platform identifier used to guard browser-only viewport observation. */
  public readonly platformId = inject(PLATFORM_ID);

  private readonly _dimensions: WritableSignal<IWindowDimensions> = signal<IWindowDimensions>(this.getCurrentDimensions());

  private readonly _currentBreakpoint: Signal<BreakpointKey | undefined> = computed(() => {
    if (!this.isBrowser) return undefined;

    const width = this._width();

    const sortedEntries = (Object.entries(BREAKPOINTS) as [BreakpointKey, number][]).sort((a, b) => b[1] - a[1]);

    return sortedEntries.find(([, minWidth]) => width >= minWidth)?.[0] ?? 'xs';
  });
  private readonly _width: Signal<number> = computed(() => this.dimensions().width);

  /** Current viewport width and height in CSS pixels; server rendering uses zero dimensions. */
  public readonly dimensions: Signal<IWindowDimensions> = this._dimensions.asReadonly();

  /** Whether the service is running on a browser platform and can observe viewport changes. */
  public readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  /** Whether viewport width is below the sm breakpoint. */
  public readonly isXsMobile: Signal<boolean> = this.below('sm');
  /** Whether viewport width is at least sm and below md. */
  public readonly isSmMobile: Signal<boolean> = this.between('sm', 'md');
  /** Whether viewport width is below the md breakpoint. */
  public readonly isMobile: Signal<boolean> = this.below('md');
  /** Whether viewport width is at least md and below lg. */
  public readonly isTablet: Signal<boolean> = this.between('md', 'lg');
  /** Whether viewport width is at least lg and below xl. */
  public readonly isSmallLaptop: Signal<boolean> = this.between('lg', 'xl');
  /** Whether viewport width is at least xl and below 2xl. */
  public readonly isDesktop: Signal<boolean> = this.between('xl', '2xl');
  /** Whether viewport width is at least 2xl and below 3xl. */
  public readonly isLargeDesktop: Signal<boolean> = this.between('2xl', '3xl');
  /** Whether viewport width is at least the 3xl breakpoint. */
  public readonly isUltraWide: Signal<boolean> = this.atLeast('3xl');
  /** Whether viewport width is below the lg breakpoint. */
  public readonly isTabletAndBelow: Signal<boolean> = this.below('lg');
  /** Whether viewport width is below the xl breakpoint. */
  public readonly isSmallLaptopAndBelow: Signal<boolean> = this.below('xl');
  /** Whether viewport width is below the 2xl breakpoint. */
  public readonly isDesktopAndBelow: Signal<boolean> = this.below('2xl');
  /** Whether viewport width is below the 3xl breakpoint. */
  public readonly isLargeDesktopAndBelow: Signal<boolean> = this.below('3xl');
  /** Shared breakpoint names and minimum viewport widths in CSS pixels, matching the Sass responsive helpers. */
  public readonly breakpoints: typeof BREAKPOINTS = BREAKPOINTS;
  /** Largest breakpoint whose minimum width matches the viewport; undefined during server rendering. */
  public readonly currentBreakpoint: Signal<BreakpointKey | undefined> = this._currentBreakpoint;

  /** Minimum CSS-pixel width of currentBreakpoint, or undefined when no browser breakpoint is available. */
  public readonly currentBreakpointValue: Signal<BreakpointValue | undefined> = computed(() => {
    const breakpoint = this.currentBreakpoint();

    return breakpoint === undefined ? undefined : BREAKPOINTS[breakpoint];
  });

  constructor() {
    this.initResizeListener();
  }

  /**
   * Return whether viewport width is at or above the named breakpoint's minimum.
   *
   * @param breakpoint - Shared breakpoint whose minimum CSS-pixel width is the inclusive lower bound.
   */
  public isAtLeast(breakpoint: BreakpointKey): boolean {
    return this._width() >= BREAKPOINTS[breakpoint];
  }

  /**
   * Return whether viewport width is strictly below the named breakpoint's minimum.
   *
   * @param breakpoint - Shared breakpoint whose minimum CSS-pixel width is the exclusive upper bound.
   */
  public isBelow(breakpoint: BreakpointKey): boolean {
    return this._width() < BREAKPOINTS[breakpoint];
  }

  /**
   * Return whether viewport width is within an inclusive minimum and exclusive maximum breakpoint range.
   *
   * @param min - Breakpoint providing the inclusive minimum viewport width.
   * @param max - Breakpoint providing the exclusive maximum viewport width.
   */
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
   * @typeParam T - Type of configured responsive values and the fallback value.
   * @returns The resolved value for the current viewport width.
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
