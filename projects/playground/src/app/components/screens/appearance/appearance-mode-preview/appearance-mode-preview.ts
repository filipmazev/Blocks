import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DeviceTheme, ThemingService } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { Card, ProgressBar, Tag } from '@filip.mazev/blocks/primitives';

/** An inert miniature of Blocks components in a scoped theme. */
@Component({
  selector: 'app-appearance-mode-preview',
  imports: [Card, Icon, ProgressBar, Tag],
  templateUrl: './appearance-mode-preview.html',
  styleUrl: './appearance-mode-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'paletteClass()',
    '[attr.data-theme]': 'mode()',
    'aria-hidden': 'true',
    inert: '',
    'data-bx-light-scope': ''
  }
})
export class AppearanceModePreview {
  private readonly theme = inject(ThemingService);
  protected readonly paletteClass = computed(() =>
    [this.theme.palettes.find((palette) => palette.id === this.theme.palette())?.className, this.theme.highContrast() ? 'high-contrast' : ''].join(' ')
  );

  public readonly mode = input.required<DeviceTheme>();
}
