import { Component } from '@angular/core';

@Component({
  selector: 'bx-error',
  standalone: true,
  template: '<ng-content />',
  host: { 'aria-live': 'polite' }
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- The component provides the projection selector and has no behavior.
export class BxError {}
