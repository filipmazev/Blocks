import type { Signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { BX_I18N, isTextWithKey } from '@filip.mazev/blocks/core';

import { Toast } from '@toastr/classes/toast';
import { ISimpleToastData } from '@toastr/interfaces/isimple-toast-data.interface';

@Component({
  selector: 'bx-simple-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-toast.html',
  // Toast.data remains a publicly mutable object rather than a signal input.
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './simple-toast.scss'
})
export class SimpleToast extends Toast<ISimpleToastData, undefined> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedTitle: Signal<string | undefined> = computed(() => {
    this.i18n?.version?.();

    const title = this.data.title;

    if (!title) return undefined;

    if (isTextWithKey(title)) {
      return this.i18n?.translate(title.key) ?? title.key;
    }

    return title;
  });
  protected readonly resolvedMessage: Signal<string | undefined> = computed(() => {
    this.i18n?.version?.();

    const message = this.data.message;

    if (!message) return undefined;

    if (isTextWithKey(message)) {
      return this.i18n?.translate(message.key) ?? message.key;
    }

    return message;
  });

  protected dismiss(): void {
    this.toast?.close();
  }
}
