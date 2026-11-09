import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IHomeFeaturesState } from '@playground/components/screens/home/interfaces/ihome-features-state.interface';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { PageContainer, PageContent, PageFooter, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { BxA11yService } from '@core/services/bx-a11y.service';
import { Button } from '@forms/components/button/button';
import { Icon } from '@icons/components/icon/icon';
import { LightOrb } from '@playground/components/screens/home/light-orb/light-orb';
import { ThemeMaterialPreview } from '@playground/components/shared/theme-material-preview/theme-material-preview';
import { PLAYGROUND_VERSION } from '@playground/generated/release';
import { PackageReleaseService } from '@playground/services/package-release.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PageContainer, PageContent, PageFooter, Icon, Button, BxSurfaceDirective, ThemeMaterialPreview, LightOrb, TooltipDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly packageReleaseService = inject(PackageReleaseService);
  protected readonly isReducedMotion = inject(BxA11yService).isReducedMotion;

  private readonly lightOrb: Signal<LightOrb | undefined> = viewChild(LightOrb);
  private readonly wakeHint: Signal<TooltipDirective | undefined> = viewChild(TooltipDirective);

  protected readonly version: string = `v${PLAYGROUND_VERSION}`;
  protected readonly features: IHomeFeaturesState[] = [
    {
      title: 'Appearance',
      description: 'Glass, light and motion, configured once.',
      icon: 'layers',
      route: '/appearance'
    },
    {
      title: 'Theming',
      description: 'Colors and shared tokens across your app.',
      icon: 'palette',
      route: '/studio'
    },
    {
      title: 'Accessibility',
      description: 'Keyboard, touch and accessibility preferences.',
      icon: 'accessibility',
      route: '/components/side-nav'
    }
  ];

  protected readonly lightGardenElement: Signal<ElementRef<HTMLElement>> = viewChild.required('lightGarden', {
    read: ElementRef<HTMLElement>
  });

  constructor() {
    effect(() => {
      if (!this.lightOrb()?.showWakeHint()) this.wakeHint()?.hide();
    });
  }
}
