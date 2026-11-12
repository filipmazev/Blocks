import type { ValidationMessages } from '@forms/types/validation.types';

/** Default contextual messages used by date picker edits and calendar rejections. */
export const DATE_VALIDATION_MESSAGES: ValidationMessages = {
  dateParse: ({ params }) => `Enter a date in the ${params['format']} format.`,
  dateMin: ({ params }) => `The date cannot be before ${params['minFormatted']}.`,
  dateMax: ({ params }) => `The date cannot be after ${params['maxFormatted']}.`,
  dateOrder: ({ params }) => `The end date cannot be before the start date (${params['startFormatted']}).`,
  dateDisabled: 'This date is not selectable. Choose another date.',
  dateAvailability: 'Availability for this date has not been confirmed. Wait for loading to finish or retry.',
  dateMinLength: ({ params }) => `Select a range of at least ${params['minLength']} days.`,
  dateMaxLength: ({ params }) => `Select a range of at most ${params['maxLength']} days.`,
  dateSameDay: 'The start and end dates must be different.',
  dateLimit: ({ params }) => `Select no more than ${params['limit']} dates.`,
  dateIncomplete: 'Enter both a start date and an end date.',
  dateCrossing: 'This range includes a date that cannot be selected. Choose another range.'
};

/** Maps date restriction and range validation reasons onto the shared Forms message keys. */
export const DATE_VALIDATION_KINDS: Readonly<Record<string, string>> = {
  parse: 'dateParse',
  min: 'dateMin',
  max: 'dateMax',
  order: 'dateOrder',
  unknown: 'dateAvailability',
  'min-length': 'dateMinLength',
  'max-length': 'dateMaxLength',
  'same-day': 'dateSameDay',
  limit: 'dateLimit',
  incomplete: 'dateIncomplete',
  crossing: 'dateCrossing'
};
