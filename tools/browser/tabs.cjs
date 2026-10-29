// Run against a running playground: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/tabs.cjs
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

async function pageFor(t, path = '/components/tabs', options = {}) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1100 },
    colorScheme: 'dark',
    ...options,
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  t.after(async () => {
    await page.close();
    assert.deepEqual(errors, []);
  });
  page.setDefaultTimeout(10000);
  await page.goto(origin + path);
  await page.locator('.app-toolbar').waitFor();
  return page;
}
const header = (page, label = 'Project information') =>
  page.getByRole('tablist', { name: label, exact: true });
async function selected(list, label) {
  await list.getByRole('tab', { name: label, exact: true, selected: true }).waitFor();
}
async function checkRelationships(list) {
  const tabs = await list.getByRole('tab').evaluateAll((elements) =>
    elements.map((element) => {
      const panel = document.getElementById(element.getAttribute('aria-controls'));
      return {
        linked: panel?.getAttribute('aria-labelledby') === element.id,
        role: panel?.getAttribute('role'),
        hidden: panel?.hidden,
        selected: element.getAttribute('aria-selected') === 'true',
        tabIndex: element.tabIndex,
      };
    }),
  );
  assert.equal(tabs.filter((tab) => tab.selected).length, 1);
  assert.equal(tabs.filter((tab) => tab.tabIndex === 0).length, 1);
  for (const tab of tabs) {
    assert.equal(tab.linked, true);
    assert.equal(tab.role, 'tabpanel');
    assert.equal(tab.hidden, !tab.selected);
  }
}

test('tabs support roving focus, wrapping, disabled tabs and lazy panel state', async (t) => {
  const page = await pageFor(t);
  const list = header(page);
  await selected(list, 'Overview');
  await page.getByRole('textbox', { name: 'Project note' }).fill('Persistent project note');
  await list.getByRole('tab', { name: 'Overview', exact: true }).press('ArrowRight');
  await selected(list, 'Details');
  assert.equal(await page.getByRole('textbox', { name: 'Project note' }).count(), 0);
  await list.getByRole('tab', { name: 'Details', exact: true }).press('End');
  await selected(list, 'Activity');
  await list.getByRole('tab', { name: 'Activity', exact: true }).press('ArrowRight');
  await selected(list, 'Overview');
  assert.equal(
    await page.getByRole('textbox', { name: 'Project note' }).inputValue(),
    'Persistent project note',
  );
  await list.getByRole('tab', { name: 'Overview', exact: true }).press('ArrowLeft');
  await selected(list, 'Activity');
  await list.getByRole('tab', { name: 'Activity', exact: true }).press('Home');
  await selected(list, 'Overview');
  assert.equal(
    await list.getByRole('tab', { name: 'Unavailable', exact: true }).isDisabled(),
    true,
  );
  await checkRelationships(list);
});

test('selection falls back when a tab is disabled or removed and both appearances work', async (t) => {
  const page = await pageFor(t);
  const list = header(page);
  await list.getByRole('tab', { name: 'Details', exact: true }).click();
  await selected(list, 'Details');
  await page.getByRole('button', { name: 'Disable details', exact: true }).click();
  await selected(list, 'Overview');
  await page.waitForFunction(() =>
    document.querySelector('.demo-stage output').textContent.includes('overview'),
  );
  await list.getByRole('tab', { name: 'Activity', exact: true }).click();
  await selected(list, 'Activity');
  await page.getByRole('button', { name: 'Show activity', exact: true }).click();
  await selected(list, 'Overview');
  assert.equal(await list.getByRole('tab', { name: 'Activity', exact: true }).count(), 0);
  await page.getByRole('button', { name: 'Underline appearance', exact: true }).click();
  await page.locator('.demo-stage bx-tabs.bx-tabs-underline').waitFor();
  await checkRelationships(list);
});

