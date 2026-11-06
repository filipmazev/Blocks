import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button, InputField } from '@filip.mazev/blocks/forms';
import { InfiniteScrollDirective } from '@filip.mazev/blocks/primitives';

import { FormExamples } from '@playground/components/screens/library-components/form-examples/form-examples';

@Component({
  selector: 'app-infinite-scroll-examples',
  imports: [FormsModule, Button, InputField, InfiniteScrollDirective, FormExamples],
  templateUrl: './infinite-scroll-examples.html',
  styleUrl: './infinite-scroll-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteScrollExamples {
  protected readonly count: WritableSignal<number> = signal(6);
  protected readonly batch: WritableSignal<number> = signal(6);
  protected readonly height: WritableSignal<number> = signal(240);
  protected readonly events: WritableSignal<number> = signal(0);

  protected readonly rows: Signal<readonly number[]> = computed(() => Array.from({ length: this.count() }, (_, index) => index + 1));
  protected readonly viewportHeight: Signal<number> = computed(() => Math.max(120, Math.min(600, Number(this.height()) || 240)));

  protected append(): void {
    if (this.count() >= 120) return;

    this.events.update((value) => value + 1);
    this.count.update((value) => Math.min(120, value + Math.max(1, Math.min(24, Math.trunc(Number(this.batch())) || 6))));
  }

  protected reset(): void {
    this.count.set(6);
    this.events.set(0);
  }
}
