import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'; // <-- Added import
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrService } from '@toastr/services/toastr.service';
import { SimpleToastType, ToastPosition } from '@toastr/types/toastr.types';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';
import { ToastrConfigFormControls } from '@playground/types/form.types';
import { ToastrGlobalSettingsService } from '@toastr/services/toastr-global-settings.service';
import { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';
import { DemoToast } from './components/demo-toast/demo-toast';
import { ButtonComponent } from '../../../../../../../button/src/lib/components/button.component';

@Component({
  selector: 'app-toastr-demo',
  imports: [ReactiveFormsModule, MarkdownModule, ComponentInfo, ButtonComponent],
  templateUrl: './toastr.html',
  styleUrl: './toastr.scss'
})
export class Toastr {
  private readonly toastr = inject(ToastrService);
  private readonly toastrGlobalSettings = inject(ToastrGlobalSettingsService);

  protected readonly positionOptions: ToastPosition[] = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'];

  protected readonly typeOptions = ['info', 'success', 'warn', 'danger'];

  protected readonly form: FormGroup<ToastrConfigFormControls>;
  protected toastrReadmePath = signal<string>('assets/toastr-readme/README.md');

  protected codeFiles: ICodeFile[] = [
    { title: 'toastr-usage.ts', path: 'assets/code-snippets/toastr/toastr-usage.ts.txt', language: 'typescript' },
    { title: 'demo-toast.ts', path: 'assets/code-snippets/toastr/demo-toast.ts.txt', language: 'typescript' },
    { title: 'demo-toast.html', path: 'assets/code-snippets/toastr/demo-toast.html.txt', language: 'html' },
    { title: 'demo-toast.scss', path: 'assets/code-snippets/toastr/demo-toast.scss.txt', language: 'scss' }
  ];

  private toastCount = 0;
  private openedCount = 0;

  constructor() {
    this.form = new FormGroup<ToastrConfigFormControls>({
      position: new FormControl<ToastPosition>('top-right', [Validators.required]),
      title: new FormControl<string>('System Update'),
      message: new FormControl<string>('Your preferences have been saved successfully.'),
      durationInMs: new FormControl<number>(5000, [Validators.min(0)]),
      animate: new FormControl<boolean>(true),
      swipeToDismiss: new FormControl<boolean>(true),
      maxOpened: new FormControl<number>(4, [Validators.min(1), Validators.max(10)])
    });

    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe((changes) => {
      this.toastrGlobalSettings.maxOpened.set(changes.maxOpened ?? 4);
      this.toastrGlobalSettings.position.set(changes.position ?? 'top-right');
      this.toastrGlobalSettings.animate.set(changes.animate ?? true);
      this.toastrGlobalSettings.swipeToDismiss.set(changes.swipeToDismiss ?? true);
      this.toastrGlobalSettings.durationInMs.set(changes.durationInMs ?? 5000);
    });
  }

  protected queueToast(): void {
    if (this.form.invalid) return;

    this.toastCount++;
    const request = this.form.getRawValue();

    const toastRef = this.toastr.queueToast<IDemoToastData, IDemoToastResult, DemoToast>(DemoToast, {
      position: request.position ?? undefined,
      durationInMs: request.durationInMs ?? undefined,
      animate: request.animate ?? undefined,
      swipeToDismiss: request.swipeToDismiss ?? undefined,
      hasDefaultBackground: false,
      data: {
        title: `${request.title} #${this.toastCount}`,
        message: request.message ?? '',
        openedCount: this.openedCount
      }
    });

    toastRef.afterClosed$.subscribe((result: IDemoToastResult | undefined) => {
      console.log(`Toast #${this.openedCount} closed with result:`, result ?? 'No result');
      this.openedCount = result?.openedCount ?? this.openedCount;
    });
  }

  protected queueSimpleToast(type: SimpleToastType): void {
    if (type === 'info') {
      this.toastr.queueInfo({
        title: 'Information',
        message: 'This is an informational toast message.'
      });
    } else if (type === 'success') {
      this.toastr.queueSuccess({
        title: 'Success',
        message: 'Your operation was successful!'
      });
    } else if (type === 'warn') {
      this.toastr.queueWarning({
        title: 'Warning',
        message: 'This is a warning toast message.'
      });
    } else if (type === 'danger') {
      this.toastr.queueDanger({
        title: 'Error',
        message: 'An error occurred while processing your request.'
      });
    }
  }
}
