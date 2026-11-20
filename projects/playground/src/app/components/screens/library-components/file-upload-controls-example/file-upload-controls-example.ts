import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';

import type { FileUploadSession } from '@filip.mazev/blocks/forms';

import { Button } from '@filip.mazev/blocks/forms';
import { ProgressBar, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { FileUploadDemoService } from '@playground/services/file-upload-demo.service';
import { FILE_UPLOAD_REVIEW_SAMPLE_NAME } from '@playground/shared/constants/file-upload-story.constants';

@Component({
  selector: 'app-file-upload-controls-example',
  imports: [Button, ProgressBar, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './file-upload-controls-example.html',
  styleUrl: './file-upload-controls-example.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadControlsExample {
  private readonly destroyRef = inject(DestroyRef);
  private readonly fileUploadDemoService = inject(FileUploadDemoService);

  protected readonly session: FileUploadSession = this.fileUploadDemoService.createSession(this.destroyRef, { position: 'bottom-left' });

  protected uploadSample(): void {
    const file = new File(['Sample review'], FILE_UPLOAD_REVIEW_SAMPLE_NAME, { type: 'text/plain' });

    this.session.select([file], { startMode: 'automatic', additionalTypes: ['.txt'] });
  }
}
