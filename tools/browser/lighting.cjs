// Run: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/lighting.cjs
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { readFileSync } = require('node:fs');
const { build } = require('esbuild');
const { chromium, webkit } = require(process.env.BLOCKS_PLAYWRIGHT_PATH || 'playwright');
let browser, server, origin;
before(async () => {
  const bundle = await build({
    entryPoints: ['projects/blocks/effects/runtime/index.ts'],
    bundle: true,
    format: 'esm',
    write: false,
  });
  const css = readFileSync('projects/blocks/effects/effects.css', 'utf8');
  server = createServer((req, res) => {
    res.setHeader('Content-Type', req.url === '/runtime.js' ? 'text/javascript' : 'text/html');
    res.end(
      req.url === '/runtime.js'
        ? bundle.outputFiles[0].text
        : `<!doctype html><style>${css}
      body { margin:0; background:#101014; color:white; font:16px sans-serif }
      #receiver { position:absolute; left:300px; top:180px; width:320px; height:180px; border-radius:20px; }
      .source { position:absolute; top:180px; width:100px; height:180px; }
      #left { left:168px; background:rgb(255,0,0); } #right { left:652px; background:rgb(0,0,255); }
      #backdrop { position:absolute; inset:0; width:1000px; height:600px; pointer-events:none; }
    </style><script type="module">
      import * as runtime from '/runtime.js'; window.runtime = runtime;
      window.metrics = { pixels:0, hits:0, rects:0, lights:0 };
      for (const [prototype, name, metric] of [[CanvasRenderingContext2D.prototype,'getImageData','pixels'],[Document.prototype,'elementsFromPoint','hits'],[Element.prototype,'getBoundingClientRect','rects']]) {
        const original = prototype[name]; prototype[name] = function(...args) { metrics[metric]++; return original.apply(this,args); };
      }
      window.fixture = (canvas = false, mount = false) => {
        document.body.innerHTML = (canvas ? '<canvas id="backdrop" width="1000" height="600"></canvas>' : '') + '<div id="left" class="source"></div><div id="right" class="source"></div><div id="receiver"></div>';
        window.receiver = document.getElementById('receiver');
        if (canvas) {
          window.context = document.getElementById('backdrop').getContext('2d');
          context.fillStyle = 'rgb(0,200,120)'; context.fillRect(0,0,1000,600);
        }
        window.handles = [];
        if (mount) handles.push(runtime.mountSurface(receiver));
        else handles.push({ destroy: runtime.observeGlassLighting(receiver, value => { window.lighting = value; metrics.lights++; }) });
      };
    </script>`,
    );
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
  browser =
    process.env.BLOCKS_BROWSER === 'webkit'
      ? await webkit.launch()
      : await chromium.launch({ channel: 'chrome' });
});
after(async () => {
  await browser?.close();
  await new Promise((resolve) => server?.close(resolve));
});
async function pageFor(t, canvas = false, mount = false) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
  t.after(() => page.close());
  await page.goto(origin);
  await page.waitForFunction(() => window.fixture);
  await page.evaluate(([canvas, mount]) => fixture(canvas, mount), [canvas, mount]);
  if (mount)
    await page.waitForFunction(() =>
      [...document.querySelectorAll('.bx-glass-environment')].some(
        (node) => node.style.backgroundImage,
      ),
    );
  else
    await page.waitForFunction(() => window.lighting?.contributions.some((light) => light.ambient));
  await page.waitForTimeout(250);
  return page;
}
const ambient = (page) =>
  page.evaluate(() => lighting.contributions.filter((light) => light.ambient));

test('nearby red and blue backgrounds light opposite edges with distance falloff', async (t) => {
  const page = await pageFor(t);
  let lights = await ambient(page);
  const red = lights.find((light) => light.color === 'rgb(255, 0, 0)');
  const blue = lights.find((light) => light.color === 'rgb(0, 0, 255)');
  assert.ok(red && blue, JSON.stringify(lights));
  assert.equal(red.x, 0);
  assert.equal(blue.x, 100);
  await page.evaluate(() => (document.getElementById('left').style.left = '110px'));
  await page.waitForTimeout(300);
  lights = await ambient(page);
  assert.ok(
    lights.find((light) => light.color === 'rgb(255, 0, 0)').edgeStrength < red.edgeStrength,
  );
  await page.evaluate(() => (document.getElementById('left').style.left = '0px'));
  await page.waitForTimeout(300);
  assert.ok(!(await ambient(page)).some((light) => light.color === 'rgb(255, 0, 0)'));
});

test('canvas preserves spatial colors; unchanged media does no receiver resampling', async (t) => {
  const page = await pageFor(t, true);
  const initialHits = await page.evaluate(() => metrics.hits);
  await page.evaluate(() => {
    context.fillStyle = '#ff0000';
    context.fillRect(0, 0, 460, 600);
    context.fillStyle = '#0000ff';
    context.fillRect(460, 0, 540, 600);
  });
  await page.waitForFunction(
    () =>
      lighting.contributions.some((light) => light.color.startsWith('rgb(255 0 0')) &&
      lighting.contributions.some((light) => light.color.startsWith('rgb(0 0 255')),
  );
  assert.equal(
    await page.evaluate(() => metrics.hits),
    initialHits,
    'canvas color changes reuse source bindings',
  );
  await page.waitForTimeout(300);
  const start = await page.evaluate(() => ({ ...metrics }));
  await page.waitForTimeout(1600);
  const end = await page.evaluate(() => ({ ...metrics }));
  assert.equal(end.hits, start.hits);
  assert.equal(end.lights, start.lights);
  assert.ok(end.pixels - start.pixels <= 2, JSON.stringify({ start, end }));
});

test('hover, focus and explicit sources coexist above bounded ambient layers', async (t) => {
  const page = await pageFor(t, true, true);
  await page.evaluate(() => {
    const left = document.getElementById('left');
    left.setAttribute('role', 'button');
    left.tabIndex = 0;
    handles.push(runtime.mountSurface(left, { emission: '#ff3300', focusEmission: '#ff3300' }));
    handles.push(
      runtime.mountGlassScene(document.body, {
        lights: [{ x: 650, y: 250, z: 24, color: '#3355ff', radius: 400 }],
      }),
    );
  });
  await page.locator('#left').hover();
  await page.waitForFunction(() => receiver.querySelector('[data-bx-light-source^="hover:"]'));
  await page.waitForTimeout(300);
  const structure = await page.evaluate(() => ({
    keys: [...receiver.querySelector('.bx-glass-rim').children].map(
      (node) => node.dataset.bxLightSource ?? 'ambient',
    ),
    ambientNodes: receiver.querySelectorAll('.bx-glass-environment').length,
    semantic: [...receiver.querySelectorAll('.bx-glass-rim [data-bx-light-source]')].map(
      (node) => node.style.backgroundImage,
    ),
  }));
  assert.equal(structure.ambientNodes, 2);
  assert.deepEqual(structure.keys.slice(0, 2), ['ambient', 'ambient']);
  assert.ok(structure.semantic.some((image) => image.includes('rgb(255, 51, 0)')));
  assert.ok(structure.semantic.some((image) => image.includes('rgb(51, 85, 255)')));
  const before = await page.evaluate(() => ({ ...metrics }));
  await page.mouse.move(400, 50);
  await page.locator('#left').focus();
  await page.waitForTimeout(240);
  assert.equal(
    await page.evaluate(() => metrics.hits),
    before.hits,
    'focus/hover must use cached ambient samples',
  );
  assert.ok(await page.locator('#receiver [data-bx-light-source^="hover:"]').count());
});

async function checkedControlsFor(t) {
  const page = await pageFor(t, false, true);
  await page.evaluate(() => {
    receiver.style.left = '250px';
    document.getElementById('left').innerHTML = `
      <label id="radio-a-label"><input type="radio" name="frequency" checked><span id="radio-a" class="is-checked"></span><span>Daily</span></label>
      <label id="radio-b-label"><input type="radio" name="frequency"><span id="radio-b"></span><span>Weekly</span></label>
      <label id="toggle-label"><input type="checkbox" checked><span id="toggle" class="is-checked"></span><span>On</span></label>`;
    for (const label of document.querySelectorAll('#left label')) {
      label.style.cssText = 'display:flex;align-items:center;gap:8px;height:32px;cursor:pointer';
      label.control.style.cssText = 'position:absolute;width:1px;height:1px;clip-path:inset(50%)';
    }
    for (const id of ['radio-a', 'radio-b', 'toggle']) {
      const element = document.getElementById(id);
      element.style.cssText = 'display:block;flex:none;width:20px;height:20px;border-radius:10px;background:#222';
      handles.push(runtime.mountSurface(element, { emission: '#ff3300' }));
    }
  });
  return page;
}

const waitForEmission = (page, id, active) => page.waitForFunction(
  ([id, active]) => !!document.querySelector(`#${id} .bx-glass-rim [data-bx-light-source="emitter"]`) === active,
  [id, active],
);

test('checked native radios and switches keep emitting after release and blur, and radio peers stop', async (t) => {
  const page = await checkedControlsFor(t);
  await waitForEmission(page, 'radio-a', true);
  await waitForEmission(page, 'toggle', true);
  await waitForEmission(page, 'radio-b', false);
  await page.locator('#radio-b-label').click();
  await page.mouse.move(900, 600);
  await page.evaluate(() => document.activeElement.blur());
  await waitForEmission(page, 'radio-a', false);
  await waitForEmission(page, 'radio-b', true);
  await waitForEmission(page, 'toggle', true);
  await page.waitForTimeout(250);
  assert.equal(await page.locator('#radio-a-label input').isChecked(), false);
  assert.equal(await page.locator('#radio-b-label input').isChecked(), true);
  assert.ok(await page.locator('#receiver [data-bx-light-source^="hover:"]').count());
});

test('form-style checked class updates and native disabled state update persistent emission', async (t) => {
  const page = await checkedControlsFor(t);
  await waitForEmission(page, 'toggle', true);
  await page.evaluate(() => {
    const visual = document.getElementById('toggle');
    visual.closest('label').control.checked = false;
    visual.classList.remove('is-checked');
  });
  await waitForEmission(page, 'toggle', false);
  await page.evaluate(() => {
    const visual = document.getElementById('toggle');
    visual.closest('label').control.checked = true;
    visual.classList.add('is-checked');
  });
  await waitForEmission(page, 'toggle', true);
  await page.evaluate(() => document.getElementById('toggle-label').control.disabled = true);
  await waitForEmission(page, 'toggle', false);
  await page.locator('#toggle-label').hover();
  await waitForEmission(page, 'toggle', false);
  await page.evaluate(() => document.getElementById('toggle-label').control.disabled = false);
  await page.mouse.move(900, 600);
  await waitForEmission(page, 'toggle', true);
});

test('hovering an unchecked radio label emits through its visual and stops on leave', async (t) => {
  const page = await checkedControlsFor(t);
  await page.locator('#radio-b-label > span:last-child').hover();
  await waitForEmission(page, 'radio-b', true);
  await page.locator('#radio-b').hover();
  await waitForEmission(page, 'radio-b', true);
  await page.mouse.move(900, 600);
  await waitForEmission(page, 'radio-b', false);
});

test('ARIA checked state emits for custom radio and switch surfaces', async (t) => {
  const page = await pageFor(t, false, true);
  await page.evaluate(() => {
    const source = document.getElementById('left');
    source.setAttribute('role', 'switch');
    source.setAttribute('aria-checked', 'true');
    handles.push(runtime.mountSurface(source, { emission: '#ff3300' }));
  });
  await waitForEmission(page, 'left', true);
  await page.evaluate(() => document.getElementById('left').setAttribute('aria-checked', 'false'));
  await waitForEmission(page, 'left', false);
});

test('visual mutations are coalesced and decorations do not cause a feedback loop', async (t) => {
  const page = await pageFor(t, false, true);
  const before = await page.evaluate(() => ({ ...metrics }));
  await page.evaluate(async () => {
    for (let i = 0; i < 30; i++) {
      document.getElementById('left').style.backgroundColor = `rgb(${200 + i},0,0)`;
      await new Promise(requestAnimationFrame);
    }
  });
  await page.waitForTimeout(350);
  const end = await page.evaluate(() => ({ ...metrics }));
  assert.ok(end.hits - before.hits <= 16 * 6, JSON.stringify({ before, end }));
  await page.waitForTimeout(500);
  assert.equal(await page.evaluate(() => metrics.hits), end.hits);
});

test('solid/reduced-transparency and covered receivers reject ambient light', async (t) => {
  const page = await pageFor(t, true);
  await page.evaluate(() => receiver.setAttribute('data-bx-surface', 'solid'));
  await page.waitForFunction(() => lighting.contributions.every((light) => !light.ambient));
  await page.evaluate(() => {
    receiver.setAttribute('data-bx-surface', 'glass');
    receiver.setAttribute('data-bx-reduced-transparency', 'true');
  });
  await page.waitForTimeout(250);
  assert.equal((await ambient(page)).length, 0);
  await page.evaluate(() => {
    receiver.removeAttribute('data-bx-reduced-transparency');
    const cover = document.createElement('div');
    cover.style.cssText = 'position:absolute;inset:0;background:black;z-index:99';
    document.body.append(cover);
  });
  await page.waitForTimeout(300);
  assert.equal((await ambient(page)).length, 0);
});

test('lighting boundaries isolate overlays and removing sources clears their colors', async (t) => {
  const page = await pageFor(t);
  await page.evaluate(() => document.getElementById('left').setAttribute('role', 'dialog'));
  await page.evaluate(() => runtime.refreshGlassLighting(receiver));
  await page.waitForTimeout(250);
  assert.ok(!(await ambient(page)).some((light) => light.color === 'rgb(255, 0, 0)'));
  await page.evaluate(() => document.getElementById('right').remove());
  await page.waitForTimeout(250);
  assert.ok(!(await ambient(page)).some((light) => light.color === 'rgb(0, 0, 255)'));
});

test('offscreen media is never read and destroying receivers stops all sampling', async (t) => {
  const page = await pageFor(t, true);
  await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:3000px';
    document.body.append(canvas);
    const original = CanvasRenderingContext2D.prototype.drawImage;
    CanvasRenderingContext2D.prototype.drawImage = function (source, ...args) {
      if (source === canvas) throw new Error('offscreen source was read');
      return original.call(this, source, ...args);
    };
    handles.forEach((handle) => handle.destroy());
  });
  const start = await page.evaluate(() => ({ ...metrics }));
  await page.waitForTimeout(1100);
  assert.deepEqual(await page.evaluate(() => ({ ...metrics })), start);
  await page.evaluate(
    () =>
      (handles = [
        { destroy: runtime.observeGlassLighting(receiver, (value) => (window.lighting = value)) },
      ]),
  );
  await page.waitForTimeout(300);
  assert.ok((await ambient(page)).length);
});

