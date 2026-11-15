import type { IDemoRecipe } from '@playground/interfaces/idemo-recipe.interface';

export const DEMO_RECIPES: Readonly<Record<string, IDemoRecipe>> = {
  button: {
    template:
      '<button type="button" bx-button DEMO_BINDINGS [attr.aria-label]="args().content" (click)="onAction(\'click\', $event)">@if (args().icon; as icon) { <bx-icon [name]="icon" /> } @if (args().variant !== \'icon\') { {{ args().content }} }</button>',
    imports: { '@filip.mazev/blocks/icons': ['Icon'] },
    extras: { icon: { description: 'Optional projected Lucide icon.', editor: 'select', options: ['save', 'check', 'plus'] } },
    args: { content: 'Save changes', variant: 'filled' },
    presets: [
      { name: 'Tonal', args: { variant: 'tonal' } },
      { name: 'With icon', args: { icon: 'save' } },
      { name: 'Icon only', args: { icon: 'save', variant: 'icon' } },
      { name: 'Loading', args: { loading: true } },
      { name: 'Disabled', args: { disabled: true } }
    ]
  },
  'button-loading': {
    template: '<button type="button" bx-button DEMO_BINDINGS (click)="onAction(\'click\', $event)">{{ args().content }}</button>',
    args: { content: 'Save changes', variant: 'filled', loading: true },
    presets: [{ name: 'Ready', args: { loading: false } }]
  },
  'page-container': {
    template:
      '<bx-page-container DEMO_BINDINGS><bx-page-content>{{ args().content }}</bx-page-content><bx-page-footer>Project actions</bx-page-footer></bx-page-container>',
    imports: { '@filip.mazev/blocks/primitives': ['PageContainer', 'PageContent', 'PageFooter'] },
    args: { content: 'Your workspace', pageTitle: 'Workspace', pageDescription: 'Manage your workspace.', autoResolveTitlesFromNavigation: false }
  },
  grid: { template: '<bx-grid DEMO_BINDINGS><p>Design</p><p>Engineering</p><p>Documentation</p></bx-grid>' },
  stack: { template: '<bx-stack DEMO_BINDINGS><span>Design</span><span>Engineering</span><span>Documentation</span></bx-stack>' },
  icon: { args: { name: 'sparkles', size: 32, decorative: false, ariaLabel: 'Highlights' } },
  tag: { args: { text: 'Design', leadingIcon: 'palette' } },
  chip: {
    args: { label: 'Design', removable: true },
    presets: [
      { name: 'Selected', args: { selected: true } },
      { name: 'Readonly', args: { readOnly: true } }
    ]
  },
  divider: { args: { label: 'Continue' } },
  'progress-bar': { args: { value: 45, label: 'Upload progress' }, presets: [{ name: 'Indeterminate', args: { mode: 'indeterminate' } }] },
  alert: {
    args: { title: 'Settings saved', message: 'Your workspace is ready.', tone: 'success' },
    presets: [{ name: 'Warning', args: { tone: 'warning', title: 'Review settings' } }]
  },
  card: { args: { title: 'Project', content: 'Workspace settings', clickable: true }, presets: [{ name: 'Selected', args: { selected: true } }] },
  collapsible: { args: { title: 'Details', content: 'Project information' } },
  accordion: {
    template:
      '<bx-accordion DEMO_BINDINGS><bx-accordion-item title="Overview">Project information</bx-accordion-item><bx-accordion-item title="Details">Workspace settings</bx-accordion-item></bx-accordion>',
    imports: { '@filip.mazev/blocks/primitives': ['Accordion', 'Collapsible'] }
  },
  tabs: {
    template:
      '<bx-tabs DEMO_BINDINGS><bx-tab label="Overview" value="overview"><ng-template bxTabContent>Project overview</ng-template></bx-tab><bx-tab label="Details" value="details"><ng-template bxTabContent>Workspace settings</ng-template></bx-tab></bx-tabs>',
    imports: { '@filip.mazev/blocks/primitives': ['Tabs', 'Tab', 'TabContentDirective'] },
    args: { ariaLabel: 'Project information' },
    presets: [{ name: 'Underline', args: { variant: 'underline' } }]
  },
  stepper: {
    template:
      '<bx-stepper DEMO_BINDINGS><bx-step id="details" label="Details">Project details</bx-step><bx-step id="review" label="Review">Review your project</bx-step></bx-stepper>',
    imports: { '@filip.mazev/blocks/navigation': ['Stepper', 'Step'] }
  },
  tooltip: { args: { text: 'Changes are saved automatically.' } },
  'tooltip-directive': {
    template: '<button type="button" bx-button DEMO_BINDINGS>{{ args().content }}</button>',
    imports: { '@filip.mazev/blocks/forms': ['Button'] },
    args: { bxTooltip: 'Saves this project', content: 'Save changes' }
  },
  truncate: {
    template: '<span DEMO_BINDINGS style="display: block; max-inline-size: 16rem">{{ args().content }}</span>',
    args: { content: 'A long project name that can be truncated in a constrained container.' }
  },
  'menu-item': { args: { label: 'Open project', icon: 'external-link' } },
  menu: {
    template:
      '<bx-menu DEMO_BINDINGS><bx-menu-item label="Duplicate" icon="copy" (action)="onAction(\'duplicate\', $event)" /><bx-menu-item label="Archive" icon="archive" (action)="onAction(\'archive\', $event)" /></bx-menu>',
    imports: { '@filip.mazev/blocks/primitives': ['Menu', 'MenuItem'] }
  },
  dropdown: {
    template:
      '<button type="button" bx-button [bxDropdown]="menu" DEMO_BINDINGS>{{ args().content }}</button><ng-template #menu><bx-menu><bx-menu-item label="Save changes" (action)="onAction(\'save\', $event)" /></bx-menu></ng-template>',
    imports: { '@filip.mazev/blocks/forms': ['Button'], '@filip.mazev/blocks/primitives': ['DropdownDirective', 'Menu', 'MenuItem'] },
    exclude: ['bxDropdown'],
    args: { content: 'Project actions' }
  },
  'context-menu': {
    template:
      '<div [bxContextMenu]="menu" DEMO_BINDINGS tabindex="0">Right-click, touch and hold, or press the context-menu key here.</div><ng-template #menu><bx-menu><bx-menu-item label="Copy" (action)="onAction(\'copy\', $event)" /></bx-menu></ng-template>',
    imports: { '@filip.mazev/blocks/primitives': ['ContextMenuDirective', 'Menu', 'MenuItem'] },
    exclude: ['bxContextMenu']
  },
  popover: {
    symbol: 'PopoverDirective',
    template:
      '<button type="button" bx-button [bxPopover]="details" DEMO_BINDINGS>Project details</button><ng-template #details><bx-popover>{{ args().content }}</bx-popover></ng-template>',
    imports: { '@filip.mazev/blocks/forms': ['Button'], '@filip.mazev/blocks/primitives': ['PopoverDirective', 'Popover'] },
    exclude: ['bxPopover']
  },
  'resize-handle': {
    template:
      '<div #container style="position: relative; inline-size: 100%; min-block-size: 12rem"><div #surface [style.inline-size.px]="args().resizeValue" style="max-inline-size: 100%">{{ args().content }}<div bxResizeHandle [resizeContainer]="container" [resizeTarget]="surface" DEMO_BINDINGS></div></div></div>',
    args: { resizeValue: 240, content: 'Resize this surface' },
    exclude: ['resizeContainer', 'resizeTarget']
  },
  'side-panel': {
    template:
      '<bx-side-panel-layout style="block-size: 18rem"><bx-side-panel DEMO_BINDINGS>{{ args().content }}</bx-side-panel><p>Project content remains available beside the panel.</p></bx-side-panel-layout>',
    imports: { '@filip.mazev/blocks/primitives': ['SidePanel', 'SidePanelLayout'] },
    args: { open: true, ariaLabel: 'Project details', content: 'Workspace settings', layoutMode: 'push', width: 280 }
  },
  'infinite-scroll': {
    template:
      '<div bxInfiniteScroll DEMO_BINDINGS tabindex="0" aria-label="Scrollable example" style="max-block-size: 12rem; overflow: auto"><p>Scroll through this local content.</p><div style="block-size: 20rem"></div><p>End of content</p></div>'
  },
  'virtual-collection': {
    template:
      '<bx-virtual-collection #collection DEMO_BINDINGS [trackBy]="trackItem"><ng-template [bxVirtualItem]="collection" let-item>{{ item }}</ng-template></bx-virtual-collection>',
    imports: { '@filip.mazev/blocks/primitives': ['VirtualCollection', 'VirtualItemDirective'] },
    args: { items: ['Design', 'Engineering', 'Documentation'] },
    json: ['items'],
    exclude: ['trackBy']
  },
  'form-field': {
    template: '<bx-form-field DEMO_BINDINGS><input bxInput aria-label="Project name" /></bx-form-field>',
    imports: { '@filip.mazev/blocks/forms': ['FormField', 'NativeControlDirective'] },
    args: { label: 'Project name' }
  },
  'native-control': {
    template: '<bx-form-field label="Notes"><textarea bxInput DEMO_BINDINGS></textarea></bx-form-field>',
    imports: { '@filip.mazev/blocks/forms': ['NativeControlDirective', 'FormField'] },
    args: { label: 'Notes' }
  },
  'input-field': {
    args: { label: 'Project name', value: 'Blocks workspace' },
    json: ['value'],
    presets: [
      { name: 'Readonly', args: { readOnly: true } },
      { name: 'Disabled', args: { disabled: true } }
    ]
  },
  'search-input': { args: { label: 'Find a component' } },
  checkbox: { args: { label: 'Receive updates' } },
  radio: { args: { label: 'Weekly updates', value: 'weekly' }, json: ['value'] },
  'radio-group': {
    template: '<bx-radio-group DEMO_BINDINGS><bx-radio label="Weekly" value="weekly" /><bx-radio label="Monthly" value="monthly" /></bx-radio-group>',
    imports: { '@filip.mazev/blocks/forms': ['RadioGroup', 'Radio'] },
    args: { label: 'Update frequency', value: 'weekly' },
    json: ['value']
  },
  'slide-toggle': { args: { label: 'Enable notifications' } },
  slider: {
    template:
      '<input type="range" bxSlider DEMO_BINDINGS [min]="args().min" [max]="args().max" [step]="args().step" [value]="args().value" (input)="onNativeValue($event)" aria-label="Volume" />',
    extras: {
      min: { description: 'Native range minimum.', editor: 'number', defaultValue: 0 },
      max: { description: 'Native range maximum.', editor: 'number', defaultValue: 100 },
      step: { description: 'Native range increment.', editor: 'number', defaultValue: 1 },
      value: { description: 'Current native range value.', editor: 'number', defaultValue: 50 }
    },
    constraints: {
      min: { maximumProperty: 'value' },
      max: { minimumProperty: 'value' },
      value: { minimumProperty: 'min', maximumProperty: 'max' }
    }
  },
  select: {
    args: {
      label: 'Destination',
      options: [
        { label: 'Skopje', value: 'skopje' },
        { label: 'Ohrid', value: 'ohrid' },
        { label: 'Bitola', value: 'bitola' }
      ],
      value: 'skopje'
    },
    json: ['options', 'value'],
    presets: [
      { name: 'Searchable', args: { isSearchable: true } },
      { name: 'Readonly', args: { readOnly: true } },
      { name: 'Loading', args: { loading: true } }
    ]
  },
  'multi-select': {
    args: {
      label: 'Destinations',
      options: [
        { label: 'Skopje', value: 'skopje' },
        { label: 'Ohrid', value: 'ohrid' },
        { label: 'Bitola', value: 'bitola' }
      ],
      value: ['skopje']
    },
    json: ['options', 'value'],
    presets: [
      { name: 'Searchable', args: { isSearchable: true } },
      { name: 'Readonly', args: { readOnly: true } }
    ]
  },
  autocomplete: {
    args: {
      label: 'Destination',
      options: [
        { label: 'Skopje', value: 'skopje' },
        { label: 'Ohrid', value: 'ohrid' }
      ]
    },
    json: ['options', 'value']
  },
  'signal-forms': { template: '<bx-input-field DEMO_BINDINGS />', args: { label: 'Project name', value: 'Blocks workspace' }, json: ['value'] },
  hint: {
    template:
      '<bx-form-field label="Project name"><input bxInput aria-label="Project name" /><bx-hint DEMO_BINDINGS>{{ args().content }}</bx-hint></bx-form-field>',
    imports: { '@filip.mazev/blocks/forms': ['BxHint', 'FormField', 'NativeControlDirective'] },
    args: { content: 'Use a descriptive project name.' }
  },
  error: {
    template:
      '<bx-form-field label="Project name"><input bxInput aria-label="Project name" /><bx-error DEMO_BINDINGS>{{ args().content }}</bx-error></bx-form-field>',
    imports: { '@filip.mazev/blocks/forms': ['BxError', 'FormField', 'NativeControlDirective'] },
    args: { content: 'Enter a project name.' }
  },
  prefix: {
    template: '<bx-input-field label="Amount" type="number"><span bxPrefix DEMO_BINDINGS>{{ args().content }}</span></bx-input-field>',
    imports: { '@filip.mazev/blocks/forms': ['PrefixDirective', 'InputField'] },
    args: { content: '$' }
  },
  suffix: {
    template: '<bx-input-field label="Weight" type="number"><span bxSuffix DEMO_BINDINGS>{{ args().content }}</span></bx-input-field>',
    imports: { '@filip.mazev/blocks/forms': ['SuffixDirective', 'InputField'] },
    args: { content: 'kg' }
  },
  'load-more': {
    template: '<div bxLoadMore DEMO_BINDINGS style="padding: 1rem"><p>Loaded content</p></div>',
    args: { loadMoreHasMore: true },
    presets: [
      { name: 'Loading', args: { loadMoreLoading: true } },
      { name: 'Exhausted', args: { loadMoreHasMore: false } }
    ]
  },
  'top-nav': { json: ['config'], args: { config: { ariaLabel: 'Project navigation' } } },
  'side-nav': { json: ['config'], args: { config: { ariaLabel: 'Project navigation' } } },
  surface: { template: '<section bxSurface DEMO_BINDINGS style="padding: 1rem">{{ args().content }}</section>' },
  'modal-banner': { args: { header: { text: 'Project settings' }, showCloseButton: true }, json: ['header'] },
  'bottom-drawer': { args: { embedded: true, modal: false, open: true, title: 'Project details', content: 'Workspace settings' } },
  'modal-backdrop': { use: 'modal-centered' },
  'modal-header': { use: 'modal-centered' },
  'modal-footer': { use: 'modal-centered' },
  'modal-core': { use: 'modal-centered' },
  'modal-centered': {
    adapter: 'modal',
    args: { layout: 'center', breakpoints: {} },
    json: ['breakpoints'],
    presets: [
      { name: 'Side panel', args: { layout: 'right' } },
      { name: 'Bottom sheet', args: { layout: 'bottom-sheet' } },
      { name: 'Responsive', args: { breakpoints: { sm: 'bottom-sheet', xl: 'center' } } },
      { name: 'Headerless', args: { headerText: '' } },
      { name: 'Without guard', args: { hasConfirmCloseGuard: false } }
    ]
  },
  'modal-side': { use: 'modal-centered', args: { layout: 'right' } },
  'modal-bottom-sheet': { use: 'modal-centered', args: { layout: 'bottom-sheet' } },
  'toast-core': { use: 'simple-toast' },
  'simple-toast': {
    adapter: 'toast',
    constraints: { durationInMs: { minimum: 0 }, maxOpened: { minimum: 1, maximum: 10, integer: true } },
    presets: [
      { name: 'Success', args: { type: 'success', icon: 'check' } },
      { name: 'Warning', args: { type: 'warn', icon: 'triangle-alert' } },
      { name: 'Error', args: { type: 'danger', icon: 'circle-alert' } },
      { name: 'Persistent', args: { durationInMs: 0 } },
      { name: 'Loading', args: { loading: true, durationInMs: 0, icon: 'upload' } }
    ]
  }
};
