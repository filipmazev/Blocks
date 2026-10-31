import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LayoutAlign, LayoutGap, LayoutJustify, StackDirection } from '../shared/types/layout.types';

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
  public readonly direction = input<StackDirection>('vertical');
  public readonly gap = input<LayoutGap>(4);
  public readonly align = input<LayoutAlign>('stretch');
  public readonly justify = input<LayoutJustify>('start');
  public readonly wrap = input(false, { transform: booleanAttribute });
}
