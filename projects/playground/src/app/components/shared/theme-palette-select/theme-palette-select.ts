import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { THEME_PALETTES } from '@filip.mazev/blocks/core';
import { IBxSelectOption, Select } from '@filip.mazev/blocks/forms';

import { ThemeStudioService } from '@playground/services/theme-studio.service';

@Component({
  selector: 'app-theme-palette-select',
  imports: [Select],
  templateUrl: './theme-palette-select.html',
  styleUrl: './theme-palette-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePaletteSelect {
  protected readonly themeStudioService = inject(ThemeStudioService);

  protected readonly options: readonly IBxSelectOption<string>[] = THEME_PALETTES.map((palette) => ({ label: palette.label, value: palette.id }));

  protected readonly value: Signal<string> = computed(() => this.themeStudioService.themingService.palette());

  protected colors(id: unknown): readonly string[] {
    return THEME_PALETTES.find((palette) => palette.id === id)?.colors ?? [];
  }

  protected change(id: unknown): void {
    const palette = THEME_PALETTES.find((item) => item.id === id);

    if (palette) this.themeStudioService.setPalette(palette.id);
  }
}
