import type { Observable } from 'rxjs';

import { Subject } from 'rxjs';

import { IToastConfig } from '@toastr/interfaces/itoast-config.interface';

export class ToastRef<D = undefined, R = unknown> {
  private readonly afterClosedSubject: Subject<R | undefined> = new Subject<R | undefined>();
  private readonly pauseSubject: Subject<void> = new Subject<void>();
  private readonly resumeSubject: Subject<void> = new Subject<void>();

  public readonly afterClosed$: Observable<R | undefined> = this.afterClosedSubject.asObservable();
  public readonly onPause$: Observable<void> = this.pauseSubject.asObservable();
  public readonly onResume$: Observable<void> = this.resumeSubject.asObservable();

  public config!: IToastConfig<D>;

  public close(result?: R): void {
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  public pause(): void {
    this.pauseSubject.next();
  }

  public resume(): void {
    this.resumeSubject.next();
  }
}
