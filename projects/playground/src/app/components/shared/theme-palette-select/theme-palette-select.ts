import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, DestroyRef, DOCUMENT, inject, input } from '@angular/core';

import type { BxThemeId } from '@filip.mazev/blocks/core';
import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { ISavedTheme } from '@playground/interfaces/isaved-theme.interface';
import type { IThemeNameDialogData } from '@playground/interfaces/itheme-name-dialog-data.interface';
import type { IThemeSwipeActions } from '@playground/interfaces/itheme-swipe-actions.interface';

import { THEME_PALETTES } from '@filip.mazev/blocks/core';
import { Select } from '@filip.mazev/blocks/forms';
import { ModalService } from '@filip.mazev/blocks/modal';
import { IconContentDirective } from '@filip.mazev/blocks/primitives';

import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { SAVED_THEME_DOWNLOAD_DELAY_MS } from '@playground/shared/constants/theme-storage.constants';
import { openThemeConfirmDialog, openThemeNameDialog } from '@playground/shared/helpers/theme-dialog.helpers';
import { downloadThemeArtifact } from '@playground/shared/helpers/theme-studio-download.helpers';

@Component({
  selector: 'app-theme-palette-select',
  imports: [Select, IconContentDirective],
  templateUrl: './theme-palette-select.html',
  styleUrl: './theme-palette-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePaletteSelect {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly modalService = inject(ModalService);

  protected readonly themeStudioService = inject(ThemeStudioService);

  private readonly actionCache: Map<string, IThemeSwipeActions> = new Map();

  protected readonly savedThemes: Signal<readonly ISavedTheme[]> = this.themeStudioService.savedThemes;

  protected readonly options: Signal<IBxSelectOption<string>[]> = computed(() => [
    ...this.savedThemes().map((theme) => ({
      label: theme.name,
      value: theme.id,
      group: this.customGroup(),
      leftSwipeActions: this.swipeActions(theme.id).left,
      rightSwipeActions: this.swipeActions(theme.id).right,
      swipeFullAction: true
    })),
    ...THEME_PALETTES.map((palette) => ({ label: palette.label, value: palette.id, group: 'Built-in Themes' }))
  ]);
  protected readonly selectedValue: Signal<string> = computed(() => {
    const saved = this.themeStudioService.selectedSavedTheme();
    const palette = this.themeStudioService.themingService.palette();

    return saved?.document.palette === palette ? saved.id : palette;
  });

  public readonly customGroup: InputSignal<string> = input('My Themes');

  protected colors(value: string | null, preview = false): readonly string[] {
    const theme = value ? this.themeStudioService.getSavedTheme(value) : undefined;
    const document = preview ? this.themeStudioService.themeDocument() : theme?.document;
    const palette = document?.palette ?? value;
    const colors = THEME_PALETTES.find((item) => item.id === palette)?.colors ?? [];
    const overrides = document?.[this.themeStudioService.themingService.activeTheme()];

    return [overrides?.['--bx-primary'] ?? colors[0], overrides?.['--bx-accent'] ?? colors[1]].filter((color): color is string => !!color);
  }

  protected async select(value: string | null, control: Select<string>): Promise<void> {
    if (!value || value === this.selectedValue()) return;

    if (!this.themeStudioService.getSavedTheme(value)) {
      this.themeStudioService.selectBuiltIn(value as BxThemeId);
      control.value.set(this.selectedValue());
      control.focus({ preventScroll: true });

      return;
    }

    if (this.themeStudioService.dirty()) {
      const confirmed = await openThemeConfirmDialog(this.modalService, {
        message: 'You have unsaved theme changes. Switching themes will discard them.',
        confirmLabel: 'Discard changes',
        danger: true
      });

      if (this.destroyRef.destroyed) return;

      if (!confirmed) {
        control.value.set(this.selectedValue());
        control.focus({ preventScroll: true });

        return;
      }
    }

    this.themeStudioService.selectSavedTheme(value);

    control.value.set(this.selectedValue());
    control.focus({ preventScroll: true });
  }

  /** Stable swipe-action bundle for one saved theme, revealed by swipe right (Download, Rename) and swipe left (Delete). */
  protected swipeActions(id: string): IThemeSwipeActions {
    let actions = this.actionCache.get(id);

    if (!actions) {
      actions = {
        right: [
          { id: `download-${id}`, label: 'Download', icon: 'download', color: 'success', handler: () => this.downloadTheme(id) },
          { id: `rename-${id}`, label: 'Rename', icon: 'pencil', color: 'info', handler: () => this.openRename(id) }
        ],
        left: [{ id: `delete-${id}`, label: 'Delete', icon: 'trash-2', role: 'destructive', handler: () => this.deleteTheme(id) }]
      };
      this.actionCache.set(id, actions);
    }

    return actions;
  }

  //#region Helpers

  private async downloadTheme(id: string): Promise<void> {
    const theme = this.themeStudioService.getSavedTheme(id);

    if (!theme) return;

    const win = this.document.defaultView;

    if (!win) return;

    await new Promise<void>((resolve) => {
      const timer = win.setTimeout(() => {
        unregister();
        resolve();
      }, SAVED_THEME_DOWNLOAD_DELAY_MS);
      const unregister = this.destroyRef.onDestroy(() => {
        win.clearTimeout(timer);
        resolve();
      });
    });

    if (this.destroyRef.destroyed) return;

    const ok = downloadThemeArtifact(this.document, theme.document, 'json', theme.name);

    this.themeStudioService.status.set(ok ? `Downloaded saved theme "${theme.name}".` : 'Download failed.');

    if (!ok) throw new Error('Download failed.');
  }

  private async openRename(id: string): Promise<void> {
    const theme = this.themeStudioService.getSavedTheme(id);

    if (!theme) return;

    const data: IThemeNameDialogData = {
      title: 'Rename theme',
      name: theme.name,
      hint: 'Rename this saved theme. Its configuration is unchanged.',
      confirmLabel: 'Rename',
      takenNames: this.themeStudioService
        .savedThemes()
        .filter((item) => item.id !== id)
        .map((item) => item.name)
    };

    const name = await openThemeNameDialog(this.modalService, data);

    if (name && !(await this.themeStudioService.renameSavedTheme(id, name))) {
      throw new Error(this.themeStudioService.status());
    }
  }

  private async deleteTheme(id: string): Promise<void> {
    const theme = this.themeStudioService.getSavedTheme(id);

    if (!theme) return;

    const confirmed = await openThemeConfirmDialog(this.modalService, {
      message: `Delete "${theme.name}"? This cannot be undone.`,
      confirmLabel: 'Delete',
      danger: true
    });

    if (!confirmed) return;

    await this.themeStudioService.deleteSavedTheme(id);
  }

  //#endregion
}
