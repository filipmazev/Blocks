import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import {
  afterNextRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  NgZone,
  signal,
  untracked,
  viewChild
} from '@angular/core';

import { BxA11yService, findScrollContainer } from '@filip.mazev/blocks/core';
import { subscribeFrame } from '@filip.mazev/blocks/effects/runtime';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { TooltipDirective } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-scroll-to-top',
  imports: [Button, Icon, TooltipDirective],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTop {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly bxA11yService = inject(BxA11yService);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly position: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('position');

  protected readonly visible: WritableSignal<boolean> = signal(false);

  protected readonly label: Signal<string> = computed(() => (this.boundary() ? 'Scroll to catalog top' : 'Scroll to top'));

  public readonly container: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  public readonly boundary: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  public readonly suppressed: InputSignal<boolean> = input(false);

  private mounted: boolean = false;
  private target: HTMLElement | undefined;
  private frame: number | undefined;
  private disconnect: (() => void) | undefined;
  private cancelScroll: (() => void) | undefined;

  constructor() {
    afterNextRender(() => {
      this.mounted = true;
      this.connect();
    });
    afterRenderEffect(() => {
      this.container();
      this.boundary();

      untracked(() => {
        if (this.mounted) this.connect();
      });
    });
    this.destroyRef.onDestroy(() => {
      this.cancelScroll?.();
      this.disconnect?.();
      this.nativeElement.ownerDocument.defaultView?.cancelAnimationFrame(this.frame ?? 0);
    });
  }

  protected scrollToTop(): void {
    this.cancelScroll?.();

    const target = this.target;

    if (!target) return;

    const boundary = this.boundary() ?? this.nativeElement.closest<HTMLElement>('main');
    const start = target.scrollTop;

    (boundary?.hasAttribute('tabindex') ? boundary : target).focus({ preventScroll: true });

    // Virtual row measurements can interrupt native smooth scrolling. Own this bounded trip and
    // remeasure its destination each frame, while leaving user scrolling free to cancel it.
    this.ngZone.runOutsideAngular(() => {
      const document = target.ownerDocument;
      const cancel = () => this.cancelScroll?.();
      const events = ['wheel', 'touchstart', 'pointerdown', 'keydown'];

      let elapsed = 0;
      let settled = 0;

      const stop = subscribeFrame((delta) => {
        elapsed += delta;

        const progress = this.bxA11yService.isReducedMotion() ? 1 : Math.min(1, elapsed / 0.45);
        const destination = Math.max(0, Math.min(target.scrollHeight - target.clientHeight, target.scrollTop - this.getScrollDistance()));
        const top = start + (destination - start) * (1 - (1 - progress) ** 3);

        target.scrollTo({ top, behavior: 'instant' });
        settled = progress === 1 && Math.abs(target.scrollTop - destination) < 1 ? settled + 1 : 0;

        if (settled >= 3 || elapsed >= 0.65) {
          cancel();

          return false;
        }

        return true;
      });

      for (const event of events) document.addEventListener(event, cancel, { capture: true, passive: true });

      this.cancelScroll = () => {
        stop();

        for (const event of events) document.removeEventListener(event, cancel, true);

        this.cancelScroll = undefined;
      };
    });
  }

  //#region Helpers

  private connect(): void {
    this.cancelScroll?.();
    this.disconnect?.();
    this.target = this.container() ?? findScrollContainer(this.nativeElement);

    if (!this.target) return;

    const target = this.target;
    const document = target.ownerDocument;
    const win = document.defaultView;

    if (!win) return;

    this.ngZone.runOutsideAngular(() => {
      const scrollTarget = target === document.scrollingElement ? document : target;
      const onScroll = () => this.schedule();
      const align = () => {
        this.align();
        this.schedule();
      };

      const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(align);

      resize?.observe(target);

      const boundary = this.boundary();

      if (boundary) {
        resize?.observe(boundary);

        if (boundary.parentElement) resize?.observe(boundary.parentElement);
      }

      scrollTarget.addEventListener('scroll', onScroll, { passive: true });
      win.addEventListener('resize', align);
      this.disconnect = () => {
        resize?.disconnect();
        scrollTarget.removeEventListener('scroll', onScroll);
        win.removeEventListener('resize', align);
      };

      this.align();
    });
    this.schedule();
  }

  private align(): void {
    const position = this.position()?.nativeElement;
    const boundary = this.boundary();
    const target = this.target;
    const win = this.nativeElement.ownerDocument.defaultView;

    if (!position || !target || !win) return;

    let parent = this.nativeElement.parentElement;

    while (parent && (win.getComputedStyle(parent).position === 'static' || win.getComputedStyle(parent).display === 'contents')) parent = parent.parentElement;

    if (!parent) return;

    const parentBounds = parent.getBoundingClientRect();
    const viewportBounds = target.getBoundingClientRect();
    const contentBounds = boundary?.getBoundingClientRect() ?? viewportBounds;
    const right = Math.max(viewportBounds.left, Math.min(contentBounds.right, viewportBounds.right));
    const inset = `${Math.max(0, parentBounds.right - right)}px`;

    if (position.style.right !== inset) position.style.right = inset;
  }

  private getScrollDistance(): number {
    const target = this.target;
    const boundary = this.boundary();

    if (!target) return 0;

    if (!boundary) return target.scrollTop;

    const viewportTop = target === target.ownerDocument.scrollingElement ? 0 : target.getBoundingClientRect().top + target.clientTop;

    return viewportTop - boundary.getBoundingClientRect().top;
  }

  private schedule(): void {
    if (this.frame !== undefined || this.destroyRef.destroyed) return;

    this.ngZone.runOutsideAngular(() => {
      this.frame = this.nativeElement.ownerDocument.defaultView?.requestAnimationFrame(() => {
        this.frame = undefined;

        const visible = this.getScrollDistance() > 400;

        if (visible !== this.visible()) this.ngZone.run(() => this.visible.set(visible));
      });
    });
  }

  //#endregion
}
