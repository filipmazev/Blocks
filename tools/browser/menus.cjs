// Run against a running playground: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/menus.cjs
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

async function pageFor(
  t,
  component,
  { fallback = false, reducedMotion = false, mobile = false } = {},
) {
  const page = await browser.newPage({
    viewport: mobile ? { width: 393, height: 852 } : { width: 1440, height: 1000 },
    isMobile: mobile,
    hasTouch: mobile,
    colorScheme: 'dark',
    reducedMotion: reducedMotion ? 'reduce' : 'no-preference',
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  t.after(async () => {
    await page.close();
    assert.deepEqual(errors, []);
  });
  if (fallback)
    await page.addInitScript(() => {
      const supports = CSS.supports.bind(CSS);
      CSS.supports = (...args) => (args[0] === 'position-anchor' ? false : supports(...args));
    });
  await page.goto(`${origin}/components/${component}`);
  await page.locator('.demo-stage').waitFor();
  page.setDefaultTimeout(10000);
  return page;
}

async function opaque(page, selector) {
  const material = await page.locator(selector).evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      background: style.backgroundColor,
      blur: style.backdropFilter || style.webkitBackdropFilter,
      decorations: element.querySelectorAll(':scope > .bx-glass-decoration, :scope > .bx-glass-rim')
        .length,
    };
  });
  assert.match(material.background, /^rgb\(/, JSON.stringify(material));
  assert.equal(material.blur, 'none');
  assert.equal(material.decorations, 0);
}

async function scrollAndMeasure(page, selector, nested = false) {
  return page.evaluate(
    async ({ selector, nested }) => {
      const source = document.querySelector(selector);
      const pane = document.querySelector('.cdk-overlay-pane');
      // Flush initial ResizeObserver delivery and entrance animations first.
      await new Promise((resolve) => setTimeout(resolve, 400));
      const a = source.getBoundingClientRect(),
        b = pane.getBoundingClientRect();
      const expected = { x: b.left - a.left, y: b.top - a.bottom };
      const initialStyle = pane.getAttribute('style');
      const initialHostStyle = pane.parentElement.getAttribute('style');
      let mutations = 0;
      const observer = new MutationObserver((records) => {
        mutations += records.length;
      });
      observer.observe(pane, { attributes: true, attributeFilter: ['style'] });
      observer.observe(pane.parentElement, { attributes: true, attributeFilter: ['style'] });
      const frames = [];
      for (let index = 0; index < 32; index++) {
        const amount = index < 16 ? 5 : -5;
        if (nested) source.closest('[data-menu-scroller]').scrollTop += amount;
        else window.scrollBy(0, amount);
        // Anchor geometry is snapshotted by the browser at the rendering boundary.
        await new Promise(requestAnimationFrame);
        await new Promise(requestAnimationFrame);
        const a = source.getBoundingClientRect(),
          b = pane.getBoundingClientRect();
        frames.push({ x: b.left - a.left, y: b.top - a.bottom });
      }
      observer.disconnect();
      return {
        expected,
        frames,
        mutations,
        unchanged:
          initialStyle === pane.getAttribute('style') &&
          initialHostStyle === pane.parentElement.getAttribute('style'),
      };
    },
    { selector, nested },
  );
}

function aligned(result) {
  for (const frame of result.frames) {
    assert.ok(
      Math.abs(frame.x - result.expected.x) < 1,
      JSON.stringify({ frame, expected: result.expected }),
    );
    assert.ok(
      Math.abs(frame.y - result.expected.y) < 1,
      JSON.stringify({ frame, expected: result.expected }),
    );
  }
}

async function nestedScroller(page, selector) {
  await page.locator(selector).evaluate((element) => {
    const scroller = document.createElement('div');
    scroller.dataset.menuScroller = '';
    scroller.style.cssText = 'height:230px;overflow:auto;padding:15px;border:1px solid gray';
    element.parentElement.insertBefore(scroller, element);
    scroller.append(element);
    const space = document.createElement('div');
    space.style.height = '700px';
    scroller.append(space);
  });
}

