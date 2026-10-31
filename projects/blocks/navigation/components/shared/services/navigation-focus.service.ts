import { DOCUMENT, inject, Injectable } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { uuidv4 } from '@filip.mazev/blocks/core';
import { NavigationStateService } from './navigation-state.service';
import { INavigationLevelPosition } from '../interfaces/inavigation-level-position.interface';

/** Scoped focus and scroll bookmarks shared by side and top navigation. Owners schedule calls after rendering. */
@Injectable()
export class NavigationFocusService {
  private readonly document = inject(DOCUMENT);
  private readonly monitor = inject(FocusMonitor);
  private readonly state = inject(NavigationStateService);
  private readonly positions = new Map<string, INavigationLevelPosition>();
  public readonly rootScrollId = `bx-navigation-root-${uuidv4()}`;

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

  public restore(restore: boolean, keyboard: boolean, focus: boolean): void {
    const scroller = this.activeScroller();

    if (!scroller) return;
    const position = restore ? this.positions.get(this.positionKey(scroller)) : undefined;
    scroller.scrollTop = position?.scrollTop ?? 0;
    const revealId = this.state.query().trim() ? undefined : this.state.revealItemId();
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
        this.state.revealItemId.set(undefined);
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

    if (target) this.monitor.focusVia(target, keyboard ? 'keyboard' : 'program', { preventScroll: true });
  }

  //#region Helpers
  private activeScroller(): HTMLElement | undefined {
    const level = !this.state.query().trim() && this.state.hasLevel() ? this.document.getElementById(`${this.state.levelId}-scroll`) : null;

    return level ?? this.document.getElementById(this.rootScrollId) ?? undefined;
  }

  private positionKey(scroller: HTMLElement): string {
    if (this.state.query().trim()) return `search:${this.state.query()}`;
    return scroller.id === this.rootScrollId
      ? JSON.stringify([undefined, []])
      : (scroller.querySelector('[data-nav-level-key]')?.getAttribute('data-nav-level-key') ?? this.state.levelKey());
  }
  //#endregion
}
