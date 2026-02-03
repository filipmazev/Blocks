import { Injectable, OnDestroy, inject } from '@angular/core';
import { DeviceTypeService } from './device-type.service';
import { WindowDimensionsService } from './window-dimension.service';
import { IScrollLockConfig } from '../interfaces/scroll-lock-config.interface';
import { SCROLL_LOCK_INSTANCE_IDENTIFIER } from '../constants/scroll-lock.constants';
import { uuidv4 } from '../../public-api';

@Injectable({
  providedIn: 'root'
})
export class ScrollLockService implements OnDestroy {
  private deviceTypeService = inject(DeviceTypeService);
  private windowDimensionsService = inject(WindowDimensionsService);

  private instanceId: string;

  private configurationInstances: Map<string, IScrollLockConfig> = new Map<string, IScrollLockConfig>();
  private windowDimensions = this.windowDimensionsService.dimensions;

  constructor() {
    this.instanceId = SCROLL_LOCK_INSTANCE_IDENTIFIER + uuidv4();
  }

  public ngOnDestroy(): void {
    this.enableScroll();
  }

  public disableScroll(config: IScrollLockConfig): void {
    document.body.style.setProperty('overflow', 'hidden', 'important');

    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.style.setProperty('padding-right', scrollBarWidth + 'px', 'important');

    if (config.handleTouchInput !== false) { document.body.style.setProperty('touch-action', 'none', 'important'); }

    this.configurationInstances.set(this.instanceId, config);

    if (config.mainContainer !== undefined && config.mainContainer.parentElement !== null) {
      let currentNode = config.mainContainer.parentElement as HTMLElement | null;
      while (currentNode !== null) {
        currentNode.style.setProperty('overflow', 'hidden', 'important');

        if (config.handleTouchInput !== false) {
          currentNode.addEventListener('touchmove', (event) => this.handleTouchMove(event), { passive: false });
          currentNode.style.setProperty('touch-action', 'none', 'important');
        }

        currentNode = currentNode.parentElement;
      }
    }

    setTimeout(() => {
      if (config.handleTouchInput !== false) {
        document.body.addEventListener('touchmove', (event) => this.handleTouchMove(event), { passive: false });
      }

      if (config.handleExtremeOverflow !== false) {
        const options = { passive: false };

        window.addEventListener('wheel', this.preventDefault, options);
        window.addEventListener('mousewheel', this.preventDefault, options);
        window.addEventListener('scroll', this.preventDefault, options);
        window.addEventListener('DOMMouseScroll', this.preventDefault, options);
      }
    }, (config.animationDuration ?? 0) + 10);
  }

  public enableScroll(extreme_overflow?: boolean): void {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');

    let currentConfiguration = this.configurationInstances.get(this.instanceId);

    if (currentConfiguration && currentConfiguration.handleTouchInput !== false) {
      document.body.removeEventListener('touchmove', this.handleTouchMove);
      document.body.style.removeProperty('touch-action');
    }

    if (currentConfiguration !== undefined && currentConfiguration.mainContainer !== undefined && currentConfiguration.mainContainer.parentElement !== null) {
      let currentNode = currentConfiguration.mainContainer.parentElement as HTMLElement | null;
      while (currentNode !== null) {
        currentNode.style.removeProperty('overflow');

        if (currentConfiguration.handleTouchInput !== false) {
          currentNode.removeEventListener('touchmove', this.preventDefault);
          currentNode.style.removeProperty('touch-action');
        }

        currentNode = currentNode.parentElement;
      }
    }

    this.configurationInstances.delete(this.instanceId);

    if (extreme_overflow !== false) {
      window.removeEventListener('wheel', this.preventDefault);
      window.removeEventListener('mousewheel', this.preventDefault);
      window.removeEventListener('scroll', this.preventDefault);
      window.removeEventListener('DOMMouseScroll', this.preventDefault);
    }
  }

  private handleTouchMove(event: Event): void {
    const targetNode = event.target as Node;
    const currentConfiguration = this.configurationInstances.get(this.instanceId);

    if (!this.isAllowedToScroll(targetNode) && (currentConfiguration === null || currentConfiguration?.handleTouchInput !== false)) {
      if (currentConfiguration === null || currentConfiguration?.mobileOnlyTouchPrevention !== true ||
        (currentConfiguration?.mobileOnlyTouchPrevention === true && ((!this.deviceTypeService.getDeviceState().isMobile || !this.deviceTypeService.getDeviceState().isTablet)
          && (this.windowDimensions().width < this.windowDimensionsService.breakpoints.sm)))) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  private isAllowedToScroll(targetNode: Node): boolean {
    const currentConfiguration = this.configurationInstances.get(this.instanceId);

    if (!currentConfiguration?.allowTouchInputOn || currentConfiguration.allowTouchInputOn.length === 0) { return true; }

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
