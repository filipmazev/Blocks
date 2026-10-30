import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, InputField } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { SideNav, SideNavHeaderDirective, SideNavFooterDirective, ISideNavConfig, INavigationItem } from '@filip.mazev/blocks/navigation';
import { SIDE_NAV_DEMO_GROUPS, SIDE_NAV_ROUTE_EXAMPLE } from './constants/side-nav-examples.constants';
import { SideNavDemoI18nService } from './services/side-nav-demo-i18n.service';

@Component({
  selector: 'app-side-nav-examples',
  imports: [SideNav, SideNavHeaderDirective, SideNavFooterDirective, Button, Checkbox, InputField, Icon],
  providers: [SideNavDemoI18nService, { provide: BX_I18N, useExisting: SideNavDemoI18nService }],
  templateUrl: './side-nav-examples.html',
  styleUrl: './side-nav-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavExamples {
  protected readonly translations = inject(SideNavDemoI18nService);
  protected readonly groups = computed(() => {
    this.translations.version();
    return SIDE_NAV_DEMO_GROUPS.map((group) => ({
      ...group,
      title: this.translations.translate(`nav.${group.id}`),
      items: this.resolveDemoItems(group.items)
    }));
  });

  protected readonly text = computed(() => ({
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

  protected readonly routeExample = SIDE_NAV_ROUTE_EXAMPLE;
  protected readonly right = signal(false);
  protected readonly collapsed = signal(false);
  protected readonly mobile = signal(false);
  protected readonly adjacent = signal(false);
  protected readonly searchable = signal(true);
  protected readonly rtl = signal(false);
  protected readonly custom = signal(false);
  protected readonly height = signal<string | number | null>(420);
  protected readonly selected = signal<INavigationItem | undefined>(undefined);
  protected readonly selection = computed(() => {
    const item = this.selected();

    return item ? `${this.translations.translate(`nav.${item.id}`)} · ${item.id}` : this.translations.translate('demo.select');
  });

  protected readonly config = computed<ISideNavConfig>(() => ({
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

  //#region Helpers
  private resolveDemoItems(items: INavigationItem[]): INavigationItem[] {
    return items.map((item) => ({
      ...item,
      label: this.translations.translate(`nav.${item.id}`),
      data: {
        ...item.data,
        label: { key: `nav.${item.id}` },
        // Keep the documented English search example usable when switching languages.
        keywords: [...(item.data?.keywords ?? []), item.label]
      },
      children: this.resolveDemoItems(item.children ?? [])
    }));
  }
  //#endregion
}
