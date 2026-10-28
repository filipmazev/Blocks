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
      title: 'Your Blocks theme',
      description: 'Existing semantic colors, spacing, radii, and palettes carry through every surface.',
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

    const accentColor = window.getComputedStyle(document.body).getPropertyValue('--bx-primary');
    const bgColor = window.getComputedStyle(document.body).getPropertyValue('--bx-bg-canvas');

    return {
      fxOrder: 'Ggr',
      stops: [
        { color: accentColor.replace('#', ''), pos: 0 },
        { color: bgColor.replace('#', ''), pos: 57 },
        { color: bgColor.replace('#', ''), pos: 100 }
      ],
      seed: 511,
      warp: 0.35,
      noiseScale: 1.36,
      detail: 0,
      contrast: 0.82,
      angle: 180,
      centerX: 0.713,
      centerY: 0.271,
      lightMode: 0,
      lightAmount: 0,
      lightSize: 0.27,
      lightFollow: 1,
      glassMode: theme === 'dark' ? 1 : 2,
      glassAmount: 0.42,
      glassCount: theme === 'dark' ? 50 : 90,
      glassAngle: 180,
      glassProfile: 2,
      glassBevel: 0.01,
      glassShadow: 0.16,
      glassHighlight: 0.05,
      pointerMode: 2,
      pointerDamping: 1,
      pointerFlip: true,
      animate: true
    };
  });

  constructor() {
    effect(() => {
      if (!this.lightOrb()?.showWakeHint()) this.wakeHint()?.hide();
    });
  }
}
