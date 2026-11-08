import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Modal } from '@filip.mazev/blocks/modal';

@Component({
  selector: 'app-theme-studio-preview-dialog',
  host: { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Preview a themed dialog' },
  imports: [Button, InputField],
  templateUrl: './theme-studio-preview-dialog.html',
  styleUrl: './theme-studio-preview-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudioPreviewDialog extends Modal<undefined, undefined> {
  protected readonly note: WritableSignal<string> = signal('A theme travels with every overlay.');
}
