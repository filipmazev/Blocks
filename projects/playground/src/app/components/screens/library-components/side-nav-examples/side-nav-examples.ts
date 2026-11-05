import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import type { INavigationTreeGroup } from '@navigation/interfaces/inavigation-tree-group.interface';
import type { ISideNavExamplesTextState } from '@playground/components/screens/library-components/side-nav-examples/interfaces/iside-nav-examples-text-state.interface';

import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { INavigationItem, ISideNavConfig, SideNav, SideNavFooterDirective, SideNavHeaderDirective } from '@filip.mazev/blocks/navigation';

import { navigationDemoGroups } from '@playground/components/screens/library-components/shared/navigation-examples/helpers/navigation-examples.helpers';
import { SIDE_NAV_ROUTE_EXAMPLE } from '@playground/components/screens/library-components/side-nav-examples/constants/side-nav-examples.constants';
import { SideNavDemoI18nService } from '@playground/components/screens/library-components/side-nav-examples/services/side-nav-demo-i18n.service';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-side-nav-examples',
  imports: [Highlight, SideNav, SideNavHeaderDirective, SideNavFooterDirective, Button, Checkbox, InputField, Select, Icon],
  providers: [SideNavDemoI18nService, { provide: BX_I18N, useExisting: SideNavDemoI18nService }],
  templateUrl: './side-nav-examples.html',
  styleUrl: './side-nav-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavExamples {
  protected readonly translations = inject(SideNavDemoI18nService);

  protected readonly groups: Signal<INavigationTreeGroup[]> = computed(() => navigationDemoGroups('/components/side-nav', this.translations));
  protected readonly text: Signal<ISideNavExamplesTextState> = computed(() => ({
    right: this.translations.translate('demo.right'),
    rail: this.translations.translate('demo.rail'),
    mobile: this.translations.translate('demo.mobile'),
    adjacent: this.translations.translate('demo.adjacent'),
    inlineMode: this.translations.translate('demo.inlineMode'),
    flyoutMode: this.translations.translate('demo.flyoutMode'),
    search: this.translations.translate('demo.search'),
    rtl: this.translations.translate('demo.rtl'),
    custom: this.translations.translate('demo.custom'),
    height: this.translations.translate('demo.height'),
    language: this.translations.translate('demo.language'),
    instructions: this.translations.translate('demo.instructions'),
    studio: this.translations.translate('demo.studio'),
    admin: this.translations.translate('demo.admin'),
    title: this.translations.translate('demo.title'),
    description: this.translations.translate('demo.description'),
    open: this.translations.translate('demo.open'),
    keyboard: this.translations.translate('demo.keyboard'),
    routes: this.translations.translate('demo.routes')
  }));

  protected readonly routeExample: "const navigation = defineNavigation({\n  sections: [{ id: 'workspace', title: 'Workspace', icon: { name: 'building-2' },\n    collapsible: true, showInBreadcrumbs: true }],\n  sideNav: { side: 'left', persistenceKey: 'my-app.navigation' }\n});\nconst { withInAppNavigation } = navigation;\nexport const routes: Routes = [withInAppNavigation({ path: 'projects', children: [\n  withInAppNavigation({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) },\n    { label: { key: 'nav.tokens' }, icon: { name: 'swatch-book' },\n      keywords: ['palette'], tags: [{ text: 'New' }], showInBreadcrumbs: false })\n]}, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })];\n// In application providers:\nprovideRouter(routes), provideNavigation(navigation.config)\n// In your shell: <bx-side-nav />" =
    SIDE_NAV_ROUTE_EXAMPLE;

  protected readonly right: WritableSignal<boolean> = signal(false);
  protected readonly collapsed: WritableSignal<boolean> = signal(false);
  protected readonly mobile: WritableSignal<boolean> = signal(false);
  protected readonly adjacent: WritableSignal<boolean> = signal(false);
  protected readonly searchable: WritableSignal<boolean> = signal(true);
  protected readonly rtl: WritableSignal<boolean> = signal(false);
  protected readonly custom: WritableSignal<boolean> = signal(false);

  protected readonly height: WritableSignal<string | number | null> = signal<string | number | null>(420);

  protected readonly selected: WritableSignal<INavigationItem | undefined> = signal<INavigationItem | undefined>(undefined);

  protected readonly selection: Signal<string> = computed(() => {
    const item = this.selected();

    return item ? `${this.translations.translate(`nav.${item.id}`)} · ${item.id}` : this.translations.translate('demo.select');
  });
  protected readonly config: Signal<ISideNavConfig> = computed<ISideNavConfig>(() => ({
    position: 'inline',
    showMobileTrigger: false,
    side: this.right() ? 'right' : 'left',
    mobile: this.mobile(),
    submenuMode: this.adjacent() ? 'flyout' : 'auto',
    searchable: this.searchable(),
    persistenceKey: 'blocks.side-nav.demo.v1',
    ariaLabel: { key: 'nav.name' },
    searchLabel: { key: 'nav.search' },
    searchPlaceholder: { key: 'nav.placeholder' },
    clearSearchLabel: { key: 'nav.clear' },
    emptyText: { key: 'nav.empty' },
    openLabel: { key: 'nav.open' },
    closeLabel: { key: 'nav.close' },
    collapseLabel: { key: 'nav.collapse' },
    expandLabel: { key: 'nav.expand' },
    submenuLabel: { key: 'nav.submenu' },
    resultLabel: { key: 'nav.result' },
    backLabel: { key: 'nav.back' },
    pathLabel: { key: 'nav.path' }
  }));

  protected select(item: INavigationItem): void {
    this.selected.set(item);
  }
}
