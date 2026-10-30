import { Directive } from '@angular/core';

@Directive({ selector: '[bxSuffix]', host: { class: 'bx-field-suffix' } })
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Projection marker for custom suffix content.
export class SuffixDirective {}
