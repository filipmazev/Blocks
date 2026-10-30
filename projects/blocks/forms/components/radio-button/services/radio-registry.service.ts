import { Injectable } from '@angular/core';
import type { Radio } from '../radio-button';

@Injectable({ providedIn: 'root' })
export class RadioRegistry {
  public readonly radios = new Set<Radio>();

  public select(radio: Radio): void {
    for (const peer of this.radios) {
      if (peer !== radio && peer.sharesGroup(radio)) peer.writeValue(radio.value());
    }
  }
}
