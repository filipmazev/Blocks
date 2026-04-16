import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Toast } from '../../../classes/toast';
import { ISimpleToastData } from '../../../interfaces/isimple-toast.interface';

@Component({
  selector: 'bx-simple-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-toast.html',
  styleUrl: './simple-toast.scss'
})
export class SimpleToast extends Toast<ISimpleToastData, undefined> {
  protected dismiss(): void {
    this.toast?.close();
  }
}
