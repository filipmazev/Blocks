import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BxA11yService } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { navigateMenuKey } from '@filip.mazev/blocks/primitives';
import { NavigationStateService } from '../services/navigation-state.service';
import { NavigationItem } from '../navigation-item/navigation-item';
import { INavigationLevelBreadcrumb } from '../interfaces/inavigation-level-breadcrumb.interface';
import { INavigationLevelRequest } from '../interfaces/inavigation-level-request.interface';

/** One reusable browsing level. Its owner decides whether it appears inline or in the shared overlay. */
@Component({
  selector: 'bx-navigation-level',
  imports: [RouterLink, Button, Icon, NavigationItem],
  templateUrl: './navigation-level.html',
  styleUrl: './navigation-level.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLevel {
  private readonly a11y = inject(BxA11yService);
  protected readonly state = inject(NavigationStateService);
  protected readonly frames = computed(() => [this.state.levelKey()]);
  protected readonly animated = computed(() => !this.a11y.isReducedMotion());
  public readonly back = output<MouseEvent | KeyboardEvent>();
  public readonly navigate = output<INavigationLevelRequest>();

  protected requestBack(event: MouseEvent | KeyboardEvent): void {
    this.back.emit(event);
  }

  protected requestLevel(breadcrumb: INavigationLevelBreadcrumb, event: MouseEvent): void {
    this.navigate.emit({ breadcrumb, keyboard: event.detail === 0 });
  }

  protected levelKey(event: KeyboardEvent): void {
    if (event.defaultPrevented) return;
    const backKey = this.state.config().side === 'right' ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === 'Escape' || event.key === backKey) this.back.emit(event);
  }

  protected menuKey(event: KeyboardEvent): void {
    const menu = (event.target as HTMLElement)?.closest<HTMLElement>('[role="menu"]');

    if (menu) navigateMenuKey(event, menu);
  }
}
