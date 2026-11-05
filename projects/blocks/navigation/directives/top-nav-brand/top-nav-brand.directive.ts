import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';

import { TopNav } from '@navigation/components/top-nav/top-nav';
import { ITopNavSlotContext } from '@navigation/interfaces/itop-nav-slot-context.interface';

/** Registers the top navigation's brand slot without exposing implementation elements. */
@Directive({ selector: '[bxTopNavBrand]' })
export class TopNavBrandDirective {
  private readonly templateRef = inject<TemplateRef<ITopNavSlotContext>>(TemplateRef);
  private readonly topNav = inject(TopNav);

  constructor() {
    this.topNav.setBrandTemplate(this.templateRef);
    inject(DestroyRef).onDestroy(() => this.topNav.setBrandTemplate(null));
  }

  /**
   * Narrow a projected template context to the slot contract understood by Angular template checking.
   *
   * @param _directive - Owning slot directive used by Angular to select the template-context contract.
   * @param _context - Untrusted template context narrowed to the directive's declared slot context.
   */
  public static ngTemplateContextGuard(_directive: TopNavBrandDirective, _context: unknown): _context is ITopNavSlotContext {
    return true;
  }
}
