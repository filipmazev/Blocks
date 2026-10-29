import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
import * as sass from 'sass';
import postcss from 'postcss';

const require = createRequire(import.meta.url);
async function sourceModule(entry) {
  const result = await build({ entryPoints: [entry], bundle: true, packages: 'external', platform: 'node', format: 'cjs', write: false });
  const module = { exports: {} };
  new Function('require', 'module', 'exports', result.outputFiles[0].text)(require, module, module.exports);
  return module.exports;
}
const { THEME_PALETTES } = await sourceModule('projects/blocks/core/types/appearance.types.ts');
const { resolveThemeId } = await sourceModule('projects/blocks/core/helpers/theme-functions.ts');
const { ngAdd } = await sourceModule('projects/blocks/schematics/ng-add/index.ts');
const { Tree } = require('@angular-devkit/schematics');
const schema = JSON.parse(readFileSync('projects/blocks/schematics/ng-add/schema.json', 'utf8'));
const appearances = ['light', 'dark'];
const ids = [...THEME_PALETTES.map(({ id }) => id), 'high-contrast'];
const css = sass.compileString(`@use 'index' as bx;\n${ids.flatMap((id) => appearances.map((mode) => `.fixture-${id}-${mode} { @include bx.bx-theme(bx.$${id}-${mode}-theme); }`)).join('\n')}`, {
  loadPaths: ['projects/blocks/core/styles'],
}).css;
const fixtures = new Map();
postcss.parse(css).walkRules((rule) => {
  if (!rule.selector.startsWith('.fixture-')) return;
  const tokens = {};
  rule.walkDecls((declaration) => { tokens[declaration.prop.replace('--bx-', '')] = declaration.value; });
  fixtures.set(rule.selector.slice('.fixture-'.length), tokens);
});
function rgb(value) {
  if (value.startsWith('#')) {
    let hex = value.slice(1);
    if (hex.length === 3) hex = [...hex].map((part) => part + part).join('');
    return [0, 2, 4].map((index) => parseInt(hex.slice(index, index + 2), 16));
  }
  assert.match(value, /^rgb\(/, value);
  return value.match(/[\d.]+%?/g).slice(0, 3).map((part) => parseFloat(part) * (part.endsWith('%') ? 2.55 : 1));
}
function luminance(value) {
  return rgb(value).map((part) => {
    const channel = part / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  }).reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0);
}
function contrast(first, second) {
  const [low, high] = [luminance(first), luminance(second)].sort((a, b) => a - b);
  return (high + 0.05) / (low + 0.05);
}
function install(theme) {
  const tree = Tree.empty();
  tree.create('/angular.json', JSON.stringify({ projects: { demo: { projectType: 'application', architect: { build: { options: { styles: ['src/styles.scss'] } } } } } }));
  tree.create('/src/styles.scss', '');
  ngAdd({ theme })(tree, { logger: { info() {}, warn() {} } });
  return tree;
}

test('every palette emits both roles, neutral canvases, solid scrollbars and paired foregrounds', () => {
  for (const id of [...THEME_PALETTES.map(({ id }) => id), 'high-contrast']) {
    for (const mode of appearances) {
      const tokens = fixtures.get(`${id}-${mode}`);
      assert.deepEqual(rgb(tokens['bg-canvas']), mode === 'light' ? [255, 255, 255] : [0, 0, 0], `${id}/${mode} canvas`);
      for (const name of ['bg-canvas', 'bg-surface', 'bg-surface-alt', 'bg-element', 'bg-element-hover', 'bg-element-active', 'bg-neutral']) {
        const channels = rgb(tokens[name]);
        assert.ok(Math.max(...channels) - Math.min(...channels) < 0.01, `${id}/${mode} ${name} must be neutral`);
      }
      for (const name of ['scroll-thumb', 'scroll-thumb-hover']) {
        assert.doesNotMatch(tokens[name], /gradient/);
        rgb(tokens[name]);
      }
      for (const role of ['primary', 'accent']) {
        for (const suffix of ['', '-hover', '-active']) {
          const ratio = contrast(tokens[`${role}${suffix}`], tokens[`on-${role}${suffix}`]);
          assert.ok(ratio >= 4.5, `${id}/${mode} ${role}${suffix}: ${ratio}`);
        }
        const text = tokens[role === 'primary' ? 'text-brand' : 'text-accent'];
        for (const background of [`${role}-subtle`, 'bg-surface', 'bg-surface-alt']) {
          const ratio = contrast(text, tokens[background]);
          assert.ok(ratio >= 4.5, `${id}/${mode} ${role} text on ${background}: ${ratio}`);
        }
        assert.ok(tokens[`color-${role}-500`]);
      }
      assert.equal(Object.keys(tokens).some((key) => key.startsWith('meta-')), false);
    }
  }
});

