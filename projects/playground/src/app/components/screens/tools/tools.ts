import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { INavigationItem, NavigationService } from '@filip.mazev/blocks/navigation';
import { Grid, PageContainer, PageHeader } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-tools',
  imports: [RouterLink, BxSurfaceDirective, Icon, Grid, PageContainer, PageHeader],
  templateUrl: './tools.html',
  styleUrl: './tools.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tools {
  private readonly navigationService = inject(NavigationService);

  protected readonly tools: Signal<INavigationItem[]> = computed(
    () =>
      this.navigationService
        .menuTreeGroups()
        .find((group) => group.id === 'Tools')
        ?.items.filter((item) => item.route !== '/tools') ?? []
  );
}
