import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';

import { SideNav } from '@navigation/components/side-nav/side-nav';
import { ISideNavSlotContext } from '@navigation/interfaces/iside-nav-slot-context.interface';

/** Registers an ng-template with the containing side-nav, following the modal slot contract. */
@Directive({ selector: '[bxSideNavHeader]' })
export class SideNavHeaderDirective {
  private readonly templateRef = inject<TemplateRef<ISideNavSlotContext>>(TemplateRef);
  private readonly sideNav = inject(SideNav);

  constructor() {
    this.sideNav.setHeaderTemplate(this.templateRef);
    inject(DestroyRef).onDestroy(() => this.sideNav.setHeaderTemplate(null));
  }

  /**
   * Narrow a projected template context to the slot contract understood by Angular template checking.
   *
   * @param _directive - Owning slot directive used by Angular to select the template-context contract.
   * @param _context - Untrusted template context narrowed to the directive's declared slot context.
   */
  public static ngTemplateContextGuard(_directive: SideNavHeaderDirective, _context: unknown): _context is ISideNavSlotContext {
    return true;
  }
}
