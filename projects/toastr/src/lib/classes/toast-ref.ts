import { Subject } from 'rxjs';

export class ToastRef<R = unknown> {
  private readonly afterClosedSubject = new Subject<R | undefined>();
  public readonly afterClosed$ = this.afterClosedSubject.asObservable();

  public close(result?: R): void {
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }
}
