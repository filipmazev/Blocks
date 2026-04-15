import { Injectable, signal } from '@angular/core';
import { ToastPosition } from '../types/toastr.types';

@Injectable({
  providedIn: 'root'
})
export class ToastrGlobalSettingsService {
  public readonly position = signal<ToastPosition>('top-right');
  public readonly animate = signal<boolean>(true);
  public readonly wrapperClass = signal<string | undefined>(undefined);
  public readonly durationInMs = signal<number>(5000);
  public readonly swipeToDismiss = signal<boolean>(true);
  public readonly maxOpened = signal<number>(4);

  /**
   * Updates the global toast settings with the provided values.
   * @param settings An object containing the settings to be updated.
   */
  public update(
    settings: Partial<{
      position: ToastPosition;
      animate: boolean;
      wrapperClass: string;
      durationInMs: number;
      swipeToDismiss: boolean;
      maxOpened: number;
    }>
  ): void {
    if (settings.position !== undefined) this.position.set(settings.position);
    if (settings.animate !== undefined) this.animate.set(settings.animate);
    if (settings.wrapperClass !== undefined) this.wrapperClass.set(settings.wrapperClass);
    if (settings.durationInMs !== undefined) this.durationInMs.set(settings.durationInMs);
    if (settings.swipeToDismiss !== undefined) this.swipeToDismiss.set(settings.swipeToDismiss);
    if (settings.maxOpened !== undefined) this.maxOpened.set(settings.maxOpened);
  }
}
