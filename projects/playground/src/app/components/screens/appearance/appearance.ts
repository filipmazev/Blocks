import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { IBxAppearanceConfig } from '@core/interfaces/ibx-appearance-config.interface';
import type { GlassinessMode } from '@filip.mazev/blocks/effects/runtime';
import type { IAppearanceChoice } from '@playground/components/screens/appearance/interfaces/iappearance-choice.interface';

import { BxA11yService, BxAppearanceConfig, DeviceTheme, ThemingService, WindowDimensionsService } from '@filip.mazev/blocks/core';
import { Button, Radio, SliderDirective, SlideToggle } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Card, Collapsible, Container, PageContainer, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { AppearanceModePreview } from '@playground/components/screens/appearance/appearance-mode-preview/appearance-mode-preview';
import { AppearancePreview } from '@playground/components/screens/appearance/appearance-preview/appearance-preview';
import { APPEARANCE_MODES, APPEARANCE_QUALITIES, GLASSINESS_MODES } from '@playground/components/screens/appearance/constants/appearance-controls.constants';
import { Readme } from '@playground/components/shared/readme/readme';
import { ThemeStudioService } from '@playground/services/theme-studio.service';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-appearance',
  imports: [
    PageContainer,
    Highlight,
    FormsModule,
    Radio,
    SlideToggle,
    SliderDirective,
    Button,
    Card,
    Container,
    Icon,
    Collapsible,
    TooltipDirective,
    Readme,
    AppearancePreview,
    AppearanceModePreview
  ],
  templateUrl: './appearance.html',
  styleUrl: './appearance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Appearance {
  private readonly bxA11yService = inject(BxA11yService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  protected readonly themingService = inject(ThemingService);
  protected readonly themeStudioService = inject(ThemeStudioService);

  protected readonly appearance: Signal<IBxAppearanceConfig> = this.themingService.appearance;
  protected readonly reducedMotion: Signal<boolean> = this.bxA11yService.isReducedMotion;

  protected readonly compactModes: Signal<boolean> = computed(
    () => this.windowDimensionsService.dimensions().width <= this.windowDimensionsService.breakpoints.sm
  );
  protected readonly modes: Signal<readonly IAppearanceChoice<'auto' | DeviceTheme>[]> = computed(() =>
    this.compactModes() ? APPEARANCE_MODES.filter((mode) => mode.value !== 'auto') : APPEARANCE_MODES
  );
  protected readonly selectedMode: Signal<'auto' | DeviceTheme> = computed(() =>
    this.compactModes() ? this.themingService.activeTheme() : (this.themingService.applicationTheme() ?? 'auto')
  );
  protected readonly translucencyDescription: Signal<'Lighter tint and blur' | 'Balanced tint and blur' | 'Stronger tint and blur'> = computed(() => {
    const value = this.appearance().translucency;

    if (value < 0.25) return 'Lighter tint and blur';

    if (value < 0.75) return 'Balanced tint and blur';

    return 'Stronger tint and blur';
  });

  protected readonly qualities: readonly IAppearanceChoice<'auto' | 'baseline'>[] = APPEARANCE_QUALITIES;
  protected readonly glassinessModes: readonly IAppearanceChoice<GlassinessMode>[] = GLASSINESS_MODES;
  protected readonly codeExample: 'const themingService = inject(ThemingService);\n\n// Balanced glass throughout the application, including open overlays.\nthemingService.setAppearance({ translucency: 0.5 });\n\n// Browser policy for explicitly selected glassy controls.\nthemingService.setAppearance({ glassiness: \'auto\' });\n\n// Opaque surfaces are an accessibility preference.\nthemingService.setAppearance({ reducedTransparency: true });\n\n// Opt in only the controls that benefit from refraction.\n<button bx-button variant="icon" glassiness="auto">…</button>\n<section bxSurface bxSurfaceGlassiness="auto">…</section>' = `const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">…</button>
<section bxSurface bxSurfaceGlassiness="auto">…</section>`;

  constructor() {
    effect(() => {
      if (!this.qualities.some((choice) => choice.value === this.appearance().quality)) this.themingService.setAppearance({ quality: 'auto' });
    });
  }

  protected updateAppearance(settings: Partial<BxAppearanceConfig>): void {
    this.themingService.setAppearance(settings);
  }

  protected setMode(mode: DeviceTheme | 'auto'): void {
    if (this.compactModes() && this.themingService.applicationTheme() === null && mode === this.themingService.activeTheme()) return;

    this.themingService.setApplicationTheme(mode === 'auto' ? null : mode);
  }

  protected setAutomaticMode(enabled: boolean): void {
    this.themingService.setApplicationTheme(enabled ? null : this.themingService.activeTheme());
  }

  protected setMotion(reduce: boolean): void {
    this.bxA11yService.setReducedMotion(reduce);
  }

  protected reset(): void {
    this.themingService.resetAppearance();
  }
}
