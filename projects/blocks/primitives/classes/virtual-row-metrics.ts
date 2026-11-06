/** Internal Fenwick tree for logarithmic dynamic row-height updates and offset lookups. */
export class VirtualRowMetrics {
  private values: number[] = [];
  private tree: number[] = [0];

  /** Number of measured or estimated rows. */
  public get length(): number {
    return this.values.length;
  }

  /** Total measured/estimated collection height in CSS pixels. */
  public get total(): number {
    return this.prefix(this.values.length);
  }

  /**
   * Rebuild the height tree.
   * @param heights - Row extents, including each row's trailing gap.
   */
  public reset(heights: readonly number[]): void {
    this.values = [...heights];
    this.tree = Array.from({ length: heights.length + 1 }, () => 0);

    for (let index = 0; index < heights.length; index++) {
      const next = index + 1;

      this.tree[next] += heights[index];

      const parent = next + (next & -next);

      if (parent < this.tree.length) this.tree[parent] += this.tree[next];
    }
  }

  /**
   * Update one row.
   * @param index - Zero-based row.
   * @param height - New extent in CSS pixels.
   * @returns Whether the extent changed materially.
   */
  public set(index: number, height: number): boolean {
    if (index < 0 || index >= this.values.length || !Number.isFinite(height) || height <= 0 || Math.abs(this.values[index] - height) < 0.5) return false;

    const delta = height - this.values[index];

    this.values[index] = height;

    for (let next = index + 1; next < this.tree.length; next += next & -next) this.tree[next] += delta;

    return true;
  }

  /**
   * Sum leading rows.
   * @param count - Exclusive row index.
   * @returns Leading height in CSS pixels.
   */
  public prefix(count: number): number {
    let total = 0;

    for (let index = Math.min(this.values.length, Math.max(0, count)); index > 0; index -= index & -index) total += this.tree[index];

    return total;
  }

  /**
   * Find the row containing an offset.
   * @param offset - Distance from the collection start in CSS pixels.
   * @returns Clamped row index, or zero when empty.
   */
  public indexAt(offset: number): number {
    let index = 0;
    let sum = 0;
    let step = 1;

    while (step * 2 <= this.values.length) step *= 2;

    for (; step > 0; step = Math.floor(step / 2)) {
      const next = index + step;

      if (next <= this.values.length && sum + this.tree[next] <= Math.max(0, offset)) {
        index = next;
        sum += this.tree[next];
      }
    }

    return Math.min(index, Math.max(0, this.values.length - 1));
  }
}
