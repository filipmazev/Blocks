import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Modal, ModalFooterDirective } from '@filip.mazev/blocks/modal';

import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { importStudioTheme } from '@playground/shared/helpers/theme-studio-import.helpers';

@Component({
  host: { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Import a theme' },
  selector: 'app-theme-studio-import',
  imports: [Button, InputField, Icon, ModalFooterDirective],
  templateUrl: './theme-studio-import.html',
  styleUrl: './theme-studio-import.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudioImport extends Modal<undefined, undefined> {
  private readonly themeStudioService = inject(ThemeStudioService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly source: WritableSignal<string> = signal('');
  protected readonly fileName: WritableSignal<string> = signal('No file selected');
  protected readonly error: WritableSignal<string> = signal('');

  protected readonly loading: WritableSignal<boolean> = signal(false);

  private operation: number = 0;

  protected async readFile(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    const operation = ++this.operation;

    this.loading.set(false);

    if (!file) return;

    this.error.set('');
    this.fileName.set(file.name);

    if (file.size > 65536) {
      this.error.set('Choose a file smaller than 64 KiB.');

      return;
    }

    this.loading.set(true);

    try {
      const source = await file.text();

      if (!this.destroyRef.destroyed && operation === this.operation) this.source.set(source);
    } catch {
      if (!this.destroyRef.destroyed && operation === this.operation) this.error.set('Could not read this file. Paste its contents instead.');
    } finally {
      if (!this.destroyRef.destroyed && operation === this.operation) this.loading.set(false);
    }
  }

  protected sourceChanged(value: string | number | null): void {
    this.operation++;
    this.loading.set(false);
    this.source.set(value?.toString() ?? '');
    this.error.set('');
  }

  protected importTheme(): void {
    try {
      const theme = importStudioTheme(this.source());

      if (this.themeStudioService.applyDocument(theme, 'Theme imported. Undo restores the previous draft.')) this.close();
    } catch (error: unknown) {
      this.error.set(error instanceof Error ? error.message : 'Could not import this theme. Your draft is unchanged.');
    }
  }
}