test('native lighting callbacks cannot invalidate their own host styles forever', async (t) => {
  const page = await pageFor(t);
  await page.evaluate(() => {
    handles.forEach((handle) => handle.destroy());
    handles = [
      {
        destroy: runtime.observeGlassLighting(receiver, (light) => {
          metrics.lights++;
          receiver.style.setProperty('--native-light-color', light.color);
          receiver.style.setProperty('--native-light-x', `${light.x}%`);
        }),
      },
    ];
  });
  await page.waitForTimeout(500);
  const start = await page.evaluate(() => ({ ...metrics }));
  await page.waitForTimeout(600);
  assert.deepEqual(await page.evaluate(() => ({ ...metrics })), start);
});

test('reduced motion stops live media polling and an explicit override restores it', async (t) => {
  const page = await pageFor(t, true, true);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(300);
  const before = await page.evaluate(() => metrics.pixels);
  await page.waitForTimeout(1200);
  assert.equal(await page.evaluate(() => metrics.pixels), before);
  await page.evaluate(() => handles[0].update({ reducedMotion: false }));
  await page.waitForFunction((before) => metrics.pixels > before, before);
});

test('failed media readbacks are cached without contaminating other sources', async (t) => {
  const page = await pageFor(t, true);
  await page.evaluate(() => {
    const failed = document.createElement('canvas');
    failed.width = 1000;
    failed.height = 600;
    failed.style.cssText =
      'position:absolute;inset:0;width:1000px;height:600px;pointer-events:none';
    window.failures = 0;
    const original = CanvasRenderingContext2D.prototype.drawImage;
    CanvasRenderingContext2D.prototype.drawImage = function (source, ...args) {
      if (source === failed) {
        failures++;
        throw new DOMException('Tainted', 'SecurityError');
      }
      return original.call(this, source, ...args);
    };
    document.body.append(failed);
  });
  await page.waitForTimeout(400);
  assert.equal(await page.evaluate(() => failures), 1);
  assert.ok((await ambient(page)).some((light) => light.color.startsWith('rgb(0 200 120')));
  await page.evaluate(() => {
    receiver.style.top = '181px';
    runtime.refreshGlassLighting(receiver);
  });
  await page.waitForTimeout(1200);
  assert.equal(await page.evaluate(() => failures), 1);
});

