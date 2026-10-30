import { NgTemplateOutlet } from '@angular/common';
import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, untracked, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BxA11yService } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { Menu, Tag, TooltipDirective, MenuTriggerDirective } from '@filip.mazev/blocks/primitives';
import { INavigationItem } from '../../../../interfaces/inavigation-item.interface';
import { SideNavStateService } from '../../services/side-nav-state.service';

@Component({
  selector: 'bx-side-nav-branch',
  imports: [NgTemplateOutlet, RouterLink, Icon, Menu, Tag, TooltipDirective, MenuTriggerDirective],
  templateUrl: './side-nav-branch.html',
  styleUrl: './side-nav-branch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'none' }
})
export class SideNavBranch {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly a11y = inject(BxA11yService);
  private readonly trigger = viewChild(MenuTriggerDirective);
  protected readonly state = inject(SideNavStateService);
  protected readonly active = computed(() => this.state.activeItem()?.id === this.item().id);
  protected readonly ancestor = computed(() => !this.active() && this.state.activeIds().has(this.item().id));
  protected readonly current = computed(() => this.state.isCurrent(this.item()));
  protected readonly side = computed(() => (this.state.config().side === 'right' ? 'left' : 'right'));
  protected readonly submenuOpen = computed(() => this.trigger()?.isOpen() ?? false);
  protected readonly highlighted = computed(() => this.state.target() === this.item().id);
  protected readonly animated = computed(() => !this.a11y.isReducedMotion());
  public readonly item = input.required<INavigationItem>();
  public readonly compact = input(false);
  public readonly parentTrigger = input<MenuTriggerDirective | undefined>(undefined);

  constructor() {
    afterRenderEffect(() => {
      const item = this.item();
      const reveal = this.state.revealPath().includes(item.id);
      const trigger = this.trigger();
      if (!reveal) return;

      untracked(() => {
        this.scrollIntoPanel();
        if (item.children?.length) trigger?.open();
      });
    });
  }

  protected select(): void {
    this.state.select(this.item());
  }

  protected hover(event: PointerEvent): void {
    if (event.pointerType !== 'touch' && !this.item().data?.disabled) this.trigger()?.open();
  }

  protected leave(): void {
    this.trigger()?.scheduleClose();
  }

  protected openOnArrow(event: KeyboardEvent): void {
    if (event.key !== (this.side() === 'right' ? 'ArrowRight' : 'ArrowLeft') || !this.item().children?.length) return;
    event.preventDefault();
    event.stopPropagation();
    this.trigger()?.open(true);
  }

  //#region Helpers
  private scrollIntoPanel(): void {
    const scroller = this.element.closest<HTMLElement>('.bx-side-nav-scroll, .bx-nav-flyout');

    if (!scroller) return;
    const row = this.element.getBoundingClientRect();
    const viewport = scroller.getBoundingClientRect();

    if (row.top < viewport.top) scroller.scrollTop += row.top - viewport.top;
    else if (row.bottom > viewport.bottom) scroller.scrollTop += row.bottom - viewport.bottom;
  }
  //#endregion
}
