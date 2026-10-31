import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '@filip.mazev/blocks/icons';
import { Tag, TooltipDirective } from '@filip.mazev/blocks/primitives';
import { INavigationItem } from '../../../interfaces/inavigation-item.interface';
import { NavigationStateService } from '../services/navigation-state.service';

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
  protected readonly active = computed(() => this.state.activeItem()?.id === this.item().id);
  protected readonly ancestor = computed(() => this.horizontal() && !this.active() && this.state.activeIds().has(this.item().id));
  protected readonly current = computed(() => this.state.isCurrent(this.item()));
  protected readonly side = computed(() => (this.state.config().side === 'right' ? 'left' : 'right'));
  protected readonly expanded = computed(
    () => (this.state.inlineLevels() || this.state.submenuVisible()) && this.state.trail().some((item) => item.id === this.item().id)
  );

  public readonly item = input.required<INavigationItem>();
  public readonly compact = input(false);
  public readonly horizontal = input(false);
  public readonly inLevel = input(false);
  public readonly context = input('');

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
