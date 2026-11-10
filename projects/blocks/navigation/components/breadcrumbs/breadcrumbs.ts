import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { IBreadcrumbTrailConfig } from '@filip.mazev/blocks/primitives';

import { BX_I18N, resolveText } from '@filip.mazev/blocks/core';
import { BreadcrumbTrail } from '@filip.mazev/blocks/primitives';

import { IBreadcrumbItem } from '@navigation/interfaces/ibreadcrumb-item.interface';
import { NavigationService } from '@navigation/services/navigation.service';

@Component({
  selector: 'bx-breadcrumbs',
  imports: [BreadcrumbTrail],
  templateUrl: './breadcrumbs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './breadcrumbs.scss'
})
export class Breadcrumbs {
  private readonly navigationService = inject(NavigationService);
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly showBreadcumbs: Signal<boolean> = computed(() => {
    const minimum = Math.max(1, this.minimumBreadcrumbs());

    return this.resolvedItems().length >= minimum;
  });
  protected readonly ariaLabel: Signal<string> = computed(() => {
    const labels = this.resolvedItems()
      .map((crumb) => crumb.label)
      .join(' > ');

    return `${resolveText(this.label(), this.i18n)}: ${labels}`;
  });
  protected readonly resolvedItems: Signal<readonly IBreadcrumbItem[]> = computed(() => this.items() ?? this.navigationService.current().breadcrumbs);

  /** Minimum number of breadcrumb entries required before the trail is displayed. Defaults to `2`. */
  public readonly minimumBreadcrumbs: InputSignal<number> = input<number>(2);
  /** Separator text rendered between breadcrumb items. Defaults to `'chevron-right'`. */
  public readonly divider: InputSignal<IconName> = input<IconName>('chevron-right');
  /** Optional explicit resolved trail; omission follows NavigationService and an empty array suppresses the trail. */
  public readonly items: InputSignal<readonly IBreadcrumbItem[] | undefined> = input<readonly IBreadcrumbItem[] | undefined>(undefined);
  /** Overflow count, translated labels, hover opening, and popup placement. Defaults to shared breadcrumb settings, then three visible entries. */
  public readonly breadcrumbConfig: InputSignal<IBreadcrumbTrailConfig> = input<IBreadcrumbTrailConfig>({});
  /** Translatable accessible breadcrumb name; the complete trail is appended. Defaults to Breadcrumbs. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Breadcrumbs');
}
