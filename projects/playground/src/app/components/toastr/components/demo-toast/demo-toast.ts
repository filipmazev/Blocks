import { Component } from '@angular/core';
import { Toast } from '@toastr/classes/toast';
import { IDemoToastData } from '@playground/interfaces/toasts/idemo-toast-data.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-demo-toast',
  imports: [NgClass],
  templateUrl: './demo-toast.html',
  styleUrl: './demo-toast.scss'
})
export class DemoToast extends Toast<IDemoToastData, undefined> {
  protected dismiss(): void {
    this.toast?.close();
  }
}
