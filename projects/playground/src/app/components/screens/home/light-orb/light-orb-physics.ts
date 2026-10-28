export type OrbState = 'asleep' | 'waking' | 'flying' | 'coasting' | 'dragging' | 'falling' | 'recovering' | 'returning';
export type OrbMood = 'primary' | 'success' | 'warn' | 'danger' | 'info';
export type OrbWall = 'left' | 'right' | 'top' | 'bottom';

export interface OrbBounds {
  left: number;
  right: number;
  top: number;
  bottom: number;
  cruiseY: number;
  homeX?: number;
  homeY?: number;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

/** The visible garden's inner edges are the collision planes; coordinates are orb centers. */
export class LightOrbPhysics {
  public x = 0;

  public y = 0;

  public vx = 0;

  public vy = 0;

  public angle = 0;
  public spin = 0;
  public stretchAngle = 0;

  public scaleX = 0.74;

  public scaleY = 0.74;

  public state: OrbState = 'asleep';

  public mood: OrbMood = 'primary';

  public impactWall: OrbWall = 'bottom';
  public contact?: OrbWall;

  public impactSerial = 0;

  private bounds: OrbBounds = { left: 0, right: 0, top: 0, bottom: 0, cruiseY: 0 };

  private initialized = false;

  private clock = 0;

  private age = 0;

  private grounded = 0;

  private impact = 0;

  private agitation = 0;

  private quiet = 0;

  private moodTime = 0;
  private calmReturn = false;
  private recoveryAngle = 0;
  private courseX = 0;
  private courseY = 0;
  private steeringFromNudge = false;

  public resize(bounds: OrbBounds): void {
    this.bounds = bounds;
    if (!this.initialized || this.state === 'asleep') {
      this.x = this.homeX();
      this.y = this.homeY();
      this.initialized = true;
    }
    this.x = clamp(this.x, bounds.left, bounds.right);
    this.y = clamp(this.y, bounds.top, bounds.bottom);
  }

  public wake(): void {
    if (this.state !== 'asleep') return;
    this.state = 'waking';
    this.age = 0;
  }

  public grab(): void {
    this.state = 'dragging';
    this.age = this.vx = this.vy = this.impact = 0;
    this.scaleX = this.scaleY = 1;
    this.stretchAngle = 0;
  }

  public drag(x: number, y: number): void {
    this.x = clamp(x, this.bounds.left, this.bounds.right);
    this.y = clamp(y, this.bounds.top, this.bounds.bottom);
  }

  public throw(vx: number, vy: number, spin = 0, recentTravel?: number): void {
    this.spin = clamp(spin, -25, 25);
    const committed = Math.hypot(vx, vy) >= 650 && (recentTravel === undefined || recentTravel >= 28);
    this.state = committed || this.mood === 'danger' ? 'falling' : 'coasting';
    this.vx = clamp(vx, -2200, 2200);
    this.vy = clamp(vy, -2200, 2200);
    this.age = this.grounded = this.quiet = 0;
    const energy = Math.min(1, Math.hypot(this.vx, this.vy) / 1200);
    // Only the user's throws build frustration. The character's own hops cannot feed it.
    this.agitation = Math.min(1.5, this.agitation + (energy < 0.25 ? 0.04 : 0.18 + energy * 0.28));
    if (this.agitation >= 0.85 || this.mood === 'danger') this.setMood('danger', 6.5);
    else if (energy >= 0.45) this.setMood('warn', 2.4);
    else if (this.mood !== 'info') this.setMood('success', 2.6);
  }

  public nudge(vx = 0, vy = 0, spin = this.spin): void {
    this.state = this.mood === 'danger' ? 'falling' : 'coasting';
    this.vx = clamp(vx, -650, 650);
    this.vy = clamp(vy, -650, 650);
    this.spin = clamp(spin, -25, 25);
    this.age = 0;
  }

  public drop(): void {
    this.state = 'falling';
    this.age = this.grounded = 0;
  }

  public fly(): void {
    this.steeringFromNudge = false;
    this.state = 'flying';
    this.age = this.grounded = this.impact = 0;
    this.vy = this.mood === 'danger' ? -600 : -220;
    this.courseX = this.x;
    this.courseY = this.y;
  }

  public returnHome(instant = false): void {
    if (instant) {
      this.sleep();
      return;
    }
    if (this.mood === 'danger') return;
    this.state = 'returning';
    this.age = 0;
  }

  public park(): void {
    this.vx = this.vy = this.impact = 0;
  }