test('select uses an opaque container and follows document scrolling without pane writes', async (t) => {
  const page = await pageFor(t, 'select');
  await page
    .locator('.bx-select-trigger')
    .evaluate((e) => e.style.setProperty('anchor-name', '--existing-anchor'));
  await page.locator('.bx-select-trigger').click();
  await page.locator('.bx-overlay-anchored').waitFor();
  await opaque(page, '.bx-select-panel');
  assert.equal(
    await page
      .locator(
        '.bx-select-menu-container [data-bx-surface], .bx-select-menu-container .bx-glass-decoration',
      )
      .count(),
    0,
  );
  assert.equal(await page.getByRole('option', { name: 'Skopje', selected: true }).count(), 1);
  assert.equal(await page.locator('.bx-select-trigger > .bx-glass-decoration').count(), 1);
  assert.equal(
    await page
      .locator('.bx-select-panel input')
      .evaluate((e) => e.closest('[data-bx-surface]').dataset.bxReducedTransparency),
    'false',
  );
  const result = await scrollAndMeasure(page, '.bx-select-trigger');
  aligned(result);
  assert.equal(result.mutations, 0);
  assert.equal(result.unchanged, true);
  await page.locator('.bx-select-panel input').fill('Ohr');
  await page.locator('.bx-select-menu-container button').filter({ hasText: 'Ohrid' }).click();
  await page.locator('.bx-select-panel').waitFor({ state: 'detached' });
  assert.equal(
    await page
      .locator('.bx-select-trigger')
      .evaluate((e) => e.style.getPropertyValue('anchor-name')),
    '--existing-anchor',
  );
  assert.match(await page.locator('.bx-select-trigger').innerText(), /Ohrid/);
});

test('select follows nested scrolling, preserves above placement and cleans up on reopen', async (t) => {
  const page = await pageFor(t, 'select');
  await nestedScroller(page, 'bx-select');
  await page.locator('.bx-select-trigger').click();
  await page.locator('.bx-overlay-anchored').waitFor();
  aligned(await scrollAndMeasure(page, '.bx-select-trigger', true));
  await page.keyboard.press('Escape');
  await page.locator('.bx-select-panel').waitFor({ state: 'detached' });
  await page.locator('bx-select').evaluate((element) => {
    document.body.insertBefore(element, document.body.firstChild);
    element.style.cssText = 'position:fixed;bottom:20px;left:350px;width:320px';
  });
  await page.locator('.bx-select-trigger').click();
  await page.waitForTimeout(300);
  const gap = await page.evaluate(() => {
    const a = document.querySelector('.bx-select-trigger').getBoundingClientRect();
    const b = document.querySelector('.bx-select-panel').getBoundingClientRect();
    return a.top - b.bottom;
  });
  assert.ok(Math.abs(gap - 4) < 1, String(gap));
  await page.locator('.bx-select-panel input').fill('Ohr');
  await page.waitForFunction(
    () => document.querySelectorAll('.bx-select-menu-container button').length === 1,
  );
  const resizedGap = await page.evaluate(
    () =>
      document.querySelector('.bx-select-trigger').getBoundingClientRect().top -
      document.querySelector('.bx-select-panel').getBoundingClientRect().bottom,
  );
  assert.ok(Math.abs(resizedGap - 4) < 1, String(resizedGap));
});

test('dropdown follows nested scrolling, resizes, restores focus and retains trigger effects', async (t) => {
  const page = await pageFor(t, 'dropdown');
  await nestedScroller(page, '.demo-stage .demo-stack');
  const trigger = page.getByRole('button', { name: 'Project actions' });
  await trigger.click();
  await page.locator('.bx-overlay-anchored').waitFor();
  await opaque(page, '.cdk-overlay-pane .bx-menu-wrapper');
  assert.equal(await trigger.locator(':scope > .bx-glass-decoration').count(), 1);
  const result = await scrollAndMeasure(page, '.demo-stage button[aria-haspopup="menu"]', true);
  aligned(result);
  assert.equal(result.mutations, 0);
  await page.setViewportSize({ width: 1050, height: 850 });
  await page.waitForTimeout(300);
  await page.keyboard.press('Escape');
  await page.locator('.cdk-overlay-pane').waitFor({ state: 'detached' });
  assert.equal(await trigger.evaluate((e) => e === document.activeElement), true);
  assert.equal(await trigger.evaluate((e) => e.style.getPropertyValue('anchor-name')), '');
  await trigger.press('ArrowDown');
  await page.getByRole('menuitem', { name: 'Archive' }).click();
  await page.locator('.cdk-overlay-pane').waitFor({ state: 'detached' });
  assert.match(await page.locator('app-component-demo').innerText(), /Project archived/);
});

