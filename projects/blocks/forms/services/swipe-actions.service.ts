import { Injectable } from '@angular/core';

/** Coordinates one exposed swipe row, including rows in separate or nested menus. */
@Injectable({ providedIn: 'root' })
export class SwipeActionsService {
  private owner: object | undefined;
  private dismiss: (() => void) | undefined;

  /**
   * Claim the active row and roll back any previously owned gesture.
   * @param owner - Stable directive identity.
   * @param dismiss - Cleanup called when another row claims ownership.
   */
  public activate(owner: object, dismiss: () => void): void {
    if (this.owner !== owner) this.dismiss?.();

    this.owner = owner;
    this.dismiss = dismiss;
  }

  /**
   * Release ownership after closure or teardown without affecting another row.
   * @param owner - Directive closing its own surface.
   */
  public release(owner: object): void {
    if (this.owner !== owner) return;

    this.owner = undefined;
    this.dismiss = undefined;
  }
}