  public step(seconds: number): void {
    let remaining = clamp(seconds, 0, 0.15);
    while (remaining > 1e-8) {
      const dt = Math.min(remaining, 1 / 120);
      this.advance(dt);
      remaining -= dt;
    }
  }

  private advance(dt: number): void {
    if (this.state === 'asleep') return;
    this.clock += dt;
    this.age += dt;
    this.quiet += dt;
    this.updateMood(dt);
    if (this.state === 'dragging') {
      if (this.age > 1.4 && this.mood === 'primary') this.setMood('success', 2);
      return;
    }
    this.impact *= Math.exp(-dt * 12);
    this.updateDeformation();
    const b = this.bounds;
    if (this.state === 'waking') {
      const amount = Math.min(1, this.age / 0.65);
      const ease = amount * amount * (3 - 2 * amount);
      this.x = this.homeX();
      this.y = Math.max(b.top, this.homeY() - ease * 32);
      this.scaleX = this.scaleY = 0.74 + ease * 0.26;
      this.angle = Math.sin(amount * Math.PI) * -0.16;
      if (amount === 1) this.fly();
      return;
    }
    if (this.state === 'recovering') {
      const shake = clamp((this.age - 0.25) / 0.6, 0, 1);
      this.angle = this.recoveryAngle + Math.sin(shake * Math.PI * 8) * Math.sin(shake * Math.PI) * 0.24;
      this.scaleX = 1 + Math.sin(shake * Math.PI * 6) * 0.07;
      this.scaleY = 2 - this.scaleX;
      if (this.age >= 1.05) {
        if (this.calmReturn) this.returnHome();
        else this.fly();
      }
      return;
    }
    if (this.state === 'returning') {
      this.vx += ((this.homeX() - this.x) * 15 - this.vx * 7.5) * dt;
      this.vy += ((this.homeY() - this.y) * 15 - this.vy * 7.5) * dt;
      const distance = Math.hypot(this.homeX() - this.x, this.homeY() - this.y);
      this.scaleX = this.scaleY = 0.74 + Math.min(1, distance / 75) * 0.26;
      this.angle *= Math.exp(-dt * 6);
      if ((distance < 1.2 && Math.hypot(this.vx, this.vy) < 6) || this.age > 5) {
        this.sleep();
        return;
      }
    } else if (this.state === 'coasting') {
      this.vx *= Math.exp(-dt * 0.6);
      this.vy *= Math.exp(-dt * 0.6);
      if (this.age > 0.9) {
        this.courseX = this.x;
        this.courseY = this.y;
        this.steeringFromNudge = true;
        this.state = 'flying';
        this.age = 0;
      }
    } else if (this.state === 'flying' && this.mood !== 'danger') {
      const width = b.right - b.left;
      const patrolX = b.left + width * (0.5 + Math.sin(this.clock * 0.48 + 0.8) * 0.4);
      const patrolY = clamp(b.cruiseY + Math.sin(this.clock * 0.9) * 48, b.top, b.bottom - 24);
      const amount = Math.min(1, this.age / 2.2);
      const blend = amount * amount * (3 - 2 * amount);
      const targetX = this.courseX + (patrolX - this.courseX) * blend;
      const targetY = this.courseY + (patrolY - this.courseY) * blend;
      if (this.steeringFromNudge) {
        const turn = 1 - Math.exp(-dt * 2.2 * blend);
        this.vx += (clamp((patrolX - this.x) * 0.7, -200, 200) - this.vx) * turn;
        this.vy += (clamp((patrolY - this.y) * 0.7, -150, 150) - this.vy) * turn;
      } else {
        this.vx += ((targetX - this.x) * 3.6 - this.vx * 3.2) * dt;
        this.vy += ((targetY - this.y) * 4 - this.vy * 3) * dt;
      }
      if (this.age > 10 && this.mood === 'primary') this.returnHome();
    } else {
      this.vy += (this.mood === 'danger' ? 2150 : 1850) * dt;
      this.vx *= Math.exp(-dt * 0.16);
    }
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    if (this.state !== 'returning') {
      this.angle += this.spin * dt;
      this.spin *= Math.exp(-dt * (this.state === 'falling' || this.state === 'coasting' ? 0.28 : 1.2));
    }
    const angry = this.mood === 'danger';

    if (this.x < b.left || this.x > b.right) {
      this.hit(this.x < b.left ? 'left' : 'right', Math.abs(this.vx));
      this.x = clamp(this.x, b.left, b.right);
      this.vx *= angry ? -0.97 : -0.82;
      this.spin = this.spin * 0.8 + this.vy * (this.impactWall === 'left' ? 0.003 : -0.003);
    }
    if (this.y < b.top) {
      this.hit('top', Math.abs(this.vy));
      this.y = b.top;
      this.vy = Math.abs(this.vy) * (angry ? 0.9 : 0.7);
      this.spin = this.spin * 0.8 - this.vx * 0.003;
    }
    if (this.y >= b.bottom) {
      this.y = b.bottom;
      if (this.vy > 75) this.spin = this.spin * 0.8 + this.vx * 0.003;
      this.hit('bottom', this.vy);
      if (angry) {
        this.vy = -clamp(Math.abs(this.vy) * 0.94, 680, 1100);
        this.vx = (Math.sign(this.vx) || (this.x > (b.left + b.right) / 2 ? -1 : 1)) * Math.max(850, Math.abs(this.vx) * 0.97);
      } else if (this.vy > 75) {
        this.vy *= -0.62;
        this.vx *= 0.8;
      } else {
        this.vy = 0;
        this.vx *= Math.exp(-dt * 9);
        this.grounded += dt;
      }
      if (!angry && this.state === 'falling' && this.grounded > 0.13) {
        this.state = 'recovering';
        this.recoveryAngle = this.angle;
        this.age = this.vx = this.vy = this.spin = 0;
      }
    }
  }

