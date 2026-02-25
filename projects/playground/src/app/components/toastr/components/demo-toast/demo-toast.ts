import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast } from '@toastr/classes/toast';
import { IDemoToastData } from '@playground/interfaces/toasts/idemo-toast-data.interface';

@Component({
  selector: 'app-demo-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-toast.html',
  styleUrl: './demo-toast.scss'
})
export class DemoToast extends Toast<IDemoToastData, undefined> {
  protected dismiss(): void {
    this.toast?.close();
  }
}
