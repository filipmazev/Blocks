import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '@filip.mazev/blocks/icons';
import { Toast } from '@filip.mazev/blocks/toastr';

@Component({
  selector: 'app-copy-feedback',
  host: { role: 'status' },
  imports: [Icon],
  templateUrl: './copy-feedback.html',
  styleUrl: './copy-feedback.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyFeedback extends Toast<undefined, undefined> {}
