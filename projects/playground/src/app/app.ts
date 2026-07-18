import { Component, computed, DOCUMENT, effect, inject, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Sidenav } from '@playground/components/shared/sidenav/sidenav';
import { IThemePalette } from '@playground/interfaces/itheme-palette.interface';
import { FormsModule } from '@angular/forms';
import { ThemeId } from '@playground/types/common.types';
import { combineLatest } from 'rxjs';
import { Icon } from '@icons/components/icon';
import { ThemingService } from '@core/services/theming.service';
import { Button } from '@forms/components/button/button';
import { Menu } from '@primitives/components/menu/menu';
import { MenuItem } from '@primitives/components/menu-item/menu-item';
import { DropdownDirective } from '@primitives/directives/dropdown.directive';
import { TooltipDirective } from '@primitives/directives/tooltip.directive';
import { IOverprintConfig, OverprintCanvas } from 'overprint-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidenav, FormsModule, Button, Icon, Menu, MenuItem, DropdownDirective, TooltipDirective, OverprintCanvas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  protected readonly title = signal('playground');

  protected readonly availableThemes: IThemePalette[] = [
    { id: 'purple', label: 'Purple', className: '' },
    { id: 'orange', label: 'Orange', className: 'theme-orange' },
    { id: 'red', label: 'Red', className: 'theme-red' },
    { id: 'green', label: 'Green', className: 'theme-green' },
    { id: 'cyberpunk', label: 'Cyberpunk', className: 'theme-cyberpunk' },
    { id: 'high-contrast', label: 'High Contrast', className: 'high-contrast' }
  ];

  protected readonly look = computed<IOverprintConfig>(() => {
    const primaryColor = this.currentPrimaryColor();
    const secondaryColor = this.currentSecondaryColor();

    const colorOne = primaryColor ? primaryColor.replace('#', '') : '2e2e2e';
    const colorTwo = secondaryColor ? secondaryColor.replace('#', '') : 'd7f8e8';

    return {
      fxOrder: 'Gmgs',
      shape: 6,
      stops: [
        { color: colorOne, pos: 0 },
        { color: colorTwo, pos: 20 }
      ],
      seed: 50,
      warp: 1.54,
      noiseScale: 1.34,
      detail: 2,
      contrast: 1.45,
      angle: 316,
      centerX: 0.262,
      centerY: 0.718,
      patternLayout: 'g',
      patternCols: 2,
      patternRows: 2,
      patternGap: 32,
      patternSeed: 25,
      aberration: 0.4,
      softness: 0.28,
      lightMode: 3,
      lightAmount: 0.69,
      lightSize: 0.28,
      lightX: 0.529,
      lightY: 0.246,
      waveAmount: 0.55,
      waveFrequency: 4,
      waveFalloff: 0.72,
      wavePhase: 0.16,
      waveX: 0.468,
      waveY: 0.526,
      glassMode: 2,
      glassAmount: 0.56,
      glassCount: 19,
      glassShadow: 0.23,
      glassHighlight: this.isDarkMode() ? 0 : 0.7,
      pixelate: 129,
      ditherMatrix: 8,
      ditherScale: 5,
      ditherLevels: 5,
      ditherStrength: 0.99,
      ditherColorMode: 1,
      halftoneSize: 82,
      halftoneStyle: 3,
      halftoneStagger: true,
      halftoneDotScale: 0.85,
      halftonePaper: 0.53,
      halftoneEmboss: 0.76,
      halftoneWindAngle: 95,
      asciiSize: 24,
      asciiRatio: 1.6,
      asciiStyle: 3,
      asciiColor: 0,
      asciiBackground: 0.11,
      asciiExposure: 1.12,
      asciiFill: 0.85,
      asciiDensity: 16,
      contourLevels: 13,
      contourWeight: 2.8,
      contourDash: 0.35,
      contourGlow: 0.3,
      contourColor: 0,
      contourPaper: 0.27,
      toneGeoSize: 26,
      toneGeoLow: 0.41,
      toneGeoHigh: 0.67,
      toneGeoWeight: 0.7,
      toneGeoPaper: 0.29,
      grain: 0.125,
      grainSize: 1.67,
      paperAmount: 0.46,
      pointerMode: 2,
      pointerAmount: 0.6,
      pointerSize: 0.5,
      animate: true,
      animSpeed: 0.55
    };
  });

  public readonly selectedThemeLabel = computed(() => {
    const activeId = this.selectedThemeId();
    return this.availableThemes.find((t) => t.id === activeId)?.label ?? 'Select Theme';
  });

  protected currentPrimaryColor = signal<string | undefined>(undefined);
  protected currentSecondaryColor = signal<string | undefined>(undefined);

  protected isDarkMode = signal(false);

  protected selectedThemeId = signal<ThemeId>('orange');

  private hljsLoader: HighlightLoader = inject(HighlightLoader);

  private themingService = inject(ThemingService);

  constructor() {
    this.initThemeSubscription();
    this.initPalette();

    effect(() => {
      this.selectedThemeId();
      this.isDarkMode();

      const computedStyle = window.getComputedStyle(this.document.body);
      const primaryColor = computedStyle.getPropertyValue('--bx-primary');
      const secondaryColor = computedStyle.getPropertyValue('--bx-bg-canvas');

      this.currentPrimaryColor.set(primaryColor);
      this.currentSecondaryColor.set(secondaryColor);
    });
  }

  private initPalette() {
    const savedPalette = localStorage.getItem('theme-palette');

    if (savedPalette && this.availableThemes.some((t) => t.id === savedPalette)) {
      this.setPalette(savedPalette as ThemeId);
    } else {
      this.setPalette('orange');
    }
  }

  protected initThemeSubscription() {
    combineLatest({
      systemTheme: this.themingService.getSystemTheme$(),
      appTheme: this.themingService.getApplicationTheme$()
    })
      .pipe(takeUntilDestroyed())
      .subscribe(({ systemTheme, appTheme }) => {
        const savedPreference = appTheme ?? localStorage.getItem('theme') ?? 'auto';
        const themeToApply = savedPreference === 'auto' ? systemTheme : savedPreference;

        if (themeToApply === 'dark') {
          this.enableDarkMode();
        } else {
          this.disableDarkMode();
        }

        this.setCodeTheme();
      });
  }

  protected onThemeChange(themeId: ThemeId) {
    this.setPalette(themeId);
  }

  protected toggleTheme() {
    if (this.isDarkMode()) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
    this.setCodeTheme();
  }

  protected goToProfile(): void {}

  private enableDarkMode() {
    this.isDarkMode.set(true);
    this.renderer.setAttribute(this.document.documentElement, 'data-theme', 'dark');
    this.themingService.setApplicationTheme('dark');
  }

  private disableDarkMode() {
    this.isDarkMode.set(false);
    this.renderer.removeAttribute(this.document.documentElement, 'data-theme');
    this.themingService.setApplicationTheme('light');
  }

  private setCodeTheme() {
    const codeTheme = this.isDarkMode() ? 'assets/styles/vs2015.css' : 'assets/styles/github.css';
    this.hljsLoader.setTheme(codeTheme);
  }

  private setPalette(themeId: ThemeId) {
    const theme = this.availableThemes.find((t) => t.id === themeId);
    if (!theme) return;

    this.selectedThemeId.set(themeId);
    localStorage.setItem('theme-palette', themeId);

    const root = this.document.documentElement;
    this.availableThemes.forEach((t) => {
      if (t.className) {
        this.renderer.removeClass(root, t.className);
      }
    });

    if (theme.className) {
      this.renderer.addClass(root, theme.className);
    }
  }
}