test('tab headers avoid spurious scrollbars and selected primary light persists after blur', async (t) => {
  const page = await pageFor(t);
  const list = header(page);
  await selected(list, 'Overview');
  await page.mouse.move(250, 90);
  await page.waitForFunction(() =>
    document.querySelector(
      '.demo-stage .bx-tab-trigger.is-selected .bx-glass-rim [data-bx-light-source="emitter"]',
    ),
  );
  const geometry = await list.evaluate((element) => {
    const inner = element.querySelector('.bx-tab-list');
    return {
      x: inner.scrollWidth - inner.clientWidth,
      y: inner.scrollHeight - inner.clientHeight,
      outerX: getComputedStyle(element).overflowX,
      outerY: getComputedStyle(element).overflowY,
      background: getComputedStyle(element.querySelector('[aria-selected="true"]')).backgroundColor,
    };
  });
  assert.ok(geometry.x <= 1, JSON.stringify(geometry));
  assert.ok(geometry.y <= 1, JSON.stringify(geometry));
  assert.equal(geometry.outerX, 'visible');
  assert.equal(geometry.outerY, 'visible');
  assert.match(geometry.background, /rgba|\/\s*0\./);
  await page.waitForFunction(() =>
    document.querySelector(
      '.demo-stage .bx-tab-header > .bx-glass-rim [data-bx-light-source^="hover:"]',
    ),
  );
  await list.getByRole('tab', { name: 'Details', exact: true }).click();
  await selected(list, 'Details');
  await list
    .getByRole('tab', { name: 'Details', exact: true })
    .evaluate((element) => element.blur());
  await page.mouse.move(250, 90);
  await page.waitForFunction(() =>
    document.querySelector(
      '.demo-stage .bx-tab-trigger.is-selected .bx-glass-rim [data-bx-light-source="emitter"]',
    ),
  );
});

