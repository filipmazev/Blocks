import { Injectable } from '@angular/core';

import type { MenuTriggerDirective } from '@primitives/directives/menu-trigger/menu-trigger.directive';

/** Coordinates a single open menu path, allowing arbitrary nesting without sibling overlays accumulating. */
@Injectable({ providedIn: 'root' })
export class MenuCascadeService {
  private readonly entries: Set<MenuTriggerDirective> = new Set<MenuTriggerDirective>();

  /**
   * Register an opened menu and close unrelated sibling branches while retaining its ancestors.
   *
   * @param trigger - Menu trigger becoming active in the coordinated open path.
   */
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

  /**
   * Remove a closed or destroyed menu from the coordinated open path.
   *
   * @param trigger - Menu trigger to unregister.
   */
  public remove(trigger: MenuTriggerDirective): void {
    this.entries.delete(trigger);
  }

  /**
   * Close the direct child menus of a trigger, allowing their own cleanup to close descendants.
   *
   * @param trigger - Parent trigger whose child branches should close.
   */
  public closeChildren(trigger: MenuTriggerDirective): void {
    for (const entry of [...this.entries]) {
      if (entry.menuParent() === trigger) entry.close();
    }
  }

  /**
   * Return whether a target belongs to a trigger or any of its open descendant menus.
   *
   * @param trigger - Root trigger whose owned menu branch is searched.
   * @param target - DOM node to check against the trigger and its open descendant overlays.
   */
  public contains(trigger: MenuTriggerDirective, target: Node): boolean {
    return trigger.contains(target) || [...this.entries].some((entry) => entry.menuParent() === trigger && this.contains(entry, target));
  }

  /** Return whether the cascade currently contains an open menu. */
  public hasOpenMenus(): boolean {
    return this.entries.size > 0;
  }

  /**
   * Refresh positioning of open child menus after their parent's geometry changes.
   *
   * @param trigger - Parent trigger whose direct child overlays should reposition.
   */
  public repositionChildren(trigger: MenuTriggerDirective): void {
    for (const entry of [...this.entries]) {
      if (entry.menuParent() === trigger) entry.reposition();
    }
  }

  /**
   * Close the root menu and its descendant path, optionally restoring focus to its opening control.
   *
   * @param restoreFocus - Whether the root trigger should regain focus after the open path closes. Defaults to `false`.
   */
  public closeAll(restoreFocus = false): void {
    const root = [...this.entries].find((entry) => !entry.menuParent());

    root?.close(restoreFocus);
  }
}
