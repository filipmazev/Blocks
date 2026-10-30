import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  protected readonly config: ISideNavConfig = {
    persistenceKey: 'blocks.playground.navigation.v1',
    ariaLabel: 'Component documentation',
    collapsible: false,
    showItemIcons: false,
    showSectionIcons: false
  };

  public readonly title = input.required<string>();
}