test('approved palette anchors match the picker and status colors remain independent', () => {
  for (const palette of THEME_PALETTES) {
    const light = fixtures.get(`${palette.id}-light`);
    const order = palette.id === 'cyberpunk' ? ['accent', 'primary'] : ['primary', 'accent'];
    order.forEach((role, index) => assert.deepEqual(rgb(light[role]), rgb(palette.colors[index]), palette.id));
    for (const mode of appearances) {
      const tokens = fixtures.get(`${palette.id}-${mode}`);
      const reference = fixtures.get(`azure-ember-${mode}`);
      for (const status of ['success', 'warn', 'danger', 'info']) {
        for (const prefix of ['text-', 'bg-', 'border-']) assert.equal(tokens[`${prefix}${status}`], reference[`${prefix}${status}`]);
      }
    }
  }
});

test('only current palette IDs resolve', () => {
  for (const { id } of THEME_PALETTES) {
    assert.equal(resolveThemeId(id), id);
  }
  for (const invalid of [undefined, null, '', 'invalid', '__proto__', 'toString', 'graphite-sky-blue', 'azure-coral', 'scarlet-cyan', 'ink-jade', 'carbon-denim', 'white', 'blue', 'purple', 'orange', 'red', 'green']) {
    assert.equal(resolveThemeId(invalid), undefined);
  }
});

test('approved palettes retain their light anchors and tuned dark action colors', () => {
  const approved = {
    'carbon-cobalt': { light: ['#292a2d', '#356fe8'], dark: ['#e2e2e0', '#6d9aff'] },
    'azure-ember': { light: ['#217eff', '#d85a1a'], dark: ['#72a7ff', '#f27b35'] },
    'brick-rose-cyan': { light: ['#b64a50', '#0891b2'], dark: ['#d36b77', '#22b8d0'] },
  };
  for (const [id, modes] of Object.entries(approved)) {
    for (const [mode, colors] of Object.entries(modes)) {
      const tokens = fixtures.get(`${id}-${mode}`);
      assert.deepEqual(rgb(tokens.primary), rgb(colors[0]), `${id}/${mode} primary`);
      assert.deepEqual(rgb(tokens.accent), rgb(colors[1]), `${id}/${mode} accent`);
    }
  }
});

test('ng add offers only current palettes and generates compilable Sass for every choice', () => {
  const options = schema.properties.theme;
  assert.match(options['x-prompt'].message, /palette/i);
  assert.deepEqual(options['x-prompt'].items, THEME_PALETTES.map(({ id, label }) => ({ value: id, label })));
  assert.deepEqual(options.enum, THEME_PALETTES.map(({ id }) => id));
  assert.equal(options.default, 'carbon-cobalt');
  for (const theme of [undefined, ...THEME_PALETTES.map(({ id }) => id)]) {
    const tree = install(theme);
    const id = resolveThemeId(theme) ?? 'carbon-cobalt';
    const styles = tree.read('/src/styles.scss').toString();
    assert.ok(styles.includes(`$${id}-light-theme`), `${theme} light`);
    assert.ok(styles.includes(`$${id}-dark-theme`), `${theme} dark`);
    assert.doesNotThrow(() => sass.compileString(styles.replace("@use '@filip.mazev/blocks' as *;", "@use 'index' as *;"), { loadPaths: ['projects/blocks/core/styles'] }), theme);
    const angular = JSON.parse(tree.read('/angular.json').toString());
    assert.ok(angular.projects.demo.architect.build.options.styles.includes('node_modules/@filip.mazev/blocks/effects/effects.css'));
  }
});
