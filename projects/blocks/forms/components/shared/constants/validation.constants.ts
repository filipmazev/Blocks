import { IFormFieldDefaults } from '../interfaces/iform-field-defaults.interface';

export const DEFAULT_FORM_FIELD_OPTIONS: IFormFieldDefaults = {
  errorPolicy: 'touched',
  errorMode: 'first',
  errorMessages: {
    required: 'This field is required.',
    email: 'Enter a valid email address.',
    minLength: ({ params }) => `Enter at least ${params['minLength'] ?? params['requiredLength']} characters.`,
    maxLength: ({ params }) => `Enter no more than ${params['maxLength'] ?? params['requiredLength']} characters.`,
    min: ({ params }) => `Enter a value of at least ${params['min']}.`,
    max: ({ params }) => `Enter a value of no more than ${params['max']}.`,
    pattern: 'Enter a value in the required format.',
    parse: 'Enter a valid value.',
    invalid: 'Invalid value.'
  },
  appearance: 'fill',
  floatLabel: 'auto',
  hideRequiredMarker: false,
  subscriptSizing: 'fixed',
  tooltipOnTruncate: true
};

export const VALIDATION_KIND_ALIASES: Readonly<Record<string, string>> = { minlength: 'minLength', maxlength: 'maxLength' };
