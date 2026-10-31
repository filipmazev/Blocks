import { IAutocompleteOption, IBxSelectOption } from '@filip.mazev/blocks/forms';

export const AUTOCOMPLETE_OPTIONS: readonly IAutocompleteOption[] = [
  'Skopje',
  'Ohrid',
  'Bitola',
  'Prilep',
  'Tetovo',
  'Struga',
  'Veles',
  'Shtip',
  'Kumanovo',
  'Gevgelija',
  'Kavadarci',
  'Resen',
  'Krusevo',
  'Berovo',
  'Debar',
  'Strumica',
  'Gostivar',
  'Kicevo',
  'Kratovo',
  'Kocani',
  'Radovish',
  'Negotino',
  'Delchevo',
  'Vinica'
].map((value) => ({ value }));

export const AUTOCOMPLETE_PAGE_SIZES: readonly IBxSelectOption<number>[] = [
  { label: '1 suggestion', value: 1 },
  { label: '3 suggestions', value: 3 },
  { label: '12 suggestions', value: 12 },
  { label: 'All 24 suggestions', value: 24 }
];
