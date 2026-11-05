/** Allocates unique CSS anchor names within one loaded Blocks module instance. */
export class OverlayAnchorSequence {
  private nextAnchor: number = 0;

  /** Return the next CSS anchor name without reading browser state. */
  public next(): string {
    return `--bx-overlay-origin-${++this.nextAnchor}`;
  }
}
