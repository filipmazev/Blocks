import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Stack } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-identifiers',
  imports: [Alert, Button, Card, Stack],
  templateUrl: './identifiers.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Identifiers {
  protected readonly ownerId: string = uuidv4();

  protected readonly identifier: WritableSignal<string> = signal(uuidv4());

  protected generateIdentifier(): void {
    this.identifier.set(uuidv4());
  }
}
