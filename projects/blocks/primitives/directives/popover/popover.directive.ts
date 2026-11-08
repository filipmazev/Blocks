import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { InteractivityChecker } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  output,
  PLATFORM_ID,
  signal,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import type { IPopoverDirectiveSettingsState } from '@primitives/interfaces/ipopover-directive-settings-state.interface';

import { BX_I18N, BxA11yService, BxOverlayPositionService, inheritOverlayTheme, resolveText, trackOverlayOrigin, uuidv4 } from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';

import { IPopoverConfig } from '@primitives/interfaces/ipopover-config.interface';
import { BX_OVERLAY_CONTEXT } from '@primitives/tokens/overlay-context.token';
import { BX_POPOVER_DEFAULTS } from '@primitives/tokens/popover-defaults.token';

@Directive({
  selector: '[bxPopover]',
  exportAs: 'bxPopover',
  host: {
    'aria-haspopup': 'dialog',
    '[attr.aria-expanded]': 'isOpen()',
    '[attr.aria-controls]': 'isOpen() ? panelId : null',
    '(click)': 'toggle()',
    '(document:focusin)': 'onFocusIn($event)'
  }
})
export class PopoverDirective {
  private readonly bxA11yService = inject(BxA11yService);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly overlay = inject(Overlay);
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly interactivityChecker = inject(InteractivityChecker);
  private readonly context = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly defaults = inject(BX_POPOVER_DEFAULTS, { optional: true });

  private readonly browser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly opened: WritableSignal<boolean> = signal(false);

  private readonly settings: Signal<IPopoverDirectiveSettingsState> = computed(() => {
    const config = this.popoverConfig();

    return {
      placement: config.placement ?? this.defaults?.placement ?? 'bottom',
      offset: config.offset ?? this.defaults?.offset ?? 8,
      ariaLabel: config.ariaLabel ?? this.defaults?.ariaLabel ?? 'Details',
      autoFocus: config.autoFocus ?? this.defaults?.autoFocus ?? true,
      closeOnOutside: config.closeOnOutside ?? this.defaults?.closeOnOutside ?? true,
      closeOnEscape: config.closeOnEscape ?? this.defaults?.closeOnEscape ?? true,
      closeOnFocusOutside: config.closeOnFocusOutside ?? this.defaults?.closeOnFocusOutside ?? true
    };
  });
  private readonly accessibleName: Signal<string> = computed(() => resolveText(this.settings().ariaLabel ?? 'Details', this.i18n));

  protected readonly panelId: string = 'bx-popover-' + uuidv4();

  /** Current open state of the overlay. */
  public readonly isOpen: Signal<boolean> = this.opened.asReadonly();

  /** Template rendered inside the popover overlay. Required input. */
  public readonly bxPopover: InputSignal<TemplateRef<unknown>> = input.required<TemplateRef<unknown>>();
  /** Instance content, placement, accessibility, and appearance settings for the popover. Defaults to an empty configuration. */
  public readonly popoverConfig: InputSignal<IPopoverConfig> = input<IPopoverConfig>({});
  /** Whether popover opening is suppressed. Defaults to `false`. */
  public readonly popoverDisabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /** Emits the new open state after an overlay presentation changes. */
  public readonly openedChange: OutputEmitterRef<boolean> = output<boolean>();

