import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  model,
  NgZone,
  output,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import type { Subscription } from 'rxjs';

import type { OverlayOriginTracker } from '@filip.mazev/blocks/core';
import type { PickerSurfacePresentation } from '@forms/types/date-picker.types';

import {
  BX_I18N,
  BxOverlayPositionService,
  inheritOverlayTheme,
  ResolvableText,
  resolveText,
  ScrollLockService,
  trackOverlayOrigin,
  uuidv4
} from '@filip.mazev/blocks/core';
import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { BottomDrawer } from '@filip.mazev/blocks/primitives';

/**
 * Shared host for date and time picker content.
 *
 * Resolves the configured presentation at runtime: an anchored CDK popover on larger viewports, the reusable Blocks bottom drawer on narrow or touch
 * layouts, or inline content with no overlay. It owns outside-dismissal, Escape handling, focus restoration, theme and lighting inheritance, so picker
 * components only contribute draft state and panel content.
 */
@Component({
  selector: 'bx-picker-surface',
  imports: [BottomDrawer, NgTemplateOutlet],
  templateUrl: './picker-surface.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './picker-surface.scss'
})
export class PickerSurface {
  private readonly overlay = inject(Overlay);
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollLockService = inject(ScrollLockService);
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly platformId = inject(PLATFORM_ID);

  private readonly overlaySubscriptions: Subscription[] = [];

  private readonly browser: boolean = isPlatformBrowser(this.platformId);

  private readonly scrollLockId: string = uuidv4();

  protected readonly resolvedAriaLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly isDrawer: Signal<boolean> = computed(() => this.presentation() === 'drawer');
  protected readonly isInline: Signal<boolean> = computed(() => this.presentation() === 'inline');
  protected readonly drawerClasses: Signal<string> = computed(() => `bx-picker-drawer ${this.panelClass()}`.trim());

  /** Whether the picker content is open; supports two-way binding. Defaults to `false`. */
  public readonly open: ModelSignal<boolean> = model<boolean>(false);

