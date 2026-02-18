import { Injectable, signal } from '@angular/core';
import { ModalLayout } from '../types/modal.types';

@Injectable({
  providedIn: 'root'
})
export class ModalGlobalSettingsService {
  public readonly layout = signal<ModalLayout>('center');
  public readonly animate = signal<boolean>(true);
  public readonly hasBackdrop = signal<boolean>(true);
  public readonly showCloseButton = signal<boolean>(true);
  public readonly contentWrapper = signal<boolean>(true);
  public readonly overrideFullHeight = signal<boolean>(false);
  
  public readonly disableClose = signal<boolean>(false);
  public readonly disableCloseOnBackdropClick = signal<boolean>(false);
  public readonly disableCloseOnNavigation = signal<boolean>(false);
  public readonly closeGuardOnlyOnCancel = signal<boolean>(true);
  
  public readonly disableConsoleWarnings = signal<boolean>(false);
  public readonly disableConsoleInfo = signal<boolean>(false);

  /**
  * Updates the global modal settings with the provided values. Only the specified settings will be updated, while others will remain unchanged.
   * @param settings An object containing the settings to be updated. Each property is optional, and only those provided will be updated.
   * Example usage:
   * this.modalGlobalSettingsService.update({
   *   animate: false,
   *   hasBackdrop: true,
   *   disableCloseOnBackdropClick: true
   * });
   * In this example, the global settings for 'animate', 'hasBackdrop', and 'disableCloseOnBackdropClick' will be updated, while all other settings will retain their current values.
   */
  public update(settings: Partial<{
    layout: ModalLayout;
    animate: boolean;
    hasBackdrop: boolean;
    showCloseButton: boolean;
    contentWrapper: boolean;
    overrideFullHeight: boolean;
    disableCloseOnBackdropClick: boolean;
    disableCloseOnNavigation: boolean;
    closeGuardOnlyOnCancel: boolean;
    disableConsoleWarnings: boolean;
    disableConsoleInfo: boolean;
  }>) {
    if (settings.animate !== undefined) this.animate.set(settings.animate);
    if (settings.hasBackdrop !== undefined) this.hasBackdrop.set(settings.hasBackdrop);
    if (settings.disableCloseOnBackdropClick !== undefined) this.disableCloseOnBackdropClick.set(settings.disableCloseOnBackdropClick);
  }
}