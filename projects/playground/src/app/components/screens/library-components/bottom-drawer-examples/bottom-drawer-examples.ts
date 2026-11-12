import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '@filip.mazev/blocks/forms';
import { BottomDrawer, BottomDrawerCloseReason, BottomDrawerSize } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-bottom-drawer-examples',
  imports: [BottomDrawer, Button, RouterLink],
  templateUrl: './bottom-drawer-examples.html',
  styleUrl: './bottom-drawer-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomDrawerExamples {
  protected readonly open: WritableSignal<boolean> = signal(false);
  protected readonly busy: WritableSignal<boolean> = signal(false);
  protected readonly dismissible: WritableSignal<boolean> = signal(true);

  protected readonly size: WritableSignal<BottomDrawerSize> = signal('md');
  protected readonly status: WritableSignal<string> = signal('No drawer interaction yet.');

  protected readonly items: readonly number[] = Array.from({ length: 24 }, (_, index) => index + 1);

  protected openDrawer(size: BottomDrawerSize): void {
    this.size.set(size);
    this.open.set(true);
    this.status.set(`Opened the ${size} drawer.`);
  }

  protected onClosed(reason: BottomDrawerCloseReason): void {
    this.status.set(`Closed with reason: ${reason}.`);
  }

  protected onCancelled(reason: BottomDrawerCloseReason): void {
    this.status.set(`Close cancelled: ${reason}.`);
  }

  protected toggleDismissible(): void {
    this.dismissible.update((value) => !value);
  }

  protected simulateBusy(): void {
    this.busy.set(true);
    setTimeout(() => {
      this.busy.set(false);
      this.status.set('Busy state finished; dismissal is available again.');
    }, 1500);
  }
}
