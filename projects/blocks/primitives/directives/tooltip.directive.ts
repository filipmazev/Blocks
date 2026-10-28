import { DestroyRef, Directive, ElementRef, HostListener, inject, input, NgZone } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BxA11yService, BxPlacement, BxOverlayPositionService, inheritOverlayTheme, ResolvableText, uuidv4 } from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { Tooltip } from '../components/tooltip/tooltip';

@Directive({ selector: '[bxTooltip]' })
export class TooltipDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly overlay = inject(Overlay);
  private readonly positionBuilder = inject(BxOverlayPositionService);
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly id = `bx-tooltip-${uuidv4()}`;
  public readonly bxTooltip = input.required<ResolvableText>();
  public readonly placement = input<BxPlacement>('bottom');
  private overlayRef: OverlayRef | null = null;
  private transition?: ReturnType<typeof createGlassTransition>;
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private positionSubscription?: { unsubscribe(): void };
  private keyboardSubscription?: { unsubscribe(): void };
  private revision = 0;
  private hovered = false;
  private focused = false;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.dispose());
  }

  public show(): void {
    if (!this.bxTooltip()) return;
    const revision = ++this.revision;
    if (!this.overlayRef) {
      const strategy = this.positionBuilder.getElementStrategy(this.elementRef.nativeElement, this.placement()).withFlexibleDimensions(false);
      this.overlayRef = this.overlay.create({
        positionStrategy: strategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        hasBackdrop: false,
        panelClass: 'bx-tooltip-pane'
      });

      const pane = this.overlayRef.overlayElement;
      pane.id = this.id;
      pane.setAttribute('role', 'tooltip');
      this.disconnectTheme = this.zone.runOutsideAngular(() => inheritOverlayTheme(this.elementRef.nativeElement, pane));
      this.disconnectLighting = inheritGlassLighting(pane, this.elementRef.nativeElement);

      const component = this.overlayRef.attach(new ComponentPortal(Tooltip));
      // CDK enables pane pointer events during attach. Reset afterwards so the
      // emerging tooltip cannot steal hover from small or nested triggers.
      pane.style.pointerEvents = 'none';
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

      if (!this.a11y.isReducedMotion()) {
        this.transition = this.zone.runOutsideAngular(() => createGlassTransition(this.elementRef.nativeElement, pane));
      }
    }

    const source = this.elementRef.nativeElement;
    const ids = new Set((source.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean));

    ids.add(this.id);
    source.setAttribute('aria-describedby', [...ids].join(' '));

    void Promise.resolve(this.zone.runOutsideAngular(() => this.transition?.enter())).catch(() => {
      if (revision === this.revision) {
        this.transition?.destroy();
        this.transition = undefined;
      }
    });
  }

  public hide(): void {
    const revision = ++this.revision;
    this.removeDescription();
    if (!this.overlayRef) return;
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

  @HostListener('mouseenter')
  protected onEnter(): void {
    this.hovered = true;
    this.show();
  }

  @HostListener('mouseleave')
  protected onLeave(): void {
    this.hovered = false;
    if (!this.focused) this.hide();
  }

  @HostListener('focusin')
  protected onFocus(): void {
    this.focused = true;
    this.show();
  }

  @HostListener('focusout', ['$event'])
  protected onBlur(event: FocusEvent): void {
    if (event.relatedTarget instanceof Node && this.elementRef.nativeElement.contains(event.relatedTarget)) return;
    this.focused = false;
    if (!this.hovered) this.hide();
  }

  protected onEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.overlayRef) {
      event.stopPropagation();
      this.hovered = false;
      this.focused = false;
      this.hide();
    }
  }

  private removeDescription(): void {
    const source = this.elementRef.nativeElement;
    const ids = (source.getAttribute('aria-describedby') ?? '').split(/\s+/).filter((id) => id && id !== this.id);
    if (ids.length) source.setAttribute('aria-describedby', ids.join(' '));
    else source.removeAttribute('aria-describedby');
  }

  private dispose(): void {
    this.removeDescription();
    this.keyboardSubscription?.unsubscribe();
    this.keyboardSubscription = undefined;
    this.positionSubscription?.unsubscribe();
    this.positionSubscription = undefined;
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.transition?.destroy();
    this.transition = undefined;
    this.overlayRef?.dispose();
    this.overlayRef = null;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
  }
}
