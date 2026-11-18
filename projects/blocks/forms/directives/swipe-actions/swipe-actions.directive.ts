import type { ComponentRef, InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { afterRenderEffect, DestroyRef, Directive, ElementRef, inject, input, output, signal, untracked, ViewContainerRef } from '@angular/core';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { ISpringMotion } from '@filip.mazev/blocks/effects/runtime';
import type { ISwipeAction } from '@forms/interfaces/iswipe-action.interface';
import type { ISwipeActionError } from '@forms/interfaces/iswipe-action-error.interface';
import type { ISwipeActionEvent } from '@forms/interfaces/iswipe-action-event.interface';
import type { ISwipeActionLayout } from '@forms/interfaces/iswipe-action-layout.interface';
import type { ISwipeFullActionConfig } from '@forms/interfaces/iswipe-full-action-config.interface';
import type { ISwipeFullActionState } from '@forms/interfaces/iswipe-full-action-state.interface';
import type { ISwipeGesture } from '@forms/interfaces/iswipe-gesture.interface';
import type { ISwipeWheelGesture } from '@forms/interfaces/iswipe-wheel-gesture.interface';
import type { SwipeActionCompletion, SwipeSide, SwipeState } from '@forms/types/swipe-actions.types';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { createSpringMotion, GestureVelocity, MOTION_PRESETS, paintMotionStyles, projectMotion } from '@filip.mazev/blocks/effects/runtime';
import { ContextMenuDirective, MenuItem } from '@filip.mazev/blocks/primitives';

import { SwipeRowDismissal } from '@forms/classes/swipe-row-dismissal';
import { SwipeActionPanel } from '@forms/components/swipe-action-panel/swipe-action-panel';
import { SWIPE_ACTION_THRESHOLD, SWIPE_FULL_ACTION, SWIPE_TOOLTIP_DWELL, SWIPE_WHEEL_IDLE } from '@forms/constants/swipe-actions.constants';
import { resolveSwipeResistance, swipeInputDistance, swipeVisualDistance } from '@forms/helpers/swipe-resistance.helpers';
import { SwipeActionsService } from '@forms/services/swipe-actions.service';

/** Adds reusable gesture-driven swipe capsules and context commands to list rows, menu items and other composed row containers. */
@Directive({
  selector: '[bxSwipeActions]',
  exportAs: 'bxSwipeActions'
})
export class SwipeActionsDirective {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly menuItem = inject(MenuItem, { self: true, optional: true });
  private readonly contextMenuDirective = inject(ContextMenuDirective, { optional: true, self: true });
  private readonly swipeActionsService = inject(SwipeActionsService);

  private readonly phase: WritableSignal<SwipeState> = signal('closed');

  private readonly pending: WritableSignal<readonly string[]> = signal<readonly string[]>([]);
  private readonly working: WritableSignal<readonly string[]> = signal<readonly string[]>([]);

  private readonly completed: WritableSignal<ISwipeAction | null> = signal(null);

  private readonly failed: WritableSignal<readonly string[]> = signal<readonly string[]>([]);

  private readonly fullOperation: WritableSignal<ISwipeFullActionState | null> = signal(null);

  private readonly originalStyles: Map<HTMLElement, Map<string, string>> = new Map();

  /** Current gesture/settling phase. Read-only; use closeSwipeActions() for imperative dismissal. */
  public readonly swipeState: Signal<SwipeState> = this.phase.asReadonly();

  /** Optional movable content element. Defaults to bxSwipeContent or MenuItem's content group. Its enclosing primary control moves at fixed dimensions with its existing material. Never pass the host itself. */
  public readonly swipeContent: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Disable gestures and all commands for generic rows; MenuItem availability is also respected. Defaults to false. */
  public readonly swipeDisabled: InputSignal<boolean> = input(false);
  /** Block generic row interaction while application-owned work is pending. Defaults to false. */
  public readonly swipeLoading: InputSignal<boolean> = input(false);
  /** Commands revealed by a physical leftward swipe; optional, defaults to empty. Order also leads the automatic context menu. */
  public readonly leftSwipeActions: InputSignal<readonly ISwipeAction[]> = input<readonly ISwipeAction[]>([]);
  /** Commands revealed by a physical rightward swipe; optional, defaults to empty. Context order follows all left actions. */
  public readonly rightSwipeActions: InputSignal<readonly ISwipeAction[]> = input<readonly ISwipeAction[]>([]);
  /** Translated native overflow previous-page label. Defaults to 'Previous actions'. */
  public readonly swipePreviousLabel: InputSignal<ResolvableText> = input<ResolvableText>('Previous actions');
  /** Translated native overflow next-page label. Defaults to 'Next actions'. */
  public readonly swipeNextLabel: InputSignal<ResolvableText> = input<ResolvableText>('Next actions');
  /** Tooltip mouse/keyboard dwell in milliseconds, default 400. Applies only to compact names; large clipped captions remain immediate. Never enables touch tooltips. */
  public readonly swipeTooltipDwell: InputSignal<number> = input(SWIPE_TOOLTIP_DWELL);
  /** Full-swipe behavior; true by default. False disables threshold activation. Per-action fullSwipe:false also opts out. */
  public readonly swipeFullAction: InputSignal<boolean | ISwipeFullActionConfig> = input<boolean | ISwipeFullActionConfig>(true);
  /** Successful command behavior, default 'collapse'. 'dismiss' animates and hides the row; remove its data on swipeDismissed. Actions may override this. */
  public readonly swipeCompletion: InputSignal<SwipeActionCompletion> = input<SwipeActionCompletion>('collapse');
  /** Optional focus destination (or container of a focusable control) after row dismissal. Defaults to the next or previous sibling control when focus is inside this row. */
  public readonly swipeDismissFocus: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Translated retry prefix, default 'Retry'. An action's retryLabel can provide its complete translated retry name. */
  public readonly swipeRetryLabel: InputSignal<ResolvableText> = input<ResolvableText>('Retry');
  /** Translated pending status, default 'Working', announced with the full-swipe action name. */
  public readonly swipeLoadingLabel: InputSignal<ResolvableText> = input<ResolvableText>('Working');
  /** Translated completion status, default 'Done', announced with the command name and accompanied by a checkmark. */
  public readonly swipeCompletedLabel: InputSignal<ResolvableText> = input<ResolvableText>('Done');

  /** Emitted after a successful dismiss exit hides this row. Remove its item from application-owned data here; Angular retains DOM ownership. */
  public readonly swipeDismissed: OutputEmitterRef<ISwipeActionEvent> = output<ISwipeActionEvent>();
  /** Command activation, emitted once before the handler. Includes pointer release or a trackpad crossing of the full-swipe commit threshold. */
  public readonly swipeAction: OutputEmitterRef<ISwipeActionEvent> = output<ISwipeActionEvent>();
  /** Synchronous or asynchronous handler failure. The command becomes available for an explicit retry after rejection. */
  public readonly swipeActionError: OutputEmitterRef<ISwipeActionError> = output<ISwipeActionError>();

  private dismissal: SwipeRowDismissal | undefined;
  private panel: ComponentRef<SwipeActionPanel> | undefined;
  private row: HTMLElement | undefined;
  private originalRowActive: string | null = null;
  private movable: HTMLElement | undefined;
  private motion: ISpringMotion | undefined;
  private listeners: AbortController | undefined;
  private gestureListeners: AbortController | undefined;
  private visibilityObserver: MutationObserver | undefined;
  private gesture: ISwipeGesture | undefined;
  private wheelGesture: ISwipeWheelGesture | undefined;
  private completeAfterWheel: (() => void) | undefined;
  private wheelTimer: number | undefined;
  private layout: ISwipeActionLayout = { left: 0, right: 0, full: 0, column: 0 };
  private stretchSide: SwipeSide | null = null;
  private stretchPermitted: boolean = false;
  private position: number = 0;
  private destination: number = 0;
  private motionSide: SwipeSide | null = null;
  private settleMinimum: number = 0;
  private settleMaximum: number = 0;
  private suppressClick: boolean = false;
  private commandRevision: number = 0;
  private leftConfiguration: readonly ISwipeAction[] | undefined;
  private rightConfiguration: readonly ISwipeAction[] | undefined;

  constructor() {
    afterRenderEffect(() => {
      const left = this.leftSwipeActions();
      const right = this.rightSwipeActions();
      const unavailable = this.swipeDisabled() || this.swipeLoading() || !!this.menuItem?.disabled() || !!this.menuItem?.loading();
      const reduced = this.bxA11yService.isReducedMotion();
      const previous = this.swipePreviousLabel();
      const next = this.swipeNextLabel();
      const tooltipDwell = this.swipeTooltipDwell();
      const pending = this.working();
      const completed = this.completed();
      const completedLabel = this.swipeCompletedLabel();
      const failed = this.failed();
      const operation = this.fullOperation();
      const retryLabel = this.swipeRetryLabel();
      const loadingLabel = this.swipeLoadingLabel();
      const content = this.swipeContent();
      const full = this.fullOptions();

      untracked(() => {
        const configurationChanged = left !== this.leftConfiguration || right !== this.rightConfiguration;

        this.leftConfiguration = left;
        this.rightConfiguration = right;

        if (!left.length && !right.length) {
          this.teardown();

          return;
        }

        if (content && this.movable && content !== this.movable) this.teardown();

        this.mount();
        this.panel?.setInput('left', left);
        this.panel?.setInput('right', right);
        this.panel?.setInput('disabled', unavailable);
        this.panel?.setInput('previousLabel', previous);
        this.panel?.setInput('nextLabel', next);
        this.panel?.setInput('tooltipDwell', tooltipDwell);
        this.panel?.setInput('pending', pending);
        this.panel?.setInput('completedAction', completed);
        this.panel?.setInput('completedLabel', completedLabel);
        this.panel?.setInput('failed', failed);
        this.panel?.setInput('fullActionId', operation?.id ?? null);
        this.panel?.setInput('retryLabel', retryLabel);
        this.panel?.setInput('loadingLabel', loadingLabel);
        this.panel?.setInput('readyLabel', full.readyLabel);
        this.panel?.setInput('armThreshold', full.armThreshold);
        this.panel?.setInput('commitThreshold', full.commitThreshold);

        if (!full.enabled && (this.gesture || this.wheelGesture)) {
          this.cancelGesture();
          this.cancelWheel();
        }

        if (unavailable) {
          this.closeSwipeActions();
          this.panel?.instance.closeContext();
        }

        if (configurationChanged && !this.wheelGesture?.committed && !this.fullOperation()) {
          this.cancelGesture();
          this.cancelWheel();
        }

        if (reduced) this.dismissal?.finish();

        if (reduced && !this.gesture && !this.wheelGesture) this.motion?.retarget([this.destination], true);

        this.panel?.changeDetectorRef.detectChanges();
      });
    });
    this.destroyRef.onDestroy(() => this.teardown());
  }

  /** Close exposed actions without activating a command; an owned drag rolls back before closure. */
  public closeSwipeActions(): void {
    if (this.pending().length || this.phase() === 'dismissing' || this.phase() === 'dismissed') return;

    this.fullOperation.set(null);

    if (!this.motion) {
      this.phase.set('closed');

      return;
    }

    this.cancelGesture();
    this.cancelWheel();
    this.settle(0);
  }

  /** Restore a successfully dismissed row for undo or preview reuse. Pending requests and active exits cannot be restored. Does not modify application data. */
  public restoreSwipeRow(): void {
    if (this.phase() !== 'dismissed') return;

    this.dismissal?.restore();
    this.fullOperation.set(null);
    this.stretchSide = null;
    this.position = 0;
    this.destination = 0;
    this.motionSide = null;
    this.phase.set('closed');
    this.motion?.track([0], [0]);
    this.panel?.setInput('interactive', false);
  }

  //#region Helpers

  private mount(): void {
    if (this.panel) return;

    const movable =
      this.swipeContent() ??
      this.nativeElement.querySelector<HTMLElement>('[bxSwipeContent]') ??
      this.nativeElement.querySelector<HTMLElement>('.bx-menu-item-btn');
    const row = this.menuItem
      ? this.nativeElement.querySelector<HTMLElement>('.bx-menu-item-btn')
      : (movable?.closest<HTMLElement>('button,a[href],[tabindex]') ?? movable);
    const win = this.nativeElement.ownerDocument.defaultView;

    if (!row || !movable || !win || row === this.nativeElement || movable === this.nativeElement || !this.nativeElement.contains(movable)) return;

    this.row = row;
    this.originalRowActive = row.getAttribute('data-bx-swipe-active');
    this.movable = movable;
    this.style(this.nativeElement, 'position', 'relative');
    this.style(this.nativeElement, 'overflow', 'clip');
    this.style(this.nativeElement, 'overscroll-behavior-x', 'contain');
    this.style(this.nativeElement, 'touch-action', 'pan-y pinch-zoom');
    this.style(row, 'touch-action', 'pan-y pinch-zoom');
    this.style(row, 'position', 'relative');
    this.style(movable, 'position', 'relative');

    const panel = this.viewContainerRef.createComponent(SwipeActionPanel);

    this.panel = panel;
    panel.setInput('origin', this.focusOrigin());

    if (row.getAttribute('role') === 'gridcell') panel.location.nativeElement.setAttribute('role', 'gridcell');

    this.nativeElement.append(panel.location.nativeElement);
    this.dismissal = new SwipeRowDismissal(this.nativeElement, [row, panel.location.nativeElement]);
    panel.instance.selected.subscribe((event) => this.invoke(event));
    panel.instance.layoutChange.subscribe((layout) => this.updateLayout(layout));
    this.motion = createSpringMotion(
      [0],
      ([position], [velocity]) => {
        if (this.motionSide === null && this.destination !== 0 && position * this.destination >= 0) {
          this.motionSide = this.destination < 0 ? 'left' : 'right';
        }

        const bounded = this.phase() === 'settling' ? Math.max(this.settleMinimum, Math.min(this.settleMaximum, position)) : position;

        this.position = this.clampPosition(bounded, this.motionSide);
        paintMotionStyles(row, { transform: `translate3d(${this.position}px, 0, 0)` }, true);

        this.paint();

        if (this.phase() === 'settling' && Math.abs(position - this.destination) < 0.1 && Math.abs(velocity) < 0.1) {
          this.phase.set(this.destination === 0 ? 'closed' : this.destination < 0 ? 'left' : 'right');

          if (this.destination === 0) this.motionSide = null;

          this.stretchSide = null;
          this.panel?.setInput('stretch', 0);
          this.panel?.setInput('armed', false);
        }
      },
      MOTION_PRESETS.smooth
    );
    this.style(row, 'transform', 'translate3d(0, 0, 0)');
    this.listeners = new AbortController();

    const options = { signal: this.listeners.signal };
    const doc = this.nativeElement.ownerDocument;

    this.nativeElement.addEventListener('wheel', (event) => this.onWheel(event), { ...options, passive: false, capture: true });
    this.nativeElement.addEventListener('pointerdown', (event) => this.onDown(event), options);
    row.addEventListener(
      'lostpointercapture',
      (event) => {
        if (event.target === row && event.pointerId === this.gesture?.pointerId && !row.hasPointerCapture(event.pointerId)) this.cancelGesture();
      },
      options
    );
    this.nativeElement.addEventListener(
      'click',
      (event) => {
        if (this.suppressClick || (this.destination !== 0 && this.row?.contains(event.target as Node)) || this.gesture?.claimed) {
          event.preventDefault();
          event.stopImmediatePropagation();

          const suppressOnly = this.suppressClick;

          this.suppressClick = false;

          if (!suppressOnly) this.closeSwipeActions();
        }
      },
      { ...options, capture: true }
    );
    this.nativeElement.addEventListener(
      'contextmenu',
      (event) => {
        if (!this.contextMenuDirective && !event.defaultPrevented) this.openContext(event);
      },
      options
    );
    this.nativeElement.addEventListener(
      'keydown',
      (event) => {
        if (!this.contextMenuDirective && (event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10'))) {
          event.preventDefault();
          event.stopPropagation();
          this.openContext(event);
        }
      },
      options
    );
    doc.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Escape' && (this.gesture || this.wheelGesture || this.destination !== 0)) {
          event.preventDefault();
          event.stopImmediatePropagation();
          this.closeSwipeActions();
        }
      },
      { ...options, capture: true }
    );
    doc.addEventListener(
      'pointerdown',
      (event) => {
        if (!this.nativeElement.contains(event.target as Node)) this.closeSwipeActions();
      },
      { ...options, capture: true, passive: true }
    );
    doc.addEventListener(
      'focusin',
      (event) => {
        if (!this.nativeElement.contains(event.target as Node)) this.closeSwipeActions();
      },
      options
    );
    doc.addEventListener(
      'visibilitychange',
      () => {
        if (doc.hidden) {
          this.closeSwipeActions();
          this.panel?.instance.closeContext();
        }
      },
      options
    );
    win.addEventListener('blur', () => this.closeSwipeActions(), options);
    this.visibilityObserver = new MutationObserver(() => {
      if (this.nativeElement.closest('[inert], [hidden], [aria-hidden="true"]')) {
        this.closeSwipeActions();
        this.panel?.instance.closeContext();
      }
    });

    for (let parent: HTMLElement | null = this.nativeElement.parentElement; parent; parent = parent.parentElement) {
      this.visibilityObserver.observe(parent, { attributes: true, attributeFilter: ['inert', 'hidden', 'aria-hidden'] });
    }
  }

  private onWheel(event: WheelEvent): void {
    if (!this.nativeElement.contains(event.target as Node)) return;

    if (this.wheelGesture?.committed) {
      if (event.ctrlKey || Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        this.finishWheel(false);

        return;
      }

      if (event.deltaX === 0) return;

      event.preventDefault();
      event.stopPropagation();

      const win = this.nativeElement.ownerDocument.defaultView;

      win?.clearTimeout(this.wheelTimer);
      this.wheelTimer = win?.setTimeout(() => this.finishWheel(false), SWIPE_WHEEL_IDLE);

      return;
    }

    if (event.ctrlKey) {
      this.cancelWheel();

      return;
    }

    if (this.operationBlocksGesture() || this.gesture || this.swipeDisabled() || this.swipeLoading() || this.menuItem?.disabled() || this.menuItem?.loading())
      return;

    if (event.deltaX === 0 && event.deltaY === 0) return;

    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
      if (this.wheelGesture) this.finishWheel(false);

      return;
    }

    const unit =
      event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.row ?? this.nativeElement).lineHeight ?? '16') || 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? this.nativeElement.clientWidth
          : 1;
    const delta = -event.deltaX * unit;

    if (!this.wheelGesture && ((delta < 0 && this.layout.left === 0 && this.position <= 0) || (delta > 0 && this.layout.right === 0 && this.position >= 0)))
      return;

    event.preventDefault();
    event.stopPropagation();

    const win = this.nativeElement.ownerDocument.defaultView;

    if (!win) return;

    if (this.wheelGesture?.collapsed) {
      const previous = this.wheelGesture.lastDelta;
      const renewed = Math.sign(delta) !== Math.sign(previous) || Math.abs(delta) > Math.abs(previous) + Math.max(1, Math.abs(previous) * 0.25);

      if (!renewed) {
        this.wheelGesture.lastDelta = delta;
        win.clearTimeout(this.wheelTimer);
        this.wheelTimer = win.setTimeout(() => this.finishWheel(false), SWIPE_WHEEL_IDLE);

        return;
      }

      this.wheelGesture = undefined;
      win.clearTimeout(this.wheelTimer);
      this.wheelTimer = undefined;
    }

    if (!this.wheelGesture) {
      this.completed.set(null);
      this.swipeActionsService.activate(this, () => this.closeSwipeActions());

      const side = this.initialSide(delta);

      this.stretchPermitted = this.canBeginStretch(side);
      this.wheelGesture = {
        destination: this.destination,
        lastDelta: delta,
        collapsed: false,
        committed: false,
        stretchIntent: this.stretchPermitted,
        revealDeltaPeak: Math.abs(delta),
        continuationDelta: null,
        velocity: new GestureVelocity(this.position, event.timeStamp),
        side,
        position: this.position,
        rawPosition: this.rawPosition(this.position, side),
        start: this.position,
        event
      };
      this.motionSide = this.destination === 0 && (this.position < 0 ? 'left' : 'right') !== side ? null : side;
      this.motion?.track([this.position]);
      this.phase.set('dragging');
      this.panel?.setInput('interactive', false);
    }

    const entranceReady = this.canBeginStretch(this.wheelGesture.side);

    this.updateWheelStretchIntent(this.wheelGesture, delta, entranceReady);

    this.stretchPermitted = entranceReady && this.wheelGesture.stretchIntent;
    this.wheelGesture.lastDelta = delta;
    this.prepareStretch(this.wheelGesture.side);

    const position = this.clampGesturePosition(
      this.visualPosition(this.wheelGesture.rawPosition + delta, this.wheelGesture.side),
      this.wheelGesture.side,
      this.wheelGesture.start,
      this.wheelGesture.destination
    );

    const previousPosition = this.wheelGesture.position;

    this.wheelGesture.event = event;
    this.wheelGesture.position = position;
    this.wheelGesture.rawPosition = this.rawPosition(position, this.wheelGesture.side);
    this.updateArmed(position, this.wheelGesture.side);
    this.wheelGesture.velocity.update(position, event.timeStamp);
    this.motion?.track([position], [this.wheelGesture.velocity.velocity(event.timeStamp)]);

    if (Math.abs(position) < 0.1 && previousPosition * delta < 0) {
      this.wheelGesture.collapsed = true;
      this.destination = 0;
      this.motionSide = null;
      this.stretchSide = null;
      this.swipeActionsService.release(this);
    }

    win.clearTimeout(this.wheelTimer);
    this.wheelTimer = win.setTimeout(() => this.finishWheel(), SWIPE_WHEEL_IDLE);

    const action = this.edgeAction(this.wheelGesture.side);

    if (
      action &&
      this.fullOptions(this.wheelGesture.side).enabled &&
      action.fullSwipe !== false &&
      this.stretchProgress(position, this.wheelGesture.side) >= this.fullOptions(this.wheelGesture.side).commitThreshold
    ) {
      this.wheelGesture.committed = true;
      this.invoke({ action, source: 'full-swipe', event });
    }
  }

  private updateWheelStretchIntent(gesture: ISwipeWheelGesture, delta: number, entranceReady: boolean): void {
    if (gesture.stretchIntent || delta * (gesture.side === 'left' ? -1 : 1) <= 0) return;

    const magnitude = Math.abs(delta);

    gesture.revealDeltaPeak = Math.max(gesture.revealDeltaPeak, magnitude);

    if (!entranceReady) {
      gesture.continuationDelta = null;

      return;
    }

    // A flat or quantized momentum tail is still opening input, even after the entrance settles.
    // Require an eased-off opening impulse followed by renewed effort, without adding a timed lockout.
    if (gesture.continuationDelta === null) {
      if (magnitude < Math.abs(gesture.lastDelta) && magnitude <= gesture.revealDeltaPeak * 0.5) gesture.continuationDelta = magnitude;

      return;
    }

    if (magnitude > gesture.continuationDelta + Math.max(2, gesture.continuationDelta * 0.5)) gesture.stretchIntent = true;
    else gesture.continuationDelta = Math.min(gesture.continuationDelta, magnitude);
  }

  private finishWheel(allowFull: boolean = true): void {
    const gesture = this.wheelGesture;
    const win = this.nativeElement.ownerDocument.defaultView;

    if (!gesture || !win) return;

    const velocity = gesture.velocity.velocity(win.performance.now());

    this.wheelGesture = undefined;
    win.clearTimeout(this.wheelTimer);
    this.wheelTimer = undefined;

    if (gesture.committed) {
      const complete = this.completeAfterWheel;

      this.completeAfterWheel = undefined;
      complete?.();

      return;
    }

    this.motion?.track([this.position], [velocity]);

    if (allowFull) this.finishRelease(velocity, gesture.side, gesture.position, gesture.event);
    else this.settle(this.releaseDestination(velocity, gesture.side, gesture.position));
  }

  private cancelWheel(): void {
    if (this.wheelGesture?.committed) {
      this.finishWheel(false);

      return;
    }

    const gesture = this.wheelGesture;

    this.nativeElement.ownerDocument.defaultView?.clearTimeout(this.wheelTimer);
    this.wheelTimer = undefined;
    this.wheelGesture = undefined;

    if (gesture) {
      this.motion?.track([this.position], [0]);
      this.settle(gesture.collapsed ? 0 : gesture.destination);
    }
  }

  private releaseDestination(velocity: number, side: SwipeSide | null, position: number = this.position): number {
    const projection = projectMotion(position, velocity, Math.max(this.layout.left, this.layout.right));

    return side !== 'right' && projection < -this.layout.left / 2 && this.layout.left > 0
      ? -this.layout.left
      : side !== 'left' && projection > this.layout.right / 2 && this.layout.right > 0
        ? this.layout.right
        : 0;
  }

  private initialSide(delta: number): SwipeSide {
    if (this.destination < 0) return 'left';

    if (this.destination > 0) return 'right';

    return delta < 0 ? 'left' : 'right';
  }

  private extent(side: SwipeSide): number {
    return this.stretchSide === side ? Math.max(this.layout[side], this.layout.full) : this.layout[side];
  }

  private clampPosition(position: number, side: SwipeSide | null): number {
    if (side === 'left') return Math.max(-this.extent('left'), Math.min(0, position));

    if (side === 'right') return Math.max(0, Math.min(this.extent('right'), position));

    return Math.max(-this.extent('left'), Math.min(this.extent('right'), position));
  }

  private clampGesturePosition(position: number, side: SwipeSide | null, start: number, destination: number): number {
    const minimum = side === 'right' ? (destination === 0 ? Math.min(0, start) : 0) : -(this.stretchPermitted ? this.extent('left') : this.layout.left);
    const maximum = side === 'left' ? (destination === 0 ? Math.max(0, start) : 0) : this.stretchPermitted ? this.extent('right') : this.layout.right;

    return Math.max(minimum, Math.min(maximum, position));
  }

  private fullOptions(side: SwipeSide | null = null): Required<ISwipeFullActionConfig> {
    const value = this.swipeFullAction();
    const action = side ? this.edgeAction(side) : undefined;
    const config = { ...(typeof value === 'boolean' ? { enabled: value } : value), ...action?.fullSwipeConfig };
    const destructive = action?.role === 'destructive';
    const defaultCommit = destructive ? SWIPE_FULL_ACTION.destructiveCommitThreshold : SWIPE_FULL_ACTION.commitThreshold;
    const defaultResistance = destructive ? SWIPE_FULL_ACTION.destructiveResistance : SWIPE_FULL_ACTION.resistance;
    const arm = config.armThreshold ?? SWIPE_FULL_ACTION.armThreshold;
    const commit = config.commitThreshold ?? defaultCommit;
    const resistance = config.resistance ?? defaultResistance;
    const defaultPlateau = destructive ? SWIPE_FULL_ACTION.destructivePlateau : 0;
    const defaultEnd = destructive ? SWIPE_FULL_ACTION.destructiveResistanceEnd : SWIPE_FULL_ACTION.resistanceEnd;
    const plateau = config.resistancePlateau ?? defaultPlateau;
    const end = config.resistanceEnd ?? defaultEnd;
    const resistancePlateau = Number.isFinite(plateau) ? Math.max(0, Math.min(0.35, plateau)) : defaultPlateau;
    const armThreshold = Number.isFinite(arm) ? Math.max(0, Math.min(0.95, arm)) : SWIPE_FULL_ACTION.armThreshold;

    return {
      enabled: value !== false && (config.enabled ?? true),
      resistance: Number.isFinite(resistance) ? Math.max(1, Math.min(12, resistance)) : defaultResistance,
      resistancePlateau,
      resistanceEnd: Math.max(resistancePlateau + 0.01, Number.isFinite(end) ? Math.min(1, end) : defaultEnd),
      armThreshold,
      commitThreshold: Number.isFinite(commit) ? Math.max(armThreshold + 0.01, Math.min(1, commit)) : Math.max(armThreshold + 0.01, defaultCommit),
      readyLabel: config.readyLabel ?? 'Release to activate'
    };
  }

  private edgeAction(side: SwipeSide): ISwipeAction | undefined {
    const actions = side === 'left' ? this.leftSwipeActions() : this.rightSwipeActions();

    return side === 'left' ? actions[actions.length - 1] : actions[0];
  }

  private rawPosition(position: number, side: SwipeSide | null): number {
    if (!side) return position;

    const sign = side === 'left' ? -1 : 1;
    const distance = position * sign;
    const start = this.layout[side];
    const full = this.fullOptions(side);
    const resistance = resolveSwipeResistance(full.resistance, this.layout.full - start, this.layout.column * 2);

    return distance > start
      ? sign * (start + swipeInputDistance(distance - start, this.layout.full - start, resistance, full.resistancePlateau, full.resistanceEnd))
      : position;
  }

  private visualPosition(position: number, side: SwipeSide | null): number {
    if (!side) return position;

    const sign = side === 'left' ? -1 : 1;
    const distance = position * sign;
    const start = this.layout[side];
    const full = this.fullOptions(side);
    const resistance = resolveSwipeResistance(full.resistance, this.layout.full - start, this.layout.column * 2);

    return distance > start
      ? sign * (start + swipeVisualDistance(distance - start, this.layout.full - start, resistance, full.resistancePlateau, full.resistanceEnd))
      : position;
  }

  private canBeginStretch(side: SwipeSide): boolean {
    const actions = side === 'left' ? this.leftSwipeActions() : this.rightSwipeActions();

    return actions.length === 1 || !!this.panel?.instance.isEntranceComplete(side);
  }

  private prepareStretch(side: SwipeSide | null): void {
    if (!side || !this.stretchPermitted || this.stretchSide === side || !this.fullOptions(side).enabled) return;

    const action = this.edgeAction(side);

    if (
      action &&
      action.fullSwipe !== false &&
      !action.disabled &&
      !action.loading &&
      !this.pending().includes(action.id) &&
      this.panel?.instance.canFullSwipe(side)
    ) {
      this.stretchSide = side;
    }
  }

  private stretchProgress(position: number, side: SwipeSide | null): number {
    if (!side || this.stretchSide !== side || position * (side === 'left' ? -1 : 1) <= 0) return 0;

    const distance = this.layout.full - this.layout[side];

    return distance > 0 ? Math.max(0, Math.min(1, (Math.abs(position) - this.layout[side]) / distance)) : 0;
  }

  private updateArmed(position: number, side: SwipeSide | null): void {
    this.panel?.setInput('armed', this.stretchProgress(position, side) >= this.fullOptions(side).commitThreshold);
  }

  private finishRelease(velocity: number, side: SwipeSide | null, position: number, event: MouseEvent): void {
    const action = side ? this.edgeAction(side) : undefined;
    const full = this.fullOptions(side);
    const commit = !!side && !!action && full.enabled && action.fullSwipe !== false && this.stretchProgress(position, side) >= full.commitThreshold;
    const stretched = !!side && this.stretchProgress(position, side) > 0;
    const destination = stretched && side ? this.layout[side] * (side === 'left' ? -1 : 1) : this.releaseDestination(velocity, side, position);

    if (commit && action) this.invoke({ action, source: 'full-swipe', event });
    else this.settle(destination);
  }

  private focusOrigin(): HTMLElement {
    const row = this.row ?? this.nativeElement;
    const active = this.nativeElement.ownerDocument.activeElement;

    if (active instanceof HTMLElement && row.contains(active) && active.tabIndex >= 0) return active;

    return row.matches('button,a[href],[tabindex]') ? row : (row.querySelector<HTMLElement>('button,a[href],[tabindex]') ?? row);
  }

  private onDown(event: PointerEvent): void {
    if ((event.target as Element).closest('input,textarea,select,[contenteditable="true"]')) return;

    if (
      this.operationBlocksGesture() ||
      !event.isPrimary ||
      event.button !== 0 ||
      this.swipeDisabled() ||
      this.swipeLoading() ||
      this.menuItem?.disabled() ||
      this.menuItem?.loading()
    )
      return;

    this.suppressClick = this.destination === 0 && Math.abs(this.position) > 0.1;
    this.cancelWheel();
    this.cancelGesture();
    this.motion?.track([this.position]);
    this.gesture = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      start: this.position,
      destination: this.destination,
      velocity: new GestureVelocity(event.clientX, event.timeStamp),
      claimed: false,
      side: this.destination !== 0 ? this.initialSide(0) : null
    };
    this.gestureListeners = new AbortController();

    const options = { signal: this.gestureListeners.signal };
    const doc = this.nativeElement.ownerDocument;

    if (event.pointerType === 'touch') {
      // Pointer capture and pointermove cancellation do not suppress native touch scrolling.
      // Keep vertical scrolling and pinch zoom available until this single-touch swipe claims horizontal intent.
      doc.addEventListener(
        'touchmove',
        (move) => {
          if (move.touches.length !== 1) this.cancelGesture();
          else if (this.gesture?.claimed && move.cancelable) move.preventDefault();
        },
        { ...options, passive: false }
      );
      doc.addEventListener(
        'touchstart',
        (start) => {
          if (start.touches.length > 1) this.cancelGesture();
        },
        { ...options, passive: true }
      );
    }

    doc.addEventListener('pointermove', (move) => this.onMove(move), { ...options, passive: false });
    doc.addEventListener('pointerup', (end) => this.onUp(end), options);
    doc.addEventListener(
      'pointercancel',
      (cancel) => {
        if (cancel.pointerId === this.gesture?.pointerId) this.cancelGesture();
      },
      options
    );
    doc.addEventListener(
      'pointerdown',
      (next) => {
        if (next.pointerId !== this.gesture?.pointerId) this.cancelGesture();
      },
      { ...options, passive: true }
    );
  }

  private onMove(event: PointerEvent): void {
    const gesture = this.gesture;

    if (!gesture || event.pointerId !== gesture.pointerId) return;

    const x = event.clientX - gesture.x;
    const y = event.clientY - gesture.y;

    if (!gesture.claimed) {
      if (Math.max(Math.abs(x), Math.abs(y)) < SWIPE_ACTION_THRESHOLD) return;

      if (Math.abs(y) >= Math.abs(x) || (x < 0 && !this.layout.left && gesture.start <= 0) || (x > 0 && !this.layout.right && gesture.start >= 0)) {
        this.cancelGesture();

        return;
      }

      this.completed.set(null);
      this.swipeActionsService.activate(this, () => this.closeSwipeActions());
      gesture.claimed = true;
      gesture.side ??= x < 0 ? 'left' : 'right';
      this.stretchPermitted = this.canBeginStretch(gesture.side);
      this.motionSide = gesture.destination === 0 && (gesture.start < 0 ? 'left' : 'right') !== gesture.side ? null : gesture.side;
      this.row?.setPointerCapture(event.pointerId);
      this.phase.set('dragging');
      this.panel?.setInput('interactive', false);
    }

    event.preventDefault();
    this.prepareStretch(gesture.side);
    gesture.velocity.update(event.clientX, event.timeStamp);

    const position = this.clampGesturePosition(gesture.start + x, gesture.side, gesture.start, gesture.destination);

    this.updateArmed(position, gesture.side);
    this.motion?.track([position], [gesture.velocity.velocity(event.timeStamp)]);
  }

  private onUp(event: PointerEvent): void {
    const gesture = this.gesture;

    if (!gesture || event.pointerId !== gesture.pointerId) return;

    if (!gesture.claimed) {
      this.releaseGesture();
      this.settle(gesture.destination);

      return;
    }

    gesture.velocity.update(event.clientX, event.timeStamp);

    const velocity = gesture.velocity.velocity(event.timeStamp);

    this.suppressClick = true;
    this.releaseGesture();
    this.motion?.track([this.position], [velocity]);
    this.finishRelease(velocity, gesture.side, this.position, event);
  }

  private releaseGesture(): void {
    const gesture = this.gesture;

    this.gesture = undefined;
    this.gestureListeners?.abort();
    this.gestureListeners = undefined;

    if (gesture && this.row?.hasPointerCapture(gesture.pointerId)) this.row.releasePointerCapture(gesture.pointerId);
  }

  private cancelGesture(): void {
    const gesture = this.gesture;

    if (!gesture) return;

    this.releaseGesture();

    if (gesture.claimed) {
      this.suppressClick = true;
      this.motion?.track([this.position], [0]);
      this.settle(gesture.destination);
    }
  }

  private settle(destination: number): void {
    this.destination = Math.max(-this.layout.left, Math.min(this.layout.right, destination));

    if (this.destination !== 0) {
      this.motionSide = this.position * this.destination < 0 ? null : this.destination < 0 ? 'left' : 'right';
    } else if (Math.abs(this.position) > 0.1) this.motionSide = this.position < 0 ? 'left' : 'right';

    this.settleMinimum = Math.min(0, this.position, this.destination);
    this.settleMaximum = Math.max(0, this.position, this.destination);
    this.panel?.setInput('armed', false);
    this.phase.set('settling');
    this.panel?.setInput('interactive', this.destination !== 0);

    if (this.destination === 0) {
      if (this.panel?.location.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)) this.focusOrigin().focus({ preventScroll: true });

      this.swipeActionsService.release(this);
    }

    this.motion?.retarget([this.destination], this.bxA11yService.isReducedMotion());
  }

  private paint(): void {
    const side: SwipeSide | null = this.position < -0.1 ? 'left' : this.position > 0.1 ? 'right' : null;

    const active = side ? 'true' : 'false';

    this.nativeElement.dataset['bxSwipeActive'] = active;

    if (this.row?.getAttribute('data-bx-swipe-active') !== active) this.row?.setAttribute('data-bx-swipe-active', active);

    const full = this.fullOptions(side);

    this.panel?.setInput('armThreshold', full.armThreshold);
    this.panel?.setInput('commitThreshold', full.commitThreshold);
    this.panel?.setInput('readyLabel', full.readyLabel);
    this.panel?.setInput('side', side);
    this.panel?.setInput('reveal', Math.abs(this.position));
    this.panel?.setInput('stretch', side && this.stretchSide === side ? Math.max(0, Math.abs(this.position) - this.layout[side]) : 0);
  }

  private updateLayout(layout: ISwipeActionLayout): void {
    const changed = layout.left !== this.layout.left || layout.right !== this.layout.right || layout.full !== this.layout.full;

    this.layout = layout;

    if (this.phase() === 'dismissing' || this.phase() === 'dismissed') return;

    const operation = this.fullOperation();

    if (operation) {
      if (changed) this.holdFullAction(operation.side, operation.status);

      return;
    }

    if (changed) {
      this.cancelGesture();
      this.cancelWheel();
      this.settle(this.destination < 0 ? -layout.left : this.destination > 0 ? layout.right : 0);
    }
  }

  private openContext(event: MouseEvent | KeyboardEvent): void {
    if (this.pending().length || this.phase() === 'dismissing' || this.phase() === 'dismissed') return;

    if (this.swipeDisabled() || this.swipeLoading() || this.menuItem?.disabled() || this.menuItem?.loading()) return;

    event.preventDefault();
    event.stopPropagation();
    this.closeSwipeActions();
    this.completed.set(null);
    this.panel?.setInput('origin', this.focusOrigin());
    this.panel?.instance.openContext(event);
  }

  private operationBlocksGesture(): boolean {
    return this.pending().length > 0 || !!this.fullOperation() || this.phase() === 'dismissing' || this.phase() === 'dismissed';
  }

  private holdFullAction(side: SwipeSide, status: 'pending' | 'error'): void {
    this.stretchSide = side;
    this.motionSide = side;
    this.destination = Math.max(this.layout.full, this.layout[side]) * (side === 'left' ? -1 : 1);
    this.phase.set(status);
    this.panel?.setInput('interactive', true);
    this.panel?.setInput('armed', false);
    this.motion?.track([this.position], [0]);
    this.motion?.retarget([this.destination], this.bxA11yService.isReducedMotion());
  }

  private invoke(event: ISwipeActionEvent): void {
    const action = [...this.leftSwipeActions(), ...this.rightSwipeActions()].find((candidate) => candidate.id === event.action.id);

    if (
      !action ||
      this.pending().length ||
      this.phase() === 'dismissing' ||
      this.phase() === 'dismissed' ||
      this.swipeDisabled() ||
      this.swipeLoading() ||
      this.menuItem?.disabled() ||
      this.menuItem?.loading() ||
      action.disabled ||
      action.loading
    )
      return;

    const revision = ++this.commandRevision;
    const activation: ISwipeActionEvent = { ...event, action, retry: this.failed().includes(action.id) };
    const completion = action.completion ?? this.swipeCompletion();
    const side = event.source === 'full-swipe' ? this.stretchSide : this.fullOperation()?.id === action.id ? this.fullOperation()?.side : null;

    this.completed.set(null);
    this.failed.update((ids) => ids.filter((id) => id !== action.id));
    this.pending.set([action.id]);

    if (side) {
      this.fullOperation.set({ id: action.id, side, status: 'pending' });
      this.holdFullAction(side, 'pending');
    }

    this.focusOrigin().focus({ preventScroll: true });
    this.swipeAction.emit(activation);

    if (this.destroyRef.destroyed) return;

    try {
      const result = action.handler?.(activation);

      if (result) {
        this.working.set([action.id]);
        void result.then(
          () => this.completeAction(activation, completion, revision),
          (error: unknown) => this.failAction(action, error, revision)
        );
      } else this.completeAction(activation, completion, revision);
    } catch (error) {
      this.failAction(action, error, revision);
    }
  }

  private completeAction(event: ISwipeActionEvent, completion: SwipeActionCompletion, revision: number): void {
    if (this.destroyRef.destroyed || revision !== this.commandRevision) return;

    this.working.set([]);
    this.completed.set(event.action);

    if (this.wheelGesture?.committed) {
      this.completeAfterWheel = () => this.completeAction(event, completion, revision);

      return;
    }

    this.pending.set([]);
    this.panel?.instance.closeContext();

    if (completion === 'dismiss') {
      this.dismissRow(event);

      return;
    }

    this.fullOperation.set(null);
    this.motion?.track([this.position], [0]);
    this.settle(0);
  }

  private failAction(action: ISwipeAction, error: unknown, revision: number): void {
    if (this.destroyRef.destroyed || revision !== this.commandRevision) return;

    this.pending.set([]);
    this.working.set([]);
    this.failed.update((ids) => [...ids, action.id]);

    const operation = this.fullOperation();

    if (operation) {
      this.fullOperation.set({ ...operation, status: 'error' });
      this.holdFullAction(operation.side, 'error');
    }

    this.swipeActionError.emit({ action, error });
  }

  private dismissRow(event: ISwipeActionEvent): void {
    this.phase.set('dismissing');
    this.motion?.track([this.position], [0]);
    this.panel?.setInput('interactive', false);
    this.swipeActionsService.release(this);
    this.moveDismissedFocus();
    this.dismissal?.start(this.fullOperation()?.side ?? this.motionSide, this.bxA11yService.isReducedMotion(), () => {
      if (this.destroyRef.destroyed) return;

      this.phase.set('dismissed');
      this.swipeDismissed.emit(event);
    });
  }

  private moveDismissedFocus(): void {
    if (!this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)) return;

    const explicit = this.swipeDismissFocus();

    if (explicit && !this.nativeElement.contains(explicit)) {
      const target =
        explicit.tabIndex >= 0
          ? explicit
          : (explicit.querySelector<HTMLElement>('button:not(:disabled),a[href],[tabindex="0"],input:not(:disabled)') ?? explicit);

      target.focus({ preventScroll: true });

      return;
    }

    const siblings = Array.from(this.nativeElement.parentElement?.children ?? []);
    const index = siblings.indexOf(this.nativeElement);
    const candidates = [...siblings.slice(index + 1), ...siblings.slice(0, index).reverse()];

    for (const sibling of candidates) {
      const target = sibling.querySelector<HTMLElement>('button:not(:disabled),a[href],[tabindex="0"]');

      if (target && !target.closest('[inert],[hidden],[aria-hidden="true"]') && target.getClientRects().length) {
        target.focus({ preventScroll: true });

        return;
      }
    }

    this.focusOrigin().blur();
  }

  private style(element: HTMLElement, property: string, value: string): void {
    let properties = this.originalStyles.get(element);

    if (!properties) {
      properties = new Map();
      this.originalStyles.set(element, properties);
    }

    if (!properties.has(property)) properties.set(property, element.style.getPropertyValue(property));

    if (element.style.getPropertyValue(property) !== value) element.style.setProperty(property, value);
  }

  private teardown(): void {
    ++this.commandRevision;
    this.completeAfterWheel = undefined;
    this.dismissal?.restore();
    this.dismissal = undefined;
    this.fullOperation.set(null);
    this.pending.set([]);
    this.working.update((ids) => (ids.length ? [] : ids));
    this.completed.set(null);
    this.releaseGesture();
    this.cancelWheel();
    this.swipeActionsService.release(this);
    this.motion?.destroy();
    this.motion = undefined;
    this.listeners?.abort();
    this.listeners = undefined;
    this.visibilityObserver?.disconnect();
    this.visibilityObserver = undefined;
    this.panel?.instance.closeContext();
    this.panel?.destroy();
    this.panel = undefined;

    for (const [element, properties] of this.originalStyles) {
      for (const [property, value] of properties) {
        if (value) element.style.setProperty(property, value);
        else element.style.removeProperty(property);
      }
    }

    this.originalStyles.clear();

    if (this.originalRowActive === null) this.row?.removeAttribute('data-bx-swipe-active');
    else this.row?.setAttribute('data-bx-swipe-active', this.originalRowActive);

    this.originalRowActive = null;
    this.row = undefined;
    this.movable = undefined;
    delete this.nativeElement.dataset['bxSwipeActive'];
    delete this.nativeElement.dataset['bxSwipeHover'];
    delete this.nativeElement.dataset['bxSwipeFocus'];
    this.position = 0;
    this.destination = 0;
    this.motionSide = null;
    this.stretchSide = null;
    this.stretchPermitted = false;
    this.suppressClick = false;
    this.phase.set('closed');
  }

  //#endregion
}
