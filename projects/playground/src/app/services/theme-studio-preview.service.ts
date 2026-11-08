import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

import type { ThemeCssVariable } from '@filip.mazev/blocks/core';
import type { IThemeStudioOwnedStyle } from '@playground/interfaces/itheme-studio-owned-style.interface';
import type { StudioValues } from '@playground/types/theme-studio.types';

import { normalizeStudioValue } from '@playground/shared/helpers/theme-studio-validation.helpers';

@Injectable({ providedIn: 'root' })
export class ThemeStudioPreviewService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly owned: Map<ThemeCssVariable, IThemeStudioOwnedStyle> = new Map();
  private readonly released: Set<ThemeCssVariable> = new Set();

  private readonly changeRevision: WritableSignal<number> = signal(0);

  public readonly revision: Signal<number> = this.changeRevision.asReadonly();

  private observer: MutationObserver | undefined;

  constructor() {
    const win = isPlatformBrowser(this.platformId) ? this.document.defaultView : null;

    if (win) {
      this.observer = new win.MutationObserver(() => {
        if (this.releaseExternalChanges()) this.changeRevision.update((value) => value + 1);
      });
      this.observer.observe(this.document.documentElement, { attributes: true, attributeFilter: ['style'] });
    }
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
    this.apply({});
  }

  public apply(values: StudioValues): void {
    if (!isPlatformBrowser(this.platformId) || !this.document.defaultView) return;

    const style = this.document.documentElement.style;

    let changed = this.releaseExternalChanges();

    for (const [name, entry] of this.owned) {
      if (values[name] !== undefined) continue;

      if (entry.previous) style.setProperty(name, entry.previous, entry.priority);
      else style.removeProperty(name);

      this.owned.delete(name);
      changed = true;
    }

    for (const [key, value] of Object.entries(values)) {
      const normalized = normalizeStudioValue(key, value);
      const name = key as ThemeCssVariable;

      if (!normalized || this.released.has(name)) continue;

      const entry = this.owned.get(name);

      if (entry?.applied === normalized) continue;

      const previous = entry?.previous ?? style.getPropertyValue(name);
      const priority = entry?.priority ?? style.getPropertyPriority(name);

      style.setProperty(name, normalized);
      this.owned.set(name, { previous, priority, applied: style.getPropertyValue(name) });
      changed = true;
    }

    for (const name of this.released) if (values[name] === undefined) this.released.delete(name);

    if (changed) this.changeRevision.update((value) => value + 1);
  }

  //#region Helpers

  private releaseExternalChanges(): boolean {
    const style = this.document.documentElement.style;

    let changed = false;

    for (const [name, entry] of this.owned) {
      if (style.getPropertyValue(name) === entry.applied && !style.getPropertyPriority(name)) continue;

      this.owned.delete(name);
      this.released.add(name);
      changed = true;
    }

    return changed;
  }

  //#endregion
}
