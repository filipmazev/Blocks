import type { WritableSignal } from '@angular/core';

import { Injectable, signal } from '@angular/core';

import { ModalLayout } from '@modal/types/modal.types';

@Injectable({
  providedIn: 'root'
})
export class ModalGlobalSettingsService {
  /** Modal presentation layout used when an instance does not provide an override. Initially `'center'`. */
  public readonly layout: WritableSignal<ModalLayout> = signal<ModalLayout>('center');

  /** Default motion preference; shared reduced-motion settings take precedence. */
  public readonly animate: WritableSignal<boolean> = signal<boolean>(true);
  /** Whether modal instances receive a dismissal backdrop by default. */
  public readonly hasBackdrop: WritableSignal<boolean> = signal<boolean>(true);
  /** Whether the overlay includes its built-in close action. Initially `true`. */
  public readonly showCloseButton: WritableSignal<boolean> = signal<boolean>(true);
  /** Whether modal content receives the standard styled and padded wrapper. Initially `true`. */
  public readonly contentWrapper: WritableSignal<boolean> = signal<boolean>(true);
  /** Whether modal content may override the usual full-height constraint. Initially `false`. */
  public readonly overrideFullHeight: WritableSignal<boolean> = signal<boolean>(false);
  /** Prevent ordinary modal dismissal, including close actions and backdrop interaction. Initially `false`. */
  public readonly disableClose: WritableSignal<boolean> = signal<boolean>(false);
  /** Prevent dismissal when the backdrop is activated. Initially `false`. */
  public readonly disableCloseOnBackdropClick: WritableSignal<boolean> = signal<boolean>(false);
  /** Keep a modal open during route navigation instead of closing it automatically. Initially `false`. */
  public readonly disableCloseOnNavigation: WritableSignal<boolean> = signal<boolean>(false);
  /** Limit close-guard checks to cancellation instead of confirmed completion. Initially `true`. */
  public readonly closeGuardOnlyOnCancel: WritableSignal<boolean> = signal<boolean>(true);

  /**
   * Minimum material opacity by nested depth, default [0.9, 1]. Index zero is the first nested dialog; the last entry repeats for deeper dialogs.
   * Empty disables depth adjustment. Values clamp to 0.52–1; nonfinite entries use 0.9 for the first nested dialog and 1 afterward.
   * Root dialogs retain their normal material. More opaque application/accessibility settings take precedence; update using a new readonly array.
   */
  public readonly nestedOpacityFloors: WritableSignal<readonly number[]> = signal<readonly number[]>([0.9, 1]);

  /**
   * Updates the global modal settings with the provided values. Only the specified settings will be updated, while others will remain unchanged.
   *
   * @param settings - An object containing the settings to be updated. Each property is optional, and only those provided will be updated.
   * Example usage:
   * this.modalGlobalSettingsService.update({
   * animate: false,
   * hasBackdrop: true,
   * disableCloseOnBackdropClick: true
   * });
   * In this example, the global settings for 'animate', 'hasBackdrop', and 'disableCloseOnBackdropClick' will be updated, while all other settings will
   * retain their current values.
   */
  public update(
    settings: Partial<{
      layout: ModalLayout;
      animate: boolean;
      hasBackdrop: boolean;
      showCloseButton: boolean;
      contentWrapper: boolean;
      overrideFullHeight: boolean;
      disableCloseOnBackdropClick: boolean;
      disableCloseOnNavigation: boolean;
      closeGuardOnlyOnCancel: boolean;
    }>
  ) {
    if (settings.animate !== undefined) this.animate.set(settings.animate);

    if (settings.hasBackdrop !== undefined) this.hasBackdrop.set(settings.hasBackdrop);

    if (settings.disableCloseOnBackdropClick !== undefined) this.disableCloseOnBackdropClick.set(settings.disableCloseOnBackdropClick);
  }
}
