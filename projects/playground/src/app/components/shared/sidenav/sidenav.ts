import { ChangeDetectionStrategy, Component, computed, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNav, SideNavHeaderDirective, ISideNavConfig } from '@filip.mazev/blocks/navigation';
import { BlocksLogo } from './blocks-logo';

@Component({
  selector: 'app-sidenav',
  imports: [SideNav, SideNavHeaderDirective, RouterLink, BlocksLogo],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidenav {
  private readonly sideNav = viewChild(SideNav);
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
