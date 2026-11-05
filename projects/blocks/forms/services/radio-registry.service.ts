import { Injectable } from '@angular/core';

import type { Radio } from '@forms/components/radio-button/radio-button';

@Injectable({ providedIn: 'root' })
export class RadioRegistry {
  /** Registered radio controls used to enforce selection within matching native/form groups. */
  public readonly radios: Set<Radio> = new Set<Radio>();

  /**
   * Synchronize registered peers in the selected radio's native/form group with its selected value.
   *
   * @param radio - Radio whose group and value determine the peer update.
   */
  public select(radio: Radio): void {
    for (const peer of this.radios) {
      if (peer !== radio && peer.sharesGroup(radio)) peer.writeValue(radio.value());
    }
  }
}
