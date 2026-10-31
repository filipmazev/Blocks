import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';
import { TopNav } from '../top-nav';
import { ITopNavSlotContext } from '../interfaces/itop-nav-slot-context.interface';

/** Registers the top navigation's actions slot without exposing implementation elements. */
@Directive({ selector: '[bxTopNavActions]' })
export class TopNavActionsDirective {
  private readonly template = inject<TemplateRef<ITopNavSlotContext>>(TemplateRef);
  private readonly navigation = inject(TopNav);

  constructor() {
    this.navigation.setActionsTemplate(this.template);
    inject(DestroyRef).onDestroy(() => this.navigation.setActionsTemplate(null));
  }

  public static ngTemplateContextGuard(_directive: TopNavActionsDirective, _context: unknown): _context is ITopNavSlotContext {
    return true;
  }
}
