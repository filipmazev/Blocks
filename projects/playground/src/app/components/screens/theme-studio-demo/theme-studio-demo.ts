import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { THEME_PALETTES, ThemeCssVariable } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalService } from '@filip.mazev/blocks/modal';
import { Card, Collapsible, PageContainer, PageContent, Tab, Tabs } from '@filip.mazev/blocks/primitives';

import { Code } from '@playground/components/shared/code/code';
import { Readme } from '@playground/components/shared/readme/readme';
import { ThemePalettePreview } from '@playground/components/shared/theme-palette-preview/theme-palette-preview';
import { ThemePaletteSelect } from '@playground/components/shared/theme-palette-select/theme-palette-select';
import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { STUDIO_COLOR_ROLES } from '@playground/shared/constants/theme-studio-showcase.constants';
import { applyStudioMode, openThemeStudioSetup } from '@playground/shared/helpers/theme-studio.helpers';
import { StudioMode } from '@playground/types/theme-studio.types';

@Component({
  selector: 'app-theme-studio-demo',
  imports: [RouterLink, Button, Icon, Card, Collapsible, PageContainer, PageContent, Tab, Tabs, Code, Readme, ThemePalettePreview, ThemePaletteSelect],
  templateUrl: './theme-studio-demo.html',
  styleUrl: './theme-studio-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudioDemo {
  private readonly modalService = inject(ModalService);

  protected readonly themeStudioService = inject(ThemeStudioService);

  protected readonly modes: readonly StudioMode[] = ['light', 'dark'];
  protected readonly colors: typeof STUDIO_COLOR_ROLES = STUDIO_COLOR_ROLES;
  protected readonly colorPairs: readonly {
    readonly label: string;
    readonly foregroundLabel: string;
    readonly background: ThemeCssVariable;
    readonly foreground: ThemeCssVariable;
  }[] = [
    {
      label: 'Primary',
      foregroundLabel: 'on-primary',
      background: '--bx-primary',
      foreground: '--bx-on-primary'
    },
    {
      label: 'Accent',
      foregroundLabel: 'on-accent',
      background: '--bx-accent',
      foreground: '--bx-on-accent'
    }
  ];

  protected readonly paletteLabel: Signal<string> = computed(
    () => THEME_PALETTES.find((palette) => palette.id === this.themeStudioService.themingService.palette())?.label ?? 'Custom palette'
  );
  protected readonly exportFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'styles.scss', path: 'studio-home-export.scss', language: 'scss', content: this.themeStudioService.scss() }
  ]);

  protected setMode(value: string | null): void {
    applyStudioMode(this.themeStudioService, value);
  }

  protected openSetup(): void {
    openThemeStudioSetup(this.modalService, this.themeStudioService);
  }
}
