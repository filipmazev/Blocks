import type { IDemoRecipe } from '@playground/interfaces/idemo-recipe.interface';

export const DEMO_RECIPES: Readonly<Record<string, IDemoRecipe>> = {
  button: {
    template:
      '<button type="button" bx-button DEMO_BINDINGS [attr.aria-label]="args().content" (click)="onAction(\'click\', $event)">@if (args().icon; as icon) { <bx-icon [name]="icon" /> } @if (args().variant !== \'icon\' && args().shape !== \'capsule\') { {{ args().content }} }</button>',
    imports: { '@filip.mazev/blocks/icons': ['Icon'] },
    extras: { icon: { description: 'Optional projected Lucide icon.', editor: 'select', options: ['save', 'check', 'plus'] } },
    args: { content: 'Save changes', variant: 'filled' },
    presets: [
      { name: 'Tonal', args: { variant: 'tonal' } },
      { name: 'With icon', args: { icon: 'save' } },
      { name: 'Icon only', args: { icon: 'save', variant: 'icon' } },
      { name: 'Capsule', args: { icon: 'save', variant: 'filled', shape: 'capsule' } },
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
    json: ['breadcrumbConfig', 'breadcrumbs'],
    configFields: { breadcrumbConfig: 'Breadcrumb overflow' },
    args: {
      breadcrumbConfig: { maxVisibleItems: 3 },
      content: 'Your workspace',
      pageTitle: 'Workspace',
      pageDescription: 'Manage your workspace.',
      autoResolveTitlesFromNavigation: false
    }
  },
  grid: { template: '<bx-grid DEMO_BINDINGS><p>Design</p><p>Engineering</p><p>Documentation</p></bx-grid>' },
  stack: { template: '<bx-stack DEMO_BINDINGS><span>Design</span><span>Engineering</span><span>Documentation</span></bx-stack>' },
  icon: { args: { bgColor: 'auto', name: 'sparkles', size: 32, decorative: false, ariaLabel: 'Highlights' } },
  tag: { args: { text: 'Design', leadingIcon: 'palette' } },
  chip: {
    args: { label: 'Design', removable: true },
    presets: [
      { name: 'Selected', args: { selected: true } },
      { name: 'Readonly', args: { readOnly: true } }
    ]
  },
  divider: { args: { label: 'Continue' } },
  'loading-indicator': {
    template:
      '<bx-loading-indicator DEMO_BINDINGS><bx-tag text="Workspace sync" leadingIcon="cloud-upload" /> <span>{{ args().content }}</span></bx-loading-indicator>',
    imports: { '@filip.mazev/blocks/primitives': ['Tag'] },
    args: { content: 'Uploading project assets' }
  },
  'progress-bar': { args: { value: 45, label: 'Upload progress' }, presets: [{ name: 'Indeterminate', args: { mode: 'indeterminate' } }] },
  alert: {
    args: { emissionIntensity: 0.2, title: 'Settings saved', message: 'Your workspace is ready.', tone: 'success' },
    presets: [{ name: 'Warning', args: { tone: 'warning', title: 'Review settings' } }]
  },
  card: { args: { title: 'Project', content: 'Workspace settings', clickable: true }, presets: [{ name: 'Selected', args: { selected: true } }] },
  collapsible: { args: { title: 'Details', content: 'Project information' } },
  accordion: {
    template:
      '<bx-accordion DEMO_BINDINGS><bx-accordion-item FIRST_BINDINGS>Project information</bx-accordion-item><bx-accordion-item SECOND_BINDINGS>Workspace settings</bx-accordion-item></bx-accordion>',
    imports: { '@filip.mazev/blocks/primitives': ['Accordion', 'Collapsible'] },
    children: {
      first: { symbol: 'Collapsible', label: 'First item', args: { title: 'Overview' } },
      second: { symbol: 'Collapsible', label: 'Second item', args: { title: 'Details' } }
    }
  },
  tabs: {
    template:
      '<bx-tabs DEMO_BINDINGS><bx-tab FIRST_BINDINGS><ng-template bxTabContent>Project overview</ng-template></bx-tab><bx-tab SECOND_BINDINGS><ng-template bxTabContent>Workspace settings</ng-template></bx-tab></bx-tabs>',
    imports: { '@filip.mazev/blocks/primitives': ['Tabs', 'Tab', 'TabContentDirective'] },
    children: {
      first: { symbol: 'Tab', label: 'First tab', args: { label: 'Overview', value: 'overview' } },
      second: { symbol: 'Tab', label: 'Second tab', args: { label: 'Details', value: 'details' } }
    },
    args: { ariaLabel: 'Project information' },
    presets: [{ name: 'Underline', args: { variant: 'underline' } }]
  },
  stepper: {
    template:
      '<bx-stepper DEMO_BINDINGS><bx-step FIRST_BINDINGS><p>{{ args().content }}</p></bx-step><bx-step SECOND_BINDINGS><p>Review your project</p></bx-step></bx-stepper>',
    imports: { '@filip.mazev/blocks/navigation': ['Stepper', 'Step'] },
    args: { mode: 'wizard', content: 'Project details' },
    children: {
      first: { symbol: 'Step', label: 'First step', args: { id: 'details', label: 'Details' } },
      second: { symbol: 'Step', label: 'Second step', args: { id: 'review', label: 'Review' } }
    }
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
  'swipe-actions': {
    eventHandlers: { swipeAction: "onAction('swipeAction', $event); $event.action.id === 'read' && onAction('rowUnreadChange', !args().rowUnread)" },
    exclude: ['swipeDismissFocus'],
    json: ['leftSwipeActions', 'rightSwipeActions', 'swipeFullAction'],
    args: {
      leftSwipeActions: [{ id: 'delete', label: 'Delete', icon: 'trash-2', role: 'destructive' }],
      rightSwipeActions: [
        { id: 'read', label: 'Read / unread', icon: 'mail-open', color: 'info' },
        { id: 'remind', label: 'Remind me', icon: 'clock-3', color: 'accent' }
      ],
      swipeFullAction: {
        enabled: true,
        resistance: 8,
        resistancePlateau: 0.15,
        resistanceEnd: 0.9,
        armThreshold: 0.65,
        commitThreshold: 0.78,
        readyLabel: 'Release to activate'
      }
    },
    configFields: { swipeFullAction: 'Full-swipe activation' },
    constraints: {
      'swipeFullAction.resistance': { minimum: 1, maximum: 12 },
      'swipeFullAction.resistancePlateau': { minimum: 0, maximum: 0.35 },
      'swipeFullAction.resistanceEnd': { minimum: 0.01, maximum: 1 },
      'swipeFullAction.armThreshold': { minimum: 0, maximum: 0.95 },
      'swipeFullAction.commitThreshold': { minimum: 0.01, maximum: 1 },
      swipeTooltipDwell: { minimum: 0 },
      rowWidth: { minimum: 160, maximum: 1600 }
    },
    extras: {
      rowLabel: { description: 'Message sender or title.', editor: 'text', defaultValue: 'Design review' },
      rowSubject: { description: 'Message subject shown on the second line.', editor: 'text', defaultValue: 'A few details for your next iteration' },
      rowPreview: { description: 'Single-line message preview.', editor: 'text', defaultValue: 'Review the latest changes when you have a moment.' },
      rowUnread: { model: true, description: 'Unread dot and message status.', editor: 'boolean', defaultValue: true },
      rowWidth: { description: 'Row width in CSS pixels, constrained to the available preview width.', editor: 'number', defaultValue: 480 },
      direction: { description: 'Text direction for the composed row and action captions.', editor: 'select', options: ['ltr', 'rtl'], defaultValue: 'ltr' }
    },
    imports: { '@filip.mazev/blocks/forms': ['Button'] },
    sharedView: {
      template: 'projects/playground/src/app/components/shared/swipe-message-row/swipe-message-row.html',
      styles: 'projects/playground/src/app/components/shared/swipe-message-row/swipe-message-row.scss',
      hostSelector: '.mail-row',
      replacements: {
        'label()': 'args().rowLabel',
        'subject()': 'args().rowSubject',
        'preview()': 'args().rowPreview',
        'unread()': 'args().rowUnread',
        'disabled()': 'args().swipeDisabled',
        'loading()': 'args().swipeLoading',
        statusId: "'swipe-preview-status'",
        'open.emit($event)': "onAction('rowOpen', $event)"
      }
    },
    template: `<div #swipeRow="bxSwipeActions" bxSwipeActions class="mail-row" [swipeDismissFocus]="restoreFocus" DEMO_BINDINGS [attr.dir]="args().direction" [style.inline-size.px]="args().rowWidth">SHARED_VIEW</div><span #restoreFocus><button bx-button type="button" variant="tonal" (click)="swipeRow.restoreSwipeRow()">Restore row</button></span>`
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
    styles:
      '.resize-surface { position: relative; min-block-size: 12rem; padding: 1rem; box-sizing: border-box; border: 1px solid var(--bx-border-default); border-radius: var(--bx-radius-lg); background: var(--bx-bg-surface-alt); } .demo-resize-grip { position: absolute; inset-block: 0; inset-inline-end: 0; inline-size: 1.5rem; cursor: ew-resize; } .demo-resize-grip::after { content: ""; position: absolute; inset-inline-start: 50%; inset-block-start: 50%; inline-size: 4px; block-size: 2rem; border-radius: 2px; background: var(--bx-border-strong); }',
    template:
      '<div #container class="resize-scene" style="position: relative; inline-size: 100%; min-block-size: 12rem"><div #surface [style.inline-size.px]="args().resizeValue" class="resize-surface" style="position: relative; min-block-size: 12rem; max-inline-size: 100%">{{ args().content }}<div class="demo-resize-grip" bxResizeHandle [resizeContainer]="container" [resizeTarget]="surface" DEMO_BINDINGS></div></div></div>',
    args: { resizeValue: 240, resizeEdge: 'right', content: 'Resize this surface' },
    exclude: ['resizeContainer', 'resizeTarget']
  },
  'side-panel': {
    styles: '.panel-scene-content { display: grid; gap: 1rem; padding: 1rem; }',
    template:
      '<bx-side-panel-layout style="block-size: 26rem"><bx-side-panel DEMO_BINDINGS>{{ args().content }}</bx-side-panel><div class="panel-scene-content"><button type="button" bx-button variant="tonal" (click)="onAction(\'openChange\', true)"><bx-icon name="panel-right-open" />Open panel</button><p>Project content remains available beside the panel.</p></div></bx-side-panel-layout>',
    imports: {
      '@filip.mazev/blocks/primitives': ['SidePanel', 'SidePanelLayout'],
      '@filip.mazev/blocks/forms': ['Button'],
      '@filip.mazev/blocks/icons': ['Icon']
    },
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
      step: { description: 'Native range increment.', editor: 'number', defaultValue: 10 },
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
  'signal-forms': {
    styles: '.signal-form-scene { display: grid; gap: 1rem; inline-size: min(100%, 32rem); }',
    template:
      '<form class="signal-form-scene"><bx-input-field DEMO_BINDINGS [formField]="projectForm.project" /><bx-input-field label="Email" type="email" [formField]="projectForm.email" /><bx-input-field label="Project notes" [multiline]="true" [formField]="projectForm.notes" /><bx-tag [text]="projectForm().valid() ? \'Ready to submit\' : \'Needs attention\'" /><button type="button" bx-button variant="filled" [disabled]="!projectForm().valid()" (click)="onAction(\'submit\', formModel())">Save project</button></form>',
    imports: {
      '@angular/forms/signals': ['FormField', 'form', 'required', 'email'],
      '@filip.mazev/blocks/primitives': ['Tag'],
      '@filip.mazev/blocks/forms': ['InputField', 'Button']
    },
    args: { label: 'Project name' },
    exclude: ['value', 'min', 'max', 'minLength', 'maxLength', 'name', 'invalid', 'pending', 'touched', 'dirty', 'disabled', 'readonly', 'hidden', 'required']
  },
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
  breadcrumbs: {
    json: ['items', 'breadcrumbConfig'],
    configFields: { breadcrumbConfig: 'Breadcrumb overflow' },
    args: { breadcrumbConfig: { maxVisibleItems: 3 } }
  },
  'top-nav': {
    json: ['config', 'groups'],
    configFields: { config: 'Top navigation' },
    args: {
      config: { ariaLabel: 'Project navigation', position: 'inline', compact: false },
      groups: [
        {
          id: 'project',
          title: 'Workspace',
          items: [
            { id: 'overview', visible: true, label: 'Overview', icon: { name: 'house' }, route: '/components/top-nav/overview' },
            { id: 'settings', visible: true, label: 'Settings', icon: { name: 'settings' }, route: '/components/top-nav/settings' }
          ]
        }
      ]
    }
  },
  'side-nav': {
    json: ['config', 'groups'],
    configFields: { config: 'Side navigation' },
    args: {
      config: { ariaLabel: 'Project navigation', position: 'inline', mobile: false, persistenceKey: '' },
      groups: [
        {
          id: 'project',
          title: 'Workspace',
          items: [
            { id: 'overview', visible: true, label: 'Overview', icon: { name: 'house' }, route: '/components/side-nav/overview' },
            { id: 'settings', visible: true, label: 'Settings', icon: { name: 'settings' }, route: '/components/side-nav/settings' }
          ]
        }
      ]
    }
  },
  surface: {
    styles:
      '.surface-scene { position: relative; display: grid; gap: 1rem; padding: 1.5rem; isolation: isolate; background: repeating-linear-gradient(35deg, var(--bx-bg-surface-alt) 0 2rem, var(--bx-bg-element) 2rem 4rem); } .surface-art { position: absolute; inset: 25% 10%; display: flex; justify-content: space-between; color: var(--bx-text-accent); z-index: -1; } .surface-sample { display: grid; gap: 1rem; padding: 1.5rem; border: 1px solid var(--bx-border-default); background: color-mix(in srgb, var(--bx-bg-surface) 55%, transparent); }',
    template:
      '<div class="surface-scene"><div class="surface-art" aria-hidden="true"><bx-icon name="orbit" size="100" /><bx-icon name="sparkles" size="56" /></div><bx-alert class="surface-light" title="Live light source" message="This alert illuminates the neighboring material." [emissive]="true" [emissionIntensity]="0.8" /><section class="surface-sample" bxSurface DEMO_BINDINGS><h3>{{ args().content }}</h3><p>Move over this surface to inspect light, opacity and refraction.</p><button type="button" bx-button variant="tonal">Inspect material</button></section></div>',
    imports: { '@filip.mazev/blocks/primitives': ['Alert'], '@filip.mazev/blocks/forms': ['Button'], '@filip.mazev/blocks/icons': ['Icon'] },
    args: { content: 'Workspace material', bxSurfaceTranslucency: 0.4, bxSurfaceGlassiness: 'auto' }
  },
  'modal-banner': { args: { header: { text: 'Project settings' }, showCloseButton: true }, json: ['header'] },
  'bottom-drawer': {
    template:
      '<div class="drawer-scene"><button type="button" bx-button variant="tonal" (click)="onAction(\'openChange\', true)"><bx-icon name="panel-bottom-open" />Open drawer</button><bx-bottom-drawer DEMO_BINDINGS>{{ args().content }}</bx-bottom-drawer></div>',
    imports: { '@filip.mazev/blocks/forms': ['Button'], '@filip.mazev/blocks/icons': ['Icon'] },
    exclude: ['offset'],
    args: { embedded: true, modal: false, open: true, title: 'Project details', content: 'Workspace settings' }
  },
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