test('unsupported browsers retain synchronous CDK scrolling and reduced-motion selection', async (t) => {
  const page = await pageFor(t, 'select', { fallback: true, reducedMotion: true });
  await nestedScroller(page, 'bx-select');
  await page.locator('.bx-select-trigger').press('ArrowDown');
  await page.locator('.bx-select-panel').waitFor();
  assert.equal(await page.locator('.bx-overlay-anchored').count(), 0);
  aligned(await scrollAndMeasure(page, '.bx-select-trigger', true));
  await page.keyboard.press('Escape');
  await page.locator('.bx-select-panel').waitFor({ state: 'detached' });
});

test('origins inserted after the overlay container use the CDK fallback', async (t) => {
  const page = await pageFor(t, 'select', { reducedMotion: true });
  const trigger = page.locator('.bx-select-trigger');
  await trigger.click();
  await page.locator('.bx-select-panel').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('.bx-select-panel').waitFor({ state: 'detached' });
  await page.locator('bx-select').evaluate((element) => document.body.append(element));
  await nestedScroller(page, 'bx-select');
  await trigger.click();
  await page.locator('.bx-select-panel').waitFor();
  assert.equal(await page.locator('.bx-overlay-anchored').count(), 0);
  aligned(await scrollAndMeasure(page, '.bx-select-trigger', true));
});

test('opaque menus preserve local theme tokens and typography and inherit global changes', async (t) => {
  const page = await pageFor(t, 'select');
  await page.locator('.demo-stage').evaluate((element) => {
    element.style.setProperty('--bx-bg-surface', '#18344f');
    element.style.setProperty('--new-theme-token', 'scoped');
    element.style.fontFamily = 'monospace';
  });
  await page.locator('.bx-select-trigger').click();
  await page.locator('.bx-select-panel').waitFor();
  assert.equal(
    await page
      .locator('.cdk-overlay-pane')
      .evaluate((element) => element.style.getPropertyValue('--new-theme-token')),
    'scoped',
  );
  const panel = page.locator('.bx-select-panel');
  await page.waitForFunction(
    () =>
      getComputedStyle(document.querySelector('.bx-select-panel')).backgroundColor ===
      'rgb(24, 52, 79)',
  );
  assert.match(
    await panel.evaluate((element) => getComputedStyle(element).fontFamily),
    /monospace/,
  );
  await page
    .locator('.demo-stage')
    .evaluate((element) => element.style.setProperty('--bx-bg-surface', '#4f1834'));
  await page.waitForFunction(
    () =>
      getComputedStyle(document.querySelector('.bx-select-panel')).backgroundColor ===
      'rgb(79, 24, 52)',
  );
  await page
    .locator('.demo-stage')
    .evaluate((element) => element.style.removeProperty('--bx-bg-surface'));
  await page.evaluate(() =>
    document.documentElement.style.setProperty('--bx-bg-surface', '#344f18'),
  );
  await page.waitForFunction(
    () =>
      getComputedStyle(document.querySelector('.bx-select-panel')).backgroundColor ===
      'rgb(52, 79, 24)',
  );
  assert.equal(
    await page
      .locator('.cdk-overlay-pane')
      .evaluate((element) => element.style.getPropertyValue('--bx-bg-surface')),
    '',
  );
});

test('context menus keep opaque containers, keyboard actions and dismissal', async (t) => {
  const page = await pageFor(t, 'context-menu');
  const trigger = page.locator('.context-target');
  await trigger.press('Shift+F10');
  await page.locator('.cdk-overlay-pane').waitFor();
  await opaque(page, '.cdk-overlay-pane .bx-menu-wrapper');
  await page.keyboard.press('Escape');
  await page.locator('.cdk-overlay-pane').waitFor({ state: 'detached' });
  assert.equal(await trigger.evaluate((e) => e === document.activeElement), true);
  await trigger.click({ button: 'right' });
  await page.getByRole('menuitem', { name: 'Copy selection' }).click();
  await page.locator('.cdk-overlay-pane').waitFor({ state: 'detached' });
  assert.match(await page.locator('app-component-demo').innerText(), /Selection copied/);
});

test('select anchors work inside a native top-layer popover', async (t) => {
  const page = await pageFor(t, 'select');
  await page.locator('bx-select').evaluate((element) => {
    const dialog = document.createElement('div');
    dialog.popover = 'manual';
    dialog.setAttribute('role', 'dialog');
    dialog.style.cssText = 'width:500px;height:300px;overflow:auto;margin:auto';
    element.parentElement.append(dialog);
    dialog.append(element);
    const space = document.createElement('div');
    space.style.height = '700px';
    dialog.append(space);
    dialog.dataset.menuScroller = '';
    dialog.showPopover();
  });
  await page.locator('.bx-select-trigger').click();
  await page.locator('.bx-overlay-anchored').waitFor();
  aligned(await scrollAndMeasure(page, '.bx-select-trigger', true));
  await page.locator('.bx-select-menu-container button').filter({ hasText: 'Ohrid' }).click();
  await page.locator('.bx-select-panel').waitFor({ state: 'detached' });
});

