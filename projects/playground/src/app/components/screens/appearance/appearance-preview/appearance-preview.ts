import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input, signal, viewChild } from '@angular/core';

import type { IAppearancePreviewParksState } from '@playground/components/screens/appearance/appearance-preview/interfaces/iappearance-preview-parks-state.interface';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { DropdownDirective, Menu, MenuItem, TruncateDirective } from '@filip.mazev/blocks/primitives';

import { PreviewScrollDirective } from '@playground/directives/preview-scroll/preview-scroll.directive';

import { PARK_ARTICLES } from './appearance-preview.data';

@Component({
  selector: 'app-appearance-preview',
  imports: [BxSurfaceDirective, Button, Icon, DropdownDirective, Menu, MenuItem, TruncateDirective, PreviewScrollDirective],
  templateUrl: './appearance-preview.html',
  styleUrl: './appearance-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'data-bx-light-scope': '',
    '[class.is-showcase]': 'showcase()',
    '(pointerdown)': 'stopScrollHint()',
    '(wheel)': 'stopScrollHint()',
    '(keydown)': 'stopScrollHint()',
    '(focusin)': 'stopScrollHint()'
  }
})
export class AppearancePreview {
  private readonly bxA11yService = inject(BxA11yService);

  private readonly scrollHint: Signal<PreviewScrollDirective> = viewChild.required(PreviewScrollDirective);

  protected readonly search: WritableSignal<string> = signal('');

  protected readonly saved: WritableSignal<boolean> = signal(false);
  protected readonly paused: WritableSignal<boolean> = signal(false);

  protected readonly parks: Signal<
    (
      | {
          readonly id: 'preview-shar-mountain';
          readonly title: 'Šar Mountain';
          readonly shortTitle: 'Šar';
          readonly subtitle: 'High peaks, mountain pastures, and rich forests';
          readonly paragraphs: readonly [
            'Šar Mountain is known for its high peaks, mountain pastures, and rich forests.',
            'A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.'
          ];
          readonly photo: { src: string; srcset: string; width: number; height: number; alt: string };
          readonly caption: 'The mountain landscapes of Šar Mountain.';
          readonly detail: {
            readonly title: 'Bogovinje Lake';
            readonly paragraphs: readonly [
              'One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.',
              'The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.'
            ];
            readonly photo: { src: string; srcset: string; width: number; height: number; alt: string };
            readonly caption: 'The quiet waters of Bogovinje Lake beneath the surrounding peaks.';
          };
        }
      | IAppearancePreviewParksState
    )[]
  > = computed(() => {
    const normalize = (text: string) =>
      text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    const query = normalize(this.search().trim());

    return PARK_ARTICLES.filter((park) =>
      normalize([park.title, park.subtitle, ...park.paragraphs, park.detail.title, ...park.detail.paragraphs].join(' ')).includes(query)
    );
  });

  /** Present the journal as a decorative repeating glass showcase with a pause action. Defaults to false. */
  public readonly showcase: InputSignal<boolean> = input(false);

  protected stopScrollHint(): void {
    if (!this.showcase()) this.scrollHint().stop();
  }

  protected scrollTo(reader: HTMLElement, id?: string): void {
    this.stopScrollHint();

    const target = id ? reader.querySelector<HTMLElement>(`#${id}`) : undefined;

    if (id && !target) return;

    const top = target ? target.getBoundingClientRect().top - reader.getBoundingClientRect().top + reader.scrollTop - 96 : 0;

    reader.scrollTo({ top: Math.max(0, top), behavior: this.bxA11yService.isReducedMotion() ? 'auto' : 'smooth' });
  }
}
