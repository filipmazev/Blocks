import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, effect, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IHomeFeaturesState } from '@playground/components/screens/home/interfaces/ihome-features-state.interface';
import type { IHomeLookState } from '@playground/components/screens/home/interfaces/ihome-look-state.interface';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { TooltipDirective } from '@filip.mazev/blocks/primitives';

import { BxA11yService } from '@core/services/bx-a11y.service';
import { ThemingService } from '@core/services/theming.service';
import { WindowDimensionsService } from '@core/services/window-dimension.service';
import { Button } from '@forms/components/button/button';
import { Icon } from '@icons/components/icon/icon';
import { LightOrb } from '@playground/components/screens/home/light-orb/light-orb';
import { PLAYGROUND_VERSION } from '@playground/generated/release';
import { PackageReleaseService } from '@playground/services/package-release.service';

import { OddityCanvas } from 'oddity-angular';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Button, BxSurfaceDirective, OddityCanvas, LightOrb, TooltipDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private readonly themingService = inject(ThemingService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  protected readonly packageReleaseService = inject(PackageReleaseService);
  protected readonly isReducedMotion = inject(BxA11yService).isReducedMotion;

  private readonly glassCount: Signal<number> = computed(() =>
    this.windowDimensionsService.resolveResponsiveValue(
      {
        xs: 20,
        sm: 30,
        md: 50,
        lg: 70,
        xl: 80,
        '2xl': 90
      },
      100
    )
  );

  private readonly lightOrb: Signal<LightOrb | undefined> = viewChild(LightOrb);
  private readonly wakeHint: Signal<TooltipDirective | undefined> = viewChild(TooltipDirective);

  protected readonly version: string = `v${PLAYGROUND_VERSION}`;
  protected readonly features: IHomeFeaturesState[] = [
    {
      title: 'One shared material',
      description: 'Set appearance once. Buttons, fields, menus, dialogs, and notifications share your application settings.',
      icon: 'layers',
      route: '/appearance'
    },
    {
      title: 'Your Blocks palette',
      description: 'Paired palettes, semantic colors, spacing, and radii carry through every surface.',
      icon: 'palette',
      route: '/components/button'
    },
    {
      title: 'Familiar interactions',
      description: 'Keep native controls, keyboard navigation, and reduced motion while adding fluid transitions.',
      icon: 'accessibility',
      route: '/components/side-nav'
    }
  ];

  protected readonly look: Signal<IHomeLookState> = computed(() => {
    this.themingService.palette();

    const theme = this.themingService.activeTheme();

    const primaryColor = window.getComputedStyle(document.body).getPropertyValue('--bx-primary');
    const accentColor = window.getComputedStyle(document.body).getPropertyValue('--bx-color-accent-500');
    const bgColor = window.getComputedStyle(document.body).getPropertyValue('--bx-bg-canvas');

    const glassCount = this.glassCount();

    return {
      fxOrder: 'Ggr',
      stops: [
        { color: bgColor.replace('#', ''), pos: 0 },
        { color: primaryColor.replace('#', ''), pos: 40 },
        { color: accentColor.replace('#', ''), pos: 43 },
        { color: bgColor.replace('#', ''), pos: 48 },
        { color: bgColor.replace('#', ''), pos: 100 }
      ],
      seed: 519,
      warp: 0.3,
      noiseScale: 1.36,
      detail: 2,
      contrast: 0.275,
      angle: 145,
      centerX: 0.713,
      centerY: 0.271,
      lightMode: 0,
      lightAmount: 0,
      lightSize: 0,
      lightFollow: 1,
      glassMode: 1,
      glassAmount: 0.38,
      glassCount: glassCount,
      glassAngle: 180,
      glassProfile: 2,
      glassBevel: 0.01,
      glassShadow: theme === 'dark' ? 0.8 : 0.2,
      glassHighlight: 0.05,
      pointerMode: 2,
      pointerDamping: 1,
      pointerFlip: true,
      animate: !this.isReducedMotion()
    };
  });

  constructor() {
    effect(() => {
      if (!this.lightOrb()?.showWakeHint()) this.wakeHint()?.hide();
    });
  }
}
