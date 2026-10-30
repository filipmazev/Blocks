export interface IRegistrationData {
  project: string;
  email: string;
  password: string;
  confirmation: string;
  teamSize: number | null;
  destination: string;
  categories: string[];
  plan: string;
  terms: boolean;
  notifications: boolean;
  note: string;
  budget: number;
}
