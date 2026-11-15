import type { IComponentPreviewRecipe } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-preview-recipe.interface';

import { Autocomplete, DatePicker, InputField, MultiSelect, RangeSlider, SearchInput, Select, TimePicker } from '@filip.mazev/blocks/forms';
import { Breadcrumbs } from '@filip.mazev/blocks/navigation';
import { Alert, Calendar, Tooltip } from '@filip.mazev/blocks/primitives';

import { defineComponentPreview } from '@playground/components/screens/library-components/component-demo/helpers/define-component-preview.helpers';

/** Real component recipes. Add an import and recipe here, then map its key in component-preview.overrides.constants.ts. */
export const COMPONENT_PREVIEW_RECIPES: Readonly<Partial<Record<string, IComponentPreviewRecipe>>> = {
  alert: defineComponentPreview(Alert, { tone: 'success', title: 'Saved', message: 'Your changes are ready.', emissive: true }),
  autocomplete: defineComponentPreview(Autocomplete, {
    label: 'City',
    value: 'Berlin',
    subscriptSizing: 'dynamic',
    options: [{ value: 'Berlin' }, { value: 'Bern' }, { value: 'Bergen' }]
  }),
  breadcrumbs: defineComponentPreview(Breadcrumbs, {
    items: [
      { label: 'Home', route: '/' },
      { label: 'Components', route: '/components' },
      { label: 'Button', route: '/components/button' }
    ]
  }),
  calendar: defineComponentPreview(Calendar, {
    viewDate: '2026-02-01',
    value: '2026-02-21',
    locale: 'en-GB',
    fixedWeeks: false,
    showToday: false,
    showTodayButton: false
  }),
  'date-picker': defineComponentPreview(DatePicker, { label: 'Due date', value: '2026-04-21', locale: 'en-GB', subscriptSizing: 'dynamic' }),
  field: defineComponentPreview(InputField, { label: 'Project name', value: 'Blocks library', hint: 'Shown in the workspace switcher' }),
  'field-hint': defineComponentPreview(InputField, { label: 'Reference', value: 'PR-1042', hint: 'Your public reference', hintEnd: 'Optional' }),
  'input-field': defineComponentPreview(InputField, {
    label: 'Project name',
    floatLabel: 'always',
    value: 'Blocks library',
    hint: 'Shown in the workspace switcher'
  }),
  multiselect: defineComponentPreview(MultiSelect, {
    label: 'Teams',
    subscriptSizing: 'dynamic',
    value: ['design', 'forms'],
    options: [
      { label: 'Design', value: 'design' },
      { label: 'Forms', value: 'forms' },
      { label: 'Icons', value: 'icons' }
    ]
  }),
  'range-slider': defineComponentPreview(RangeSlider, { value: [20, 80], min: 0, max: 100, discrete: true }),
  search: defineComponentPreview(SearchInput, { ariaLabel: 'Search components', placeholder: 'Search components', subscriptSizing: 'dynamic' }),
  select: defineComponentPreview(Select, {
    label: 'Color',
    value: 'accent',
    subscriptSizing: 'dynamic',
    options: [
      { label: 'Accent', value: 'accent' },
      { label: 'Primary', value: 'primary' },
      { label: 'Success', value: 'success' }
    ]
  }),
  time: defineComponentPreview(TimePicker, { label: 'Meeting time', value: '10:45', hourCycle: 24, subscriptSizing: 'dynamic' }),
  tooltip: defineComponentPreview(Tooltip, { text: 'Saves this project' })
};
