export const TRUNCATION_PIPE_EXAMPLE = `<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;

export const TRUNCATION_CUSTOM_EXAMPLE = `<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;

export const TRUNCATION_LOGIC_EXAMPLE = `import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;
