import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';

import type { UtilityLockOwner } from '@playground/components/screens/utilities/types/utilities.types';

import { ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Grid, Stack, Tag } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-scroll-lock',
  imports: [Alert, Button, Card, Grid, Stack, Tag],
  templateUrl: './scroll-lock.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollLock {
  protected readonly scrollLockService = inject(ScrollLockService);

  private readonly lockIds: Readonly<Record<UtilityLockOwner, string>> = { first: uuidv4(), second: uuidv4() };

  private readonly lockControls: Signal<ElementRef<HTMLElement> | undefined> = viewChild('lockControls', { read: ElementRef<HTMLElement> });

  protected readonly owners: readonly UtilityLockOwner[] = ['first', 'second'];

  protected readonly locks: WritableSignal<readonly UtilityLockOwner[]> = signal<readonly UtilityLockOwner[]>([]);

  constructor() {
    inject(DestroyRef).onDestroy(() => this.releaseLocks());
  }

  protected toggleLock(owner: UtilityLockOwner): void {
    if (this.locks().includes(owner)) {
      this.scrollLockService.enableScroll(this.lockIds[owner]);
      this.locks.update((owners) => owners.filter((current) => current !== owner));
    } else {
      if (!this.locks().length) this.lockControls()?.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' });

      this.scrollLockService.disableScroll(this.lockIds[owner], { handleTouchInput: false });
      this.locks.update((owners) => [...owners, owner]);
    }
  }

  protected releaseLocks(): void {
    this.scrollLockService.enableScroll(this.lockIds.first);
    this.scrollLockService.enableScroll(this.lockIds.second);
    this.locks.set([]);
  }
}
