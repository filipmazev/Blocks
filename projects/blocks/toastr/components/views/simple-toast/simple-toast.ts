import type { Signal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { BX_I18N, resolveText } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner } from '@filip.mazev/blocks/primitives';

import { Toast } from '@toastr/classes/toast';
import { ISimpleToastData } from '@toastr/interfaces/isimple-toast-data.interface';

@Component({
  selector: 'bx-simple-toast',
  standalone: true,
  imports: [NgClass, Icon, LoadingSpinner],
  templateUrl: './simple-toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './simple-toast.scss'
})
export class SimpleToast extends Toast<ISimpleToastData, undefined> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedTitle: Signal<string> = computed(() => resolveText(this.data()?.title ?? undefined, this.i18n));
  protected readonly resolvedMessage: Signal<string> = computed(() => resolveText(this.data()?.message, this.i18n));
  protected readonly iconSize: Signal<number> = computed(() => {
    const size = Number(this.data()?.icon?.size ?? 24);

    return Number.isFinite(size) && size > 0 ? size : 24;
  });
}
