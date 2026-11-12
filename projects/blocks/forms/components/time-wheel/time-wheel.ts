import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, input, model, output, signal } from '@angular/core';

import type { TimeWheelType } from '@forms/types/time-wheel.types';

import { BX_I18N, BxA11yService, ITimeColumnOption, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { createSpringMotion, GestureVelocity, ISpringMotion, MOTION_PRESETS } from '@filip.mazev/blocks/effects/runtime';

import { TIME_WHEEL_IDLE_MS, TIME_WHEEL_MAX_PROJECTED_ROWS, TIME_WHEEL_PROJECTION_SECONDS } from '@forms/constants/time-wheel.constants';

/**
 * One inertial, accessible time wheel column.
 *
 * The wheel tracks real pointer velocity, projects a bounded release target, retargets an in-flight spring instead of restarting it, and never commits a
 * disabled option. Looping columns render a repeated option run so scrolling past either end wraps seamlessly instead of snapping back. Keyboard and
 * screen-reader users operate the same listbox through arrow, page and home/end keys.
 */
@Component({
  selector: 'bx-time-wheel',
  imports: [BxSurfaceDirective],
  templateUrl: './time-wheel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './time-wheel.scss'
})
export class TimeWheel {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly bxA11yService = inject(BxA11yService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly position: WritableSignal<number> = signal(0);

  private readonly dragging: WritableSignal<boolean> = signal(false);

  protected readonly wheelId: string = `bx-time-wheel-${uuidv4()}`;

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));
  protected readonly logicalIndex: Signal<number> = computed(() => {
    const index = this.options().findIndex((option) => option.value === this.value());

    return index < 0 ? 0 : index;
  });
  /** Options rendered on the track; looping columns repeat the run three times so the visible band always has neighbours. */
  protected readonly displayOptions: Signal<readonly ITimeColumnOption[]> = computed(() => {
    const options = this.options();

    if (!this.loop() || options.length < 2) return options;

    return [...options, ...options, ...options];
  });
  /** Index in `displayOptions` where the primary (middle) copy of the options begins. */
  protected readonly loopOffset: Signal<number> = computed(() => (this.loop() && this.options().length > 1 ? this.options().length : 0));
  protected readonly centerOffset: Signal<number> = computed(() => ((this.visibleItems() - 1) / 2) * this.itemHeight());
  protected readonly viewportHeight: Signal<number> = computed(() => this.visibleItems() * this.itemHeight());
  protected readonly trackTransform: Signal<string> = computed(() => `translateY(${this.centerOffset() - this.position() * this.itemHeight()}px)`);
  protected readonly lensTransform: Signal<string> = computed(() => `translateY(${-this.position() * this.itemHeight()}px)`);

  /** Options rendered by the column. Required input. */
  public readonly options: InputSignal<readonly ITimeColumnOption[]> = input.required<readonly ITimeColumnOption[]>();

  /** Selected column value; two-way bound. Defaults to `null`. */
  public readonly value: ModelSignal<string | null> = model<string | null>(null);

  /** Accessible column name; translation keys resolve through BX_I18N. Defaults to `'Time'`. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Time');
  /** Column semantics used for keyboard increments and wheel scrolling. Defaults to `'minute'`. */
  public readonly type: InputSignal<TimeWheelType> = input<TimeWheelType>('minute');
  /** Whether stepping past the first or last option wraps around. Defaults to `true`. */
  public readonly loop: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the column is disabled while remaining visible. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Height of one option in CSS pixels. Defaults to `40`. */
  public readonly itemHeight: InputSignal<number> = input(40);
  /** Number of visible rows, including the selection band. Defaults to `5`. */
  public readonly visibleItems: InputSignal<number> = input(5);

  /** Emits the newly selected option value. */
  public readonly activated: OutputEmitterRef<string> = output<string>();

  private cancelGesture: (() => void) | undefined;
  private motion: ISpringMotion | undefined;
  private wheelTimer: ReturnType<typeof setTimeout> | undefined;
  private wheelVelocity: GestureVelocity | undefined;
  private wheelOptions: readonly ITimeColumnOption[] | undefined;
  private wheelCoordinate: number = 0;
  private motionPosition: number = 0;
  private motionVelocity: number = 0;
  private committedIndex: number | null = null;
  private initialized: boolean = false;

  constructor() {
    effect(() => {
      const index = this.logicalIndex();
      const reducedMotion = this.bxA11yService.isReducedMotion();

      if (this.dragging()) return;

      if (this.committedIndex === index && !reducedMotion) {
        this.committedIndex = null;

        return;
      }

      this.animateTo(this.targetPhysicalIndex(index), !this.initialized);
      this.initialized = true;
    });

    this.destroyRef.onDestroy(() => {
      this.cancelGesture?.();
      clearTimeout(this.wheelTimer);
      this.motion?.destroy();
    });
  }

  /**
   * Move the selection by a number of options, wrapping when looping is enabled.
   *
   * @param direction - Positive values move forward and negative values move backwards.
   */
  public step(direction: number): void {
    if (this.disabled()) return;

    this.cancelWheel();

    const options = this.options();
    const total = options.length;

    if (!total) return;

    let index = this.logicalIndex() + direction;
    let guard = 0;

    if (this.loop()) index = ((index % total) + total) % total;
    else index = Math.max(0, Math.min(total - 1, index));

    while (options[index]?.disabled && guard < total) {
      index = this.loop()
        ? (((index + Math.sign(direction || 1)) % total) + total) % total
        : Math.max(0, Math.min(total - 1, index + Math.sign(direction || 1)));
      guard += 1;
    }

    this.commitIndex(index);
  }

  protected onOptionClick(index: number, event: MouseEvent): void {
    if (this.disabled() || event.detail > 0) return;

    this.commitIndex(this.wrapIndex(index));
  }

  protected isSelectedAt(index: number): boolean {
    return this.wrapIndex(index) === this.logicalIndex();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && (this.cancelGesture || this.wheelTimer)) {
      event.preventDefault();
      event.stopPropagation();
      this.cancelGesture?.();
      this.cancelWheel();

      return;
    }

    if (this.disabled()) return;

    const page = Math.max(1, Math.round(this.visibleItems() / 2));

    if (event.key === 'ArrowUp') this.step(-1);
    else if (event.key === 'ArrowDown') this.step(1);
    else if (event.key === 'PageUp') this.step(-page);
    else if (event.key === 'PageDown') this.step(page);
    else if (event.key === 'Home') this.commitIndex(0);
    else if (event.key === 'End') this.commitIndex(this.options().length - 1);
    else if (event.key === 'Enter' || event.key === ' ') this.activated.emit(this.value() ?? '');
    else return;

    event.preventDefault();
  }

  protected onWheel(event: WheelEvent): void {
    if (this.disabled() || !this.options().length || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    event.preventDefault();
    event.stopPropagation();

    if (!this.wheelTimer) {
      this.cancelGesture?.();
      this.motion?.destroy();
      this.motion = undefined;
      this.wheelOptions = this.options();
      this.wheelCoordinate = 0;
      this.wheelVelocity = new GestureVelocity(0, event.timeStamp);
      this.dragging.set(true);
    }

    const pixels = event.deltaY * (event.deltaMode === 1 ? this.itemHeight() : event.deltaMode === 2 ? this.viewportHeight() : 1);

    this.wheelCoordinate += pixels;
    this.wheelVelocity?.update(this.wheelCoordinate, event.timeStamp);
    this.position.set(this.constrainPosition(this.position() + pixels / this.itemHeight()));
    clearTimeout(this.wheelTimer);
    this.wheelTimer = setTimeout(() => {
      const speed = (this.wheelVelocity?.velocity(performance.now()) ?? 0) / this.itemHeight();
      const stale = this.disabled() || this.options() !== this.wheelOptions;

      this.wheelTimer = undefined;
      this.wheelVelocity = undefined;
      this.wheelOptions = undefined;
      this.dragging.set(false);

      if (stale) {
        this.animateTo(this.targetPhysicalIndex(this.logicalIndex()), false);

        return;
      }

      this.settlePosition(this.position(), speed);
    }, TIME_WHEEL_IDLE_MS);
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!event.isPrimary || event.button !== 0 || this.disabled() || !this.options().length) return;

    const target = event.currentTarget;

    if (!(target instanceof HTMLElement)) return;

    this.cancelGesture?.();
    this.cancelWheel();

    const optionsAtStart = this.options();
    const startY = event.clientY;

    let startPosition = this.position();

    const velocity = new GestureVelocity(event.clientY, event.timeStamp);

    let pointerId = event.pointerId;
    let moved = false;

    this.motion?.destroy();
    this.motion = undefined;
    this.dragging.set(true);
    target.setPointerCapture(pointerId);

    const move = (moveEvent: PointerEvent): void => {
      if (moveEvent.pointerId !== pointerId) return;

      velocity.update(moveEvent.clientY, moveEvent.timeStamp);

      if (Math.abs(moveEvent.clientY - startY) > 4) moved = true;

      moveEvent.preventDefault();

      const physical = startPosition + (startY - moveEvent.clientY) / this.itemHeight();
      const constrained = this.constrainPosition(physical);

      if (this.loop()) startPosition += constrained - physical;

      this.position.set(constrained);
    };

    const cleanup = (): void => {
      pointerId = -1;
      target.removeEventListener('pointermove', move);
      target.removeEventListener('pointerup', finish);
      target.removeEventListener('pointercancel', cancel);
      target.removeEventListener('lostpointercapture', cancel);
      this.cancelGesture = undefined;
      this.dragging.set(false);

      if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
    };

    const finish = (endEvent: PointerEvent): void => {
      if (endEvent.pointerId !== pointerId) return;

      if (this.disabled() || this.options() !== optionsAtStart) {
        cancel();

        return;
      }

      const speed = -velocity.velocity(endEvent.timeStamp) / this.itemHeight();
      const current = this.position();
      const rect = target.getBoundingClientRect();
      const tapped = current + (endEvent.clientY - (rect.top + rect.height / 2)) / this.itemHeight();

      cleanup();

      if (!moved && this.options()[this.wrapIndex(tapped)]?.disabled) {
        this.animateTo(this.targetPhysicalIndex(this.logicalIndex()), false);

        return;
      }

      this.settlePosition(moved ? current : tapped, moved ? speed : 0);
    };

    const cancel = (): void => {
      cleanup();
      this.animateTo(this.targetPhysicalIndex(this.logicalIndex()), false);
    };

    this.cancelGesture = cancel;
    target.addEventListener('pointermove', move, { passive: false });
    target.addEventListener('pointerup', finish);
    target.addEventListener('pointercancel', cancel);
    target.addEventListener('lostpointercapture', cancel);
  }

  //#region Helpers

  private commitIndex(index: number, velocity?: number, physicalTarget?: number): void {
    const option = this.options()[index];

    if (!option || option.disabled) return;

    this.committedIndex = index;
    this.animateTo(physicalTarget ?? this.targetPhysicalIndex(index), false, velocity);
    this.value.set(option.value);
    this.activated.emit(option.value);
  }

  private animateTo(index: number, syncOnly: boolean, velocity?: number): void {
    if (syncOnly || this.bxA11yService.isReducedMotion()) {
      this.motion?.destroy();
      this.motion = undefined;
      this.position.set(this.recenterValue(index));

      return;
    }

    if (!this.motion) {
      this.motion = createSpringMotion(
        [this.position()],
        ([value], [speed]) => {
          this.motionPosition = value;
          this.motionVelocity = speed;
          this.position.set(this.recenterValue(value));
        },
        MOTION_PRESETS.soft
      );
      this.motion.track([this.position()], [velocity ?? 0]);
    }

    if (velocity !== undefined) this.motion.track([this.position()], [velocity]);

    this.motion.retarget([index], false);
  }

  /**
   * Return the physical index in the repeated option run that a logical index should animate to. Looping columns recenter the current position into the
   * middle copy (seamlessly, since the runs are identical) and then target the copy nearest that position, so wrapping the end continues forward instead of
   * animating back to the start.
   */
  private targetPhysicalIndex(index: number): number {
    if (!this.loop()) return index;

    const total = this.options().length;
    const offset = this.loopOffset();
    const current = this.recenterValue(this.position());

    if (this.motionPosition !== current || current !== this.position()) {
      this.motion?.track([current], [this.motionVelocity]);
      this.position.set(current);
    }

    const base = offset + index;

    let target = base;

    for (const candidate of [base - total, base + total]) {
      if (Math.abs(current - candidate) < Math.abs(current - target)) target = candidate;
    }

    return target;
  }

  /** Keep a position inside the middle copy of the repeated run so the visible band always has neighbours in both directions. */
  private recenterValue(value: number): number {
    const total = this.options().length;

    if (!this.loop() || total < 2) return value;

    const offset = this.loopOffset();
    const upper = offset + total;

    if (value >= upper || value < offset) return offset + ((((value - offset) % total) + total) % total);

    return value;
  }

  private nearestEnabledPosition(physical: number, direction: number): number | null {
    const total = this.options().length;
    const origin = Math.round(physical);

    for (let distance = 0; distance < total; distance++) {
      const candidates = distance === 0 ? [origin] : [origin + distance * (direction || 1), origin - distance * (direction || 1)];

      for (const candidate of candidates) {
        const index = this.wrapIndex(candidate);

        if (!this.options()[index]?.disabled) return this.loop() ? candidate : index;
      }
    }

    return null;
  }

  private wrapIndex(physical: number): number {
    const total = this.options().length;

    if (!total) return 0;

    const offset = this.loopOffset();

    if (!this.loop()) return Math.max(0, Math.min(total - 1, Math.round(physical) - offset));

    return (((Math.round(physical) - offset) % total) + total) % total;
  }

  private constrainPosition(value: number): number {
    if (this.loop()) return this.recenterValue(value);

    const max = Math.max(0, this.options().length - 1);
    const boundary = value < 0 ? 0 : max;

    if (value >= 0 && value <= max) return value;

    const excess = value - boundary;

    return boundary + (excess / (1 + Math.abs(excess))) * 0.75;
  }

  private settlePosition(current: number, speed: number): void {
    const travel = Math.min(TIME_WHEEL_MAX_PROJECTED_ROWS, Math.max(0, this.options().length - 1));
    const projected = current + Math.max(-travel, Math.min(travel, speed * TIME_WHEEL_PROJECTION_SECONDS));
    const destination = this.nearestEnabledPosition(projected, Math.sign(speed));

    if (destination !== null) this.commitIndex(this.wrapIndex(destination), speed, destination);
    else this.animateTo(this.targetPhysicalIndex(this.logicalIndex()), false);
  }

  private cancelWheel(): void {
    if (!this.wheelTimer) return;

    clearTimeout(this.wheelTimer);
    this.wheelTimer = undefined;
    this.wheelVelocity = undefined;
    this.wheelOptions = undefined;
    this.dragging.set(false);
    this.animateTo(this.targetPhysicalIndex(this.logicalIndex()), false);
  }

  //#endregion
}
