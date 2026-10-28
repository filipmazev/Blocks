import { booleanAttribute, DestroyRef, Directive, ElementRef, HostListener, inject, input, NgZone, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BxA11yService, BxOverlayPositionService, inheritOverlayTheme } from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { BX_OVERLAY_CONTEXT } from './overlay-context.token';
import { Subscription } from 'rxjs';

interface TouchPress {
  pointerId: number;
  x: number;
  y: number;
  timer: number;
  opened: boolean;
  events: AbortController;
}

@Directive({ selector: '[bxContextMenu]' })
export class ContextMenuDirective {
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly vcr = inject(ViewContainerRef);
  public readonly bxContextMenu = input.required<TemplateRef<unknown>>();
  public readonly bxContextMenuLongPress = input(true, { transform: booleanAttribute });
  private readonly onPointerDown = (event: PointerEvent): void => {
    this.lastPointerType = event.pointerType;
    this.cancelTouchPress();
    if (event.isPrimary) this.clearTouchGuard();
    if (event.pointerType !== 'touch' || !event.isPrimary || event.button !== 0 || !this.bxContextMenuLongPress() || this.hasNativeTouchAction(event)) return;
    const source = this.elementRef.nativeElement;
    const doc = source.ownerDocument;
    const win = doc.defaultView;
    if (!win || this.hasTextSelection()) return;
    const press: TouchPress = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, timer: 0, opened: false, events: new AbortController() };
    this.touchPress = press;
    const options = { capture: true, passive: true, signal: press.events.signal };
    const finish = () => this.cancelTouchPress();
    doc.addEventListener(
      'pointermove',
      (move) => {
        if (move.pointerId === press.pointerId && !press.opened && Math.hypot(move.clientX - press.x, move.clientY - press.y) > 10) finish();
      },
      options
    );
    for (const type of ['pointerup', 'pointercancel'] as const) {
      doc.addEventListener(
        type,
        (end) => {
          if (end.pointerId === press.pointerId) finish();
        },
        options
      );
    }
    doc.addEventListener(
      'pointerdown',
      (next) => {
        if (next.pointerId !== press.pointerId) finish();
      },
      options
    );
    doc.addEventListener('scroll', finish, options);
    doc.addEventListener(
      'visibilitychange',
      () => {
        if (doc.hidden) finish();
      },
      options
    );
    win.addEventListener('blur', finish, { signal: press.events.signal });
    press.timer = win.setTimeout(() => this.zone.run(() => this.openTouchMenu(press)), 500);
  };

  private overlayRef: OverlayRef | null = null;
  private transition?: ReturnType<typeof createGlassTransition>;
  private point?: HTMLElement;
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private subscriptions = new Subscription();
  private revision = 0;
  private touchPress?: TouchPress;
  private touchGuard?: AbortController;
  private touchGuardTimer?: number;
  private lastPointerType = '';

  constructor() {
    const source = this.elementRef.nativeElement;
    if (source.ownerDocument.defaultView) {
      this.zone.runOutsideAngular(() => source.addEventListener('pointerdown', this.onPointerDown, { passive: true }));
    }
    inject(DestroyRef).onDestroy(() => {
      ++this.revision;
      source.removeEventListener('pointerdown', this.onPointerDown);
      this.cancelTouchPress();
      this.clearTouchGuard();
      this.dispose();
    });
  }

  @HostListener('contextmenu', ['$event'])
  public open(event: MouseEvent): void {
    if (event.type === 'contextmenu' && this.lastPointerType === 'touch') {
      const press = this.touchPress;
      if (!press) return;
      if (!this.bxContextMenuLongPress() || this.hasNativeTouchAction(event) || this.hasTextSelection()) {
        this.cancelTouchPress();
        return;
      }
      event.preventDefault();
      this.openTouchMenu(press);
      return;
    }
    event.preventDefault();
    this.cancelTouchPress();
    this.clearTouchGuard();
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
    this.lastPointerType = '';
    this.cancelTouchPress();
    this.clearTouchGuard();
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.openAt(rect.left + Math.min(24, rect.width / 2), rect.bottom);
    this.items()[0]?.focus();
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && this.overlayRef?.overlayElement.contains(target) && target.closest('button, a, [role="menuitem"]')) this.close();
  }

  private hasNativeTouchAction(event: Event): boolean {
    const source = this.elementRef.nativeElement;
    for (const node of event.composedPath()) {
      if (node instanceof HTMLElement) {
        if (node.isContentEditable || node.matches('input, textarea, select, :disabled, [aria-disabled="true"], [inert]')) return true;
        if (node === source) break;
      }
    }
    return !!source.closest(':disabled, [aria-disabled="true"], [inert]');
  }

  private hasTextSelection(): boolean {
    const source = this.elementRef.nativeElement;
    const selection = source.ownerDocument.getSelection();
    return !!selection && !selection.isCollapsed && (source.contains(selection.anchorNode) || source.contains(selection.focusNode));
  }

  private openTouchMenu(press: TouchPress): void {
    if (this.touchPress !== press || press.opened) return;
    const source = this.elementRef.nativeElement;
    if (
      !this.bxContextMenuLongPress() ||
      !source.isConnected ||
      source.isContentEditable ||
      source.closest(':disabled, [aria-disabled="true"], [inert]') ||
      this.hasTextSelection()
    ) {
      this.cancelTouchPress();
      return;
    }
    press.opened = true;
    this.elementRef.nativeElement.ownerDocument.defaultView?.clearTimeout(press.timer);
    this.guardTouchRelease();
    this.openAt(press.x, press.y + 12);
  }

  private cancelTouchPress(): void {
    const press = this.touchPress;
    if (!press) return;
    this.touchPress = undefined;
    const win = this.elementRef.nativeElement.ownerDocument.defaultView;
    win?.clearTimeout(press.timer);
    press.events.abort();
    if (press.opened && win) this.touchGuardTimer = win.setTimeout(() => this.clearTouchGuard(), 800);
  }

  private guardTouchRelease(): void {
    this.clearTouchGuard();
    const doc = this.elementRef.nativeElement.ownerDocument;
    const guard = new AbortController();
    this.touchGuard = guard;
    const options = { capture: true, signal: guard.signal };
    // Consume only the hold's compatibility click; a fresh press can select or dismiss normally.
    doc.addEventListener(
      'click',
      (event) => {
        if (event.detail === 0) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        this.clearTouchGuard();
      },
      options
    );
    doc.addEventListener(
      'contextmenu',
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
      },
      options
    );
    doc.addEventListener(
      'pointerdown',
      (event) => {
        if (event.isPrimary) this.clearTouchGuard();
      },
      { ...options, passive: true }
    );
    doc.addEventListener('keydown', () => this.clearTouchGuard(), options);
  }

  private clearTouchGuard(): void {
    this.touchGuard?.abort();
    this.touchGuard = undefined;
    this.elementRef.nativeElement.ownerDocument.defaultView?.clearTimeout(this.touchGuardTimer);
    this.touchGuardTimer = undefined;
  }

  private openAt(x: number, y: number): void {
    this.dispose();
    ++this.revision;
    const source = this.elementRef.nativeElement;
    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionBuilder.getCoordinateStrategy(x, y),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover: !!this.overlayContext?.useTopLayer || !!source.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]'),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
    this.subscriptions = new Subscription();
    const win = source.ownerDocument.defaultView;
    if (win) {
      this.zone.runOutsideAngular(() => {
        const closeOnScroll = (event: Event) => {
          const target = event.target;
          if (this.overlayRef?.overlayElement.inert) return;
          if (target === win || (target instanceof Node && target.contains(source))) this.zone.run(() => this.close());
        };
        win.addEventListener('scroll', closeOnScroll, { capture: true, passive: true });
        this.subscriptions.add(() => win.removeEventListener('scroll', closeOnScroll, true));
      });
    }
    this.subscriptions.add(this.overlayRef.backdropClick().subscribe(() => this.close()));
    this.subscriptions.add(this.overlayRef.detachments().subscribe(() => this.dispose()));
    this.subscriptions.add(this.overlayRef.keydownEvents().subscribe((event) => this.onMenuKey(event)));
    const pane = this.overlayRef.overlayElement;
    this.disconnectTheme = this.zone.runOutsideAngular(() => inheritOverlayTheme(source, pane));
    this.disconnectLighting = inheritGlassLighting(pane, source);
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
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
  }
}
