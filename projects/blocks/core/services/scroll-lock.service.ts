import type { Signal, WritableSignal } from '@angular/core';

import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

import type { IScrollLockOffset } from '@core/interfaces/iscroll-lock-offset.interface';
import type { IScrollLockStyleSnapshot } from '@core/interfaces/iscroll-lock-style-snapshot.interface';

import { IScrollLockConfig } from '@core/interfaces/iscroll-lock-config.interface';

import { DeviceTypeService } from './device-type.service';
import { WindowDimensionsService } from './window-dimension.service';

/**
 * Coordinate page scroll locks across independent overlay owners.
 *
 * Scrolling is blocked by intercepting scroll input and by clamping the page's scroll offset, so the page keeps its native scrollbar, width, and inline
 * styles. WebKit on iOS ignores overflow-based locking, so that platform additionally receives the fixed-body presentation while a lock is held.
 */
@Injectable({ providedIn: 'root' })
export class ScrollLockService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly platform = inject(Platform);
  private readonly deviceTypeService = inject(DeviceTypeService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  private readonly activeLocks: Map<string, IScrollLockConfig> = new Map<string, IScrollLockConfig>();
  private readonly scrollContainers: Set<Element> = new Set<Element>();
  private readonly lockedOffsets: Map<Element, IScrollLockOffset> = new Map<Element, IScrollLockOffset>();
  private readonly boundHandleTouchMove: (event: TouchEvent) => void = (event: TouchEvent) => this.handleTouchMove(event);
  private readonly boundHandleWheel: (event: WheelEvent) => void = (event: WheelEvent) => this.handleWheel(event);
  private readonly boundHandleScroll: (event: Event) => void = (event: Event) => this.handleScroll(event);

  /** Mutable backing signal indicating whether at least one owner holds a scroll lock; use isScrollDisabled for observation. Initially `false`. */
  public readonly _isScrollDisabled: WritableSignal<boolean> = signal(false);

  /** Whether at least one overlay owner currently holds a page scroll lock. */
  public readonly isScrollDisabled: Signal<boolean> = this._isScrollDisabled.asReadonly();

  private bodyStyles: ReadonlyMap<string, IScrollLockStyleSnapshot> | null = null;
  private webkitOffset: IScrollLockOffset | null = null;
  private listenersAttached: boolean = false;

  /** Release all remaining service-owned locks, listeners, and WebKit body styles during teardown. */
  public ngOnDestroy(): void {
    if (!this.isBrowser) return;

    this.activeLocks.clear();
    this.scrollContainers.clear();
    this.releaseLock();
  }

  /**
   * Acquire or update one owner's lock. Repeated acquisition with the same ID never adds a second lock.
   *
   * @param usageId - Stable unique ID of the owner acquiring or updating its lock.
   * @param config - Scroll input, touch, and overflow requirements for this owner; repeated IDs update one existing lock.
   */
  public disableScroll(usageId: string, config: IScrollLockConfig): void {
    if (!this.isBrowser) return;

    const isFirstLock = this.activeLocks.size === 0;

    this.activeLocks.set(usageId, { ...config, allowTouchInputOn: config.allowTouchInputOn?.slice() });
    this._isScrollDisabled.set(true);

    if (isFirstLock) this.captureLock();
  }

  /**
   * Release only this owner's lock. The legacy overflow argument is accepted; final cleanup always removes owned listeners.
   *
   * @param usageId - Owner ID whose lock should be released; other owners retain their locks.
   * @param _extremeOverflow - Legacy compatibility flag; final cleanup always removes owned listeners. Optional.
   */
  public enableScroll(usageId: string, _extremeOverflow?: boolean): void {
    if (!this.isBrowser || !this.activeLocks.delete(usageId)) return;

    if (this.activeLocks.size > 0) return;

    this.releaseLock();
  }

  /**
   * Register an application-owned scroll container that must freeze while any owner holds a lock.
   *
   * Use this for app-shell layouts whose page scrolls inside a content element instead of the document. The container keeps its native scrollbar; only
   * scroll input and its scroll offset are frozen while a lock is held.
   *
   * @param element - Scroll container to freeze and restore with the shared lock.
   * @returns Callback that unregisters the container.
   */
  public registerScrollContainer(element: HTMLElement): () => void {
    if (!this.isBrowser) return () => undefined;

    this.scrollContainers.add(element);

    if (this.activeLocks.size > 0) this.lockedOffsets.set(element, this.currentOffset(element));

    return () => {
      this.scrollContainers.delete(element);
      this.lockedOffsets.delete(element);
    };
  }

  //#region Helpers

  private captureLock(): void {
    this.lockedOffsets.clear();

    // The fixed body owns document scrolling on WebKit, so only app-shell containers need clamping there.
    if (!this.applyWebkitLock()) {
      for (const element of [this.document.scrollingElement, this.document.body]) {
        if (element && !this.lockedOffsets.has(element)) this.lockedOffsets.set(element, this.currentOffset(element));
      }
    }

    for (const container of this.scrollContainers) this.lockedOffsets.set(container, this.currentOffset(container));

    this.attachListeners();
  }

  private releaseLock(): void {
    this.detachListeners();
    this.releaseWebkitLock();
    this.lockedOffsets.clear();
    this._isScrollDisabled.set(false);
  }

  private attachListeners(): void {
    if (this.listenersAttached) return;

    const win = this.document.defaultView;

    if (!win) return;

    this.document.addEventListener('touchmove', this.boundHandleTouchMove, { passive: false });
    win.addEventListener('wheel', this.boundHandleWheel, { passive: false });
    win.addEventListener('scroll', this.boundHandleScroll, { capture: true, passive: true });
    this.listenersAttached = true;
  }

  private detachListeners(): void {
    if (!this.listenersAttached) return;

    this.document.removeEventListener('touchmove', this.boundHandleTouchMove);
    this.document.defaultView?.removeEventListener('wheel', this.boundHandleWheel);
    this.document.defaultView?.removeEventListener('scroll', this.boundHandleScroll, true);
    this.listenersAttached = false;
  }

  private handleWheel(event: WheelEvent): void {
    const config = this.getActiveConfig() ?? this.getLatestConfig();

    if (!config || event.defaultPrevented || !this.isScrollInputBlocked(event.target, config)) return;

    event.preventDefault();
  }

  private handleTouchMove(event: TouchEvent): void {
    const config = this.getActiveConfig();

    if (!config || event.defaultPrevented || !this.isScrollInputBlocked(event.target, config)) return;

    if (config.mobileOnlyTouchPrevention === true && !this.isNarrowTouchViewport()) return;

    event.preventDefault();
    event.stopPropagation();
  }

  private handleScroll(event: Event): void {
    if (!this.lockedOffsets.size) return;

    const target = event.target;

    if (target === this.document) {
      for (const element of [this.document.scrollingElement, this.document.body]) {
        if (element) this.restoreOffset(element);
      }

      return;
    }

    if (target instanceof Element) this.restoreOffset(target);
  }

  private isScrollInputBlocked(target: EventTarget | null, config: IScrollLockConfig): boolean {
    if (!(target instanceof Node)) return true;

    if (config.allowTouchInputOn?.some((element) => element.contains(target))) return false;

    if (config.handleExtremeOverflow === true) return true;

    // Nested scrollers such as an open select panel, a dialog body, or a drawer list stay usable.
    return !this.hasScrollableAncestor(target);
  }

  private hasScrollableAncestor(target: Node): boolean {
    const win = this.document.defaultView;

    let element: Element | null = target instanceof Element ? target : target.parentElement;

    while (element && element !== this.document.body && element !== this.document.documentElement) {
      if (this.lockedOffsets.has(element)) return false;

      const style = win?.getComputedStyle(element);

      if (style && this.isScrollableOverflow(style) && this.hasOverflow(element)) return true;

      element = element.parentElement;
    }

    return false;
  }

  private isScrollableOverflow(style: CSSStyleDeclaration): boolean {
    return [style.overflowX, style.overflowY].some((value) => value === 'auto' || value === 'scroll' || value === 'overlay');
  }

  private hasOverflow(element: Element): boolean {
    return element.scrollHeight > element.clientHeight + 1 || element.scrollWidth > element.clientWidth + 1;
  }

  private restoreOffset(element: Element): void {
    const offset = this.lockedOffsets.get(element);

    if (!offset || (element.scrollTop === offset.top && element.scrollLeft === offset.left)) return;

    element.scrollTop = offset.top;
    element.scrollLeft = offset.left;
  }

  private currentOffset(element: Element): IScrollLockOffset {
    return { top: element.scrollTop, left: element.scrollLeft };
  }

  private isNarrowTouchViewport(): boolean {
    const state = this.deviceTypeService.getDeviceState();

    return (!state.isMobile || !state.isTablet) && this.windowDimensionsService.dimensions().width < this.windowDimensionsService.breakpoints.sm;
  }

  private getActiveConfig(): IScrollLockConfig | null {
    return (
      Array.from(this.activeLocks.values())
        .reverse()
        .find((config) => config.handleTouchInput !== false) ?? null
    );
  }

  private getLatestConfig(): IScrollLockConfig | null {
    return Array.from(this.activeLocks.values()).at(-1) ?? null;
  }

  private applyWebkitLock(): boolean {
    if (!this.platform.IOS) return false;

    if (this.webkitOffset) return true;

    const win = this.document.defaultView;
    const body = this.document.body;

    if (!win || !body) return false;

    const properties = ['position', 'top', 'left', 'right', 'width', 'overflow'];
    const style = body.style;
    const offset: IScrollLockOffset = { top: win.scrollY ?? 0, left: win.scrollX ?? 0 };

    this.webkitOffset = offset;
    this.bodyStyles = new Map(
      properties.map((property) => [property, { value: style.getPropertyValue(property), priority: style.getPropertyPriority(property) }])
    );

    style.setProperty('position', 'fixed', 'important');
    style.setProperty('top', `${-offset.top}px`, 'important');
    style.setProperty('left', '0', 'important');
    style.setProperty('right', '0', 'important');
    style.setProperty('width', '100%', 'important');
    style.setProperty('overflow', 'hidden', 'important');

    return true;
  }

  private releaseWebkitLock(): void {
    const offset = this.webkitOffset;

    if (!offset) return;

    const style = this.document.body?.style;

    for (const [property, snapshot] of this.bodyStyles ?? []) {
      if (!style) break;

      if (snapshot.value) style.setProperty(property, snapshot.value, snapshot.priority);
      else style.removeProperty(property);
    }

    this.bodyStyles = null;
    this.webkitOffset = null;
    this.document.defaultView?.scrollTo(offset.left, offset.top);
  }

  //#endregion
}
