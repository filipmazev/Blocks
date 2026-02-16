import { Injectable, OnDestroy, inject, signal, computed } from '@angular/core';
import { DeviceTypeService } from './device-type.service';
import { WindowDimensionsService } from './window-dimension.service';
import { IScrollLockConfig } from '../interfaces/scroll-lock-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ScrollLockService implements OnDestroy {
  public _isScrollDisabled = signal<boolean>(false);
  public readonly isScrollDisabled = this._isScrollDisabled.asReadonly();

  private deviceTypeService = inject(DeviceTypeService);
  private windowDimensionsService = inject(WindowDimensionsService);

  private activeLocks = new Map<string, IScrollLockConfig>();

  private previousBodyPadding: string | null = null;

  private activeConfig = computed(() => {
    if (this.activeLocks.size === 0) return null;
    const keys = Array.from(this.activeLocks.keys());
    const lastKey = keys[keys.length - 1];
    return this.activeLocks.get(lastKey) ?? null;
  });

  private windowDimensions = this.windowDimensionsService.dimensions;

  private boundHandleTouchMove = this.handleTouchMove.bind(this);
  private boundPreventDefault = this.preventDefault.bind(this);

  public ngOnDestroy(): void {
    this.activeLocks.clear();
    this.updateStateAndCleanup();
  }

  public disableScroll(usageId: string, config: IScrollLockConfig): void {
    const wasAlreadyDisabled = this._isScrollDisabled();

    this.activeLocks.set(usageId, config);
    this._isScrollDisabled.set(true);

    if (wasAlreadyDisabled) {
      return;
    }

    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;

    if (scrollBarWidth > 0) {
      this.previousBodyPadding = document.body.style.paddingRight;

      const computedBodyPadding = parseInt(window.getComputedStyle(document.body).paddingRight, 10) || 0;
      const newPadding = computedBodyPadding + scrollBarWidth;

      document.body.style.setProperty('padding-right', `${newPadding}px`, 'important');
    }

    document.body.style.setProperty('overflow', 'hidden', 'important');

    if (config.handleTouchInput !== false) {
      document.body.style.setProperty('touch-action', 'none', 'important');
    }

    setTimeout(
      () => {
        if (!this._isScrollDisabled()) return;

        if (config.handleTouchInput === true) {
          document.body.addEventListener('touchmove', this.boundHandleTouchMove, { passive: false });
        }

        if (config.handleExtremeOverflow === true) {
          const options = { passive: false };
          window.addEventListener('wheel', this.boundPreventDefault, options);
          window.addEventListener('mousewheel', this.boundPreventDefault, options);
          window.addEventListener('scroll', this.boundPreventDefault, options);
          window.addEventListener('DOMMouseScroll', this.boundPreventDefault, options);
        }
      },
      (config.animationDuration ?? 0) + 10
    );
  }

  public enableScroll(usageId: string, extreme_overflow?: boolean): void {
    if (!this.activeLocks.has(usageId)) {
      return;
    }

    this.activeLocks.delete(usageId);

    if (this.activeLocks.size > 0) {
      return;
    }

    this.updateStateAndCleanup(extreme_overflow);
  }

  private updateStateAndCleanup(extreme_overflow?: boolean): void {
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

    if (extreme_overflow !== false) {
      window.removeEventListener('wheel', this.boundPreventDefault);
      window.removeEventListener('mousewheel', this.boundPreventDefault);
      window.removeEventListener('scroll', this.boundPreventDefault);
      window.removeEventListener('DOMMouseScroll', this.boundPreventDefault);
    }
  }

  private handleTouchMove(event: Event): void {
    const targetNode = event.target as Node;
    const currentConfiguration = this.activeConfig();

    if (!this.isAllowedToScroll(targetNode) && (currentConfiguration === null || currentConfiguration?.handleTouchInput !== false)) {
      if (
        currentConfiguration === null ||
        currentConfiguration?.mobileOnlyTouchPrevention !== true ||
        (currentConfiguration?.mobileOnlyTouchPrevention === true &&
          (!this.deviceTypeService.getDeviceState().isMobile || !this.deviceTypeService.getDeviceState().isTablet) &&
          this.windowDimensions().width < this.windowDimensionsService.breakpoints.sm)
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  private isAllowedToScroll(targetNode: Node): boolean {
    const currentConfiguration = this.activeConfig();

    if (!currentConfiguration?.allowTouchInputOn || currentConfiguration.allowTouchInputOn.length === 0) {
      return true;
    }

    if (currentConfiguration.allowTouchInputOn.length === undefined) {
      return (currentConfiguration.allowTouchInputOn as unknown as Element).contains(targetNode);
    }

    for (const element of currentConfiguration.allowTouchInputOn) {
      if (element.contains(targetNode)) {
        return true;
      }
    }

    return false;
  }

  private preventDefault(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
