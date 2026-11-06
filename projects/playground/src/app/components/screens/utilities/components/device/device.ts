import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, DOCUMENT, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { fromEvent } from 'rxjs';

import type { IDeviceState } from '@filip.mazev/blocks/core';

import { DeviceTypeService } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Grid, Stack, Tag } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-device',
  imports: [Alert, Button, Card, Grid, Stack, Tag],
  templateUrl: './device.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Device {
  private readonly destroyRef = inject(DestroyRef);
  private readonly deviceTypeService = inject(DeviceTypeService);
  private readonly document = inject(DOCUMENT);

  protected readonly deviceState: WritableSignal<IDeviceState> = signal(this.deviceTypeService.getDeviceState());

  protected readonly deviceCategory: Signal<string> = computed(() => {
    const state = this.deviceState();

    return state.isTablet ? 'Tablet' : state.isMobile ? 'Mobile' : 'Desktop';
  });
  protected readonly orientation: Signal<string> = computed(() => (this.deviceState().isLandscapeOrientation() ? 'Landscape' : 'Portrait'));

  constructor() {
    afterNextRender(() => {
      const orientation = this.document.defaultView?.screen.orientation;

      this.refreshDevice();

      if (orientation)
        fromEvent(orientation, 'change')
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => this.refreshDevice());
    });
  }

  protected refreshDevice(): void {
    this.deviceState.set(this.deviceTypeService.getDeviceState());
  }
}
