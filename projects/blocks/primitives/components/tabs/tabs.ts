import type { InputSignal, InputSignalWithTransform, ModelSignal, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  model,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';

import type { ITabDrag } from '@primitives/interfaces/itab-drag.interface';
import type { ITabGeometry } from '@primitives/interfaces/itab-geometry.interface';

import { BX_I18N, BxA11yService, ResolvableText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import {
  createSpringMotion,
  GestureVelocity,
  ISpringMotion,
  MOTION_PRESETS,
  paintMotionStyles,
  projectMotion,
  subscribeFrame
} from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';

import { Tab } from '@primitives/components/tab/tab';
import { DEFAULT_TABS_LABEL, DEFAULT_TABS_VARIANT, TAB_DRAG, TAB_NAVIGATION_KEYS } from '@primitives/constants/tabs.constants';
import { resolveTabText } from '@primitives/helpers/tabs.helpers';
import { TabsVariant } from '@primitives/types/tabs.types';

@Component({
  selector: 'bx-tabs',
  standalone: true,
  imports: [NgTemplateOutlet, BxSurfaceDirective, Icon],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bx-tabs-underline]': 'variant() === "underline"',
    '[class.bx-tabs-has-selection]': 'selectionVisible()',
    '[class.bx-tabs-draggable]': 'dragSelection()',
    '[class.bx-tabs-dragging]': 'dragging()',
    '[class.bx-tabs-animated]': 'hasRendered() && !bxA11yService.isReducedMotion()'
  }
})
export class Tabs {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly destroyRef = inject(DestroyRef);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected readonly bxA11yService = inject(BxA11yService);

  private readonly tabList: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('tabList');
  private readonly tabViewport: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('tabViewport');
  private readonly selection: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('selection');

  private readonly triggers: Signal<readonly ElementRef<HTMLButtonElement>[]> = viewChildren<ElementRef<HTMLButtonElement>>('trigger');

  protected readonly hasRendered: WritableSignal<boolean> = signal(false);
  protected readonly selectionVisible: WritableSignal<boolean> = signal(false);
  protected readonly dragging: WritableSignal<boolean> = signal(false);

  protected readonly activeTab: Signal<Tab | undefined> = computed(() => {
    const enabled = this.tabs().filter((tab) => !tab.disabled());

    return enabled.find((tab) => tab.value() === this.selectedValue()) ?? enabled[0];
  });
  protected readonly resolvedLabel: Signal<string> = computed(() => resolveTabText(this.ariaLabel(), this.i18n));

  protected readonly tabs: Signal<readonly Tab[]> = contentChildren(Tab);

