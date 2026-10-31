import { ChangeDetectionStrategy, Component, computed, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOCKS_RELEASE_CHANNEL } from '@filip.mazev/blocks';
import { SideNav, SideNavHeaderDirective, ISideNavConfig } from '@filip.mazev/blocks/navigation';
import { Tag } from '@filip.mazev/blocks/primitives';
import { BlocksLogo } from './blocks-logo';

@Component({
  selector: 'app-sidenav',
  imports: [SideNav, SideNavHeaderDirective, RouterLink, BlocksLogo, Tag],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidenav {
  private readonly sideNav = viewChild(SideNav);
  protected readonly releaseChannel: string = BLOCKS_RELEASE_CHANNEL;
  protected readonly brandLabel = computed(() => `${this.title()}${this.releaseChannel === 'beta' ? ' beta' : ''}`);
  protected readonly config: ISideNavConfig = {
    persistenceKey: 'blocks.playground.navigation.v1',
    ariaLabel: 'Component documentation',
    collapsible: false,
    showMobileTrigger: false,
    showItemIcons: false,
    showSectionIcons: false
  };

  public readonly mobile = computed(() => this.sideNav()?.isMobile() ?? false);
  public readonly open = computed(() => this.sideNav()?.mobileOpen() ?? false);
  public readonly panelId = computed(() => this.sideNav()?.panelId);

  public readonly title = input.required<string>();

  public toggle(event: Event): void {
    this.sideNav()?.toggle(event);
  }
}
