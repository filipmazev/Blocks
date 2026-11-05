import { booleanAttribute, numberAttribute } from '@angular/core';

/**
 * Convert an optional attribute with Angular number-attribute semantics, preserving absence as undefined.
 *
 * @param value - Consumer attribute/input value to coerce.
 */
export const optionalNumber = (value: unknown): number | undefined => (value === undefined || value === null ? undefined : numberAttribute(value));

/**
 * Coerce an optional boolean input while preserving undefined/null as an inherited setting.
 *
 * @param value - Consumer attribute/input value to coerce using Angular boolean-attribute semantics.
 */
export const optionalBoolean = (value: unknown): boolean | undefined => (value === undefined || value === null ? undefined : booleanAttribute(value));
