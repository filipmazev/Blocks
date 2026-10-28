import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
import { PARK_ARTICLES } from './appearance-preview.data';

@Component({
  selector: 'app-appearance-preview',
  imports: [BxSurfaceDirective, Button, Icon, DropdownDirective, Menu, MenuItem],
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
  private readonly a11y = inject(BxA11yService);
  private readonly reader = viewChild.required<ElementRef<HTMLElement>>('reader');
  protected readonly search = signal('');
  protected readonly saved = signal(false);
  protected readonly parks = computed(() => {
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
      if (this.a11y.isReducedMotion()) this.stopScrollHint();
    });
    afterNextRender(() => {
      if (this.a11y.isReducedMotion()) return;
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
            if (reader.scrollTop !== 0 || this.a11y.isReducedMotion()) return;
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
    reader.scrollTo({ top: Math.max(0, top), behavior: this.a11y.isReducedMotion() ? 'auto' : 'smooth' });
  }
}
