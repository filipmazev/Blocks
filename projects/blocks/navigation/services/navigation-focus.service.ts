import { FocusMonitor } from '@angular/cdk/a11y';
import { DOCUMENT, inject, Injectable } from '@angular/core';

import { uuidv4 } from '@filip.mazev/blocks/core';

import { INavigationLevelPosition } from '@navigation/interfaces/inavigation-level-position.interface';

import { NavigationStateService } from './navigation-state.service';

/** Scoped focus and scroll bookmarks shared by side and top navigation. Owners schedule calls after rendering. */
@Injectable()
export class NavigationFocusService {
  private readonly document = inject(DOCUMENT);
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly navigationStateService = inject(NavigationStateService);

  private readonly positions: Map<string, INavigationLevelPosition> = new Map<string, INavigationLevelPosition>();

  /** Stable identifier of the root navigation scroll area used to restore browsing position. */
  public readonly rootScrollId: string = `bx-navigation-root-${uuidv4()}`;

  /**
   * Save the active navigation list's scroll and focused-row context before changing levels.
   *
   * @param origin - Optional interaction origin; omission uses the active navigation scroller and current focused element.
   */
  public remember(origin?: HTMLElement): void {
    const scroller = origin?.closest<HTMLElement>('[data-bx-nav-scroll]') ?? this.activeScroller();

    if (!scroller) return;

    const element = origin ?? (this.document.activeElement as HTMLElement | null);
    const row = element?.closest<HTMLElement>('[data-nav-id]');
    const section = element?.closest<HTMLElement>('[data-section-id]');

    this.positions.set(this.positionKey(scroller), {
      scrollTop: scroller.scrollTop,
      itemId: row?.getAttribute('data-nav-id') ?? undefined,
      sectionId: section?.getAttribute('data-section-id') ?? undefined,
      disclosure: !!element?.closest('.bx-nav-disclosure') || (!!row && !element?.closest('.bx-nav-link'))
    });
  }

  /**
   * Restore or reset list scroll position, reveal a selected row, and optionally restore row focus after rendering.
   *
   * @param restore - Whether to use the saved browsing position instead of starting at the top.
   * @param keyboard - Whether restored focus should use keyboard-origin focus styling.
   * @param focus - Whether to move focus after restoring the list's scroll position.
   */
  public restore(restore: boolean, keyboard: boolean, focus: boolean): void {
    const scroller = this.activeScroller();

    if (!scroller) return;

    const position = restore ? this.positions.get(this.positionKey(scroller)) : undefined;

    scroller.scrollTop = position?.scrollTop ?? 0;

    const revealId = this.navigationStateService.query().trim() ? undefined : this.navigationStateService.revealItemId();
    const rows = Array.from(scroller.querySelectorAll<HTMLElement>('[data-nav-id]'));
    const revealed = revealId ? rows.find((element) => element.getAttribute('data-nav-id') === revealId) : undefined;

    if (revealed) {
      const bounds = scroller.getBoundingClientRect();
      const rowBounds = revealed.getBoundingClientRect();
      const top = bounds.top + scroller.clientTop;
      const bottom = top + scroller.clientHeight;

      // Scroll only this list. scrollIntoView can move the page or a clipped inline drawer during its slide.
      if (rowBounds.top < top) scroller.scrollTop += rowBounds.top - top;
      else if (rowBounds.bottom > bottom) scroller.scrollTop += Math.min(rowBounds.top - top, rowBounds.bottom - bottom);

      // Keep the target pending while a closed mobile drawer has no measurable list.
      if (scroller.clientHeight > 0) {
        this.positions.set(this.positionKey(scroller), { scrollTop: scroller.scrollTop, itemId: revealId, disclosure: false });
        this.navigationStateService.revealItemId.set(undefined);
      }
    }

    if (!focus) return;

    const row = revealed ?? rows.find((element) => element.getAttribute('data-nav-id') === position?.itemId);
    const section = Array.from(scroller.querySelectorAll<HTMLElement>('[data-section-id]')).find(
      (element) => element.getAttribute('data-section-id') === position?.sectionId
    );
    const target =
      row?.querySelector<HTMLElement>(!revealed && position?.disclosure ? '.bx-nav-disclosure' : '.bx-nav-link') ??
      section ??
      scroller.querySelector<HTMLElement>('[role="menuitem"]:not(:disabled, [aria-disabled="true"])') ??
      scroller.closest('.bx-nav-level')?.querySelector<HTMLElement>('.bx-nav-back');

    if (target) this.focusMonitor.focusVia(target, keyboard ? 'keyboard' : 'program', { preventScroll: true });
  }

  //#region Helpers

  private activeScroller(): HTMLElement | undefined {
    const level =
      !this.navigationStateService.query().trim() && this.navigationStateService.hasLevel()
        ? this.document.getElementById(`${this.navigationStateService.levelId}-scroll`)
        : null;

    return level ?? this.document.getElementById(this.rootScrollId) ?? undefined;
  }

  private positionKey(scroller: HTMLElement): string {
    if (this.navigationStateService.query().trim()) return `search:${this.navigationStateService.query()}`;

    return scroller.id === this.rootScrollId
      ? JSON.stringify([undefined, []])
      : (scroller.querySelector('[data-nav-level-key]')?.getAttribute('data-nav-level-key') ?? this.navigationStateService.levelKey());
  }

  //#endregion
}
