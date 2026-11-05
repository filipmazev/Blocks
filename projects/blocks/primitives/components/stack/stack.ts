import type { InputSignal, InputSignalWithTransform } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

import { LayoutAlign, LayoutGap, LayoutJustify, StackDirection } from '@primitives/types/layout.types';

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
  /** Primary layout axis of the stack. Defaults to `'vertical'`. */
  public readonly direction: InputSignal<StackDirection> = input<StackDirection>('vertical');
  /** Shared spacing-scale step between adjacent stack children. Defaults to `4`. */
  public readonly gap: InputSignal<LayoutGap> = input<LayoutGap>(4);
  /** Alignment of children or supporting text on the cross axis. Defaults to `'stretch'`. */
  public readonly align: InputSignal<LayoutAlign> = input<LayoutAlign>('stretch');
  /** Distribution of children along the main stack axis. Defaults to `'start'`. */
  public readonly justify: InputSignal<LayoutJustify> = input<LayoutJustify>('start');
  /** Whether stack children may wrap when the available space is constrained. Defaults to `false`. */
  public readonly wrap: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
}
