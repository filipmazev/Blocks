import type { ValidationMessages } from '@forms/types/validation.types';

/** Contextual validation messages shared by typed time edits and picker restrictions. */
export const TIME_VALIDATION_MESSAGES: ValidationMessages = {
  timeFormat: ({ params }) => `Enter a time in the ${params['format']} format.`,
  timeRange: ({ params }) =>
    params['hourCycle'] === 12
      ? 'Use an hour from 1 to 12 with AM or PM, and minutes and seconds from 00 to 59.'
      : 'Use an hour from 00 to 23, and minutes and seconds from 00 to 59.',
  timeMin: ({ params }) => `The time cannot be before ${params['minFormatted']}.`,
  timeMax: ({ params }) => `The time cannot be after ${params['maxFormatted']}.`,
  timeDisabled: 'This time is unavailable. Choose another time.',
  timeAvailability: 'This time has not been confirmed as available. Retry loading the available times.',
  timeLoading: 'Wait for the available times to finish loading.',
  timeStep: ({ params }) => `Use increments of ${params['minuteStep']} minutes, ${params['secondStep']} seconds and ${params['millisecondStep']} milliseconds.`
};
