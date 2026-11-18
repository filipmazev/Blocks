import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal, viewChildren } from '@angular/core';

import type { ISwipeAction, ISwipeActionError, ISwipeActionEvent } from '@filip.mazev/blocks/forms';

import { Button, SlideToggle, SwipeActionsDirective } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ContextMenuDirective, DropdownDirective, Menu, MenuItem, MenuTriggerDirective } from '@filip.mazev/blocks/primitives';

import { SwipeMessageRow } from '@playground/components/shared/swipe-message-row/swipe-message-row';

@Component({
  selector: 'app-menu-swipe-examples',
  imports: [SwipeMessageRow, Button, Icon, SlideToggle, Menu, MenuItem, SwipeActionsDirective, ContextMenuDirective, DropdownDirective, MenuTriggerDirective],
  templateUrl: './menu-swipe-examples.html',
  styleUrl: './menu-swipe-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSwipeExamples {
  private readonly destroyRef = inject(DestroyRef);

  private readonly swipeRows: Signal<readonly SwipeActionsDirective[]> = viewChildren(SwipeActionsDirective);

  protected readonly fullSwipe: WritableSignal<boolean> = signal(true);
  protected readonly rtl: WritableSignal<boolean> = signal(false);
  protected readonly failNext: WritableSignal<boolean> = signal(false);
  protected readonly failNextRemoval: WritableSignal<boolean> = signal(false);
  protected readonly removeRows: WritableSignal<boolean> = signal(true);

  protected readonly result: WritableSignal<string> = signal('Swipe with a trackpad or touch, drag a row, or right-click. Keyboard: Shift+F10.');

  protected readonly completed: WritableSignal<number> = signal(0);

  protected readonly initialMessages: readonly string[] = [
    'Design review',
    'Release checklist',
    'Project update',
    'More project actions',
    'Archive comparison',
    'Delete comparison'
  ];

  protected readonly messages: WritableSignal<readonly string[]> = signal(this.initialMessages);
  protected readonly unreadMessages: WritableSignal<ReadonlySet<string>> = signal(new Set(this.initialMessages));

  protected readonly readActions: Signal<ReadonlyMap<string, readonly ISwipeAction[]>> = computed(
    () =>
      new Map(
        this.messages().map((message) => {
          const unread = this.unreadMessages().has(message);
          const actions: readonly ISwipeAction[] = [
            {
              id: 'read',
              label: unread ? 'Mark as read' : 'Mark as unread',
              icon: unread ? 'mail-open' : 'mail',
              color: 'info',
              completion: 'collapse',
              handler: () => this.toggleRead(message)
            },
            { id: 'remind', label: 'Remind me', icon: 'clock-3', color: 'accent' }
          ];

          return [message, actions];
        })
      )
  );
  protected readonly left: Signal<readonly ISwipeAction[]> = computed(() => [
    { id: 'rename', label: 'Rename', icon: 'pencil', color: 'info' },
    {
      id: 'download',
      label: 'Download',
      icon: 'download',
      color: 'success',
      handler: () => this.request('Download', this.failNext)
    }
  ]);
  protected readonly archive: Signal<readonly ISwipeAction[]> = computed(() => [
    {
      id: 'archive',
      label: 'Archive',
      icon: 'archive',
      color: 'warn',
      fullSwipeConfig: { resistance: 8, resistancePlateau: 0.15, resistanceEnd: 0.9 },
      completion: this.removeRows() ? 'dismiss' : 'collapse',
      handler: () => this.request('Archive', this.failNextRemoval)
    }
  ]);
  protected readonly right: Signal<readonly ISwipeAction[]> = computed(() => [
    {
      id: 'delete',
      label: 'Delete',
      icon: 'trash-2',
      role: 'destructive',
      completion: this.removeRows() ? 'dismiss' : 'collapse',
      handler: () => this.request('Delete', this.failNextRemoval)
    }
  ]);

  protected readonly unavailable: readonly ISwipeAction[] = [
    { id: 'locked', label: 'Locked', icon: 'lock', disabled: true, color: 'grayscale' },
    { id: 'sync', label: 'Syncing', icon: 'refresh-cw', loading: true, color: 'accent' }
  ];

  protected readonly overflow: Signal<readonly ISwipeAction[]> = computed(() => [
    ...this.left(),
    { id: 'duplicate', label: 'Duplicate project', icon: 'copy', color: 'accent' },
    ...this.archive(),
    ...this.right()
  ]);

  protected selected(event: ISwipeActionEvent): void {
    this.result.set(`${event.action.id} invoked through ${event.source}.`);
  }

  protected failed(event: ISwipeActionError): void {
    this.result.set(`${event.action.id} failed: ${event.error instanceof Error ? event.error.message : 'Unknown error'}. Retry on the same item.`);
  }

  protected dismissed(message: string, event: ISwipeActionEvent): void {
    this.messages.update((messages) => messages.filter((item) => item !== message));
    this.result.set(`${message} removed after ${event.action.id} completed.`);
  }

  protected resetRows(): void {
    this.messages.set(this.initialMessages);
    this.unreadMessages.set(new Set(this.initialMessages));

    for (const row of this.swipeRows()) row.restoreSwipeRow();
  }

  //#region Helpers

  private toggleRead(message: string): void {
    this.unreadMessages.update((current) => {
      const next = new Set(current);

      if (next.has(message)) next.delete(message);
      else next.add(message);

      return next;
    });
    this.result.set(`${message} marked as ${this.unreadMessages().has(message) ? 'unread' : 'read'}.`);
  }

  private async request(name: string, failure: WritableSignal<boolean>): Promise<void> {
    const shouldFail = failure();

    if (shouldFail) failure.set(false);

    await new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        unregister();
        resolve();
      }, 1600);
      const unregister = this.destroyRef.onDestroy(() => {
        clearTimeout(timer);
        resolve();
      });
    });

    if (this.destroyRef.destroyed) return;

    if (shouldFail) throw new Error('Simulated request failure');

    this.completed.update((count) => count + 1);
    this.result.set(`${name} finished. Completed requests: ${this.completed()}.`);
  }

  //#endregion
}
