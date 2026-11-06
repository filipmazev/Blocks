import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

import type { ISidePanelLayout } from '@primitives/interfaces/iside-panel-layout.interface';

import { BX_SIDE_PANEL_LAYOUT } from '@primitives/tokens/side-panel-layout.token';

/** Stable layout bounds for persistent push and overlay panels with adjacent content. */
@Component({
  selector: 'bx-side-panel-layout',
  templateUrl: './side-panel-layout.html',
  styleUrl: './side-panel-layout.scss',
  providers: [
    { provide: BX_SIDE_PANEL_LAYOUT, useFactory: (): ISidePanelLayout => ({ nativeElement: inject<ElementRef<HTMLElement>>(ElementRef).nativeElement }) }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SidePanelLayout {}
