import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

import type { IScrollLockStyleSnapshot } from '@core/interfaces/iscroll-lock-style-snapshot.interface';

import { IScrollLockConfig } from '@core/interfaces/iscroll-lock-config.interface';

import { DeviceTypeService } from './device-type.service';
import { WindowDimensionsService } from './window-dimension.service';

@Injectable({ providedIn: 'root' })
export class ScrollLockService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly deviceTypeService = inject(DeviceTypeService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  private readonly activeLocks: Map<string, IScrollLockConfig> = new Map<string, IScrollLockConfig>();
  private readonly boundHandleTouchMove: (event: Event) => void = this.handleTouchMove.bind(this);
  private readonly boundPreventDefault: (event: Event) => void = this.preventDefault.bind(this);

  public readonly _isScrollDisabled: WritableSignal<boolean> = signal(false);

  public readonly isScrollDisabled: Signal<boolean> = this._isScrollDisabled.asReadonly();

  private originalStyles: ReadonlyMap<string, IScrollLockStyleSnapshot> | null = null;
  private pendingListenerTimeout: number | null = null;

  public ngOnDestroy(): void {
    if (!this.isBrowser) return;

    this.clearPendingTimeout();
    this.forceCleanupAll();
  }

  /** Acquire or update one owner's lock. Repeated acquisition with the same ID never adds a second lock. */
  public disableScroll(usageId: string, config: IScrollLockConfig): void {
    if (!this.isBrowser) return;

    if (this.activeLocks.size === 0) this.captureBodyStyles();

    this.activeLocks.set(usageId, { ...config, allowTouchInputOn: config.allowTouchInputOn?.slice() });
    this._isScrollDisabled.set(true);
    this.syncActiveLocks();
  }

  /** Release only this owner's lock. The legacy overflow argument is accepted; final cleanup always removes owned listeners. */
  public enableScroll(usageId: string, _extremeOverflow?: boolean): void {
    if (!this.isBrowser || !this.activeLocks.delete(usageId)) return;

    if (this.activeLocks.size > 0) {
      this.syncActiveLocks();

      return;
    }

    this.updateStateAndCleanup();
  }

  //#region Helpers

  private getActiveConfig(): IScrollLockConfig | null {
    return Array.from(this.activeLocks.values()).findLast((config) => config.handleTouchInput !== false) ?? null;
  }

  private captureBodyStyles(): void {
    const style = this.document.body.style;
    const properties = ['overflow', 'padding-right', 'touch-action'];

    this.originalStyles = new Map(
      properties.map((property) => [property, { value: style.getPropertyValue(property), priority: style.getPropertyPriority(property) }])
    );

    const view = this.document.defaultView;
    const scrollBarWidth = (view?.innerWidth ?? this.document.documentElement.clientWidth) - this.document.documentElement.clientWidth;

    if (scrollBarWidth > 0) {
      const computedPadding = parseFloat(view?.getComputedStyle(this.document.body).paddingRight ?? '0') || 0;

      style.setProperty('padding-right', `${computedPadding + scrollBarWidth}px`, 'important');
    }
  }

  private syncActiveLocks(): void {
    const configs = Array.from(this.activeLocks.values());
    const touch = configs.some((config) => config.handleTouchInput === true);
    const extreme = configs.some((config) => config.handleExtremeOverflow === true);

    this.document.body.style.setProperty('overflow', 'hidden', 'important');

    if (configs.some((config) => config.handleTouchInput !== false)) this.document.body.style.setProperty('touch-action', 'none', 'important');
    else this.restoreBodyStyle('touch-action');

    this.clearPendingTimeout();
    this.removeListeners();

    if (!touch && !extreme) return;

    const duration = Math.max(0, ...configs.map((config) => config.animationDuration ?? 0));

    this.pendingListenerTimeout = window.setTimeout(() => {
      this.pendingListenerTimeout = null;

      if (this.activeLocks.size === 0) return;

      if (touch) this.document.body.addEventListener('touchmove', this.boundHandleTouchMove, { passive: false });

      if (extreme) {
        for (const name of ['wheel', 'mousewheel', 'scroll', 'DOMMouseScroll']) {
          this.document.defaultView?.addEventListener(name, this.boundPreventDefault, { passive: false });
        }
      }
    }, duration + 10);
  }

  private updateStateAndCleanup(): void {
    if (!this.isBrowser) return;

    this.clearPendingTimeout();
    this.removeListeners();

    for (const property of this.originalStyles?.keys() ?? []) this.restoreBodyStyle(property);

    this.originalStyles = null;
    this._isScrollDisabled.set(false);
  }

  private restoreBodyStyle(property: string): void {
    const original = this.originalStyles?.get(property);

    if (original?.value) this.document.body.style.setProperty(property, original.value, original.priority);
    else this.document.body.style.removeProperty(property);
  }

  private removeListeners(): void {
    this.document.body.removeEventListener('touchmove', this.boundHandleTouchMove);

    for (const name of ['wheel', 'mousewheel', 'scroll', 'DOMMouseScroll']) {
      this.document.defaultView?.removeEventListener(name, this.boundPreventDefault);
    }
  }

  private forceCleanupAll(): void {
    this.activeLocks.clear();
    this.updateStateAndCleanup();
  }

  private clearPendingTimeout(): void {
    if (this.pendingListenerTimeout !== null) {
      clearTimeout(this.pendingListenerTimeout);
      this.pendingListenerTimeout = null;
    }
  }

  private handleTouchMove(event: Event): void {
    const targetNode = event.target as Node;
    const cfg = this.getActiveConfig();

    if (!this.isAllowedToScroll(targetNode) && (cfg === null || cfg.handleTouchInput !== false)) {
      if (
        cfg === null ||
        cfg.mobileOnlyTouchPrevention !== true ||
        (cfg.mobileOnlyTouchPrevention === true &&
          (!this.deviceTypeService.getDeviceState().isMobile || !this.deviceTypeService.getDeviceState().isTablet) &&
          this.windowDimensionsService.dimensions().width < this.windowDimensionsService.breakpoints.sm)
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  private isAllowedToScroll(targetNode: Node): boolean {
    const cfg = this.getActiveConfig();
    const allow = cfg?.allowTouchInputOn;

    if (!allow) return true;

    if (Array.isArray(allow)) {
      if (allow.length === 0) return true;

      return allow.some((el) => el.contains(targetNode));
    }

    return false;
  }

  private preventDefault(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  //#endregion
}
