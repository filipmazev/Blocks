import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { Icon } from '@filip.mazev/blocks/icons';

import { Button } from '@forms/components/button/button';
import { ButtonIconDirective } from '@forms/directives/button-icon/button-icon.directive';

@Component({
  selector: 'bx-button-test-host',
  imports: [Button, ButtonIconDirective, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" bx-button variant="filled" [surfaceEffects]="false" [loading]="loading()"><bx-icon name="save" />Save with icon</button>
    <button type="button" bx-button variant="tonal" [surfaceEffects]="false" [loading]="loading()">
      <svg bxButtonIcon aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5" /></svg>Save with custom icon
    </button>
    <button type="button" bx-button variant="tonal" [surfaceEffects]="false" [loading]="loading()">Save without icon</button>
    <button type="button" bx-button variant="icon" aria-label="Save project" [surfaceEffects]="false" [loading]="loading()">
      <bx-icon name="save" size="20" />
    </button>
  `
})
export class ButtonTestHost {
  /** Loading state shared by the standard, custom, text-only and icon-only test actions. */
  public readonly loading: WritableSignal<boolean> = signal(false);
}
