import type { Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { paintMotionStyles } from '@filip.mazev/blocks/effects/runtime';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { TooltipDirective } from '@filip.mazev/blocks/primitives';

import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { STUDIO_COLOR_ROLES } from '@playground/shared/constants/theme-studio-showcase.constants';

/** Local theme samples with a pointer, touch, and keyboard accessible opposite-mode window. */
@Component({
  selector: 'app-theme-swatch-preview',
  imports: [NgTemplateOutlet, BxSurfaceDirective, Button, Icon, TooltipDirective],
  templateUrl: './theme-swatch-preview.html',
  styleUrl: './theme-swatch-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwatchPreview {
  private readonly themeStudioService = inject(ThemeStudioService);

  private readonly gallery: Signal<ElementRef<HTMLElement>> = viewChild.required('gallery', { read: ElementRef<HTMLElement> });

  protected readonly roles: ReadonlyArray<(typeof STUDIO_COLOR_ROLES)[number]> = [...STUDIO_COLOR_ROLES].reverse();

  protected readonly active: WritableSignal<boolean> = signal(false);
  protected readonly pinned: WritableSignal<boolean> = signal(false);

  protected readonly opposite: Signal<'light' | 'dark'> = computed(() => this.themeStudioService.oppositeMode());
  protected readonly label: Signal<string> = computed(() => `Peek at the ${this.opposite()} theme`);
  protected readonly oppositeStyles: Signal<Readonly<Record<string, string>>> = computed(() => {
    const mode = this.opposite();
    const names = ['--bx-bg-canvas', '--bx-border-default', '--bx-text-primary', ...this.roles.flatMap((role) => [role.token, role.textColorToken])] as const;

    return Object.fromEntries(names.map((name) => [name, this.themeStudioService.effective(name, mode)]).filter(([, value]) => !!value));
  });

  private x: number = 0;
  private y: number = 0;

  protected move(event: PointerEvent): void {
    if (event.pointerType === 'touch' && !this.pinned()) return;

    const gallery = this.gallery().nativeElement;
    const rect = gallery.getBoundingClientRect();

    this.setPoint(event.clientX - rect.left, event.clientY - rect.top);
    this.active.set(true);
  }

  protected leave(): void {
    if (!this.pinned()) this.active.set(false);
  }

  protected toggle(): void {
    const pinned = !this.pinned();
    const gallery = this.gallery().nativeElement;

    this.pinned.set(pinned);
    this.active.set(pinned);
    this.setPoint(gallery.clientWidth / 2, gallery.clientHeight / 2);
  }

  protected keydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.pinned.set(false);
      this.active.set(false);

      return;
    }

    if (!event.key.startsWith('Arrow')) return;

    event.preventDefault();

    if (!this.pinned()) this.toggle();

    const x = event.key === 'ArrowLeft' ? -24 : event.key === 'ArrowRight' ? 24 : 0;
    const y = event.key === 'ArrowUp' ? -24 : event.key === 'ArrowDown' ? 24 : 0;

    this.setPoint(this.x + x, this.y + y);
  }

  //#region Helpers

  private setPoint(x: number, y: number): void {
    const gallery = this.gallery().nativeElement;

    this.x = Math.max(0, Math.min(gallery.clientWidth, x));
    this.y = Math.max(0, Math.min(gallery.clientHeight, y));
    paintMotionStyles(gallery, { '--loupe-x': `${this.x}px`, '--loupe-y': `${this.y}px` });
  }

  //#endregion
}