for (const component of ['select', 'dropdown']) {
  test(`${component} shares the mobile document scroll layer across reversals and viewport changes`, async (t) => {
    const page = await pageFor(t, component, { mobile: true, reducedMotion: true });
    const selector =
      component === 'select' ? '.bx-select-trigger' : '.demo-stage button[aria-haspopup="menu"]';
    const trigger = page.locator(selector);
    await trigger.evaluate((element) =>
      window.scrollBy(0, element.getBoundingClientRect().top - 220),
    );
    const documentHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await trigger.tap();
    await page.locator('.bx-overlay-anchored').waitFor();
    const layer = await page.locator('.bx-overlay-anchored').evaluate((host) => ({
      host: getComputedStyle(host).position,
      container: getComputedStyle(host.parentElement).position,
      topLayer: host.matches(':popover-open'),
    }));
    assert.deepEqual(layer, { host: 'absolute', container: 'static', topLayer: false });
    assert.equal(await page.evaluate(() => document.documentElement.scrollHeight), documentHeight);
    const result = await scrollAndMeasure(page, selector);
    aligned(result);
    assert.ok(Math.abs(result.expected.y - 4) < 1, JSON.stringify(result.expected));
    assert.equal(result.mutations, 0);
    for (const height of [720, 852, 680, 852]) {
      await page.setViewportSize({ width: 393, height });
      await page.waitForTimeout(300);
      aligned(await scrollAndMeasure(page, selector));
      if (component === 'select') {
        assert.equal(
          await page
            .locator('.bx-select-panel input')
            .evaluate((input) => input === document.activeElement),
          true,
        );
      }
    }
    await page.keyboard.press('Escape');
    await page.locator('.cdk-overlay-pane').waitFor({ state: 'detached' });
    assert.equal(await page.locator('.bx-overlay-document-layer').count(), 0);
    await trigger.tap();
    await page.locator('.bx-overlay-document-layer').waitFor({ state: 'attached' });
    aligned(await scrollAndMeasure(page, selector));
  });
}

test('document menus can grow again after filtering without blurring the search', async (t) => {
  const page = await pageFor(t, 'select');
  await page.locator('.bx-select-trigger').click();
  const search = page.locator('.bx-select-panel input');
  await search.fill('Ohr');
  await page.waitForFunction(
    () => document.querySelectorAll('.bx-select-menu-container button').length === 1,
  );
  const filteredHeight = await page
    .locator('.bx-select-panel')
    .evaluate((panel) => panel.clientHeight);
  await search.fill('');
  await page.waitForFunction(
    () => document.querySelectorAll('.bx-select-menu-container button').length > 1,
  );
  assert.ok(
    (await page.locator('.bx-select-panel').evaluate((panel) => panel.clientHeight)) >
      filteredHeight,
  );
  assert.equal(await search.evaluate((input) => input === document.activeElement), true);
});

test('fixed triggers retain a fixed overlay and follow document scrolling', async (t) => {
  const page = await pageFor(t, 'select', { mobile: true, reducedMotion: true });
  await page.locator('bx-select').evaluate((element) => {
    element.style.cssText = 'position:fixed;top:200px;left:30px;width:300px;z-index:150';
  });
  await page.locator('.bx-select-trigger').tap();
  await page.locator('.bx-overlay-anchored').waitFor();
  assert.equal(await page.locator('.bx-overlay-document-layer').count(), 0);
  aligned(await scrollAndMeasure(page, '.bx-select-trigger'));
});

test('document positioning accounts for fixed-layer offsets and positioned bodies', async (t) => {
  const page = await pageFor(t, 'select', { reducedMotion: true });
  await page.addStyleTag({
    content:
      '.cdk-overlay-container { top: -24px; left: -12px; } body { position: relative; margin: 16px; }',
  });
  await page.locator('.bx-select-trigger').click();
  await page.locator('.bx-overlay-anchored').waitFor();
  const result = await scrollAndMeasure(page, '.bx-select-trigger');
  assert.ok(Math.abs(result.expected.x) < 1, JSON.stringify(result.expected));
  assert.ok(Math.abs(result.expected.y - 4) < 1, JSON.stringify(result.expected));
  aligned(result);
  assert.equal(result.mutations, 0);
});