  private updateMood(dt: number): void {
    if (this.quiet > 2) this.agitation = Math.max(0, this.agitation - dt * 0.1);
    if (this.moodTime <= 0) return;
    this.moodTime -= dt;
    if (this.moodTime > 0) return;
    if (this.mood === 'danger') {
      this.agitation = 0.12;
      this.calmReturn = true;
      this.setMood('info', 3.5);
      if (this.state === 'flying') this.state = 'falling';
      this.vx *= 0.65;
      this.vy *= 0.65;
    } else {
      this.setMood('primary', 0);
      if (this.calmReturn && this.state === 'flying') this.returnHome();
    }
  }

  private hit(wall: OrbWall, speed: number): void {
    if (speed < 120) return;
    this.impact = Math.min(1, speed / 650);
    this.impactWall = wall;
    this.impactSerial++;
    this.updateDeformation();
  }

  private updateDeformation(): void {
    const speed = Math.min(1, Math.hypot(this.vx, this.vy) / 1300);
    this.contact = this.impact > 0.03 ? this.impactWall : undefined;
    if (this.impact > 0.03) {
      const side = this.impactWall === 'left' || this.impactWall === 'right';
      this.stretchAngle = 0;
      this.scaleX = 1 + this.impact * (side ? -0.3 : 0.34);
      this.scaleY = 1 + this.impact * (side ? 0.3 : -0.27);
    } else if (this.state === 'falling' || (this.state === 'flying' && this.mood === 'danger')) {
      this.stretchAngle = Math.atan2(this.vy, this.vx) - Math.PI / 2;
      this.scaleX = 1 - speed * 0.12;
      this.scaleY = 1 + speed * 0.2;
    } else {
      this.stretchAngle = 0;
      this.scaleX = this.scaleY = 1;
    }
  }

  private setMood(mood: OrbMood, duration: number): void {
    this.mood = mood;
    this.moodTime = duration;
  }

  private sleep(): void {
    this.state = 'asleep';
    this.x = this.homeX();
    this.y = this.homeY();
    this.vx = this.vy = this.angle = this.spin = this.stretchAngle = this.agitation = this.moodTime = 0;
    this.mood = 'primary';
    this.calmReturn = false;
    this.scaleX = this.scaleY = 0.74;
  }

  private homeX(): number {
    return clamp(this.bounds.homeX ?? this.bounds.left + (this.bounds.right - this.bounds.left) * 0.76, this.bounds.left, this.bounds.right);
  }