  private overlayRef?: OverlayRef;
  private subscriptions: Subscription = new Subscription();
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private disconnectOrigin?: () => void;
  private transition?: ReturnType<typeof createGlassTransition>;
  private presentationRevision: number = 0;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.dispose());
    effect(() => {
      if (this.popoverDisabled() && this.isOpen()) this.close();

      const config = this.settings();
      const name = this.accessibleName();
      const overlay = this.overlayRef;

      if (overlay) {
        overlay.overlayElement.setAttribute('aria-label', name);
        this.disconnectOrigin?.();
        overlay.updatePositionStrategy(this.bxOverlayPositionService.getElementStrategy(this.nativeElement, config.placement ?? 'bottom', config.offset ?? 8));
        this.disconnectOrigin = this.ngZone.runOutsideAngular(() => trackOverlayOrigin(overlay, this.nativeElement));
      }
    });
  }

  /** Toggle the component's open state through the same guards used by open() and close(). */
  public toggle(): void {
    if (this.isOpen()) this.close();
    else this.open();
  }

  /** Open the component's overlay using its current configuration and shared positioning/focus mechanisms. */
  public open(): void {
    if (!this.browser || this.isOpen() || this.popoverDisabled() || this.nativeElement.matches(':disabled, [aria-disabled="true"]')) return;

    if (this.overlayRef) this.dispose();

    const config = this.settings();
    const overlay = this.overlay.create({
      positionStrategy: this.bxOverlayPositionService.getElementStrategy(this.nativeElement, config.placement ?? 'bottom', config.offset ?? 8),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover:
        !!this.context?.useTopLayer || !!this.nativeElement.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]')
    });

    this.overlayRef = overlay;
    this.opened.set(true);

    const pane = overlay.overlayElement;

    pane.id = this.panelId;
    pane.tabIndex = -1;
    pane.setAttribute('role', 'dialog');
    pane.setAttribute('aria-label', this.accessibleName());
    this.disconnectTheme = this.ngZone.runOutsideAngular(() => inheritOverlayTheme(this.nativeElement, pane));
    this.disconnectLighting = inheritGlassLighting(pane, this.nativeElement);
    this.disconnectOrigin = this.ngZone.runOutsideAngular(() => trackOverlayOrigin(overlay, this.nativeElement));
    this.subscriptions.add(
      overlay.outsidePointerEvents().subscribe((event) => {
        if ((this.settings().closeOnOutside ?? true) && !this.nativeElement.contains(event.target as Node)) this.close(false);
      })
    );
    this.subscriptions.add(overlay.keydownEvents().subscribe((event) => this.onPanelKey(event)));

    const view = overlay.attach(new TemplatePortal(this.bxPopover(), this.viewContainerRef));

    view.detectChanges();
    overlay.updatePosition();
    this.transition = this.ngZone.runOutsideAngular(() => createGlassTransition(this.nativeElement, pane));
    void this.ngZone.runOutsideAngular(() => this.transition?.enter());

    if (config.autoFocus ?? true) (this.tabbableElements()[0] ?? pane).focus({ preventScroll: true });

    this.openedChange.emit(true);
  }

  /**
   * Restores trigger focus by default when focus is inside the panel.
   * Reports closed state immediately and retains an inert panel through the shared exit; reopening or destruction cancels stale completion.
   *
   * @param restoreFocus - Whether focus should return to the opening control after closing. Defaults to `true`.
   */
  public close(restoreFocus = true): void {
    if (!this.overlayRef) return;

    const pane = this.overlayRef.overlayElement;

    if (restoreFocus && pane.contains(this.nativeElement.ownerDocument.activeElement)) this.nativeElement.focus({ preventScroll: true });

    const revision = ++this.presentationRevision;
    const transition = this.transition;

    this.opened.set(false);
    pane.inert = true;

    const finish = (): void => {
      if (revision === this.presentationRevision) this.dispose();
    };

    if (transition && !this.bxA11yService.isReducedMotion()) void this.ngZone.runOutsideAngular(() => transition.exit()).then(finish, finish);
    else finish();

    this.openedChange.emit(false);
  }

  protected onFocusIn(event: FocusEvent): void {
    const target = event.target as Node | null;

    // Embedded selects, menus and other connected controls render their focused content in a separate CDK pane.
    if (target instanceof Element && target.closest('.cdk-overlay-pane')) return;

    if (
      this.isOpen() &&
      (this.settings().closeOnFocusOutside ?? true) &&
      target &&
      !this.nativeElement.contains(target) &&
      !this.overlayRef?.overlayElement.contains(target)
    ) {
      this.close(false);
    }
  }

  //#region Helpers

  private onPanelKey(event: KeyboardEvent): void {
    if (event.defaultPrevented) return;

    if (event.key === 'Escape' && (this.settings().closeOnEscape ?? true)) {
      event.preventDefault();
      event.stopPropagation();
      this.close();
    } else if (event.key === 'Tab') {
      const items = this.tabbableElements();
      const active = this.nativeElement.ownerDocument.activeElement;
      const atBoundary = !items.length || (event.shiftKey ? active === items[0] : active === items[items.length - 1]);

      if (!atBoundary) return;

      if (event.shiftKey) event.preventDefault();

      this.close();
    }
  }

  private tabbableElements(): HTMLElement[] {
    return Array.from(this.overlayRef?.overlayElement.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]') ?? []).filter(
      (element) => this.interactivityChecker.isTabbable(element)
    );
  }

  private dispose(): void {
    ++this.presentationRevision;
    this.transition?.destroy();
    this.transition = undefined;
    this.opened.set(false);
    this.subscriptions.unsubscribe();
    this.subscriptions = new Subscription();
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
    this.disconnectOrigin?.();
    this.disconnectOrigin = undefined;
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }

  //#endregion
}
