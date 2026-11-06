import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import {
  afterNextRender,
  afterRenderEffect,
  ComponentRef,
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  NgZone,
  output,
  signal,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { measureScrollBoundary, observeScrollBoundary, ResolvableText } from '@filip.mazev/blocks/core';

import { LoadMoreFooter } from '@forms/components/shared/load-more/load-more-footer';
import { ILoadMoreConfig } from '@forms/interfaces/iload-more-config.interface';
import { ILoadMoreContext } from '@forms/interfaces/iload-more-context.interface';
import { ILoadMoreRequest } from '@forms/interfaces/iload-more-request.interface';
import { LoadMoreSource } from '@forms/types/load-more.types';

/** Append to a scroll container, not a native table/list element with restricted children. */
@Directive({ selector: '[bxLoadMore]', exportAs: 'bxLoadMore' })
export class LoadMoreDirective {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly overflowing: WritableSignal<boolean> = signal(false);
  private readonly requested: WritableSignal<boolean> = signal(false);
  private readonly retrying: WritableSignal<boolean> = signal(false);
  private readonly keepVisible: WritableSignal<boolean> = signal(false);

  /** Whether the shared fallback action is visible, allowing the owner to avoid duplicate loading indicators. */
  public readonly actionVisible: Signal<boolean> = computed(
    () =>
      !this.loadMoreSuppressed() &&
      (this.loadMoreHasMore() || !!this.loadMoreError() || (this.keepVisible() && this.loadMoreLoading())) &&
      (this.loadMoreConfig().buttonMode === 'always' || !this.overflowing() || this.keepVisible() || !!this.loadMoreError())
  );

  /** Whether more remote results are available; false suppresses further requests. Defaults to `false`. */
  public readonly loadMoreHasMore: InputSignal<boolean> = input(false);
  /** Whether the current incremental request is pending; keeps the action visible in its disabled busy state. Defaults to `false`. */
  public readonly loadMoreLoading: InputSignal<boolean> = input(false);
  /** Temporarily suppress pagination while the owner replaces results or debounces a search. Defaults to `false`. */
  public readonly loadMoreSuppressed: InputSignal<boolean> = input(false);
  /** Prevent additional requests while preserving the owner's result state. Defaults to `false`. */
  public readonly loadMoreDisabled: InputSignal<boolean> = input(false);
  /** Failed incremental-request state; blocks automatic retries and exposes an explicit retry action. Optional; omission leaves the value undefined. */
  public readonly loadMoreError: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Text, accessibility, and appearance overrides for the shared load-more action. Defaults to an empty configuration. */
  public readonly loadMoreConfig: InputSignal<ILoadMoreConfig> = input<ILoadMoreConfig>({});
  /**
   * Optional custom shared load-more action template; preserve guarded requests and disabled/loading semantics. Optional; omission leaves the value
   * undefined.
   */
  public readonly loadMoreTemplate: InputSignal<TemplateRef<ILoadMoreContext> | undefined> = input<TemplateRef<ILoadMoreContext> | undefined>(undefined);
  /** Items reference or page revision used to acknowledge completion of a guarded load-more request. Optional; omission leaves the value undefined. */
  public readonly loadMoreRevision: InputSignal<unknown> = input<unknown>(undefined);

  /** Emits a guarded consumer-owned incremental request with its scroll, button, or retry source. */
  public readonly loadMore: OutputEmitterRef<ILoadMoreRequest> = output<ILoadMoreRequest>();

  private footer?: ComponentRef<LoadMoreFooter>;
  private wasLoading: boolean = false;
  private previousRevision: unknown;

  constructor() {
    afterNextRender(() => this.mount());

    afterRenderEffect(() => {
      const loading = this.loadMoreLoading();
      const revision = this.loadMoreRevision();

      if ((this.wasLoading && !loading) || (!loading && this.previousRevision !== revision)) this.complete();

      this.wasLoading = loading;
      this.previousRevision = revision;
      this.updateFooter();
    });
  }

  /** Release an outstanding request when the application completes without a loading-state cycle. */
  public complete(): void {
    this.requested.set(false);
    this.retrying.set(false);
    this.keepVisible.set(false);
  }

  /**
   * The shared request guard is also available to custom footer templates.
   *
   * @param source - User/request origin, distinguishing scroll, normal button activation, and explicit retry. Defaults to `'button'`.
   */
  public request(source: LoadMoreSource = 'button'): void {
    if (!this.canRequest(source)) return;

    this.requested.set(true);
    this.retrying.set(!!this.loadMoreError());
    this.keepVisible.set(source !== 'scroll');
    this.loadMore.emit({ source: this.loadMoreError() ? 'retry' : source });
  }

  //#region Helpers

  private canRequest(source: LoadMoreSource): boolean {
    return (
      !this.loadMoreSuppressed() &&
      (this.loadMoreHasMore() || !!this.loadMoreError()) &&
      !this.loadMoreDisabled() &&
      !this.loadMoreLoading() &&
      !this.requested() &&
      (source !== 'scroll' || !this.loadMoreError())
    );
  }

  private mount(): void {
    this.footer = this.viewContainerRef.createComponent(LoadMoreFooter);
    this.nativeElement.append(this.footer.location.nativeElement);
    this.footer.instance.request.subscribe(() => this.request());

    this.ngZone.runOutsideAngular(() => {
      const disconnect = observeScrollBoundary(
        this.nativeElement,
        this.nativeElement,
        () => {
          const footerHeight = (this.footer?.location.nativeElement as HTMLElement | undefined)?.offsetHeight ?? 0;
          const boundary = measureScrollBoundary(this.nativeElement, this.nativeElement, footerHeight);

          if (boundary.distance <= (this.loadMoreConfig().threshold ?? 32) && this.canRequest('scroll')) this.ngZone.run(() => this.request('scroll'));
        },
        () => this.measure()
      );

      this.destroyRef.onDestroy(() => {
        disconnect();
        this.footer?.destroy();
      });
    });

    this.measure();
    this.updateFooter();
  }

  private measure(): void {
    const footerHeight = (this.footer?.location.nativeElement as HTMLElement | undefined)?.offsetHeight ?? 0;
    const { overflowing } = measureScrollBoundary(this.nativeElement, this.nativeElement, footerHeight);

    if (overflowing !== this.overflowing()) this.ngZone.run(() => this.overflowing.set(overflowing));
  }

  private updateFooter(): void {
    if (!this.footer) return;

    const visible = this.actionVisible();
    const footerElement = this.footer.location.nativeElement as HTMLElement;

    if (!visible && footerElement.contains(this.nativeElement.ownerDocument.activeElement)) {
      if (!this.nativeElement.hasAttribute('tabindex')) this.nativeElement.setAttribute('tabindex', '-1');

      this.nativeElement.focus({ preventScroll: true });
    }

    this.footer.setInput('visible', visible);
    this.footer.setInput('loading', this.loadMoreLoading());
    this.footer.setInput('disabled', this.loadMoreDisabled() || (this.requested() && !this.loadMoreLoading()));
    this.footer.setInput('retry', !!this.loadMoreError() || this.retrying());
    this.footer.setInput('error', this.loadMoreError());
    this.footer.setInput('config', this.loadMoreConfig());
    this.footer.setInput('buttonTemplate', this.loadMoreTemplate());
  }

  //#endregion
}
