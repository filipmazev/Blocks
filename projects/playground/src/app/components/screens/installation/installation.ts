import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageContainer } from '@filip.mazev/blocks/primitives';

import { Readme } from '@playground/components/shared/readme/readme';

@Component({
  selector: 'app-installation',
  imports: [PageContainer, Readme],
  templateUrl: './installation.html',
  styleUrl: './installation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Angular requires a component class for this documentation view.
export class Installation {}
