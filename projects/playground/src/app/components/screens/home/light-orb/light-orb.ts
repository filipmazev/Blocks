import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  signal,
  viewChild
} from '@angular/core';
import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import { GlassScene, mountGlassScene } from '@filip.mazev/blocks/effects/runtime';
import { LightOrbPhysics, OrbMood, OrbState, orbReleaseMotion } from './light-orb-physics';

type RGB = [number, number, number];
const radius = 26;
const moods: OrbMood[] = ['primary', 'success', 'warn', 'danger', 'info'];
const ribbonSamples = Array.from({ length: 25 }, (_, i) => {
  const u = (i / 24) * Math.PI * 2;
  return { u, cos: Math.cos(u), sin: Math.sin(u) };
});
interface PointerSample {
  x: number;
  y: number;
  time: number;
}

@Component({
  selector: 'app-light-orb',
  templateUrl: './light-orb.html',
  styleUrl: './light-orb.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightOrb {
  protected readonly theme = inject(ThemingService);

  protected readonly ready = signal(false);

  protected readonly state = signal<OrbState>('asleep');

  protected readonly mood = signal<OrbMood>('primary');

  protected readonly reducedMotion = inject(BxA11yService).isReducedMotion;

  protected readonly message = computed(() => {
    if (this.state() === 'asleep') return `A little light lives in your ${this.theme.paletteLabel().toLowerCase()} theme.`;
    if (this.mood() === 'danger') return 'Too many throws. Someone is cross.';
    if (this.mood() === 'info') return 'Taking a breath. Give it a moment.';
    if (this.mood() === 'warn') return 'Easy now. This little light has feelings.';
    if (this.mood() === 'success') return 'That was gentle. A happy little light.';
    if (this.state() === 'returning') return 'Time to curl up in its swatch.';
    if (this.state() === 'recovering') return 'A little wobble. All better.';
    return 'Curious? Catch it. Be kind.';
  });

  public readonly stage = input.required<HTMLElement>();

  public readonly cards = input.required<HTMLElement>();

  private readonly zone = inject(NgZone);

  private readonly orb = viewChild.required<ElementRef<HTMLButtonElement>>('orb');

  private readonly plane = viewChild.required<ElementRef<HTMLElement>>('plane');

  private readonly shadow = viewChild.required<ElementRef<HTMLElement>>('shadow');

  private readonly impact = viewChild.required<ElementRef<HTMLElement>>('impact');

  private readonly charge = viewChild.required<ElementRef<HTMLElement>>('charge');
  private readonly ribbonCore = viewChild.required<ElementRef<SVGPathElement>>('ribbonCore');
  private readonly ribbonGlow = viewChild.required<ElementRef<SVGPathElement>>('ribbonGlow');
  private readonly ribbonTail = viewChild.required<ElementRef<SVGPathElement>>('ribbonTail');

  private readonly probes = viewChild.required<ElementRef<HTMLElement>>('probes');

  private readonly physics = new LightOrbPhysics();

  private view?: Window;

  private home?: HTMLElement;

  private scene?: GlassScene;

  private pose?: Animation;
  private colorPose?: Animation;
  private lastColor = '';
  private lastCharge = -1;
  private lastShadow = '';
  private lastPointerPoint?: PointerSample;

  private shadowPose?: Animation;
  private chargePose?: Animation;
  private ribbonTime = 0;
  private lastRibbon = -Infinity;
  private lightLevel = 0;
  private lastPose = '';
  private lastScene = '';
  private lastGeometry = '';
  private stayHome = false;

  private impactAnimation?: Animation;

  private events?: AbortController;

  private resize?: ResizeObserver;

  private intersection?: IntersectionObserver;

  private frame?: number;

  private wakeTimer?: number;

  private lastTime?: number;

  private lastLight = -Infinity;

  private lastImpact = 0;

  private originX = 0;

  private originY = 0;

  private floor = 0;

  private dirtyGeometry = true;

  private colorsDirty = true;

  private visible = true;

  private homeVisible = false;

  private motionEnabled = true;

  private pointer?: number;

  private offsetX = 0;

  private offsetY = 0;

  private fromHome = false;
  private dragDistance = 0;

  private samples: PointerSample[] = [];

  private colors = Object.fromEntries(moods.map((mood) => [mood, [255, 255, 255]])) as Record<OrbMood, RGB>;

  private rgb: RGB = [255, 255, 255];

  private color = 'rgb(255 255 255)';

  private invalidateGeometry = (): void => {
    this.dirtyGeometry = true;
    this.start(true);
  };

  private visibilityChange = (): void => {
    if (!this.visible || this.stage().ownerDocument.hidden) {
      this.cancelDrag();
      this.stop();
      this.clearWake();
    } else {
      this.dirtyGeometry = true;
      this.start(true);
    }
  };

  private wake = (): void => {
    if (!this.motionEnabled || this.physics.state !== 'asleep') return;
    this.stayHome = false;
    this.clearWake();
    this.physics.wake();
    this.start();
  };

  private grab = (event: PointerEvent): void => {
    if (this.pointer !== undefined || !event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    if (this.dirtyGeometry) this.measure();
    this.clearWake();
    const orb = this.orb().nativeElement;
    orb.focus({ preventScroll: true });
    this.pointer = event.pointerId;
    this.offsetX = event.clientX - this.originX - this.physics.x;
    this.offsetY = event.clientY - this.originY - this.physics.y;
    this.fromHome = this.physics.state === 'asleep' || this.physics.state === 'waking';
    this.dragDistance = 0;
    this.lastPointerPoint = { x: event.clientX, y: event.clientY, time: event.timeStamp };
    this.samples = [this.lastPointerPoint];
    this.stayHome = false;
    this.physics.grab();
    if (!this.motionEnabled) this.lightLevel = 1;
    orb.setPointerCapture(event.pointerId);
    this.paint(performance.now(), true);
    this.start();
  };

  private drag = (event: PointerEvent): void => {
    if (event.pointerId !== this.pointer) return;
    if (this.dirtyGeometry) this.measure();
    this.physics.drag(event.clientX - this.originX - this.offsetX, event.clientY - this.originY - this.offsetY);
    const coalesced = event.getCoalescedEvents?.() ?? [];
    for (const point of coalesced.length ? coalesced : [event]) {
      const last = this.samples[this.samples.length - 1];
      const previous = this.lastPointerPoint ?? last;
      this.dragDistance += Math.hypot(point.clientX - previous.x, point.clientY - previous.y);
      this.lastPointerPoint = { x: point.clientX, y: point.clientY, time: point.timeStamp };
      if (
        (!last || point.timeStamp - last.time >= 3 || event.type === 'pointerup') &&
        (!last || Math.hypot(point.clientX - last.x, point.clientY - last.y) > 0.1)
      )
        this.samples.push(this.lastPointerPoint);
    }
    const last = this.samples[this.samples.length - 1];
    this.samples = this.samples.filter((sample) => last.time - sample.time <= 120).slice(-64);
    if (!this.motionEnabled) this.paint(performance.now());
  };

  private release = (event: PointerEvent): void => {
    if (event.pointerId !== this.pointer) return;
    this.drag(event);
    const { vx, vy, spin, travel } = orbReleaseMotion(this.samples, event.timeStamp);
    const justWaking = this.fromHome && this.dragDistance < 6;
    this.endPointer();
    if (this.motionEnabled) {
      if (justWaking) this.physics.fly();
      else this.physics.throw(vx, vy, spin, travel);
    } else this.physics.park();
    this.paint(performance.now(), true);
    this.start();
  };

  private cancelDrag = (event?: Event): void => {
    if (this.pointer === undefined) return;
    const motion = orbReleaseMotion(this.samples, event?.timeStamp || performance.now());
    this.endPointer();
    this.physics.nudge(motion.vx, motion.vy, motion.spin);
    if (!this.motionEnabled) this.physics.park();
    this.start();
  };

  private tick = (time: number): void => {
    this.frame = undefined;
    if (this.dirtyGeometry) this.measure();
    if (this.colorsDirty) this.readColors();
    const elapsed = this.lastTime === undefined ? 1 / 60 : Math.min(0.15, (time - this.lastTime) / 1000);
    if (this.motionEnabled) {
      this.physics.step(elapsed);
      this.ribbonTime += elapsed;
    }
    const state = this.physics.state;
    const target = state === 'asleep' ? 0 : state === 'waking' || state === 'returning' ? Math.max(0, Math.min(1, (this.physics.scaleX - 0.74) / 0.26)) : 1;
    this.lightLevel += (target - this.lightLevel) * (1 - Math.exp(-elapsed * (target > this.lightLevel ? 2.5 : 4)));
    if (target === 0 && this.lightLevel < 0.003) this.lightLevel = 0;
    this.lastTime = this.motionEnabled ? time : undefined;
    this.paint(time);
    if (state === 'asleep') this.scheduleWake();
    if (state !== 'asleep' || this.lightLevel > 0) this.start();
    else this.lastTime = undefined;
  };

  constructor() {
    afterNextRender(() => this.zone.runOutsideAngular(() => this.initialize()));
    effect(() => {
      this.theme.palette();
      this.theme.activeTheme();
      this.colorsDirty = true;
      this.zone.runOutsideAngular(() => this.start(true));
    });
    effect(() => {
      this.motionEnabled = !this.reducedMotion();
      this.zone.runOutsideAngular(() => {
        if (!this.view) return;
        if (!this.motionEnabled) {
          this.cancelDrag();
          this.physics.returnHome(true);
          this.lightLevel = 0;
          this.stop();
          this.clearWake();
        }
        this.start(true);
      });
    });
    inject(DestroyRef).onDestroy(() => {
      this.stop();
      this.clearWake();
      this.events?.abort();
      this.resize?.disconnect();
      this.intersection?.disconnect();
      this.pose?.cancel();
      this.colorPose?.cancel();
      this.shadowPose?.cancel();
      this.chargePose?.cancel();
      this.impactAnimation?.cancel();
      this.scene?.destroy();
    });
  }

  private initialize(): void {
    const stage = this.stage();
    const view = stage.ownerDocument.defaultView;
    if (!view) return;
    this.view = view;
    this.home = this.cards().querySelector<HTMLElement>('.orb-nest-well') ?? this.cards();
    this.events = new AbortController();
    const signal = this.events.signal;
    const orb = this.orb().nativeElement;
    this.pose = orb.animate([{ transform: 'none' }], { duration: 1, fill: 'both' });
    this.colorPose = orb.animate([{ color: this.color }, { color: this.color }], { duration: 1, fill: 'both' });
    this.shadowPose = this.shadow().nativeElement.animate([{ opacity: 0 }], {
      duration: 1,
      fill: 'both'
    });
    this.chargePose = this.charge().nativeElement.animate([{ opacity: 0 }, { opacity: 0 }], {
      duration: 1,
      fill: 'both'
    });
    for (const animation of [this.pose, this.shadowPose, this.chargePose, this.colorPose]) {
      animation.pause();
      animation.currentTime = 0;
    }
    this.scene = mountGlassScene(stage);
    orb.addEventListener('pointerdown', this.grab, { signal });
    orb.addEventListener('pointermove', this.drag, { signal });
    orb.addEventListener('pointerup', this.release, { signal });
    orb.addEventListener('pointercancel', this.cancelDrag, { signal });
    orb.addEventListener('lostpointercapture', this.cancelDrag, { signal });
    orb.addEventListener('pointerenter', this.wake, { signal });
    orb.addEventListener('focus', this.wake, { signal });
    view.addEventListener('blur', this.cancelDrag, { signal });
    view.addEventListener('resize', this.invalidateGeometry, { signal, passive: true });
    stage.ownerDocument.addEventListener('scroll', this.invalidateGeometry, {
      signal,
      capture: true,
      passive: true
    });
    stage.ownerDocument.addEventListener('visibilitychange', this.visibilityChange, { signal });
    this.resize = new ResizeObserver(this.invalidateGeometry);
    this.resize.observe(stage);
    this.resize.observe(this.cards());
    this.intersection = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === stage) this.visible = entry.isIntersecting;
        if (entry.target === this.home) this.homeVisible = entry.isIntersecting;
      }
      this.visibilityChange();
    });
    this.intersection.observe(stage);
    this.intersection.observe(this.home);
    this.measure();
    this.readColors();
    this.paint(performance.now(), true);
    this.ready.set(true);
    this.scheduleWake();
  }

  protected bringHome(): void {
    if (this.physics.mood === 'danger') return;
    this.stayHome = true;
    this.clearWake();
    this.cancelDrag();
    this.physics.returnHome(!this.motionEnabled);
    if (!this.motionEnabled) this.lightLevel = 0;
    this.paint(performance.now(), true);
    this.start(true);
  }

  protected toss(event: MouseEvent): void {
    if (event.detail !== 0 || !this.motionEnabled) return;
    this.clearWake();
    if (this.physics.state === 'asleep') this.physics.wake();
    else this.physics.throw(160, -650);
    this.start();
  }

  protected keydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.bringHome();
      return;
    } else if (event.key.startsWith('Arrow')) {
      event.preventDefault();
      this.clearWake();
      const dx = event.key === 'ArrowLeft' ? -30 : event.key === 'ArrowRight' ? 30 : 0;
      const dy = event.key === 'ArrowUp' ? -30 : event.key === 'ArrowDown' ? 30 : 0;
      this.physics.fly();
      this.physics.drag(this.physics.x + dx, this.physics.y + dy);
      if (this.motionEnabled) this.physics.throw(dx * 10, dy * 10 - 220);
      else {
        this.physics.park();
        this.lightLevel = 1;
      }
    } else return;
    this.paint(performance.now(), true);
    this.start();
  }

  private measure(): void {
    const plane = this.plane().nativeElement.getBoundingClientRect();
    const cards = this.cards().getBoundingClientRect();
    const home = this.home?.getBoundingClientRect() ?? cards;
    const geometry = `${plane.left}:${plane.top}:${plane.width}:${plane.height}:${cards.left}:${cards.top}:${cards.width}:${cards.height}:${home.left}:${home.top}:${home.width}:${home.height}`;
    if (geometry === this.lastGeometry) {
      this.dirtyGeometry = false;
      return;
    }
    this.lastGeometry = geometry;
    this.originX = plane.left;
    this.originY = plane.top;
    this.floor = plane.height - radius - 2;
    this.physics.resize({
      left: radius + 2,
      right: Math.max(radius + 2, plane.width - radius - 2),
      top: radius + 2,
      bottom: Math.max(radius + 2, this.floor),
      cruiseY: home.top - plane.top + home.height / 2,
      homeX: home.left - plane.left + home.width / 2,
      homeY: home.top - plane.top + home.height / 2
    });
    this.dirtyGeometry = false;
    this.scene?.refresh();
  }

  private readColors(): void {
    const children = this.probes().nativeElement.children;
    moods.forEach((mood, index) => {
      const css = this.view?.getComputedStyle(children[index]).color ?? '';
      const channels = css
        .match(/[\d.]+/g)
        ?.slice(0, 3)
        .map(Number);
      if (channels?.length === 3) this.colors[mood] = channels.map((value) => (css.startsWith('color(') ? value * 255 : value)) as RGB;
    });
    this.rgb = [...this.colors[this.physics.mood]];
    this.colorsDirty = false;
  }

  private endPointer(): void {
    const pointer = this.pointer;
    this.pointer = undefined;
    this.samples = [];
    this.lastPointerPoint = undefined;
    const orb = this.orb().nativeElement;
    if (pointer !== undefined && orb.hasPointerCapture(pointer)) orb.releasePointerCapture(pointer);
  }

  private start(force = false): void {
    if (!this.view || this.frame !== undefined || !this.visible || this.stage().ownerDocument.hidden) return;
    if (!force && (!this.motionEnabled || (this.physics.state === 'asleep' && this.lightLevel === 0))) return;
    this.frame = this.view.requestAnimationFrame(this.tick);
  }

  private stop(): void {
    if (this.frame !== undefined) this.view?.cancelAnimationFrame(this.frame);
    this.frame = this.lastTime = undefined;
  }

  private clearWake(): void {
    if (this.wakeTimer !== undefined) this.view?.clearTimeout(this.wakeTimer);
    this.wakeTimer = undefined;
  }

  private scheduleWake(): void {
    if (this.stayHome || this.wakeTimer !== undefined || !this.motionEnabled || !this.visible || !this.homeVisible || this.stage().ownerDocument.hidden) return;
    this.wakeTimer = this.view?.setTimeout(() => {
      this.wakeTimer = undefined;
      this.wake();
    }, 4500);
  }

  private paint(time: number, forceLight = false): void {
    if (!this.pose || !this.shadowPose) return;
    const p = this.physics;
    const lightDue = forceLight || time - this.lastLight >= (p.state === 'dragging' || p.state === 'falling' ? 50 : 80);
    if (lightDue) {
      const target = this.colors[p.mood];
      const blend = !this.motionEnabled || (p.state === 'asleep' && this.lightLevel === 0) ? 1 : 0.35;
      this.rgb = this.rgb.map((channel, i) => channel + (target[i] - channel) * blend) as RGB;
      this.color = `rgb(${this.rgb.map(Math.round).join(' ')})`;
    }
    // Paused effects update only this character, without waking the document's ambient observer.
    const wall = p.contact;
    const pressX = p.scaleX < 1 ? radius * (1 - p.scaleX) * (wall === 'left' ? -1 : wall === 'right' ? 1 : 0) : 0;
    const pressY = p.scaleY < 1 ? radius * (1 - p.scaleY) * (wall === 'top' ? -1 : wall === 'bottom' ? 1 : 0) : 0;
    const pose = {
      transform: `translate3d(${p.x - radius + pressX}px, ${p.y - radius + pressY}px, 0) rotate(${p.stretchAngle}rad) scale(${p.scaleX}, ${p.scaleY}) rotate(${p.angle - p.stretchAngle}rad)`
    };
    const poseKey = pose.transform;
    if (poseKey !== this.lastPose) {
      this.lastPose = poseKey;
      (this.pose.effect as KeyframeEffect).setKeyframes([pose, pose]);
    }
    if (this.colorPose && this.color !== this.lastColor) {
      this.lastColor = this.color;
      const color = { color: this.color };
      (this.colorPose.effect as KeyframeEffect).setKeyframes([color, color]);
    }
    if (this.chargePose && (Math.abs(this.lightLevel - this.lastCharge) > 0.002 || (this.lightLevel === 0 && this.lastCharge !== 0))) {
      this.lastCharge = this.lightLevel;
      const charge = { opacity: this.lightLevel };
      (this.chargePose.effect as KeyframeEffect).setKeyframes([charge, charge]);
    }
    if (time - this.lastRibbon >= 40 && this.lightLevel > 0.002) {
      this.lastRibbon = time;
      const speed = p.mood === 'danger' ? 3.4 : p.mood === 'info' ? 0.65 : p.mood === 'warn' ? 1.9 : 1.1;
      const strength = p.mood === 'danger' ? 1.3 : p.mood === 'info' ? 0.65 : 1;
      const wave = this.liquidPath(this.ribbonTime * speed, 0, strength);
      this.ribbonCore().nativeElement.setAttribute('d', wave);
      this.ribbonGlow().nativeElement.setAttribute('d', wave);
      this.ribbonTail().nativeElement.setAttribute('d', this.liquidPath(this.ribbonTime * speed * 0.8, 2.4, strength * 0.8));
    }
    const height = Math.max(0, this.floor - p.y);
    const shadow = {
      transform: `translate3d(${p.x - 26}px, ${this.floor + radius - 6}px, 0) scale(${1 + Math.min(height, 180) / 150})`,
      opacity: p.state === 'asleep' ? 0 : Math.max(0, 0.22 - height / 650)
    };
    const shadowKey = shadow.opacity < 0.002 ? 'hidden' : `${shadow.transform}:${shadow.opacity.toFixed(2)}`;
    if (shadowKey !== this.lastShadow) {
      this.lastShadow = shadowKey;
      (this.shadowPose.effect as KeyframeEffect).setKeyframes([shadow, shadow]);
    }
    const state = p.state;
    if (this.state() !== state) this.state.set(state);
    if (this.mood() !== p.mood) this.mood.set(p.mood);
    if (p.impactSerial !== this.lastImpact) {
      this.lastImpact = p.impactSerial;
      if (this.motionEnabled) {
        const index = { left: 0, right: 1, top: 2, bottom: 3 }[p.impactWall];
        const edge = this.impact().nativeElement.children[index];
        this.impactAnimation?.cancel();
        this.impactAnimation = edge.animate(
          [
            { backgroundColor: this.color, opacity: 0.8 },
            { backgroundColor: this.color, opacity: 0 }
          ],
          { duration: 420, easing: 'ease-out' }
        );
      }
    }
    if (!lightDue) return;
    this.lastLight = time;
    const sceneKey = `${this.originX}:${this.originY}:${p.x.toFixed(1)}:${p.y.toFixed(1)}:${p.angle.toFixed(2)}:${this.color}:${this.lightLevel.toFixed(3)}:${p.mood}`;
    if (sceneKey === this.lastScene) return;
    this.lastScene = sceneKey;
    this.scene?.update({
      reuseGeometry: true,
      // One area of emission is enough for the orb's single current hue. Placing it
      // just outside the glass also keeps the draggable body out of receiver hit tests.
      lights:
        this.lightLevel === 0
          ? []
          : [
              {
                x: this.originX + p.x,
                y: this.originY + p.y + radius + 9,
                z: 30,
                color: this.color,
                intensity: this.lightLevel * (p.mood === 'danger' ? 1.5 : 1.15),
                radius: p.state === 'asleep' ? 140 : 280
              }
            ]
    });
  }

  private liquidPath(time: number, phase: number, strength: number): string {
    const turn = time * 0.32 + phase;
    const tilt = 0.55 + Math.sin(time * 0.31 + phase) * 0.35;
    const cosTurn = Math.cos(turn),
      sinTurn = Math.sin(turn),
      cosTilt = Math.cos(tilt),
      sinTilt = Math.sin(tilt);
    const points = ribbonSamples.map(({ u, cos, sin }) => {
      const r = 15 + Math.sin(u * 3 - time * 0.65 + phase) * 1.8;
      const x = cos * r,
        y = Math.sin(u * 2 + time * 0.4 + phase) * (4 + strength * 1.6),
        z = sin * r;
      const rx = x * cosTurn + z * sinTurn,
        rz = z * cosTurn - x * sinTurn;
      const ry = y * cosTilt - rz * sinTilt,
        depth = y * sinTilt + rz * cosTilt;
      const perspective = 55 / (55 - depth);
      return { x: 30 + rx * perspective, y: 30 + ry * perspective, width: (0.75 + ((depth + 20) / 40) * 1.9) * strength };
    });
    const left = points.map((point, i) => {
      const a = points[Math.max(0, i - 1)],
        b = points[Math.min(points.length - 1, i + 1)];
      const length = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      return {
        x: point.x - ((b.y - a.y) / length) * point.width,
        y: point.y + ((b.x - a.x) / length) * point.width
      };
    });
    const right = points
      .map((point, i) => {
        const a = points[Math.max(0, i - 1)],
          b = points[Math.min(points.length - 1, i + 1)];
        const length = Math.hypot(b.x - a.x, b.y - a.y) || 1;
        return {
          x: point.x + ((b.y - a.y) / length) * point.width,
          y: point.y - ((b.x - a.x) / length) * point.width
        };
      })
      .reverse();
    const outline = [...left, ...right];
    let path = `M${outline[0].x.toFixed(2)} ${outline[0].y.toFixed(2)}`;
    for (let i = 1; i < outline.length; i++) {
      const before = outline[i - 1],
        point = outline[i];
      path += `Q${before.x.toFixed(2)} ${before.y.toFixed(2)} ${((before.x + point.x) / 2).toFixed(2)} ${((before.y + point.y) / 2).toFixed(2)}`;
    }
    return path + 'Z';
  }
}
