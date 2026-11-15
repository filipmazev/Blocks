import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { VisualTransition } from '@effects/components/visual-transition/visual-transition';

@Component({
  selector: 'bx-visual-transition-test-host',
  imports: [VisualTransition],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:
    '<bx-visual-transition [value]="value()" [animated]="animated()"><ng-template let-value><span>{{ value }}</span></ng-template></bx-visual-transition>'
})
export class VisualTransitionTestHost {
  /** Live animation policy exercised by the visual transition tests. */
  public readonly animated: WritableSignal<boolean> = signal(true);

  /** Committed visual value changed by the transition tests. */
  public readonly value: WritableSignal<string> = signal('upload');
}
