import { Injectable, OnDestroy, inject, signal, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceTheme } from '@core/types/core.types';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ThemingService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private _systemTheme = signal<DeviceTheme>('light');
  private _applicationTheme = signal<DeviceTheme | null>(null);

  public readonly systemTheme = this._systemTheme.asReadonly();
  public readonly applicationTheme = this._applicationTheme.asReadonly();
  public readonly activeTheme = computed(() => this.applicationTheme() ?? this.systemTheme());

  private readonly systemTheme$ = toObservable(this._systemTheme);
  private readonly applicationTheme$ = toObservable(this._applicationTheme);

  private mediaQueryList?: MediaQueryList;
  private mediaQueryListener?: (event: MediaQueryListEvent) => void;

  constructor() {
    if (this.isBrowser) {
      this._systemTheme.set(this.detectInitialSystemTheme());

      const storedTheme = localStorage.getItem('theme') as DeviceTheme | null;
      if (storedTheme === 'dark' || storedTheme === 'light') {
        this._applicationTheme.set(storedTheme);
      }

      this.initSystemThemeListener();
    }
  }

  public ngOnDestroy(): void {
    if (this.mediaQueryList && this.mediaQueryListener) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
    }
  }

  public setApplicationTheme(theme: DeviceTheme): void {
    this._applicationTheme.set(theme);
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
    }
  }

  public getSystemTheme$() {
    return this.systemTheme$;
  }

  public getApplicationTheme$() {
    return this.applicationTheme$;
  }

  private detectInitialSystemTheme(): DeviceTheme {
    if (!this.isBrowser) return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private initSystemThemeListener(): void {
    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryListener = (event: MediaQueryListEvent) => {
      this._systemTheme.set(event.matches ? 'dark' : 'light');
    };
    this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
  }
}