import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IResolvedNavigation } from '@navigation/interfaces/iresolved-navigation.interface';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { Icon, IconName } from '@filip.mazev/blocks/icons';

import { NavigationService } from '@navigation/services/navigation.service';

@Component({
  selector: 'bx-breadcrumbs',
  imports: [RouterLink, Icon],
  templateUrl: './breadcrumbs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './breadcrumbs.scss'
})
export class Breadcrumbs {
  private readonly navigationService = inject(NavigationService);
  private readonly bxA11yService = inject(BxA11yService);

  protected readonly isAnimated: Signal<boolean> = computed(() => {
    return !this.bxA11yService.isReducedMotion();
  });
  protected readonly showBreadcumbs: Signal<boolean> = computed(() => {
    const minimum = Math.max(1, this.minimumBreadcrumbs());

    return this.current().breadcrumbs.length >= minimum;
  });
  protected readonly ariaLabel: Signal<string> = computed(() => {
    const labels = this.current()
      .breadcrumbs.map((crumb) => crumb.label)
      .join(' > ');

    return `Breadcrumbs: ${labels}`;
  });

  protected readonly current: Signal<IResolvedNavigation> = this.navigationService.current;

  /** Minimum number of breadcrumb entries required before the trail is displayed. Defaults to `2`. */
  public readonly minimumBreadcrumbs: InputSignal<number> = input<number>(2);
  /** Separator text rendered between breadcrumb items. Defaults to `'chevron-right'`. */
  public readonly divider: InputSignal<IconName> = input<IconName>('chevron-right');
}
