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
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);
  private readonly clipped = signal(false);
  private readonly content = signal('');
  /** Enables single-line ellipsis and measurement. Defaults to true. */
  public readonly enabled = input(true, { alias: 'bxTruncate', transform: booleanAttribute });
  /** Whether the rendered content currently overflows its visible box. False during server rendering. */
  public readonly truncated = this.clipped.asReadonly();
  /** Current rendered text, or a native input's value/placeholder, for custom feedback and projected content. */
  public readonly text = this.content.asReadonly();
  /** Emits only when the measured truncation state changes. */
  public readonly truncatedChange = output<boolean>();

  private rendered = false;
  private frame?: number;
  private resize?: ResizeObserver;
  private mutations?: MutationObserver;
  private listeners?: AbortController;
  private textContext?: CanvasRenderingContext2D | null;

  constructor() {
    afterNextRender(() => this.observeLayout());
    afterEveryRender(() => this.scheduleMeasure());
    this.destroyRef.onDestroy(() => {
      if (this.frame !== undefined) this.element.ownerDocument.defaultView?.cancelAnimationFrame(this.frame);

      this.resize?.disconnect();
      this.mutations?.disconnect();
      this.listeners?.abort();
    });
  }

  /** Rechecks after an application-owned layout or style update outside Angular rendering. */
  public refresh(): void {
    if (!this.rendered || this.destroyRef.destroyed) return;

    const text =
      this.element.tagName === 'INPUT'
        ? (this.element as HTMLInputElement).value || (this.element as HTMLInputElement).placeholder
        : (this.element.textContent ?? '');
    const clipped = this.enabled() && this.element.getClientRects().length > 0 && this.measureOverflow(text);

    if (clipped === this.clipped() && text === this.content()) return;

    this.zone.run(() => {
      this.content.set(text);

      if (clipped !== this.clipped()) {
        this.clipped.set(clipped);
        this.truncatedChange.emit(clipped);
      }
    });
  }

  //#region Helpers

  private measureOverflow(text: string): boolean {
    if (this.element.tagName !== 'INPUT') {
      return this.element.scrollWidth > this.element.clientWidth || this.element.scrollHeight > this.element.clientHeight;
    }

    if (!text) return false;

    // Native input values are not DOM text nodes and scrollWidth is inconsistent across engines.
    const style = this.element.ownerDocument.defaultView?.getComputedStyle(this.element);
    this.textContext ??= this.element.ownerDocument.createElement('canvas').getContext('2d');

    if (!style || !this.textContext) return this.element.scrollWidth > this.element.clientWidth;

    this.textContext.font = style.font || `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const letterSpacing = parseFloat(style.letterSpacing) || 0;
    const wordSpacing = parseFloat(style.wordSpacing) || 0;
    const width = this.textContext.measureText(text).width + letterSpacing * Math.max(0, [...text].length - 1) + wordSpacing * (text.match(/\s/g)?.length ?? 0);
    const available = this.element.clientWidth - (parseFloat(style.paddingInlineStart) || 0) - (parseFloat(style.paddingInlineEnd) || 0);

    return width > available + 0.5;
  }

  private observeLayout(): void {
    const view = this.element.ownerDocument.defaultView;

    if (!view) return;

    this.rendered = true;
    this.zone.runOutsideAngular(() => {
      if (typeof ResizeObserver !== 'undefined') {
        this.resize = new ResizeObserver(() => this.scheduleMeasure());
        this.resize.observe(this.element);
      }

      if (typeof MutationObserver !== 'undefined') {
        this.mutations = new MutationObserver(() => this.scheduleMeasure());
        this.mutations.observe(this.element, { childList: true, characterData: true, subtree: true });
      }

      const listeners = new AbortController();
      this.listeners = listeners;
      const options = { passive: true, signal: listeners.signal };
      view.addEventListener('resize', () => this.scheduleMeasure(), options);
      view.visualViewport?.addEventListener('resize', () => this.scheduleMeasure(), options);
      const fonts = this.element.ownerDocument.fonts;
      fonts?.addEventListener('loadingdone', () => this.scheduleMeasure(), options);
      void fonts?.ready.then(() => this.scheduleMeasure());
      this.scheduleMeasure();
    });
  }

  private scheduleMeasure(): void {
    const view = this.element.ownerDocument.defaultView;

    if (!this.rendered || this.destroyRef.destroyed || !view || this.frame !== undefined) return;

    this.zone.runOutsideAngular(() => {
      this.frame = view.requestAnimationFrame(() => {
        this.frame = undefined;
        this.refresh();
      });
    });
  }

  //#endregion
}
