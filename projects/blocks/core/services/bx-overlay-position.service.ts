import { ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { inject, Injectable } from '@angular/core';

import { BxPlacement } from '@core/types/core.types';

@Injectable({ providedIn: 'root' })
export class BxOverlayPositionService {
  private readonly overlay = inject(Overlay);

  /**
   * Create a viewport-constrained connected-overlay strategy with fallback positions around an element.
   *
   * @param element - Native element anchoring the overlay.
   * @param placement - Preferred side of the anchor; alternate sides are tried when space is constrained.
   * @param offset - Gap in CSS pixels between the anchor and overlay. Defaults to `8`.
   */
  public getElementStrategy(element: HTMLElement, placement: BxPlacement, offset: number = 8): FlexibleConnectedPositionStrategy {
    return this.overlay.position().flexibleConnectedTo(element).withPositions(this.getPositions(placement, offset)).withPush(true).withViewportMargin(8);
  }

  /**
   * Create an adjacent submenu strategy preferring one physical side and falling back to the other.
   *
   * @param element - Native element anchoring the submenu.
   * @param side - Preferred physical side of the anchor, left or right.
   * @param offset - Gap in CSS pixels between the submenu and its anchor. Defaults to `4`.
   */
  public getSubmenuStrategy(element: HTMLElement, side: 'left' | 'right', offset = 4): FlexibleConnectedPositionStrategy {
    const left = new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }, -offset, 0);
    const right = new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }, offset, 0);

    return this.overlay
      .position()
      .flexibleConnectedTo(element)
      .withPositions(side === 'left' ? [left, right] : [right, left])
      .withFlexibleDimensions(false)
      .withPush(true)
      .withViewportMargin(8);
  }

  /**
   * Create a viewport-constrained overlay strategy anchored at client coordinates.
   *
   * @param x - Horizontal client coordinate in CSS pixels.
   * @param y - Vertical client coordinate in CSS pixels.
   */
  public getCoordinateStrategy(x: number, y: number): FlexibleConnectedPositionStrategy {
    return this.overlay.position().flexibleConnectedTo({ x, y }).withPositions(this.getPositions('bottom', 2)).withPush(true).withViewportMargin(8);
  }

  //#region Helpers

  private getPositions(placement: BxPlacement, offset: number): ConnectionPositionPair[] {
    const top = new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }, 0, -offset, [
      'bx-overlay-pos-top'
    ]);

    const bottom = new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }, 0, offset, [
      'bx-overlay-pos-bottom'
    ]);

    const left = new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }, -offset, 0, [
      'bx-overlay-pos-left'
    ]);

    const right = new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }, offset, 0, [
      'bx-overlay-pos-right'
    ]);

    switch (placement) {
      case 'top':
        return [top, bottom, right, left];
      case 'bottom':
        return [bottom, top, right, left];
      case 'left':
        return [left, right, top, bottom];
      case 'right':
        return [right, left, top, bottom];
    }
  }

  //#endregion
}
