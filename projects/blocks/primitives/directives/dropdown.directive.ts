import { Directive, ElementRef, HostListener, inject, input, signal, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BxPlacement, BxOverlayPositionService } from '@filip.mazev/blocks/core';

@Directive({
  selector: '[bxDropdown]',
  exportAs: 'bxDropdown'
})
export class DropdownDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);
  private readonly vcr = inject(ViewContainerRef);

  private readonly _isOpen = signal<boolean>(false);
  public readonly isOpen = this._isOpen.asReadonly();

  public readonly bxDropdown = input.required<TemplateRef<unknown>>();
  public readonly placement = input<BxPlacement>('bottom');

  private overlayRef: OverlayRef | null = null;

  @HostListener('click', ['$event'])
  public toggle(event: MouseEvent): void {
    event.stopPropagation();
    this.isOpen() ? this.close() : this.open();
  }

  private open(): void {
    const positionStrategy = this.positionBuilder.getElementStrategy(
      this.elementRef.nativeElement, 
      this.placement(),
      4 
    );

    this._isOpen.set(true);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());

    const portal = new TemplatePortal(this.bxDropdown(), this.vcr);
    this.overlayRef.attach(portal);
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.overlayRef?.hasAttached()) return;

    const target = event.target as Node;
    
    const clickedInsideMenu = this.overlayRef.overlayElement.contains(target);
    const clickedInsideButton = this.elementRef.nativeElement.contains(target);

    if (clickedInsideMenu || !clickedInsideButton) {
      this.close();
    }
  }

  private close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
      this._isOpen.set(false);
    }
  }
}