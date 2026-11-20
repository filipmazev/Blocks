import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';
import type { ParamMap } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import type { IFileUploadButton, IFileUploadRejection, IFileUploadSelection } from '@filip.mazev/blocks/forms';
import type { IDemoAction } from '@playground/interfaces/idemo-action.interface';
import type { IFileUploadStoryArgs } from '@playground/interfaces/ifile-upload-story-args.interface';

import { Button, FileUpload } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { IconContentDirective, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { FileUploadControlsExample } from '@playground/components/screens/library-components/file-upload-controls-example/file-upload-controls-example';
import { FileUploadDemoService } from '@playground/services/file-upload-demo.service';
import { FILE_UPLOAD_REVIEW_SAMPLE_NAME, FILE_UPLOAD_STORY_DEFAULTS } from '@playground/shared/constants/file-upload-story.constants';

@Component({
  selector: 'app-file-upload-demo',
  imports: [Button, FileUpload, FileUploadControlsExample, Icon, IconContentDirective, RouterLink, TooltipDirective],
  templateUrl: './file-upload-demo.html',
  styleUrl: './file-upload-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadDemo {
  private readonly activatedRoute = inject(ActivatedRoute);

  protected readonly fileUploadDemoService = inject(FileUploadDemoService);

  private readonly queryParamMap: Signal<ParamMap> = toSignal(this.activatedRoute.queryParamMap, { requireSync: true });

  protected readonly browseButton: IFileUploadButton = { iconStart: 'folder-open', iconEnd: 'plus' };

  protected readonly selection: Signal<IFileUploadSelection> = computed(() => ({
    multiple: this.args().multiple,
    startMode: this.args().automatic ? 'automatic' : 'manual',
    maxFileSize: this.args().maxFileSize,
    maxFiles: this.args().maxFiles,
    additionalTypes: ['.txt']
  }));
  protected readonly focusBatch: Signal<string | null> = computed(() => this.queryParamMap().get('uploadBatch'));

  public readonly simulateImmediately: InputSignal<boolean> = input(false);
  public readonly args: InputSignal<IFileUploadStoryArgs> = input<IFileUploadStoryArgs>(FILE_UPLOAD_STORY_DEFAULTS);

  public readonly action: OutputEmitterRef<IDemoAction> = output<IDemoAction>();

  constructor() {
    effect(() => {
      this.fileUploadDemoService.unknownProgress = this.args().unknownProgress;
    });
  }

  protected addSamples(): void {
    const files = [
      new File(['Sample upload'], 'notes.txt', { type: 'text/plain' }),
      new File(['Simulated failure'], FILE_UPLOAD_REVIEW_SAMPLE_NAME, { type: 'text/plain' })
    ];
    const selection = this.selection();
    const sampleFiles = selection.multiple ? files : files.slice(0, 1);
    const rejected = this.fileUploadDemoService.session.select(sampleFiles, this.simulateImmediately() ? { ...selection, startMode: 'automatic' } : selection);

    this.action.emit({ name: 'addedSampleFiles', payload: sampleFiles.map((file) => file.name) });

    if (rejected.length) this.onRejected(rejected);
  }

  protected onRejected(rejected: readonly IFileUploadRejection[]): void {
    this.action.emit({ name: 'filesRejected', payload: rejected.map(({ file, reason }) => ({ file: file.name, reason })) });
  }
}