test('image object positioning and letterboxing sample the displayed pixels', async (t) => {
  const page = await pageFor(t);
  await page.evaluate(async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff00ff';
    ctx.fillRect(0, 0, 200, 100);
    ctx.fillStyle = '#00ffff';
    ctx.fillRect(200, 0, 200, 100);
    const image = new Image();
    image.id = 'photo';
    image.src = canvas.toDataURL();
    await image.decode();
    image.style.cssText =
      'position:absolute;left:300px;top:180px;width:320px;height:180px;object-fit:cover;object-position:0% 50%;pointer-events:none';
    document.body.prepend(image);
  });
  await page.waitForFunction(() =>
    lighting.contributions.some((light) => light.color.startsWith('rgb(255 0 255')),
  );
  let lights = await ambient(page);
  assert.ok(!lights.some((light) => light.color.startsWith('rgb(0 255 255')));
  await page.evaluate(() => (document.getElementById('photo').style.objectPosition = '100% 50%'));
  await page.waitForFunction(() =>
    lighting.contributions.some((light) => light.color.startsWith('rgb(0 255 255')),
  );
  lights = await ambient(page);
  assert.ok(!lights.some((light) => light.color.startsWith('rgb(255 0 255')));
  await page.evaluate(() => (document.getElementById('photo').style.objectFit = 'contain'));
  await page.waitForTimeout(300);
  lights = await ambient(page);
  assert.ok(
    !lights.some(
      (light) => light.color.startsWith('rgb(0 255 255') || light.color.startsWith('rgb(255 0 255'),
    ),
  );
});

