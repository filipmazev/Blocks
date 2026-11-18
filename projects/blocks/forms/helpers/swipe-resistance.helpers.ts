/**
 * Integrate decreasing trackpad resistance, holding the initial ratio before smoothly tapering to one.
 * @param distance - Nonnegative visual travel in CSS pixels.
 * @param maximum - Maximum visual travel in CSS pixels.
 * @param resistance - Initial input-to-visual travel ratio, at least one.
 * @param plateauFraction - Fraction of maximum travel holding initial resistance before easing; defaults to zero and is clamped to 0–0.35.
 * @param endFraction - Fraction of maximum travel where resistance reaches one, default 0.4; clamped above the plateau and at most one.
 * @returns Required input travel; continuous with a continuous slope at the end of the resistance region.
 */
export function swipeInputDistance(distance: number, maximum: number, resistance: number, plateauFraction: number = 0, endFraction: number = 0.4): number {
  const plateauRatio = Math.max(0, Math.min(0.35, plateauFraction));
  const end = Math.max(0, maximum * Math.max(plateauRatio + 0.01, Math.min(1, endFraction)));

  if (end === 0) return distance;

  const plateau = plateauRatio * maximum;
  const held = Math.min(distance, plateau);
  const easingLength = end - plateau;
  const x = Math.max(0, Math.min(distance - plateau, easingLength));
  const unit = x / easingLength;

  return distance + (resistance - 1) * (held + easingLength * (unit - unit * unit + (unit * unit * unit) / 3));
}

/**
 * Invert the monotonic resistance curve without accumulating rounding error across wheel events.
 * @param distance - Nonnegative accumulated input travel in CSS pixels.
 * @param maximum - Maximum visual travel in CSS pixels.
 * @param resistance - Initial input-to-visual travel ratio, at least one.
 * @param plateauFraction - Fraction holding initial resistance, matching swipeInputDistance; defaults to zero.
 * @param endFraction - Fraction where resistance reaches one, matching swipeInputDistance; defaults to 0.4.
 * @returns Visual travel in CSS pixels, preserving immediate reversal.
 */
export function swipeVisualDistance(distance: number, maximum: number, resistance: number, plateauFraction: number = 0, endFraction: number = 0.4): number {
  let low = 0;
  let high = distance;

  for (let index = 0; index < 28; index++) {
    const middle = (low + high) / 2;

    if (swipeInputDistance(middle, maximum, resistance, plateauFraction, endFraction) < distance) low = middle;
    else high = middle;
  }

  return (low + high) / 2;
}

/**
 * Bound additional trackpad effort on long rows without amplifying wheel movement.
 * @param resistance - Configured initial resistance factor, at least one.
 * @param maximum - Available stretch beyond the revealed lane, in CSS pixels.
 * @param reference - Unscaled stretch distance in CSS pixels, normally two measured action columns.
 * @returns Initial resistance ratio; wider stretches reduce only effort above one-to-one movement.
 */
export function resolveSwipeResistance(resistance: number, maximum: number, reference: number): number {
  return 1 + (resistance - 1) * (maximum > 0 ? Math.min(1, Math.max(0, reference) / maximum) : 1);
}
