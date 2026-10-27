import { Component, computed, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { Icon, IconName } from '@filip.mazev/blocks/icons';
import { BxA11yService } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-breadcrumbs',
  imports: [RouterLink, Icon],
  templateUrl: './breadcrumbs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './breadcrumbs.scss'
})
export class Breadcrumbs {
  private readonly navigationService = inject(NavigationService);
  private readonly a11y = inject(BxA11yService);

  protected readonly isAnimated = computed(() => {
    return !this.a11y.isReducedMotion();
  });

  public readonly minimumBreadcrumbs = input<number>(2);
  public readonly divider = input<IconName>('chevron-right');

  protected showBreadcumbs = computed(() => {
    const minimum = Math.max(1, this.minimumBreadcrumbs());
    return this.current().breadcrumbs.length >= minimum;
  });

  protected ariaLabel = computed(() => {
    const labels = this.current()
      .breadcrumbs.map((crumb) => crumb.label)
      .join(' > ');
    return `Breadcrumbs: ${labels}`;
  });

  protected current = this.navigationService.current;
}
