import type { InputSignal, Signal } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { INavigationTreeGroup, ISideNavConfig, ITopNavConfig } from '@filip.mazev/blocks/navigation';
import type { ISimpleToastData } from '@filip.mazev/blocks/toastr';
import type { IComponentPreviewRecipe } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-preview-recipe.interface';
import type { ComponentPreviewKind } from '@playground/components/screens/library-components/component-demo/types/component-preview.types';

import { BxA11yService, uuidv4 } from '@filip.mazev/blocks/core';
import {
  Button,
  Checkbox,
  CheckboxIndicator,
  FormField,
  InputField,
  LoadMoreDirective,
  NativeControlDirective,
  PrefixDirective,
  Radio,
  RadioGroup,
  SliderDirective,
  SlideToggle,
  SuffixDirective
} from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalBackdrop, ModalBanner, ModalBottomSheet, ModalCentered, ModalConfig, ModalSide } from '@filip.mazev/blocks/modal';
import { SideNav, Stepper, TopNav, TopNavBrandDirective } from '@filip.mazev/blocks/navigation';
import {
  Accordion,
  BottomDrawer,
  Card,
  Chip,
  Collapsible,
  Container,
  ContextMenuDirective,
  Divider,
  DropdownDirective,
  Grid,
  InfiniteScrollDirective,
  Menu,
  MenuItem,
  PageContainer,
  PageContent,
  PageFooter,
  PageHeader,
  Popover,
  ProgressBar,
  ResizeHandleDirective,
  SidePanel,
  SidePanelHeaderDirective,
  SidePanelLayout,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Tag,
  Tooltip,
  TooltipDirective,
  TruncateDirective,
  VirtualCollection,
  VirtualItemDirective,
  VirtualTrackBy
} from '@filip.mazev/blocks/primitives';

import { PreviewFrame } from '@playground/components/screens/library-components/component-demo/components/preview-frame/preview-frame';
import { SurfacePreview } from '@playground/components/screens/library-components/component-demo/components/surface-preview/surface-preview';
import { ToastPreview } from '@playground/components/screens/library-components/component-demo/components/toast-preview/toast-preview';
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
    LoadMoreDirective,
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
    BottomDrawer,
    Container,
    ContextMenuDirective,
    DropdownDirective,
    Grid,
    InfiniteScrollDirective,
    PageContainer,
    PageContent,
    PageFooter,
    PageHeader,
    SidePanel,
    SidePanelHeaderDirective,
    SidePanelLayout,
    Skeleton,
    Stack,
    VirtualCollection,
    VirtualItemDirective,
    Card,
    Chip,
    Collapsible,
    Divider,
    Menu,
    MenuItem,
    Popover,
    ProgressBar,
    ResizeHandleDirective,
    Tag,
    Tabs,
    Tab,
    Tooltip,
    TooltipDirective,
    TruncateDirective,
    ModalBackdrop,
    ModalBanner,
    ModalBottomSheet,
    ModalCentered,
    ModalSide,
    SideNav,
    TopNav,
    TopNavBrandDirective,
    ToastPreview,
    PreviewFrame,
    SurfacePreview
  ],
  templateUrl: './component-preview.html',
  styleUrl: './component-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BxA11yService, useValue: COMPONENT_PREVIEW_A11Y }],
  host: { 'aria-hidden': 'true', inert: '', '[attr.data-preview-kind]': 'kind()', '[class.is-edge-preview]': 'edgeToEdge()' }
})
export class ComponentPreview {
  protected readonly resizePreviewWidth: number = 210;

  protected readonly edgeToEdge: Signal<boolean> = computed(() =>
    ['drawer', 'modal-backdrop', 'modal-side', 'modal-sheet', 'panel', 'resize'].includes(this.kind())
  );

  protected readonly savedToast: ISimpleToastData = {
    title: 'Changes saved',
    message: 'Your workspace is up to date.',
    type: 'success',
    icon: { name: 'circle-check' }
  };
  protected readonly uploadToast: ISimpleToastData = { title: 'Uploading assets', message: 'Keep working while your files sync.', type: 'info', loading: true };
  protected readonly connectionToast: ISimpleToastData = { title: null, message: 'Connection restored', type: 'info', icon: { name: 'wifi' } };
  protected readonly gallerySteps: typeof STEPPER_GALLERY_STEPS = STEPPER_GALLERY_STEPS;
  protected readonly previewId: string = `catalog-${uuidv4()}`;
  protected readonly sampleRows: readonly string[] = ['Design system', 'Form controls', 'Navigation', 'Overlays', 'Layouts', 'Accessibility'];
  protected readonly trackRow: VirtualTrackBy<string> = (row) => row;
  protected readonly sideNavConfig: ISideNavConfig = {
    position: 'inline',
    mobile: false,
    collapsible: false,
    searchable: false,
    width: '100%',
    persistenceKey: ''
  };
  protected readonly topNavConfig: ITopNavConfig = { position: 'inline', compact: false, searchable: false, showItemIcons: false };
  protected readonly navigationGroups: INavigationTreeGroup[] = [
    {
      id: 'preview',
      title: '',
      items: [
        { id: 'home', route: '/', label: 'Home', icon: { name: 'house' }, visible: true },
        { id: 'library', route: '/components', label: 'Library', icon: { name: 'layers' }, visible: true },
        { id: 'settings', route: '/appearance', label: 'Settings', icon: { name: 'settings-2' }, visible: true }
      ]
    }
  ];
  protected readonly modalConfig: ModalConfig<unknown, unknown> = new ModalConfig({
    header: { text: 'Workspace access', icon: { name: 'users' } },
    style: { animate: false, hasBackdrop: false, wrapperStyles: 'inline-size: 22rem; max-inline-size: 100%;' }
  });
  protected readonly confirmConfig: ModalConfig<unknown, unknown> = new ModalConfig({
    header: { text: 'Discard draft?', icon: { name: 'triangle-alert', color: 'text-danger' } },
    style: { animate: false, hasBackdrop: false, wrapperStyles: 'inline-size: 21rem; max-inline-size: 100%;' }
  });
  protected readonly sideConfig: ModalConfig<unknown, unknown> = new ModalConfig({
    header: { text: 'Member details', icon: { name: 'user' } },
    style: { animate: false, hasBackdrop: false, wrapperStyles: 'inline-size: 19rem; max-inline-size: 100%;' }
  });
  protected readonly sheetConfig: ModalConfig<unknown, unknown> = new ModalConfig({
    header: { text: 'Quick actions', icon: { name: 'ellipsis' } },
    style: { animate: false, hasBackdrop: false, wrapperStyles: '--bx-drawer-min-height: 0; --bx-drawer-footer-background: transparent; inline-size: 100%;' }
  });

  protected readonly recipe: Signal<IComponentPreviewRecipe | undefined> = computed(() => COMPONENT_PREVIEW_RECIPES[this.kind()]);

  /** Required recipe or vignette key generated from the preview registrations. */
  public readonly kind: InputSignal<ComponentPreviewKind> = input.required<ComponentPreviewKind>();
}
