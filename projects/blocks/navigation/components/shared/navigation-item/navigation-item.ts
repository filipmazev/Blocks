import type { InputSignal, Signal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '@filip.mazev/blocks/icons';
import { Tag, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { NavigationStateService } from '@navigation/components/shared/services/navigation-state.service';
import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';

@Component({
  selector: 'bx-navigation-item',
  imports: [NgTemplateOutlet, RouterLink, Icon, Tag, TooltipDirective],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'none' }
})
export class NavigationItem {
  protected readonly state = inject(NavigationStateService);

  protected readonly active: Signal<boolean> = computed(() => this.state.activeItem()?.id === this.item().id);
  protected readonly ancestor: Signal<boolean> = computed(() => this.horizontal() && !this.active() && this.state.activeIds().has(this.item().id));
  protected readonly current: Signal<boolean> = computed(() => this.state.isCurrent(this.item()));
  protected readonly side: Signal<'left' | 'right'> = computed(() => (this.state.config().side === 'right' ? 'left' : 'right'));
  protected readonly expanded: Signal<boolean> = computed(
    () => (this.state.inlineLevels() || this.state.submenuVisible()) && this.state.trail().some((item) => item.id === this.item().id)
  );

  public readonly item: InputSignal<INavigationItem> = input.required<INavigationItem>();
  public readonly compact: InputSignal<boolean> = input(false);
  public readonly horizontal: InputSignal<boolean> = input(false);
  public readonly inLevel: InputSignal<boolean> = input(false);
  public readonly context: InputSignal<string> = input('');

  protected select(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    this.state.select(this.item());
  }

  protected expand(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.item().data?.disabled) return;

    this.state.expansionRequested.next({
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
