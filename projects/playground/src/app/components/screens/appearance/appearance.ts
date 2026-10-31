import { Highlight } from 'ngx-highlightjs';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { BxA11yService, BxAppearanceConfig, ThemingService } from '@filip.mazev/blocks/core';
import { FormsModule } from '@angular/forms';
import { Button, Radio, SlideToggle, SliderDirective } from '@filip.mazev/blocks/forms';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { TooltipDirective } from '@filip.mazev/blocks/primitives';
import { Readme } from '../../shared/readme/readme';
import { AppearancePreview } from './appearance-preview/appearance-preview';

@Component({
  selector: 'app-appearance',
  imports: [Highlight, FormsModule, Radio, SlideToggle, SliderDirective, Button, BxSurfaceDirective, Icon, TooltipDirective, Readme, AppearancePreview],
  templateUrl: './appearance.html',
  styleUrl: './appearance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Appearance {
  private readonly a11y = inject(BxA11yService);
  protected readonly theme = inject(ThemingService);
  protected readonly appearance = this.theme.appearance;
  protected readonly reducedMotion = this.a11y.isReducedMotion;
  protected readonly glassinessDescription = computed(() => {
    const value = this.appearance().glassiness;
    if (value < 0.25) return 'Nearly transparent glass';
    if (value < 0.75) return 'Balanced glass';
    return 'Richly tinted glass';
  });

  protected readonly qualities: { value: BxAppearanceConfig['quality']; label: string }[] = [
    { value: 'auto', label: 'Automatic' },
    { value: 'baseline', label: 'Baseline' }
  ];

  protected readonly codeExample = `const theme = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
theme.setAppearance({ glassiness: 0.5 });

// Opaque surfaces are an accessibility preference.
theme.setAppearance({ reducedTransparency: true });

// Custom surfaces inherit the same appearance.
<article bxSurface>…</article>`;

  protected updateAppearance(settings: Partial<BxAppearanceConfig>): void {
    this.theme.setAppearance(settings);
  }

  protected setMotion(reduce: boolean): void {
    this.a11y.setReducedMotion(reduce);
  }

  protected reset(): void {
    this.theme.resetAppearance();
    this.theme.setPalette('carbon-cobalt');
    this.theme.setHighContrast(false);
    this.a11y.setReducedMotion(null);
  }
}
