import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IResizeHandleEvent, ResizeHandleEdge } from '@filip.mazev/blocks/primitives';

import { Button, InputField, Select, SlideToggle } from '@filip.mazev/blocks/forms';
import { ResizeHandleDirective } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-resize-handle-examples',
  imports: [FormsModule, Button, InputField, Select, SlideToggle, ResizeHandleDirective],
  templateUrl: './resize-handle-examples.html',
  styleUrl: './resize-handle-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizeHandleExamples {
  protected readonly edges: readonly IBxSelectOption<ResizeHandleEdge>[] = [
    { label: 'Right edge (width)', value: 'right' },
    { label: 'Left edge (width)', value: 'left' },
    { label: 'Bottom edge (height)', value: 'bottom' },
    { label: 'Top edge (height)', value: 'top' }
  ];

  protected readonly edge: WritableSignal<ResizeHandleEdge> = signal<ResizeHandleEdge>('right');

  protected readonly size: WritableSignal<number> = signal(180);
  protected readonly minimum: WritableSignal<number> = signal(60);
  protected readonly maximum: WritableSignal<number> = signal(280);

  protected readonly disableShrink: WritableSignal<boolean> = signal(true);
  protected readonly customBounds: WritableSignal<boolean> = signal(false);

  protected readonly status: WritableSignal<string> = signal('Drag the inner edge, or focus it and use the arrow keys.');

  protected readonly horizontal: Signal<boolean> = computed(() => this.edge() === 'left' || this.edge() === 'right');

  protected changeEdge(edge: ResizeHandleEdge): void {
    this.edge.set(edge);
    this.size.set(180);
  }

  protected record(event: IResizeHandleEvent, stage: 'start' | 'end'): void {
    this.status.set(`${event.source} resize ${stage === 'start' ? 'started' : event.canceled ? 'canceled' : 'completed'} at ${Math.round(event.value)} px.`);
  }
}
