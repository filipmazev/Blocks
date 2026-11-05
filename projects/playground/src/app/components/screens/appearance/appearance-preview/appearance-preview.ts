import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, effect, ElementRef, inject, signal, viewChild } from '@angular/core';

import type { IAppearancePreviewParksState } from '@playground/components/screens/appearance/appearance-preview/interfaces/iappearance-preview-parks-state.interface';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { DropdownDirective, Menu, MenuItem, TruncateDirective } from '@filip.mazev/blocks/primitives';

import { PARK_ARTICLES } from './appearance-preview.data';

@Component({
  selector: 'app-appearance-preview',
  imports: [BxSurfaceDirective, Button, Icon, DropdownDirective, Menu, MenuItem, TruncateDirective],
  templateUrl: './appearance-preview.html',
  styleUrl: './appearance-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'data-bx-light-scope': '',
    '(pointerdown)': 'stopScrollHint()',
    '(wheel)': 'stopScrollHint()',
    '(keydown)': 'stopScrollHint()',
    '(focusin)': 'stopScrollHint()'
  }
})
export class AppearancePreview {
  private readonly bxA11yService = inject(BxA11yService);

  private readonly reader: Signal<ElementRef<HTMLElement>> = viewChild.required<ElementRef<HTMLElement>>('reader');

  protected readonly search: WritableSignal<string> = signal('');

  protected readonly saved: WritableSignal<boolean> = signal(false);

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

  private scrollHintCleanup?: () => void;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stopScrollHint());
    effect(() => {
      if (this.bxA11yService.isReducedMotion()) this.stopScrollHint();
    });
    afterNextRender(() => {
      if (this.bxA11yService.isReducedMotion()) return;

      const reader = this.reader().nativeElement;
      const window = reader.ownerDocument.defaultView;

      if (!window) return;

      let timer: number | undefined;
      let frame: number | undefined;

      // Play once when visible, without moving the surrounding page or taking over user scrolling.
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5)) return;

          observer.disconnect();
          timer = window.setTimeout(() => {
            if (reader.scrollTop !== 0 || this.bxA11yService.isReducedMotion()) return;

            const distance = Math.min(280, reader.scrollHeight - reader.clientHeight);

            if (distance <= 0) return;

            const start = window.performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / 2800, 1);

              reader.scrollTop = (distance * (1 - Math.cos(progress * Math.PI * 2))) / 2;

              if (progress < 1) frame = window.requestAnimationFrame(animate);
              else this.stopScrollHint();
            };

            frame = window.requestAnimationFrame(animate);
          }, 900);
        },
        { threshold: 0.5 }
      );

      this.scrollHintCleanup = () => {
        observer.disconnect();
        window.clearTimeout(timer);

        if (frame !== undefined) window.cancelAnimationFrame(frame);
      };

      observer.observe(reader);
    });
  }

  protected stopScrollHint(): void {
    this.scrollHintCleanup?.();
    this.scrollHintCleanup = undefined;
  }

  protected scrollTo(reader: HTMLElement, id?: string): void {
    this.stopScrollHint();

    const target = id ? reader.querySelector<HTMLElement>(`#${id}`) : undefined;

    if (id && !target) return;

    const top = target ? target.getBoundingClientRect().top - reader.getBoundingClientRect().top + reader.scrollTop - 96 : 0;

    reader.scrollTo({ top: Math.max(0, top), behavior: this.bxA11yService.isReducedMotion() ? 'auto' : 'smooth' });
  }
}
