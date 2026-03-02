import { Component } from '@angular/core';
import { Toast } from '@toastr/classes/toast';
import { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import { NgClass } from '@angular/common';
import { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';

@Component({
  selector: 'app-demo-toast',
  imports: [NgClass],
  templateUrl: './demo-toast.html',
  styleUrl: './demo-toast.scss'
})
export class DemoToast extends Toast<IDemoToastData, IDemoToastResult> {
  protected dismiss(): void {
    this.toast?.close({
      openedCount: (this.data.openedCount ?? 0) + 1
    });
  }
}
