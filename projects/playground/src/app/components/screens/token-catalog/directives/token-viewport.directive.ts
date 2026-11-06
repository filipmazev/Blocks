import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { afterRenderEffect, computed, DestroyRef, Directive, ElementRef, inject, input, signal, untracked } from '@angular/core';

import type { ITokenCatalogChunk } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-chunk.interface';

import { TokenViewportService } from '@playground/components/screens/token-catalog/services/token-viewport.service';

@Directive({
  selector: '[appTokenViewport]',
  exportAs: 'appTokenViewport',
  host: {
    '[style.min-block-size.px]': 'visible() ? null : placeholderHeight()',
    '[attr.tabindex]': 'visible() ? null : 0',
    '[attr.aria-label]': 'label()',
    role: 'group',
    '(focusin)': 'onFocus()',
    '(focusout)': 'onBlur()'
  }
})
export class TokenViewportDirective {
  private readonly destroyRef = inject(DestroyRef);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly tokenViewportService = inject(TokenViewportService);

  private readonly mounted: WritableSignal<boolean> = signal(false);

  protected readonly placeholderHeight: WritableSignal<number> = signal(1);

  public readonly visible: Signal<boolean> = computed(() => !this.enabled() || this.mounted());

  public readonly chunk: InputSignal<ITokenCatalogChunk> = input.required<ITokenCatalogChunk>();
  public readonly compact: InputSignal<boolean> = input(false);
  public readonly enabled: InputSignal<boolean> = input(true);
  public readonly label: InputSignal<string> = input.required<string>();

  private intersecting: boolean = false;
  private rowHeight: number = 0;

  constructor() {
    afterRenderEffect(() => {
      this.chunk();
      this.compact();

      untracked(() => this.measure(this.nativeElement.clientWidth, this.nativeElement.clientHeight));
    });

    afterRenderEffect((onCleanup) => {
      if (!this.enabled()) {
        this.mounted.set(false);

        return;
      }

      const disconnect = this.tokenViewportService.observe(this.nativeElement, {
        intersect: (visible) => {
          this.intersecting = visible;
          this.mounted.set(visible || this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement));
        },
        resize: (width, height) => this.measure(width, height)
      });

      onCleanup(disconnect);
    });
  }

  protected onFocus(): void {
    this.mounted.set(true);
  }

  protected onBlur(): void {
    queueMicrotask(() => {
      if (this.destroyRef.destroyed || this.intersecting || this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)) return;

      this.mounted.set(false);
    });
  }

  //#region Helpers

  private measure(width: number, height: number): void {
    if (width <= 0) return;

    const document = this.nativeElement.ownerDocument;
    const fontSize = Number.parseFloat(document.defaultView?.getComputedStyle(document.documentElement).fontSize ?? '16');
    const gap = (this.compact() ? 0.5 : 1) * fontSize;
    const columnWidth = (this.compact() ? 10 : 15) * fontSize;
    const columns = Math.max(1, Math.floor((width + gap) / (columnWidth + gap)));
    const rows = Math.ceil(this.chunk().entries.length / columns);

    if (this.visible() && height > 0) {
      this.rowHeight = (height + gap) / rows;
      this.placeholderHeight.set(height);
    } else {
      const rowHeight = this.rowHeight || (this.compact() ? 18 : 36) * fontSize;

      this.placeholderHeight.set(Math.max(1, rows * rowHeight - gap));
    }
  }

  //#endregion
}
