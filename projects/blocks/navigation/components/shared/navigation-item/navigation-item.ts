import type { InputSignal, Signal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '@filip.mazev/blocks/icons';
import { Tag, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';
import { NavigationStateService } from '@navigation/services/navigation-state.service';

@Component({
  selector: 'bx-navigation-item',
  imports: [NgTemplateOutlet, RouterLink, Icon, Tag, TooltipDirective],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'none' }
})
export class NavigationItem {
  protected readonly navigationStateService = inject(NavigationStateService);

  protected readonly active: Signal<boolean> = computed(() => this.navigationStateService.activeItem()?.id === this.item().id);
  protected readonly ancestor: Signal<boolean> = computed(
    () => this.horizontal() && !this.active() && this.navigationStateService.activeIds().has(this.item().id)
  );
  protected readonly current: Signal<boolean> = computed(() => this.navigationStateService.isCurrent(this.item()));
  protected readonly side: Signal<'left' | 'right'> = computed(() => (this.navigationStateService.config().side === 'right' ? 'left' : 'right'));
  protected readonly expanded: Signal<boolean> = computed(
    () =>
      (this.navigationStateService.inlineLevels() || this.navigationStateService.submenuVisible()) &&
      this.navigationStateService.trail().some((item) => item.id === this.item().id)
  );

  /** Navigation item rendered by this row. Required input. */
  public readonly item: InputSignal<INavigationItem> = input.required<INavigationItem>();
  /** Whether this navigation row uses the compact rail presentation. Defaults to `false`. */
  public readonly compact: InputSignal<boolean> = input(false);
  /** Whether this row participates in a horizontal navigation bar. Defaults to `false`. */
  public readonly horizontal: InputSignal<boolean> = input(false);
  /** Whether the row is rendered inside the current submenu level. Defaults to `false`. */
  public readonly inLevel: InputSignal<boolean> = input(false);
  /** Resolved navigation-row context for search paths and custom presentation. Defaults to `''`. */
  public readonly context: InputSignal<string> = input('');

  protected select(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    this.navigationStateService.select(this.item());
  }

  protected expand(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.item().data?.disabled) return;

    this.navigationStateService.expansionRequested.next({
      item: this.item(),
      origin: event.currentTarget as HTMLElement,
      keyboard: event instanceof KeyboardEvent || event.detail === 0,
      inLevel: this.inLevel()
    });
  }

  protected openOnArrow(event: KeyboardEvent): void {
    if (event.key === (this.horizontal() ? 'ArrowDown' : this.side() === 'right' ? 'ArrowRight' : 'ArrowLeft') && this.item().children?.length)
      this.expand(event);
  }
}
