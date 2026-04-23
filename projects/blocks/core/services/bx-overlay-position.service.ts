import { Injectable, inject } from '@angular/core';
import { ConnectionPositionPair, Overlay, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { BxPlacement } from '../types/core.types';

@Injectable({ providedIn: 'root' })
export class BxOverlayPositionService {
  private readonly overlay = inject(Overlay);

  public getElementStrategy(element: HTMLElement, placement: BxPlacement, offset: number = 8): FlexibleConnectedPositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo(element)
      .withPositions(this.getPositions(placement, offset))
      .withPush(true)
      .withViewportMargin(8);
  }

  public getCoordinateStrategy(x: number, y: number): FlexibleConnectedPositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo({ x, y }) 
      .withPositions(this.getPositions('bottom', 2))
      .withPush(true)
      .withViewportMargin(8);
  }

  private getPositions(placement: BxPlacement, offset: number): ConnectionPositionPair[] {
    const top = new ConnectionPositionPair(
      { originX: 'center', originY: 'top' }, 
      { overlayX: 'center', overlayY: 'bottom' }, 
      0, -offset, ['bx-overlay-pos-top']
    );
    
    const bottom = new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' }, 
      { overlayX: 'center', overlayY: 'top' }, 
      0, offset, ['bx-overlay-pos-bottom']
    );
    
    const left = new ConnectionPositionPair(
      { originX: 'start', originY: 'center' }, 
      { overlayX: 'end', overlayY: 'center' }, 
      -offset, 0, ['bx-overlay-pos-left']
    );
    
    const right = new ConnectionPositionPair(
      { originX: 'end', originY: 'center' }, 
      { overlayX: 'start', overlayY: 'center' }, 
      offset, 0, ['bx-overlay-pos-right']
    );

    switch (placement) {
      case 'top': return [top, bottom, right, left];
      case 'bottom': return [bottom, top, right, left];
      case 'left': return [left, right, top, bottom];
      case 'right': return [right, left, top, bottom];
    }
  }
}