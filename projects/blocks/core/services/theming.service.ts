import { Injectable, OnDestroy, inject, signal, PLATFORM_ID, computed, DOCUMENT, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceTheme } from '../types/core.types';
import { toObservable } from '@angular/core/rxjs-interop';
import { configureAppearance } from '@filip.mazev/blocks/effects/runtime';
import { BxAppearanceConfig, DEFAULT_APPEARANCE_CONFIG, THEME_PALETTES, BxThemeId } from '../types/appearance.types';
import { BxA11yService } from './bx-a11y.service';

@Injectable({
  providedIn: 'root'
})
export class ThemingService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly a11y = inject(BxA11yService);
  private readonly _appearance = signal<BxAppearanceConfig>({ ...DEFAULT_APPEARANCE_CONFIG });
  public readonly appearance = this._appearance.asReadonly();
  public readonly palettes = THEME_PALETTES;
  private readonly _palette = signal<BxThemeId>('white');
  public readonly palette = this._palette.asReadonly();
  public readonly paletteLabel = computed(() => this.palettes.find((item) => item.id === this.palette())?.label ?? this.palettes[0].label);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly _systemTheme = signal<DeviceTheme>('light');
  private readonly _applicationTheme = signal<DeviceTheme | null>(null);
  public readonly systemTheme = this._systemTheme.asReadonly();
  public readonly applicationTheme = this._applicationTheme.asReadonly();
  public readonly activeTheme = computed(() => this.applicationTheme() ?? this.systemTheme());
  private readonly systemTheme$ = toObservable(this._systemTheme);
  private readonly applicationTheme$ = toObservable(this._applicationTheme);
  private appearanceController?: ReturnType<typeof configureAppearance>;

  private mediaQueryList?: MediaQueryList;
  private mediaQueryListener?: (event: MediaQueryListEvent) => void;

  constructor() {
    effect(() => {
      const reducedMotion = this.a11y.isReducedMotion();
      this.appearanceController?.update({ reducedMotion });
    });
    if (this.isBrowser) {
      this._systemTheme.set(this.detectInitialSystemTheme());

      const storedTheme = this.readStored('theme') as DeviceTheme | null;
      this.restoreAppearance();
      const palette = this.readStored('theme-palette');
      this.setPalette(this.palettes.some((item) => item.id === palette) ? (palette as BxThemeId) : 'white');
      this.appearanceController = configureAppearance(this.document.documentElement, { ...this.appearance(), reducedMotion: this.a11y.isReducedMotion() });
      if (storedTheme === 'dark' || storedTheme === 'light') {
        this._applicationTheme.set(storedTheme);
      }

      this.initSystemThemeListener();
    }
  }

  public ngOnDestroy(): void {
    this.appearanceController?.destroy();
    if (this.mediaQueryList && this.mediaQueryListener) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
    }
  }

  public setApplicationTheme(theme: DeviceTheme): void {
    this._applicationTheme.set(theme);
    if (this.isBrowser) {
      this.writeStored('theme', theme);
    }
  }

  public setPalette(palette: BxThemeId): void {
    if (!this.palettes.some((item) => item.id === palette)) return;
    this._palette.set(palette);
    for (const item of this.palettes) this.document.documentElement.classList.toggle(item.className, item.id === palette);
    if (this.isBrowser) this.writeStored('theme-palette', palette);
  }

  public setAppearance(settings: Partial<BxAppearanceConfig>): void {
    const current = this.appearance();
    const glassiness = settings.glassiness ?? current.glassiness;
    const next: BxAppearanceConfig = {
      glassiness: Number.isFinite(glassiness) ? Math.min(1, Math.max(0, glassiness)) : DEFAULT_APPEARANCE_CONFIG.glassiness,
      quality: settings.quality ?? current.quality,
      reducedTransparency: (settings.reducedTransparency ?? current.reducedTransparency) === true
    };
    if (!['auto', 'baseline', 'enhanced'].includes(next.quality)) next.quality = 'auto';

    this._appearance.set(next);
    this.appearanceController?.update(next);
    if (this.isBrowser) this.writeStored('blocks-appearance', JSON.stringify(next));
  }

  public resetAppearance(): void {
    this.setAppearance({ ...DEFAULT_APPEARANCE_CONFIG });
  }

  public getSystemTheme$() {
    return this.systemTheme$;
  }

  public getApplicationTheme$() {
    return this.applicationTheme$;
  }

  private restoreAppearance(): void {
    try {
      const stored = this.readStored('blocks-appearance');
      if (stored) {
        const saved = JSON.parse(stored) as Partial<BxAppearanceConfig> & { tint?: number; material?: string };
        if (!saved || typeof saved !== 'object') return;
        // Migrate old preferences once; only the new configuration is persisted.
        this.setAppearance({
          glassiness: saved.glassiness ?? saved.tint ?? DEFAULT_APPEARANCE_CONFIG.glassiness,
          quality: saved.quality ?? DEFAULT_APPEARANCE_CONFIG.quality,
          reducedTransparency: saved.reducedTransparency === true || saved.material === 'solid'
        });
      }
    } catch {
      /* A stale or malformed preference uses the defaults. */
    }
  }

  private readStored(key: string): string | null {
    try {
      return this.document.defaultView?.localStorage.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  private writeStored(key: string, value: string): void {
    try {
      this.document.defaultView?.localStorage.setItem(key, value);
    } catch {
      /* Private browsing and storage policies must not break rendering. */
    }
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
