const { test } = require('node:test');
const assert = require('node:assert/strict');
const { buildSync } = require('esbuild');
const { runInNewContext } = require('node:vm');
const result = buildSync({
  entryPoints: [
    'projects/playground/src/app/components/screens/home/light-orb/light-orb-physics.ts',
  ],
  bundle: true,
  format: 'cjs',
  write: false,
});
const compiled = { exports: {} };
runInNewContext(result.outputFiles[0].text, { module: compiled, exports: compiled.exports });
const { LightOrbPhysics, orbReleaseVelocity, orbReleaseMotion } = compiled.exports;
const bounds = { left: 30, right: 970, top: 30, bottom: 650, cruiseY: 300 };
const create = () => {
  const physics = new LightOrbPhysics();
  physics.resize(bounds);
  physics.fly();
  return physics;
};
const advance = (physics, seconds, fps = 60) => {
  for (let frame = 0; frame < seconds * fps; frame++) physics.step(1 / fps);
};

test('flight roams near the cards without gravity', () => {
  const physics = create();
  const start = physics.x;
  advance(physics, 4);
  assert.equal(physics.state, 'flying');
  assert.ok(Math.abs(physics.x - start) > 20);
  assert.ok(Math.abs(physics.y - bounds.cruiseY) < 85);
});
test('dragging follows the grab, stays bounded, and suspends motion', () => {
  const physics = create();
  physics.grab();
  physics.drag(-200, 2000);
  advance(physics, 1);
  assert.equal(physics.x, bounds.left);
  assert.equal(physics.y, bounds.bottom);
  assert.equal(physics.vx, 0);
  assert.equal(physics.vy, 0);
});
test('throws preserve momentum while gravity pulls down', () => {
  const physics = create();
  physics.grab();
  physics.drag(400, 250);
  physics.throw(800, -300);
  advance(physics, 0.1);
  assert.ok(physics.x > 475 && physics.x < 482);
  assert.ok(physics.y < 250);
  assert.ok(physics.vy > -300);
  assert.ok(physics.vx > 750);
});
test('walls and floor bounce with a loss of energy', () => {
  const physics = create();
  physics.grab();
  physics.drag(960, 640);
  physics.throw(500, 500);
  advance(physics, 0.05);
  assert.ok(physics.vx < 0 && Math.abs(physics.vx) < 500);
  assert.ok(physics.vy < 0 && Math.abs(physics.vy) < 500);
  assert.ok(physics.x <= bounds.right && physics.y <= bounds.bottom);
});
test('a landed orb shakes itself off, then takes flight again', () => {
  const physics = create();
  physics.grab();
  physics.drag(300, 200);
  physics.throw(700, 0);
  let recovered = false,
    shook = false,
    flew = false;
  for (let frame = 0; frame < 600; frame++) {
    physics.step(1 / 120);
    if (physics.state === 'recovering') {
      recovered = true;
      if (Math.abs(physics.angle) > 0.05) shook = true;
    }
    if (recovered && physics.state === 'flying') {
      flew = true;
      break;
    }
  }
  assert.ok(recovered);
  assert.ok(shook);
  assert.ok(flew);
  advance(physics, 1.5);
  assert.ok(physics.y < bounds.bottom - 100);
});
test('30 Hz and 120 Hz produce the same ballistic path', () => {
  const slow = create(),
    fast = create();
  for (const physics of [slow, fast]) {
    physics.grab();
    physics.drag(400, 250);
    physics.throw(650, -350);
  }
  advance(slow, 1, 30);
  advance(fast, 1, 120);
  assert.ok(Math.abs(slow.x - fast.x) < 0.01);
  assert.ok(Math.abs(slow.y - fast.y) < 0.01);
});
test('resizing and long frames never let a thrown orb escape', () => {
  const physics = create();
  physics.throw(100000, -100000);
  physics.resize({ left: 30, right: 200, top: 30, bottom: 500, cruiseY: 200 });
  for (let i = 0; i < 20; i++) physics.step(10);
  assert.ok(physics.x >= 30 && physics.x <= 200);
  assert.ok(physics.y >= 30 && physics.y <= 500);
});

test('the swatch sleeps at home, wakes and returns to the same recess', () => {
  const p = new LightOrbPhysics();
  p.resize({ ...bounds, homeX: 720, homeY: 180 });
  assert.equal(p.state, 'asleep');
  assert.equal(p.x, 720);
  assert.equal(p.y, 180);
  p.wake();
  advance(p, 0.8);
  assert.equal(p.state, 'flying');
  advance(p, 15);
  assert.equal(p.state, 'asleep');
  assert.equal(p.x, 720);
  assert.equal(p.y, 180);
});
test('gentle play is success, a rough throw is warn, repeated throws become danger', () => {
  const p = create();
  p.throw(80, -100);
  assert.equal(p.mood, 'success');
  p.grab();
  p.throw(900, -500);
  assert.equal(p.mood, 'warn');
  for (let i = 0; i < 3; i++) {
    p.grab();
    p.throw(1000, -900);
    advance(p, 0.1);
  }
  assert.equal(p.mood, 'danger');
});
test('anger adds energetic wall bounces and cools through info before primary', () => {
  const p = create();
  for (let i = 0; i < 3; i++) {
    p.grab();
    p.throw(1000, -900);
    advance(p, 0.1);
  }
  p.fly();
  const start = p.impactSerial;
  advance(p, 3);
  assert.equal(p.mood, 'danger');
  assert.ok(p.impactSerial - start >= 2);
  advance(p, 3.6);
  assert.equal(p.mood, 'info');
  advance(p, 3.6);
  assert.equal(p.mood, 'primary');
});
test('self-generated angry impacts never extend the anger timer', () => {
  const p = create();
  for (let i = 0; i < 3; i++) p.throw(1800, 1000);
  p.fly();
  advance(p, 7);
  assert.equal(p.mood, 'info');
  assert.ok(p.impactSerial > 3);
});