test('new media inserted into an open shadow root is discovered and updates', async (t) => {
  const page = await pageFor(t);
  await page.evaluate(() => {
    const host = document.createElement('div');
    host.style.cssText = 'position:absolute;inset:0;pointer-events:none';
    window.shadow = host.attachShadow({ mode: 'open' });
    document.body.prepend(host);
  });
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 600;
    canvas.style.cssText =
      'position:absolute;inset:0;width:1000px;height:600px;pointer-events:none';
    const context = canvas.getContext('2d');
    context.fillStyle = '#ff8800';
    context.fillRect(0, 0, 1000, 600);
    shadow.append(canvas);
  });
  await page.waitForFunction(() =>
    lighting.contributions.some((light) => light.color.startsWith('rgb(255 136 0')),
  );
});

test('canvas transparency changes rediscover the newly visible layer', async (t) => {
  const page = await pageFor(t, true);
  const before = await page.evaluate(() => metrics.hits);
  await page.evaluate(() => context.clearRect(0, 0, 1000, 600));
  await page.waitForFunction(() =>
    lighting.contributions.every((light) => !light.color.startsWith('rgb(0 200 120')),
  );
  assert.ok((await page.evaluate(() => metrics.hits)) > before);
  await page.evaluate(() => {
    context.fillStyle = '#aa00ff';
    context.fillRect(0, 0, 1000, 600);
  });
  await page.waitForFunction(() =>
    lighting.contributions.some((light) => light.color.startsWith('rgb(170 0 255')),
  );
});

