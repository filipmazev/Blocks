// Run against a running playground: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/orb.cjs
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium, webkit } = require(process.env.BLOCKS_PLAYWRIGHT_PATH || 'playwright');
const origin = process.env.BLOCKS_PLAYGROUND_URL || 'http://localhost:8080';
let browser;
before(async () => {
  browser =
    process.env.BLOCKS_BROWSER === 'webkit'
      ? await webkit.launch()
      : await chromium.launch({ channel: 'chrome' });
});
after(async () => browser?.close());
async function overview(t, options = {}) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    colorScheme: 'dark',
    ...options,
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  t.after(async () => {
    await page.close();
    assert.deepEqual(errors, []);
  });
  await page.addInitScript(() => {
    localStorage.setItem('theme-palette', 'tangerine-indigo');
    window.orbMetrics = { paints: 0, hits: 0, impacts: 0, squash: 0 };
    const keyframes = KeyframeEffect.prototype.setKeyframes;
    KeyframeEffect.prototype.setKeyframes = function (...args) {
      if (this.target?.classList.contains('light-orb')) {
        orbMetrics.paints++;
        const rotations = [
          ...String(args[0]?.[0]?.transform || '').matchAll(/rotate\(([-\d.]+)rad\)/g),
        ];
        if (rotations.length)
          orbMetrics.angle = rotations.reduce((sum, match) => sum + Number(match[1]), 0);
        const transform = args[0]?.[0]?.transform || '';
        const scale = transform.match(/scale\(([\d.]+),\s*([\d.]+)\)/);
        if (scale)
          orbMetrics.squash = Math.max(
            orbMetrics.squash,
            Math.abs(Number(scale[1]) - Number(scale[2])),
          );
      }
      return keyframes.apply(this, args);
    };
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (...args) {
      if (this.classList.contains('orb-impact')) orbMetrics.impacts++;
      return animate.apply(this, args);
    };
    const hit = Document.prototype.elementsFromPoint;
    Document.prototype.elementsFromPoint = function (...args) {
      orbMetrics.hits++;
      return hit.apply(this, args);
    };
  });
  await page.goto(`${origin}/home`);
  await page.waitForSelector('.orb-ready');
  await page.waitForFunction(
    () => document.querySelector('.light-orb')?.getBoundingClientRect().width > 30,
  );
  await page.waitForTimeout(300);
  return page;
}
const pose = (page) =>
  page.locator('.light-orb').evaluate((el) => {
    const r = el.getBoundingClientRect();
    return {
      x: r.x + r.width / 2,
      y: r.y + r.height / 2,
      color: getComputedStyle(el).color,
      state: el.dataset.state,
      mood: el.dataset.mood,
    };
  });
const charge = (page) =>
  page.locator('.orb-charge').evaluate((el) => Number(getComputedStyle(el).opacity));
const waitState = (page, state, timeout = 10000) =>
  page.waitForFunction(
    (state) => document.querySelector('.light-orb').dataset.state === state,
    state,
    { timeout },
  );
async function wake(page) {
  await page.locator('.light-orb').hover();
  await waitState(page, 'flying');
  await page.mouse.move(270, 80);
  await page.waitForTimeout(400);
}
async function grab(page) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const point = await pose(page);
    await page.mouse.move(point.x, point.y);
    await page.mouse.down();
    try {
      await waitState(page, 'dragging', 500);
      return;
    } catch {
      await page.mouse.up();
    }
  }
  await waitState(page, 'dragging', 1000);
}

async function expectHome(page) {
  await waitState(page, 'asleep');
  const p = await pose(page),
    home = await page.locator('.orb-nest-well').boundingBox();
  assert.ok(
    Math.hypot(p.x - home.x - home.width / 2, p.y - home.y - home.height / 2) < 2,
    JSON.stringify({ p, home }),
  );
}

test('the unlit swatch sleeps in its well and charges gradually when waking itself', async (t) => {
  const page = await overview(t);
  await expectHome(page);
  assert.equal(await charge(page), 0);
  assert.equal(await page.locator('.orb-face,.eye,.mouth').count(), 0);
  await page.evaluate(() => {
    window.chargeSamples = [];
    const start = performance.now();
    const watch = () => {
      const orb = document.querySelector('.light-orb');
      chargeSamples.push({
        state: orb.dataset.state,
        charge: Number(getComputedStyle(orb.querySelector('.orb-charge')).opacity),
      });
      if (performance.now() - start < 6500) requestAnimationFrame(watch);
    };
    requestAnimationFrame(watch);
  });
  await waitState(page, 'flying', 9000);
  const ramp = await page.evaluate(() =>
    chargeSamples.filter((sample) => sample.state === 'waking'),
  );
  assert.ok(
    ramp.length >= 3 && ramp[0].charge < 0.3 && ramp[ramp.length - 1].charge > ramp[0].charge,
    JSON.stringify(ramp),
  );
  await waitState(page, 'flying');
  await page.waitForFunction(
    () => Number(getComputedStyle(document.querySelector('.orb-charge')).opacity) > 0.9,
  );
});

