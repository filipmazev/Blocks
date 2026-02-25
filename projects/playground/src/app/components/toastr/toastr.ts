import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrService } from '@toastr/services/toastr.service';
import { SimpleToastType, ToastPosition } from '@toastr/types/toastr.types';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';
import { IDemoToastData } from '@playground/interfaces/toasts/idemo-toast-data.interface';
import { DemoToast } from './components/demo-toast/demo-toast';
import { ToastrConfigFormControls } from '@playground/types/form.types';
import { ToastrGlobalSettingsService } from '@toastr/services/toastr-global-settings.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-toastr-demo',
  imports: [ReactiveFormsModule, MarkdownModule, ComponentInfo, TitleCasePipe],
  templateUrl: './toastr.html',
  styleUrl: './toastr.scss'
})
export class Toastr {
  private readonly toastr = inject(ToastrService);
  private readonly toastrGlobalSettings = inject(ToastrGlobalSettingsService);

  protected readonly positionOptions: ToastPosition[] = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'];

  protected readonly typeOptions = ['info', 'success', 'warn', 'error'];

  protected readonly form: FormGroup<ToastrConfigFormControls>;
  protected toastrReadmePath = signal<string>('assets/toastr-readme/README.md');

  protected codeFiles: ICodeFile[] = [
    { title: 'toastr-usage.ts', path: 'assets/code-snippets/toastr/toastr-usage.ts.txt', language: 'typescript' },
    { title: 'demo-toast.ts', path: 'assets/code-snippets/toastr/demo-toast.ts.txt', language: 'typescript' },
    { title: 'demo-toast.html', path: 'assets/code-snippets/toastr/demo-toast.html.txt', language: 'html' },
    { title: 'demo-toast.scss', path: 'assets/code-snippets/toastr/demo-toast.scss.txt', language: 'scss' }
  ];

  private toastCount = 0;

  constructor() {
    this.form = new FormGroup<ToastrConfigFormControls>({
      position: new FormControl<ToastPosition>('top-right', [Validators.required]),
      type: new FormControl<SimpleToastType>('success', [Validators.required]),
      title: new FormControl<string>('System Update'),
      message: new FormControl<string>('Your preferences have been saved successfully.'),
      durationInMs: new FormControl<number>(5000, [Validators.min(0)]),
      animate: new FormControl<boolean>(true),
      swipeToDismiss: new FormControl<boolean>(true),
      maxOpened: new FormControl<number>(4, [Validators.min(1), Validators.max(10)])
    });
  }

  protected queueToast(): void {
    if (this.form.invalid) return;

    this.toastCount++;
    const request = this.form.getRawValue();

    this.toastrGlobalSettings.maxOpened.set(request.maxOpened ?? 4);

    const toastRef = this.toastr.queueToast<IDemoToastData, undefined, DemoToast>(DemoToast, {
      position: request.position ?? undefined,
      durationInMs: request.durationInMs ?? undefined,
      animate: request.animate ?? undefined,
      swipeToDismiss: request.swipeToDismiss ?? undefined,
      hasDefaultBackground: false,
      data: {
        title: `${request.title} #${this.toastCount}`,
        message: request.message ?? '',
        type: request.type ?? 'info'
      }
    });

    toastRef.afterClosed$.subscribe(() => {
      console.log(`Toast #${this.toastCount} closed.`);
    });
  }
}
