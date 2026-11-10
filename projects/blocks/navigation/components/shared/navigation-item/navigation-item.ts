import type { InputSignal, Signal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IBreadcrumbTrailItem } from '@filip.mazev/blocks/primitives';

import { Icon } from '@filip.mazev/blocks/icons';
import { BreadcrumbTrail, Tag, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';
import { NavigationStateService } from '@navigation/services/navigation-state.service';

@Component({
  selector: 'bx-navigation-item',
  imports: [NgTemplateOutlet, RouterLink, Icon, Tag, TooltipDirective, BreadcrumbTrail],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'none', '[style.--bx-nav-item-icon-size.px]': 'leadingIconSize()' }
})
export class NavigationItem {
  protected readonly navigationStateService = inject(NavigationStateService);

  protected readonly active: Signal<boolean> = computed(() => {
    if (this.compact()) {
      const root = this.navigationStateService.trail()[0];

      return root ? root.id === this.item().id : !this.navigationStateService.hasLevel() && this.navigationStateService.activeIds().has(this.item().id);
    }

    return this.navigationStateService.activeItem()?.id === this.item().id;
  });
  protected readonly ancestor: Signal<boolean> = computed(
    () => this.horizontal() && !this.active() && this.navigationStateService.activeIds().has(this.item().id)
  );
  protected readonly current: Signal<boolean> = computed(() => this.navigationStateService.isCurrent(this.item()));
  protected readonly leadingIconSize: Signal<number> = computed(() => Number(this.item().icon?.size ?? this.item().data?.icon?.size ?? 20));
  protected readonly hasContext: Signal<boolean> = computed(() => !!this.context() || this.contextItems().length > 0);
  protected readonly side: Signal<'left' | 'right'> = computed(() => (this.navigationStateService.config().side === 'right' ? 'left' : 'right'));
  protected readonly expanded: Signal<boolean> = computed(
    () =>
      !this.compact() &&
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
  /** Whether this row is a flat search result; iconless results use normal text padding instead of a reserved icon column. Defaults to `false`. */
  public readonly searchResult: InputSignal<boolean> = input(false);
  /** Resolved navigation-row context for search paths and custom presentation. Defaults to `''`. */
  public readonly context: InputSignal<string> = input('');
  /** Optional structured search-result context. Descriptive labels and hidden-path tooltips remain inside the result's native page link. */
  public readonly contextItems: InputSignal<readonly IBreadcrumbTrailItem[]> = input<readonly IBreadcrumbTrailItem[]>([]);

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
