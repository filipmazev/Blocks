import { IBxSelectOption, ValidationMessages } from '@filip.mazev/blocks/forms';
import { IRegistrationData } from '../interfaces/iregistration-data.interface';

export const INITIAL_REGISTRATION: IRegistrationData = {
  project: '',
  email: '',
  password: '',
  confirmation: '',
  teamSize: null,
  destination: '',
  categories: [],
  plan: '',
  terms: false,
  notifications: false,
  note: '',
  budget: 50
};

export const DEMO_DESTINATIONS: readonly IBxSelectOption<string>[] = [
  { label: 'Skopje', value: 'skopje', group: 'North Macedonia' },
  { label: 'Ohrid', value: 'ohrid', group: 'North Macedonia' },
  { label: 'Bitola', value: 'bitola', group: 'North Macedonia' },
  { label: 'London', value: 'london', group: 'Europe' },
  { label: 'Paris', value: 'paris', group: 'Europe' },
  { label: 'Berlin', value: 'berlin', group: 'Europe' },
  { label: 'Amsterdam', value: 'amsterdam', group: 'Europe' },
  { label: 'Vienna', value: 'vienna', group: 'Europe', disabled: true },
  { label: 'Prague', value: 'prague', group: 'Europe' },
  { label: 'Barcelona', value: 'barcelona', group: 'Europe' },
  { label: 'Copenhagen', value: 'copenhagen', group: 'Europe' },
  { label: 'Stockholm', value: 'stockholm', group: 'Europe' },
  { label: 'Lisbon', value: 'lisbon', group: 'Europe' },
  { label: 'Rome', value: 'rome', group: 'Europe' },
  { label: 'Athens', value: 'athens', group: 'Europe' },
  { label: 'New York', value: 'new-york', group: 'Americas' },
  { label: 'San Francisco', value: 'san-francisco', group: 'Americas' },
  { label: 'Toronto', value: 'toronto', group: 'Americas' },
  { label: 'Vancouver', value: 'vancouver', group: 'Americas' },
  { label: 'Buenos Aires', value: 'buenos-aires', group: 'Americas' },
  { label: 'Tokyo', value: 'tokyo', group: 'Asia' },
  { label: 'Singapore', value: 'singapore', group: 'Asia' },
  { label: 'Seoul', value: 'seoul', group: 'Asia' },
  { label: 'Sydney', value: 'sydney', group: 'Oceania' }
];

export const DEMO_PROJECT_MESSAGES: ValidationMessages = {
  minLength: ({ params }) => `Use at least ${params['minLength']} characters for the project name.`
};

export const DEMO_PAGE_SIZES: readonly IBxSelectOption<number>[] = [
  { label: '1 location', value: 1 },
  { label: '3 locations', value: 3 },
  { label: '12 locations', value: 12 },
  { label: 'All 24 locations', value: 24 }
];

export const DEMO_ALL_SELECTED_TOOLTIP_OPTIONS: readonly IBxSelectOption<string>[] = [
  { label: 'Remote total', value: 'total' },
  { label: 'Custom text', value: 'custom' },
  { label: 'Loaded selections', value: 'loaded' },
  { label: 'Disabled', value: 'disabled' }
];
