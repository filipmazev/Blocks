import type { OutputEmitterRef, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { navigateMenuKey } from '@filip.mazev/blocks/primitives';

import { NavigationItem } from '@navigation/components/shared/navigation-item/navigation-item';
import { INavigationLevelBreadcrumb } from '@navigation/interfaces/inavigation-level-breadcrumb.interface';
import { INavigationLevelRequest } from '@navigation/interfaces/inavigation-level-request.interface';
import { NavigationStateService } from '@navigation/services/navigation-state.service';

/** One reusable browsing level. Its owner decides whether it appears inline or in the shared overlay. */
@Component({
  selector: 'bx-navigation-level',
  imports: [RouterLink, Button, Icon, NavigationItem],
  templateUrl: './navigation-level.html',
  styleUrl: './navigation-level.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLevel {
  private readonly bxA11yService = inject(BxA11yService);

  protected readonly navigationStateService = inject(NavigationStateService);

  protected readonly frames: Signal<string[]> = computed(() => [this.navigationStateService.levelKey()]);
  protected readonly animated: Signal<boolean> = computed(() => !this.bxA11yService.isReducedMotion());

  /** Emits an interaction requesting the preceding navigation level. */
  public readonly back: OutputEmitterRef<MouseEvent | KeyboardEvent> = output<MouseEvent | KeyboardEvent>();
  /** Emits the breadcrumb and keyboard context of a requested ancestor navigation level. */
  public readonly navigate: OutputEmitterRef<INavigationLevelRequest> = output<INavigationLevelRequest>();

  protected requestBack(event: MouseEvent | KeyboardEvent): void {
    this.back.emit(event);
  }

  protected requestLevel(breadcrumb: INavigationLevelBreadcrumb, event: MouseEvent): void {
    this.navigate.emit({ breadcrumb, keyboard: event.detail === 0 });
  }

  protected levelKey(event: KeyboardEvent): void {
    if (event.defaultPrevented) return;

    const backKey = this.navigationStateService.config().side === 'right' ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === 'Escape' || event.key === backKey) this.back.emit(event);
  }

  protected menuKey(event: KeyboardEvent): void {
    const menu = (event.target as HTMLElement)?.closest<HTMLElement>('[role="menu"]');

    if (menu) navigateMenuKey(event, menu);
  }
}
