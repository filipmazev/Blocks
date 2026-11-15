import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChild, effect, input, signal, TemplateRef, untracked } from '@angular/core';

import { BxVisualPresenceDirective } from '@effects/directives/visual-presence/visual-presence.directive';
import { IVisualTransitionContext } from '@effects/interfaces/ivisual-transition-context.interface';
import { IVisualTransitionLayer } from '@effects/interfaces/ivisual-transition-layer.interface';

/** Crossfades committed visual values without delaying state or creating duplicate interactive content.
 * @typeParam T - Immutable visual value passed to the projected template.
 */
@Component({
  selector: 'bx-visual-transition',
  standalone: true,
  imports: [NgTemplateOutlet, BxVisualPresenceDirective],
  templateUrl: './visual-transition.html',
  styleUrl: './visual-transition.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualTransition<T> {
  private readonly templateRef: Signal<TemplateRef<IVisualTransitionContext<T>>> = contentChild.required(TemplateRef);

  protected readonly layers: WritableSignal<readonly IVisualTransitionLayer<T>[]> = signal([]);

  protected readonly activeId: Signal<number | undefined> = computed(() => this.layers().at(-1)?.id);
  protected readonly template: Signal<TemplateRef<IVisualTransitionContext<T>>> = computed(() => this.templateRef());

  /** Committed immutable visual value. Changes use Object.is identity; the initial render appears immediately. Required input. */
  public readonly value: InputSignal<T> = input.required<T>();
  /** Enable visual crossfades; defaults to true. False and live reduced-motion preferences show the committed visual immediately. */
  public readonly animated: InputSignal<boolean> = input(true);

  private nextId: number = 0;

  constructor() {
    effect(() => {
      const value = this.value();

      untracked(() => {
        const layers = this.layers();
        const current = layers.at(-1);

        if (current && Object.is(current.value, value)) return;

        const next = layers.find((layer) => Object.is(layer.value, value)) ?? { id: ++this.nextId, value, enter: !!current };

        this.layers.set(current ? [current, next] : [next]);
      });
    });
  }

  protected removeHidden(id: number): void {
    this.layers.update((layers) => layers.filter((layer) => layer.id !== id || layer.id === this.activeId()));
  }
}
