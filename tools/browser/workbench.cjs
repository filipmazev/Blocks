// Run against the playground: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/workbench.cjs
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium, webkit } = require(process.env.BLOCKS_PLAYWRIGHT_PATH || 'playwright');
const origin = process.env.BLOCKS_PLAYGROUND_URL || 'http://localhost:8080';
let browser;
before(async () => {
  browser = process.env.BLOCKS_BROWSER === 'webkit' ? await webkit.launch() : await chromium.launch({ channel: 'chrome' });
});
after(async () => browser?.close());

async function pageFor(t, options = {}) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, colorScheme: 'dark', ...options });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  t.after(async () => {
    await page.close();
    assert.deepEqual(errors, []);
  });
  page.setDefaultTimeout(15000);
  return page;
}

async function open(page, component = 'surface') {
  await page.goto(`${origin}/components/${component}`);
  await page.locator('.preview-content > *').waitFor();
}

async function select(page, name, value) {
  await page.getByRole('combobox', { name, exact: true }).click();
  await page.getByRole('option', { name: value, exact: true }).click();
}

async function resize(page, name, dx, dy) {
  const handle = page.getByRole('separator', { name, exact: true });
  const rect = await handle.boundingBox();
  const x = rect.x + rect.width / 2;
  const y = rect.y + rect.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + dx, y + dy, { steps: 8 });
  await page.mouse.up();
  return Number(await handle.getAttribute('aria-valuenow'));
}