test('initial tab frames use their glass styles without an opaque button-color flash', async (t) => {
  const page = await pageFor(t);
  await page.addInitScript(() => {
    window.initialTabPaints = [];
    const sample = () => {
      const tabs = [...document.querySelectorAll('app-component-info .bx-tab-trigger')];
      if (tabs.length)
        window.initialTabPaints.push(
          tabs.map((tab) => ({
            skin: tab.hasAttribute('data-bx-surface'),
            background: getComputedStyle(tab).backgroundColor,
            selected: tab.getAttribute('aria-selected') === 'true',
          })),
        );
      if (window.initialTabPaints.length < 12) requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  await page.goto(origin + '/modal');
  await page.waitForFunction(() => window.initialTabPaints.length === 12);
  const frames = await page.evaluate(() => window.initialTabPaints);
  for (const frame of frames)
    for (const tab of frame) {
      assert.equal(tab.skin, true);
      const match = tab.background.match(
        /\/\s*([\d.]+)\s*\)|rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/,
      );
      const alpha = match ? Number(match[1] ?? match[2]) : 1;
      assert.ok(alpha <= (tab.selected ? 0.5 : 0.01), JSON.stringify(tab));
    }
});

test('RTL navigation and narrow headers preserve page width and hide vertical header overflow', async (t) => {
  const page = await pageFor(t, '/components/tabs', {
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  });
  const list = header(page);
  await list.evaluate((element) => {
    element.dir = 'rtl';
  });
  await list.getByRole('tab', { name: 'Overview', exact: true }).press('ArrowRight');
  await selected(list, 'Activity');
  await list.getByRole('tab', { name: 'Activity', exact: true }).press('ArrowLeft');
  await selected(list, 'Overview');
  const geometry = await list.evaluate((element) => ({
    overflow: getComputedStyle(element.querySelector('.bx-tab-list')).overflowY,
    y:
      element.querySelector('.bx-tab-list').scrollHeight -
      element.querySelector('.bx-tab-list').clientHeight,
    right: element.getBoundingClientRect().right,
    containerRight: element.closest('.demo-stage').getBoundingClientRect().right,
  }));
  assert.equal(geometry.overflow, 'hidden');
  assert.ok(geometry.y <= 1, JSON.stringify(geometry));
  assert.ok(geometry.right <= geometry.containerRight, JSON.stringify(geometry));
});

test('individual tab colors, highlight overrides, panel text and both icons are rendered', async (t) => {
  const page = await pageFor(t, '/components/tabs', { reducedMotion: 'reduce' });
  const list = header(page);
  const details = list.getByRole('tab', { name: 'Details', exact: true });
  await details.click();
  await selected(list, 'Details');
  await details.locator('bx-icon svg').nth(1).waitFor();
  assert.equal(await details.locator('bx-icon').count(), 2);
  const matchesToken = (element, token) => {
    const probe = document.createElement('span');
    probe.style.color = `var(--bx-${token})`;
    element.append(probe);
    const expected = getComputedStyle(probe).color;
    probe.remove();
    return getComputedStyle(element).color === expected;
  };
  assert.equal(await details.evaluate(matchesToken, 'text-success'), true);
  await list.getByRole('tab', { name: 'Activity', exact: true }).click();
  await selected(list, 'Activity');
  const activity = list.getByRole('tab', { name: 'Activity', exact: true });
  assert.equal(await activity.evaluate(matchesToken, 'text-warn'), true);
  assert.equal(
    await page
      .locator('.demo-stage [role="tabpanel"]:not([hidden])')
      .evaluate(matchesToken, 'text-info'),
    true,
  );
  await page.waitForFunction(() => {
    const emitter = document.querySelector(
      '.demo-stage .bx-tab-trigger.is-selected [data-bx-light-source="emitter"]',
    );
    return emitter?.style.backgroundImage.includes('--bx-text-warn');
  });
});

for (const route of ['/modal', '/toastr']) {
  test(`${route} uses independent lazy documentation and source-file tabs`, async (t) => {
    const page = await pageFor(t, route);
    const outer = header(page, 'Documentation and code examples');
    await selected(outer, 'Documentation');
    assert.equal(await page.locator('app-component-info app-code').count(), 0);
    await outer.getByRole('tab', { name: 'Code Examples', exact: true }).click();
    await page.locator('app-component-info app-code').waitFor();
    await selected(outer, 'Code Examples');
    assert.equal(await page.locator('app-component-info app-readme').count(), 0);
    const files = header(page, 'Code files');
    const names = await files.getByRole('tab').allTextContents();
    const first = names[0].trim(),
      last = names.at(-1).trim();
    await files.getByRole('tab', { name: first, exact: true }).press('End');
    await selected(files, last);
    await selected(outer, 'Code Examples');
    await files.getByRole('tab', { name: last, exact: true }).press('Home');
    await selected(files, first);
    await page.locator('app-code code.hljs').waitFor();
    assert.equal(await page.locator('app-code pre').count(), 1);
    await checkRelationships(outer);
    await checkRelationships(files);
    const unique = await page
      .locator('[role="tab"], [role="tabpanel"]')
      .evaluateAll(
        (elements) => new Set(elements.map((element) => element.id)).size === elements.length,
      );
    assert.equal(unique, true);
    await outer.getByRole('tab', { name: 'Code Examples', exact: true }).press('ArrowLeft');
    await selected(outer, 'Documentation');
    await page.locator('app-component-info app-readme').waitFor();
    assert.equal(await page.locator('app-component-info app-code').count(), 0);
  });
}

test('Bring home uses the Blocks button and icon and still returns the orb', async (t) => {
  const page = await pageFor(t, '/home');
  await page.locator('.orb-ready').waitFor();
  const button = page.getByRole('button', { name: 'Bring the light home', exact: true });
  assert.equal(await button.getAttribute('bx-button'), '');
  assert.equal(await button.locator('bx-icon svg').count(), 1);
  await page.locator('.light-orb').hover();
  await page.waitForFunction(() => document.querySelector('.light-orb').dataset.state === 'flying');
  await button.click();
  await page.waitForFunction(() => document.querySelector('.light-orb').dataset.state === 'asleep');
  await page.locator('.orb-home-action').hover();
  await page.locator('.bx-tooltip-pane').filter({ hasText: 'Bring the orb back' }).waitFor();
});
