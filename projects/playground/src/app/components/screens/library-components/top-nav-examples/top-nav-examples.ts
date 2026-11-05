import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { INavigationTreeGroup } from '@navigation/interfaces/inavigation-tree-group.interface';
import type { ITopNavExamplesTextState } from '@playground/components/screens/library-components/top-nav-examples/interfaces/itop-nav-examples-text-state.interface';

import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { INavigationItem, ITopNavConfig, TopNav, TopNavActionsDirective, TopNavBrandDirective } from '@filip.mazev/blocks/navigation';

import { navigationDemoGroups } from '@playground/components/screens/library-components/shared/navigation-examples/helpers/navigation-examples.helpers';
import { NavigationDemoI18nService } from '@playground/components/screens/library-components/shared/navigation-examples/services/navigation-demo-i18n.service';

@Component({
  selector: 'app-top-nav-examples',
  imports: [RouterLink, TopNav, TopNavBrandDirective, TopNavActionsDirective, Button, Checkbox, InputField, Select, Icon],
  providers: [NavigationDemoI18nService, { provide: BX_I18N, useExisting: NavigationDemoI18nService }],
  templateUrl: './top-nav-examples.html',
  styleUrl: './top-nav-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavExamples {
  protected readonly navigationDemoI18nService = inject(NavigationDemoI18nService);

  protected readonly groups: Signal<INavigationTreeGroup[]> = computed(() => {
    const groups = navigationDemoGroups('/components/top-nav', this.navigationDemoI18nService);

    return groups.map((group) =>
      group.id !== 'workspace'
        ? group
        : {
            ...group,
            items: group.items
              .filter((item) => item.id === 'overview' || item.id === 'projects')
              .map((item) =>
                item.id !== 'projects'
                  ? item
                  : {
                      ...item,
                      children: [...(item.children ?? []), ...group.items.filter((child) => child.id === 'reports' || child.id === 'disabled')]
                    }
              )
          }
    );
  });

  protected readonly compact: WritableSignal<boolean> = signal(false);
  protected readonly searchable: WritableSignal<boolean> = signal(true);
  protected readonly icons: WritableSignal<boolean> = signal(false);
  protected readonly sticky: WritableSignal<boolean> = signal(false);
  protected readonly rtl: WritableSignal<boolean> = signal(false);
  protected readonly custom: WritableSignal<boolean> = signal(false);
  protected readonly actions: WritableSignal<boolean> = signal(false);

  protected readonly width: WritableSignal<string | number | null> = signal<string | number | null>(1100);

  protected readonly selected: WritableSignal<INavigationItem | undefined> = signal<INavigationItem | undefined>(undefined);
  protected readonly action: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  protected readonly text: Signal<ITopNavExamplesTextState> = computed(() => ({
    compact: this.navigationDemoI18nService.translate('top.compact'),
    width: this.navigationDemoI18nService.translate('top.width'),
    icons: this.navigationDemoI18nService.translate('top.icons'),
    sticky: this.navigationDemoI18nService.translate('top.sticky'),
    custom: this.navigationDemoI18nService.translate('top.custom'),
    actions: this.navigationDemoI18nService.translate('top.actions'),
    search: this.navigationDemoI18nService.translate('demo.search'),
    rtl: this.navigationDemoI18nService.translate('demo.rtl'),
    language: this.navigationDemoI18nService.translate('demo.language'),
    brand: this.navigationDemoI18nService.translate('demo.studio'),
    title: this.navigationDemoI18nService.translate('top.title'),
    description: this.navigationDemoI18nService.translate('top.description'),
    compactMode: this.navigationDemoI18nService.translate('top.modeCompact'),
    expandedMode: this.navigationDemoI18nService.translate('top.modeExpanded'),
    settings: this.navigationDemoI18nService.translate('top.settings'),
    help: this.navigationDemoI18nService.translate('top.help')
  }));
  protected readonly selection: Signal<string> = computed(() => {
    const item = this.selected();
    const action = this.action();

    return action
      ? this.navigationDemoI18nService.translate(action)
      : item
        ? `${this.navigationDemoI18nService.translate(`nav.${item.id}`)} · ${item.id}`
        : this.navigationDemoI18nService.translate('demo.select');
  });
  protected readonly config: Signal<ITopNavConfig> = computed<ITopNavConfig>(() => ({
    position: this.sticky() ? 'sticky' : 'inline',
    compactBreakpoint: 'sm',
    compact: this.compact() ? true : undefined,
    searchable: this.searchable(),
    showItemIcons: this.icons(),
    showSectionIcons: this.icons(),
    ariaLabel: { key: 'top.name' },
    searchLabel: { key: 'nav.search' },
    searchPlaceholder: { key: 'top.searchPlaceholder' },
    clearSearchLabel: { key: 'nav.clear' },
    emptyText: { key: 'nav.empty' },
    openLabel: { key: 'nav.open' },
    closeLabel: { key: 'nav.close' },
    submenuLabel: { key: 'nav.submenu' },
    resultLabel: { key: 'nav.result' },
    backLabel: { key: 'nav.back' },
    pathLabel: { key: 'nav.path' }
  }));

  protected select(item: INavigationItem): void {
    this.action.set(undefined);
    this.selected.set(item);
  }
}
