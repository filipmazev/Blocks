import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast } from '../../../classes/toast';
import { ISimpleToastData } from '../../../interfaces/isimple-toast.interface';

@Component({
  selector: 'bx-simple-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-toast.html',
  styleUrl: './simple-toast.scss'
})
export class SimpleToast extends Toast<ISimpleToastData, undefined> implements AfterViewInit, OnDestroy {
  @ViewChild('progressBar') protected progressBar?: ElementRef<HTMLElement>;

  private progressAnimation?: Animation;
  private subs = new Subscription();

  public ngAfterViewInit(): void {
    const duration = this.toast?.config?.durationInMs;

    if (duration && this.progressBar?.nativeElement) {
      this.progressAnimation = this.progressBar.nativeElement.animate([{ width: '100%' }, { width: '0%' }], { duration, fill: 'forwards' });

      if (this.toast) {
        this.subs.add(this.toast.onPause$.subscribe(() => this.progressAnimation?.pause()));
        this.subs.add(this.toast.onResume$.subscribe(() => this.progressAnimation?.play()));
      }
    }
  }

  public ngOnDestroy(): void {
    this.progressAnimation?.cancel();
    this.subs.unsubscribe();
  }

  protected dismiss(): void {
    this.toast?.close();
  }
}
