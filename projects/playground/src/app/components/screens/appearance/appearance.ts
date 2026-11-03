import { Highlight } from 'ngx-highlightjs';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { BxA11yService, BxAppearanceConfig, DeviceTheme, ThemingService, WindowDimensionsService } from '@filip.mazev/blocks/core';
import { FormsModule } from '@angular/forms';
import { Button, Radio, SlideToggle, SliderDirective } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Card, Collapsible, Container, TooltipDirective } from '@filip.mazev/blocks/primitives';
import { Readme } from '../../shared/readme/readme';
import { AppearancePreview } from './appearance-preview/appearance-preview';
import { APPEARANCE_MODES, APPEARANCE_QUALITIES, GLASSINESS_MODES } from './constants/appearance-controls.constants';
import { AppearanceModePreview } from './appearance-mode-preview/appearance-mode-preview';

@Component({
  selector: 'app-appearance',
  imports: [
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
  private readonly a11y = inject(BxA11yService);
  private readonly dimensions = inject(WindowDimensionsService);
  protected readonly theme = inject(ThemingService);
  protected readonly appearance = this.theme.appearance;
  protected readonly reducedMotion = this.a11y.isReducedMotion;
  protected readonly compactModes = computed(() => this.dimensions.dimensions().width <= this.dimensions.breakpoints.sm);
  protected readonly modes = computed(() => (this.compactModes() ? APPEARANCE_MODES.filter((mode) => mode.value !== 'auto') : APPEARANCE_MODES));
  protected readonly selectedMode = computed(() => (this.compactModes() ? this.theme.activeTheme() : (this.theme.applicationTheme() ?? 'auto')));
  protected readonly translucencyDescription = computed(() => {
    const value = this.appearance().translucency;
    if (value < 0.25) return 'Lighter tint and blur';
    if (value < 0.75) return 'Balanced tint and blur';
    return 'Stronger tint and blur';
  });

  protected readonly qualities = APPEARANCE_QUALITIES;
  protected readonly glassinessModes = GLASSINESS_MODES;

  protected readonly codeExample = `const theme = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
theme.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
theme.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
theme.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">…</button>
<section bxSurface bxSurfaceGlassiness="auto">…</section>`;

  protected updateAppearance(settings: Partial<BxAppearanceConfig>): void {
    this.theme.setAppearance(settings);
  }

  protected setMode(mode: DeviceTheme | 'auto'): void {
    if (this.compactModes() && this.theme.applicationTheme() === null && mode === this.theme.activeTheme()) return;

    this.theme.setApplicationTheme(mode === 'auto' ? null : mode);
  }

  protected setAutomaticMode(enabled: boolean): void {
    this.theme.setApplicationTheme(enabled ? null : this.theme.activeTheme());
  }

  protected setMotion(reduce: boolean): void {
    this.a11y.setReducedMotion(reduce);
  }

  protected reset(): void {
    this.theme.resetAppearance();
  }
}
