import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { ISpringMotion } from '@filip.mazev/blocks/effects/runtime';
import type { ISwipeAction } from '@forms/interfaces/iswipe-action.interface';
import type { ISwipeActionEvent } from '@forms/interfaces/iswipe-action-event.interface';
import type { ISwipeActionLayout } from '@forms/interfaces/iswipe-action-layout.interface';
import type { SwipeActionSource, SwipeSide } from '@forms/types/swipe-actions.types';

import { BX_I18N, BxA11yService, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { createSpringMotion, MOTION_PRESETS, paintMotionStyles } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';
import { ContextMenuDirective, Menu, MenuItem, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { Button } from '@forms/components/button/button';
import { SWIPE_ACTION_ENTRANCE, SWIPE_ACTION_FOREGROUNDS, SWIPE_TOOLTIP_DWELL } from '@forms/constants/swipe-actions.constants';

/** Internal presentation shared by every swipe-enhanced menu row. */
@Component({
  selector: 'bx-swipe-action-panel',
  imports: [Button, Icon, Menu, MenuItem, ContextMenuDirective, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './swipe-action-panel.html',
  styleUrl: './swipe-action-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwipeActionPanel {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly bxA11yService = inject(BxA11yService);

  private readonly measured: WritableSignal<ISwipeActionLayout> = signal({ left: 0, right: 0, full: 0, column: 0 });

  private readonly contextMenu: Signal<ContextMenuDirective> = viewChild.required(ContextMenuDirective);
  private readonly probe: Signal<ElementRef<HTMLElement>> = viewChild.required('probe');
  private readonly pagerProbe: Signal<ElementRef<HTMLElement>> = viewChild.required('pagerProbe');
  private readonly captionProbe: Signal<ElementRef<HTMLElement>> = viewChild.required('captionProbe');
  private readonly fullProbe: Signal<ElementRef<HTMLElement>> = viewChild.required('fullProbe');
  private readonly gapProbe: Signal<ElementRef<HTMLElement>> = viewChild.required('gapProbe');
  private readonly closeProbe: Signal<ElementRef<HTMLElement>> = viewChild.required('closeProbe');

  protected readonly instanceId: string = uuidv4();

  protected readonly iconSize: WritableSignal<number> = signal(20);
  protected readonly scrollRevision: WritableSignal<number> = signal(0);

  protected readonly compact: WritableSignal<boolean> = signal(false);

  protected readonly capacity: WritableSignal<number> = signal(1);

  protected readonly allActions: Signal<readonly ISwipeAction[]> = computed(() => [...this.left(), ...this.right()]);
  protected readonly previousText: Signal<string> = computed(() => this.text(this.previousLabel()));
  protected readonly nextText: Signal<string> = computed(() => this.text(this.nextLabel()));
  protected readonly groups: Signal<readonly SwipeSide[]> = computed(() => ['left', 'right']);

  /** Commands exposed by dragging left, in developer-defined order. */
  public readonly left: InputSignal<readonly ISwipeAction[]> = input<readonly ISwipeAction[]>([]);
  /** Commands exposed by dragging right, in developer-defined order. */
  public readonly right: InputSignal<readonly ISwipeAction[]> = input<readonly ISwipeAction[]>([]);
  /** Current exposed physical direction, or null while closed. */
  public readonly side: InputSignal<SwipeSide | null> = input<SwipeSide | null>(null);
  /** Exposed physical strip in CSS pixels; clips progressive reveal without moving neighboring rows. */
  public readonly reveal: InputSignal<number> = input(0);
  /** Actual additional reveal in pixels beyond the normal lane. Zero outside an eligible overdrag. */
  public readonly stretch: InputSignal<number> = input(0);
  /** Actual input is beyond the release-to-activate threshold; never derived from projected velocity. */
  public readonly armed: InputSignal<boolean> = input(false);
  /** Fraction of additional reveal where the icon moves inward and the caption fades. Defaults to 0.65. */
  public readonly armThreshold: InputSignal<number> = input(0.65);
  /** Fraction of additional reveal where the command can activate; defaults to 0.78. Completes the icon/caption transition at that point. */
  public readonly commitThreshold: InputSignal<number> = input(0.78);
  /** Translated polite status while release will activate the physical edge command. */
  public readonly readyLabel: InputSignal<ResolvableText> = input<ResolvableText>('Release to activate');
  /** Whether commands are currently reachable; false during direct dragging. */
  public readonly interactive: InputSignal<boolean> = input(false);
  /** Application and locally pending action identifiers. */
  public readonly pending: InputSignal<readonly string[]> = input<readonly string[]>([]);
  /** Rejected command identifiers that remain available for explicit retry. */
  public readonly failed: InputSignal<readonly string[]> = input<readonly string[]>([]);
  /** Retained full-width action during a request or retry, otherwise null. */
  public readonly fullActionId: InputSignal<string | null> = input<string | null>(null);
  /** Translated default retry prefix; per-action retryLabel overrides the complete name. */
  public readonly retryLabel: InputSignal<ResolvableText> = input<ResolvableText>('Retry');
  /** Translated pending status announced with the command name. */
  public readonly loadingLabel: InputSignal<ResolvableText> = input<ResolvableText>('Working');
  /** Most recently completed command, retaining its identifying label for status feedback until the next reveal. */
  public readonly completedAction: InputSignal<ISwipeAction | null> = input<ISwipeAction | null>(null);
  /** Translated completion status, default Done. */
  public readonly completedLabel: InputSignal<ResolvableText> = input<ResolvableText>('Done');
  /** Parent row availability; disables every command without erasing state. */
  public readonly disabled: InputSignal<boolean> = input(false);
  /** Translated label for paging earlier overflow actions. */
  public readonly previousLabel: InputSignal<ResolvableText> = input<ResolvableText>('Previous actions');
  /** Translated label for paging later overflow actions. */
  public readonly nextLabel: InputSignal<ResolvableText> = input<ResolvableText>('Next actions');
  /** Mouse/keyboard dwell in milliseconds for compact names. Large clipped captions remain immediate; touch tooltips stay disabled. */
  public readonly tooltipDwell: InputSignal<number> = input(SWIPE_TOOLTIP_DWELL);
  /** Visible focus origin and owner of the context surface. */
  public readonly origin: InputSignal<HTMLElement> = input.required<HTMLElement>();

  /** Explicit command activation forwarded to the shared controller. */
  public readonly selected: OutputEmitterRef<ISwipeActionEvent> = output<ISwipeActionEvent>();
  /** Measured geometry changes caused by resizing, text enlargement or live tokens. */
  public readonly layoutChange: OutputEmitterRef<ISwipeActionLayout> = output<ISwipeActionLayout>();

  private pagingMotion: ISpringMotion | undefined;
  private pagingLane: HTMLElement | undefined;
  private pagingTarget: number = 0;
  private measuredColumn: number = 0;
  private stretchMotion: ISpringMotion | undefined;
  private stretchIntent: number = 0;
  private entranceMotions: ISpringMotion[] = [];
  private entranceTimers: number[] = [];
  private entranceStarted: Set<number> = new Set();
  private entranceSettled: Set<HTMLElement> = new Set();
  private entranceSide: SwipeSide | null = null;
  private entranceSignature: string = '';
  private entranceNodes: readonly HTMLElement[] = [];

  constructor() {
    afterRenderEffect(() => {
      const side = this.side();
      const reduced = this.bxA11yService.isReducedMotion();
      const signature = JSON.stringify(side ? this.actions(side).map((action) => action.id) : []);

      if (!side) this.resetEntrance();
      else {
        if (this.entranceSide !== side || this.entranceSignature !== signature) this.startEntrance(side, signature);

        this.reveal();
        this.advanceEntrance(side, reduced);
      }
    });
    afterRenderEffect(() => {
      const side = this.side();
      const extra = this.stretch();

      this.failed();
      this.fullActionId();

      const reduced = this.bxA11yService.isReducedMotion();
      const distance = side ? this.measured().full - this.measured()[side] : 0;
      const progress = distance > 0 ? Math.max(0, Math.min(1, extra / distance)) : 0;
      const intent = Math.max(0, Math.min(1, (progress - this.armThreshold()) / Math.max(0.01, this.commitThreshold() - this.armThreshold())));

      this.stretchMotion ??= createSpringMotion([0], ([value]) => this.paintStretchIntent(value), MOTION_PRESETS.snappy);
      this.stretchMotion.retarget([intent], reduced);
      this.paintStretchIntent(this.stretchIntent);

      if (side && extra > 0) {
        const lane = this.nativeElement.querySelector<HTMLElement>(`[data-side="${side}"]`);

        this.stopPaging();

        if (lane) lane.scrollLeft = side === 'left' ? lane.scrollWidth - lane.clientWidth : 0;
      }
    });
    afterRenderEffect(() => {
      const reduced = this.bxA11yService.isReducedMotion();

      if (this.side() === null) this.stopPaging();
      else if (reduced) this.pagingMotion?.retarget([this.pagingTarget], true);
    });
    afterRenderEffect((cleanup) => {
      const events = new AbortController();
      const interrupt = (event: Event): void => {
        if (event.target instanceof Node && this.pagingLane?.contains(event.target)) this.stopPaging();
      };

      for (const type of ['pointerdown', 'wheel', 'focusin'] as const) {
        this.nativeElement.addEventListener(type, interrupt, { signal: events.signal, capture: true, passive: true });
      }

      cleanup(() => events.abort());
    });
    inject(DestroyRef).onDestroy(() => {
      this.stopPaging();
      this.resetEntrance();
      this.stretchMotion?.destroy();
    });
    afterRenderEffect((cleanup) => {
      this.left();
      this.right();
      this.previousText();
      this.nextText();
      this.i18n?.version?.();

      const measure = (): void => this.measure();
      const observer = new ResizeObserver(measure);

      observer.observe(this.nativeElement);
      observer.observe(this.probe().nativeElement);
      observer.observe(this.captionProbe().nativeElement);
      observer.observe(this.gapProbe().nativeElement);
      measure();
      cleanup(() => observer.disconnect());
    });
  }

  /**
   * Reuse the existing context-menu overlay with the visible row as its theme and focus origin.
   * @param event - Native pointer or keyboard request.
   */
  public openContext(event: MouseEvent | KeyboardEvent): void {
    this.contextMenu().openFrom(this.origin(), event);
  }

  /** Close the owned context surface before the row or its parent menu is removed. */
  public closeContext(): void {
    this.contextMenu().close();
  }

  /**
   * Report actual completion of the exposed actions' entrance springs, including reduced-motion snapping.
   * @param side - Gesture direction whose visible actions must have finished appearing.
   * @returns True after normal reveal and every visible action's spring settle; there is no time-based unlock delay.
   */
  public isEntranceComplete(side: SwipeSide): boolean {
    if (this.entranceSide !== side || this.reveal() < this.measured()[side] - 0.5) return false;

    const lane = this.nativeElement.querySelector<HTMLElement>(`[data-side="${side}"]`);
    const bounds = lane?.getBoundingClientRect();

    if (!bounds) return false;

    const visible = this.entranceNodes.filter((node) => {
      const column = node.parentElement?.getBoundingClientRect();

      return column && Math.min(column.right, bounds.right) - Math.max(column.left, bounds.left) > 1;
    });

    return visible.length > 0 && visible.every((node) => this.entranceSettled.has(node));
  }

  /**
   * Only offer the physical edge command when it is actually visible in a constrained lane.
   * @param side - Direction of the gesture exposing that lane.
   * @returns True when the extreme command is visible and there is room for additional travel.
   */
  public canFullSwipe(side: SwipeSide): boolean {
    const lane = this.nativeElement.querySelector<HTMLElement>(`[data-side="${side}"]`);
    const actions = lane?.querySelectorAll<HTMLElement>('.bx-swipe-action');
    const edge = side === 'left' ? actions?.[actions.length - 1] : actions?.[0];

    if (!lane || !edge || this.measured().full <= this.measured()[side] + this.measured().column * 0.4) return false;

    const bounds = lane.getBoundingClientRect();
    const action = edge.getBoundingClientRect();

    return action.left >= bounds.left - 1 && action.right <= bounds.right + 1;
  }

  /**
   * Resolve live translated action copy.
   * @param value - Plain text or shared translation key.
   */
  protected text(value: ResolvableText): string {
    this.i18n?.version?.();

    return resolveText(value, this.i18n);
  }

  /**
   * Return a physical group's configured order.
   * @param side - Direction of the gesture revealing that group.
   */
  protected actions(side: SwipeSide): readonly ISwipeAction[] {
    return side === 'left' ? this.left() : this.right();
  }

  /**
   * Read the measured exposed width for one physical lane.
   * @param side - Gesture direction identifying the group.
   */
  protected laneWidth(side: SwipeSide): number {
    return this.measured()[side] + (this.side() === side ? this.stretch() : 0);
  }

  /**
   * Whether this command is the physical outer edge that stretches toward row content.
   * @param side - Physical gesture direction.
   * @param action - Command being rendered.
   */
  protected edge(side: SwipeSide, action: ISwipeAction): boolean {
    const actions = this.actions(side);

    return action.id === (side === 'left' ? actions[actions.length - 1]?.id : actions[0]?.id);
  }

  /**
   * Whether this group's measured content requires paging.
   * @param side - Gesture direction identifying the group.
   */
  protected overflows(side: SwipeSide): boolean {
    return this.actions(side).length > this.capacity();
  }

  /**
   * Return the native button identity associated with an external caption.
   * @param side - Physical action group.
   * @param action - Stable command definition.
   */
  protected actionId(side: SwipeSide, action: ISwipeAction): string {
    return `${this.instanceId}-${side}-${encodeURIComponent(action.id)}`;
  }

  /** Update native overflow navigation after a lane scrolls. */
  protected updateScroll(): void {
    this.scrollRevision.update((revision) => revision + 1);
  }

  /**
   * Check whether additional full-size actions exist in a physical direction.
   * @param side - Lane being inspected.
   * @param direction - Negative for earlier commands, positive for later commands.
   */
  protected canScroll(side: SwipeSide, direction: number): boolean {
    this.scrollRevision();

    const lane = this.nativeElement.querySelector<HTMLElement>(`[data-side="${side}"]`);

    return !!lane && (direction < 0 ? lane.scrollLeft > 1 : lane.scrollLeft + lane.clientWidth < lane.scrollWidth - 1);
  }

  /**
   * Page the existing native action scroller without invoking or hiding a command.
   * @param side - Physical group being paged.
   * @param direction - Negative for previous, positive for next.
   */
  protected scrollActions(side: SwipeSide, direction: number): void {
    const lane = this.nativeElement.querySelector<HTMLElement>(`[data-side="${side}"]`);

    if (!lane) return;

    if (this.pagingLane !== lane) {
      this.stopPaging();
      this.pagingLane = lane;
      this.pagingTarget = lane.scrollLeft;
    }

    const column = this.probe().nativeElement.getBoundingClientRect().width;
    const step = Math.max(1, Math.floor(lane.clientWidth / Math.max(1, column)));
    const origin = lane.getBoundingClientRect().left + lane.clientLeft;
    const padding = parseFloat(lane.ownerDocument.defaultView?.getComputedStyle(lane).scrollPaddingLeft ?? '0') || 0;
    const maximum = lane.scrollWidth - lane.clientWidth;
    const destinations = [
      ...new Set(
        Array.from(lane.querySelectorAll<HTMLElement>('.bx-swipe-action')).map((action) =>
          Math.max(0, Math.min(maximum, action.getBoundingClientRect().left - origin + lane.scrollLeft - padding))
        )
      )
    ];

    if (!destinations.length) return;

    const current = destinations.reduce(
      (nearest, value, index) => (Math.abs(value - this.pagingTarget) < Math.abs(destinations[nearest] - this.pagingTarget) ? index : nearest),
      0
    );

    this.pagingTarget = destinations[Math.max(0, Math.min(destinations.length - 1, current + direction * step))];
    lane.classList.add('is-paging');
    this.pagingMotion ??= createSpringMotion(
      [lane.scrollLeft],
      ([position], [velocity]) => {
        lane.scrollLeft = Math.max(0, Math.min(lane.scrollWidth - lane.clientWidth, position));
        this.updateScroll();

        if (Math.abs(position - this.pagingTarget) < 0.1 && Math.abs(velocity) < 0.1) lane.classList.remove('is-paging');
      },
      MOTION_PRESETS.snappy
    );
    this.pagingMotion.retarget([this.pagingTarget], this.bxA11yService.isReducedMotion());
  }

  /**
   * Read application-owned or handler-owned pending state.
   * @param action - Current command definition.
   */
  protected busy(action: ISwipeAction): boolean {
    return !!action.loading || this.pending().includes(action.id);
  }

  /**
   * Resolve the paired foreground used by context-menu copy.
   * @param action - Current semantic command.
   */
  protected foreground(action: ISwipeAction): string {
    return SWIPE_ACTION_FOREGROUNDS[action.color ?? (action.role === 'destructive' ? 'danger' : 'primary')];
  }

  /**
   * Forward explicit activation and close only this item's action presentation.
   * @param action - Command to invoke through the shared guard.
   * @param source - Swipe capsule or context-menu command.
   * @param event - Native activation; propagation is consumed to preserve the parent menu.
   */
  protected invoke(action: ISwipeAction, source: SwipeActionSource, event: MouseEvent): void {
    event.stopPropagation();

    if (this.disabled() || action.disabled || this.busy(action)) return;

    this.selected.emit({ action, source, event });
  }

  /**
   * Resolve the complete visible and accessible command name, including explicit retry state.
   * @param action - Current command definition.
   */
  protected actionText(action: ISwipeAction): string {
    return this.failed().includes(action.id)
      ? action.retryLabel
        ? this.text(action.retryLabel)
        : `${this.text(this.retryLabel())} ${this.text(action.label)}`
      : this.text(action.label);
  }

  /** Polite pending, retry or armed feedback without changing the command's accessible name while busy. */
  protected statusText(): string {
    const completed = this.completedAction();

    if (completed) return `${this.text(completed.label)}: ${this.text(this.completedLabel())}`;

    const action = this.allActions().find((candidate) => candidate.id === this.fullActionId());

    if (action && this.busy(action)) return `${this.text(action.label)}: ${this.text(this.loadingLabel())}`;

    if (action && this.failed().includes(action.id)) return this.actionText(action);

    return this.armed() ? this.text(this.readyLabel()) : '';
  }

  //#region Helpers

  private paintStretchIntent(value: number): void {
    this.stretchIntent = Math.max(0, Math.min(1, value));

    const side = this.side();

    for (const group of this.groups()) {
      const lane = this.nativeElement.querySelector<HTMLElement>(`[data-side="${group}"]`);
      const nodes = Array.from(lane?.querySelectorAll<HTMLElement>('.bx-swipe-action') ?? []);
      const edge = group === 'left' ? nodes[nodes.length - 1] : nodes[0];
      const extra = group === side ? this.stretch() : 0;
      const distance = this.measured().full - this.measured()[group];
      const fade = extra > 0 && distance > 0 ? Math.max(0, Math.min(1, extra / distance)) : 0;

      for (const node of nodes) {
        const candidate = node === edge;
        const glyph = node.querySelector<HTMLElement>('[data-bx-swipe-glyph]');
        const label = node.querySelector<HTMLElement>('.bx-swipe-action-label');
        const button = node.querySelector<HTMLElement>('button');

        node.style.setProperty('--bx-swipe-stretch-extra', `${candidate ? extra : 0}px`);
        node.style.opacity = candidate ? '1' : String(1 - fade);

        if (glyph) {
          const retry = node.querySelector('.bx-swipe-retry-label');
          const travel = candidate && extra > 0 && button && !retry ? Math.max(0, (button.clientWidth - glyph.clientWidth) / 2 - this.iconSize()) : 0;

          const content = button?.querySelector<HTMLElement>('.bx-btn-content-wrapper');

          if (content) content.style.translate = `${travel * this.stretchIntent * (group === 'left' ? -1 : 1)}px 0`;
        }

        if (label) label.style.opacity = candidate && extra > 0 ? String(1 - this.stretchIntent) : '';
      }
    }
  }

  private startEntrance(side: SwipeSide, signature: string): void {
    this.resetEntrance();

    const nodes = Array.from(this.nativeElement.querySelectorAll<HTMLElement>(`[data-side="${side}"] .bx-swipe-action-visual`));
    const rtl = this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement).direction === 'rtl';

    this.entranceNodes = rtl ? nodes.reverse() : nodes;
    this.entranceSide = side;
    this.entranceSignature = signature;
    this.entranceMotions = this.entranceNodes.map((node, index) => {
      const motion = createSpringMotion(
        [0],
        ([progress], [velocity]) => {
          if ((progress !== 1000 || velocity !== 0) && Math.abs(progress - 1000) < 2 && Math.abs(velocity) < 20) {
            this.entranceMotions[index]?.retarget([1000], true);

            return;
          }

          this.paintEntrance(node, progress / 1000, velocity / 1000, rtl);
        },
        MOTION_PRESETS.elastic
      );

      motion.track([0]);

      return motion;
    });
  }

  private advanceEntrance(side: SwipeSide, reduced: boolean): void {
    const win = this.nativeElement.ownerDocument.defaultView;
    const bounds = this.nativeElement.getBoundingClientRect();
    const edge = side === 'right' ? bounds.left + this.reveal() : bounds.right - this.reveal();

    this.entranceNodes.forEach((node, index) => {
      if (reduced) {
        this.entranceStarted.add(index);
        this.entranceMotions[index].retarget([1000], true);

        return;
      }

      if (this.entranceStarted.has(index) || !win) return;

      const column = node.parentElement?.getBoundingClientRect();
      const visible = column && (side === 'right' ? edge > column.left + column.width * 0.2 : edge < column.right - column.width * 0.2);

      if (!visible) return;

      this.entranceStarted.add(index);
      this.entranceTimers.push(
        win.setTimeout(
          () => this.entranceMotions[index]?.retarget([1000], this.bxA11yService.isReducedMotion()),
          Math.min(SWIPE_ACTION_ENTRANCE.maxStaggerMs, index * SWIPE_ACTION_ENTRANCE.staggerMs)
        )
      );
    });
  }

  private paintEntrance(node: HTMLElement, progress: number, velocity: number, rtl: boolean): void {
    if (progress === 1 && velocity === 0) this.entranceSettled.add(node);
    else this.entranceSettled.delete(node);

    const reduced = this.bxA11yService.isReducedMotion();
    const single = this.entranceNodes.length === 1;
    const options = SWIPE_ACTION_ENTRANCE;
    const unit = Math.max(0, Math.min(1, progress));
    const hidden = single ? options.singleHiddenScale : options.hiddenScale;
    const pop = single ? options.singlePop : options.pop;
    const scale = reduced ? 1 : hidden + (1 - hidden) * Math.max(0, Math.min(1.15, progress)) + pop * Math.sin(Math.PI * unit);
    const strain = reduced ? 0 : (single ? options.singleStrain : options.strain) * Math.max(-1, Math.min(1, velocity * options.velocityWeight));
    const stretch = 1 + strain;
    const travel = reduced ? 0 : (rtl ? 1 : -1) * node.clientWidth * options.travel * (1 - unit);

    paintMotionStyles(node, { opacity: '1', transform: `translate3d(${travel}px, 0, 0) scale(${scale * stretch}, ${scale / stretch})` }, true);

    for (const content of node.querySelectorAll<HTMLElement>('[data-bx-swipe-glyph], .bx-swipe-action-label')) {
      paintMotionStyles(content, { transform: `scale(${1 / stretch}, ${stretch})` });
    }
  }

  private resetEntrance(): void {
    for (const timer of this.entranceTimers) this.nativeElement.ownerDocument.defaultView?.clearTimeout(timer);

    for (const motion of this.entranceMotions) motion.destroy();

    this.entranceTimers = [];
    this.entranceMotions = [];
    this.entranceStarted.clear();
    this.entranceSettled.clear();

    for (const node of this.entranceNodes) {
      paintMotionStyles(node, { opacity: '1', transform: 'none' }, true);

      for (const content of node.querySelectorAll<HTMLElement>('[data-bx-swipe-glyph], .bx-swipe-action-label')) {
        paintMotionStyles(content, { transform: 'none' });
      }
    }

    this.entranceNodes = [];
    this.entranceSide = null;
    this.entranceSignature = '';
  }

  private stopPaging(): void {
    this.pagingMotion?.destroy();
    this.pagingMotion = undefined;
    this.pagingLane?.classList.remove('is-paging');
    this.pagingLane = undefined;
  }

  private measure(): void {
    const probe = this.probe().nativeElement;
    const labelHeight = this.captionProbe().nativeElement.getBoundingClientRect().height;
    const action = this.nativeElement.querySelector<HTMLElement>('.bx-swipe-action');
    const gap = action ? parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(action).rowGap ?? '0') : 0;
    const desiredHeight = probe.getBoundingClientRect().height;
    const compact = this.nativeElement.clientHeight < desiredHeight + labelHeight + gap;
    const height = Math.max(0, Math.min(desiredHeight, this.nativeElement.clientHeight - (compact ? gap : labelHeight + gap)));

    if (this.compact() !== compact) this.compact.set(compact);

    const cssHeight = `${height}px`;

    if (this.nativeElement.style.getPropertyValue('--bx-swipe-capsule-height') !== cssHeight) {
      this.nativeElement.style.setProperty('--bx-swipe-capsule-height', cssHeight);
    }

    this.iconSize.set(Math.max(12, Math.min(20, Math.floor(height * 0.65))));

    const column = probe.getBoundingClientRect().width;
    const contentGap = this.gapProbe().nativeElement.getBoundingClientRect().width;
    const close = this.closeProbe().nativeElement.getBoundingClientRect().width;
    const available = Math.max(0, this.nativeElement.clientWidth - close);
    const capacity = Math.max(1, Math.floor((available - contentGap) / Math.max(1, column)));
    const gutters = this.pagerProbe().nativeElement.getBoundingClientRect().width;
    const maximum = Math.max(0, this.nativeElement.clientWidth - Math.min(close, desiredHeight));
    const width = (count: number): number => {
      if (!count) return 0;

      const total = count * column + contentGap;

      if (total <= available) return total;

      if (maximum < column + gutters + contentGap) return 0;

      return Math.min(maximum, Math.max(available, column + gutters + contentGap));
    };

    const layout = {
      left: width(this.left().length),
      right: width(this.right().length),
      full: this.fullProbe().nativeElement.getBoundingClientRect().width,
      column
    };

    if (capacity !== this.capacity()) this.capacity.set(capacity);

    if (
      layout.left !== this.measured().left ||
      layout.right !== this.measured().right ||
      layout.full !== this.measured().full ||
      column !== this.measuredColumn
    ) {
      this.stopPaging();
      this.measuredColumn = column;
      this.measured.set(layout);
    }

    this.layoutChange.emit(layout);
  }

  //#endregion
}
