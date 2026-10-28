import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blocks-logo',
  standalone: true,
  templateUrl: './blocks-logo.svg',
  styleUrl: './blocks-logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' }
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BlocksLogo {}
