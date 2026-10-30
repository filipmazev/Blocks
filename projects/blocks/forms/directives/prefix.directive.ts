import { Directive } from '@angular/core';

@Directive({ selector: '[bxPrefix]', host: { class: 'bx-field-prefix' } })
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Projection marker for custom prefix content.
export class PrefixDirective {}
