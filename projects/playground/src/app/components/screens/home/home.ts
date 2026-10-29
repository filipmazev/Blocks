import { ChangeDetectionStrategy, Component, computed, effect, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOCKS_VERSION } from '@filip.mazev/blocks';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@icons/components/icon';
import { IconName } from '@icons/types/icon.types';
import { Button } from '@forms/components/button/button';
import { OddityCanvas } from 'oddity-angular';
import { ThemingService } from '@core/services/theming.service';
import { BxA11yService } from '@core/services/bx-a11y.service';
import { TooltipDirective } from '@filip.mazev/blocks/primitives';
import { LightOrb } from './light-orb/light-orb';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Button, BxSurfaceDirective, OddityCanvas, LightOrb, TooltipDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly version = BLOCKS_VERSION;

  protected readonly reducedMotion = inject(BxA11yService).isReducedMotion;

  private readonly lightOrb = viewChild(LightOrb);
  private readonly wakeHint = viewChild(TooltipDirective);

  private readonly themingService = inject(ThemingService);

  protected readonly features: { title: string; description: string; icon: IconName; route: string }[] = [
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
      route: '/modal'
    }
  ];

  protected readonly look = computed(() => {
    this.themingService.palette();
    const theme = this.themingService.activeTheme();

    const primaryColor = window.getComputedStyle(document.body).getPropertyValue('--bx-primary');
    const accentColor = window.getComputedStyle(document.body).getPropertyValue('--bx-color-accent-500');
    const bgColor = window.getComputedStyle(document.body).getPropertyValue('--bx-bg-canvas');

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
      glassCount: 13,
      glassAngle: 180,
      glassProfile: 2,
      glassBevel: 0.01,
      glassShadow: theme === 'dark' ? 0.8 : 0.2,
      glassHighlight: 0.05,
      pointerMode: 2,
      pointerDamping: 1,
      pointerFlip: true,
      animate: !this.reducedMotion()
    };
  });

  constructor() {
    effect(() => {
      if (!this.lightOrb()?.showWakeHint()) this.wakeHint()?.hide();
    });
  }
}
