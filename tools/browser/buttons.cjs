// Run against a running playground: BLOCKS_PLAYWRIGHT_PATH=/path/to/playwright node --test tools/browser/buttons.cjs
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium, webkit } = require(process.env.BLOCKS_PLAYWRIGHT_PATH || 'playwright');
const origin = process.env.BLOCKS_PLAYGROUND_URL || 'http://localhost:8080';
let browser;
before(async () => {
  browser = process.env.BLOCKS_BROWSER === 'webkit' ? await webkit.launch() : await chromium.launch({ channel: 'chrome' });
});
after(async () => browser?.close());

async function pageFor(t, mode = 'dark', reducedMotion = 'reduce') {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, colorScheme: mode, reducedMotion });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  t.after(async () => {
    await page.close();
    assert.deepEqual(errors, []);
  });
  page.setDefaultTimeout(10000);
  await page.goto(origin + '/appearance');
  await page.locator('.preview-icon-button[data-bx-surface]').first().waitFor();
  return page;
}

async function translucency(page, value) {
  await page.getByRole('slider', { name: 'Translucency', exact: true }).evaluate((input, value) => {
    input.value = String(value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }, value);
  await page.waitForFunction((value) => Number(getComputedStyle(document.documentElement).getPropertyValue('--bx-translucency')) === value, value);
}

const alpha = (color) => {
  const match = color.match(/\/\s*([\d.]+)\s*\)$/) ?? (color.startsWith('rgba(') ? color.match(/,\s*([\d.]+)\s*\)$/) : null);
  return match ? Number(match[1]) : 1;
};
const backgrounds = (page, selector) =>
  page
    .locator(selector)
    .evaluateAll((elements) => elements.map((element) => getComputedStyle(element.querySelector(':scope > .bx-refraction-pane') || element).backgroundColor));

test('translucency updates every visible surface in the input frame with motion enabled', async (t) => {
  const page = await pageFor(t, 'dark', 'no-preference');
  const samples = await page.getByRole('slider', { name: 'Translucency', exact: true }).evaluate(async (input) => {
    const samples = [];
    for (const value of [0, 1, 0.2, 0.8, 0]) {
      input.value = String(value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      samples.push(
        [...document.querySelectorAll('[data-bx-surface]')]
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width && rect.height && rect.bottom > 0 && rect.top < innerHeight;
          })
          .map((element) => {
            const actual = getComputedStyle(element).backgroundColor;
            // An unanimated clone provides the target color for custom material curves too.
            const clone = element.cloneNode(false);
            clone.style.setProperty('transition', 'none', 'important');
            element.parentElement.append(clone);
            const expected = getComputedStyle(clone).backgroundColor;
            clone.remove();
            return { element: element.className, actual, expected };
          })
      );
      await new Promise(requestAnimationFrame);
    }
    return samples;
  });
  assert.ok(samples.every((sample) => sample.length > 10));
  for (const sample of samples)
    for (const surface of sample) {
      assert.equal(surface.actual, surface.expected, JSON.stringify(surface));
    }
  for (const component of ['input-field', 'select', 'checkbox', 'radio', 'slide-toggle']) {
    await page.goto(origin + '/components/' + component);
    await page.locator('.demo-stage [data-bx-surface]').first().waitFor();
    const transitions = await page.locator('.demo-stage [data-bx-surface]').evaluateAll((elements) =>
      elements.map((element) => {
        const style = getComputedStyle(element);
        return { element: element.className, transition: style.transitionProperty, durations: style.transitionDuration };
      })
    );
    assert.ok(
      transitions.every(
        ({ transition, durations }) => !/background|all/.test(transition) || durations.split(',').every((duration) => parseFloat(duration) === 0)
      ),
      JSON.stringify(transitions)
    );
  }
});

test('article controls keep receiving image colors during continuous nested scrolling', async (t) => {
  const page = await pageFor(t, 'dark', 'no-preference');
  await page.locator('.preview-reader').dispatchEvent('pointerdown');
  await page.waitForTimeout(300);
  const changes = await page.evaluate(async () => {
    const reader = document.querySelector('.preview-reader');
    const environments = [...document.querySelectorAll('.preview-tools .bx-glass-environment')];
    const previous = environments.map((element) => element.style.cssText);
    const changes = environments.map(() => 0);
    for (let frame = 0; frame < 90; frame++) {
      reader.scrollTop = frame * 3;
      await new Promise(requestAnimationFrame);
      environments.forEach((element, index) => {
        if (element.style.cssText !== previous[index]) {
          changes[index]++;
          previous[index] = element.style.cssText;
        }
      });
    }
    return changes;
  });
  assert.equal(changes.length, 4);
  assert.ok(
    changes.every((count) => count >= 20),
    JSON.stringify(changes)
  );
});