async function goToButton(page) {
  await page.getByRole('link', { name: 'Components', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search components', exact: true }).fill('Button');
  await page.getByRole('link', { name: 'Button', exact: true }).click();
  await page.locator('app-button-story').waitFor();
}

test('surface controls change the visible material and respect refraction and opaque policies', async (t) => {
  const page = await pageFor(t);
  await open(page);
  const sample = page.locator('.surface-sample');
  const chromiumAuto = await page.evaluate(() => /(?:Chrome|Chromium|Edg|OPR)\//.test(navigator.userAgent));
  const expectRefraction = (expected) =>
    page.waitForFunction((value) => document.querySelector('.surface-sample')?.getAttribute('data-bx-refraction') === value, expected);
  await expectRefraction(chromiumAuto ? 'true' : null);
  assert.equal(await sample.getAttribute('data-bx-surface-interactive'), 'true');
  const translucency = page.getByRole('spinbutton', { name: 'bxSurfaceTranslucency', exact: true });
  const materials = [];
  for (const value of ['0', '1']) {
    await translucency.fill(value);
    await translucency.press('Tab');
    materials.push(
      await sample.evaluate((element) => {
        const pane = element.querySelector('.bx-refraction-pane') ?? element;
        const style = getComputedStyle(pane);
        return [style.backgroundColor, style.backdropFilter];
      })
    );
  }
  assert.notDeepEqual(materials[0], materials[1]);
  await select(page, 'bxSurfaceGlassiness', 'off');
  await expectRefraction(null);
  await select(page, 'bxSurfaceGlassiness', 'auto');
  await page.getByRole('checkbox', { name: 'bxSurfaceLocalRefraction', exact: true }).press('Space');
  await expectRefraction(null);
  await page.getByRole('checkbox', { name: 'bxSurfaceLocalRefraction', exact: true }).press('Space');
  await expectRefraction(chromiumAuto ? 'true' : null);
  await select(page, 'bxSurfaceQuality', 'baseline');
  await expectRefraction(null);
  await select(page, 'bxSurfaceQuality', 'enhanced');
  await expectRefraction(chromiumAuto ? 'true' : null);
  await page.getByRole('checkbox', { name: 'bxReducedTransparency', exact: true }).press('Space');
  await expectRefraction(null);
  assert.match(await sample.evaluate((element) => getComputedStyle(element).backgroundColor), /^rgb\(/);
  await page.getByRole('checkbox', { name: 'bxReducedTransparency', exact: true }).press('Space');
  await page.getByRole('tab', { name: 'Examples', exact: true }).click();
  assert.equal(await page.locator('.custom-surface').getAttribute('data-bx-refraction'), chromiumAuto ? 'true' : null);
});

test('dragged panel sizes survive story reset, tabs, SPA navigation, reload and temporary viewport constraints', async (t) => {
  const page = await pageFor(t);
  await open(page);
  const width = await resize(page, 'Resize properties panel', 60, 0);
  const height = await resize(page, 'Resize preview and code panels', 0, -45);
  assert.equal(width, 420);
  assert.equal(height, 365);
  await page.getByRole('button', { name: 'Reset story', exact: true }).click();
  await page.getByRole('tab', { name: 'Examples', exact: true }).click();
  await page.getByRole('tab', { name: 'Playground', exact: true }).click();
  await goToButton(page);
  const sizes = () =>
    page
      .getByRole('separator')
      .evaluateAll((elements) => elements.map((element) => [element.getAttribute('aria-label'), Number(element.getAttribute('aria-valuenow'))]));
  const expected = [
    ['Resize preview and code panels', height],
    ['Resize properties panel', width]
  ];
  assert.deepEqual((await sizes()).sort(), expected.sort());
  await page.reload();
  await page.locator('app-button-story').waitFor();
  assert.deepEqual((await sizes()).sort(), expected.sort());
  await page.setViewportSize({ width: 390, height: 700 });
  await page.waitForTimeout(250);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole('separator', { name: 'Resize properties panel', exact: true }).waitFor();
  assert.deepEqual((await sizes()).sort(), expected.sort());
  const handle = page.getByRole('separator', { name: 'Resize preview and code panels', exact: true });
  await handle.focus();
  await handle.press('ArrowDown');
  await page.waitForFunction((value) => document.querySelector('.results-resize')?.getAttribute('aria-valuenow') === String(value), height - 10);
  assert.equal(Number(await handle.getAttribute('aria-valuenow')), height - 10);
  const rect = await handle.boundingBox();
  await page.mouse.move(rect.x + rect.width / 2, rect.y + rect.height / 2);
  await page.mouse.down();
  await page.mouse.move(rect.x + rect.width / 2, rect.y - 25, { steps: 4 });
  await page.keyboard.press('Escape');
  await page.mouse.up();
  await page.reload();
  await page.locator('app-button-story').waitFor();
  assert.equal(Number(await handle.getAttribute('aria-valuenow')), height - 10);
});

test('double-click and Enter restore original defaults after saved sizes are reloaded and remounted', async (t) => {
  const page = await pageFor(t);
  await open(page);
  await resize(page, 'Resize properties panel', 60, 0);
  await resize(page, 'Resize preview and code panels', 0, -45);
  await page.reload();
  await page.locator('.surface-sample').waitFor();
  await goToButton(page);
  const properties = page.getByRole('separator', { name: 'Resize properties panel', exact: true });
  const results = page.getByRole('separator', { name: 'Resize preview and code panels', exact: true });
  assert.equal(Number(await properties.getAttribute('aria-valuenow')), 420);
  assert.equal(Number(await results.getAttribute('aria-valuenow')), 365);
  await properties.dblclick();
  assert.equal(Number(await properties.getAttribute('aria-valuenow')), 480);
  assert.equal(Number(await results.getAttribute('aria-valuenow')), 365);
  await results.dblclick();
  assert.equal(Number(await results.getAttribute('aria-valuenow')), 320);
  await page.reload();
  await page.locator('app-button-story').waitFor();
  assert.equal(Number(await properties.getAttribute('aria-valuenow')), 480);
  assert.equal(Number(await results.getAttribute('aria-valuenow')), 320);
  await resize(page, 'Resize properties panel', 60, 0);
  await resize(page, 'Resize preview and code panels', 0, -45);
  await page.reload();
  await page.locator('app-button-story').waitFor();
  await properties.press('Enter');
  await results.press('Enter');
  await page.waitForFunction(() => localStorage.getItem('blocks-demo-panel-width') === '480' && localStorage.getItem('blocks-demo-results-height') === '320');
  await page.reload();
  await page.locator('app-button-story').waitFor();
  assert.equal(Number(await properties.getAttribute('aria-valuenow')), 480);
  assert.equal(Number(await results.getAttribute('aria-valuenow')), 320);
});

test('blocked storage retains shared dimensions during SPA navigation', async (t) => {
  const page = await pageFor(t);
  await page.addInitScript(() => {
    for (const method of ['getItem', 'setItem']) {
      const original = Storage.prototype[method];
      Storage.prototype[method] = function (key, ...args) {
        if (key.startsWith('blocks-demo-')) throw new DOMException('Storage is blocked', 'SecurityError');
        return original.call(this, key, ...args);
      };
    }
  });
  await open(page);
  const width = await resize(page, 'Resize properties panel', 50, 0);
  await goToButton(page);
  assert.equal(Number(await page.getByRole('separator', { name: 'Resize properties panel', exact: true }).getAttribute('aria-valuenow')), width);
});

for (const width of [320, 390]) {
  test(`surface scene stays within a ${width}px touch viewport`, async (t) => {
    const page = await pageFor(t, { viewport: { width, height: 852 }, isMobile: true, hasTouch: true });
    await open(page);
    const scene = page.locator('.surface-scene');
    assert.ok(await scene.evaluate((element) => element.scrollWidth <= element.clientWidth + 1));
    await page.getByRole('button', { name: 'Inspect material', exact: true }).tap();
    await page.getByRole('tab', { name: 'Examples', exact: true }).tap();
    assert.ok(await page.locator('.surface-example-scene').evaluate((element) => element.scrollWidth <= element.clientWidth + 1));
    await page.getByRole('button', { name: 'Try an action', exact: true }).tap();
  });
}
