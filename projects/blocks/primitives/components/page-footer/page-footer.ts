import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Optional trailing section of a Blocks page layout. */
@Component({
  selector: 'bx-page-footer',
  template: '<ng-content />',
  styleUrl: './page-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Angular requires a class for this standalone content projection component.
export class PageFooter {}