test('liquid ribbons change their 3D shape and light the sphere without ambient rescans', async (t) => {
  const page = await overview(t);
  await wake(page);
  await page.waitForFunction(() => {
    const now = performance.now();
    if (!window.orbQuiet || orbQuiet.hits !== orbMetrics.hits)
      window.orbQuiet = { hits: orbMetrics.hits, time: now };
    return now - orbQuiet.time > 500;
  });
  const first = await page.locator('.ribbon-core').getAttribute('d');
  const hits = await page.evaluate(() => orbMetrics.hits);
  await page.waitForTimeout(220);
  const second = await page.locator('.ribbon-core').getAttribute('d');
  assert.ok(first?.endsWith('Z'));
  assert.notEqual(first, second);
  assert.ok(await page.locator('.orb-volume').isVisible());
  assert.equal(await page.locator('.light-orb').getAttribute('style'), null);
  assert.equal(await page.evaluate(() => orbMetrics.hits), hits);
});

test('a real flick retains momentum, bounces, squashes, falls and shakes itself off', async (t) => {
  const page = await overview(t);
  await wake(page);
  await grab(page);
  const stage = await page.locator('.orb-plane').boundingBox();
  const target = { x: stage.x + stage.width * 0.4, y: stage.y + stage.height * 0.38 };
  await page.mouse.move(target.x, target.y, { steps: 6 });
  await page.waitForTimeout(130);
  for (let i = 1; i <= 5; i++) {
    await page.mouse.move(target.x + i * 22, target.y + i * 12);
    await page.waitForTimeout(16);
  }
  await page.mouse.up();
  await waitState(page, 'falling');
  const first = await pose(page);
  await page.waitForTimeout(90);
  const next = await pose(page);
  assert.ok(Math.hypot(first.x - next.x, first.y - next.y) > 20, JSON.stringify({ first, next }));
  await waitState(page, 'recovering', 10000);
  assert.ok(await page.evaluate(() => orbMetrics.impacts >= 2));
  assert.ok(await page.evaluate(() => orbMetrics.squash > 0.25));
  const a = await page.locator('.light-orb').evaluate((el) => getComputedStyle(el).transform);
  await page.waitForTimeout(350);
  assert.notEqual(
    await page.locator('.light-orb').evaluate((el) => getComputedStyle(el).transform),
    a,
  );
  await waitState(page, 'flying');
});

test('gentle handling glows success and existing cards receive the same current color', async (t) => {
  const page = await overview(t);
  await wake(page);
  await grab(page);
  const p = await pose(page);
  await page.mouse.move(p.x + 22, p.y + 10, { steps: 4 });
  await page.waitForTimeout(160);
  await page.mouse.up();
  await page.waitForFunction(() => document.querySelector('.light-orb').dataset.mood === 'success');
  await page.waitForTimeout(650);
  const result = await page.evaluate(() => {
    const orb = document.querySelector('.light-orb');
    const color = getComputedStyle(orb).color;
    const expected = getComputedStyle(
      document.querySelector('.orb-color-probes').children[1],
    ).color;
    const lights = [
      ...document.querySelectorAll('.feature-card .bx-glass-rim [data-bx-light-source]'),
    ]
      .filter((el) => /^\d+:\d+$/.test(el.dataset.bxLightSource) && el.style.opacity === '1')
      .map((el) => el.style.backgroundImage.match(/rgb\([^)]+\)/)?.[0]);
    return { color, expected, lights };
  });
  const channels = (s) =>
    s
      .match(/[\d.]+/g)
      .slice(0, 3)
      .map(Number);
  assert.ok(
    channels(result.color).every((value, i) => Math.abs(value - channels(result.expected)[i]) < 4),
    JSON.stringify(result),
  );
  assert.ok(result.lights.length > 0, JSON.stringify(result));
  assert.ok(
    result.lights.every((light) =>
      channels(light).every((value, i) => Math.abs(value - channels(result.color)[i]) < 4),
    ),
    JSON.stringify(result),
  );
});

test('repeated throws create red frantic bounces, block recall, then cool and return home', async (t) => {
  const page = await overview(t);
  await wake(page);
  await page.locator('.light-orb').focus();
  for (let i = 0; i < 3; i++) {
    await page.keyboard.press('Enter');
    await page.waitForTimeout(80);
  }
  await page.waitForFunction(() => document.querySelector('.light-orb').dataset.mood === 'danger');
  assert.ok(
    await page.getByRole('button', { name: 'Bring the light home', exact: true }).isDisabled(),
  );
  await page.keyboard.press('Escape');
  assert.notEqual((await pose(page)).state, 'returning');
  const before = await page.evaluate(() => orbMetrics.impacts);
  await page.waitForTimeout(1800);
  assert.ok(await page.evaluate((before) => orbMetrics.impacts - before >= 2, before));
  const color = await pose(page);
  const expected = await page
    .locator('.orb-color-probes i')
    .nth(3)
    .evaluate((el) => getComputedStyle(el).color);
  assert.equal(color.color, expected);
  await page.waitForFunction(
    () => document.querySelector('.light-orb').dataset.mood === 'info',
    null,
    { timeout: 9000 },
  );
  assert.ok(
    await page.getByRole('button', { name: 'Bring the light home', exact: true }).isEnabled(),
  );
  await expectHome(page);
  await page.waitForFunction(
    () => Number(getComputedStyle(document.querySelector('.orb-charge')).opacity) === 0,
    null,
    { timeout: 4000 },
  );
});

