import type { WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

import { DEMO_LAYOUT_DEFAULTS } from '@playground/shared/constants/demo-layout.constants';

/** Shared component-workbench dimensions, restored synchronously from local storage. */
@Injectable({ providedIn: 'root' })
export class DemoLayoutService {
  private readonly document = inject(DOCUMENT);

  private readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  /** Preferred properties-panel width in pixels; viewport constraints remain the panel's responsibility. */
  public readonly panelWidth: WritableSignal<number | string> = signal<number | string>(
    this.readSize('blocks-demo-panel-width', DEMO_LAYOUT_DEFAULTS.panelWidth, 320, 720)
  );
  /** Preferred code/events height in pixels; shorter viewports constrain its rendered size without replacing this preference. */
  public readonly resultsHeight: WritableSignal<number> = signal(this.readSize('blocks-demo-results-height', DEMO_LAYOUT_DEFAULTS.resultsHeight, 160));

  constructor() {
    effect(() => this.storeSize('blocks-demo-panel-width', Number(this.panelWidth())));
    effect(() => this.storeSize('blocks-demo-results-height', this.resultsHeight()));
  }

  //#region Helpers

  private readSize(key: string, fallback: number, minimum: number, maximum: number = Infinity): number {
    if (!this.isBrowser) return fallback;

    try {
      const stored = this.document.defaultView?.localStorage.getItem(key);
      const value = stored ? Number(stored) : NaN;

      return Number.isFinite(value) && value >= minimum && value <= maximum ? value : fallback;
    } catch {
      return fallback;
    }
  }

  private storeSize(key: string, value: number): void {
    if (!this.isBrowser || !Number.isFinite(value)) return;

    try {
      this.document.defaultView?.localStorage.setItem(key, String(value));
    } catch {
      // Keep the shared in-memory preference when browser storage is unavailable.
    }
  }

  //#endregion
}
