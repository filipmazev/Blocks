import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BxPlacement, BxOverlayPositionService, ResolvableText } from '@filip.mazev/blocks/core';
import { Tooltip } from '../components/tooltip/tooltip';

@Directive({
  selector: '[bxTooltip]'
})
export class TooltipDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);

  public readonly bxTooltip = input.required<ResolvableText>();
  public readonly placement = input<BxPlacement>('bottom');

  private overlayRef: OverlayRef | null = null;

  @HostListener('mouseenter')
  public show(): void {
    if (this.overlayRef?.hasAttached()) return;

    const positionStrategy = this.positionBuilder.getElementStrategy(
      this.elementRef.nativeElement, 
      this.placement()
    );

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(), 
      hasBackdrop: false
    });

    const portal = new ComponentPortal(Tooltip);
    const componentRef = this.overlayRef.attach(portal);
    componentRef.setInput('text', this.bxTooltip());
  }

  @HostListener('mouseleave')
  public hide(): void {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }
}