test('release velocity preserves a flick despite a delayed pointerup', () => {
  const samples = [
    { x: 0, y: 0, time: 0 },
    { x: 20, y: 8, time: 20 },
    { x: 40, y: 16, time: 40 },
  ];
  const velocity = orbReleaseVelocity(samples, 100);
  assert.ok(Math.abs(velocity[0] - 1000) < 1);
  assert.ok(Math.abs(velocity[1] - 400) < 1);
  assert.deepEqual(Array.from(orbReleaseVelocity(samples, 200)), [0, 0]);
});
test('impacts squash along the contact axis and stretch the other axis', () => {
  const wall = create();
  wall.grab();
  wall.drag(960, 300);
  wall.throw(1000, 0);
  advance(wall, 0.025);
  assert.ok(wall.scaleX < 0.85 && wall.scaleY > 1.15);
  const floor = create();
  floor.grab();
  floor.drag(500, 645);
  floor.throw(0, 1000);
  advance(floor, 0.025);
  assert.ok(floor.scaleX > 1.15 && floor.scaleY < 0.85);
});
test('angry motion cannot be recalled and eventually returns home after cooling', () => {
  const p = create();
  for (let i = 0; i < 3; i++) p.throw(1200, 800);
  const state = p.state;
  p.returnHome();
  assert.equal(p.state, state);
  assert.equal(p.mood, 'danger');
  advance(p, 20);
  assert.equal(p.state, 'asleep');
  assert.equal(p.mood, 'primary');
});

test('release follows the final acceleration and the tangent of a circular swing', () => {
  const accelerating = [0, 20, 40, 60].map((time) => ({
    time,
    x: 10000 * (time / 1000) ** 2,
    y: 0,
  }));
  const a = orbReleaseMotion(accelerating, 60);
  assert.ok(a.vx > 1100 && a.vx < 1300);
  assert.equal(a.vy, 0);
  const circle = Array.from({ length: 9 }, (_, i) => ({
    time: i * 10,
    x: 50 * Math.cos(i * 0.2),
    y: 50 * Math.sin(i * 0.2),
  }));
  const circular = orbReleaseMotion(circle, 80);
  assert.ok(circular.vx < -700);
  assert.ok(circular.spin > 10);
});
test('spin survives the release and gravity responds consistently at ten frames per second', () => {
  const spinning = create();
  spinning.grab();
  spinning.drag(400, 200);
  spinning.throw(100, -100, 10);
  advance(spinning, 0.25);
  assert.ok(spinning.angle > 2);
  assert.ok(spinning.spin > 8);
  const slow = create(),
    fast = create();
  for (const p of [slow, fast]) {
    p.grab();
    p.drag(400, 200);
    p.throw(250, -250);
  }
  advance(slow, 1, 10);
  advance(fast, 1, 120);
  assert.ok(Math.abs(slow.x - fast.x) < 0.01);
  assert.ok(Math.abs(slow.y - fast.y) < 0.01);
});

test('a gentle nudge glides while a committed flick starts gravity immediately', () => {
  const gentle = create();
  gentle.grab();
  gentle.drag(400, 250);
  gentle.throw(100, -30);
  assert.equal(gentle.state, 'coasting');
  advance(gentle, 0.2);
  assert.ok(gentle.x > 415);
  assert.ok(gentle.y < 250);
  const flick = create();
  flick.grab();
  flick.drag(400, 250);
  flick.throw(850, 150);
  assert.equal(flick.state, 'falling');
  advance(flick, 0.2);
  assert.ok(flick.vy > 400);
  assert.ok(flick.x > 480);
});

test('moderate releases and incidental spin never select gravity, matching the recorded nudge', () => {
  for (const speed of [0, 180, 300, 450, 600]) {
    const p = create();
    p.grab();
    p.drag(450, 250);
    p.throw(speed, 0, 8, 45);
    assert.equal(p.state, 'coasting');
    advance(p, 0.5);
    assert.ok(Math.abs(p.y - 250) < 0.01);
    assert.ok(p.angle > 2);
  }
  const jitter = create();
  jitter.throw(1100, 0, 0, 15);
  assert.equal(jitter.state, 'coasting');
});
test('a nudge returns to its course gradually rather than snapping toward a distant target', () => {
  const p = create();
  p.grab();
  p.drag(850, 450);
  p.throw(-350, -50, 0, 50);
  advance(p, 0.9);
  const x = p.x,
    y = p.y;
  advance(p, 0.15);
  assert.ok(p.x < x);
  assert.ok(Math.abs(p.y - y) < 15);
  assert.equal(p.state, 'flying');
});

test('gentle release retains a visible carry and does not stop when steering resumes', () => {
  const p = create();
  p.grab();
  p.drag(600, 300);
  p.throw(100, 0, 0, 20);
  advance(p, 0.9);
  assert.ok(p.x > 665);
  const x = p.x;
  advance(p, 0.2);
  assert.ok(p.x > x + 8);
  assert.ok(p.vx > 40);
});
test('a decelerating nudge retains some recent motion without inventing a hard throw', () => {
  const samples = [
    { time: 0, x: 0, y: 0 },
    { time: 30, x: 9, y: 0 },
    { time: 60, x: 15, y: 0 },
    { time: 90, x: 18, y: 0 },
  ];
  const motion = orbReleaseMotion(samples, 140);
  assert.ok(motion.vx >= 80);
  assert.ok(motion.vx < 400);
  const p = create();
  p.throw(motion.vx, motion.vy, motion.spin, motion.travel);
  assert.equal(p.state, 'coasting');
});