test('explicit edge sources, exclusions and reflections retain independent behavior', async (t) => {
  const page = await pageFor(t);
  await page.evaluate(() => {
    window.leftLight = {
      element: document.getElementById('left'),
      edge: 'bottom',
      z: 24,
      color: '#ff4400',
      radius: 400,
    };
    window.rightLight = {
      element: document.getElementById('right'),
      z: 24,
      color: '#0044ff',
      radius: 400,
    };
    window.scene = runtime.mountGlassScene(document.body, {
      lights: [leftLight, rightLight],
      reflectors: [{ element: leftLight.element, color: '#aa33cc', depth: -80 }],
    });
    handles.push(scene);
  });
  await page.waitForFunction(
    () => lighting.contributions.filter((light) => !light.ambient).length === 2,
  );
  const result = await page.evaluate(() => ({
    lights: lighting.contributions.filter((light) => !light.ambient),
    reflection: lighting.reflection,
    strength: lighting.reflectionStrength,
  }));
  const bottom = result.lights.find((light) => light.color === '#ff4400');
  assert.equal(bottom.x, 0);
  assert.equal(bottom.y, 100);
  assert.equal(result.reflection, '#aa33cc');
  assert.ok(result.strength > 0);
  await page.evaluate(() =>
    scene.update({ lights: [{ ...leftLight, excludeElement: receiver }, rightLight] }),
  );
  await page.waitForFunction(
    () => lighting.contributions.filter((light) => !light.ambient).length === 1,
  );
  assert.equal(
    await page.evaluate(() => lighting.contributions.find((light) => !light.ambient).color),
    '#0044ff',
  );
  await page.evaluate(() => scene.destroy());
  await page.waitForFunction(() => lighting.contributions.every((light) => light.ambient));
});

