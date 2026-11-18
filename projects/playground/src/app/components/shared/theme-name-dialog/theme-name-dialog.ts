import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import type { IThemeNameDialogData } from '@playground/interfaces/itheme-name-dialog-data.interface';

import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Modal, ModalFooterDirective } from '@filip.mazev/blocks/modal';

import { THEME_NAME_MAX_LENGTH } from '@playground/shared/constants/theme-storage.constants';
import { isValidThemeName, normalizeThemeName } from '@playground/shared/helpers/theme-name.helpers';

/** Reusable naming dialog that returns a validated, trimmed theme name. */
@Component({
  selector: 'app-theme-name-dialog',
  imports: [Button, InputField, ModalFooterDirective],
  templateUrl: './theme-name-dialog.html',
  styleUrl: './theme-name-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeNameDialog extends Modal<IThemeNameDialogData, string> {
  protected readonly nameMaxLength: number = THEME_NAME_MAX_LENGTH;

  protected readonly name: WritableSignal<string> = signal(this.data.name);

  protected readonly error: Signal<string> = computed(() => {
    const value = this.name();

    if (!isValidThemeName(value)) {
      return `Enter a theme name between 1 and ${THEME_NAME_MAX_LENGTH} characters.`;
    }

    const normalized = normalizeThemeName(value);

    if (this.data.takenNames.some((taken) => normalizeThemeName(taken).toLowerCase() === normalized.toLowerCase())) {
      return 'A saved theme already uses this name.';
    }

    return '';
  });
  protected readonly valid: Signal<boolean> = computed(() => !this.error());

  protected change(value: string | number | null): void {
    this.name.set(value?.toString() ?? '');
  }

  protected confirm(): void {
    const normalized = normalizeThemeName(this.name());

    if (this.valid()) this.modal.close('confirm', normalized);
  }
}