  /** Resolved presentation used to render the picker content. Defaults to `'popover'`. */
  public readonly presentation: InputSignal<PickerSurfacePresentation> = input<PickerSurfacePresentation>('popover');
  /** Element the popover anchors to; required for popover presentation. Optional. */
  public readonly origin: InputSignal<HTMLElement | null> = input<HTMLElement | null>(null);
  /** Panel content template supplied by the owning picker. Required input. */
  public readonly content: InputSignal<TemplateRef<unknown> | null> = input<TemplateRef<unknown> | null>(null);
  /** Accessible name of the panel; translation keys resolve through BX_I18N. Defaults to `'Picker'`. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>('Picker');
  /** Optional stable ID used by a field's aria-controls association in every presentation. Defaults to an empty string. */
  public readonly panelId: InputSignal<string> = input('');
  /** Optional application CSS class applied to the panel or drawer surface. Defaults to `''`. */
  public readonly panelClass: InputSignal<string> = input('');
  /** Optional CSS width applied to the popover panel. Defaults to `''`. */
  public readonly panelWidth: InputSignal<string> = input('');
  /** Whether popovers move focus into the panel on opening. Defaults to true; editable pickers can retain focus in their field. */
  public readonly autoFocus: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether pointer interaction outside a popover dismisses it. Defaults to `true`. */
  public readonly dismissOnOutside: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether Escape dismisses the content. Defaults to `true`. */
  public readonly dismissOnEscape: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });

  /** Emits when the content reports that it should close. */
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- The signal output carries no payload, matching the shared overlay dismissal contract.
  public readonly dismiss: OutputEmitterRef<void> = output<void>();
  /** Emits after the popover presentation attaches or detaches. */
  public readonly openedChange: OutputEmitterRef<boolean> = output<boolean>();

  private focusTimer: ReturnType<typeof setTimeout> | undefined;
  private disconnectTheme: (() => void) | undefined;
  private disconnectLighting: (() => void) | undefined;
  private disconnectOrigin: OverlayOriginTracker | undefined;
  private overlayRef: OverlayRef | undefined;
  private transition: ReturnType<typeof createGlassTransition> | undefined;
  private presentationRevision: number = 0;
  private restoreTarget: HTMLElement | undefined;

  constructor() {
    effect(() => {
      const open = this.open();
      const presentation = this.presentation();

      if (!this.browser) return;

      if (presentation === 'popover') {
        if (open) {
          this.attachPopover();

          const pane = this.overlayRef?.overlayElement;

          if (pane) {
            pane.setAttribute('aria-label', this.resolvedAriaLabel());
            pane.id = this.panelId();
            pane.style.inlineSize = this.panelWidth();
            pane.style.maxInlineSize = this.panelWidth();
            this.disconnectOrigin?.reposition();
          }
        } else this.detachPopover();
      } else if (this.overlayRef) {
        this.disposePopover();
      }
    });

    this.destroyRef.onDestroy(() => this.disposePopover());
  }

  protected onDrawerClosed(): void {
    this.dismiss.emit();
    this.openedChange.emit(false);
  }

  //#region Helpers

  private attachPopover(): void {
    if (this.overlayRef?.overlayElement.inert) this.disposePopover(false);

    if (this.overlayRef) return;

    const origin = this.origin();
    const content = this.content();

    if (!origin || !content) return;

    this.restoreTarget = origin.ownerDocument.activeElement instanceof HTMLElement ? origin.ownerDocument.activeElement : origin;

    const overlayRef = this.overlay.create({
      positionStrategy: this.bxOverlayPositionService.getElementStrategy(origin, 'bottom', 6).withFlexibleDimensions(false),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover: !!origin.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]')
    });

    this.overlayRef = overlayRef;
    this.scrollLockService.disableScroll(this.scrollLockId, { handleTouchInput: true });

    const pane = overlayRef.overlayElement;

    pane.id = this.panelId();
    pane.setAttribute('role', 'dialog');
    pane.setAttribute('aria-label', this.resolvedAriaLabel());
    pane.tabIndex = -1;
    pane.classList.add('bx-picker-overlay-pane');

    if (this.panelClass()) pane.classList.add(...this.panelClass().split(/\s+/).filter(Boolean));

    if (this.panelWidth()) {
      pane.style.inlineSize = this.panelWidth();
      pane.style.maxInlineSize = this.panelWidth();
    }

    this.disconnectTheme = this.ngZone.runOutsideAngular(() => inheritOverlayTheme(origin, pane));
    this.disconnectLighting = inheritGlassLighting(pane, origin);

    const view = overlayRef.attach(new TemplatePortal(content, this.viewContainerRef));

    view.detectChanges();
    // The tracker owns both CDK measurements and native anchoring; bypassing it invalidates the anchor offsets.
    this.disconnectOrigin = this.ngZone.runOutsideAngular(() => trackOverlayOrigin(overlayRef, origin));
    this.openedChange.emit(true);

    // Keep adjoining calendar fills and nested lenses on a stable pixel grid throughout the fade.
    this.transition = this.ngZone.runOutsideAngular(() => createGlassTransition(origin, pane, { scale: 1 }));
    void this.ngZone.runOutsideAngular(() => this.transition?.enter());

    const outside = overlayRef.outsidePointerEvents().subscribe((event) => {
      if (this.dismissOnOutside() && !origin.contains(event.target as Node)) this.dismiss.emit();
    });
    const keys = overlayRef.keydownEvents().subscribe((event) => {
      if (event.key !== 'Escape' || !this.dismissOnEscape() || event.defaultPrevented) return;

      event.preventDefault();
      event.stopPropagation();
      this.dismiss.emit();
    });

    overlayRef.overlayElement.addEventListener('pointerdown', (event) => event.stopPropagation());
    this.overlaySubscriptions.push(outside, keys);

    this.focusTimer = setTimeout(() => {
      if (!this.autoFocus() || !this.open() || this.overlayRef !== overlayRef || pane.inert) return;

      const focusTarget =
        pane.querySelector<HTMLElement>('[data-picker-initial-focus], [data-focus-date][tabindex="0"], bx-time-wheel [role="listbox"]') ??
        pane.querySelector<HTMLElement>('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])') ??
        pane;

      focusTarget.focus({ preventScroll: true });
    });
  }

  private detachPopover(): void {
    const overlayRef = this.overlayRef;

    if (!overlayRef) return;

    const pane = overlayRef.overlayElement;
    const revision = ++this.presentationRevision;
    const transition = this.transition;

    clearTimeout(this.focusTimer);
    pane.inert = true;
    this.scrollLockService.enableScroll(this.scrollLockId);

    const finish = (): void => {
      if (revision === this.presentationRevision) this.disposePopover();
    };

    if (transition) void this.ngZone.runOutsideAngular(() => transition.exit()).then(finish, finish);
    else finish();

    this.openedChange.emit(false);
  }

  private disposePopover(restoreFocus: boolean = true): void {
    clearTimeout(this.focusTimer);

    for (const subscription of this.overlaySubscriptions.splice(0)) subscription.unsubscribe();

    ++this.presentationRevision;
    this.transition?.destroy();
    this.transition = undefined;
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
    this.disconnectOrigin?.();
    this.disconnectOrigin = undefined;
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
    this.scrollLockService.enableScroll(this.scrollLockId);

    if (restoreFocus && this.restoreTarget?.isConnected) this.restoreTarget.focus({ preventScroll: true });

    this.restoreTarget = undefined;
  }

  //#endregion
}
