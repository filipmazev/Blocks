import { Injectable, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceTypeService } from './device-type.service';
import { WindowDimensionsService } from './window-dimension.service';
import { IScrollLockConfig } from '../interfaces/scroll-lock-config.interface';

@Injectable({ providedIn: 'root' })
export class ScrollLockService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly deviceTypeService = inject(DeviceTypeService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly activeLocks = new Map<string, IScrollLockConfig>();
  private readonly boundHandleTouchMove = this.handleTouchMove.bind(this);
  private readonly boundPreventDefault = this.preventDefault.bind(this);

  public readonly _isScrollDisabled = signal(false);
  public readonly isScrollDisabled = this._isScrollDisabled.asReadonly();

  private previousBodyPadding: string | null = null;

  private pendingListenerTimeout: number | null = null;

  public ngOnDestroy(): void {
    if (!this.isBrowser) return;
    this.clearPendingTimeout();
    this.forceCleanupAll();
  }

  public disableScroll(usageId: string, config: IScrollLockConfig): void {
    if (!this.isBrowser) return;

    const wasDisabled = this._isScrollDisabled();

    this.activeLocks.set(usageId, config);
    this._isScrollDisabled.set(true);

    if (wasDisabled) return;

    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;

    if (scrollBarWidth > 0) {
      this.previousBodyPadding = document.body.style.paddingRight;
      const computedPadding = parseInt(getComputedStyle(document.body).paddingRight, 10) || 0;

      document.body.style.setProperty('padding-right', `${computedPadding + scrollBarWidth}px`, 'important');
    }

    document.body.style.setProperty('overflow', 'hidden', 'important');

    if (config.handleTouchInput !== false) {
      document.body.style.setProperty('touch-action', 'none', 'important');
    }

    this.clearPendingTimeout();

    this.pendingListenerTimeout = window.setTimeout(
      () => {
        if (!this._isScrollDisabled()) return;

        if (config.handleTouchInput === true) {
          document.body.addEventListener('touchmove', this.boundHandleTouchMove, { passive: false });
        }

        if (config.handleExtremeOverflow === true) {
          const opt = { passive: false };
          window.addEventListener('wheel', this.boundPreventDefault, opt);
          window.addEventListener('mousewheel', this.boundPreventDefault, opt);
          window.addEventListener('scroll', this.boundPreventDefault, opt);
          window.addEventListener('DOMMouseScroll', this.boundPreventDefault, opt);
        }
      },
      (config.animationDuration ?? 0) + 10
    );
  }

  public enableScroll(usageId: string, extremeOverflow?: boolean): void {
    if (!this.isBrowser) return;

    if (!this.activeLocks.has(usageId)) return;

    this.activeLocks.delete(usageId);

    if (this.activeLocks.size > 0) return;

    this.updateStateAndCleanup(extremeOverflow);
  }

  private getActiveConfig(): IScrollLockConfig | null {
    if (this.activeLocks.size === 0) return null;
    const keys = Array.from(this.activeLocks.keys());
    return this.activeLocks.get(keys[keys.length - 1]) ?? null;
  }

  private updateStateAndCleanup(extremeOverflow?: boolean): void {
    if (!this.isBrowser) return;

    this.clearPendingTimeout();

    this._isScrollDisabled.set(false);

    document.body.style.removeProperty('overflow');

    if (this.previousBodyPadding !== null) {
      if (this.previousBodyPadding) {
        document.body.style.setProperty('padding-right', this.previousBodyPadding);
      } else {
        document.body.style.removeProperty('padding-right');
      }
      this.previousBodyPadding = null;
    }

    document.body.removeEventListener('touchmove', this.boundHandleTouchMove);
    document.body.style.removeProperty('touch-action');

    if (extremeOverflow !== false) {
      window.removeEventListener('wheel', this.boundPreventDefault);
      window.removeEventListener('mousewheel', this.boundPreventDefault);
      window.removeEventListener('scroll', this.boundPreventDefault);
      window.removeEventListener('DOMMouseScroll', this.boundPreventDefault);
    }
  }

  private forceCleanupAll(): void {
    this.activeLocks.clear();
    this.updateStateAndCleanup(true);
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
}
