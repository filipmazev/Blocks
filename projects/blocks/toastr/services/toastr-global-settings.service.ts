import { Injectable, signal } from '@angular/core';
import { ToastPosition } from '../types/toastr.types';
import { ThemedColor } from '@filip.mazev/blocks/core';

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

  public readonly showCloseButton = signal<boolean>(true);
  public readonly closeButtonColor = signal<ThemedColor | undefined>('text-primary');
  
  public readonly showProgressBar = signal<boolean>(true);
  public readonly progressBarColor = signal<ThemedColor | undefined>('text-primary');

  public update(
    settings: Partial<{
      position: ToastPosition;
      animate: boolean;
      wrapperClass: string;
      durationInMs: number;
      swipeToDismiss: boolean;
      maxOpened: number;
      showCloseButton: boolean;
      closeButtonColor: ThemedColor;
      showProgressBar: boolean;
      progressBarColor: ThemedColor;
    }>
  ): void {
    if (settings.position !== undefined) this.position.set(settings.position);
    if (settings.animate !== undefined) this.animate.set(settings.animate);
    if (settings.wrapperClass !== undefined) this.wrapperClass.set(settings.wrapperClass);
    if (settings.durationInMs !== undefined) this.durationInMs.set(settings.durationInMs);
    if (settings.swipeToDismiss !== undefined) this.swipeToDismiss.set(settings.swipeToDismiss);
    if (settings.maxOpened !== undefined) this.maxOpened.set(settings.maxOpened);
   
    if (settings.showCloseButton !== undefined) this.showCloseButton.set(settings.showCloseButton);
    if (settings.closeButtonColor !== undefined) this.closeButtonColor.set(settings.closeButtonColor);
    
    if (settings.showProgressBar !== undefined) this.showProgressBar.set(settings.showProgressBar);
    if (settings.progressBarColor !== undefined) this.progressBarColor.set(settings.progressBarColor);
  }
}
