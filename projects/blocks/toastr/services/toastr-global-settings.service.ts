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
  /** Screen placement for notifications created without an instance override. Initially `'top-right'`. */
  public readonly position: WritableSignal<ToastPosition> = signal<ToastPosition>('top-right');

  /** Default motion preference; shared reduced-motion settings take precedence. */
  public readonly animate: WritableSignal<boolean> = signal<boolean>(true);

  /** Optional CSS class override applied to newly created toast wrappers. */
  public readonly wrapperClass: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  /** Default toast lifetime in milliseconds; zero keeps a notification open until explicitly dismissed. */
  public readonly durationInMs: WritableSignal<number> = signal<number>(5000);

  /** Whether toast wrappers accept a vertical dismissal swipe. Initially `true`. */
  public readonly swipeToDismiss: WritableSignal<boolean> = signal<boolean>(true);

  /** Maximum number of simultaneously displayed toast notifications across positions; excess requests remain queued. Initially `4`. */
  public readonly maxOpened: WritableSignal<number> = signal<number>(4);

  /** Default refraction policy for toast surfaces, subject to application and accessibility limits. */
  public readonly glassiness: WritableSignal<GlassinessMode> = signal<GlassinessMode>('auto');
  /** Default toast material detail, constrained by shared rendering and device policies. */
  public readonly glassQuality: WritableSignal<GlassQuality> = signal<GlassQuality>('enhanced');

  /** Whether the overlay includes its built-in close action. Initially `true`. */
  public readonly showCloseButton: WritableSignal<boolean> = signal<boolean>(true);

  /** Semantic color used by the default toast close action. */
  public readonly closeButtonColor: WritableSignal<ThemedColor | undefined> = signal<ThemedColor | undefined>('text-primary');

  /** Whether toast wrappers display remaining lifetime as a progress bar. Initially `true`. */
  public readonly showProgressBar: WritableSignal<boolean> = signal<boolean>(true);

  /** Semantic color of the toast lifetime progress indicator. Initially `'text-primary'`. */
  public readonly progressBarColor: WritableSignal<ThemedColor | undefined> = signal<ThemedColor | undefined>('text-primary');

  /**
   * Merge partial toast defaults without mutating consumer configuration or discarding unrelated settings.
   *
   * @param settings - Toast default overrides to merge; omitted settings retain their existing values.
   */
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
