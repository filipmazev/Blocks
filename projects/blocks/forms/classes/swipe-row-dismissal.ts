import type { ISpringMotion } from '@filip.mazev/blocks/effects/runtime';
import type { SwipeSide } from '@forms/types/swipe-actions.types';

import { createSpringMotion, MOTION_PRESETS, paintMotionStyles } from '@filip.mazev/blocks/effects/runtime';

/** Internal row exit that preserves text geometry while collapsing occupied list space. */
export class SwipeRowDismissal {
  private readonly styles: Map<HTMLElement, Map<string, string>> = new Map();

  private motion: ISpringMotion | undefined;
  private completion: (() => void) | undefined;
  private originalInert: string | null = null;
  private originalHidden: string | null = null;
  private captured: boolean = false;

  /**
   * Own a row's exit presentation without removing Angular-owned DOM.
   * @param element - Row container whose space is collapsed.
   * @param contents - Existing material/content layers translated inside the clipped row.
   */
  constructor(
    private readonly element: HTMLElement,
    private readonly contents: readonly HTMLElement[]
  ) {}

  /**
   * Start an interruptible shared spring exit; success hides the row and calls completion once.
   * @param side - Physical swipe direction, or null for a button/context action (defaults to left).
   * @param reduced - Whether accessibility preferences require an immediate static removal.
   * @param complete - Notification after the row is hidden, for application-owned data removal.
   */
  public start(side: SwipeSide | null, reduced: boolean, complete: () => void): void {
    this.restore();

    const computed = this.element.ownerDocument.defaultView?.getComputedStyle(this.element);
    const parent = this.element.parentElement;
    const parentStyle = parent && this.element.ownerDocument.defaultView?.getComputedStyle(parent);
    const siblings = parent ? Array.from(parent.children).filter((child) => child !== this.element && child.getClientRects().length > 0) : [];
    const gap = siblings.length ? parseFloat(parentStyle?.rowGap ?? '0') || 0 : 0;
    const height = this.element.offsetHeight;
    const distance = this.element.clientWidth * (side === 'right' ? 0.3 : -0.3);
    const paddingStart = parseFloat(computed?.paddingBlockStart ?? '0') || 0;
    const paddingEnd = parseFloat(computed?.paddingBlockEnd ?? '0') || 0;
    const borderStart = parseFloat(computed?.borderBlockStartWidth ?? '0') || 0;
    const borderEnd = parseFloat(computed?.borderBlockEndWidth ?? '0') || 0;
    const marginStart = parseFloat(computed?.marginBlockStart ?? '0') || 0;
    const marginEnd = parseFloat(computed?.marginBlockEnd ?? '0') || 0;
    const opacity = parseFloat(computed?.opacity ?? '1');

    this.completion = complete;
    this.originalInert = this.element.getAttribute('inert');
    this.originalHidden = this.element.getAttribute('aria-hidden');
    this.captured = true;
    this.element.setAttribute('inert', '');
    this.element.setAttribute('aria-hidden', 'true');
    this.style(this.element, 'overflow', 'clip');
    this.style(this.element, 'box-sizing', 'border-box');
    this.style(this.element, 'min-block-size', '0');

    for (const content of this.contents) this.style(content, 'block-size', `${content.offsetHeight}px`);

    if (reduced) {
      this.finish();

      return;
    }

    this.motion = createSpringMotion(
      [0],
      ([value], [velocity]) => {
        const progress = Math.max(0, Math.min(1, value / 1000));
        const departure = Math.min(1, progress / 0.55);
        const collapse = Math.max(0, (progress - 0.15) / 0.85);
        const remaining = 1 - collapse;

        this.style(this.element, 'opacity', String(opacity * (1 - departure)));
        this.style(this.element, 'block-size', `${height * remaining}px`);
        this.style(this.element, 'padding-block-start', `${paddingStart * remaining}px`);
        this.style(this.element, 'padding-block-end', `${paddingEnd * remaining}px`);
        this.style(this.element, 'border-block-start-width', `${borderStart * remaining}px`);
        this.style(this.element, 'border-block-end-width', `${borderEnd * remaining}px`);
        this.style(this.element, 'margin-block-start', `${marginStart * remaining}px`);
        this.style(this.element, 'margin-block-end', `${marginEnd * remaining - gap * collapse}px`);

        for (const content of this.contents) this.style(content, 'translate', `${distance * departure}px 0`);

        if (Math.abs(1000 - value) < 1 && Math.abs(velocity) < 10) this.finish();
      },
      MOTION_PRESETS.snappy
    );
    this.motion.retarget([1000]);
  }

  /** Complete an active exit immediately when reduced motion becomes enabled. */
  public finish(): void {
    const complete = this.completion;

    if (!complete) return;

    this.completion = undefined;
    this.motion?.destroy();
    this.motion = undefined;
    this.style(this.element, 'display', 'none');
    complete();
  }

  /** Cancel owned motion and restore the original styles/attributes, without emitting completion. */
  public restore(): void {
    this.completion = undefined;
    this.motion?.destroy();
    this.motion = undefined;

    for (const [element, properties] of this.styles) {
      for (const [name, value] of properties) {
        if (value) element.style.setProperty(name, value);
        else element.style.removeProperty(name);
      }
    }

    this.styles.clear();

    if (this.captured) {
      if (this.originalInert === null) this.element.removeAttribute('inert');
      else this.element.setAttribute('inert', this.originalInert);

      if (this.originalHidden === null) this.element.removeAttribute('aria-hidden');
      else this.element.setAttribute('aria-hidden', this.originalHidden);
    }

    this.captured = false;
  }

  //#region Helpers

  private style(element: HTMLElement, name: string, value: string): void {
    let properties = this.styles.get(element);

    if (!properties) {
      properties = new Map();
      this.styles.set(element, properties);
    }

    if (!properties.has(name)) properties.set(name, element.style.getPropertyValue(name));

    paintMotionStyles(element, { [name]: value });
  }

  //#endregion
}
