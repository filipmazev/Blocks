import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  NgZone,
  PLATFORM_ID,
  effect,
  inject,
  input,
  signal,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BxA11yService, BxPlacement, BxOverlayPositionService, inheritOverlayTheme } from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { Subscription } from 'rxjs';

export type DropdownTransition = 'none' | 'fade' | 'emerge';
export type DropdownState = 'closed' | 'opening' | 'open' | 'closing';

@Directive({
  selector: '[bxDropdown]',
  exportAs: 'bxDropdown',
  standalone: true,
  host: {
    '[attr.aria-expanded]': 'isOpen()',
    '[attr.aria-haspopup]': '"menu"',
    '[attr.aria-controls]': 'overlayId()'
  }
})
export class DropdownDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly vcr = inject(ViewContainerRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _isOpen = signal(false);
  protected readonly overlayId = signal<string | null>(null);
  public readonly isOpen = this._isOpen.asReadonly();
  private readonly _state = signal<DropdownState>('closed');
  public readonly state = this._state.asReadonly();

  public readonly bxDropdown = input.required<TemplateRef<unknown>>();
  public readonly placement = input<BxPlacement>('bottom');
  public readonly bxTransition = input<DropdownTransition>('fade');

  private overlayRef: OverlayRef | null = null;
  private transition: ReturnType<typeof createGlassTransition> | null = null;
  private subscriptions = new Subscription();
  private revision = 0;
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      ++this.revision;
      this.dispose();
    });

    effect(() => {
      if (this.a11y.isReducedMotion() && this.transition) {
        ++this.revision;
        this.transition.destroy();
        this.transition = null;
        if (this.isOpen()) this._state.set('open');
        else this.dispose();
      }
    });
  }

  @HostListener('click', ['$event'])
  public toggle(event?: MouseEvent): void {
    if (this.isDisabled()) return;
    event?.stopPropagation();
    if (this.isOpen()) this.close();
    else this.open();
  }

  @HostListener('keydown', ['$event'])
  public onTriggerKeydown(event: KeyboardEvent): void {
    if (this.bxTransition() === 'none' || this.isDisabled() || this.isEditing(event.target)) return;
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    event.stopPropagation();
    this.open();
    const items = this.menuItems();
    const item = event.key === 'ArrowUp' ? items[items.length - 1] : items[0];
    item?.focus({ preventScroll: true });
  }

  public open(): void {
    if (!this.isBrowser || this.isOpen() || this.isDisabled()) return;
    const revision = ++this.revision;
    this._isOpen.set(true);
    this._state.set('opening');

    if (!this.overlayRef) this.attachOverlay();
    const overlay = this.overlayRef;
    if (!overlay) return;
    overlay.overlayElement.inert = false;
    overlay.overlayElement.style.removeProperty('pointer-events');

    if (this.bxTransition() !== 'none' && !this.a11y.isReducedMotion()) {
      const transition = (this.transition ??= this.zone.runOutsideAngular(() => createGlassTransition(this.elementRef.nativeElement, overlay.overlayElement)));
      void this.zone
        .runOutsideAngular(() => transition.enter())
        .then(() => {
          if (revision === this.revision && this.isOpen()) this.zone.run(() => this._state.set('open'));
        })
        .catch(() => {
          if (revision === this.revision && this.isOpen()) {
            this.transition?.destroy();
            this.transition = null;
            this._state.set('open');
          }
        });
    } else {
      this._state.set('open');
    }
  }

  public close(restoreFocus = false): void {
    if (!this.overlayRef || !this.isOpen()) return;
    const revision = ++this.revision;
    const overlay = this.overlayRef;
    this._isOpen.set(false);
    this._state.set('closing');

    const source = this.elementRef.nativeElement;
    if (restoreFocus || overlay.overlayElement.contains(source.ownerDocument.activeElement)) {
      source.focus({ preventScroll: true });
    }
    overlay.overlayElement.inert = true;
    overlay.overlayElement.style.pointerEvents = 'none';

    const transition = this.transition;
    if (transition && !this.a11y.isReducedMotion()) {
      void this.zone
        .runOutsideAngular(() => transition.exit())
        .then(() => {
          if (revision === this.revision && !this.isOpen()) this.zone.run(() => this.dispose());
        })
        .catch(() => {
          if (revision === this.revision && !this.isOpen()) this.dispose();
        });
    } else {
      this.dispose();
    }
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.overlayRef?.hasAttached() || !this.isOpen()) return;
    const target = event.target as Node | null;
    if (!target || this.elementRef.nativeElement.contains(target)) return;
    const inside = this.overlayRef.overlayElement.contains(target);
    // Preserve existing menu item click-to-close behavior; embedded inputs can stay open.
    if (!inside || this.bxTransition() === 'none' || (target instanceof Element && target.closest('button, a, [role="menuitem"]'))) {
      this.close();
    }
  }

  private attachOverlay(): void {
    const positionStrategy = this.positionBuilder.getElementStrategy(this.elementRef.nativeElement, this.placement(), 4);
    const overlay = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      // Page menus follow application z-index; dialog menus still escape their container.
      usePopover: !!this.elementRef.nativeElement.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]'),
      // A fading surface keeps its trigger reachable while it opens/closes.
      hasBackdrop: this.bxTransition() === 'none',
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
    this.overlayRef = overlay;
    this.overlayId.set(overlay.overlayElement.id || null);
    this.disconnectTheme = this.zone.runOutsideAngular(() => inheritOverlayTheme(this.elementRef.nativeElement, overlay.overlayElement));
    this.disconnectLighting = inheritGlassLighting(overlay.overlayElement, this.elementRef.nativeElement);
    this.subscriptions = new Subscription();
    this.trackScroll(overlay, positionStrategy);
    this.subscriptions.add(overlay.backdropClick().subscribe(() => this.close()));
    this.subscriptions.add(
      overlay.outsidePointerEvents().subscribe((event) => {
        if (!this.elementRef.nativeElement.contains(event.target as Node)) this.close();
      })
    );
    this.subscriptions.add(
      overlay.keydownEvents().subscribe((event) => {
        if (event.key === 'Escape' && this.isOpen()) {
          event.preventDefault();
          event.stopPropagation();
          this.close(true);
        } else if (!event.defaultPrevented && this.bxTransition() !== 'none' && this.isOpen()) {
          this.navigateMenu(event);
        }
      })
    );
    this.subscriptions.add(
      positionStrategy.positionChanges.subscribe(() => {
        this.zone.runOutsideAngular(() => this.transition?.refresh());
      })
    );
    const view = overlay.attach(new TemplatePortal(this.bxDropdown(), this.vcr));
    view.detectChanges();
    overlay.updatePosition();
  }

  private trackScroll(overlay: OverlayRef, positionStrategy: FlexibleConnectedPositionStrategy): void {
    const source = this.elementRef.nativeElement;
    const view = source.ownerDocument.defaultView;
    if (!view) return;
    this.zone.runOutsideAngular(() => {
      const reposition = (event: Event) => {
        const target = event.target;
        // Capture viewport and ancestor scrolling before document-level effects.
        // Nested scrollers do not need to register with CDK's ScrollDispatcher.
        // Reuse the selected placement without resetting styles and measuring
        // all fallback positions on every scroll event. Resize still recalculates.
        if (overlay.hasAttached() && (target === view || (target instanceof Node && target.contains(source)))) positionStrategy.reapplyLastPosition();
      };
      view.addEventListener('scroll', reposition, { capture: true, passive: true });
      this.subscriptions.add(() => view.removeEventListener('scroll', reposition, true));
    });
  }

  private isDisabled(): boolean {
    const element = this.elementRef.nativeElement;
    return element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
  }

  private menuItems(): HTMLElement[] {
    const pane = this.overlayRef?.overlayElement;
    if (!pane) return [];
    return Array.from(pane.querySelectorAll<HTMLElement>('button, a[href], [role="menuitem"]')).filter((item) => {
      if (item.matches(':disabled, [disabled], [aria-disabled="true"], .is-disabled')) return false;
      if (item.closest('[hidden], [inert], [aria-hidden="true"]')) return false;
      const style = item.ownerDocument.defaultView?.getComputedStyle(item);
      return style?.display !== 'none' && style?.visibility !== 'hidden' && item.getClientRects().length > 0;
    });
  }

  private navigateMenu(event: KeyboardEvent): void {
    if (this.isEditing(event.target) || !(event.target instanceof Node) || !this.overlayRef?.overlayElement.contains(event.target)) return;
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    const items = this.menuItems();
    if (!items.length) return;
    const current = items.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement as HTMLElement);
    let index: number;
    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = items.length - 1;
    else if (event.key === 'ArrowDown') index = current < 0 ? 0 : (current + 1) % items.length;
    else index = current < 0 ? items.length - 1 : (current - 1 + items.length) % items.length;
    event.preventDefault();
    event.stopPropagation();
    items[index].focus({ preventScroll: true });
  }

  private isEditing(target: EventTarget | null): boolean {
    return target instanceof Element && !!target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]');
  }

  private dispose(): void {
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.transition?.destroy();
    this.transition = null;
    this.subscriptions.unsubscribe();
    this.overlayRef?.dispose();
    this.overlayRef = null;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
    this.overlayId.set(null);
    this._isOpen.set(false);
    this._state.set('closed');
  }
}
