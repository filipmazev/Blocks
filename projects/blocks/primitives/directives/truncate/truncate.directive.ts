import type { InputSignalWithTransform, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { afterEveryRender, afterNextRender, booleanAttribute, DestroyRef, Directive, ElementRef, inject, input, NgZone, output, signal } from '@angular/core';

/** Single-line ellipsis styling and reactive measurement of the rendered text. */
@Directive({
  selector: '[bxTruncate]',
  exportAs: 'bxTruncate',
  host: {
    '[style.display]': 'enabled() ? "block" : null',
    '[class.bx-truncate]': 'enabled()'
  }
})
export class TruncateDirective {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  private readonly clipped: WritableSignal<boolean> = signal(false);

  private readonly content: WritableSignal<string> = signal('');

  /** Whether the rendered content currently overflows its visible box. False during server rendering. */
  public readonly truncated: Signal<boolean> = this.clipped.asReadonly();
  /** Current rendered text, or a native input's value/placeholder, for custom feedback and projected content. */
  public readonly text: Signal<string> = this.content.asReadonly();

  /** Enables single-line ellipsis and measurement. Defaults to true. */
  public readonly enabled: InputSignalWithTransform<boolean, unknown> = input(true, { alias: 'bxTruncate', transform: booleanAttribute });

  /** Emits only when the measured truncation state changes. */
  public readonly truncatedChange: OutputEmitterRef<boolean> = output<boolean>();

  private rendered: boolean = false;
  private frame?: number;
  private resize?: ResizeObserver;
  private mutations?: MutationObserver;
  private listeners?: AbortController;
  private textContext?: CanvasRenderingContext2D | null;

  constructor() {
    afterNextRender(() => this.observeLayout());
    afterEveryRender(() => this.scheduleMeasure());
    this.destroyRef.onDestroy(() => {
      if (this.frame !== undefined) this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.frame);

      this.resize?.disconnect();
      this.mutations?.disconnect();
      this.listeners?.abort();
    });
  }

  /** Rechecks after an application-owned layout or style update outside Angular rendering. */
  public refresh(): void {
    if (!this.rendered || this.destroyRef.destroyed) return;

    const text =
      this.nativeElement.tagName === 'INPUT'
        ? (this.nativeElement as HTMLInputElement).value || (this.nativeElement as HTMLInputElement).placeholder
        : (this.nativeElement.textContent ?? '');
    const clipped = this.enabled() && this.nativeElement.getClientRects().length > 0 && this.measureOverflow(text);

    if (clipped === this.clipped() && text === this.content()) return;

    this.ngZone.run(() => {
      this.content.set(text);

      if (clipped !== this.clipped()) {
        this.clipped.set(clipped);
        this.truncatedChange.emit(clipped);
      }
    });
  }

  //#region Helpers

  private measureOverflow(text: string): boolean {
    if (this.nativeElement.tagName !== 'INPUT') {
      return this.nativeElement.scrollWidth > this.nativeElement.clientWidth || this.nativeElement.scrollHeight > this.nativeElement.clientHeight;
    }

    if (!text) return false;

    // Native input values are not DOM text nodes and scrollWidth is inconsistent across engines.
    const style = this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement);

    this.textContext ??= this.nativeElement.ownerDocument.createElement('canvas').getContext('2d');

    if (!style || !this.textContext) return this.nativeElement.scrollWidth > this.nativeElement.clientWidth;

    this.textContext.font = style.font || `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    const letterSpacing = parseFloat(style.letterSpacing) || 0;
    const wordSpacing = parseFloat(style.wordSpacing) || 0;
    const width = this.textContext.measureText(text).width + letterSpacing * Math.max(0, [...text].length - 1) + wordSpacing * (text.match(/\s/g)?.length ?? 0);
    const available = this.nativeElement.clientWidth - (parseFloat(style.paddingInlineStart) || 0) - (parseFloat(style.paddingInlineEnd) || 0);

    return width > available + 0.5;
  }

  private observeLayout(): void {
    const view = this.nativeElement.ownerDocument.defaultView;

    if (!view) return;

    this.rendered = true;
    this.ngZone.runOutsideAngular(() => {
      if (typeof ResizeObserver !== 'undefined') {
        this.resize = new ResizeObserver(() => this.scheduleMeasure());
        this.resize.observe(this.nativeElement);
      }

      if (typeof MutationObserver !== 'undefined') {
        this.mutations = new MutationObserver(() => this.scheduleMeasure());
        this.mutations.observe(this.nativeElement, { childList: true, characterData: true, subtree: true });
      }

      const listeners = new AbortController();

      this.listeners = listeners;

      const options = { passive: true, signal: listeners.signal };

      view.addEventListener('resize', () => this.scheduleMeasure(), options);
      view.visualViewport?.addEventListener('resize', () => this.scheduleMeasure(), options);

      const fonts = this.nativeElement.ownerDocument.fonts;

      fonts?.addEventListener('loadingdone', () => this.scheduleMeasure(), options);
      void fonts?.ready.then(() => this.scheduleMeasure());
      this.scheduleMeasure();
    });
  }

  private scheduleMeasure(): void {
    const view = this.nativeElement.ownerDocument.defaultView;

    if (!this.rendered || this.destroyRef.destroyed || !view || this.frame !== undefined) return;

    this.ngZone.runOutsideAngular(() => {
      this.frame = view.requestAnimationFrame(() => {
        this.frame = undefined;
        this.refresh();
      });
    });
  }

  //#endregion
}
