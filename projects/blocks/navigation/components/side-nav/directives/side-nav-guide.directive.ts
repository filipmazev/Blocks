import { computed, DestroyRef, Directive, effect, ElementRef, inject, input, NgZone, signal, TemplateRef, untracked, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BxOverlayPositionService, inheritOverlayTheme, trackOverlayOrigin } from '@filip.mazev/blocks/core';
import { Subscription } from 'rxjs';
import { BX_OVERLAY_CONTEXT } from '@filip.mazev/blocks/primitives';

/** Keeps a decorative search guide outside the clipped navigation surface using shared origin tracking. */
@Directive({ selector: '[bxSideNavGuide]', exportAs: 'bxSideNavGuide' })
export class SideNavGuideDirective {
  private readonly source = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly overlay = inject(Overlay);
  private readonly positions = inject(BxOverlayPositionService);
  private readonly context = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly zone = inject(NgZone);
  private readonly vcr = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly visible = signal(false);
  private readonly pointsLeft = signal(true);
  public readonly bxSideNavGuide = input<TemplateRef<unknown> | undefined>();
  public readonly guideSide = input<'left' | 'right'>('right');
  public readonly pointLeft = this.pointsLeft.asReadonly();
  private overlayRef?: OverlayRef;
  private subscriptions = new Subscription();

  constructor() {
    const guide = computed(() => (this.visible() ? this.bxSideNavGuide() : undefined));

    effect(() => {
      const template = guide();
      const side = this.guideSide();

      untracked(() => {
        this.close();
        if (template) this.open(template, side);
      });
    });
    effect((onCleanup) => {
      const template = this.bxSideNavGuide();
      const view = this.source.ownerDocument.defaultView;

      if (!template || !view?.IntersectionObserver) return;
      let active = true;
      const observer = new view.IntersectionObserver(([entry]) => {
        if (active) this.visible.set(entry.isIntersecting);
      });
      observer.observe(this.source);
      onCleanup(() => {
        active = false;
        observer.disconnect();
        this.visible.set(false);
      });
    });
    this.destroyRef.onDestroy(() => this.close());
  }

  //#region Helpers
  private open(template: TemplateRef<unknown>, side: 'left' | 'right'): void {
    const surface = this.source.closest<HTMLElement>('.bx-nav-panel');
    const row = this.source.getBoundingClientRect();
    const bounds = surface?.getBoundingClientRect() ?? row;
    // Let the tip float into the surface while the shaft remains outside.
    const offset = (side === 'right' ? bounds.right - row.right : row.left - bounds.left) - 12;
    const strategy = this.positions.getElementStrategy(this.source, side, offset).withFlexibleDimensions(false);
    const overlay = this.overlay.create({
      positionStrategy: strategy,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      direction: 'ltr',
      hasBackdrop: false,
      usePopover: !!this.context?.useTopLayer || !!this.source.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]')
    });
    this.overlayRef = overlay;
    this.subscriptions = new Subscription();
    overlay.overlayElement.setAttribute('aria-hidden', 'true');
    this.constrainWidth(overlay, side);
    this.subscriptions.add(inheritOverlayTheme(this.source, overlay.overlayElement));
    this.subscriptions.add(
      strategy.positionChanges.subscribe(({ connectionPair }) => {
        if (connectionPair.originX !== 'center') this.pointsLeft.set(connectionPair.originX === 'end');
      })
    );
    this.pointsLeft.set(side === 'right');
    overlay.attach(new TemplatePortal(template, this.vcr)).detectChanges();
    overlay.overlayElement.style.pointerEvents = 'none';
    this.subscriptions.add(
      this.zone.runOutsideAngular(() =>
        trackOverlayOrigin(overlay, this.source, {
          onPosition: () => this.constrainWidth(overlay, side),
          onOriginHidden: () => this.zone.run(() => this.visible.set(false))
        })
      )
    );
  }

  private constrainWidth(overlay: OverlayRef, side: 'left' | 'right'): void {
    const surface = this.source.closest<HTMLElement>('.bx-nav-panel') ?? this.source;
    const bounds = surface.getBoundingClientRect();
    const viewportWidth = this.source.ownerDocument.defaultView?.innerWidth ?? bounds.right;
    const space = (side === 'right' ? viewportWidth - bounds.right : bounds.left) + 4;
    const width = `${Math.max(24, space)}px`;

    if (overlay.overlayElement.style.getPropertyValue('--bx-nav-guide-max-width') !== width) {
      overlay.overlayElement.style.setProperty('--bx-nav-guide-max-width', width);
    }
  }

  private close(): void {
    this.subscriptions.unsubscribe();
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }
  //#endregion
}
