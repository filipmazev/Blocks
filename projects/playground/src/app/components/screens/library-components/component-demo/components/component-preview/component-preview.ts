import type { InputSignal, Signal } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { IComponentPreviewRecipe } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-preview-recipe.interface';
import type { ComponentPreviewKind } from '@playground/components/screens/library-components/component-demo/types/component-preview.types';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import {
  Button,
  Checkbox,
  CheckboxIndicator,
  FormField,
  InputField,
  NativeControlDirective,
  PrefixDirective,
  Radio,
  RadioGroup,
  SliderDirective,
  SlideToggle,
  SuffixDirective
} from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Stepper } from '@filip.mazev/blocks/navigation';
import {
  Accordion,
  Card,
  Chip,
  Collapsible,
  Divider,
  Menu,
  MenuItem,
  Popover,
  ProgressBar,
  Skeleton,
  Tab,
  Tabs,
  Tag,
  Tooltip,
  TruncateDirective
} from '@filip.mazev/blocks/primitives';

import { COMPONENT_PREVIEW_A11Y } from '@playground/components/screens/library-components/component-demo/constants/component-preview-a11y.constants';
import { COMPONENT_PREVIEW_RECIPES } from '@playground/components/screens/library-components/component-demo/constants/component-preview-recipes.constants';
import { STEPPER_GALLERY_STEPS } from '@playground/components/screens/library-components/stepper-examples/constants/stepper-demo.constants';

@Component({
  selector: 'app-component-preview',
  imports: [
    NgComponentOutlet,
    Button,
    Checkbox,
    CheckboxIndicator,
    FormField,
    InputField,
    NativeControlDirective,
    PrefixDirective,
    Radio,
    RadioGroup,
    SliderDirective,
    SlideToggle,
    SuffixDirective,
    Icon,
    Stepper,
    Accordion,
    Card,
    Chip,
    Collapsible,
    Divider,
    Menu,
    MenuItem,
    Popover,
    ProgressBar,
    Skeleton,
    Tag,
    BxSurfaceDirective,
    Tabs,
    Tab,
    Tooltip,
    TruncateDirective
  ],
  templateUrl: './component-preview.html',
  styleUrl: './component-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BxA11yService, useValue: COMPONENT_PREVIEW_A11Y }],
  host: { 'aria-hidden': 'true', inert: '', '[attr.data-preview-kind]': 'kind()' }
})
export class ComponentPreview {
  protected readonly gallerySteps: typeof STEPPER_GALLERY_STEPS = STEPPER_GALLERY_STEPS;

  protected readonly recipe: Signal<IComponentPreviewRecipe | undefined> = computed(() => COMPONENT_PREVIEW_RECIPES[this.kind()]);

  /** Required recipe or vignette key generated from the preview registrations. */
  public readonly kind: InputSignal<ComponentPreviewKind> = input.required<ComponentPreviewKind>();
}