test('retiring semantic light nodes do not invalidate ambient sampling', async (t) => {
  const page = await pageFor(t, false, true);
  await page.evaluate(() => {
    const source = document.getElementById('left');
    source.setAttribute('role', 'button');
    handles.push(runtime.mountSurface(source, { emission: '#ff3300' }));
  });
  await page.locator('#left').hover();
  await page.waitForTimeout(500);
  const hits = await page.evaluate(() => metrics.hits);
  await page.mouse.move(500, 50);
  await page.waitForTimeout(650);
  assert.equal(await page.evaluate(() => metrics.hits), hits);
  assert.equal(await page.locator('#receiver [data-bx-light-source^="hover:"]').count(), 0);
});

test('light-only updates can reuse receiver geometry and skip identical paints without changing normal refreshes', async (t) => {
  const page = await pageFor(t);
  await page.evaluate(() => {
    window.options = {
      reuseGeometry: true,
      lights: [{ x: 670, y: 260, z: 30, color: '#ff00ff', radius: 400 }],
    };
    window.scene = runtime.mountGlassScene(document.body, options);
    handles.push(scene);
  });
  await page.waitForFunction(() =>
    lighting.contributions.some((light) => light.color === '#ff00ff'),
  );
  await page.waitForTimeout(300);
  const before = await page.evaluate(() => ({ ...metrics }));
  await page.evaluate(async () => {
    for (let i = 0; i < 12; i++) {
      scene.update(options);
      await new Promise(requestAnimationFrame);
    }
    await new Promise(requestAnimationFrame);
    await new Promise(requestAnimationFrame);
  });
  const after = await page.evaluate(() => ({ ...metrics }));
  assert.equal(after.rects, before.rects);
  assert.equal(after.lights, before.lights);
  await page.evaluate(() => {
    receiver.style.left = '350px';
    scene.update(options);
  });
  await page.waitForFunction(
    (before) => metrics.rects > before.rects && metrics.lights > before.lights,
    before,
  );
  const moved = await page.evaluate(() => ({ ...metrics }));
  await page.evaluate(() => scene.update({ ...options, reuseGeometry: false }));
  await page.waitForFunction(
    (before) => metrics.rects > before.rects && metrics.lights > before.lights,
    moved,
  );
});