  private homeY(): number {
    return clamp(this.bounds.homeY ?? this.bounds.cruiseY, this.bounds.top, this.bounds.bottom);
  }
}

export interface OrbPointerSample {
  x: number;
  y: number;
  time: number;
}
export function orbReleaseVelocity(samples: OrbPointerSample[], releasedAt: number): [number, number] {
  const last = samples[samples.length - 1];
  if (!last || releasedAt - last.time > 120) return [0, 0];
  const recent = samples.filter((sample) => last.time - sample.time <= 100);
  if (recent.length < 2) return [0, 0];
  const t0 = recent[0].time;
  const meanT = recent.reduce((sum, sample) => sum + (sample.time - t0) / 1000, 0) / recent.length;
  const meanX = recent.reduce((sum, sample) => sum + sample.x, 0) / recent.length;
  const meanY = recent.reduce((sum, sample) => sum + sample.y, 0) / recent.length;
  let variance = 0,
    x = 0,
    y = 0;
  for (const sample of recent) {
    const t = (sample.time - t0) / 1000 - meanT;
    variance += t * t;
    x += t * (sample.x - meanX);
    y += t * (sample.y - meanY);
  }
  return variance > 1e-7
    ? [clamp(x / variance, -2200, 2200), clamp(y / variance, -2200, 2200)]
    : [clamp((last.x - recent[0].x) / 0.008, -2200, 2200), clamp((last.y - recent[0].y) / 0.008, -2200, 2200)];
}

export function orbReleaseMotion(samples: OrbPointerSample[], releasedAt: number): { vx: number; vy: number; spin: number; travel: number } {
  const last = samples[samples.length - 1];
  const [fallbackX, fallbackY] = orbReleaseVelocity(samples, last ? Math.min(releasedAt, last.time + 120) : releasedAt);
  if (!last || releasedAt - last.time > 180) return { vx: 0, vy: 0, spin: 0, travel: 0 };
  const recent = samples.filter((sample) => last.time - sample.time <= 90);
  const fit = (axis: 'x' | 'y', fallback: number) => {
    if (recent.length < 3) return fallback;
    const rows = recent.map((sample) => ({ t: (sample.time - last.time) / 1000, p: sample[axis] }));
    const matrix = Array.from({ length: 3 }, (_, i) =>
      Array.from({ length: 4 }, (_, j) => (j === 3 ? rows.reduce((s, r) => s + r.p * Math.pow(r.t, i), 0) : rows.reduce((s, r) => s + Math.pow(r.t, i + j), 0)))
    );
    for (let c = 0; c < 3; c++) {
      let pivot = c;
      for (let r = c + 1; r < 3; r++) if (Math.abs(matrix[r][c]) > Math.abs(matrix[pivot][c])) pivot = r;
      if (Math.abs(matrix[pivot][c]) < 1e-10) return fallback;
      [matrix[c], matrix[pivot]] = [matrix[pivot], matrix[c]];
      const value = matrix[c][c];
      for (let j = c; j < 4; j++) matrix[c][j] /= value;
      for (let r = 0; r < 3; r++)
        if (r !== c) {
          const factor = matrix[r][c];
          for (let j = c; j < 4; j++) matrix[r][j] -= factor * matrix[c][j];
        }
    }
    // Preserve release speed through event delivery latency; a deliberate held stop still zeroes it.
    return clamp(matrix[1][3], -2200, 2200);
  };
  let turn = 0,
    duration = 0,
    path = 0;
  for (let i = 1; i < recent.length; i++) path += Math.hypot(recent[i].x - recent[i - 1].x, recent[i].y - recent[i - 1].y);
  for (let i = 2; i < recent.length; i++) {
    const a = recent[i - 2],
      b = recent[i - 1],
      c = recent[i];
    const ax = b.x - a.x,
      ay = b.y - a.y,
      bx = c.x - b.x,
      by = c.y - b.y;
    if (Math.hypot(ax, ay) < 0.4 || Math.hypot(bx, by) < 0.4) continue;
    turn += Math.atan2(ax * by - ay * bx, ax * bx + ay * by);
    duration += (c.time - a.time) / 2000;
  }
  let vx = fit('x', fallbackX),
    vy = fit('y', fallbackY);
  const linearSpeed = Math.hypot(fallbackX, fallbackY);
  // A short human release often decelerates at its last sample. Carry some of the
  // measured movement instead of making a gentle flick stop dead at pointerup.
  if (Math.hypot(vx, vy) < linearSpeed * 0.65) {
    vx = fallbackX * 0.8;
    vy = fallbackY * 0.8;
  }
  const speed = Math.hypot(vx, vy);
  if (path >= 4 && speed > 0 && speed < 80) {
    vx = (vx / speed) * 80;
    vy = (vy / speed) * 80;
  }
  return {
    vx,
    vy,
    spin: path > 12 && duration > 0.01 && Math.abs(turn) > 0.1 ? clamp(turn / duration, -25, 25) : 0,
    travel: path
  };
}
