import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { computed, DOCUMENT, effect, inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

import type { Observable } from 'rxjs';

import type { IBxAppearanceConfig } from '@core/interfaces/ibx-appearance-config.interface';
import type { IStoredAppearancePreferences } from '@core/interfaces/istored-appearance-preferences.interface';
import type { IThemingServicePalettesState } from '@core/interfaces/itheming-service-palettes-state.interface';
import type { GlassinessMode, GlassQuality } from '@filip.mazev/blocks/effects/runtime';

import { configureAppearance } from '@filip.mazev/blocks/effects/runtime';

import { DEFAULT_APPEARANCE_CONFIG } from '@core/constants/appearance.constants';
import { THEME_PALETTES } from '@core/constants/theme-palettes.constants';
import { resolveThemeId } from '@core/helpers/theme-functions.helpers';
import { BxAppearanceConfig, BxThemeId } from '@core/types/appearance.types';
import { DeviceTheme } from '@core/types/core.types';

import { BxA11yService } from './bx-a11y.service';

@Injectable({
  providedIn: 'root'
})
export class ThemingService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly _appearance: WritableSignal<IBxAppearanceConfig> = signal<BxAppearanceConfig>({ ...DEFAULT_APPEARANCE_CONFIG });

  private readonly _preferredGlassiness: WritableSignal<GlassinessMode> = signal<GlassinessMode>('auto');
  private readonly _palette: WritableSignal<BxThemeId> = signal<BxThemeId>('carbon-cobalt');

  private readonly _highContrast: WritableSignal<boolean> = signal(false);

  private readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  private readonly _systemTheme: WritableSignal<DeviceTheme> = signal<DeviceTheme>('light');

  private readonly _applicationTheme: WritableSignal<DeviceTheme | null> = signal<DeviceTheme | null>(null);

  private readonly systemTheme$: Observable<DeviceTheme> = toObservable(this._systemTheme);
  private readonly applicationTheme$: Observable<DeviceTheme | null> = toObservable(this._applicationTheme);

  /** Current resolved application appearance preferences; updates propagate to mounted surfaces and overlays. */
  public readonly appearance: Signal<IBxAppearanceConfig> = this._appearance.asReadonly();
  /** Requested glassiness policy, defaulting to 'auto'. Baseline temporarily forces appearance().glassiness off while preserving this choice. */
  public readonly preferredGlassiness: Signal<GlassinessMode> = this._preferredGlassiness.asReadonly();
  /** Supported palette definitions with stable IDs, labels, and associated theme classes. */
  public readonly palettes: readonly IThemingServicePalettesState[] = THEME_PALETTES;
  /** Current palette ID, restored from saved preferences when available. */
  public readonly palette: Signal<BxThemeId> = this._palette.asReadonly();

  /** Display label of the currently selected palette. */
  public readonly paletteLabel: Signal<string> = computed(() => this.palettes.find((item) => item.id === this.palette())?.label ?? this.palettes[0].label);

  /** Whether the application explicitly requests the shared high-contrast presentation. */
  public readonly highContrast: Signal<boolean> = this._highContrast.asReadonly();
  /** Current system light/dark color-scheme preference. */
  public readonly systemTheme: Signal<DeviceTheme> = this._systemTheme.asReadonly();
  /** Explicit light/dark preference, or null to follow the system theme. */
  public readonly applicationTheme: Signal<DeviceTheme | null> = this._applicationTheme.asReadonly();

  /** Effective light/dark mode after combining the explicit preference with the system theme. */
  public readonly activeTheme: Signal<DeviceTheme> = computed(() => this.applicationTheme() ?? this.systemTheme());

  private appearanceController?: ReturnType<typeof configureAppearance>;
  private mediaQueryList?: MediaQueryList;
  private mediaQueryListener?: (event: MediaQueryListEvent) => void;

  constructor() {
    effect(() => {
      const reducedMotion = this.bxA11yService.isReducedMotion();

      this.appearanceController?.update({ reducedMotion });
    });

    if (this.isBrowser) {
      this._systemTheme.set(this.detectInitialSystemTheme());

      const storedTheme = this.readStored('theme') as DeviceTheme | null;

      this.restoreAppearance();

      const palette = this.readStored('theme-palette');
      const storedHighContrast = this.readStored('theme-high-contrast');

      this.setPalette(resolveThemeId(palette) ?? 'carbon-cobalt');
      this.setHighContrast(storedHighContrast === null ? palette === 'high-contrast' : storedHighContrast === 'true');
      this.appearanceController = configureAppearance(this.document.documentElement, {
        ...this.appearance(),
        reducedMotion: this.bxA11yService.isReducedMotion()
      });

      if (storedTheme === 'dark' || storedTheme === 'light') {
        this._applicationTheme.set(storedTheme);
      }

      this.initSystemThemeListener();
    }
  }

  /** Destroy the appearance controller and remove the owned system color-scheme listener. */
  public ngOnDestroy(): void {
    this.appearanceController?.destroy();

    if (this.mediaQueryList && this.mediaQueryListener) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
    }
  }

  /**
   * Set an explicit appearance, or null to follow live system color-scheme changes.
   *
   * @param theme - Explicit light/dark mode, or null to follow live system color-scheme changes.
   */
  public setApplicationTheme(theme: DeviceTheme | null): void {
    this._applicationTheme.set(theme);

    if (this.isBrowser) {
      this.writeStored('theme', theme ?? 'auto');
    }
  }

  /**
   * Apply a supported palette to the document and persist its ID; unsupported IDs are ignored.
   *
   * @param palette - Stable supported palette ID to apply to application surfaces and overlays.
   */
  public setPalette(palette: BxThemeId): void {
    const id = resolveThemeId(palette);

    if (!id) return;

    this._palette.set(id);

    for (const item of this.palettes) this.document.documentElement.classList.toggle(item.className, item.id === id);

    if (this.isBrowser) this.writeStored('theme-palette', id);
  }

  /**
   * Update explicit high-contrast presentation and persist the preference in a browser.
   *
   * @param enabled - Whether the application should use the shared high-contrast theme override.
   */
  public setHighContrast(enabled: boolean): void {
    this._highContrast.set(enabled);

    if (!this.isBrowser) return;

    this.document.documentElement.classList.toggle('high-contrast', enabled);
    this.writeStored('theme-high-contrast', String(enabled));
  }

  /**
   * Merge appearance preferences, normalize rendering constraints, update mounted surfaces, and persist the result.
   *
   * @param settings - Partial appearance preferences; omitted values remain unchanged and accessibility/rendering constraints still take precedence.
   */
  public setAppearance(settings: Partial<BxAppearanceConfig>): void {
    const current = this.appearance();
    const translucency = settings.translucency ?? current.translucency;
    const next: BxAppearanceConfig = {
      translucency: Number.isFinite(translucency) ? Math.min(1, Math.max(0, translucency)) : DEFAULT_APPEARANCE_CONFIG.translucency,
      quality: settings.quality ?? current.quality,
      glassiness: settings.glassiness ?? this.preferredGlassiness(),
      reducedTransparency: (settings.reducedTransparency ?? current.reducedTransparency) === true
    };

    if (!['auto', 'baseline', 'enhanced'].includes(next.quality)) next.quality = 'auto';

    if (!['auto', 'off', 'on'].includes(next.glassiness ?? 'auto')) next.glassiness = 'auto';

    this._preferredGlassiness.set(next.glassiness ?? 'auto');

    if (next.quality === 'baseline') next.glassiness = 'off';

    if (next.glassiness === 'off' && next.quality === 'enhanced') next.quality = 'auto';

    this._appearance.set(next);
    this.appearanceController?.update(next);

    if (this.isBrowser) this.writeStored('blocks-appearance', JSON.stringify({ ...next, preferredGlassiness: this.preferredGlassiness() }));
  }

  /** Restore the library appearance defaults through the same normalization and persistence path as setAppearance(). */
  public resetAppearance(): void {
    this.setAppearance({ ...DEFAULT_APPEARANCE_CONFIG });
  }

  /** Observe live operating-system light/dark preference updates. */
  public getSystemTheme$() {
    return this.systemTheme$;
  }

  /** Observe the explicit application mode; null means the application follows the system preference. */
  public getApplicationTheme$() {
    return this.applicationTheme$;
  }

  //#region Helpers

  private restoreAppearance(): void {
    try {
      const stored = this.readStored('blocks-appearance');

      if (stored) {
        const saved = JSON.parse(stored) as IStoredAppearancePreferences;

        if (!saved || typeof saved !== 'object') return;

        // Migrate old preferences once; only the new configuration is persisted.
        this.setAppearance({
          translucency:
            typeof saved.translucency === 'number'
              ? saved.translucency
              : typeof saved.glassiness === 'number'
                ? saved.glassiness
                : typeof saved.tint === 'number'
                  ? saved.tint
                  : DEFAULT_APPEARANCE_CONFIG.translucency,
          quality: (saved.quality as GlassQuality | undefined) ?? DEFAULT_APPEARANCE_CONFIG.quality,
          glassiness: (typeof saved.preferredGlassiness === 'string'
            ? saved.preferredGlassiness
            : typeof saved.glassiness === 'string'
              ? saved.glassiness
              : undefined) as GlassinessMode | undefined,
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

  //#endregion
}
