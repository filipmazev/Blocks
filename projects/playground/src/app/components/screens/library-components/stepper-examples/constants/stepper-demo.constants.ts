import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IStepDefinition, StepperMode, StepperOrientation, StepperResponsive, StepperSize, StepperVariant } from '@filip.mazev/blocks/navigation';

export const STEPPER_MODES: readonly IBxSelectOption<StepperMode>[] = [
  { label: 'Indicator', value: 'indicator' },
  { label: 'Navigation', value: 'navigation' },
  { label: 'Wizard', value: 'wizard' }
];
export const STEPPER_VARIANTS: readonly StepperVariant[] = ['steps', 'segments', 'dots', 'progress', 'cards'];
export const STEPPER_VARIANT_OPTIONS: readonly IBxSelectOption<StepperVariant>[] = STEPPER_VARIANTS.map((value) => ({ label: value, value }));
export const STEPPER_SIZES: readonly StepperSize[] = ['sm', 'md', 'lg'];
export const STEPPER_SIZE_OPTIONS: readonly IBxSelectOption<StepperSize>[] = STEPPER_SIZES.map((value) => ({ label: value, value }));
export const STEPPER_ORIENTATIONS: readonly IBxSelectOption<StepperOrientation>[] = [
  { label: 'Horizontal', value: 'horizontal' },
  { label: 'Vertical', value: 'vertical' }
];
export const STEPPER_RESPONSIVE: readonly IBxSelectOption<StepperResponsive>[] = [
  { label: 'Scroll', value: 'scroll' },
  { label: 'Vertical', value: 'vertical' },
  { label: 'Compact', value: 'compact' }
];
export const STEPPER_SECTIONS: readonly IStepDefinition[] = [
  { id: 'overview', label: 'Overview', description: 'What will ship', icon: 'file-text' },
  { id: 'access', label: 'Access', description: 'Who can use it', icon: 'users' },
  { id: 'delivery', label: 'Delivery', description: 'How it rolls out', icon: 'send' }
];
export const STEPPER_GALLERY_STEPS: readonly IStepDefinition[] = [
  { id: 'plan', label: 'Plan', completed: true },
  { id: 'build', label: 'Build' },
  { id: 'ship', label: 'Ship', optional: true }
];
