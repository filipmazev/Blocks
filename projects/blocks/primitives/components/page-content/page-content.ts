import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Main content section of a Blocks page layout. */
@Component({
  selector: 'bx-page-content',
  template: '<ng-content />',
  styleUrl: './page-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Angular requires a class for this standalone content projection component.
export class PageContent {}