test('glass buttons respond across the scale with a readable refraction floor in light and dark modes', async (t) => {
  for (const mode of ['light', 'dark']) {
    const page = await pageFor(t, mode);
    const values = [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.7, 1];
    const samples = [];
    const refracted = (await page.locator('.preview-icon-button').first().getAttribute('data-bx-refraction')) === 'true';
    for (const value of values) {
      await translucency(page, value);
      const colors = await backgrounds(page, '.preview-icon-button, .global-controls .bx-btn-tonal');
      const opacities = colors.map(alpha);
      assert.ok(
        opacities.every((opacity) => Math.abs(opacity - opacities[0]) < 0.002),
        `${mode}/${value}: ${colors}`
      );
      const position = value * value;
      const strength = 0.5 * position + 0.35 * position * position;
      const expected = refracted ? 0.72 + 0.2 * strength : 0.06 + 1.02 * strength - 0.28 * strength * strength;
      assert.ok(
        opacities.every((opacity) => Math.abs(opacity - expected) < 0.002),
        `${mode}/${value}: expected ${expected}, got ${colors}`
      );
      samples.push(opacities[0]);
    }
    assert.ok(refracted ? samples[0] >= 0.72 : samples[0] < 0.1, `${mode}: ${samples}`);
    for (let index = 1; index < samples.length; index++) {
      assert.ok(samples[index] > samples[index - 1] + 0.005, `${mode}: ${samples}`);
    }
    // Unmounted buttons retain the classic material; active refraction adds its readability floor.
    await translucency(page, 0.1);
    const colors = await page
      .locator('.preview-icon-button')
      .first()
      .evaluate((button) => {
        const clone = button.cloneNode(false);
        for (const attribute of [...clone.attributes]) if (attribute.name.startsWith('data-bx-')) clone.removeAttribute(attribute.name);
        button.parentElement.append(clone);
        const colors = [button, clone].map((element) => getComputedStyle(element.querySelector(':scope > .bx-refraction-pane') || element).backgroundColor);
        clone.remove();
        return colors;
      });
    const position = 0.1 * 0.1;
    const strength = 0.5 * position + 0.35 * position * position;
    const fallback = 0.06 + 1.02 * strength - 0.28 * strength * strength;
    assert.ok(Math.abs(alpha(colors[1]) - fallback) < 0.002, String(colors));
    assert.ok(refracted ? alpha(colors[0]) >= 0.72 : Math.abs(alpha(colors[0]) - alpha(colors[1])) < 0.002, String(colors));
  }
});

test('reduced transparency and high contrast keep glass buttons opaque', async (t) => {
  const page = await pageFor(t);
  await translucency(page, 0);
  await page.getByRole('switch', { name: 'Reduce transparency', exact: true }).locator('..').click();
  await page.waitForFunction(() => document.getElementById('appearance-translucency').disabled);
  assert.equal(await page.getByRole('slider', { name: 'Translucency', exact: true }).isDisabled(), true);
  for (const color of await backgrounds(page, '.preview-icon-button')) assert.equal(alpha(color), 1, color);
  await page.getByRole('switch', { name: 'Reduce transparency', exact: true }).locator('..').click();
  await page.waitForFunction(() => !document.getElementById('appearance-translucency').disabled);
  await page.getByRole('switch', { name: 'High contrast', exact: true }).locator('..').click();
  await page.waitForFunction(() => document.documentElement.classList.contains('high-contrast'));
  for (const color of await backgrounds(page, '.preview-icon-button')) assert.equal(alpha(color), 1, color);
});

test('selected buttons retain a contour or underline without translucent lighting', async (t) => {
  for (const mode of ['light', 'dark']) {
    const page = await pageFor(t, mode);
    await page.getByRole('switch', { name: 'Reduce transparency', exact: true }).locator('..').click();
    await page.goto(origin + '/components/button');
    await page.locator('.demo-stage .bx-btn-filled[data-bx-surface]').first().waitFor();
    for (const variant of ['filled', 'tonal', 'icon', 'text']) {
      const button = page.locator('.demo-stage .bx-btn-' + variant + ':not([disabled], [aria-disabled="true"])').first();
      const resting = await button.evaluate((element) => getComputedStyle(element).boxShadow);
      await button.evaluate((element) => element.setAttribute('aria-pressed', 'true'));
      await page.waitForTimeout(250);
      const selected = await button.evaluate((element) => ({
        opaque: element.getAttribute('data-bx-reduced-transparency'),
        shadow: getComputedStyle(element).boxShadow,
        underline: getComputedStyle(element).textDecorationLine
      }));
      assert.equal(selected.opaque, 'true');
      if (variant === 'text') assert.match(selected.underline, /underline/);
      else {
        assert.notEqual(selected.shadow, resting);
        assert.match(selected.shadow, /inset/);
      }
    }
  }
});

test('filled actions remain solid and text actions stay transparent at minimum translucency', async (t) => {
  const page = await pageFor(t);
  await translucency(page, 0);
  await page.goto(origin + '/components/button');
  await page.locator('.demo-stage .bx-btn-filled[data-bx-surface]').first().waitFor();
  for (const color of await backgrounds(page, '.demo-stage .bx-btn-filled, .demo-stage .bx-btn-fab')) assert.equal(alpha(color), 1, color);
  for (const color of await backgrounds(page, '.demo-stage .bx-btn-text')) assert.equal(alpha(color), 0, color);
});
