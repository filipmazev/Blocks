import { booleanAttribute, numberAttribute } from '@angular/core';

export const optionalNumber = (value: unknown): number | undefined => (value === undefined || value === null ? undefined : numberAttribute(value));

export const optionalBoolean = (value: unknown): boolean | undefined => (value === undefined || value === null ? undefined : booleanAttribute(value));
