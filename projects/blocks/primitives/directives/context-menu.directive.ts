import { Directive, HostListener, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BxOverlayPositionService } from '@filip.mazev/blocks/core';

@Directive({
  selector: '[bxContextMenu]'
})
export class ContextMenuDirective {
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);
  private readonly vcr = inject(ViewContainerRef);
  
  public readonly bxContextMenu = input.required<TemplateRef<unknown>>();

  private overlayRef: OverlayRef | null = null;

  @HostListener('contextmenu', ['$event'])
  public open(event: MouseEvent): void {
    event.preventDefault();
    this.close();

    const positionStrategy = this.positionBuilder.getCoordinateStrategy(event.clientX, event.clientY);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(), 
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop' 
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());

    const portal = new TemplatePortal(this.bxContextMenu(), this.vcr);
    this.overlayRef.attach(portal);
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.overlayRef?.hasAttached()) {
      return;
    }

    if (this.overlayRef.overlayElement.contains(event.target as Node)) {
      this.close();
    }
  }

  private close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}