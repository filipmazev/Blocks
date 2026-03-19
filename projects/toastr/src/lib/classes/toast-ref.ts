import { Subject } from 'rxjs';
import { IToastConfig } from '../interfaces/itoast-config.interface';

export class ToastRef<D = undefined, R = unknown> {
  private readonly afterClosedSubject = new Subject<R | undefined>();

  private readonly pauseSubject = new Subject<void>();
  private readonly resumeSubject = new Subject<void>();

  public readonly afterClosed$ = this.afterClosedSubject.asObservable();
  public readonly onPause$ = this.pauseSubject.asObservable();
  public readonly onResume$ = this.resumeSubject.asObservable();
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
