import type { DatePickerValue, IsoTime } from '@filip.mazev/blocks/core';

export interface IRegistrationData {
  project: string;
  email: string;
  password: string;
  confirmation: string;
  teamSize: number | null;
  destination: string;
  categories: string[];
  dateRange: DatePickerValue;
  meetingTime: IsoTime | null;
  plan: string;
  terms: boolean;
  notifications: boolean;
  note: string;
  budget: number;
}
