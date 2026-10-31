import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';
import { TopNav } from '../top-nav';
import { ITopNavSlotContext } from '../interfaces/itop-nav-slot-context.interface';

/** Registers the top navigation's brand slot without exposing implementation elements. */
@Directive({ selector: '[bxTopNavBrand]' })
export class TopNavBrandDirective {
  private readonly template = inject<TemplateRef<ITopNavSlotContext>>(TemplateRef);
  private readonly navigation = inject(TopNav);

  constructor() {
    this.navigation.setBrandTemplate(this.template);
    inject(DestroyRef).onDestroy(() => this.navigation.setBrandTemplate(null));
  }

  public static ngTemplateContextGuard(_directive: TopNavBrandDirective, _context: unknown): _context is ITopNavSlotContext {
    return true;
  }
}
