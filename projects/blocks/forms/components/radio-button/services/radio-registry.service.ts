import { Injectable } from '@angular/core';

import type { Radio } from '@forms/components/radio-button/radio-button';

@Injectable({ providedIn: 'root' })
export class RadioRegistry {
  public readonly radios: Set<Radio> = new Set<Radio>();

  public select(radio: Radio): void {
    for (const peer of this.radios) {
      if (peer !== radio && peer.sharesGroup(radio)) peer.writeValue(radio.value());
    }
  }
}
