import { IBxSelectOption } from '@filip.mazev/blocks/forms';
import { DemoLanguage } from '../types/demo-language.types';

export const DEMO_LANGUAGE_OPTIONS: readonly IBxSelectOption<DemoLanguage>[] = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Français', value: 'fr' },
  { label: 'Deutsch', value: 'de' }
];
