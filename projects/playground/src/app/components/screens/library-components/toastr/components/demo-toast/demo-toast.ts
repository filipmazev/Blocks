import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from '@filip.mazev/blocks/forms';
import { Toast } from '@filip.mazev/blocks/toastr';

import { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';

@Component({
  selector: 'app-demo-toast',
  imports: [Button],
  templateUrl: './demo-toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './demo-toast.scss'
})
export class DemoToast extends Toast<IDemoToastData, IDemoToastResult> {
  protected updateMessage(): void {
    this.toast.patch({ data: { message: 'Updated from inside this notification.' } });
  }

  protected dismiss(): void {
    this.toast?.close({
      openedCount: (this.data()?.openedCount ?? 0) + 1
    });
  }
}
