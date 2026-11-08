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
import { createSpringMotion, ISpringMotion, MOTION_PRESETS, paintMotionStyles } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';

import { Tab } from '@primitives/components/tab/tab';
import { DEFAULT_TABS_LABEL, DEFAULT_TABS_VARIANT, TAB_NAVIGATION_KEYS } from '@primitives/constants/tabs.constants';
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
  /** Allows pointer/touch dragging of the selection surface; release commits the nearest enabled tab. Defaults to true. Set false for native swipe scrolling. */
  public readonly dragSelection: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });

  /** Value of the active tab; supports controlled two-way selection. Defaults to `null`. */
  public readonly selectedValue: ModelSignal<string | null> = model<string | null>(null);

  private selectionMotion: ISpringMotion | undefined;
  private selectionReady: boolean = false;
  private restoreSelectionFocus: boolean = false;
  private drag: ITabDrag | null = null;
  private suppressClick: boolean = false;

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
          !triggers.some((trigger) => trigger.nativeElement === this.drag?.origin && !trigger.nativeElement.disabled))
      ) {
        this.finishDrag(true);
      }

      this.positionSelection();

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
    const cancel = (): void => this.finishDrag(true);
    const visibility = (): void => {
      if (doc.hidden) this.finishDrag(true);
    };

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
      candidate,
      geometry,
      cleanup: () => {
        doc.defaultView?.removeEventListener('blur', cancel);
        doc.removeEventListener('visibilitychange', visibility);
      }
    };
    origin.setPointerCapture(event.pointerId);
    this.moveSelection([candidate.left, candidate.top, candidate.width, candidate.height, 1]);
  }

  protected onPointerMove(event: PointerEvent): void {
    const drag = this.drag;
    const list = this.tabList()?.nativeElement;
    const viewport = this.tabViewport()?.nativeElement;

    if (!drag || event.pointerId !== drag.pointerId || !list || !viewport) return;

    const distanceX = Math.abs(event.clientX - drag.startX);
    const distanceY = Math.abs(event.clientY - drag.startY);

    if (!drag.moved && distanceY > distanceX && distanceY > 6) {
      this.finishDrag(true);

      return;
    }

    if (!drag.moved && distanceX < 6) return;

    if (!drag.moved) {
      drag.moved = true;
      this.dragging.set(true);
    }

    event.preventDefault();

    const bounds = viewport.getBoundingClientRect();
    const scroll = event.clientX < bounds.left + 24 ? -16 : event.clientX > bounds.right - 24 ? 16 : 0;

    if (scroll) viewport.scrollBy({ left: scroll, behavior: 'instant' });

    const center = event.clientX - list.getBoundingClientRect().left - drag.grabOffset;
    const geometry = [...drag.geometry].sort((first, second) => first.left - second.left);
    const first = geometry[0];
    const last = geometry[geometry.length - 1];
    const x = Math.max(first.left + first.width / 2, Math.min(last.left + last.width / 2, center));
    const right = geometry.findIndex((item) => item.left + item.width / 2 >= x);
    const to = geometry[Math.max(0, right)];
    const from = geometry[Math.max(0, right - 1)];
    const fraction = Math.max(0, Math.min(1, (x - from.left - from.width / 2) / (to.left + to.width / 2 - from.left - from.width / 2 || 1)));
    const width = from.width + (to.width - from.width) * fraction;
    const height = from.height + (to.height - from.height) * fraction;

    drag.candidate = fraction < 0.5 ? from : to;
    this.moveSelection([x - width / 2, from.top + (to.top - from.top) * fraction, width, height, 1]);
  }

  protected onPointerEnd(event: PointerEvent, cancelled: boolean): void {
    if (this.drag?.pointerId !== event.pointerId) return;

    const bounds = this.tabViewport()?.nativeElement.getBoundingClientRect();
    const outside = bounds ? event.clientY < bounds.top - 16 || event.clientY > bounds.bottom + 16 : true;

    this.finishDrag(cancelled || outside);
  }

  protected onDragKey(event: KeyboardEvent): void {
    if (event.key !== 'Escape' || !this.drag) return;

    event.preventDefault();
    event.stopPropagation();
    this.finishDrag(true);
  }

  //#region Helpers

  private measureTabs(): ITabGeometry[] {
    const tabs = this.tabs();

    return this.triggers().flatMap(({ nativeElement: element }) => {
      const tab = tabs.find((item) => item.triggerId === element.id);

      return !tab || element.disabled
        ? []
        : [{ element, value: tab.value(), left: element.offsetLeft, top: element.offsetTop, width: element.offsetWidth, height: element.offsetHeight }];
    });
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

  private moveSelection(target: readonly number[]): void {
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
    this.selectionMotion.retarget(target, this.bxA11yService.isReducedMotion() || !this.selectionReady);
  }

  private finishDrag(cancelled: boolean): void {
    const drag = this.drag;

    if (!drag) return;

    this.drag = null;
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