  /** Visual presentation variant using the shared Blocks theme and component styles. Defaults to `'segmented'`. */
  public readonly variant: InputSignal<TabsVariant> = input<TabsVariant>(DEFAULT_TABS_VARIANT);
  /** Accessible name of the tab list. Defaults to `'Tabs'`. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>(DEFAULT_TABS_LABEL);
  /**
   * Enables selection dragging. Defaults to true. Touch swipes scroll natively; hold briefly before dragging to select.
   * Release uses position and recent velocity to choose an enabled tab. False disables dragging while retaining scrolling, click and keyboard navigation.
   */
  public readonly dragSelection: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });

  /** Value of the active tab; supports controlled two-way selection. Defaults to `null`. */
  public readonly selectedValue: ModelSignal<string | null> = model<string | null>(null);

  private selectionMotion: ISpringMotion | undefined;
  private selectionReady: boolean = false;
  private restoreSelectionFocus: boolean = false;
  private drag: ITabDrag | null = null;
  private suppressClick: boolean = false;
  private stopDragScroll: (() => void) | undefined;

  constructor() {
    effect(() => {
      const active = this.activeTab();
      const focused = this.nativeElement.ownerDocument.activeElement;
      const panel = focused?.closest('[role="tabpanel"]');
      const trigger = focused?.closest('[role="tab"]');

      if (
        (panel && this.nativeElement.contains(panel) && panel.id !== active?.panelId) ||
        (trigger && this.nativeElement.contains(trigger) && trigger.hasAttribute('disabled'))
      ) {
        this.restoreSelectionFocus = true;
      }
    });
    afterNextRender(() => this.hasRendered.set(true));
    afterRenderEffect(() => {
      const value = this.activeTab()?.value() ?? null;

      if (this.selectedValue() !== value) this.selectedValue.set(value);

      if (this.restoreSelectionFocus) {
        this.triggers()
          .find((trigger) => trigger.nativeElement.id === this.activeTab()?.triggerId)
          ?.nativeElement.focus({ preventScroll: true });
        this.restoreSelectionFocus = false;
      }
    });
    afterRenderEffect((onCleanup) => {
      const list = this.tabList()?.nativeElement;
      const triggers = this.triggers();

      this.activeTab();
      this.bxA11yService.isReducedMotion();
      this.variant();
      this.dragSelection();

      if (
        this.drag &&
        (!this.dragSelection() ||
          this.drag.committedValue !== this.selectedValue() ||
          this.geometryChanged() ||
          !triggers.some((trigger) => trigger.nativeElement === this.drag?.origin && !trigger.nativeElement.disabled))
      ) {
        this.finishDrag(true);
      }

      if (this.drag?.moved) this.previewDrag();
      else this.positionSelection();

      const view = list?.ownerDocument.defaultView;
      const observer = view?.ResizeObserver
        ? new view.ResizeObserver(() => {
            if (this.drag) this.finishDrag(true);

            this.positionSelection();
          })
        : undefined;

      if (list) observer?.observe(list);

      const viewport = this.tabViewport()?.nativeElement;

      if (viewport) observer?.observe(viewport);

      triggers.forEach((trigger) => observer?.observe(trigger.nativeElement));
      onCleanup(() => observer?.disconnect());
    });
    this.destroyRef.onDestroy(() => {
      this.finishDrag(true);
      this.selectionMotion?.destroy();
    });
  }

  /**
   * Select the enabled tab matching a value; unknown or disabled tab values are ignored.
   *
   * @param value - Value identifying the enabled tab to activate.
   */
  public select(value: string): void {
    const tab = this.tabs().find((item) => item.value() === value && !item.disabled());

    if (tab) this.selectedValue.set(value);
  }

  protected onTabKey(event: KeyboardEvent, tab: Tab): void {
    this.onDragKey(event);

    if (event.altKey || event.ctrlKey || event.metaKey || !TAB_NAVIGATION_KEYS.has(event.key)) return;

    const enabled = this.tabs().filter((item) => !item.disabled());
    const current = enabled.indexOf(tab);

    if (current < 0) return;

    event.preventDefault();
    event.stopPropagation();

    const button = event.currentTarget as HTMLButtonElement;
    const rtl = button.ownerDocument.defaultView?.getComputedStyle(button).direction === 'rtl';
    const direction = (event.key === 'ArrowRight' ? 1 : -1) * (rtl ? -1 : 1);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : (current + direction + enabled.length) % enabled.length;
    const next = enabled[index];

    this.select(next.value());

    const trigger = this.triggers().find((item) => item.nativeElement.id === next.triggerId)?.nativeElement;

    trigger?.focus({ preventScroll: true });
    trigger?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  protected onTriggerClick(event: MouseEvent, tab: Tab): void {
    if (this.suppressClick && event.detail > 0) {
      this.suppressClick = false;
      event.preventDefault();

      return;
    }

    this.select(tab.value());
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!this.dragSelection() || !event.isPrimary || event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey) return;

    const origin = event.currentTarget as HTMLButtonElement;
    const geometry = this.measureTabs();
    const candidate = geometry.find((item) => item.element === origin);

    if (!candidate) return;

    this.finishDrag(true);
    this.suppressClick = false;

    const bounds = origin.getBoundingClientRect();
    const doc = origin.ownerDocument;
    const touch = event.pointerType === 'touch';
    const cancel = (): void => this.finishDrag(true);
    const visibility = (): void => {
      if (doc.hidden) this.finishDrag(true);
    };

    // Native panning stays available until a stationary hold claims selection dragging.
    // Pointer preventDefault alone does not suppress a browser's touch scrolling.
    const touchMove = (touchEvent: TouchEvent): void => {
      if (touchEvent.touches.length !== 1) {
        this.finishDrag(true);
      } else if (this.drag?.armed && touchEvent.cancelable) {
        touchEvent.preventDefault();
      }
    };

    const touchStart = (touchEvent: TouchEvent): void => {
      if (touchEvent.touches.length > 1) this.finishDrag(true);
    };

    const contextMenu = (menuEvent: Event): void => {
      if (this.drag?.armed) menuEvent.preventDefault();
    };

    const hold = touch
      ? doc.defaultView?.setTimeout(() => {
          if (this.drag?.pointerId !== event.pointerId) return;

          this.drag.armed = true;
          this.moveSelection([candidate.left, candidate.top, candidate.width, candidate.height, 1]);
        }, TAB_DRAG.holdDelay)
      : undefined;

    if (touch) {
      doc.addEventListener('touchmove', touchMove, { passive: false });
      doc.addEventListener('touchstart', touchStart, { passive: true });
      origin.addEventListener('contextmenu', contextMenu);
    }

    doc.defaultView?.addEventListener('blur', cancel);
    doc.addEventListener('visibilitychange', visibility);
    this.drag = {
      pointerId: event.pointerId,
      origin,
      startX: event.clientX,
      startY: event.clientY,
      grabOffset: event.clientX - bounds.left - bounds.width / 2,
      committedValue: this.selectedValue(),
      moved: false,
      armed: !touch,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: event.timeStamp,
      velocity: new GestureVelocity(event.clientX, event.timeStamp),
      candidate,
      geometry,
      cleanup: () => {
        doc.defaultView?.clearTimeout(hold);
        doc.removeEventListener('touchmove', touchMove);
        doc.removeEventListener('touchstart', touchStart);
        origin.removeEventListener('contextmenu', contextMenu);
        doc.defaultView?.removeEventListener('blur', cancel);
        doc.removeEventListener('visibilitychange', visibility);
      }
    };
    origin.setPointerCapture(event.pointerId);

    if (!touch) this.moveSelection([candidate.left, candidate.top, candidate.width, candidate.height, 1]);
  }

  protected onPointerMove(event: PointerEvent): void {
    const drag = this.drag;
    const list = this.tabList()?.nativeElement;
    const viewport = this.tabViewport()?.nativeElement;

    if (!drag || event.pointerId !== drag.pointerId || !list || !viewport) return;

    const distanceX = Math.abs(event.clientX - drag.startX);
    const distanceY = Math.abs(event.clientY - drag.startY);

    if (!drag.moved && ((distanceY > distanceX && distanceY > TAB_DRAG.threshold) || (!drag.armed && Math.max(distanceX, distanceY) > TAB_DRAG.threshold))) {
      this.finishDrag(true);

      return;
    }

    if (!drag.armed || (!drag.moved && distanceX < TAB_DRAG.threshold)) return;

    if (!drag.moved) {
      drag.moved = true;
      this.dragging.set(true);
    }

    event.preventDefault();
    this.sampleDrag(event);
    this.previewDrag();
    this.updateDragScroll();
  }

  protected onPointerEnd(event: PointerEvent, cancelled: boolean): void {
    const drag = this.drag;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const bounds = this.tabViewport()?.nativeElement.getBoundingClientRect();
    const outside = bounds ? event.clientY < bounds.top - TAB_DRAG.releaseSlop || event.clientY > bounds.bottom + TAB_DRAG.releaseSlop : true;

    if (!cancelled && !outside && drag.moved) {
      this.sampleDrag(event);
      this.previewDrag();
      this.previewDrag(true);
    }

    this.finishDrag(cancelled || outside);
  }

  protected onDragKey(event: KeyboardEvent): void {
    if (event.key !== 'Escape' || !this.drag) return;

    event.preventDefault();
    event.stopPropagation();
    this.finishDrag(true);
  }

  //#region Helpers

  private sampleDrag(event: PointerEvent): void {
    const drag = this.drag;

    if (!drag) return;

    drag.velocity.update(event.clientX, event.timeStamp);
    drag.lastTime = event.timeStamp;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
  }

  private previewDrag(project = false): void {
    const drag = this.drag;
    const list = this.tabList()?.nativeElement;

    if (!drag || !list) return;

    const geometry = drag.geometry;
    const first = geometry[0];
    const last = geometry[geometry.length - 1];
    const center = drag.lastX - list.getBoundingClientRect().left - drag.grabOffset;
    const x = Math.max(first.left + first.width / 2, Math.min(last.left + last.width / 2, center));
    const right = geometry.findIndex((item) => item.left + item.width / 2 >= x);
    const to = geometry[Math.max(0, right)];
    const from = geometry[Math.max(0, right - 1)];
    const span = to.left + to.width / 2 - from.left - from.width / 2;
    const fraction = Math.max(0, Math.min(1, (x - from.left - from.width / 2) / (span || 1)));
    const width = from.width + (to.width - from.width) * fraction;
    const height = from.height + (to.height - from.height) * fraction;
    const limit = Math.max(from.width, to.width, span);
    const sampledVelocity = drag.velocity.velocity(drag.lastTime);
    const velocity =
      (x <= first.left + first.width / 2 && sampledVelocity < 0) || (x >= last.left + last.width / 2 && sampledVelocity > 0) ? 0 : sampledVelocity;
    const destination = project ? projectMotion(x, velocity, limit) : x;

    drag.candidate = geometry.reduce((nearest, item) =>
      Math.abs(item.left + item.width / 2 - destination) < Math.abs(nearest.left + nearest.width / 2 - destination) ? item : nearest
    );

    if (!project) {
      const widthVelocity = span ? ((to.width - from.width) * velocity) / span : 0;

      this.moveSelection([x - width / 2, from.top + (to.top - from.top) * fraction, width, height, 1], [velocity - widthVelocity / 2, 0, widthVelocity, 0, 0]);
    }
  }

  private updateDragScroll(): void {
    if (this.stopDragScroll || !this.drag?.moved) return;

    this.stopDragScroll = subscribeFrame((delta, timestamp) => {
      const drag = this.drag;
      const viewport = this.tabViewport()?.nativeElement;

      if (!drag || !viewport) return false;

      const bounds = viewport.getBoundingClientRect();
      const inside = drag.lastY >= bounds.top - TAB_DRAG.releaseSlop && drag.lastY <= bounds.bottom + TAB_DRAG.releaseSlop;
      const edge = Math.min(TAB_DRAG.edgeSize, bounds.width / 3);
      const direction = inside ? Math.max(-1, Math.min(1, (drag.lastX - bounds.left - edge) / edge)) : 0;
      const speed = direction < 0 ? direction : inside ? Math.max(0, Math.min(1, (drag.lastX - bounds.right + edge) / edge)) : 0;
      const previous = viewport.scrollLeft;

      viewport.scrollBy({ left: speed * TAB_DRAG.scrollSpeed * delta, behavior: 'instant' });

      if (!speed || viewport.scrollLeft === previous) {
        this.stopDragScroll = undefined;

        return false;
      }

      drag.lastTime = timestamp;
      this.previewDrag();

      return true;
    });
  }

  private geometryChanged(): boolean {
    const previous = this.drag?.geometry;
    const current = this.measureTabs();

    return (
      !previous ||
      previous.length !== current.length ||
      current.some((item, index) => {
        const old = previous[index];

        return (
          item.element !== old.element ||
          item.value !== old.value ||
          item.left !== old.left ||
          item.top !== old.top ||
          item.width !== old.width ||
          item.height !== old.height
        );
      })
    );
  }

  private measureTabs(): ITabGeometry[] {
    const tabs = this.tabs();

    return this.triggers()
      .flatMap(({ nativeElement: element }) => {
        const tab = tabs.find((item) => item.triggerId === element.id);

        return !tab || element.disabled
          ? []
          : [{ element, value: tab.value(), left: element.offsetLeft, top: element.offsetTop, width: element.offsetWidth, height: element.offsetHeight }];
      })
      .sort((first, second) => first.left - second.left);
  }

  private positionSelection(): void {
    if (this.drag) return;

    const surface = this.selection()?.nativeElement;
    const active = this.activeTab();
    const trigger = this.triggers().find((item) => item.nativeElement.id === active?.triggerId)?.nativeElement;

    if (!surface) return;

    if (!trigger || !trigger.offsetWidth || !trigger.offsetHeight) {
      surface.style.visibility = 'hidden';
      this.selectionMotion?.destroy();
      this.selectionMotion = undefined;
      this.selectionReady = false;
      this.selectionVisible.set(false);

      return;
    }

    this.moveSelection([trigger.offsetLeft, trigger.offsetTop, trigger.offsetWidth, trigger.offsetHeight, 0]);
    surface.style.visibility = 'visible';
    this.selectionReady = true;
    this.selectionVisible.set(true);
  }

  private moveSelection(target: readonly number[], velocities?: readonly number[]): void {
    const surface = this.selection()?.nativeElement;

    if (!surface) return;

    this.selectionMotion ??= createSpringMotion(
      target,
      ([x, y, width, height, pressure], [velocity]) => {
        const reduced = this.bxA11yService.isReducedMotion();
        const stretch = reduced ? 0 : Math.min(0.065, Math.abs(velocity) / 18000);
        const press = reduced ? 0 : Math.max(-0.15, Math.min(1.1, pressure));

        paintMotionStyles(
          surface,
          {
            transform: `translate3d(${x}px, ${y}px, 0) scale(${1 + stretch + press * 0.018}, ${1 - stretch / 3 - press * 0.045})`,
            width: `${Math.max(1, width)}px`,
            height: `${Math.max(1, height)}px`
          },
          true
        );
      },
      MOTION_PRESETS.fluid
    );

    if (velocities && !this.bxA11yService.isReducedMotion()) this.selectionMotion.track(target, velocities);
    else this.selectionMotion.retarget(target, this.bxA11yService.isReducedMotion() || !this.selectionReady);
  }

  private finishDrag(cancelled: boolean): void {
    const drag = this.drag;

    if (!drag) return;

    this.drag = null;
    this.stopDragScroll?.();
    this.stopDragScroll = undefined;
    this.dragging.set(false);
    drag.cleanup();

    if (drag.origin.hasPointerCapture(drag.pointerId)) drag.origin.releasePointerCapture(drag.pointerId);

    this.suppressClick = drag.moved;

    if (drag.moved && !cancelled && this.tabs().some((tab) => tab.value() === drag.candidate.value && !tab.disabled())) {
      this.select(drag.candidate.value);
      drag.candidate.element.focus({ preventScroll: true });
      drag.candidate.element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }

    this.positionSelection();
  }

  //#endregion
}
