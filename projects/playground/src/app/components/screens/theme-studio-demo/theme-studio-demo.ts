import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { THEME_PALETTES } from '@filip.mazev/blocks/core';
import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalService } from '@filip.mazev/blocks/modal';
import { Card, Collapsible, Divider, PageContainer, Tab, Tabs } from '@filip.mazev/blocks/primitives';

import { Code } from '@playground/components/shared/code/code';
import { Readme } from '@playground/components/shared/readme/readme';
import { ThemePalettePreview } from '@playground/components/shared/theme-palette-preview/theme-palette-preview';
import { ThemeStudioPreviewDialog } from '@playground/components/shared/theme-studio-preview-dialog/theme-studio-preview-dialog';
import { ThemeStudioSetup } from '@playground/components/shared/theme-studio-setup/theme-studio-setup';
import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { STUDIO_SETUP_HEADERS } from '@playground/shared/constants/theme-studio-setup.constants';
import { STUDIO_COLOR_ROLES } from '@playground/shared/constants/theme-studio-showcase.constants';

@Component({
  selector: 'app-theme-studio-demo',
  imports: [RouterLink, Button, InputField, Icon, Card, Collapsible, Divider, PageContainer, Tab, Tabs, Code, Readme, ThemePalettePreview],
  templateUrl: './theme-studio-demo.html',
  styleUrl: './theme-studio-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudioDemo {
  private readonly modalService = inject(ModalService);

  protected readonly themeStudioService = inject(ThemeStudioService);

  protected readonly colors: typeof STUDIO_COLOR_ROLES = STUDIO_COLOR_ROLES;

  protected readonly paletteLabel: Signal<string> = computed(
    () => THEME_PALETTES.find((palette) => palette.id === this.themeStudioService.themingService.palette())?.label ?? 'Custom palette'
  );
  protected readonly exportFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'styles.scss', path: 'studio-home-export.scss', language: 'scss', content: this.themeStudioService.scss() }
  ]);

  protected setMode(value: string | null): void {
    if (value === 'light' || value === 'dark') this.themeStudioService.themingService.setApplicationTheme(value);
  }

  protected showDialog(): void {
    this.modalService.open<undefined, undefined>(ThemeStudioPreviewDialog, {
      header: { text: 'Theme inheritance', icon: { name: 'layers' } },
      style: { layout: 'center', breakpoints: { sm: 'bottom-sheet' } }
    });
  }

  protected openSetup(): void {
    this.themeStudioService.finishEdit();
    this.modalService.open<undefined, undefined>(ThemeStudioSetup, {
      header: STUDIO_SETUP_HEADERS.configure,
      style: {
        layout: 'center',
        breakpoints: { sm: 'bottom-sheet' },
        wrapperStyles: 'inline-size: 48rem; max-inline-size: 100%; block-size: min(52rem, 88dvh);'
      }
    });
  }
}
