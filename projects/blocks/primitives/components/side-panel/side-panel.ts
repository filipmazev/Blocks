import type { InputSignal, ModelSignal, Signal, WritableSignal } from '@angular/core';

import {
  afterNextRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  model,
  NgZone,
  signal,
  viewChild
} from '@angular/core';

import type { IIconData } from '@filip.mazev/blocks/icons';
import type { IBxOverlayContext } from '@primitives/interfaces/ibx-overlay-context.interface';
import type { IResizeHandleEvent } from '@primitives/interfaces/iresize-handle-event.interface';

import { BX_I18N, BxA11yService, inheritOverlayTheme, ResolvableText, resolveText, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';

import { ResizeHandleDirective } from '@primitives/directives/resize-handle/resize-handle.directive';
import { SidePanelBannerDirective } from '@primitives/directives/side-panel-banner/side-panel-banner.directive';
import { SidePanelFooterDirective } from '@primitives/directives/side-panel-footer/side-panel-footer.directive';
import { SidePanelHeaderDirective } from '@primitives/directives/side-panel-header/side-panel-header.directive';
import { BX_OVERLAY_CONTEXT } from '@primitives/tokens/overlay-context.token';
import { BX_SIDE_PANEL_LAYOUT } from '@primitives/tokens/side-panel-layout.token';
import { SidePanelBreakpoints, SidePanelLayoutMode, SidePanelPlacement } from '@primitives/types/side-panel.types';

/** Persistent, declaratively controlled nonmodal panel bounded by an element or the viewport. */
@Component({
  selector: 'bx-side-panel',
  imports: [BxSurfaceDirective, Icon, ResizeHandleDirective],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.scss',
  providers: [{ provide: BX_OVERLAY_CONTEXT, useValue: { useTopLayer: true } satisfies IBxOverlayContext }],
  host: {
    '[class.local-panel]': 'local()',
    '[style.--bx-panel-duration.ms]': 'duration()',
    '[style.inline-size]': 'reservedWidth()',
    '[style.flex-basis]': 'reservedWidth()',
    '[style.order]': 'placement() === "left" ? 0 : 2'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanel {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);
  private readonly layout = inject(BX_SIDE_PANEL_LAYOUT, { optional: true });
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly resizeHandle: Signal<ResizeHandleDirective | undefined> = viewChild(ResizeHandleDirective);
  private readonly layer: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('layer');
  private readonly surface: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('surface');

  protected readonly measuredWidth: WritableSignal<number> = signal(400);

  protected readonly local: Signal<boolean> = computed(
    () => !!this.layout && (this.container() === undefined || this.container() === this.layout.nativeElement)
  );
  protected readonly reservedWidth: Signal<string> = computed(() => {
    if (!this.open() || this.currentLayoutMode() !== 'push') return '0px';

    return this.resizable() ? `calc(${this.resolvedWidth()} + var(--bx-panel-resize-gutter))` : this.resolvedWidth();
  });
  protected readonly accessibleName: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly closeText: Signal<string> = computed(() => resolveText(this.closeLabel(), this.i18n));
  protected readonly duration: Signal<number> = computed(() => {
    const duration = this.animationDuration();

    return this.bxA11yService.isReducedMotion() || this.resizeHandle()?.resizing() ? 0 : Number.isFinite(duration) ? Math.max(0, duration) : 175;
  });
  protected readonly resolvedWidth: Signal<string> = computed(() => {
    const width = this.width();
    const preferred = typeof width === 'number' ? `${Number.isFinite(width) && width > 0 ? width : 400}px` : width;

    if (!this.resizable()) return preferred;

    const configuredMax = this.resizeMaxWidth();
    const configuredMin = this.resizeMinWidth();
    const maximum = configuredMax !== undefined && Number.isFinite(configuredMax) ? `min(100%, ${Math.max(0, configuredMax)}px)` : '50%';
    const minimum = configuredMin !== undefined && Number.isFinite(configuredMin) ? `${Math.max(0, configuredMin)}px` : '0px';

    return `clamp(min(${minimum}, ${maximum}), ${preferred}, ${maximum})`;
  });
  protected readonly resizeValue: Signal<number> = computed(() => {
    const width = this.width();

    return typeof width === 'number' && Number.isFinite(width) ? width : this.measuredWidth();
  });
  protected readonly resizeActivityContainer: Signal<HTMLElement> = computed(() => {
    const container = this.container();

    return typeof container === 'object'
      ? container
      : this.local() && this.layout
        ? this.layout.nativeElement
        : this.nativeElement.ownerDocument.documentElement;
  });

  protected readonly header: Signal<SidePanelHeaderDirective | undefined> = contentChild(SidePanelHeaderDirective);
  protected readonly footer: Signal<SidePanelFooterDirective | undefined> = contentChild(SidePanelFooterDirective);
  protected readonly banner: Signal<SidePanelBannerDirective | undefined> = contentChild(SidePanelBannerDirective);

  /** Resolved layout mode. Push requires SidePanelLayout; standalone panels fall back to overlay. Defaults to overlay. */
  public readonly currentLayoutMode: Signal<SidePanelLayoutMode> = computed(() =>
    this.local() ? this.windowDimensionsService.resolveResponsiveValue(this.breakpoints() ?? {}, this.layoutMode()) : 'overlay'
  );

  /** Open state, initially false. Two-way binding also receives Escape, close-control, and configured backdrop dismissal. Content stays mounted. */
  public readonly open: ModelSignal<boolean> = model(false);

  /** Stable surface ID for aria-controls integration. Defaults to an automatically generated unique identifier. */
  public readonly panelId: InputSignal<string> = input(`bx-side-panel-${uuidv4()}`);
  /** Physical entrance edge. Defaults to right; changes update an already-mounted panel. */
  public readonly placement: InputSignal<SidePanelPlacement> = input<SidePanelPlacement>('right');
  /**
   * Optional decorative header icon with the modal banner's name, size, semantic color, background, and stroke contract.
   * Defaults to undefined; omitted icon size uses 24px.
   */
  public readonly headerIcon: InputSignal<IIconData | undefined> = input<IIconData | undefined>(undefined);

  /** Initial/current width as CSS pixels or a CSS length, default 400. Resizing writes numeric pixels through widthChange; two-way binding is supported. */
  public readonly width: ModelSignal<number | string> = model<number | string>(400);

  /** Whether the inner edge supports pointer and keyboard width resizing. Defaults to false; panels only resize from left/right edges. */
  public readonly resizable: InputSignal<boolean> = input(false);
  /** Optional minimum resize width in CSS pixels. Omission uses 30% of the original rendered width when shrinking is enabled. */
  public readonly resizeMinWidth: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Optional maximum resize width in CSS pixels. Omission uses 50% of the container, retaining space for adjacent content and backdrop dismissal. */
  public readonly resizeMaxWidth: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Prevent resizing below the original rendered width, default true. False enables the configured or 30% minimum. */
  public readonly resizeDisableShrink: InputSignal<boolean> = input(true);
  /** Accessible resize-handle name, accepting a string or translation key. Defaults to Resize panel width. */
  public readonly resizeLabel: InputSignal<ResolvableText> = input<ResolvableText>('Resize panel width');
  /** Pointer-inactivity delay before the resize grip fades, in milliseconds. Defaults to 2000; zero keeps it visible. Focused/active grips stay visible. */
  public readonly resizeIdleDelay: InputSignal<number> = input(2000);
  /** Optional bounds. Undefined uses the nearest SidePanelLayout or the viewport; 'viewport' explicitly escapes an enclosing layout. */
  public readonly container: InputSignal<HTMLElement | 'viewport' | undefined> = input<HTMLElement | 'viewport' | undefined>(undefined);
  /** Base layout mode, default overlay. Push reserves a real flex slot in SidePanelLayout; content remains mounted when modes change. */
  public readonly layoutMode: InputSignal<SidePanelLayoutMode> = input<SidePanelLayoutMode>('overlay');
  /** Optional minimum-width breakpoint modes resolved through WindowDimensionsService; the highest matching override wins. */
  public readonly breakpoints: InputSignal<SidePanelBreakpoints | undefined> = input<SidePanelBreakpoints | undefined>(undefined);
  /** Optional interaction-blocking backdrop within the bounds. Defaults to false; surrounding content otherwise remains interactive. */
  public readonly backdrop: InputSignal<boolean> = input(false);
  /** Whether activating the optional backdrop closes the panel. Defaults to true. */
  public readonly closeOnBackdrop: InputSignal<boolean> = input(true);
  /** Whether unhandled Escape dismisses the open panel, including when focus returns to its surrounding page. Defaults to true; nested overlays can consume Escape first. */
  public readonly closeOnEscape: InputSignal<boolean> = input(true);
  /** Whether to render the built-in close control. Defaults to true; provide an accessible alternative when false. */
  public readonly showCloseButton: InputSignal<boolean> = input(true);
  /** Accessible panel name; accepts plain text or a translation key. Defaults to Side panel. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>('Side panel');
  /** Accessible close-control label; accepts plain text or a translation key. Defaults to Close panel. */
  public readonly closeLabel: InputSignal<ResolvableText> = input<ResolvableText>('Close panel');
  /** Optional ID of visible labeling content; takes precedence over ariaLabel. Defaults to undefined. */
  public readonly labelledBy: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Focus the panel surface when opening. Defaults to true; normal keyboard navigation remains available without a focus trap. */
  public readonly autoFocus: InputSignal<boolean> = input(true);
  /** Restore the opening element when closing while focus is still inside the panel. Defaults to true. */
  public readonly restoreFocus: InputSignal<boolean> = input(true);
  /** Entrance and exit duration in milliseconds. Defaults to 175; mounted reduced-motion preferences override this with zero. */
  public readonly animationDuration: InputSignal<number> = input(175);

  private originalGestureWidth: number | string | undefined;
  private disconnectWidth: (() => void) | undefined;
  private mounted: boolean = false;
  private wasOpen: boolean = false;
  private opener: HTMLElement | null = null;
  private focusFrame: number | undefined;
  private disconnectBounds: (() => void) | undefined;
  private disconnectTheme: (() => void) | undefined;
  private disconnectLighting: (() => void) | undefined;
  private boundContainer: HTMLElement | 'viewport' | undefined;
  private localHosting: boolean | undefined;
  private disconnectKeyboard: (() => void) | undefined;

  constructor() {
    afterNextRender(() => {
      this.mounted = true;
      this.updateHosting();
      this.syncOpen();
      this.observeWidth();

      const onKeydown = (event: KeyboardEvent) => this.onKeydown(event);
      const document = this.nativeElement.ownerDocument;

      this.ngZone.runOutsideAngular(() => document.addEventListener('keydown', onKeydown));
      this.disconnectKeyboard = () => document.removeEventListener('keydown', onKeydown);
    });

    effect(() => {
      this.open();

      if (this.mounted) this.syncOpen();
    });

    afterRenderEffect(() => {
      this.open();
      this.container();
      this.width();
      this.placement();

      if (!this.mounted) return;

      this.currentLayoutMode();
      this.updateHosting();
    });

    this.destroyRef.onDestroy(() => {
      const win = this.nativeElement.ownerDocument.defaultView;

      win?.cancelAnimationFrame(this.focusFrame ?? 0);
      this.returnFocus();
      this.disconnectBounds?.();
      this.disconnectWidth?.();
      this.disconnectKeyboard?.();
      this.disconnectTheme?.();
      this.disconnectLighting?.();
      this.layer()?.nativeElement.remove();
    });
  }

  protected onResizeStart(): void {
    this.originalGestureWidth = this.width();
  }

  protected onResizeEnd(event: IResizeHandleEvent): void {
    if (event.canceled && this.originalGestureWidth !== undefined) this.width.set(this.originalGestureWidth);

    this.originalGestureWidth = undefined;
  }

  protected dismiss(): void {
    this.open.set(false);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape' || event.defaultPrevented || !this.closeOnEscape() || !this.open()) return;

    const target = event.target;

    if (target instanceof Element && target.closest('.cdk-overlay-pane, dialog, [role="dialog"], [role="alertdialog"], [popover]')) return;

    queueMicrotask(() => {
      if (this.destroyRef.destroyed || event.defaultPrevented || !this.open() || !this.closeOnEscape()) return;

      this.ngZone.run(() => this.dismiss());
    });
  }

  protected onBackdrop(): void {
    if (this.closeOnBackdrop()) this.dismiss();
  }

  //#region Helpers

  private syncOpen(): void {
    const open = this.open();

    if (this.wasOpen === open) return;

    this.wasOpen = open;

    const document = this.nativeElement.ownerDocument;
    const win = document.defaultView;

    win?.cancelAnimationFrame(this.focusFrame ?? 0);

    if (open) {
      this.opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      this.measureBounds();

      if (this.autoFocus()) {
        this.focusFrame = win?.requestAnimationFrame(() => {
          if (!this.destroyRef.destroyed && this.open()) this.surface()?.nativeElement.focus({ preventScroll: true });
        });
      }
    } else this.returnFocus();
  }

  private returnFocus(): void {
    if (!this.restoreFocus() || !this.layer()?.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)) return;

    if (this.opener?.isConnected && !this.opener.closest('[inert]')) {
      this.opener.focus({ preventScroll: true });
    } else {
      const container = this.container();
      const fallback = typeof container === 'object' ? container : this.layout?.nativeElement;

      if (fallback?.hasAttribute('tabindex')) fallback.focus({ preventScroll: true });
    }
  }

  private observeWidth(): void {
    const surface = this.surface()?.nativeElement;

    if (!surface) return;

    const measure = () => {
      const width = surface.getBoundingClientRect().width;

      if (width > 0 && Math.abs(width - this.measuredWidth()) >= 0.01) this.ngZone.run(() => this.measuredWidth.set(width));
    };

    this.ngZone.runOutsideAngular(() => {
      const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);

      observer?.observe(surface);
      measure();
      this.disconnectWidth = () => observer?.disconnect();
    });
  }

  private updateHosting(): void {
    const layer = this.layer()?.nativeElement;
    const local = this.local();

    if (!layer) return;

    if (this.localHosting !== local) {
      this.disconnectBounds?.();
      this.disconnectTheme?.();
      this.disconnectLighting?.();
      this.disconnectTheme = undefined;
      this.disconnectLighting = undefined;
      this.localHosting = local;
      (local ? this.nativeElement : this.nativeElement.ownerDocument.body).append(layer);
      layer.classList.toggle('local-layer', local);

      for (const property of ['top', 'left', 'width', 'height']) layer.style.removeProperty(property);

      if (!local) {
        this.disconnectTheme = inheritOverlayTheme(this.nativeElement, layer);
        this.disconnectLighting = inheritGlassLighting(layer, this.nativeElement);
      }

      this.bindBounds();
    } else if (this.boundContainer !== this.container()) this.bindBounds();

    this.measureBounds();
  }

  private bindBounds(): void {
    this.disconnectBounds?.();
    this.boundContainer = this.container();

    if (this.local()) return;

    const document = this.nativeElement.ownerDocument;
    const win = document.defaultView;

    if (!win) return;

    this.ngZone.runOutsideAngular(() => {
      const update = () => this.measureBounds();
      const onScroll = (event: Event) => {
        const container = this.container();
        const target = event.target;

        if (typeof container === 'object' && target instanceof Node && target.contains(container)) update();
      };

      const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(update);

      if (typeof this.boundContainer === 'object') {
        for (let element: HTMLElement | null = this.boundContainer; element; element = element.parentElement) resize?.observe(element);
      }

      document.addEventListener('scroll', onScroll, { capture: true, passive: true });
      win.addEventListener('resize', update);
      win.visualViewport?.addEventListener('resize', update);
      win.visualViewport?.addEventListener('scroll', update);
      this.disconnectBounds = () => {
        resize?.disconnect();
        document.removeEventListener('scroll', onScroll, true);
        win.removeEventListener('resize', update);
        win.visualViewport?.removeEventListener('resize', update);
        win.visualViewport?.removeEventListener('scroll', update);
      };
    });
  }

  private measureBounds(): void {
    if (this.local() || !this.open()) return;

    const win = this.nativeElement.ownerDocument.defaultView;
    const layer = this.layer()?.nativeElement;

    if (!win || !layer) return;

    const viewport = win.visualViewport;
    const viewportLeft = viewport?.offsetLeft ?? 0;
    const viewportTop = viewport?.offsetTop ?? 0;
    const viewportRight = viewportLeft + (viewport?.width ?? win.innerWidth);
    const viewportBottom = viewportTop + (viewport?.height ?? win.innerHeight);
    const container = this.container();
    const bounds = typeof container === 'object' ? container.getBoundingClientRect() : undefined;
    const left = Math.max(viewportLeft, bounds?.left ?? viewportLeft);
    const top = Math.max(viewportTop, bounds?.top ?? viewportTop);
    const right = Math.min(viewportRight, bounds?.right ?? viewportRight);
    const bottom = Math.min(viewportBottom, bounds?.bottom ?? viewportBottom);

    layer.style.left = `${left}px`;
    layer.style.top = `${top}px`;
    layer.style.width = `${Math.max(0, right - left)}px`;
    layer.style.height = `${Math.max(0, bottom - top)}px`;
  }

  //#endregion
}
