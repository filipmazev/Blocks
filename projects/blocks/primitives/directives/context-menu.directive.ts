import { DestroyRef, Directive, ElementRef, HostListener, inject, input, NgZone, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BxA11yService, BxOverlayPositionService, inheritOverlayTheme } from '@filip.mazev/blocks/core';
import { createGlassTransition } from '@filip.mazev/blocks/effects/runtime';
import { Subscription } from 'rxjs';

@Directive({ selector: '[bxContextMenu]' })
export class ContextMenuDirective {
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly vcr = inject(ViewContainerRef);
  public readonly bxContextMenu = input.required<TemplateRef<unknown>>();
  private overlayRef: OverlayRef | null = null;
  private transition?: ReturnType<typeof createGlassTransition>;
  private point?: HTMLElement;
  private disconnectTheme?: () => void;
  private subscriptions = new Subscription();
  private revision = 0;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      ++this.revision;
      this.dispose();
    });
  }

  @HostListener('contextmenu', ['$event'])
  public open(event: MouseEvent): void {
    event.preventDefault();
    this.openAt(event.clientX, event.clientY);
  }

  public close(restoreFocus = false): void {
    if (!this.overlayRef) return;
    const revision = ++this.revision;
    if (restoreFocus || this.overlayRef.overlayElement.contains(this.elementRef.nativeElement.ownerDocument.activeElement)) {
      this.elementRef.nativeElement.focus({ preventScroll: true });
    }
    this.overlayRef.overlayElement.inert = true;
    const transition = this.transition;
    if (transition && !this.a11y.isReducedMotion()) {
      void this.zone
        .runOutsideAngular(() => transition.exit())
        .then(() => {
          if (revision === this.revision) this.dispose();
        })
        .catch(() => {
          if (revision === this.revision) this.dispose();
        });
    } else this.dispose();
  }

  @HostListener('keydown', ['$event'])
  protected onKey(event: KeyboardEvent): void {
    if (event.key !== 'ContextMenu' && !(event.shiftKey && event.key === 'F10')) return;
    event.preventDefault();
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.openAt(rect.left + Math.min(24, rect.width / 2), rect.bottom);
    this.items()[0]?.focus();
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && this.overlayRef?.overlayElement.contains(target) && target.closest('button, a, [role="menuitem"]')) this.close();
  }

  private openAt(x: number, y: number): void {
    this.dispose();
    ++this.revision;
    const source = this.elementRef.nativeElement;
    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionBuilder.getCoordinateStrategy(x, y),
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.overlayRef.backdropClick().subscribe(() => this.close()));
    this.subscriptions.add(this.overlayRef.detachments().subscribe(() => this.dispose()));
    this.subscriptions.add(this.overlayRef.keydownEvents().subscribe((event) => this.onMenuKey(event)));
    const pane = this.overlayRef.overlayElement;
    this.disconnectTheme = this.zone.runOutsideAngular(() => inheritOverlayTheme(source, pane));
    const view = this.overlayRef.attach(new TemplatePortal(this.bxContextMenu(), this.vcr));
    view.detectChanges();
    this.overlayRef.updatePosition();
    if (!this.a11y.isReducedMotion()) {
      const point = source.ownerDocument.createElement('span');
      point.setAttribute('aria-hidden', 'true');
      Object.assign(point.style, { position: 'fixed', left: `${x}px`, top: `${y}px`, width: '1px', height: '1px', pointerEvents: 'none' });
      source.ownerDocument.body.append(point);
      this.point = point;
      const transition = this.zone.runOutsideAngular(() => createGlassTransition(point, pane));
      this.transition = transition;
      void this.zone
        .runOutsideAngular(() => transition.enter())
        .catch(() => {
          this.transition?.destroy();
          this.transition = undefined;
        });
    }
  }

  private items(): HTMLElement[] {
    return Array.from(this.overlayRef?.overlayElement.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [role="menuitem"]') ?? []).filter(
      (item) => !item.matches('[disabled], [aria-disabled="true"]') && !item.closest('[hidden], [inert]')
    );
  }

  private onMenuKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this.close(true);
      return;
    }
    if ((event.target as HTMLElement)?.closest('input,textarea,[contenteditable="true"]')) return;
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    const items = this.items();
    if (!items.length) return;
    event.preventDefault();
    const current = items.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement as HTMLElement);
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? items.length - 1
          : event.key === 'ArrowDown'
            ? (current + 1) % items.length
            : current < 0
              ? items.length - 1
              : (current - 1 + items.length) % items.length;
    items[next].focus();
  }

  private dispose(): void {
    this.subscriptions.unsubscribe();
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.transition?.destroy();
    this.transition = undefined;
    this.point?.remove();
    this.point = undefined;
    const overlay = this.overlayRef;
    this.overlayRef = null;
    overlay?.dispose();
  }
}
