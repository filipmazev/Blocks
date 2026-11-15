import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IsoTime } from '@filip.mazev/blocks/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button, TimePicker } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Alert, Card, PageContainer, PageContent, PageFooter, Tag } from '@filip.mazev/blocks/primitives';

import { AppearancePreview } from '@playground/components/screens/appearance/appearance-preview/appearance-preview';
import { LightOrb } from '@playground/components/screens/home/light-orb/light-orb';
import { COMPONENT_EXAMPLES } from '@playground/components/screens/library-components/component-demo/constants/component-catalog.constants';
import { FigmaLibraryPreview } from '@playground/components/shared/figma-library-preview/figma-library-preview';
import { ThemeMaterialPreview } from '@playground/components/shared/theme-material-preview/theme-material-preview';
import { ThemeSwatchPreview } from '@playground/components/shared/theme-swatch-preview/theme-swatch-preview';
import { PLAYGROUND_VERSION } from '@playground/generated/release';
import { PackageReleaseService } from '@playground/services/package-release.service';
import { FIGMA_LIBRARY_URL } from '@playground/shared/constants/figma-library.constants';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    PageContainer,
    PageContent,
    PageFooter,
    Icon,
    Button,
    BxSurfaceDirective,
    ThemeMaterialPreview,
    LightOrb,
    Alert,
    Tag,
    Card,
    TimePicker,
    AppearancePreview,
    ThemeSwatchPreview,
    FigmaLibraryPreview
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly packageReleaseService = inject(PackageReleaseService);

  protected readonly version: string = `v${PLAYGROUND_VERSION}`;
  protected readonly figmaLibraryUrl: string = FIGMA_LIBRARY_URL;
  protected readonly componentCount: number = COMPONENT_EXAMPLES.length;
  protected readonly exampleTime: IsoTime = '09:30';

  protected readonly lightGardenElement: Signal<ElementRef<HTMLElement>> = viewChild.required('lightGarden', { read: ElementRef<HTMLElement> });
}
