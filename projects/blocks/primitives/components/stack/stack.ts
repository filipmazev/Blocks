import type { InputSignal, InputSignalWithTransform } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

import { LayoutAlign, LayoutGap, LayoutJustify, StackDirection } from '@primitives/components/shared/types/layout.types';

@Component({
  selector: 'bx-stack',
  template: '<ng-content />',
  styleUrl: './stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-direction]': 'direction()',
    '[attr.data-gap]': 'gap()',
    '[style.align-items]': 'align()',
    '[style.justify-content]': 'justify() === "between" ? "space-between" : justify()',
    '[class.is-wrapping]': 'wrap()'
  }
})
export class Stack {
  public readonly direction: InputSignal<StackDirection> = input<StackDirection>('vertical');
  public readonly gap: InputSignal<LayoutGap> = input<LayoutGap>(4);
  public readonly align: InputSignal<LayoutAlign> = input<LayoutAlign>('stretch');
  public readonly justify: InputSignal<LayoutJustify> = input<LayoutJustify>('start');
  public readonly wrap: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
}
