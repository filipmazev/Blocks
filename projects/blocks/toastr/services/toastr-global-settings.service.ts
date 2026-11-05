import type { WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import type { GlassinessMode, GlassQuality } from '@filip.mazev/blocks/effects/runtime';
import type { IToastrGlobalSettings } from '@toastr/interfaces/itoastr-global-settings.interface';

import { ThemedColor } from '@filip.mazev/blocks/core';

import { ToastPosition } from '@toastr/types/toastr.types';

@Injectable({
  providedIn: 'root'
})
export class ToastrGlobalSettingsService {
  public readonly position: WritableSignal<ToastPosition> = signal<ToastPosition>('top-right');

  public readonly animate: WritableSignal<boolean> = signal<boolean>(true);

  public readonly wrapperClass: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  public readonly durationInMs: WritableSignal<number> = signal<number>(5000);

  public readonly swipeToDismiss: WritableSignal<boolean> = signal<boolean>(true);

  public readonly maxOpened: WritableSignal<number> = signal<number>(4);

  public readonly glassiness: WritableSignal<GlassinessMode> = signal<GlassinessMode>('auto');
  public readonly glassQuality: WritableSignal<GlassQuality> = signal<GlassQuality>('enhanced');

  public readonly showCloseButton: WritableSignal<boolean> = signal<boolean>(true);

  public readonly closeButtonColor: WritableSignal<ThemedColor | undefined> = signal<ThemedColor | undefined>('text-primary');

  public readonly showProgressBar: WritableSignal<boolean> = signal<boolean>(true);

  public readonly progressBarColor: WritableSignal<ThemedColor | undefined> = signal<ThemedColor | undefined>('text-primary');

  public update(settings: Partial<IToastrGlobalSettings>): void {
    if (settings.position !== undefined) this.position.set(settings.position);

    if (settings.animate !== undefined) this.animate.set(settings.animate);

    if (settings.wrapperClass !== undefined) this.wrapperClass.set(settings.wrapperClass);

    if (settings.durationInMs !== undefined) this.durationInMs.set(settings.durationInMs);

    if (settings.swipeToDismiss !== undefined) this.swipeToDismiss.set(settings.swipeToDismiss);

    if (settings.maxOpened !== undefined) this.maxOpened.set(settings.maxOpened);

    if (settings.glassiness !== undefined) this.glassiness.set(settings.glassiness);

    if (settings.glassQuality !== undefined) this.glassQuality.set(settings.glassQuality);

    if (settings.showCloseButton !== undefined) this.showCloseButton.set(settings.showCloseButton);

    if (settings.closeButtonColor !== undefined) this.closeButtonColor.set(settings.closeButtonColor);

    if (settings.showProgressBar !== undefined) this.showProgressBar.set(settings.showProgressBar);

    if (settings.progressBarColor !== undefined) this.progressBarColor.set(settings.progressBarColor);
  }
}
