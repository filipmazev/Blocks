import type { IOrbGuidePoint } from '@playground/interfaces/iorb-guide-point.interface';

/** Advances a slow section tour independently of the orb's interactive physics. */
export class LightOrbGuide {
  private points: readonly IOrbGuidePoint[] = [];
  private destination: string | undefined;
  private target: IOrbGuidePoint | undefined;
  private dwell: number = 0;
  private direction: number = 1;
  private elapsed: number = 0;
  private following: boolean = false;

  /**
   * Replace measured destinations while preserving the current section when it remains visible.
   * @param points - Visible section destinations in document order; an empty list suspends guiding.
   */
  public update(points: readonly IOrbGuidePoint[]): void {
    this.points = points;
  }

  /** Restart from the orb's actual position after waking, without moving it instantly. */
  public reset(): void {
    this.target = undefined;
    this.destination = undefined;
    this.dwell = this.elapsed = 0;
    this.following = false;
  }

  /**
   * Follow the section where the reader paused, with bounded catch-up travel before resuming the slow tour.
   * @param id - Stable identifier of the most visible section.
   */
  public focus(id: string): void {
    this.destination = id;
    this.target = undefined;
    this.dwell = 0;
    this.following = true;
  }

  /**
   * Move the target at a bounded speed, dwelling at each section before turning back.
   * @param seconds - Elapsed active time in seconds.
   * @param x - Current horizontal center of the orb, in plane pixels.
   * @param y - Current vertical center of the orb, in plane pixels.
   * @returns The next spring target, or undefined when no section is visible.
   */
  public step(seconds: number, x: number, y: number): IOrbGuidePoint | undefined {
    if (!this.points.length) return undefined;

    this.elapsed += seconds;

    let index = this.points.findIndex((point) => point.id === this.destination);

    if (index < 0) {
      index = this.points.reduce(
        (nearest, point, i) => (Math.hypot(point.x - x, point.y - y) < Math.hypot(this.points[nearest].x - x, this.points[nearest].y - y) ? i : nearest),
        0
      );
      this.destination = this.points[index].id;
      this.dwell = 0;
    }

    const point = this.points[index];
    const from = this.target ?? { id: point.id, x, y };
    const distance = Math.hypot(point.x - from.x, point.y - from.y);
    const speed = this.following ? 190 : 46;
    const travel = Math.min(1, (seconds * speed) / Math.max(1, distance));

    this.target = { id: point.id, x: from.x + (point.x - from.x) * travel, y: from.y + (point.y - from.y) * travel };

    if (distance < 2 && Math.hypot(point.x - x, point.y - y) < 8) {
      this.following = false;
      this.dwell += seconds;

      if (this.dwell > 4 && this.points.length > 1) {
        if (index + this.direction >= this.points.length || index + this.direction < 0) this.direction *= -1;

        this.destination = this.points[index + this.direction].id;
        this.dwell = 0;
      }
    }

    return { ...this.target, x: this.target.x + Math.sin(this.elapsed * 0.7) * 5, y: this.target.y + Math.sin(this.elapsed * 0.9) * 4 };
  }
}
