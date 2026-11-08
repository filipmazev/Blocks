import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';

import { Tab } from '@primitives/components/tab/tab';
import { Tabs } from '@primitives/components/tabs/tabs';
import { TabContentDirective } from '@primitives/directives/tab-content/tab-content.directive';

@Component({
  selector: 'app-tabs-test-host',
  imports: [Tabs, Tab, TabContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bx-tabs [(selectedValue)]="selected">
      <bx-tab label="One" value="one"
        ><ng-template bxTabContent><input aria-label="Panel note" /></ng-template
      ></bx-tab>
      <bx-tab label="Unavailable" value="disabled" [disabled]="true" />
      @if (showLast()) {
        <bx-tab label="A much longer final tab" value="last"><p>Last panel</p></bx-tab>
      }
    </bx-tabs>
  `
})
export class TabsTestHost {
  /** Application-controlled tab selection under test. */
  public readonly selected: WritableSignal<string | null> = signal('one');

  /** Controls insertion and removal of the selected tab. */
  public readonly showLast: WritableSignal<boolean> = signal(true);

  /** Tabs instance used for programmatic selection. */
  public readonly tabs: Signal<Tabs> = viewChild.required(Tabs);
}
