/** A scalar spring whose target can change without resetting its velocity. */
export interface SpringOptions {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export class Spring {
  private readonly stiffness: number;
  private readonly damping: number;
  private readonly mass: number;
  public value: number;

  public velocity = 0;

  public target: number;

  constructor(value = 0, options: SpringOptions = {}) {
    if (!Number.isFinite(value)) throw new RangeError('Spring value must be finite.');
    this.value = this.target = value;
    this.stiffness = options.stiffness ?? 380;
    this.damping = options.damping ?? 32;
    this.mass = options.mass ?? 1;
    if (
      !Number.isFinite(this.stiffness) ||
      this.stiffness <= 0 ||
      !Number.isFinite(this.damping) ||
      this.damping < 0 ||
      !Number.isFinite(this.mass) ||
      this.mass <= 0
    ) {
      throw new RangeError('Spring stiffness and mass must be positive; damping must be nonnegative.');
    }
  }

  /** Advances the exact damped harmonic solution. Returns true while moving. */
  public step(deltaSeconds: number): boolean {
    if (!Number.isFinite(this.target)) throw new RangeError('Spring target must be finite.');
    if (!Number.isFinite(deltaSeconds) || deltaSeconds < 0) {
      throw new RangeError('Spring delta must be finite and nonnegative.');
    }
    const displacement = this.value - this.target;
    if (Math.abs(displacement) < 0.001 && Math.abs(this.velocity) < 0.001) {
      this.snap(this.target);
      return false;
    }
    if (deltaSeconds === 0) return true;

    const decay = this.damping / (2 * this.mass);
    const frequencySquared = this.stiffness / this.mass;
    const discriminant = decay * decay - frequencySquared;
    const velocity = this.velocity;
    const time = deltaSeconds;
    let nextDisplacement: number;
    let nextVelocity: number;

    if (Math.abs(discriminant) < 0.000001 * frequencySquared) {
      const coefficient = velocity + decay * displacement;
      const exponential = Math.exp(-decay * time);
      nextDisplacement = exponential * (displacement + coefficient * time);
      nextVelocity = exponential * (velocity - decay * coefficient * time);
    } else if (discriminant < 0) {
      const frequency = Math.sqrt(-discriminant);
      const coefficient = (velocity + decay * displacement) / frequency;
      const exponential = Math.exp(-decay * time);
      const cosine = Math.cos(frequency * time);
      const sine = Math.sin(frequency * time);
      nextDisplacement = exponential * (displacement * cosine + coefficient * sine);
      nextVelocity = exponential * ((coefficient * frequency - decay * displacement) * cosine - (displacement * frequency + decay * coefficient) * sine);
    } else {
      const root = Math.sqrt(discriminant);
      const firstRoot = -decay + root;
      const secondRoot = -decay - root;
      const first = (velocity - secondRoot * displacement) / (firstRoot - secondRoot);
      const second = displacement - first;
      const firstTerm = first * Math.exp(firstRoot * time);
      const secondTerm = second * Math.exp(secondRoot * time);
      nextDisplacement = firstTerm + secondTerm;
      nextVelocity = firstRoot * firstTerm + secondRoot * secondTerm;
    }
    this.value = this.target + nextDisplacement;
    this.velocity = nextVelocity;
    if (Math.abs(nextDisplacement) < 0.001 && Math.abs(nextVelocity) < 0.001) {
      this.snap(this.target);
      return false;
    }
    return true;
  }

  public snap(value: number): void {
    if (!Number.isFinite(value)) throw new RangeError('Spring value must be finite.');
    this.value = this.target = value;
    this.velocity = 0;
  }
}
