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
import { ResolvableText } from '@filip.mazev/blocks/core';
import { LoadMoreFooter } from '../components/shared/load-more/load-more-footer';
import { ILoadMoreConfig } from '../components/shared/load-more/interfaces/iload-more-config.interface';
import { ILoadMoreContext } from '../components/shared/load-more/interfaces/iload-more-context.interface';
import { ILoadMoreRequest } from '../components/shared/load-more/interfaces/iload-more-request.interface';
import { LoadMoreSource } from '../components/shared/load-more/types/load-more.types';

/** Append to a scroll container, not a native table/list element with restricted children. */
@Directive({ selector: '[bxLoadMore]', exportAs: 'bxLoadMore' })
export class LoadMoreDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly views = inject(ViewContainerRef);
  private readonly zone = inject(NgZone);
  private readonly destroy = inject(DestroyRef);
  private readonly overflowing = signal(false);
  private readonly requested = signal(false);
  private readonly retrying = signal(false);
  private readonly keepVisible = signal(false);

  public readonly loadMoreHasMore = input(false);
  public readonly loadMoreLoading = input(false);
  public readonly loadMoreSuppressed = input(false);
  public readonly loadMoreDisabled = input(false);
  public readonly loadMoreError = input<ResolvableText | undefined>(undefined);
  public readonly loadMoreConfig = input<ILoadMoreConfig>({});
  public readonly loadMoreTemplate = input<TemplateRef<ILoadMoreContext> | undefined>(undefined);
  public readonly loadMoreRevision = input<unknown>(undefined);
  public readonly loadMore = output<ILoadMoreRequest>();

  public readonly actionVisible = computed(
    () =>
      !this.loadMoreSuppressed() &&
      (this.loadMoreHasMore() || !!this.loadMoreError() || (this.keepVisible() && this.loadMoreLoading())) &&
      (this.loadMoreConfig().buttonMode === 'always' || !this.overflowing() || this.keepVisible() || !!this.loadMoreError())
  );

  private footer?: ComponentRef<LoadMoreFooter>;
  private wasLoading = false;
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

  /** The shared request guard is also available to custom footer templates. */
  public request(source: LoadMoreSource = 'button'): void {
    if (this.loadMoreSuppressed()) return;
    if ((!this.loadMoreHasMore() && !this.loadMoreError()) || this.loadMoreDisabled() || this.loadMoreLoading() || this.requested()) return;
    if (source === 'scroll' && this.loadMoreError()) return;

    this.requested.set(true);
    this.retrying.set(!!this.loadMoreError());
    this.keepVisible.set(source !== 'scroll');
    this.loadMore.emit({ source: this.loadMoreError() ? 'retry' : source });
  }

  //#region Helpers

  private mount(): void {
    this.footer = this.views.createComponent(LoadMoreFooter);
    this.host.append(this.footer.location.nativeElement);
    this.footer.instance.request.subscribe(() => this.request());
    const measure = () => this.measure();
    const onScroll = () => {
      const footerHeight = (this.footer?.location.nativeElement as HTMLElement | undefined)?.offsetHeight ?? 0;
      const contentHeight = this.host.scrollHeight - footerHeight;

      if (this.host.scrollTop + this.host.clientHeight >= contentHeight - (this.loadMoreConfig().threshold ?? 32)) this.zone.run(() => this.request('scroll'));
    };

    this.zone.runOutsideAngular(() => {
      const resize = new ResizeObserver(measure);
      const observeContent = () => {
        for (const child of Array.from(this.host.children)) {
          if (child !== this.footer?.location.nativeElement) resize.observe(child);
        }

        this.measure();
      };
      const mutation = new MutationObserver(observeContent);
      resize.observe(this.host);
      observeContent();
      mutation.observe(this.host, { childList: true, subtree: true, characterData: true });
      this.host.addEventListener('scroll', onScroll, { passive: true });
      this.host.ownerDocument.defaultView?.addEventListener('resize', measure);
      this.host.ownerDocument.defaultView?.visualViewport?.addEventListener('resize', measure);

      this.destroy.onDestroy(() => {
        resize.disconnect();
        mutation.disconnect();
        this.host.removeEventListener('scroll', onScroll);
        this.host.ownerDocument.defaultView?.removeEventListener('resize', measure);
        this.host.ownerDocument.defaultView?.visualViewport?.removeEventListener('resize', measure);
        this.footer?.destroy();
      });
    });

    this.measure();
    this.updateFooter();
  }

  private measure(): void {
    const footerHeight = (this.footer?.location.nativeElement as HTMLElement | undefined)?.offsetHeight ?? 0;
    const overflowing = this.host.scrollHeight - footerHeight > this.host.clientHeight + 1;

    if (overflowing !== this.overflowing()) this.zone.run(() => this.overflowing.set(overflowing));
  }

  private updateFooter(): void {
    if (!this.footer) return;

    const visible = this.actionVisible();
    const footerElement = this.footer.location.nativeElement as HTMLElement;

    if (!visible && footerElement.contains(this.host.ownerDocument.activeElement)) {
      if (!this.host.hasAttribute('tabindex')) this.host.setAttribute('tabindex', '-1');
      this.host.focus({ preventScroll: true });
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
