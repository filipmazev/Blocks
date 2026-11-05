import { ValidationError } from '@angular/forms/signals';

import { IBxI18nAdapter, resolveText } from '@filip.mazev/blocks/core';

import { VALIDATION_KIND_ALIASES } from '@forms/constants/validation.constants';
import { ValidationMessages } from '@forms/types/validation.types';

/**
 * Resolve schema messages and legacy error payloads without losing validator context.
 *
 * @param error - Validation error whose key and parameters select the message.
 * @param overrides - Instance-level validation-message overrides.
 * @param defaults - Shared form validation-message defaults.
 * @param adapter - Optional translation adapter used for message keys and parameters.
 */
export function resolveValidationMessage(
  error: ValidationError.WithOptionalFieldTree,
  overrides: ValidationMessages,
  defaults: ValidationMessages,
  adapter: IBxI18nAdapter | null
): string {
  const kind = VALIDATION_KIND_ALIASES[error.kind] ?? error.kind;
  const legacyContext: unknown = 'context' in error ? error.context : undefined;
  const params: Record<string, unknown> = legacyContext !== null && typeof legacyContext === 'object' ? { ...legacyContext } : { ...error };
  const override = overrides[error.kind] ?? overrides[kind];
  const suppliedMessage =
    error.message ?? (typeof legacyContext === 'string' ? legacyContext : typeof params['message'] === 'string' ? params['message'] : undefined);
  const message = override ?? suppliedMessage ?? defaults[error.kind] ?? defaults[kind] ?? defaults['invalid'] ?? 'Invalid value.';

  return resolveText(typeof message === 'function' ? message({ kind, error, params }) : message, adapter, params);
}