test('Bring home guides it to the well, fades out and leaves it resting', async (t) => {
  const page = await overview(t);
  await wake(page);
  await page.getByRole('button', { name: 'Bring the light home', exact: true }).click();
  await waitState(page, 'returning');
  await expectHome(page);
  await page.waitForFunction(
    () => Number(getComputedStyle(document.querySelector('.orb-charge')).opacity) === 0,
    null,
    { timeout: 4000 },
  );
  const start = await pose(page),
    paints = await page.evaluate(() => orbMetrics.paints);
  await page.waitForTimeout(4700);
  assert.deepEqual(await pose(page), start);
  assert.equal(await page.evaluate(() => orbMetrics.paints), paints);
});

test('the boundary encloses the whole overview and reduced motion supports direct positioning', async (t) => {
  const page = await overview(t, { reducedMotion: 'reduce' });
  const frame = await page.locator('.orb-plane').boundingBox(),
    hero = await page.locator('.hero').boundingBox(),
    footer = await page.locator('.home-footer').boundingBox();
  assert.ok(frame.y <= hero.y + 1 && frame.y + frame.height >= footer.y + footer.height - 1);
  assert.equal(await charge(page), 0);
  const first = await pose(page);
  await page.locator('.light-orb').focus();
  await page.keyboard.press('ArrowLeft');
  assert.ok((await pose(page)).x < first.x);
  await page.getByRole('button', { name: 'Bring the light home', exact: true }).click();
  await expectHome(page);
  const paints = await page.evaluate(() => orbMetrics.paints);
  await page.waitForTimeout(300);
  assert.equal(await page.evaluate(() => orbMetrics.paints), paints);
});

test('mobile touch wakes the swatch and preserves the page boundaries', async (t) => {
  const page = await overview(t, {
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
  });
  await page.locator('.light-orb').scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const p = await pose(page);
  assert.ok(p.x > 16 && p.x < 374, JSON.stringify(p));
  await page.touchscreen.tap(p.x, p.y);
  await waitState(page, 'flying');
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
});

test('hidden documents stop animation and route changes dispose of it', async (t) => {
  const page = await overview(t);
  await wake(page);
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  const p = await pose(page),
    paints = await page.evaluate(() => orbMetrics.paints);
  await page.waitForTimeout(300);
  assert.deepEqual(await pose(page), p);
  assert.equal(await page.evaluate(() => orbMetrics.paints), paints);
  await page.evaluate(() => {
    delete document.hidden;
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await page.getByRole('link', { name: 'Configure appearance', exact: true }).click();
  await page.waitForURL('**/appearance');
  const end = await page.evaluate(() => orbMetrics.paints);
  await page.waitForTimeout(300);
  assert.equal(await page.evaluate(() => orbMetrics.paints), end);
});

test('a circular drag released near its starting point retains spin instead of becoming a wake tap', async (t) => {
  const page = await overview(t);
  await grab(page);
  const point = await pose(page),
    center = { x: point.x - 45, y: point.y };
  for (let i = 1; i <= 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    await page.mouse.move(center.x + Math.cos(angle) * 45, center.y + Math.sin(angle) * 45);
    await page.waitForTimeout(12);
  }
  await page.mouse.up();
  await page.waitForFunction(() =>
    ['coasting', 'falling'].includes(document.querySelector('.light-orb').dataset.state),
  );
  const angle = await page.evaluate(() => orbMetrics.angle);
  await page.waitForTimeout(140);
  assert.ok(Math.abs((await page.evaluate(() => orbMetrics.angle)) - angle) > 0.5);
});

test('a moderate flick glides in its release direction, with no sudden gravity or dead stop', async (t) => {
  const page = await overview(t);
  await wake(page);
  await grab(page);
  const stage = await page.locator('.orb-plane').boundingBox();
  const x = stage.x + stage.width * 0.4,
    y = stage.y + stage.height * 0.45;
  await page.mouse.move(x, y, { steps: 5 });
  await page.waitForTimeout(160);
  for (let i = 1; i <= 6; i++) {
    await page.mouse.move(x + i * 10, y + Math.sin(i) * 1.2);
    await page.waitForTimeout(22);
  }
  await page.mouse.up();
  await waitState(page, 'coasting');
  const initial = await pose(page);
  await page.waitForTimeout(300);
  const later = await pose(page);
  assert.ok(later.x > initial.x + 20, JSON.stringify({ initial, later }));
  assert.ok(Math.abs(later.y - initial.y) < 25, JSON.stringify({ initial, later }));
  assert.notEqual(later.state, 'falling');
  await page.waitForTimeout(850);
  const rejoining = await pose(page);
  assert.ok(rejoining.x > later.x + 30, JSON.stringify({ later, rejoining }));
  assert.equal(rejoining.state, 'flying');
});
