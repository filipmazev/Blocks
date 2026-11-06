import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BLOCKS_RELEASE_CHANNEL } from '@filip.mazev/blocks';
import { Icon } from '@filip.mazev/blocks/icons';
import { INavigationTreeGroup, ISideNavConfig, NavigationService, SideNav, SideNavHeaderDirective } from '@filip.mazev/blocks/navigation';
import { Tag } from '@filip.mazev/blocks/primitives';

import { playgroundNavigationGroups } from '@playground/shared/helpers/playground-navigation.helpers';

import { BlocksLogo } from './blocks-logo';

@Component({
  selector: 'app-sidenav',
  imports: [SideNav, SideNavHeaderDirective, RouterLink, BlocksLogo, Tag, Icon],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidenav {
  private readonly navigationService = inject(NavigationService);

  private readonly sideNav: Signal<SideNav | undefined> = viewChild(SideNav);

  protected readonly releaseChannel: string = BLOCKS_RELEASE_CHANNEL;
  protected readonly releaseLabel: '' | 'Alpha' | 'Beta' = this.releaseChannel === 'alpha' ? 'Alpha' : this.releaseChannel === 'beta' ? 'Beta' : '';

  protected readonly brandLabel: Signal<string> = computed(() => `${this.title()}${this.releaseLabel ? ` ${this.releaseChannel}` : ''}`);
  protected readonly groups: Signal<INavigationTreeGroup[]> = computed(() => playgroundNavigationGroups(this.navigationService.menuTreeGroups()));
  protected readonly rootItemIds: Signal<ReadonlySet<string>> = computed(() => new Set(this.groups().flatMap((group) => group.items.map((item) => item.id))));

  protected readonly config: ISideNavConfig = {
    persistenceKey: 'blocks.playground.navigation.v1',
    ariaLabel: 'Playground navigation',
    collapsible: true,
    showMobileTrigger: false,
    showItemIcons: true
  };

  public readonly mobile: Signal<boolean> = computed(() => this.sideNav()?.isMobile() ?? false);
  public readonly open: Signal<boolean> = computed(() => this.sideNav()?.mobileOpen() ?? false);
  public readonly panelId: Signal<string | undefined> = computed(() => this.sideNav()?.panelId);

  public readonly title: InputSignal<string> = input.required<string>();

  public toggle(event: Event): void {
    this.sideNav()?.toggle(event);
  }
}
