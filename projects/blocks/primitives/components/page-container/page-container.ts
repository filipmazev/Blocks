import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, contentChild, inject, input } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { BreadcrumbTrail } from '@primitives/components/breadcrumb-trail/breadcrumb-trail';
import { Container } from '@primitives/components/container/container';
import { PageHeader } from '@primitives/components/page-header/page-header';
import { IBreadcrumbTrailConfig } from '@primitives/interfaces/ibreadcrumb-trail-config.interface';
import { IPageBreadcrumb } from '@primitives/interfaces/ipage-breadcrumb.interface';
import { BX_PAGE_NAVIGATION } from '@primitives/tokens/page-navigation.token';
import { ContainerSize } from '@primitives/types/layout.types';

@Component({
  selector: 'bx-page-container',
  imports: [Container, PageHeader, BreadcrumbTrail],
  templateUrl: './page-container.html',
  styleUrl: './page-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContainer {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly pageNavigation = inject(BX_PAGE_NAVIGATION, { optional: true });

  protected readonly resolvedBreadcrumbs: Signal<readonly IPageBreadcrumb[]> = computed(() => {
    const trail = this.breadcrumbs() ?? this.pageNavigation?.().breadcrumbs ?? [];
    const depth = Math.max(0, Math.trunc(this.breadcrumbsAfter()) || 0);

    return this.showBreadcrumbs() && trail.length > depth ? trail.map((crumb) => ({ ...crumb, label: resolveText(crumb.label, this.i18n) })) : [];
  });
  protected readonly resolvedBreadcrumbLabel: Signal<string> = computed(() => resolveText(this.breadcrumbLabel(), this.i18n));

  protected readonly projectedHeader: Signal<PageHeader | undefined> = contentChild(PageHeader);

  /** Maximum-width preset inherited from Container. Defaults to xl; CSS variables can override its width. */
  public readonly size: InputSignal<ContainerSize> = input<ContainerSize>('xl');
  /** Optional translated section label above the title. Undefined resolves from navigation; empty hides it. */
  public readonly sectionTitle: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional translated page heading. Undefined resolves from navigation; empty hides it. */
  public readonly pageTitle: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional translated page description, set explicitly by the application. No default description. */
  public readonly pageDescription: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Resolves undefined section and page titles from navigation. Defaults to true; breadcrumbs resolve independently. */
  public readonly autoResolveTitlesFromNavigation: InputSignal<boolean> = input(true);
  /** Optional explicit breadcrumb trail. Undefined uses navigation; an empty array suppresses automatic entries. */
  public readonly breadcrumbs: InputSignal<readonly IPageBreadcrumb[] | undefined> = input<readonly IPageBreadcrumb[] | undefined>(undefined);
  /** Whether breadcrumbs may appear. Defaults to true; breadcrumbsAfter still applies. */
  public readonly showBreadcrumbs: InputSignal<boolean> = input(true);
  /** Nesting depth at which breadcrumbs appear. Defaults to 1: a root is hidden and its first child shows the trail. */
  public readonly breadcrumbsAfter: InputSignal<number> = input(1);
  /** Translatable accessible name of the breadcrumb navigation. Defaults to Breadcrumbs. */
  public readonly breadcrumbLabel: InputSignal<ResolvableText> = input<ResolvableText>('Breadcrumbs');
  /** Breadcrumb overflow limit, translated action labels, hover behavior, and placement. Defaults to shared settings, then three visible entries. */
  public readonly breadcrumbConfig: InputSignal<IBreadcrumbTrailConfig> = input<IBreadcrumbTrailConfig>({});
}
