import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';
import { SideNav } from '../side-nav';
import { ISideNavSlotContext } from '../interfaces/iside-nav-slot-context.interface';

/** Registers an ng-template with the containing side-nav, following the modal slot contract. */
@Directive({ selector: '[bxSideNavHeader]' })
export class SideNavHeaderDirective {
  private readonly template = inject<TemplateRef<ISideNavSlotContext>>(TemplateRef);
  private readonly nav = inject(SideNav);

  constructor() {
    this.nav.setHeaderTemplate(this.template);
    inject(DestroyRef).onDestroy(() => this.nav.setHeaderTemplate(null));
  }

  public static ngTemplateContextGuard(_directive: SideNavHeaderDirective, _context: unknown): _context is ISideNavSlotContext {
    return true;
  }
}
