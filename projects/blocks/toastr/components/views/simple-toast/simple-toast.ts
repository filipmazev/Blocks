import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Toast } from '../../../classes/toast';
import { ISimpleToastData } from '../../../interfaces/isimple-toast.interface';
import { BX_I18N, isTextWithKey } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-simple-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-toast.html',
  styleUrl: './simple-toast.scss'
})
export class SimpleToast extends Toast<ISimpleToastData, undefined> {
  private readonly i18n = inject(BX_I18N, { optional: true });
  
  protected readonly resolvedTitle = computed(() => {
    this.i18n?.version?.();

    const title = this.data.title;
    if (!title) return undefined;

    if (isTextWithKey(title)) {
      return this.i18n?.translate(title.key) ?? title.key;
    }

    return title;
  });

  protected readonly resolvedMessage = computed(() => {
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
