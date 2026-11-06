import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { SidePanelBreakpoints, SidePanelPlacement } from '@filip.mazev/blocks/primitives';

import { Button, InputField, Select, SlideToggle } from '@filip.mazev/blocks/forms';
import { SidePanel, SidePanelBannerDirective, SidePanelFooterDirective, SidePanelHeaderDirective, SidePanelLayout } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-side-panel-examples',
  imports: [
    FormsModule,
    Button,
    InputField,
    Select,
    SlideToggle,
    SidePanel,
    SidePanelLayout,
    SidePanelHeaderDirective,
    SidePanelFooterDirective,
    SidePanelBannerDirective
  ],
  templateUrl: './side-panel-examples.html',
  styleUrl: './side-panel-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanelExamples {
  protected readonly panelBreakpoints: SidePanelBreakpoints = { '2xl': 'push' };
  protected readonly placements: readonly IBxSelectOption<SidePanelPlacement>[] = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' }
  ];

  protected readonly opened: WritableSignal<boolean> = signal(false);
  protected readonly contained: WritableSignal<boolean> = signal(true);
  protected readonly backdrop: WritableSignal<boolean> = signal(false);

  protected readonly placement: WritableSignal<SidePanelPlacement> = signal<SidePanelPlacement>('right');

  protected readonly panelWidth: WritableSignal<number> = signal(320);

  protected readonly note: WritableSignal<string> = signal('This content survives closing the panel.');

  protected readonly clicks: WritableSignal<number> = signal(0);

  protected readonly width: Signal<number> = computed(() => Math.max(240, Math.min(640, Number(this.panelWidth()) || 320)));

  protected resizeWidth(value: number | string): void {
    const width = Number(value);

    if (Number.isFinite(width)) this.panelWidth.set(width);
  }

  protected pageAction(): void {
    this.clicks.update((value) => value + 1);
  }
}
