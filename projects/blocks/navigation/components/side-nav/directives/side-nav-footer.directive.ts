import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';
import { SideNav } from '../side-nav';
import { ISideNavSlotContext } from '../interfaces/iside-nav-slot-context.interface';

/** Registers an ng-template with the containing side-nav, following the modal slot contract. */
@Directive({ selector: '[bxSideNavFooter]' })
export class SideNavFooterDirective {
  private readonly template = inject<TemplateRef<ISideNavSlotContext>>(TemplateRef);
  private readonly nav = inject(SideNav);

  constructor() {
    this.nav.setFooterTemplate(this.template);
    inject(DestroyRef).onDestroy(() => this.nav.setFooterTemplate(null));
  }

  public static ngTemplateContextGuard(_directive: SideNavFooterDirective, _context: unknown): _context is ISideNavSlotContext {
    return true;
  }
}
