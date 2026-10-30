import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BxA11yService } from '@filip.mazev/blocks/core';
import { SideNavGuideDirective } from '../../directives/side-nav-guide.directive';
import { Icon } from '@filip.mazev/blocks/icons';
import { Tag, TooltipDirective } from '@filip.mazev/blocks/primitives';
import { INavigationItem } from '../../../../interfaces/inavigation-item.interface';
import { SideNavStateService } from '../../services/side-nav-state.service';

@Component({
  selector: 'bx-side-nav-branch',
  imports: [NgTemplateOutlet, RouterLink, Icon, Tag, TooltipDirective, SideNavGuideDirective],
  templateUrl: './side-nav-branch.html',
  styleUrl: './side-nav-branch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'none' }
})
export class SideNavBranch {
  private readonly a11y = inject(BxA11yService);
  protected readonly animated = computed(() => !this.a11y.isReducedMotion());
  protected readonly state = inject(SideNavStateService);
  protected readonly active = computed(() => this.state.activeItem()?.id === this.item().id);
  protected readonly current = computed(() => this.state.isCurrent(this.item()));
  protected readonly side = computed(() => (this.state.config().side === 'right' ? 'left' : 'right'));
  protected readonly expanded = computed(
    () => (this.state.inlineLevels() || this.state.submenuVisible()) && this.state.trail().some((item) => item.id === this.item().id)
  );

  protected readonly highlighted = computed(() => this.state.target() === this.item().id);
  public readonly item = input.required<INavigationItem>();
  public readonly compact = input(false);
  public readonly inLevel = input(false);
  public readonly context = input('');

  protected select(): void {
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
    if (event.key === (this.side() === 'right' ? 'ArrowRight' : 'ArrowLeft') && this.item().children?.length) this.expand(event);
  }
}
