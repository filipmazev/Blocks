import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { INavigationItem, ITopNavConfig, TopNav, TopNavBrandDirective, TopNavActionsDirective } from '@filip.mazev/blocks/navigation';
import { NavigationDemoI18nService } from '../shared/navigation-examples/services/navigation-demo-i18n.service';
import { navigationDemoGroups } from '../shared/navigation-examples/helpers/navigation-examples.helpers';

@Component({
  selector: 'app-top-nav-examples',
  imports: [RouterLink, TopNav, TopNavBrandDirective, TopNavActionsDirective, Button, Checkbox, InputField, Select, Icon],
  providers: [NavigationDemoI18nService, { provide: BX_I18N, useExisting: NavigationDemoI18nService }],
  templateUrl: './top-nav-examples.html',
  styleUrl: './top-nav-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavExamples {
  protected readonly translations = inject(NavigationDemoI18nService);
  protected readonly groups = computed(() => {
    const groups = navigationDemoGroups('/components/top-nav', this.translations);

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

  protected readonly compact = signal(false);
  protected readonly searchable = signal(true);
  protected readonly icons = signal(false);
  protected readonly sticky = signal(false);
  protected readonly rtl = signal(false);
  protected readonly custom = signal(false);
  protected readonly actions = signal(false);
  protected readonly width = signal<string | number | null>(1100);
  protected readonly selected = signal<INavigationItem | undefined>(undefined);
  protected readonly action = signal<string | undefined>(undefined);
  protected readonly text = computed(() => ({
    compact: this.translations.translate('top.compact'),
    width: this.translations.translate('top.width'),
    icons: this.translations.translate('top.icons'),
    sticky: this.translations.translate('top.sticky'),
    custom: this.translations.translate('top.custom'),
    actions: this.translations.translate('top.actions'),
    search: this.translations.translate('demo.search'),
    rtl: this.translations.translate('demo.rtl'),
    language: this.translations.translate('demo.language'),
    brand: this.translations.translate('demo.studio'),
    title: this.translations.translate('top.title'),
    description: this.translations.translate('top.description'),
    compactMode: this.translations.translate('top.modeCompact'),
    expandedMode: this.translations.translate('top.modeExpanded'),
    settings: this.translations.translate('top.settings'),
    help: this.translations.translate('top.help')
  }));

  protected readonly selection = computed(() => {
    const item = this.selected();
    const action = this.action();

    return action
      ? this.translations.translate(action)
      : item
        ? `${this.translations.translate(`nav.${item.id}`)} · ${item.id}`
        : this.translations.translate('demo.select');
  });

  protected readonly config = computed<ITopNavConfig>(() => ({
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
