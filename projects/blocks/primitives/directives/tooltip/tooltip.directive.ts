import type { InputSignal, InputSignalWithTransform } from '@angular/core';

import { AriaDescriber, FocusMonitor } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { booleanAttribute, ComponentRef, DestroyRef, Directive, effect, ElementRef, HostListener, inject, input, NgZone, numberAttribute } from '@angular/core';

import {
  BX_I18N,
  BxA11yService,
  BxOverlayPositionService,
  BxPlacement,
  inheritOverlayTheme,
  ResolvableText,
  resolveText,
  trackOverlayOrigin,
  uuidv4
} from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';

import { Tooltip } from '@primitives/components/tooltip/tooltip';
import { ContextMenuDirective } from '@primitives/directives/context-menu/context-menu.directive';
import { BX_OVERLAY_CONTEXT } from '@primitives/tokens/overlay-context.token';

@Directive({ selector: '[bxTooltip]' })
export class TooltipDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly ngZone = inject(NgZone);
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly ariaDescriber = inject(AriaDescriber);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly contextMenuDirective = inject(ContextMenuDirective, { optional: true });

  private readonly id: string = `bx-tooltip-${uuidv4()}`;

  /** Tooltip text or translation key; empty text suppresses the overlay. Required input. */
  public readonly bxTooltip: InputSignal<ResolvableText> = input.required<ResolvableText>();
  /** Preferred overlay side; the shared positioner applies viewport-aware fallback placement. Defaults to `'bottom'`. */
  public readonly placement: InputSignal<BxPlacement> = input<BxPlacement>('bottom');
  /** Whether touch-and-hold may show the tooltip. Defaults to `'none'`. */
  public readonly bxTooltipTouch: InputSignal<'none' | 'longpress' | 'tap'> = input<'none' | 'longpress' | 'tap'>('none');
  /** Whether pointer hover may show the tooltip. Defaults to `true`. */
  public readonly bxTooltipHover: InputSignal<boolean> = input(true);
  /** Mouse-hover and keyboard-focus dwell in milliseconds before visual opening. Defaults to 0. Negative/nonfinite values act as 0; touch timing and explicit show() are independent. */
  public readonly bxTooltipDwell: InputSignalWithTransform<number, unknown> = input(0, { transform: numberAttribute });
  /** Whether the tooltip only appears when the host's own text is visually truncated. Defaults to `false`. */
  public readonly bxTooltipTruncatedOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  private overlayRef: OverlayRef | null = null;
  private tooltipComponent?: ComponentRef<Tooltip>;
  private transition?: ReturnType<typeof createGlassTransition>;
  private disconnectOrigin?: () => void;
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private positionSubscription?: { unsubscribe(): void };
  private keyboardSubscription?: { unsubscribe(): void };
  private revision: number = 0;
  private hovered: boolean = false;
  private bubbleHovered: boolean = false;
  private hoverGap: boolean = false;
  private hoverHideTimer?: ReturnType<typeof setTimeout>;
  private hoverEvents?: AbortController;
  private dwellTimer?: ReturnType<typeof setTimeout>;
  private dwellEvents?: AbortController;
  private focused: boolean = false;
  private lastPointerType: string = '';
  private touchEvents?: AbortController;
  private holdTimer?: number;
  private touchHideTimer?: number;
  private touchVisible: boolean = false;
  private closeTouchTap: boolean = false;

  constructor() {
    const source = this.elementRef.nativeElement;
    const focus = source.ownerDocument.defaultView
      ? this.focusMonitor.monitor(source, true).subscribe((origin) =>
          this.ngZone.run(() => {
            this.focused = origin === 'keyboard';

            if (this.focused) {
              this.clearTouchInteraction();
              this.scheduleShow();
            } else if (!this.hovered && !this.bubbleHovered && !this.touchEvents) this.scheduleHoverHide();
          })
        )
      : undefined;

    effect((onCleanup) => {
      this.i18n?.version?.();
      this.bxTooltipDwell();
      this.cancelDwell();

      const text = this.bxTooltip();
      const description = resolveText(text, this.i18n);

      if (!description) {
        if (this.overlayRef) this.hide();

        return;
      }

      this.tooltipComponent?.setInput('text', text);

      if (this.hovered || this.focused) this.scheduleShow();

      this.ariaDescriber.describe(source, description, 'tooltip');
      onCleanup(() => this.ariaDescriber.removeDescription(source, description, 'tooltip'));
    });
    inject(DestroyRef).onDestroy(() => {
      ++this.revision;
      focus?.unsubscribe();

      if (focus) this.focusMonitor.stopMonitoring(source);

      this.clearTouchInteraction();
      this.dispose();
    });
  }

  /** Show nonempty tooltip content using shared positioning, theming, and accessibility behavior. */
  public show(): void {
    this.cancelDwell();
    clearTimeout(this.hoverHideTimer);
    this.hoverHideTimer = undefined;

    if (!this.bxTooltip()) return;

    if (this.bxTooltipTruncatedOnly() && !this.isTruncated()) return;

    const revision = ++this.revision;

    if (!this.overlayRef) {
      const strategy = this.bxOverlayPositionService.getElementStrategy(this.elementRef.nativeElement, this.placement()).withFlexibleDimensions(false);

      this.overlayRef = this.overlay.create({
        positionStrategy: strategy,
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        usePopover: this.overlayContext?.useTopLayer ?? true,
        hasBackdrop: false,
        panelClass: 'bx-tooltip-pane'
      });

      const pane = this.overlayRef.overlayElement;

      pane.id = this.id;
      pane.setAttribute('role', 'tooltip');
      // AriaDescriber supplies the description even when the visual tooltip is hidden.
      pane.setAttribute('aria-hidden', 'true');
      this.disconnectTheme = this.ngZone.runOutsideAngular(() => inheritOverlayTheme(this.elementRef.nativeElement, pane));
      this.disconnectLighting = inheritGlassLighting(pane, this.elementRef.nativeElement);

      const component = this.overlayRef.attach(new ComponentPortal(Tooltip));

      this.tooltipComponent = component;
      pane.style.pointerEvents = 'auto';
      this.hoverEvents = new AbortController();
      this.elementRef.nativeElement.ownerDocument.addEventListener('pointermove', (event) => this.onHoverMove(event), {
        passive: true,
        signal: this.hoverEvents.signal
      });
      pane.addEventListener(
        'pointerenter',
        (event) => {
          if (event.pointerType !== 'mouse') return;

          this.bubbleHovered = true;
          clearTimeout(this.hoverHideTimer);
          this.hoverHideTimer = undefined;
        },
        { signal: this.hoverEvents.signal }
      );
      pane.addEventListener(
        'pointerleave',
        (event) => {
          if (event.pointerType !== 'mouse') return;

          this.bubbleHovered = false;
          this.onHoverMove(event);
          this.scheduleHoverHide();
        },
        { signal: this.hoverEvents.signal }
      );
      this.keyboardSubscription = this.overlayRef.keydownEvents().subscribe((event) => this.onEscape(event));
      component.setInput('text', this.bxTooltip());
      component.changeDetectorRef.detectChanges();

      const positionArrow = () => {
        const trigger = this.elementRef.nativeElement.getBoundingClientRect();
        const bounds = pane.getBoundingClientRect();

        pane.style.setProperty('--bx-tooltip-arrow-x', `${trigger.left + trigger.width / 2 - bounds.left}px`);
        pane.style.setProperty('--bx-tooltip-arrow-y', `${trigger.top + trigger.height / 2 - bounds.top}px`);
        this.transition?.refresh();
      };

      this.positionSubscription = strategy.positionChanges.subscribe(positionArrow);
      this.overlayRef.updatePosition();
      positionArrow();

      const overlay = this.overlayRef;

      this.disconnectOrigin = this.ngZone.runOutsideAngular(() => trackOverlayOrigin(overlay, this.elementRef.nativeElement, { onPosition: positionArrow }));

      if (!this.bxA11yService.isReducedMotion()) {
        this.transition = this.ngZone.runOutsideAngular(() => createGlassTransition(this.elementRef.nativeElement, pane));
      }
    }

    void Promise.resolve(this.ngZone.runOutsideAngular(() => this.transition?.enter())).catch(() => {
      if (revision === this.revision) {
        this.transition?.destroy();
        this.transition = undefined;
      }
    });
  }

  /** Dismiss the owned tooltip and release its current overlay state. */
  public hide(): void {
    this.cancelDwell();
    clearTimeout(this.hoverHideTimer);
    this.hoverHideTimer = undefined;
    this.clearTouchInteraction();
    this.hoverGap = false;

    const revision = ++this.revision;

    if (!this.overlayRef) return;

    const transition = this.transition;

    if (transition && !this.bxA11yService.isReducedMotion()) {
      void this.ngZone
        .runOutsideAngular(() => transition.exit())
        .then(() => {
          if (revision === this.revision) this.dispose();
        })
        .catch(() => {
          if (revision === this.revision) this.dispose();
        });
    } else this.dispose();
  }

  @HostListener('pointerenter', ['$event'])
  protected onEnter(event: PointerEvent): void {
    if (event.pointerType !== 'mouse' || !this.bxTooltipHover()) return;

    this.clearTouchInteraction();
    this.hovered = true;
    this.scheduleShow();
  }

  @HostListener('pointerleave', ['$event'])
  protected onLeave(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;

    this.hovered = false;
    this.onHoverMove(event);
    this.scheduleHoverHide();
  }

  @HostListener('pointerdown', ['$event'])
  protected onPointerDown(event: PointerEvent): void {
    this.lastPointerType = event.pointerType;

    if (event.pointerType !== 'touch') return;

    this.closeTouchTap = this.touchVisible && this.bxTooltipTouch() === 'tap';
    this.hovered = false;
    this.focused = false;
    this.hide();

    if (this.bxTooltipTouch() !== 'longpress' || !event.isPrimary || event.button !== 0 || !this.canUseTouch(event)) return;

    this.ngZone.runOutsideAngular(() => this.startTouchInteraction(event));
  }

  @HostListener('click', ['$event'])
  protected onClick(event: MouseEvent): void {
    if (event.detail === 0 || this.lastPointerType !== 'touch' || this.bxTooltipTouch() !== 'tap' || !this.canUseTouch(event)) return;

    if (this.closeTouchTap) {
      this.closeTouchTap = false;

      return;
    }

    this.ngZone.runOutsideAngular(() => this.startTouchInteraction());
  }

  @HostListener('document:keydown', ['$event'])
  protected onEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape' && (this.overlayRef || this.dwellTimer !== undefined)) {
      event.preventDefault();
      event.stopPropagation();
      this.hovered = false;
      this.focused = false;
      this.hide();
    }
  }

  //#region Helpers

  private scheduleShow(): void {
    if (this.overlayRef) {
      this.show();

      return;
    }

    if (this.dwellTimer !== undefined || !this.bxTooltip()) return;

    const requested = this.bxTooltipDwell();
    const delay = Number.isFinite(requested) ? Math.max(0, requested) : 0;
    const source = this.elementRef.nativeElement;
    const win = source.ownerDocument.defaultView;

    if (!delay || !win) {
      this.show();

      return;
    }

    this.dwellEvents = new AbortController();

    const options = { signal: this.dwellEvents.signal, capture: true, passive: true };

    source.ownerDocument.addEventListener('scroll', () => this.cancelDwell(), options);
    source.ownerDocument.addEventListener(
      'visibilitychange',
      () => {
        if (source.ownerDocument.hidden) this.cancelDwell();
      },
      options
    );
    win.addEventListener('blur', () => this.cancelDwell(), options);
    this.dwellTimer = setTimeout(() => {
      this.dwellTimer = undefined;
      this.dwellEvents?.abort();
      this.dwellEvents = undefined;

      if (
        ((this.hovered && this.bxTooltipHover()) || this.focused) &&
        source.isConnected &&
        !source.closest('[inert], [hidden], [aria-hidden="true"]') &&
        !source.ownerDocument.hidden
      ) {
        this.ngZone.run(() => this.show());
      }
    }, delay);
  }

  private cancelDwell(): void {
    clearTimeout(this.dwellTimer);
    this.dwellTimer = undefined;
    this.dwellEvents?.abort();
    this.dwellEvents = undefined;
  }

  private onHoverMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse' || !this.overlayRef) return;

    const trigger = this.elementRef.nativeElement.getBoundingClientRect();
    const bubble = this.overlayRef.overlayElement.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    const verticalGap =
      ((y >= bubble.bottom && y <= trigger.top) || (y >= trigger.bottom && y <= bubble.top)) &&
      x >= Math.min(trigger.left, bubble.left) &&
      x <= Math.max(trigger.right, bubble.right);
    const horizontalGap =
      ((x >= bubble.right && x <= trigger.left) || (x >= trigger.right && x <= bubble.left)) &&
      y >= Math.min(trigger.top, bubble.top) &&
      y <= Math.max(trigger.bottom, bubble.bottom);

    this.hoverGap = verticalGap || horizontalGap;
    this.scheduleHoverHide();
  }

  private scheduleHoverHide(): void {
    if (!this.hovered && !this.focused) this.cancelDwell();

    if (this.hovered || this.bubbleHovered || this.hoverGap || this.focused || this.touchVisible) {
      clearTimeout(this.hoverHideTimer);
      this.hoverHideTimer = undefined;

      return;
    }

    if (this.hoverHideTimer !== undefined) return;

    this.hoverHideTimer = setTimeout(() => {
      this.hoverHideTimer = undefined;

      if (!this.hovered && !this.bubbleHovered && !this.hoverGap && !this.focused && !this.touchVisible) this.hide();
    }, 180);
  }

  private isTruncated(): boolean {
    const source = this.elementRef.nativeElement;

    return source.scrollWidth > source.clientWidth || source.scrollHeight > source.clientHeight;
  }

  private canUseTouch(event: Event): boolean {
    if (this.contextMenuDirective && this.bxTooltipTouch() === 'longpress') return false;

    const source = this.elementRef.nativeElement;

    if (source.closest(':disabled, [aria-disabled="true"], [inert]')) return false;

    return !event.composedPath().some((node) => node instanceof HTMLElement && (node.isContentEditable || node.matches('input, textarea, select')));
  }

  private hasTextSelection(): boolean {
    const source = this.elementRef.nativeElement;
    const selection = source.ownerDocument.getSelection();

    return !!selection && !selection.isCollapsed && (source.contains(selection.anchorNode) || source.contains(selection.focusNode));
  }

  private startTouchInteraction(press?: PointerEvent): void {
    const source = this.elementRef.nativeElement;
    const doc = source.ownerDocument;
    const win = doc.defaultView;

    if (!win || this.hasTextSelection()) return;

    this.clearTouchInteraction();

    const events = new AbortController();

    this.touchEvents = events;

    const options = { capture: true, passive: true, signal: events.signal };
    const dismiss = () => this.ngZone.run(() => this.hide());

    let suppressReleaseClick = false;

    doc.addEventListener(
      'pointerdown',
      (event) => {
        if (!press && event.target instanceof Node && source.contains(event.target)) return;

        dismiss();
      },
      options
    );
    doc.addEventListener('scroll', dismiss, options);
    doc.addEventListener(
      'visibilitychange',
      () => {
        if (doc.hidden) dismiss();
      },
      options
    );
    win.addEventListener('blur', dismiss, { signal: events.signal });

    if (!press) {
      this.touchVisible = true;
      this.ngZone.run(() => this.show());

      return;
    }

    doc.addEventListener(
      'pointermove',
      (event) => {
        if (event.pointerId === press.pointerId && !this.touchVisible && Math.hypot(event.clientX - press.clientX, event.clientY - press.clientY) > 10)
          dismiss();
      },
      options
    );
    doc.addEventListener(
      'pointerup',
      (event) => {
        if (event.pointerId !== press.pointerId) return;

        if (!this.touchVisible) dismiss();
        else this.touchHideTimer = win.setTimeout(dismiss, 1500);
      },
      options
    );
    doc.addEventListener(
      'pointercancel',
      (event) => {
        if (event.pointerId === press.pointerId) dismiss();
      },
      options
    );
    doc.addEventListener(
      'click',
      (event) => {
        if (!suppressReleaseClick || event.detail === 0) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        suppressReleaseClick = false;
      },
      { ...options, passive: false }
    );
    doc.addEventListener(
      'contextmenu',
      (event) => {
        if (event.target instanceof Node && source.contains(event.target) && !this.hasTextSelection()) event.preventDefault();
      },
      { ...options, passive: false }
    );
    this.holdTimer = win.setTimeout(() => {
      if (
        this.bxTooltipTouch() !== 'longpress' ||
        !source.isConnected ||
        source.closest(':disabled, [aria-disabled="true"], [inert]') ||
        this.hasTextSelection()
      ) {
        dismiss();

        return;
      }

      this.touchVisible = true;
      suppressReleaseClick = true;
      this.ngZone.run(() => this.show());
    }, 500);
  }

  private clearTouchInteraction(): void {
    this.touchEvents?.abort();
    this.touchEvents = undefined;

    const win = this.elementRef.nativeElement.ownerDocument.defaultView;

    win?.clearTimeout(this.holdTimer);
    win?.clearTimeout(this.touchHideTimer);
    this.holdTimer = undefined;
    this.touchHideTimer = undefined;
    this.touchVisible = false;
  }

  private dispose(): void {
    this.cancelDwell();
    clearTimeout(this.hoverHideTimer);
    this.hoverHideTimer = undefined;
    this.hoverEvents?.abort();
    this.hoverEvents = undefined;
    this.bubbleHovered = false;
    this.hoverGap = false;
    this.keyboardSubscription?.unsubscribe();
    this.keyboardSubscription = undefined;
    this.positionSubscription?.unsubscribe();
    this.positionSubscription = undefined;
    this.disconnectOrigin?.();
    this.disconnectOrigin = undefined;
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.transition?.destroy();
    this.transition = undefined;
    this.overlayRef?.dispose();
    this.overlayRef = null;
    this.tooltipComponent = undefined;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
  }

  //#endregion
}
