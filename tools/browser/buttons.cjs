// Run against a running playground: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/buttons.cjs
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium, webkit } = require(process.env.BLOCKS_PLAYWRIGHT_PATH || 'playwright');
const origin = process.env.BLOCKS_PLAYGROUND_URL || 'http://localhost:8080';
let browser;
before(async () => {
  browser = process.env.BLOCKS_BROWSER === 'webkit'
    ? await webkit.launch()
    : await chromium.launch({ channel: 'chrome' });
});
after(async () => browser?.close());

async function pageFor(t, mode = 'dark') {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, colorScheme: mode, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  t.after(async () => {
    await page.close();
    assert.deepEqual(errors, []);
  });
  page.setDefaultTimeout(10000);
  await page.goto(origin + '/appearance');
  await page.locator('.preview-icon-button[data-bx-surface]').first().waitFor();
  // Sample settled tint independently of the user's motion preference.
  await page.addStyleTag({ content: '.bx-btn { transition: none !important; }' });
  return page;
}

async function glassiness(page, value) {
  await page.getByRole('slider', { name: 'Glassiness', exact: true }).evaluate((input, value) => {
    input.value = String(value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }, value);
  await page.waitForFunction(value => Number(getComputedStyle(document.documentElement).getPropertyValue('--bx-glassiness')) === value, value);
}

const alpha = color => {
  const match = color.match(/\/\s*([\d.]+)\s*\)$/)
    ?? (color.startsWith('rgba(') ? color.match(/,\s*([\d.]+)\s*\)$/) : null);
  return match ? Number(match[1]) : 1;
};
const backgrounds = (page, selector) => page.locator(selector).evaluateAll(elements => elements.map(element => getComputedStyle(element).backgroundColor));

test('circular and tonal glass buttons keep responding below 30% in light and dark modes', async t => {
  for (const mode of ['light', 'dark']) {
    const page = await pageFor(t, mode);
    const values = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5, 1];
    const samples = [];
    for (const value of values) {
      await glassiness(page, value);
      const colors = await backgrounds(page, '.preview-icon-button, .global-controls .bx-btn-tonal');
      const opacities = colors.map(alpha);
      assert.ok(opacities.every(opacity => Math.abs(opacity - opacities[0]) < 0.002), `${mode}/${value}: ${colors}`);
      samples.push(opacities[0]);
    }
    assert.ok(samples[0] < 0.1, `${mode}: ${samples}`);
    for (let index = 1; index < samples.length; index++) {
      assert.ok(samples[index] > samples[index - 1] + 0.005, `${mode}: ${samples}`);
    }
    // The same tint must be present before the button's surface runtime mounts.
    await glassiness(page, 0.1);
    const colors = await page.locator('.preview-icon-button').first().evaluate(button => {
      const clone = button.cloneNode(false);
      for (const attribute of [...clone.attributes]) if (attribute.name.startsWith('data-bx-')) clone.removeAttribute(attribute.name);
      button.parentElement.append(clone);
      const colors = [button, clone].map(element => getComputedStyle(element).backgroundColor);
      clone.remove();
      return colors;
    });
    assert.ok(Math.abs(alpha(colors[0]) - alpha(colors[1])) < 0.002, String(colors));
  }
});

test('reduced transparency and high contrast keep glass buttons opaque', async t => {
  const page = await pageFor(t);
  await glassiness(page, 0);
  await page.getByRole('checkbox', { name: 'Reduce transparency', exact: true }).locator('..').click();
  await page.waitForFunction(() => document.getElementById('appearance-glassiness').disabled);
  assert.equal(await page.getByRole('slider', { name: 'Glassiness', exact: true }).isDisabled(), true);
  for (const color of await backgrounds(page, '.preview-icon-button')) assert.equal(alpha(color), 1, color);
  await page.getByRole('checkbox', { name: 'Reduce transparency', exact: true }).locator('..').click();
  await page.waitForFunction(() => !document.getElementById('appearance-glassiness').disabled);
  await page.getByRole('checkbox', { name: 'High contrast', exact: true }).locator('..').click();
  await page.waitForFunction(() => document.documentElement.classList.contains('high-contrast'));
  for (const color of await backgrounds(page, '.preview-icon-button')) assert.equal(alpha(color), 1, color);
});

test('filled actions remain solid and text actions stay transparent at minimum glassiness', async t => {
  const page = await pageFor(t);
  await glassiness(page, 0);
  await page.goto(origin + '/components/button');
  await page.locator('.demo-stage .bx-btn-filled[data-bx-surface]').first().waitFor();
  for (const color of await backgrounds(page, '.demo-stage .bx-btn-filled, .demo-stage .bx-btn-fab')) assert.equal(alpha(color), 1, color);
  for (const color of await backgrounds(page, '.demo-stage .bx-btn-text')) assert.equal(alpha(color), 0, color);
});
