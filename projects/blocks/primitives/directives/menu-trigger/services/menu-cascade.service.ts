import { Injectable } from '@angular/core';
import type { MenuTriggerDirective } from '../menu-trigger.directive';

/** Coordinates a single open menu path, allowing arbitrary nesting without sibling overlays accumulating. */
@Injectable({ providedIn: 'root' })
export class MenuCascadeService {
  private readonly entries = new Set<MenuTriggerDirective>();

  public activate(trigger: MenuTriggerDirective): void {
    const ancestors = new Set<MenuTriggerDirective>();
    let parent = trigger.menuParent();

    while (parent) {
      ancestors.add(parent);
      parent = parent.menuParent();
    }

    for (const entry of [...this.entries]) {
      if (!ancestors.has(entry) && entry !== trigger) entry.close();
    }

    this.entries.add(trigger);
  }

  public remove(trigger: MenuTriggerDirective): void {
    this.entries.delete(trigger);
  }

  public closeChildren(trigger: MenuTriggerDirective): void {
    for (const entry of [...this.entries]) {
      if (entry.menuParent() === trigger) entry.close();
    }
  }

  public contains(trigger: MenuTriggerDirective, target: Node): boolean {
    return trigger.contains(target) || [...this.entries].some((entry) => entry.menuParent() === trigger && this.contains(entry, target));
  }

  public hasOpenMenus(): boolean {
    return this.entries.size > 0;
  }

  public repositionChildren(trigger: MenuTriggerDirective): void {
    for (const entry of [...this.entries]) {
      if (entry.menuParent() === trigger) entry.reposition();
    }
  }

  public closeAll(restoreFocus = false): void {
    const root = [...this.entries].find((entry) => !entry.menuParent());
    root?.close(restoreFocus);
  }
}
