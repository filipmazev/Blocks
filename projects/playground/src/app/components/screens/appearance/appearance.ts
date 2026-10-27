import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BxA11yService, BxAppearanceConfig, ThemingService } from '@filip.mazev/blocks/core';
import { FormsModule } from '@angular/forms';
import { Button, Radio, SlideToggle, SliderDirective } from '@filip.mazev/blocks/forms';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
import { Icon } from '@filip.mazev/blocks/icons';
import { Readme } from '../../shared/readme/readme';

@Component({
  selector: 'app-appearance',
  imports: [FormsModule, Radio, SlideToggle, SliderDirective, Button, BxSurfaceDirective, DropdownDirective, Menu, MenuItem, Icon, Readme],
  templateUrl: './appearance.html',
  styleUrl: './appearance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Appearance {
  protected readonly theme = inject(ThemingService);
  private readonly a11y = inject(BxA11yService);
  protected readonly appearance = this.theme.appearance;
  protected readonly reducedMotion = this.a11y.isReducedMotion;
  protected readonly status = signal('Open the menu to preview a gentle fade with stable, readable content.');
  protected readonly materials: BxAppearanceConfig['material'][] = ['glass', 'frosted', 'solid'];
  protected readonly qualities: { value: BxAppearanceConfig['quality']; label: string }[] = [
    { value: 'auto', label: 'Automatic' },
    { value: 'baseline', label: 'Baseline' },
    { value: 'enhanced', label: 'Enhanced when supported' }
  ];

  protected readonly codeExample = `// Change the material across the application, including open overlays.\nconst theme = inject(ThemingService);\ntheme.setAppearance({ material: 'glass', blur: 10, tint: 0.5 });\n\n// Existing Blocks components inherit these settings.\n<button bx-button [bxDropdown]="actions" bxTransition="fade">\n  Explore actions\n</button>\n\n// Custom native DOM surfaces use bxSurface.\n<article bxSurface>…</article>`;

  protected updateAppearance(settings: Partial<BxAppearanceConfig>): void {
    this.theme.setAppearance(settings);
  }

  protected setMaterial(material: BxAppearanceConfig['material']): void {
    const preset = { glass: { blur: 10, tint: 0.5 }, frosted: { blur: 24, tint: 0.65 }, solid: { blur: 0, tint: 1 } }[material];
    this.theme.setAppearance({ material, ...preset });
    this.status.set(`${material[0].toUpperCase()}${material.slice(1)} applied throughout Blocks. Open another component page to see the same settings.`);
  }

  protected setMotion(reduce: boolean): void {
    this.a11y.setReducedMotion(reduce);
  }

  protected reset(): void {
    this.theme.resetAppearance();
    this.theme.setPalette('orange');
    this.a11y.setReducedMotion(null);
    this.status.set('Global appearance defaults restored. Motion follows the system preference.');
  }
}
