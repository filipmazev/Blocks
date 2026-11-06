import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

import { BX_PAGE_NAVIGATION } from '@primitives/tokens/page-navigation.token';

@Component({
  selector: 'bx-page-header',
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeader {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly pageNavigation = inject(BX_PAGE_NAVIGATION, { optional: true });

  protected readonly resolvedSectionTitle: Signal<string> = computed(() =>
    resolveText(this.sectionTitle() ?? (this.autoResolveTitlesFromNavigation() ? this.pageNavigation?.().sectionTitle : undefined), this.i18n)
  );
  protected readonly resolvedPageTitle: Signal<string> = computed(() =>
    resolveText(this.pageTitle() ?? (this.autoResolveTitlesFromNavigation() ? this.pageNavigation?.().pageTitle : undefined), this.i18n)
  );
  protected readonly resolvedPageDescription: Signal<string> = computed(() => resolveText(this.pageDescription(), this.i18n));
  protected readonly level: Signal<number> = computed(() => Math.min(6, Math.max(1, Math.trunc(this.headingLevel()) || 1)));

  /** Optional label above the heading; accepts translation keys. Undefined uses navigation; an empty string hides it. */
  public readonly sectionTitle: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional heading text; accepts translation keys. Undefined uses navigation; an empty string hides it. */
  public readonly pageTitle: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional supporting text with translation support. Never inferred from navigation; omitted by default. */
  public readonly pageDescription: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Whether undefined title inputs use the optional navigation adapter. Defaults to true. */
  public readonly autoResolveTitlesFromNavigation: InputSignal<boolean> = input(true);
  /** Semantic heading level from 1 to 6; defaults to 1. Use 2 or greater for nested examples. */
  public readonly headingLevel: InputSignal<number> = input(1);
}
