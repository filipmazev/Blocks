import type { Signal, TemplateRef, WritableSignal } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, viewChild, ViewContainerRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import type { BxPlacement, OverlayOriginTracker } from '@filip.mazev/blocks/core';

import {
  BxOverlayPositionService,
  inheritOverlayTheme,
  isOverlayOriginVisible,
  trackOverlayOrigin,
  uuidv4,
  WindowDimensionsService
} from '@filip.mazev/blocks/core';
import { Button, Checkbox, Select } from '@filip.mazev/blocks/forms';
import { Alert, Card, Stack } from '@filip.mazev/blocks/primitives';

import { UTILITY_PLACEMENTS } from '@playground/components/screens/utilities/constants/utilities.constants';

@Component({
  selector: 'app-overlay-positioning',
  imports: [Alert, Button, Card, Checkbox, RouterLink, Select, Stack],
  templateUrl: './overlay-positioning.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayPositioning {
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly overlayTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('overlayTemplate');

  protected readonly placements: typeof UTILITY_PLACEMENTS = UTILITY_PLACEMENTS;
  protected readonly overlayId: string = 'utilities-overlay-' + uuidv4();

  protected readonly overlayOpen: WritableSignal<boolean> = signal(false);
  protected readonly useTopLayer: WritableSignal<boolean> = signal(false);

  protected readonly placement: WritableSignal<BxPlacement> = signal('bottom');

  private overlayRef: OverlayRef | undefined;
  private disconnectOrigin: OverlayOriginTracker | undefined;
  private disconnectTheme: (() => void) | undefined;

  constructor() {
    this.destroyRef.onDestroy(() => this.closeOverlay());
  }

  protected setPlacement(placement: BxPlacement | null): void {
    this.closeOverlay();
    this.placement.set(placement ?? 'bottom');
  }

  protected setTopLayer(enabled: boolean): void {
    this.closeOverlay();
    this.useTopLayer.set(enabled);
  }

  protected toggleOverlay(event: MouseEvent): void {
    if (this.overlayOpen()) {
      this.closeOverlay();

      return;
    }

    const origin = event.currentTarget;
    const template = this.overlayTemplate();

    if (!(origin instanceof HTMLElement) || !template || !this.windowDimensionsService.isBrowser || !isOverlayOriginVisible(origin)) return;

    const overlayRef = this.overlay.create({
      usePopover: this.useTopLayer(),
      positionStrategy: this.bxOverlayPositionService.getElementStrategy(origin, this.placement()),
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    this.overlayRef = overlayRef;
    this.overlayOpen.set(true);
    origin.focus({ preventScroll: true });

    const view = overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));

    view.detectChanges();
    this.disconnectTheme = inheritOverlayTheme(origin, overlayRef.overlayElement);
    this.disconnectOrigin = trackOverlayOrigin(overlayRef, origin, { onOriginHidden: () => this.closeOverlay() });
    overlayRef
      .outsidePointerEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((outsideEvent) => {
        if (outsideEvent.target instanceof Node && origin.contains(outsideEvent.target)) return;

        this.closeOverlay();
      });
    overlayRef
      .keydownEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          this.closeOverlay();
        }
      });
  }

  protected closeOverlay(): void {
    this.disconnectOrigin?.();
    this.disconnectTheme?.();
    this.overlayRef?.dispose();
    this.disconnectOrigin = undefined;
    this.disconnectTheme = undefined;
    this.overlayRef = undefined;
    this.overlayOpen.set(false);
  }
}
