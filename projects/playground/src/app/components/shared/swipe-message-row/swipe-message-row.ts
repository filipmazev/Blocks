import type { InputSignal, OutputEmitterRef } from '@angular/core';

import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { uuidv4 } from '@filip.mazev/blocks/core';

/** Shared mail content for the swipe examples and configurable Playground. */
@Component({
  selector: 'app-swipe-message-row',
  templateUrl: './swipe-message-row.html',
  styleUrl: './swipe-message-row.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwipeMessageRow {
  protected readonly statusId: string = uuidv4();

  public readonly label: InputSignal<string> = input('Design review');
  public readonly subject: InputSignal<string> = input('A few details for your next iteration');
  public readonly preview: InputSignal<string> = input('Review the latest changes when you have a moment.');
  public readonly unread: InputSignal<boolean> = input(true);
  public readonly disabled: InputSignal<boolean> = input(false);
  public readonly loading: InputSignal<boolean> = input(false);

  public readonly open: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
}
