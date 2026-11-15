import assert from 'node:assert/strict';
import test from 'node:test';

import { readPreviewCompositions } from '../helpers/component-preview.helpers.mjs';

test('catalog previews reject markup that only imitates a control', () => {
  assert.throws(
    () => readPreviewCompositions("@switch (kind()) { @case ('loading') { <span class='spinner'></span> } }", 'preview.html'),
    /loading must render a real Blocks/
  );
});

test('catalog previews accept actual components, native-host directives, and the local toast adapter', () => {
  const template = `@switch (kind()) {
    @case ('button') { <button bx-button type="button">Save</button> }
    @case ('grid') { <bx-grid /> }
    @case ('toast') { <app-toast-preview /> }
  }`;

  assert.deepEqual(readPreviewCompositions(template, 'preview.html'), ['button', 'grid', 'toast']);
});

test('catalog previews discover real views nested in compositions and grouped cases', () => {
  const template = `@if (recipe()) { <div></div> } @else {
    @switch (kind()) {
      @case ('panel')
      @case ('resize') { <section>@if (enabled()) { <bx-side-panel /> }</section> }
    }
  }`;

  assert.deepEqual(readPreviewCompositions(template, 'preview.html'), ['panel', 'resize']);
});
